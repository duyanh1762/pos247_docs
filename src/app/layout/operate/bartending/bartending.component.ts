import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-bartending',
  standalone: true,
  imports: [],
  templateUrl: './bartending.component.html',
  styleUrl: './bartending.component.css'
})
export class BartendingComponent {
  constructor(private imageServices:ImageHandleService){}

  emitShowImageEvent(src:string,title:string){
    this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
  }
}
