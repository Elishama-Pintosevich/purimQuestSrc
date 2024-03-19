import {Component} from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrl: './quest.component.scss'
})
export class QuestComponent {
  firstFormGroup = this._formBuilder.group({
    one: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    one: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    one: ['', Validators.required],
    two: ['', Validators.required],
    three: ['', Validators.required],
    for:['', Validators.required]
  });
  forthFormGroup = this._formBuilder.group({
    one: ['', Validators.required],
  });
  
  dummyFormControl=  this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
condition:boolean =false
wrong:boolean = false

  onInput(formGroup: FormGroup, index:number){
    console.log(formGroup);
    
    switch(index){
      case 1:
        if(formGroup.value.one == "ביסטופ"){
          this.condition = true
        }else{
          this.condition = false
        }
        break
      case 2:
        if(formGroup.value.one == 59){
          this.condition = true
        }else{
          this.condition = false
        }
        break
      case 3:
        if(formGroup.value.one == "איסר הראל" && formGroup.value.two == "שי" && formGroup.value.three == 790 && formGroup.value.for == 2002){
          this.condition = true
        } else{
          this.condition = false
        }
        break
      case 4:
        if(formGroup.value.one == "Purim_370"){
          this.condition = true
        }else{
          this.condition = false
        }
        break
    }
  }
  onClick(){
    if(!this.condition){
      this.wrong = true
    }else{
      this.wrong = false
    }
  }
  onWin(){
    this.router.navigate(['/win']);
  }
  
  

  constructor(private _formBuilder: FormBuilder,private router: Router) {
    
    
  }
}
