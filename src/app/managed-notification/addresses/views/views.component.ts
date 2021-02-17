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

  days: any[] = [
    {
      day: 'Sunday',
      value: 'SUNDAY',
      fromHour: '',
      fromAmPm: 'AM',
      toHour: '',
      toAmPm: 'AM',
      checked: false
    },
    {
      day: 'Monday',
      value: 'MONDAY',
      fromHour: '',
      fromAmPm: 'AM',
      toHour: '',
      toAmPm: 'AM',
      checked: false
    },
    {
      day: 'Tuesday',
      value: 'TUESDAY',
      fromHour: '',
      fromAmPm: 'AM',
      toHour: '',
      toAmPm: 'AM',
      checked: false
    },
    {
      day: 'Wednesday',
      value: 'WEDNESDAY',
      fromHour: '',
      fromAmPm: 'AM',
      toHour: '',
      toAmPm: 'AM',
      checked: false
    },
    {
      day: 'Thursday',
      value: 'THURSDAY',
      fromHour: '',
      fromAmPm: 'AM',
      toHour: '',
      toAmPm: 'AM',
      checked: false
    },
    {
      day: 'Friday',
      value: 'FRIDAY',
      fromHour: '',
      fromAmPm: 'AM',
      toHour: '',
      toAmPm: 'AM',
      checked: false
    },
    {
      day: 'Saturday',
      value: 'SATURDAY',
      fromHour: '',
      fromAmPm: 'AM',
      toHour: '',
      toAmPm: 'AM',
      checked: false
    }
  ];

  users: any[] = [
    {
      id: 1,
      name: 'Juan',
      email: 'juan@gmail.com',
      schedule: 'Any time',
      checked: true,
    },
    {
      id: 2,
      name: 'test',
      email: 'test@gmail.com',
      schedule: 'Any time',
      checked: false
    },
    {
      id: 3,
      name: 'test1',
      email: 'test10@gmail.com',
      schedule: 'Any time',
      checked: false
    },
    {
      id: 4,
      name: 'test2',
      email: 'test20@gmail.com',
      schedule: 'Any time',
      checked: true
    }

  ];

  visible = false;
  visiblePopupEditing = false;
  userSelected: any = null;
  ///edit
  editNotificationAddressName = "";
  editNotificationAddressEmail = "";
  editNotificationTypeNotification = 'edit_type_one';

  constructor() { }

  ngOnInit() {
  }


  addNotification() {
    let me = this;
    const { notificationAddressName, notificationAddressEmail, notificationTypeNotification, notificationInitialFrom, notificationTimeZone, notificationInitialDayWH, notificationEndDayWH, notificationEndTo, notificationInitialFromAmPm, notificationEndToAmPm, days } = me;
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
      const newDays = days.filter((day) => day.checked);
      data = {
        ...data,
        days: newDays
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


  showPopup(user: any) {
    let me = this;
    this.visible = true;
    me.userSelected = user;
    console.log(true, me.userSelected);
  }

  sendVisible() {
    let me = this;
    me.visible = false;
    me.userSelected = null;
  }


  deleteAddress(user: any) {
    let me = this;
    let usersCopy = me.users;
    const index = usersCopy.indexOf(user);
    if (index !== -1) {
      usersCopy.splice(index, 1)
    }
    me.users = usersCopy;
    me.sendVisible()
  }

  dataUsersNotification() {

  }

  showPopupEditing(user: any) {
    let me = this;
    this.visiblePopupEditing = true;
    me.userSelected = user;
    const { name, email } = user;
    me.editNotificationAddressName = name;
    me.editNotificationAddressEmail = email;
    me.editNotificationTypeNotification = 'type_one';
    console.log(true, me.userSelected);
  }

  closePopupEditing() {
    let me = this;
    me.visiblePopupEditing = false;
    me.userSelected = null;
  }

  editAddress() {

  }

  editNotification() {
    let me=this;
    const {editNotificationAddressName,editNotificationAddressEmail,editNotificationTypeNotification}=me;
    let data={
      editNotificationAddressName,
      editNotificationAddressEmail,
      editNotificationTypeNotification
    }
    console.log('data update',data);
    me.closePopupEditing();
  }



}
