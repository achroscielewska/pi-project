import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment as env } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MedicineBankResponseDto } from '../dto/MedicineBankResponseDto';

@Injectable({
  providedIn: 'root'
})
export class MedicineBankService {
  headers = this.prepareHeaders();

  medicineBankUrl = `${env.bank.medicineBankUrl}`;

  constructor(private httpClient: HttpClient) { }

  private prepareHeaders(): HttpHeaders {
    return new HttpHeaders().append('Content-Type', 'application/json');
  }

  getMedicineBankElements(): Observable<MedicineBankResponseDto> {
    return this.httpClient
      .get(`${this.medicineBankUrl}`, { ...this.headers })
      .pipe(map((res: MedicineBankResponseDto) => res));
  }
}
