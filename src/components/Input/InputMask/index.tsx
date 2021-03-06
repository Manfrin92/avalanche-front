/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { Container, Error } from './styles';

interface Props extends InputProps {
  name: string;
  placeholder: string;
  icon?: React.ComponentType<IconBaseProps>;
  cepIcon?: boolean;
  getCep?: () => void;
}
const InputMask: React.FC<Props> = ({
  name,
  placeholder,
  icon: Icon,
  cepIcon,
  getCep,
  ...rest
}) => {
  const inputRef = useRef<any>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container className="input-group" isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <ReactInputMask
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        className="input-area"
        defaultValue={defaultValue}
        autoComplete="no"
        {...rest}
      />
      <label className="label">{placeholder}</label>
      {error && (
      <Error title={error}>
        <FiAlertCircle color="#c53030" size={20} />
      </Error>
      )}
      {cepIcon && (
        <div style={{ marginRight: 0 }}>
          <FaSearch style={{ marginRight: 0, cursor: 'pointer' }} onClick={getCep} color="#e82b43" />
          />
        </div>
      )}
    </Container>
  );
};
export default InputMask;
