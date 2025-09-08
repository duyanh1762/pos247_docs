import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AppImageData{
  imageSrc:string,
  imageTitle:string,
}

@Injectable({
  providedIn: 'root',
})
export class ImageHandleService {
  constructor() {}

  private _childEvent = new Subject<AppImageData>();
  childEvent$ = this._childEvent.asObservable();

  emitShowImagedEvent(data:AppImageData) {
    this._childEvent.next(data);
  }

  showElement(element:ElementRef){
    element.nativeElement.style.display = "block"
  }
}
