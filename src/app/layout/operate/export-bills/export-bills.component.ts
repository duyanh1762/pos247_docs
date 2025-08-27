import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-export-bills',
  standalone: true,
  imports: [],
  templateUrl: './export-bills.component.html',
  styleUrl: './export-bills.component.css'
})
export class ExportBillsComponent {
  constructor(private imageServices:ImageHandleService){}

  emitShowImageEvent(src:string,title:string){
    this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
  }
}
