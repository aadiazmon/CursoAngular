import { HttpClient, HttpParams, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, GiphySearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string = 'vX1VkZQTXwFF0yLu2iS64TYnZbfoq30w';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  private _tagsHistory: string[] = [];

  private _gifsList:Gif[] = [];

  constructor(private httpClient: HttpClient) {
    this.getLocalStorage();
  }

  get tagsHistory():string[] {
    return [...this._tagsHistory];
  }

  get gifsList():Gif[] {
    return [...this._gifsList];
  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private getLocalStorage():void {
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);
  }

  private organizeHistory(tag:string) {
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t != tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);

    this.saveLocalStorage();
  }

  public searchTag(tag:string):void {
    if(tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', 10);

    this.httpClient.get<GiphySearchResponse>(`${this.serviceUrl}/search`, {params:params})
      .subscribe(result => {
        this._gifsList = result.data;
      });
  }
}
