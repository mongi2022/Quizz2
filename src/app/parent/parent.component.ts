import { Component, Input, OnInit } from '@angular/core';
import { Quizz } from '../quizz';
import { QuizzRep } from '../quizz-rep';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  quizzList!: Quizz[];
  quizzListRep!: QuizzRep[];
   numQ=0

    constructor(private quizzService:QuizzService) { }

  ngOnInit(): void {

    this.getAllDataController()
    
  }

nextQ(x:number){

this.numQ += x
}

  getAllDataController() {
    this.quizzService.getAllData().subscribe((data) => {
      this.quizzList = Object.values(data[0])[0]
      var x=(Object.values(data[0])[1])
      this.quizzListRep =x
        console.log( this.quizzList);

    })

  }




  // getData(){
  //   return this.quizzService.getAllData().subscribe((data)=>{

  //    this.oneQ= data.filter(elem => elem.id === 1)[0]

  //     console.log("data",data.filter(elem => elem.id === 2));
  //     console.log('liste3',this.list[0]);
  //    // this.produit = this.listproduit.filter(elem => elem.refProd === this.ref )[0]


  //   })
  // }

}
