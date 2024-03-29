import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}

const RadioInput: React.FC<Props> = ({ name, options, ...rest }: Props) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) =>
        refs.find((ref) => ref.checked)?.value || '',
      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <>
      {/* defaultValue && options.find(option => option.value === defaultValue) */}
      <Container>
        {options.map((option) => (
          <label htmlFor={option.id} key={option.id}>
            <input
              ref={(ref) => inputRefs.current.push(ref as HTMLInputElement)}
              id={option.id}
              type="radio"
              name={name}
              defaultChecked
              value={option.value}
              {...rest}
            />
            {option.label}
          </label>
        ))}
      </Container>
    </>
  );
};

export default RadioInput;
