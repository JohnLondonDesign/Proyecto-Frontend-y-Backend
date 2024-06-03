const mongoose = require("mongoose");
const { Schema } = mongoose;

const InventarioSchema = new Schema({
    
  codigo: {
    type: String,
    require: true,
  },

  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Inventario", InventarioSchema);
