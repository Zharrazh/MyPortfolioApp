import {yupResolver} from '@hookform/resolvers/yup';
import {useUncontrolledForm} from '@hooks/useUncontrolledForm';
import * as yup from 'yup';
import {ILodinFormValues} from './types';

const LOGIN_FORM_DEFAULT_VALUES: ILodinFormValues = {email: '', password: ''};

export const validationSchema: yup.SchemaOf<ILodinFormValues> = yup
  .object({
    email: yup
      .string()
      .email('Incorrect Email')
      .required('Please, enter email'),
    password: yup.string().required('Please, enter password'),
  })
  .required();

export type UseLoginFormParams = {
  onSubmit: (data: ILodinFormValues) => Promise<void>;
};
export const useLoginForm = (params: UseLoginFormParams) => {
  const {onSubmit} = params;

  return useUncontrolledForm<ILodinFormValues>({
    defaultValues: LOGIN_FORM_DEFAULT_VALUES,
    onSubmit,
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
};
