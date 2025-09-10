import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-ie-activity',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './ie-activity.component.html',
  styleUrl: './ie-activity.component.css'
})
export class IeActivityComponent {
    constructor(private imageServices: ImageHandleService) {}

    emitShowImageEvent(src: string, title: string) {
      this.imageServices.emitShowImagedEvent({
        imageSrc: src,
        imageTitle: title,
      });
    }
}
