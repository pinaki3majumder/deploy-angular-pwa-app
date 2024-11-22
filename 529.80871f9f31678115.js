"use strict";(self.webpackChunkng_pwa=self.webpackChunkng_pwa||[]).push([[529],{529:(b,h,n)=>{n.r(h),n.d(h,{AboutRoutes:()=>y});var s=n(9212),l=n(6673),c=n(9862),d=n(4664),u=n(7398),g=n(2096),m=n(9397);let v=(()=>{class o{constructor(){this.http=(0,s.f3M)(c.eN),this.watch=(0,s.tdS)(null),this.nowWatchingEndpoint="users/watching",this.recentlyWatchedEndpoint="sync/history",(0,s.cEC)(()=>{this.getResult()})}movieData(t){const a=Array.isArray(t),e=a?t[0]:t;if("type"in e){const i="movie"===e.type,r=i?e.movie:e.show;return{type:e.type,headTitle:r.title,title:i?"Movie":`Season ${e.episode.season} - Episode ${e.episode.number}`,year:r.year,tmdb:r.ids.tmdb,isWatching:!a,watchedAt:a?t[0].watched_at:null,url:i?`movies/${e.movie.ids.slug}`:`shows/${e.show.ids.slug}/seasons/${e.episode.season}/episodes/${e.episode.number}`}}throw new Error("Invalid data format")}startEndDateByThisYear(){return{startDate:new Date(`${(new Date).getFullYear()}-01-01`).toISOString(),endDate:(new Date).toISOString()}}getWatching(){let t=new c.WM;return t=t.append("Content-Type","application/json"),t=t.append("trakt-api-version",""),t=t.append("trakt-api-key",""),this.http.get(this.nowWatchingEndpoint,{headers:t}).pipe((0,d.w)(a=>{if(!a){t=t.append("Authorization","Bearer");const{startDate:e,endDate:p}=this.startEndDateByThisYear();let i=(new c.LE).set("start_at",e).set("end_at",p);return this.http.get(this.recentlyWatchedEndpoint,{params:i,headers:t}).pipe((0,u.U)(r=>this.movieData(r)))}return(0,g.of)(this.movieData(a))}))}getResult(){this.getWatching().pipe((0,d.w)(t=>{const a=new c.WM({accept:"application/json",Authorization:"Bearer"});let e=(new c.LE).set("include_image_language","").set("end_at","");return this.http.get(`${"movie"==t.type?"movie":"tv"}/${t.tmdb}/images`,{params:e,headers:a}).pipe((0,m.b)(r=>this.watch.set({...t,image:`https://image.tmdb.org/t/p/original/${r.posters[0].file_path}`})))})).subscribe()}static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var f=n(5663);const y=[{path:"",component:(()=>{class o{constructor(){this.metaService=(0,s.f3M)(l.R),this.traktTvService=(0,s.f3M)(v),this.metaService.setMetaTags(`About - ${f.Z.name}`,"Dive into a curated space to learn more about the person behind the name",["bio","biography","information","about","contact","detail"])}static#t=this.\u0275fac=function(a){return new(a||o)};static#e=this.\u0275cmp=s.Xpm({type:o,selectors:[["about"]],standalone:!0,features:[s.jDz],decls:4,vars:0,consts:[[1,"flex","flex-col","max-w-screen-lg","justify-between","mx-auto","gap-16","dark:text-gray-200","overflow-y-hidden"],[1,"flex","flex-col","gap-5"],[1,"text-2xl","font-semibold","dark:text-white"]],template:function(a,e){1&a&&(s.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),s._uU(3,"About Me"),s.qZA()()())},encapsulation:2})}return o})()}]}}]);