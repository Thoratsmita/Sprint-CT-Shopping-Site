import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
}

public getJSON(): Observable<any> {
    return this.http.get("./assets/productlist.json");
}

}
