import { inject, provideEnvironmentInitializer } from '@angular/core';
import { Routes } from '@angular/router';
import { FilmViewPage } from './pages/film-view-page/film-view-page';
import { FilmsListPage } from './pages/films-list-page/films-list-page';
import { PeopleListPage } from './pages/people-list-page/people-list-page';
import { PersonViewPage } from './pages/person-view-page/person-view-page';
import { PlanetViewPage } from './pages/planet-view-page/planet-view-page';
import { PlanetsListPage } from './pages/planets-list-page/planets-list-page';
import { StarWarSettingsPage } from './pages/star-war-settings-page/star-war-settings-page';
import { StarWarsRoot } from './pages/star-wars-root/star-wars-root';
import { OpeningCrawlSong } from './services/opening-crawl.song';

export default [
  {
    path: '',
    component: StarWarsRoot,
    providers: [
      provideEnvironmentInitializer(() => {
        inject(OpeningCrawlSong);
      }),
    ],
    children: [
      { path: '', redirectTo: 'people', pathMatch: 'full' },

      {
        path: 'people',
        children: [
          { path: '', component: PeopleListPage },
          { path: ':id', component: PersonViewPage },
        ],
      },

      {
        path: 'films',
        children: [
          { path: '', component: FilmsListPage },
          { path: ':id', component: FilmViewPage },
        ],
      },

      {
        path: 'planets',
        children: [
          { path: '', component: PlanetsListPage },
          { path: ':id', component: PlanetViewPage },
        ],
      },

      {
        path: 'settings',
        children: [{ path: '', component: StarWarSettingsPage }],
      },
    ],
  },
] as Routes;
