import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string): boolean {
    return this.router.url.includes(route);
  }

  gotoDashboard(): void {
    this.router.navigate(['dashboard']);
  }

  gotoScheduler(): void {
    this.router.navigate(['scheduler']);
  }
}
