/* 
  Component generated with CLI
  run: $ ng generate component servers or run: $ ng g c servers
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', /* the brackets are used to mark this component as a css selector, see app component*/
  // selector: '.app-servers', /* use this comonent selector as a css class */
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
