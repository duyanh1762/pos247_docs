import { Component } from '@angular/core';
import { AppImageData, ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-create-store',
  standalone: true,
  imports: [],
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.css'
})
export class CreateStoreComponent {

  constructor(private imageServices:ImageHandleService){}

  emitShowImageEvent(src:string,title:string){
    this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
  }

}
