import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inventario } from '../models/inventario';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  selectedInventario: Inventario;
  inventarios: Inventario[];
  readonly URL_API = 'http://localhost:3000/api/inventarios';

  constructor(private http: HttpClient) {
    this.selectedInventario = new Inventario();
    this.inventarios = [];
  }

  // Metodo Buscar -  Get
  getInventario() {
    return this.http.get(this.URL_API);
  }

  // Metodo Crear - Post
  postInventario(Inventario: Inventario) {
    return this.http.post(this.URL_API, Inventario);
  }

  // Metodo Actualizar - Put
  putInventario(_id: any, Inventario: Inventario) {
    return this.http.put(this.URL_API + `/${_id}`, Inventario);
  }

  // Metodo Eliminar - Delete
  deleteInventario(_id: any) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
