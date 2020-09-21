/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import { OptionTypeBase } from 'react-select';
import Select, { Props as AsyncProps } from 'react-select/async';
import { useField } from '@unform/core';
import { Container } from '../style';

interface Props extends AsyncProps<OptionTypeBase> {
    name: string;
    fieldValue: string;
    fieldLabel: string;
    label?: string;
}
const AsyncSelect: React.FC<Props> = ({
    name,
    fieldValue = 'value',
    fieldLabel = 'label',
    options = [],
    label,
    ...rest
}) => {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    const customTheme = useCallback((theme: any) => {
        return {
            ...theme,
            borderRadius: 0,
            colors: {
                ...theme.colors,
                primary25: '#f9f9f9',
                primary: '#e82b43',
            },
        };
    }, []);

    const customStyles = useMemo(() => {
        return {
            container: (base: any) => ({
                ...base,
                width: '100%',
            }),
            control: (base: any) => ({
                ...base,
                border: '1px solid #C8C8C8',
                borderRadius: '10px',
                marginRight: '0px',
                padding: '5px 0px',
                background: '#f9f9f9',
                color: '#232129',
                fontSize: '16px',
            }),
            placeholder: (base: any) => ({
                ...base,
                color: '#232129',
                fontSize: '14px',
            }),
        };
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref: any) => {
                if (rest.isMulti) {
                    if (!ref.select.state.value) {
                        return [];
                    }
                    return ref.select.state.value.map((option: OptionTypeBase) => option.value);
                }
                if (!ref.select.state.value) {
                    return '';
                }
                return ref.select.state.value.value;
            },
            setValue: (ref, value) => {
                ref.select.select.setValue(value);
            },
            clearValue: (ref) => {
                ref.select.select.clearValue();
            },
        });
    }, [fieldName, registerField, rest.isMulti]);
    return (
        <Container isErrored={!!error} style={{ width: '100%' }}>
            <Select
                cacheOptions
                defaultValue={defaultValue}
                ref={selectRef}
                className="input-area"
                theme={customTheme}
                styles={customStyles}
                classNamePrefix="react-select"
                noOptionsMessage={() => 'Não há opções disponíveis'}
                {...rest}
            />
            {label && <label className="label">{label}</label>}
        </Container>
    );
};
export default AsyncSelect;
