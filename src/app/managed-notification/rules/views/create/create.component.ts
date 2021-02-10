import { Component, OnInit } from '@angular/core';
import { Contact } from "./data";
import { contacts as sampleContacts } from "./data";
import { Router } from '@angular/router';

interface PendingSelection {
  [key: number]: boolean;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateRuleManagedNotificationComponent implements OnInit {

  public contacts: Contact[];
  public pendingSelection: PendingSelection;
  public selectedContacts: Contact[];
  public unselectedContacts: Contact[];
  /////
  rule_template = "product";
  rule_name = "";
  rule_description = "";
  orders_number = null;
  rule_order_list: any = 'some';
  rule_statuses_list: any = 'statuses_only';

  constructor(private router: Router) {
    this.contacts = sampleContacts;
    // To start with, all of the contacts will be unselected. Then, the user will be
    // able to move any of the contacts over to the selected collection.
    this.unselectedContacts = this.contacts.slice().sort(this.sortContactOperator);
    this.selectedContacts = [];

    // I am an ID-based look-up index that keeps track of which contacts have been
    // selected for pending changes (either adding or removing from the selected
    // contacts collection).
    this.pendingSelection = Object.create(null);
  }

  ngOnInit() {
  }

  public addToSelectedContacts(contact?: Contact): void {

    var changeContacts = (contact)
      // If a given contact has been provided (via double-click), that's the single
      // contact that we want to move.
      ? [contact]
      // Otherwise, default to using the pending-selection index as the source of
      // contacts to move.
      : this.getPendingSelectionFromCollection(this.unselectedContacts)
      ;

    // Now that we know which contacts we want to move, reset the pending-selection.
    this.pendingSelection = Object.create(null);

    // Remove each pending contact from the unselected list.
    this.unselectedContacts = this.removeContactsFromCollection(this.unselectedContacts, changeContacts);

    // We always want to move the pending contacts onto the front / top of the
    // selected list so that the change is VISUALLY OBVIOUS to the user.
    this.selectedContacts = changeContacts.concat(this.selectedContacts);

  }



  public removeFromSelectedContacts(contact?: Contact): void {

    var changeContacts = (contact)
      // If a given contact has been provided (via double-click), that's the single
      // contact that we want to move.
      ? [contact]
      // Otherwise, default to using the pending-selection index as the source of
      // contacts to move.
      : this.getPendingSelectionFromCollection(this.selectedContacts)
      ;

    // Now that we know which contacts we want to move, reset the pending-selection.
    this.pendingSelection = Object.create(null);

    // Remove each pending contact from the selected contacts collection.
    this.selectedContacts = this.removeContactsFromCollection(this.selectedContacts, changeContacts);

    // When moving contacts back to the unselected contacts list, we want to add
    // them back in SORT ORDER since this will make it easier for the user to
    // navigate the resulting list.
    this.unselectedContacts = changeContacts
      .concat(this.unselectedContacts)
      .sort(this.sortContactOperator)
      ;

  }




  public togglePendingSelection(contact: Contact): void {

    this.pendingSelection[contact.id] = !this.pendingSelection[contact.id];

  }


  private getPendingSelectionFromCollection(collection: Contact[]): Contact[] {

    var selectionFromCollection = collection.filter(
      (contact) => {

        return (contact.id in this.pendingSelection);

      }
    );

    return (selectionFromCollection);

  }


  private removeContactsFromCollection(
    collection: Contact[],
    contactsToRemove: Contact[]
  ): Contact[] {

    var collectionWithoutContacts = collection.filter(
      (contact) => {

        return (!contactsToRemove.includes(contact));

      }
    );

    return (collectionWithoutContacts);

  }


  // I provide the sort operator for the contacts collection.
  private sortContactOperator(a: Contact, b: Contact): number {

    return (a.name.localeCompare(b.name));

  }



  sendDataRegister() {
    let me = this;
    const { selectedContacts, rule_name, rule_description, rule_template, rule_order_list, orders_number, rule_statuses_list } = me;
    let data: any = {
      rule_template,
      rule_name,
      rule_description
    }
    let newOrders_number: string[] = [];
    if (rule_order_list === 'some') {
      newOrders_number = orders_number ? orders_number.split(',') : [];
      data = {
        ...data,
        contacts: newOrders_number
      }
    }
    if (rule_order_list === 'all') {
      /* logica en caso selecione all ojo por mientras envio el valor true para  contacts */
      data = {
        ...data,
        contacts: true
      }
    }

    if (rule_statuses_list === 'statuses_only') {
      /* aqui validar en caso no escoga todos al menos un statuses */
      data = {
        ...data,
        selectedContacts
      }
    }

    if (rule_statuses_list === 'statuses_all') {
      /* logica en caso selecione statuses_all ojo por mientras envio el valor true para  selectedContacts */
      data = {
        ...data,
        selectedContacts: true
      }
    }

    console.log('Data to send', data);
  }


  quit() {
    let me = this;
    let route = me.router.url.split('/');
    route.splice(route.length - 1, 1);
    route[route.length - 1] = 'list';
    const newRoute = route.join('/');
    me.router.navigate([newRoute]);
  }


}
