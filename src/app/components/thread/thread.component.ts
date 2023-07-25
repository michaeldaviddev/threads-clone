import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ThreadComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
