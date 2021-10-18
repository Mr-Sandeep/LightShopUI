import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-exercise',
  templateUrl: './template-exercise.component.html',
  styleUrls: ['./template-exercise.component.css']
})
export class TemplateExerciseComponent implements OnInit {

  searchInputData: String; 
  constructor() { }

  ngOnInit(): void {
  }

  showInfo(){
    let val = document.getElementById("ename");
    console.log(val);
    return true;
    
  }

  storeInputVal(str){
    
    this.searchInputData = str;
    // console.log(this.searchInputData);
    
  }

  checkSearchData(){
    if(this.searchInputData){
      return true;
    }else{
      return false;
    }
  }

}
