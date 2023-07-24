import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThreadComponent } from 'src/app/components/thread/thread.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ThreadComponent]
})
export class HomePage implements OnInit {
  prefersDark!: MediaQueryList;

  constructor() { }

  ngOnInit() {
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  }

}
