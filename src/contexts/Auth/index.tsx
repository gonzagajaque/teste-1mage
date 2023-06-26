import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { realm } from '../../services/realm';

import { ObjectSchema } from 'realm';

interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  image?: string;
}

const UserSchema: ObjectSchema = {
  name: 'User',
  properties: {
    name: 'string',
    surname: 'string',
    email: 'string',
    password: 'string',
  },
  primaryKey: 'email',
};

export { User, UserSchema };

interface AuthContextData {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, surname: string, email: string, password: string, confirmPassword: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({
  user: null,
  login: async () => { },
  register: async () => { },
});

const findUserByEmail = (email: string) => {
  return realm.objects('User').filtered(`email = "${email}"`);
};

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const users = findUserByEmail(email);

    if (users.length > 0) {
      const userFromStorage = users[0];
      if (userFromStorage.password === password) {
        setUser(userFromStorage);
        await AsyncStorage.setItem('user', JSON.stringify(userFromStorage));
      } else {
        console.error('Senha incorreta. Tente novamente.');
      }
    } else {
      console.error('Usuário não encontrado. É necessário fazer o cadastro.');
    }
  };

  const register = async (name: string, surname: string, email: string, password: string) => {
    realm.write(() => {
      realm.create('User', {
        name,
        surname,
        email,
        password,
      });
    });

    const newUser: User = { name, surname, email, password };
    setUser(newUser);

    await AsyncStorage.setItem('user', JSON.stringify(newUser));
  };


  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};
