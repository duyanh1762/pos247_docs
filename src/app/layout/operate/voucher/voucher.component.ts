import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {
  constructor(private imageServices:ImageHandleService){}

  emitShowImageEvent(src:string,title:string){
    this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
  }
}
