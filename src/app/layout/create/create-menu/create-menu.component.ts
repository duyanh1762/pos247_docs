import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-create-menu',
  standalone: true,
  imports: [],
  templateUrl: './create-menu.component.html',
  styleUrl: './create-menu.component.css',
})
export class CreateMenuComponent {
  constructor(private imageServices: ImageHandleService) {}

  emitShowImageEvent(src: string, title: string) {
    this.imageServices.emitShowImagedEvent({
      imageSrc: src,
      imageTitle: title,
    });
  }
}
