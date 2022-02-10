import { Component, EventEmitter,Output,Input,ViewEncapsulation } from '@angular/core';
import { toWords_INS  } from 'ntw_ins_njs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ntwins',
  templateUrl: './ntwins.component.html',
  styleUrls: ['./ntwins.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NtwinsComponent  {
  title = 'ntw_ins_clientapp'; 
  name = new FormControl('');
  @Output() responseData = new EventEmitter<object>();
  @Input()  Number!: string;
  @Input()  Formated_Number!: string;
  @Input()  NumberInWord!: string;
  convert() {
    try{
      var r=toWords_INS(this.name.value)
      this.Number=r.Number
      this.Formated_Number=r.Formated_Number
      this.NumberInWord=r.NumberInWord
      this.responseData.emit(r);
      (<HTMLButtonElement> document.getElementById("msg")).style.background= (<HTMLButtonElement> document.getElementById("n_msg")).style.background
    }
    catch(e){
      console.error(e)
      this.NumberInWord= getStringValue(e)
      this.Number=this.name.value
      this.Formated_Number="";
      (<HTMLButtonElement> document.getElementById("msg")).style.background="red"
    }

    function getStringValue(value: any): string {
      return value.toString();
  }
  }
}
