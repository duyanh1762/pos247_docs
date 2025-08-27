import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {
    constructor(private imageServices:ImageHandleService){}

    emitShowImageEvent(src:string,title:string){
      this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
    }
}
