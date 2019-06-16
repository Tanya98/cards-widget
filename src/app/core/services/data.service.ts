import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient) { }

    public getData() {
        return this.http.get('http://localhost:4300/api/data');
    }
}
