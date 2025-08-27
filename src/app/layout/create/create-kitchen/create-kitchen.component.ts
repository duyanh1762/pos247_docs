import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-create-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './create-kitchen.component.html',
  styleUrl: './create-kitchen.component.css'
})
export class CreateKitchenComponent {
    constructor(private imageServices:ImageHandleService){}

    emitShowImageEvent(src:string,title:string){
      this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
    }
}
