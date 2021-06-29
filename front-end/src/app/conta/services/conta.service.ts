import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class ContaService {
    
    constructor(private htpp: HttpClient) { }

    registrarUsuario(usuario: Usuario) {

    }

    login(usuario: Usuario) {

    }
}