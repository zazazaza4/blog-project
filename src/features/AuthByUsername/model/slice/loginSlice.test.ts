import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'user' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('user2'))).toEqual({ username: 'user2' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: 'password' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('password2'))).toEqual({ password: 'password2' });
  });
});
