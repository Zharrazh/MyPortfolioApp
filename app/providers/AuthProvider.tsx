import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {appApiService} from '../api';
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  IUserRecord,
} from '../api/auth';
import {firebaseAuthHooks} from '../firebase';

export interface IAuthContextValue {
  user: IUserRecord | null;
  isAuthAsGuest: boolean;
  isLoadingInitial: boolean;
  isLoading: boolean;
  register: (data: IRegisterRequest) => Promise<IRegisterResponse>;
  login: (data: ILoginRequest) => Promise<ILoginResponse>;
  loginAsGuest: () => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<IAuthContextValue>({
  user: null,
} as IAuthContextValue);

export const AuthProvider: FC<PropsWithChildren> = ({children}) => {
  const [user, setUser] = useState<IUserRecord | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthAsGuest, setIsAuthAsGuest] = useState(false);

  const register = useCallback(async (data: IRegisterRequest) => {
    let result;

    try {
      setIsLoading(true);

      result = await appApiService.auth.register(data);
    } finally {
      setIsLoading(false);
    }

    return result;
  }, []);

  const login = useCallback(async (data: ILoginRequest) => {
    let result;
    try {
      setIsLoading(true);

      result = await appApiService.auth.login(data);
    } finally {
      setIsLoading(false);
    }

    return result;
  }, []);

  const loginAsGuest = useCallback(() => {
    setIsAuthAsGuest(true);
  }, []);

  const logout = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsAuthAsGuest(false);

      await appApiService.auth.logout();
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = firebaseAuthHooks.onAuthStateChanged(newUser => {
      setUser(newUser);
      setIsLoadingInitial(false);
      setIsAuthAsGuest(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    isAuthAsGuest,
    isLoadingInitial,
    isLoading,
    register,
    login,
    logout,
    loginAsGuest,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
