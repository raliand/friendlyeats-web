import { ApplicationConfig } from '@angular/core';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth  } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAppCheck, initializeAppCheck, ReCaptchaV3Provider } from '@angular/fire/app-check';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAppCheck(() => initializeAppCheck(getApp(), {
    //     provider: new ReCaptchaV3Provider('6LdYnBMqAAAAAE2pI6QujbIBOE4HRFC7WJ73TeiG'),
    //     isTokenAutoRefreshEnabled: true
    // })),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideAuth(() => getAuth()), 
    provideMessaging(() => getMessaging()), 
    provideStorage(() => getStorage())
  ],
};
