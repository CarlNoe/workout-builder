import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FireauthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
      },
      (err) => {
        alert(err.message + ' Please try again');
      }
    );
  }

  googleLogin() {
    this.fireauth.signInWithPopup(new GoogleAuthProvider()).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message + ' Please try again');
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

  ngOnInit(): void {}
}
