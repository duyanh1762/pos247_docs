import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-ie-activity',
  standalone: true,
  imports: [],
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
