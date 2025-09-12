import { Component } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-qr-operate',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './qr-operate.component.html',
  styleUrl: './qr-operate.component.css'
})
export class QrOperateComponent {
      constructor(private imageServices: ImageHandleService) {}

      emitShowImageEvent(src: string, title: string) {
        this.imageServices.emitShowImagedEvent({
          imageSrc: src,
          imageTitle: title,
        });
      }
}
