import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-create-goods',
  standalone: true,
  imports: [],
  templateUrl: './create-goods.component.html',
  styleUrl: './create-goods.component.css'
})
export class CreateGoodsComponent {

    constructor(private imageServices:ImageHandleService){}

    emitShowImageEvent(src:string,title:string){
      this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
    }
}
