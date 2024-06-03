export class Inventario {
  constructor(
    codigo = '',
    name = '',
    description = '',
    type = '',
    price = '',
    quantity = ''
  ) {
    this.codigo = codigo;
    this.name = name;
    this.description = description;
    this.type = type;
    this.price = price;
    this.quantity = quantity;
  }

  _id?: string;
  codigo: string;
  name: string;
  description: string;
  type: string;
  price: string;
  quantity: string;
}
