import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router, RouterOutlet, Routes } from '@angular/router';
import { routes } from '../app.routes';
import { NgFor } from '@angular/common';
import { AppImageData, ImageHandleService } from '../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  @ViewChild("overlay",{static:true,read:ElementRef}) overlayImage!:ElementRef;

  docs: Routes = [];
  currentUrl: string = '';
  currentP: Route | any;
  currentC: Route | any;
  imageDataSrc:string = "";
  imageDataTitle:string = "";

  constructor(private router: Router, private imageEvent:ImageHandleService){}

  ngOnInit(): void {
    this.docs = routes.filter((p: Route) => {
      return p.path != 'home' && p.path?.indexOf("in-app") === -1 && p.path.length > 0 && p.path != "**";
    });
    console.log(this.docs.length);
    this.getDirectory();
    this.imageEvent.childEvent$.subscribe((data:AppImageData)=>{
      this.imageDataSrc = data.imageSrc;
      this.imageDataTitle = data.imageTitle;
      this.overlayImage.nativeElement.style.display = "flex";
    });
  }

  navigator(c_path: string, p_path: string) {
    this.router.navigate([`${p_path}/${c_path}`]);
    console.log(`${p_path}/${c_path}`);
    this.getDirectory();
  }

  getDirectory() {
    this.currentUrl = this.router.url;
    let urlSplice: Array<string> = this.currentUrl.split('/');
    this.currentP = this.docs.find((p: Route) => {
      return p.path === urlSplice[1] + '/' + urlSplice[2];
    });

    this.currentC = this.currentP.children.find((p: Route) => {
      return p.path === urlSplice[3];
    });
  }

  closeImage(){
    this.overlayImage.nativeElement.style.display = "none";
  }
}
