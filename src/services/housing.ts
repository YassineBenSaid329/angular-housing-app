import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousingLocationInfo } from '../model/housinglocation';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Housing {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/locations';

  getAllHousingLocations(): Observable<HousingLocationInfo[]> {
    return this.http.get<HousingLocationInfo[]>(this.url);
  }

  getHousingLocationById(id: number): Observable<HousingLocationInfo | undefined> {
    return this.http.get<HousingLocationInfo[]>(`${this.url}?id=${id}`).pipe(
      // extract the first item or return undefined
      map(locations => locations[0] ?? undefined)
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    // console.log(firstName, lastName, email);
  }
}
