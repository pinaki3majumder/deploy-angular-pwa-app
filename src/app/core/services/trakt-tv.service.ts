import { Injectable, effect, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { Scrobble } from '@data/schema/trakt-tv/scrobble'
import { History } from '@data/schema/trakt-tv/history'
import { WatchItem } from '@data/schema/trakt-tv/watch-item'
import { Image } from '@data/schema/tmdb/image'

@Injectable({
  providedIn: 'root'
})

export class TraktTvService {
  http = inject(HttpClient)
  watch = signal<WatchItem | null>(null);
  nowWatchingEndpoint = `users/watching`;
  recentlyWatchedEndpoint = `sync/history`;
  constructor() {
    effect(() => {
      this.getResult();
    })
  }

  movieData(data: History[] | Scrobble): WatchItem {
    const isArray = Array.isArray(data);
    const res = isArray ? data[0] : data;
    const watchedAt = isArray ? data[0].watched_at : null
    if ('type' in res) {
      const isMovie = res.type === 'movie';
      const item = isMovie ? res.movie : res.show;
      const headTitle = item.title;
      const title = isMovie ? 'Movie' : `Season ${res.episode.season} - Episode ${res.episode.number}`
      return {
        type: res.type,
        headTitle,
        title,
        year: item.year,
        tmdb: item.ids.tmdb,
        isWatching: !isArray,
        watchedAt,
        url: isMovie ?
          `movies/${res.movie.ids.slug}` :
          `shows/${res.show.ids.slug}/seasons/${res.episode.season}/episodes/${res.episode.number}`
      };
    }
    throw new Error('Invalid data format');
  }
  startEndDateByThisYear(): { startDate: string, endDate: string } {
    const startDate = new Date(`${new Date().getFullYear()}-01-01`);
    const startDateIsoString = startDate.toISOString();
    const endDateIsoString = new Date().toISOString();
    return {
      startDate: startDateIsoString,
      endDate: endDateIsoString
    };
  }
  getWatching(): Observable<WatchItem> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', `application/json`)
    headers = headers.append('trakt-api-version', '')
    headers = headers.append('trakt-api-key', '')
    return this.http.get<Scrobble>(this.nowWatchingEndpoint, { headers }).pipe(
      switchMap(res => {
        if (!res) {
          headers = headers.append('Authorization', `Bearer`)
          const { startDate, endDate } = this.startEndDateByThisYear();
          let params = new HttpParams()
            .set('start_at', startDate)
            .set('end_at', endDate);
          return this.http.get<History[]>(this.recentlyWatchedEndpoint, { params, headers }).pipe(
            map(histories => this.movieData(histories)));
        }
        return of(this.movieData(res))
      }))
  }
  getResult(): void {
    this.getWatching().pipe(switchMap(res => {
      const headers = new HttpHeaders({
        'accept': `application/json`,
        'Authorization': `Bearer`
      });
      let params = new HttpParams()
        .set('include_image_language', '')
        .set('end_at', '');
      const type = res.type == 'movie' ? 'movie' : 'tv';
      const url = `${type}/${res.tmdb}/images`;
      return this.http.get<Image>(url, { params, headers }).pipe(tap(image => this.watch.set(
        { ...res, image: `https://image.tmdb.org/t/p/original/${image.posters[0].file_path}` }
      )))
    })).subscribe()
  }
}
