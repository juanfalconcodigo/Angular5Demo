import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListRuleManagedNotificationComponent implements OnInit {
  selectRoute: string = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectRoute() {
    let me = this;
    let url=(me.router.url).split('/');
    url[url.length-1]='create';
    const newPath=url.join("/");
    me.router.navigate([newPath, me.selectRoute]);
  }

  redirectRouteTwo(){
    let me = this;
    me.router.navigate(['/managed-notification/rules/create', 'order']);
  }

}
