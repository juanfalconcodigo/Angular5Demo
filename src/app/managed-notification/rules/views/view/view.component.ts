import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewRuleManagedNotificationComponent implements OnInit {
  dataFake: any = {
    create_by_oid: "2471510",
    cnp_recipientes: "2923629;3100249",
    category_name: "billing",
    cnp_rule_oid: "2919347",
    rule_name: "Invoice Notification",
    original_rule_id: "1246912",
    cnp_contacts_info: "test1@gmail.com;testuser@gmail.com",
    original_sys_id: "2",
    description: "Test description billing",
    editing_content: null,
    dest_sys_is: null,
    modified_date: "2021-02-08 10:25:29.957663",
    sync_timestamp: "2021-06-08 14:01:21.0",
    contact_type: "E",
    sync_source_sys_id: "4",
    cnp_rule_category_id: "8",
    quickpick: null,
    template_id: null,
    created_date: "2019-03-02 13:02:15.0",
    portal_oid: "1",
    dest_rule_id: null,
    status: "Y",
    timestamp: "2021-02-08 10:25:29.0"
  }

  users:any[]=[
    {
      id:1,
      name:'Juan',
      email:'juan@gmail.com',
      schedule:'Any time',
      checked:true,
    },
    {
      id:2,
      name:'test',
      email:'test@gmail.com',
      schedule:'Any time',
      checked:false
    },
    {
      id:3,
      name:'test1',
      email:'test10@gmail.com',
      schedule:'Any time',
      checked:false
    },
    {
      id:4,
      name:'test2',
      email:'test20@gmail.com',
      schedule:'Any time',
      checked:true
    }

  ]

  constructor() { }

  ngOnInit() {
  }

  disableRule(){
    console.log('desavilitar');

  }

}
