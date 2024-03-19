import {Component} from '@angular/core';
import { FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrl: './quest.component.scss'
})
export class QuestComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  dummyFormControl=  this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
condition:boolean =false

  onInput(){
    if(this.firstFormGroup.value.firstCtrl == 'אלישמע'){
      this.condition=true
      
    }
  }
  onWin(){
    this.router.navigate(['/win']);
  }
  
  

  constructor(private _formBuilder: FormBuilder,private router: Router) {
    
    
  }
}
