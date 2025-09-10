import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-goods-ie',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './goods-ie.component.html',
  styleUrl: './goods-ie.component.css'
})
export class GoodsIEComponent {
    constructor(private imageServices:ImageHandleService){}

    emitShowImageEvent(src:string,title:string){
      this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
    }
}
