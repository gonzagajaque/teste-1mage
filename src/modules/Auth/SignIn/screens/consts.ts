import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório'),
  surname: Yup.string().required('O campo sobrenome é obrigatório'),
  email: Yup.string().email('Digite um email válido').required('O campo email é obrigatório'),
  password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('O campo senha é obrigatório'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas não coincidem').required('O campo confirmar senha é obrigatório'),
});