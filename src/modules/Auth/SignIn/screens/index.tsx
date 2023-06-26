import React, { useContext, useState } from 'react';
import {
  ButtonText,
  Container,
  Flag,
  Input,
  InputContainer,
  Logo,
  TextInputTitle,
  Title,
} from './styles';
import logo from '../../../../../assets/images/logo.png';
import { Alert, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { ButtonSignIn } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../../contexts/Auth';
import { realm } from '../../../../services/realm';
import { registrationSchema } from './consts';

const SignIn = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputFocus, setInputFocus] = useState({
    name: false,
    surname: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const navigation = useNavigation();
  const { register } = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      await registrationSchema.validate({
        name,
        surname,
        email,
        password,
        confirmPassword,
      });
      realm.write(() => {
        realm.create('User', {
          name,
          surname,
          email,
          password,
        });
      });
      register(name, surname, email, password, confirmPassword);
    } catch (error) {
      Alert.alert('Erro de validação', error.errors[0]);
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
          <Title>Sign In</Title>

          <InputContainer isFocused={inputFocus.name}>
            <TextInputTitle>Name</TextInputTitle>
            <Input
              placeholder="Name"
              onFocus={() => handleInputFocus('name')}
              onBlur={() => handleInputBlur('name')}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </InputContainer>

          <InputContainer isFocused={inputFocus.surname}>
            <TextInputTitle>Surname</TextInputTitle>
            <Input
              placeholder="Surname"
              onFocus={() => handleInputFocus('surname')}
              onBlur={() => handleInputBlur('surname')}
              value={surname}
              onChangeText={(text) => setSurname(text)}
            />
          </InputContainer>

          <InputContainer isFocused={inputFocus.email}>
            <TextInputTitle>Email</TextInputTitle>
            <Input
              placeholder="Email"
              onFocus={() => handleInputFocus('email')}
              onBlur={() => handleInputBlur('email')}
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize='none'
            />
          </InputContainer>

          <InputContainer isFocused={inputFocus.password}>
            <TextInputTitle>Password</TextInputTitle>
            <Input
              placeholder="Password"
              secureTextEntry
              onFocus={() => handleInputFocus('password')}
              onBlur={() => handleInputBlur('password')}
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoComplete='off'
            />
          </InputContainer>

          <InputContainer isFocused={inputFocus.confirmPassword}>
            <TextInputTitle>Confirm Password</TextInputTitle>
            <Input
              placeholder="Confirm Password"
              secureTextEntry
              onFocus={() => handleInputFocus('confirmPassword')}
              onBlur={() => handleInputBlur('confirmPassword')}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </InputContainer>

          <ButtonSignIn onPress={handleRegister}>
            <ButtonText>Register</ButtonText>
          </ButtonSignIn>
        </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
