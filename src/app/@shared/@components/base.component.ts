import { Direction } from "@angular/cdk/bidi";
import { Location } from "@angular/common";
import { Injectable, OnDestroy, inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
// import { FormService } from "@shared/@services/@form/form.service";
// import { HelperService } from "@shared/@services/@helper/helper.service";
// import { MessageService } from "@shared/@services/@messages/message.service";
// import { SystemService } from "@shared/@services/@system/system.service";
import { SystemService } from "@services/system/system.service";
import { Subject } from "rxjs";


// A base class for inheriting all key services, getters, and functions. (inject function is really helpful).
@Injectable()
export class BaseComponent implements OnDestroy {

    // Unsubscribe from observables through this property.
    protected destroy$: Subject<boolean> = new Subject();

    // protected messageService = inject(MessageService);
    protected translate = inject(TranslateService);
    protected systemService = inject(SystemService);
    protected titleService = inject(Title);

    protected _formBuilder = inject(FormBuilder)
    protected router = inject(Router)
    protected activatedRoute = inject(ActivatedRoute)
    protected _location = inject(Location)

    constructor() { }

    protected get systemLanguages(): string[] {
        return this.systemService.systemLanguages
    }

    protected get currentLanguage(): string {
        return this.systemService.currentLanguage
    }

    protected get filteredSystemLanguages(): string[] {
        return this.systemLanguages.filter(lang => lang !== this.translate.currentLang);
    }

    protected get direction(): Direction {
        return this.systemService.direction;
    }

    protected goBack() {
        this._location.back();
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
    }
}
