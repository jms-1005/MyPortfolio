import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = '';
  email = '';
  message= '';
  formInvalid = true;
  formMessageHidden = true;

  constructor(private cs:CommonService) { }

  resolved(event:any){
    //console.log(event);
    if(event){
      this.formInvalid = false;
    }
  }

  submitLead(){
    this.formInvalid = true;
    let leaddata = {
      "data":{
        "Name": this.name,
        "Email": this.email,
        "Message": this.message
      }
    }
    this.cs.postLead(leaddata).subscribe( res => {
      console.log(res);
      this.formMessageHidden = false;

    })
  }

  ngOnInit(): void {
  }

}
