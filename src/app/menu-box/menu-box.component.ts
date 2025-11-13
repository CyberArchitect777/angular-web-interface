import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'menu-box',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.css'],
})
export class MenuBox {
  @Input() title: string = 'Menu';
  @Input() description: string = "Description";
  @Input() route: string = "index";

}
