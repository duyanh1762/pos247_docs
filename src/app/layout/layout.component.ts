import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router, RouterOutlet, Routes } from '@angular/router';
import { routes } from '../app.routes';
import { NgClass, NgFor } from '@angular/common';
import {
  AppImageData,
  ImageHandleService,
} from '../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  @ViewChild('overlay', { static: true, read: ElementRef })
  overlayImage!: ElementRef;

  docs: Routes = [];
  currentUrl: string = '';
  currentP: Route | any;
  currentC: Route | any;
  imageDataSrc: string = '';
  imageDataTitle: string = '';
  selectedUrl: string = '';
  constructor(public router: Router, private imageEvent: ImageHandleService) {}

  ngOnInit(): void {
    this.docs = routes.filter((p: Route) => {
      return (
        p.path != 'home' &&
        p.path?.indexOf('in-app') === -1 &&
        p.path.length > 0 &&
        p.path != '**'
      );
    });
    this.getDirectory('', '');
    this.imageEvent.childEvent$.subscribe((data: AppImageData) => {
      this.imageDataSrc = data.imageSrc;
      this.imageDataTitle = data.imageTitle;
      this.overlayImage.nativeElement.style.display = 'flex';
    });
  }

  navigator(c_path: string, p_path: string) {
    this.router.navigate([`${p_path}/${c_path}`]);
    this.getDirectory(c_path, p_path);
  }

  getDirectory(c_path: string, p_path: string) {
    if (c_path === '' && p_path === '') {
      this.currentUrl = this.router.url;
      this.selectedUrl = this.router.url;
      let urlSplice: Array<string> = this.currentUrl.split('/');
      this.currentP = this.docs.find((p: Route) => {
        return p.path === urlSplice[1] + '/' + urlSplice[2];
      });

      this.currentC = this.currentP.children.find((p: Route) => {
        return p.path === urlSplice[3];
      });
    } else {
      this.docs.forEach((p: Route) => {
        if (p.path === p_path) {
          this.currentP = p;
          p.children?.forEach((cp: Route) => {
            if (cp.path === c_path) {
              this.currentC = cp;
              this.selectedUrl = '/' + p.path + '/' + cp.path;
            }
          });
        }
      });
    }
  }

  closeImage() {
    this.overlayImage.nativeElement.style.display = 'none';
  }
}
