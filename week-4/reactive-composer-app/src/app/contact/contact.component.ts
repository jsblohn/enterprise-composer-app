/*
============================================
; Title: contact.component.ts
; Author: Professor Krasso
; Date:   30 July 2020
; Modified By: Janet Blohn
; Description: Exercise 4.3 – Handling Form Events with Observables
; TypeScript file for the contact component for reactive-composer-app
============================================
*/

/* Import required Angular modules */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

/* Export as class ContactComponent and load on initialization */
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
