import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-settlement',
  standalone: true,
  imports: [],
  templateUrl: './settlement.component.html',
  styleUrl: './settlement.component.css'
})
export class SettlementComponent {
  constructor(private imageServices:ImageHandleService){}

  emitShowImageEvent(src:string,title:string){
    this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
  }
}
