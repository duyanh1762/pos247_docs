import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-retail-order',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './retail-order.component.html',
  styleUrl: './retail-order.component.css',
})
export class RetailOrderComponent {
  constructor(private imageServices: ImageHandleService) {}

  emitShowImageEvent(src: string, title: string) {
    this.imageServices.emitShowImagedEvent({
      imageSrc: src,
      imageTitle: title,
    });
  }
}
