import {Input, InputProps} from '@rneui/themed';
import React from 'react';
import {Controller, ControllerProps, FieldValues, Path} from 'react-hook-form';

export interface FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'render'>,
    Omit<
      InputProps,
      'defaultValue' | 'value' | 'onChange' | 'onBlur' | 'errorMessage'
    > {}

export const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>(
  props: FormInputProps<TFieldValues, TName>,
) => {
  const {control, name, defaultValue, rules, shouldUnregister, ...inputProps} =
    props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({field: {onChange, ...restField}, fieldState: {error}}) => {
        return (
          <Input
            {...restField}
            {...inputProps}
            onChangeText={onChange}
            errorMessage={error?.message}
          />
        );
      }}
    />
  );
};
