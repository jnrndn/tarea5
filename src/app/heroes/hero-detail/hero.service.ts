import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Hero } from './../hero';
// import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private headers = new Headers({ 'Content-type': 'application/json' });

  constructor( private http: Http ) { }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const URL = `${this.heroesUrl}/${id}`;
    return this.http.get(URL)
                    .toPromise()
                    .then(response => response.json().data as Hero)
                    .catch(this.handleError); 
  }

  update(hero:Hero): Promise<Hero> {
    const URL = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(URL, JSON.stringify(hero), {headers: this.headers})
                    .toPromise()
                    .then( () => hero )
                    .catch(this.handleError)
  }

  create(name: string): Promise<any>{
    return this.http.post(this.heroesUrl,JSON.stringify({name: name}), {headers: this.headers})
                    .toPromise()
                    .then(res => res.json().data as Hero)
                    .catch(this.handleError);
  }

  delete(id: number): Promise<any>{
    const URL = `${this.heroesUrl}/${id}`;
    return this.http.delete(URL, {headers: this.headers})
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError);
  }
  
  private handleError(error :any): Promise<any> {
    console.log('An error ocurred ', error);
    return Promise.reject(error.message || error);
    
  }
}
