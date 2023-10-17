import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input()
  public placeHolder:string = '';
  @Input()
  public initialSearchText:string = '';

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();

  private debouncer:Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  public emitSearch(text:string):void {
    this.onSearch.emit(text);
  }

  public onKeyPress(text:string):void {
    this.debouncer.next(text);
  }

  ngOnInit():void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy():void {
    this.debouncerSubscription?.unsubscribe();
  }
}
