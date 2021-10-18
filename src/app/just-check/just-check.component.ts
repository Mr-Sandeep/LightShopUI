import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-just-check',
  templateUrl: './just-check.component.html',
  styleUrls: ['./just-check.component.css']
})
export class JustCheckComponent implements OnInit {

  constructor() { }
  name: String = "";
  // testName;
  showProfile: Boolean ;
  showTemplateExercise: Boolean;

  ngOnInit(): void {
  }

  
  // checkUName(strng){
  //   this.testName = strng.value;
  // }
  
  showTemplateExerciseFunc(){
    this.showTemplateExercise = true;
  }
  showName(){
    this.name = "Sandeep"
  }

  showHome(){
    this.name = "";
    this.showTemplateExercise = false;
  }
}
