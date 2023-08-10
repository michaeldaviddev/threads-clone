import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThreadComponent } from 'src/app/components/thread/thread.component';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ThreadComponent]
})
export class HomePage implements OnInit {
  prefersDark!: MediaQueryList;

  posts: Post[] = [
    {
      user: {
        username: 'user123',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/467.jpg'
      },
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      created_at: '1 h'
    },
    {
      user: {
        username: 'jane_doe',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/608.jpg'
      },
      caption: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      created_at: '2 h'
    },
    {
      user: {
        username: 'alex_smith',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/109.jpg'
      },
      caption: 'Sed eget ipsum in libero facilisis tincidunt.',
      created_at: '3 h'
    },
    {
      user: {
        username: 'user456',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/896.jpg'
      },
      caption: 'Nulla facilisi. Vivamus a varius justo.',
      created_at: '4 h'
    },
    {
      user: {
        username: 'michael_johnson',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1128.jpg'
      },
      caption: 'Aenean tincidunt odio nec libero interdum, eu lacinia justo ultricies.',
      created_at: '5 h'
    },
    {
      user: {
        username: 'user789',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/495.jpg'
      },
      caption: 'Etiam eu urna eget dolor malesuada luctus a eu tortor.',
      created_at: '6 h'
    },
    {
      user: {
        username: 'emma_williams',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/704.jpg'
      },
      caption: 'Suspendisse ut est at enim malesuada pharetra nec vel nisi.',
      created_at: '7 h'
    },
    {
      user: {
        username: 'user101112',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/383.jpg'
      },
      caption: 'Maecenas tincidunt dolor in lectus convallis, in suscipit mauris consequat.',
      created_at: '8 h'
    },
    {
      user: {
        username: 'olivia_jones',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/513.jpg'
      },
      caption: 'Vestibulum ut orci at est mattis laoreet.',
      created_at: '9 h'
    },
    {
      user: {
        username: 'user131415',
        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/361.jpg'
      },
      caption: 'Nam feugiat libero eu metus gravida aliquet.',
      created_at: '9 h'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  }

}
