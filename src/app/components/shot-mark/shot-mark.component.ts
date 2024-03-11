import { Component, HostBinding, Input } from '@angular/core';
import { ShotResult } from '../../models/shot-result';

@Component({
  selector: 'app-shot-mark',
  standalone: true,
  imports: [],
  templateUrl: './shot-mark.component.html',
  styleUrl: './shot-mark.component.scss'
})
export class ShotMarkComponent {
  @Input() top: string = "";
  @Input() left: string = "";
  @Input() result: ShotResult = ShotResult.Unfired;

  @HostBinding('class') get resultClass() { return this.result.toLowerCase(); }
}
