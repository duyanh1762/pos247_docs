import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-create-partner',
  standalone: true,
  imports: [],
  templateUrl: './create-partner.component.html',
  styleUrl: './create-partner.component.css'
})
export class CreatePartnerComponent {
    constructor(private imageServices:ImageHandleService){}

    emitShowImageEvent(src:string,title:string){
      this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
    }

}
