import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderChange]',
  standalone: true
})
export class BorderChangeDirective {


  @HostBinding('style.borderColor') borderColor: string = 'transparent';

  @HostListener('click') onClick() {
    this.borderColor = this.borderColor === 'transparent' ? '#E2C47C' : 'transparent';
  }
}

