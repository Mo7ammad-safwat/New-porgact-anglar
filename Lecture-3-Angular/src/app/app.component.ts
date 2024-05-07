import { Component } from '@angular/core';
import { Prodact } from './prodact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Lecture-3-Angular';
 prodactdetals: any = [];
 onaddpro(supmt:Prodact)
{
  this.prodactdetals.push({
    nam:supmt.nam,
    img:supmt.img,
    pris:supmt.pris,
    des:supmt.des
  })
  console.log(this.prodactdetals)
}

}
