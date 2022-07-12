import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cs:CommonService) { }

  websiteHeroImage = '';
  name = '';

  ngOnInit(): void {
    this.cs.getHomeContent().subscribe( res => {
      console.log(res);
      this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;
      console.log(this.websiteHeroImage);
      this.name = res.data.attributes.Name;
    })
  }

}
