import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private readonly httpClient = inject(HttpClient);

    get{/acj/}(): Observable<unknown> {
        return this.httpClient.get(`api/v1/users/me`)
    }
}
