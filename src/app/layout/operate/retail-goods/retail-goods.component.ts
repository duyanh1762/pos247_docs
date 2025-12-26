import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-retail-goods',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './retail-goods.component.html',
  styleUrl: './retail-goods.component.css',
})
export class RetailGoodsComponent {
  constructor(private imageServices: ImageHandleService) {}

  emitShowImageEvent(src: string, title: string) {
    this.imageServices.emitShowImagedEvent({
      imageSrc: src,
      imageTitle: title,
    });
  }
}
