import { Inject, Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
    private messaging: firebase.messaging.Messaging;

    constructor (
        @Inject(FirebaseApp) private firebaseApp: firebase.app.App
    ) {
        console.log('Firebase request');
        this.messaging = firebase.messaging(this.firebaseApp);
        this.messaging.requestPermission()
            .then(() => this.messaging.getToken())
            .then((token) => console.log(token));
    }
}
