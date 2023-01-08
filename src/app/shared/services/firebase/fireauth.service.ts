import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class FireauthService {
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private firestoreService: FirestoreService
  ) {}

  private setToken() {
    this.fireauth.currentUser.then((user) => {
      if (user) {
        localStorage.setItem('token', user.uid);
      }
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        this.setToken();
      },
      (err) => {
        alert(`${err.message} Please try again`);
      }
    );
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        if (res.user) {
          this.firestoreService.addUser(res.user.uid, email);
          this.setToken();
          alert('User created successfully');
        } else {
          console.log('No res.user in register method');
        }
      },
      (err) => {
        alert(`${err.message} Please try again`);
      }
    );
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
