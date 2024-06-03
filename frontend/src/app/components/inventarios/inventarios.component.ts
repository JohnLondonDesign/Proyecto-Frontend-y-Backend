import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Inventario } from '../../models/inventario';
import { InventarioService } from '../../services/inventario.service';

declare var M: any;
@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrl: './inventarios.component.css',
  providers: [InventarioService],
})
export class InventariosComponent implements OnInit {
  mostrar: boolean = true;

  constructor(public inventarioService: InventarioService) {}
  ngOnInit(): void {
    this.traerInventario();
  }

  traerInventario() {
    this.inventarioService.getInventario().subscribe((res) => {
      this.inventarioService.inventarios = res as Inventario[];
      console.log('Estoy Aqui');
    });
  }
  agregarInventario(form?: NgForm) {
    this.inventarioService.postInventario(form?.value).subscribe((res) => {
      this.resetForm(form);
      M.toast({ html: 'Guardado Satisfactoriamente' });
      this.traerInventario();
    });
  }

  eliminarInventario(inventario: Inventario) {
    if (confirm('¿Esta seguro de eliminarlo?')) {
      console.log(inventario._id);
      console.log(inventario);
      this.inventarioService
        .deleteInventario(inventario._id)
        .subscribe((res) => {
          this.traerInventario();
          M.toast({ html: 'Eliminado Satisfactoriamente' });
        });
    }
  }

  enviarFormulario(inventario: Inventario, form?: NgForm): void {
    form?.control.patchValue(inventario);
    this.mostrarBoton();
    this.initMaterializeCSS(); // Inicializar Materialize CSS después de actualizar los inputs
    console.log(form?.value);
  }

  actualizarInventario(form?: NgForm) {
    this.inventarioService
      .putInventario(form?.value._id, form?.value)
      .subscribe(
        (res) => {
          console.log('Inventario Actualizado', res);
          this.resetForm(form);
          this.mostrarBoton();
          this.traerInventario();
        },
        (error) => {
          console.error('Error al actualizar el inventario', error);
          this.resetForm(form);
          this.traerInventario();
        }
      );
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.inventarioService.selectedInventario = new Inventario();
      this.initMaterializeCSS(); // Inicializar Materialize CSS después de resetear el formulario
    }
  }
  mostrarBoton() {
    this.mostrar = !this.mostrar;
  }

  initMaterializeCSS() {
    setTimeout(() => {
      M.updateTextFields(); // Actualizar los labels de los inputs en Materialize CSS
    }, 0);
  }
}
