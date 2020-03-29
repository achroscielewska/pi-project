import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment as env } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WarehouseResponseDto } from '../dto/WarehouseResponseDto';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  headers = this.prepareHeaders();

  warehouseUrl = `${env.warehouseUrl}`;
  codeQuery = `code=`;

  constructor(private httpClient: HttpClient) { }

  private prepareHeaders(): HttpHeaders {
    return new HttpHeaders().append('Content-Type', 'application/json');
  }

  getWarehouseByCode(code: string): Observable<WarehouseResponseDto> {
    return this.httpClient
      .get(`${this.warehouseUrl}?${this.codeQuery}${code}`, { ...this.headers })
      .pipe(map((res: WarehouseResponseDto) => res));
  }
}
