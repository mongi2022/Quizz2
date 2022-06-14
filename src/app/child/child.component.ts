import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quizz } from '../quizz';
import { QuizzRep } from '../quizz-rep';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  quizzList!: Quizz[]
  quizzListRep!: QuizzRep[]
  quizQ!:Quizz
  quizR!:QuizzRep

  @Input() idChild!:number
  @Output() idQ = new EventEmitter<number>()
  constructor(private childService: QuizzService) { }

  ngOnInit(): void {
    this.getAllDataController()
    this.getAllDataControllerById()
    this.idQ.emit(this.idChild)
  }
  getAllDataControllerById() {
    this.childService.getAllData().subscribe((data) => {
      // this.quizzList =( Object.values(data[0])[0])
      // this.quizzListRep =(Object.values(data[0])[1])

      //   console.log( this.quizzListRep);
      this.quizQ = this.quizzList.filter(elem => elem.id === this.idChild )[0]
     // console.log(this.quizQ);
      this.quizR = this.quizzListRep.filter(elem => elem.id === this.idChild )[0]
    //  console.log(this.quizR);

    })

  }

  getAllDataController() {
    this.childService.getAllData().subscribe((data) => {
      this.quizzList = Object.values(data[0])[0]
      var x=(Object.values(data[0])[1])
      this.quizzListRep =x
     //   console.log( this.quizzListRep);

    })

  }
}
