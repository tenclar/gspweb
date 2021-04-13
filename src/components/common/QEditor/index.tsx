import React, { useEffect, useState, useRef } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps {
  name: string;
}
const QEditor: React.FC<InputProps> = ({ name, ...rest }) => {
  const [texto, seTexto] = useState(String);
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ align: [] }],

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],

      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link'],
      [{ color: [] }, { background: [] }],

      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const placeholder = 'Compose an epic...';

  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'list',
    'indent',
    'size',
    'header',
    'link',
    /*  'image', */
    /* 'video', */
    'color',
    'background',
    'clean',
  ];
  const { quill, quillRef } = useQuill({ modules, formats });
  const editorRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  // console.log(quill?.root.innerHTML);
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h1>React Hook for Quill!</h1>');
      quill.on('text-change', () => {
        seTexto(quill?.root.innerHTML);
      });
    }
  }, [quill]);
  return (
    <>
      <Container>
        <div
          id={fieldName}
          ref={quillRef}
          style={{ height: '260px' }}
          placeholder={placeholder}
        />
      </Container>
      {JSON.stringify(texto)}
    </>
  );
};

export default QEditor;
