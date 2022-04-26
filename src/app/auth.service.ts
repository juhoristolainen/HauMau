import { Injectable } from '@angular/core';
import { setPersistence } from '@firebase/auth';
import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  browserSessionPersistence,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: User | null;
  loggedIn!: boolean;
  constructor(private auth: Auth, private router: Router) {}

  signIn(email: string, password: string) {
    setPersistence(this.auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(this.auth, email, password).then(
          (res) => console.log(res)
        );
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  }

  checkIfLogged() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }

  signUp(email: string, password: string) {
    console.log(email);
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        console.log('Succesfully signed up', res);
        this.user = res.user;
      })
      .catch((error) => {
        console.log('Something is wrong: ', error.message);
      });
  }

  signOut() {
    this.router.navigate(['/frontpage']);
    return signOut(this.auth).then(() => (this.user = null));
  }
}
