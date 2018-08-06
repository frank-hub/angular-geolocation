import { Injectable } from '@angular/core';
declare const Pusher: any;

@Injectable()
export class PusherService {
  constructor() {
    const pusher = new Pusher('3c0c82f2b0ff926bbc29', {
      cluster: 'ap2',
    });
    this.channel = pusher.subscribe('location');
  }
  channel;

  public init() {
    return this.channel;
  }
}