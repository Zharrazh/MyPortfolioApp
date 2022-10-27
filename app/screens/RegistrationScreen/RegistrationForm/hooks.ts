import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useUncontrolledForm} from '../../../hooks/useUncontrolledForm';
import {IRegistrationFormValues} from './types';

export const validationSchema: yup.SchemaOf<IRegistrationFormValues> = yup
  .object({
    email: yup
      .string()
      .email('Incorrect Email')
      .required('Please, enter email'),
    password: yup.string().required('Please, enter password'),
  })
  .required();

const DEFAULT_REGISTRATION_FORM_VALUES: IRegistrationFormValues = {
  email: '',
  password: '',
};

export type UseRegistrationFormParams = {
  onSubmit: (data: IRegistrationFormValues) => Promise<any>;
};

export const useRegistrationForm = (params: UseRegistrationFormParams) => {
  const {onSubmit} = params;

  return useUncontrolledForm({
    defaultValues: DEFAULT_REGISTRATION_FORM_VALUES,
    onSubmit,
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
};
