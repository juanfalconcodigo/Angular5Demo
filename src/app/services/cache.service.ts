import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  private static cache = {};

  constructor() { }

  public static set(prop, value) {
    return (CacheService.cache[prop] = value);
  }

  public static get(prop) {
    const cache = CacheService.cache;
    return cache.hasOwnProperty(prop) ? cache[prop] : false;
  }

}
