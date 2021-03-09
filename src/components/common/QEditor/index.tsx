import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

import { Container } from './styles';

const QEditor: React.FC = () => {
  const [texto, seTexto] = useState(String);
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ align: [] }],

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],

      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'video'],
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
    'video',
    'color',
    'background',
    'clean',
  ];
  const { quill, quillRef } = useQuill({ modules, formats });
  // console.log(quill?.root.innerHTML);
  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        seTexto(quill?.root.innerHTML);
      });
    }
  }, [quill]);
  return (
    <>
      <Container>
        <div
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
