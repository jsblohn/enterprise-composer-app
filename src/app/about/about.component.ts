/*
============================================
; Title:  about.component.ts
; Author: Professor Krasso
; Date:   30 July 2020
; Modified By: Janet Blohn
; Description: Assignment 4.4 – Async Pipe
; TypeScript component for about.component for enterprise-composer-app
============================================
*/

/* Import required module from Angular */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

/* Export as class AboutComponent */
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
