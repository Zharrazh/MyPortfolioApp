import {AppAuthApiService} from './auth';

class AppApiService {
  auth = new AppAuthApiService();
}

export const appApiService = new AppApiService();
