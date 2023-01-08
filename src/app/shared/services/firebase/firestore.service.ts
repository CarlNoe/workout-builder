import { WorkoutRoutine } from './../../models/workout-routine';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  // User CRUD
  addUser(userId: string, email: string) {
    this.firestore.collection('users').doc(userId).set({
      email: email,
      WorkoutRoutines: [],
    });
  }

  getUser(id: string) {
    return this.firestore.collection('users').doc(id).snapshotChanges();
  }

  updateUser(id: string, user: any) {
    this.firestore.collection('users').doc(id).update(user);
  }

  deleteUser(id: string) {
    this.firestore.collection('users').doc(id).delete();
  }

  // Workout Routines CRUD
  addWorkoutRoutine(workoutRoutine: WorkoutRoutine, userId: string) {
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('users')
        .doc(userId)
        .update({
          WorkoutRoutines:
            firebase.firestore.FieldValue.arrayUnion(workoutRoutine),
        })
        .then(resolve)
        .catch(reject);
    });
  }

  getWorkoutRoutine(userId: string, workoutRoutineId: string) {
    return this.firestore
      .collection('users')
      .doc(userId)
      .collection('WorkoutRoutines')
      .doc(workoutRoutineId)
      .snapshotChanges();
  }

  updateWorkoutRoutine(
    userId: string,
    workoutRoutineId: string,
    workoutRoutine: WorkoutRoutine
  ) {
    this.firestore
      .collection('users')
      .doc(userId)
      .collection('WorkoutRoutines')
      .doc(workoutRoutineId)
      .update(workoutRoutine);
  }

  deleteWorkoutRoutine(userId: string, workoutRoutineId: string) {
    this.firestore
      .collection('users')
      .doc(userId)
      .collection('WorkoutRoutines')
      .doc(workoutRoutineId)
      .delete();
  }
}
