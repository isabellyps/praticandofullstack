import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BaseService } from 'src/app/services/base.service';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class ContaService extends BaseService {
  constructor(private htpp: HttpClient) {
    super();
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    let response = this.htpp
      .post(this.UrlServiceV1 + 'nova-conta', usuario, this.ObterHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  login(usuario: Usuario): Observable<Usuario> {
    let response = this.htpp
      .post(this.UrlServiceV1 + 'entrar', usuario, this.ObterHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }
}
