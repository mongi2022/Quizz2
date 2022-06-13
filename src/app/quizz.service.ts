import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
quizzList!:Quizz[]
baseApi='assets/quizz.json'
  constructor(private _http:HttpClient) { }


  getAllData(){
    return this._http.get<Quizz[]>(this.baseApi)
      }

}
