import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Skill } from '../interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {
  myskills:Skill[] = [];
  server = environment.server;
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getSkills().subscribe( res => {
      console.log(res.data);
      this.myskills = res.data;
    })
  }

}
