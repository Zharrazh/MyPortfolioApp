import {useMemo, useState} from 'react';
import {FieldValues, useForm, UseFormProps} from 'react-hook-form';

export type UseUncontrolledFormParams<
  IFormValues extends FieldValues,
  IFormSuccessValues,
  IContext = any,
> = {
  onSubmit: (data: IFormSuccessValues) => Promise<void>;
} & UseFormProps<IFormValues, IContext>;

export const useUncontrolledForm = <
  IFormValues extends FieldValues,
  IFormSuccessValues = IFormValues,
  IContext = any,
>(
  params: UseUncontrolledFormParams<IFormValues, IFormSuccessValues, IContext>,
) => {
  const {onSubmit, ...restFormParams} = params;

  const {handleSubmit: rhfHandleSubmit, ...restForm} = useForm<IFormValues>({
    ...restFormParams,
  });

  const [formError, setFormError] = useState<null | string>(null);

  const handleSubmit = useMemo(() => {
    return rhfHandleSubmit(async data => {
      setFormError(null);
      try {
        await onSubmit(data as unknown as IFormSuccessValues);
      } catch (error) {
        console.error('form submit with error:', error);
        if (error instanceof Error) {
          setFormError(error.message);
        } else {
          setFormError('Unknown error');
        }
      }
    });
  }, [onSubmit, rhfHandleSubmit]);

  return {
    ...restForm,
    handleSubmit,
    formError,
  };
};
