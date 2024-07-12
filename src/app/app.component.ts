import { Component } from '@angular/core';
import { BaseComponent } from '@shared/@components/base.component';
import { environment } from 'environments/environment';
import * as appLocales from '../assets/i18n/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  title = 'supermarket-app';


  constructor() {
    super();
    this._initLanguageConfig();
  }

  private _initLanguageConfig() {
    this.translate.addLangs(environment.languages);
    this.setTranslations();

    let systemLanguage = this.systemService.getSystemLanguage();

    if (!systemLanguage) {
      systemLanguage = environment.defaultLanguage || 'en';
      this.systemService.setSystemLanguage(systemLanguage);
    }

    this.translate.setDefaultLang(systemLanguage);
    this.translate.use(systemLanguage);

    this.systemService.reflectDirectionChanges(systemLanguage)
  }

  private setTranslations() {

    this.translate.setTranslation(appLocales.englishLocal.lang, appLocales.englishLocal.data, true);
    this.translate.setTranslation(appLocales.arabicLocal.lang, appLocales.arabicLocal.data, true);
  }

}
