import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!:string;

  @Input()
  public alt!:string;

  public imgLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('Url property is required');
    if(!this.alt) throw new Error('Alt property is required');
  }

  onImgLoaded() {
    setTimeout(() => {
      this.imgLoaded = true;
    }, 250);
  }
}
