import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Shared/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
              private service:ServiceService,
              private router:Router,
              private route:ActivatedRoute
              ) {}

  ngOnInit() {
    this.service.startTimer();
  }

  clickAdmin(){
    this.router.navigate(['/dashboard']);
  }

}
