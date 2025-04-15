"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';

const EditorNoSSR = dynamic(
  () => import('@tinymce/tinymce-react').then(mod => mod.Editor),
  { ssr: false }
);

export default function App() {
  const [editorInstance, setEditorInstance] = useState<any>(null);
  const [content, setContent] = useState<string>('');

  const log = () => {
    if (editorInstance) {
      const html = editorInstance.getContent();
      console.log(html);
      setContent(html);
    }
  };

  return (
    <>
      <EditorNoSSR
        apiKey="your api key here"
        onInit={(_evt, editor) => setEditorInstance(editor)}
        onChange={(e) => {setContent(e.target.value)}}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar:
            'undo redo | blocks | bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log} className="my-4 p-2 rounded-xl text-white cursor-pointer bg-blue-500 hover:bg-blue-600">
        Log editor content
      </button>
    </>
  );
}
