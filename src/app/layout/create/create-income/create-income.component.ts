import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-create-income',
  standalone: true,
  imports: [],
  templateUrl: './create-income.component.html',
  styleUrl: './create-income.component.css'
})
export class CreateIncomeComponent {
    constructor(private imageServices: ImageHandleService) {}

    emitShowImageEvent(src: string, title: string) {
      this.imageServices.emitShowImagedEvent({
        imageSrc: src,
        imageTitle: title,
      });
    }
}
