"use strict";(self.webpackChunkng_pwa=self.webpackChunkng_pwa||[]).push([[622],{3622:(m,i,s)=>{s.r(i),s.d(i,{ImageSkeletonDirective:()=>n});var e=s(9212),r=s(7741);let n=(()=>{class a{constructor(){this.src=e.qHZ.required(),this.platformCheck=(0,e.f3M)(r.N),this.imageRef=(0,e.f3M)(e.SBq),this.renderer=(0,e.f3M)(e.Qsj),this.defaultLocalImage="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="}ngOnChanges(){this.initImage()}initImage(){if(this.platformCheck.onServer)return;this.renderer.addClass(this.imageRef.nativeElement,"animate-skeleton-loading");const t=new Image;this.src&&(t.onload=()=>{this.setImage(this.resolveImage(this.src())),this.renderer.removeClass(this.imageRef.nativeElement,"animate-skeleton-loading")},t.onerror=()=>{this.setImage(this.defaultLocalImage),this.renderer.removeClass(this.imageRef.nativeElement,"animate-skeleton-loading")},t.src=this.resolveImage(this.src()))}setImage(t){this.imageRef.nativeElement.setAttribute("src",t)}resolveImage(t){return t||this.defaultLocalImage}static#e=this.\u0275fac=function(l){return new(l||a)};static#t=this.\u0275dir=e.lG2({type:a,selectors:[["img","skeleton",""]],inputs:{src:[e.lbL.SignalBased,"src"]},standalone:!0,features:[e.TTD]})}return a})()}}]);