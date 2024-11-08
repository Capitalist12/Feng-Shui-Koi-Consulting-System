import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function RichTextEditor({setValue, clearEditor}) {
  const editorRef = useRef(null);


  React.useEffect(() => {
    if (clearEditor && editorRef.current) {
      editorRef.current.setContent(""); // Clear editor content
    }
  }, [clearEditor]);

  return (
    <div>
      <Editor
        apiKey="3yye04t73aozbs17skptxa1tshzkkotynxyill2cssgfruqk" // Replace with your API key or remove this line if not needed
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
            selector: 'textarea#open-source-plugins',
            plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
            editimage_cors_hosts: ['picsum.photos'],
            menubar: 'file edit view insert format tools table help',
            toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
            autosave_ask_before_unload: true,
            autosave_interval: '30s',
            autosave_prefix: '{path}{query}-{id}-',
            autosave_restore_when_empty: false,
            autosave_retention: '2m',
            image_advtab: true,
        }}
        onEditorChange={(content) => setValue(content)}
      />
    </div>
  );
}

export default RichTextEditor;
