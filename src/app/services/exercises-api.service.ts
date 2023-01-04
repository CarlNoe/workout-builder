import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const options = {
  headers: new HttpHeaders({
    'X-RapidAPI-Key': 'cb8e053bc7mshbdf5473241a50b2p14f2efjsn98533256bb9e',
    'X-RapidAPI-Host': 'exercises2.p.rapidapi.com',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ExercisesApiService {
  private apiUrl = 'https://exercises2.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  getExercises(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/?count=100`, options);
  }

  getExercise(id: string, options: object): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, options);
  }

  getExerciseGifByName(name: string, options: object): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/image/${name}`, options);
  }
}
