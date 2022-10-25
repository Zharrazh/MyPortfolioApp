import {initializeApp} from 'firebase/app';

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged as onAuthStateChangedFirebase,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBOAgzai-uPQdDr_tWZlklZ7-r0rK0O-z8',
  authDomain: 'mybankapp-fcdbe.firebaseapp.com',
  projectId: 'mybankapp-fcdbe',
  storageBucket: 'mybankapp-fcdbe.appspot.com',
  messagingSenderId: '569642574924',
  appId: '1:569642574924:web:8a074c8a963e25842600e9',
};

initializeApp(firebaseConfig);

const auth = getAuth();

export interface IRegisterRequest {
  email: string;
  password: string;
}

export interface IRegisterResponse extends UserCredential {}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse extends UserCredential {}

export interface IUserRecord extends User {}

const register = (data: IRegisterRequest) =>
  createUserWithEmailAndPassword(auth, data.email, data.password);

const login = (data: ILoginRequest) =>
  signInWithEmailAndPassword(auth, data.email, data.password);

const logout = () => signOut(auth);

export const firebaseAuthActions = {
  register,
  login,
  logout,
};

export const currentUser = auth.currentUser;

type OmitFirstArg<F> = F extends (x: any, ...args: infer P) => infer R
  ? (...args: P) => R
  : never;

type OnAuthStateChangedFn = OmitFirstArg<typeof onAuthStateChangedFirebase>;

const onAuthStateChanged: OnAuthStateChangedFn = (...args) => {
  return onAuthStateChangedFirebase(auth, ...args);
};

export const firebaseAuthHooks = {
  onAuthStateChanged,
};
