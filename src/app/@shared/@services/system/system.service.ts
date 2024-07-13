import { Direction } from '@angular/cdk/bidi';
import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private _translate = inject(TranslateService);

  constructor(

  ) { }

  get systemLanguages(): string[] {
    return this._translate.getLangs();
  }

  get currentLanguage(): string {
    return this._translate.currentLang == 'en' ? this._translate.instant('pages.layout.header.language.en') : this._translate.instant('pages.layout.header.language.ar');
  }

  get direction(): Direction {
    return this._translate.currentLang == "en" ? "ltr" : "rtl";
  }

  setSystemLanguage(lang: string) {
    localStorage.setItem('lang', lang);
  }

  getSystemLanguage(): string | null {
    return localStorage.getItem('lang') || null;
  }

  switchSystemLanguage(lang: string) {
    this._translate.use(lang);
    this.setSystemLanguage(lang);
    this.reflectDirectionChanges(lang);
  }

  reflectDirectionChanges(lang: string) {

    let html = document.querySelector('html')!;

    switch (lang) {
      case "ar": {
        html.setAttribute("dir", "rtl");
        break;
      }

      case "en": {
        html.setAttribute("dir", "ltr")
        break;
      }

      default: return;
    }
  }



}
