import {firebaseAuthActions} from '../../firebase';

import type {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  IUserRecord,
} from '../../firebase';

export class AppAuthApiService {
  register(data: IRegisterRequest): Promise<IRegisterResponse> {
    return firebaseAuthActions.register(data);
  }
  login(data: ILoginRequest): Promise<ILoginResponse> {
    return firebaseAuthActions.login(data);
  }
  logout(): Promise<void> {
    return firebaseAuthActions.logout();
  }
}

export {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
  IUserRecord,
};
