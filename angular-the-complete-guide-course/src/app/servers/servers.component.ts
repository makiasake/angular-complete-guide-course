/* 
  Component generated with CLI
  run: $ ng generate component servers or run: $ ng g c servers
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*templateUrl: './servers.component.html',*/
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
