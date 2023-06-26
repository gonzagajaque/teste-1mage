import React, { useContext, useState } from 'react';
import {
  ButtonLogin,
  ButtonText,
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  Flag,
  Input,
  InputContainer,
  Logo,
  TextInputTitle,
  TextOrContinue,
  Title,
  ViewRow,
} from './styles';
import logo from '../../../../../assets/images/logo.png';
import { Alert, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../routes/consts';
import { AuthContext } from '../../../../contexts/Auth';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const [inputFocus, setInputFocus] = useState({ email: false, password: false });
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await loginSchema.validate({ email, password }, { abortEarly: false });  
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = error.inner.map((err) => err.message);
        Alert.alert('Erro de validação', errorMessages[0]);

      } else {
        Alert.alert('Erro de validação', error.message);
      }
    }
  };


  const handleInputFocus = (inputName: string) => {
    setInputFocus((prevInputFocus) => ({
      ...prevInputFocus,
      [inputName]: true,
    }));
  };

  const handleInputBlur = (inputName: string) => {
    setInputFocus((prevInputFocus) => ({
      ...prevInputFocus,
      [inputName]: false,
    }));
  };

  const handleCreateAccount = () => {
    // @ts-ignore
    navigation.navigate(ROUTES.SIGNIN);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <Flag />
          <Logo source={logo} />
          <Title>Login</Title>

          <InputContainer isFocused={inputFocus.email}>
            <TextInputTitle>Email</TextInputTitle>
            <Input
              placeholder="Email"
              value={email}
              onFocus={() => handleInputFocus('email')}
              onBlur={() => handleInputBlur('email')}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              autoCapitalize='none'
            />
          </InputContainer>

          <InputContainer isFocused={inputFocus.password}>
            <TextInputTitle>Password</TextInputTitle>
            <Input
              placeholder="Password"
              value={password}
              secureTextEntry
              onFocus={() => handleInputFocus('password')}
              onBlur={() => handleInputBlur('password')}
              onChangeText={(text) => setPassword(text)}
              autoComplete='off'
            />
          </InputContainer>

          <ButtonLogin onPress={handleLogin}>
            <ButtonText>Sign In</ButtonText>
          </ButtonLogin>

          <TextOrContinue>Or continue with</TextOrContinue>
          <ViewRow>
            <TextOrContinue>Don't have an account?</TextOrContinue>
            <CreateAccountButton onPress={handleCreateAccount}>
              <CreateAccountButtonText> Create now</CreateAccountButtonText>
            </CreateAccountButton>
          </ViewRow>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
