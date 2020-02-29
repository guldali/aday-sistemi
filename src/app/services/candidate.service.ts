import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../candidates/candidates';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:"root" 
})

export class CandidateService {

  constructor(private http: HttpClient) { }
  path = "https://jsonplaceholder.typicode.com/users";

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.path);

  }
  getCandidatesById(candidatesId): Observable<Candidate> {
  
    return this.http.get<Candidate>(this.path + "/?candidatesId" + candidatesId);
  }
}
