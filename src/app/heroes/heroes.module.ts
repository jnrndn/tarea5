import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HeroSearchService } from './hero-search/hero-search.service';
import { HeroService } from './hero-detail/hero.service';


import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers:[HeroService, HeroSearchService],
  exports:[HeroesComponent, HeroSearchComponent]
})
export class HeroesModule { }
