import React, { useRef, useEffect } from 'react';
import { OptionTypeBase, Props as SelectProps } from 'react-select';

import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, SelectCustom, Error } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const Select: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.id;
      },
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      clearValue: (ref) => {
        ref.state.clearValue();
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      <Container>
        <SelectCustom
          classNamePrefix="react-select"
          defaultValue={defaultValue}
          ref={selectRef}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={16} />
          </Error>
        )}
      </Container>
    </>
  );
};

export default Select;
