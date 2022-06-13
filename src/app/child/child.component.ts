import { Component, Input, OnInit } from '@angular/core';
import { Quizz } from '../quizz';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   quizzList!:Quizz[]
   list!:Quizz

  constructor(private childService:QuizzService) { }

  ngOnInit(): void {
    this.getAllDataController()
  }
  getAllDataController(){
     this.childService.getAllData().subscribe((data)=>{
      this.quizzList=data
      
      console.log(data[1]);
      
     })

  }
}
