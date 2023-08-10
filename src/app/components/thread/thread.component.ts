import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ThreadComponent  implements OnInit {
  @Input() post!: Post;

  constructor() { }

  ngOnInit() {}

}
