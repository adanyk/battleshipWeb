import { Component, Input, HostBinding  } from '@angular/core';

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [],
  templateUrl: './ship.component.html',
  styleUrl: './ship.component.scss'
})
export class ShipComponent {
  @Input() @HostBinding('style.width') width: string = "";
  @Input() @HostBinding('style.height') height: string = "";
  @Input() @HostBinding('style.top') top: string = "";
  @Input() @HostBinding('style.left') left: string = "";
}
