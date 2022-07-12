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

  constructor(private cs:CommonService) { }

  resolved(event:any){

  }

  submitLead(){
    let leaddata = {
      "data":{
        "Name": this.name,
        "Email": this.email,
        "Message": this.message
      }
    }
    this.cs.postLead(leaddata).subscribe( res => {
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

}
