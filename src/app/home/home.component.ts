import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Routes, Router } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  docs:Routes = [];

  constructor( private router:Router){}

  ngOnInit(): void {
    this.docs = routes.filter((p:Route)=>{
      return p.path != "home";
    });
  }

  navigator(c_path:string , p_path:string){
    this.router.navigate([`${p_path}/${c_path}`]);
  }
}
