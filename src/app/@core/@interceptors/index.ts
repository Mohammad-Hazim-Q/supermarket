import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { ErrorHandlerInterceptor } from "./error-handler/error-handler.interceptor";
import { LoaderInterceptor } from "./loader/loader.interceptor";

export const appInterceptors: Provider[] = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorHandlerInterceptor,
        multi: true
    },
]