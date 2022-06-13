import { Component, Input, OnInit } from '@angular/core';
import { Quizz } from '../quizz';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  list!:Quizz[]
  oneQ!:Quizz

  @Input() idChild!:number
    constructor(private quizzService:QuizzService) { }

  ngOnInit(): void {
    this.getData()

  }

  getData(){
    return this.quizzService.getAllData().subscribe((data)=>{
      
     this.oneQ= data.filter(elem => elem.id === this.idChild)[0]
     
      console.log("data",data.filter(elem => elem.id === this.idChild));
      console.log('liste3',this.list[0]);
     // this.produit = this.listproduit.filter(elem => elem.refProd === this.ref )[0]

      
    })
  }

}
