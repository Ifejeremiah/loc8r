import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header: {
      title: 'About Loc8r',
      strapline: ''
    },
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sitamet, consectetur adipiscing elit.jkjlsjh jkfdshjkdhj \nLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias incidunt molestiae debitis provident explicabo veniam dolor saepe repudiandae pariatur nesciunt ab voluptate delectus a reprehenderit quaerat consectetur porro aspernatur facilis, eaque mollitia blanditiis. Ipsum, velit facere quos, suscipit itaque porro sunt odit sapiente sed inventore quis, deserunt eos libero. Amet consectetur minus ipsam blanditiis harum?\n\nAliquam est deserunt dolore similique dicta voluptatem facilis eos commodi aspernatur! Dolorum sint sed quia hic sunt commodi eum esse neque provident, perspiciatis fuga nobis dolorem expedita doloremque eius error minima consequuntur amet, architecto non autem facilis? Est fugiat blanditiis saepe! Quae, quidem. Consectetur facilis mollitia perspiciatis aliquid doloribus iste sint veniam?\nUllam a quibusdam saepe cupiditate, quidem dolor temporibus nostrum sit minus animi quos neque consectetur ab sapiente repellat natus quam odio fugiat'
  }
}
