import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean>;

  constructor(private breakpoint: BreakpointObserver,
              private router: Router) {}

  ngOnInit() {
    this.router.navigate(['']);

    this.isHandset$ = this.breakpoint.observe(Breakpoints.Handset)
                                     .pipe(map(result => result.matches), shareReplay());
  }
}
