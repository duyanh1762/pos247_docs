import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-create-goods',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './create-goods.component.html',
  styleUrl: './create-goods.component.css'
})
export class CreateGoodsComponent {

    constructor(private imageServices:ImageHandleService){}

    emitShowImageEvent(src:string,title:string){
      this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
    }
}
