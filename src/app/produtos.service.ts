import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private apiUrl = "http://localhost:3000/"

  constructor() { }

  getDadosApi() {
  
    return axios.get(`${this.apiUrl}api/products`)
  }
}
