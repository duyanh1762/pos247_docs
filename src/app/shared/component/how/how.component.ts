import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'how',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how.component.html',
  styleUrl: './how.component.css'
})
export class HowComponent implements AfterViewInit {

  @ContentChildren(StepComponent)
  private steps!: QueryList<StepComponent>;

  @Input()
  public name: string = 'how';

  @Input()
  public expanded: boolean = false;

  @Input()
  public showIndex:boolean = true;

  ngAfterViewInit(): void {
    if(this.showIndex === true){
      this.steps.forEach((step, index) => step.index = index + 1);
    }
  }
}
