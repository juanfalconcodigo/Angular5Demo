import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class AddressesManagedNotificationViewsComponent implements OnInit {

  notificationAddressName = "";
  notificationAddressEmail = "";
  notificationTypeNotification = "type_one";

  notificationInitialDayWH = "monday";
  notificationInitialFrom = "9:00";
  notificationInitialFromAmPm = "AM";
  notificationEndDayWH = "friday";
  notificationEndTo = "5:00";
  notificationEndToAmPm = "PM"


  notificationTimeZone = "est-1";

  constructor() { }

  ngOnInit() {
  }


  addNotification() {
    let me = this;
    const { notificationAddressName, notificationAddressEmail, notificationTypeNotification, notificationInitialFrom, notificationTimeZone, notificationInitialDayWH, notificationEndDayWH, notificationEndTo, notificationInitialFromAmPm, notificationEndToAmPm } = me;
    let data: any = {
      notificationAddressName,
      notificationAddressEmail,
      notificationTypeNotification
    };

    if (notificationTypeNotification === 'type_two') {
      data = {
        ...data,
        notificationInitialDayWH,
        notificationInitialFrom,
        notificationInitialFromAmPm,
        notificationEndDayWH,
        notificationEndTo,
        notificationEndToAmPm,
        notificationTimeZone,
      }
    }

    if (notificationTypeNotification === 'type_three') {
      data = {
        ...data
      }
    }
    const resp = me.validationFormatHours(notificationInitialFrom);
    console.log(data, resp);
  }



  validationFormatHours(hour: string) {
    const regex = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;
    if (!regex.test(hour)) {
      console.log('error papu');
    }
    return regex.test(hour);
  }

}
