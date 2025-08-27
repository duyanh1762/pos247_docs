import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-clock-out',
  standalone: true,
  imports: [],
  templateUrl: './clock-out.component.html',
  styleUrl: './clock-out.component.css'
})
export class ClockOutComponent {
    constructor(private imageServices:ImageHandleService){}

    emitShowImageEvent(src:string,title:string){
      this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
    }
}
