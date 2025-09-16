import { Component } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-menu-policies',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './menu-policies.component.html',
  styleUrl: './menu-policies.component.css',
})
export class MenuPoliciesComponent {
  constructor(private imageServices: ImageHandleService) {}

  emitShowImageEvent(src: string, title: string) {
    this.imageServices.emitShowImagedEvent({
      imageSrc: src,
      imageTitle: title,
    });
  }
}
