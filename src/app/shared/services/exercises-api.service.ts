import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const options = {
  headers: new HttpHeaders({
    'X-RapidAPI-Key': environment.exerciseApiKey,
    'X-RapidAPI-Host': environment.exerciseApiHost,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ExercisesApiService {
  private apiUrl = 'https://exercises2.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  getExercises(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/?count=20`, options);
  }

  getExercisesByIds(startingId: number, count: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/?startingId=${startingId}&count=${count}`,
      options
    );
  }

  getExercise(id: string, options: object): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, options);
  }

  getExerciseGifByName(name: string, options: object): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/image/${name}`, options);
  }
}
