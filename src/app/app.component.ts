import { Component } from '@angular/core';
import {colors} from "@angular/cli/utilities/color";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles:['h3{color: dodgerblue}']
})
export class AppComponent {
  name = 'Kamlesh';
  username='';
}
