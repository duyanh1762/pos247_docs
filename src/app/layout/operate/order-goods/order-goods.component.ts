import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-order-goods',
  standalone: true,
  imports: [],
  templateUrl: './order-goods.component.html',
  styleUrl: './order-goods.component.css'
})
export class OrderGoodsComponent {
  constructor(private imageServices:ImageHandleService){}

  emitShowImageEvent(src:string,title:string){
    this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
  }
}
