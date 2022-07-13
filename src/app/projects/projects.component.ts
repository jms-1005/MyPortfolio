import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Project[] = [];
  server = environment.server;
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getProjects().subscribe( res => {
      this.projects = res.data;
      console.log(this.projects);
    })
  }

}
