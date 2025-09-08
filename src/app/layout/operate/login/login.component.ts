import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private imageServices: ImageHandleService) {}

    emitShowImageEvent(src: string, title: string) {
      this.imageServices.emitShowImagedEvent({
        imageSrc: src,
        imageTitle: title,
      });
    }
}
