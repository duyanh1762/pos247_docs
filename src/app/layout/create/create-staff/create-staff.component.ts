import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-create-staff',
  standalone: true,
  imports: [],
  templateUrl: './create-staff.component.html',
  styleUrl: './create-staff.component.css'
})
export class CreateStaffComponent {
  constructor(private imageServices:ImageHandleService){}

  emitShowImageEvent(src:string,title:string){
    this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
  }
}
