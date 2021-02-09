import { Component, OnInit } from '@angular/core';
import { CacheService } from '../../../services/cache.service';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
  providerName = "";
  cacheResult: any = null;

  constructor() { }

  ngOnInit() {
    let me = this;
    me.cacheResult = CacheService.get(new Date().getDate());
    if(me.cacheResult){
      me.providerName = me.cacheResult;
    }
  }

  save() {
    console.log(new Date().getDate(), this.providerName);
    CacheService.set(new Date().getDate(), this.providerName);
  }

}
