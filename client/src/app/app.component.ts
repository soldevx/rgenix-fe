import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Resume Genix Application';

  msg: string;

  // Constructor
  constructor(private appService: AppService) {
    this.msg = 'ini'
  }

  ngOnInit() {
    this.appService.testRoute().subscribe(data => this.msg = data.toString());
  }

}
