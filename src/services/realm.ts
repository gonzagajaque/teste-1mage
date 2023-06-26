import Realm from 'realm';

interface UserSchema {
  name: string;
  properties: {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
}

const userSchema: UserSchema = {
  name: 'User',
  properties: {
    name: 'string',
    surname: 'string',
    email: 'string',
    password: 'string',
  },
};

export const realm = new Realm({ schema: [userSchema] });
