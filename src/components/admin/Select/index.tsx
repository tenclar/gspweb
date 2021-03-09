import React, { useRef, useEffect, useState } from 'react';
import { OptionTypeBase, Props as SelectProps } from 'react-select';

import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { OptionProps } from 'react-select/src/types';
import { Container, SelectCustom, Error } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}

const Select: React.FC<Props> = ({ name, options, ...rest }) => {
  const selectRef = useRef(null);
  const [val, setVal] = useState();
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
      clearValue: (ref) => {
        ref.state.clearValue();
      },
      setValue: (ref, value) => {
        // ref.select.setValue(value || null);
        ref.select.select.setValue(value.id, 'select-option');
        // let selectedOptions;
        /* if (rest.isMulti) {
          selectedOptions = options?.filter((option) => value.includes(option));
        } else {

        } */
        // const selectedOptions = options?.find((option) => option.id === value);
        // defaultValue = selectedOptions;
        // ref.select.setValue(selectedOptions, 'select-option');
      },
    });
  }, [fieldName, registerField, rest.isMulti, options]);
  /*
  function getDefaultValue() {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find(option => option.id === defaultValue);
    }

    return options?.find((option) => option.id === defaultValue);
  } */
  return (
    <>
      <Container>
        <SelectCustom
          classNamePrefix="react-select"
          defaultValue={
            defaultValue &&
            options?.find((option) => option.value === defaultValue)
          }
          ref={selectRef}
          options={options}
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
