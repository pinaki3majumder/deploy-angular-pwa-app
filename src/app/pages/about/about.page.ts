import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music'
import { Watch } from '@shared/components/watch/watch'
@Component({
  selector: 'about',
  template: `
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden">
  <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">About Me</h1>
      
  </div>

</section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, Music, Watch],
  standalone: true
})
export class AboutPage{
  metaService = inject(MetaService)
  traktTvService = inject(TraktTvService)
  constructor(){
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
      )
  }
}
