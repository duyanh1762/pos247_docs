import { Component } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  constructor(private imageServices: ImageHandleService) {}

  emitShowImageEvent(src: string, title: string) {
    this.imageServices.emitShowImagedEvent({
      imageSrc: src,
      imageTitle: title,
    });
  }
}
