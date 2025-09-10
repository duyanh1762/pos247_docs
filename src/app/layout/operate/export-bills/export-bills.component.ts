import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-export-bills',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './export-bills.component.html',
  styleUrl: './export-bills.component.css'
})
export class ExportBillsComponent {
  constructor(private imageServices:ImageHandleService){}

  emitShowImageEvent(src:string,title:string){
    this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
  }
}
