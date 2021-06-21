import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Container, Error } from './styles';

interface InputProps {
  name: string;
}

const EditorQuill: React.FC<InputProps> = ({ name }) => {
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

  const placeholder = 'Escreva o texo aqui...';

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

  const editorRef = useRef<ReactQuill>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [texthtml, setTexthtml] = useState('');

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!editorRef.current?.value);
    // console.log(editorRef);
  }, []);

  useEffect(() => {
    setTexthtml(defaultValue);
    registerField({
      name: fieldName,
      ref: editorRef.current,
      // path: 'value',
      getValue: (ref) => ref.value,
      setValue: (ref: any, value: string) => {
        // ref.value = value;
        setTexthtml(value);
      },
    });
  }, [fieldName, registerField, defaultValue]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      <ReactQuill
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        modules={modules}
        formats={formats}
        value={texthtml}
        onChange={setTexthtml}
        placeholder={placeholder}
        ref={editorRef}
        theme="snow"
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={16} />
        </Error>
      )}
    </Container>
  );
};

export default EditorQuill;
