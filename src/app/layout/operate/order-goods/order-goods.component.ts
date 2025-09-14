import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { GeneralInstructionsComponent } from '../../in-app/general-instructions/general-instructions.component';

@Component({
  selector: 'app-order-goods',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './order-goods.component.html',
  styleUrl: './order-goods.component.css'
})
export class OrderGoodsComponent {
  constructor(private imageServices:ImageHandleService){}

  emitShowImageEvent(src:string,title:string){
    this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
  }
}
