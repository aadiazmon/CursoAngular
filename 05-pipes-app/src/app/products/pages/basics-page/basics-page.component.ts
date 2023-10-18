import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower:string = 'alejandro';
  public nameUpper:string = 'ALEJANDRO';
  public fullName:string = 'aLeJaNdRo';
  public customDate:Date = new Date();
}
