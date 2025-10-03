// Arreglo con 100 productos
const productos = [
    { codigo: "001", nombre: "Coca Cola 600ml", precio: 25.50 },
    { codigo: "002", nombre: "Pepsi 600ml", precio: 24.00 },
    { codigo: "003", nombre: "Agua Bonafont 1L", precio: 18.00 },
    { codigo: "004", nombre: "Galletas Oreo", precio: 32.50 },
    { codigo: "005", nombre: "Pan Bimbo Blanco", precio: 28.00 },
    { codigo: "006", nombre: "Leche Lala 1L", precio: 22.50 },
    { codigo: "007", nombre: "Yogurt Danone", precio: 15.00 },
    { codigo: "008", nombre: "Queso Oaxaca", precio: 45.00 },
    { codigo: "009", nombre: "Jamón de Pavo", precio: 65.00 },
    { codigo: "010", nombre: "Huevos 12 piezas", precio: 38.00 },
    { codigo: "011", nombre: "Tortillas de Maíz", precio: 16.00 },
    { codigo: "012", nombre: "Frijoles Negros", precio: 19.50 },
    { codigo: "013", nombre: "Arroz Blanco 1kg", precio: 24.00 },
    { codigo: "014", nombre: "Aceite Capullo", precio: 42.00 },
    { codigo: "015", nombre: "Sal de Mesa", precio: 8.50 },
    { codigo: "016", nombre: "Azúcar Estándar", precio: 21.00 },
    { codigo: "017", nombre: "Café Nescafé", precio: 85.00 },
    { codigo: "018", nombre: "Té Lipton", precio: 35.00 },
    { codigo: "019", nombre: "Chocolate Abuelita", precio: 28.50 },
    { codigo: "020", nombre: "Cereal Zucaritas", precio: 62.00 },
    { codigo: "021", nombre: "Avena Quaker", precio: 48.00 },
    { codigo: "022", nombre: "Atún Dolores", precio: 18.50 },
    { codigo: "023", nombre: "Sardinas en Tomate", precio: 22.00 },
    { codigo: "024", nombre: "Sopa Maruchan", precio: 12.50 },
    { codigo: "025", nombre: "Pasta Espagueti", precio: 16.00 },
    { codigo: "026", nombre: "Salsa de Tomate", precio: 14.50 },
    { codigo: "027", nombre: "Mayonesa McCormick", precio: 38.00 },
    { codigo: "028", nombre: "Mostaza Clemente", precio: 24.00 },
    { codigo: "029", nombre: "Ketchup Del Monte", precio: 26.50 },
    { codigo: "030", nombre: "Papel Higiénico", precio: 45.00 },
    { codigo: "031", nombre: "Jabón de Tocador", precio: 12.00 },
    { codigo: "032", nombre: "Shampoo Sedal", precio: 58.00 },
    { codigo: "033", nombre: "Pasta Dental", precio: 35.50 },
    { codigo: "034", nombre: "Desodorante Rexona", precio: 48.00 },
    { codigo: "035", nombre: "Detergente Ariel", precio: 125.00 },
    { codigo: "036", nombre: "Suavitel Aroma", precio: 42.00 },
    { codigo: "037", nombre: "Cloro Cloralex", precio: 28.50 },
    { codigo: "038", nombre: "Pinol Limpiador", precio: 32.00 },
    { codigo: "039", nombre: "Esponja para Trastes", precio: 8.50 },
    { codigo: "040", nombre: "Bolsas de Basura", precio: 36.00 },
    { codigo: "041", nombre: "Manzanas Red 1kg", precio: 48.00 },
    { codigo: "042", nombre: "Plátanos 1kg", precio: 22.00 },
    { codigo: "043", nombre: "Naranjas 1kg", precio: 18.50 },
    { codigo: "044", nombre: "Limones 1kg", precio: 25.00 },
    { codigo: "045", nombre: "Tomates 1kg", precio: 32.00 },
    { codigo: "046", nombre: "Cebollas 1kg", precio: 28.50 },
    { codigo: "047", nombre: "Papas 1kg", precio: 24.00 },
    { codigo: "048", nombre: "Zanahorias 1kg", precio: 18.00 },
    { codigo: "049", nombre: "Lechuga Romana", precio: 15.50 },
    { codigo: "050", nombre: "Cilantro Manojo", precio: 8.00 },
    { codigo: "051", nombre: "Carne Molida 1kg", precio: 120.00 },
    { codigo: "052", nombre: "Pollo Entero", precio: 85.00 },
    { codigo: "053", nombre: "Pescado Tilapia", precio: 95.00 },
    { codigo: "054", nombre: "Camarones 500g", precio: 180.00 },
    { codigo: "055", nombre: "Salchichas Viena", precio: 45.00 },
    { codigo: "056", nombre: "Chorizo Español", precio: 65.00 },
    { codigo: "057", nombre: "Tocino Ahumado", precio: 78.00 },
    { codigo: "058", nombre: "Mantequilla Lala", precio: 48.50 },
    { codigo: "059", nombre: "Crema Ácida", precio: 28.00 },
    { codigo: "060", nombre: "Queso Panela", precio: 52.00 },
    { codigo: "061", nombre: "Sprite 600ml", precio: 24.00 },
    { codigo: "062", nombre: "Fanta Naranja", precio: 23.50 },
    { codigo: "063", nombre: "Jugo del Valle", precio: 18.00 },
    { codigo: "064", nombre: "Energizante Red Bull", precio: 42.00 },
    { codigo: "065", nombre: "Cerveza Corona", precio: 28.00 },
    { codigo: "066", nombre: "Vino Tinto Casa", precio: 125.00 },
    { codigo: "067", nombre: "Tequila Jimador", precio: 285.00 },
    { codigo: "068", nombre: "Ron Bacardí", precio: 195.00 },
    { codigo: "069", nombre: "Whisky Johnnie", precio: 425.00 },
    { codigo: "070", nombre: "Vodka Absolut", precio: 385.00 },
    { codigo: "071", nombre: "Cigarros Marlboro", precio: 65.00 },
    { codigo: "072", nombre: "Encendedor Bic", precio: 12.00 },
    { codigo: "073", nombre: "Pilas AA Duracell", precio: 45.00 },
    { codigo: "074", nombre: "Cargador USB", precio: 125.00 },
    { codigo: "075", nombre: "Audífonos Básicos", precio: 85.00 },
    { codigo: "076", nombre: "Cable HDMI", precio: 95.00 },
    { codigo: "077", nombre: "Mouse Inalámbrico", precio: 185.00 },
    { codigo: "078", nombre: "Teclado USB", precio: 245.00 },
    { codigo: "079", nombre: "Memoria USB 16GB", precio: 165.00 },
    { codigo: "080", nombre: "Tarjeta SD 32GB", precio: 285.00 },
    { codigo: "081", nombre: "Cuaderno 100 hojas", precio: 25.00 },
    { codigo: "082", nombre: "Pluma Bic Azul", precio: 8.50 },
    { codigo: "083", nombre: "Lápiz del 2", precio: 5.00 },
    { codigo: "084", nombre: "Goma de Borrar", precio: 6.50 },
    { codigo: "085", nombre: "Regla 30cm", precio: 12.00 },
    { codigo: "086", nombre: "Tijeras Escolares", precio: 18.50 },
    { codigo: "087", nombre: "Pegamento en Barra", precio: 15.00 },
    { codigo: "088", nombre: "Marcador Negro", precio: 22.00 },
    { codigo: "089", nombre: "Corrector Líquido", precio: 16.50 },
    { codigo: "090", nombre: "Calculadora Básica", precio: 125.00 },
    { codigo: "091", nombre: "Aspirina 500mg", precio: 35.00 },
    { codigo: "092", nombre: "Paracetamol", precio: 28.50 },
    { codigo: "093", nombre: "Jarabe para Tos", precio: 65.00 },
    { codigo: "094", nombre: "Vendas Elásticas", precio: 42.00 },
    { codigo: "095", nombre: "Alcohol 70%", precio: 18.00 },
    { codigo: "096", nombre: "Algodón Hidrófilo", precio: 22.50 },
    { codigo: "097", nombre: "Termómetro Digital", precio: 185.00 },
    { codigo: "098", nombre: "Vitamina C", precio: 85.00 },
    { codigo: "099", nombre: "Curitas Adhesivas", precio: 24.00 },
    { codigo: "100", nombre: "Gel Antibacterial", precio: 32.50 }
];

// Función para buscar producto por código
function buscarProductoPorCodigo(codigo) {
    return productos.find(producto => producto.codigo === codigo);
}

// Función para mostrar todos los productos
function mostrarTodosLosProductos() {
    console.table(productos);
}

// Función para agregar un nuevo producto
function agregarProducto(codigo, nombre, precio) {
    const nuevoProducto = {
        codigo: codigo,
        nombre: nombre,
        precio: precio
    };
    productos.push(nuevoProducto);
}

// Ejemplos de uso:
// console.log(buscarProductoPorCodigo("001"));
// mostrarTodosLosProductos();
// agregarProducto("101", "Nuevo Producto", 50.00);

// Arreglo para llevar el control de la compra actual
let carritoCompra = [];

// Función para agregar producto al carrito
function agregarProductoAlCarrito(entrada) {
    let cantidad = 1;
    let codigo = entrada;
    
    // Verificar si la entrada tiene el formato "cantidad*codigo"
    if (entrada.includes("*")) {
        const partes = entrada.split("*");
        if (partes.length === 2) {
            const cantidadInput = parseInt(partes[0]);
            const codigoInput = partes[1];
            
            // Validar que la cantidad sea un número válido y positivo
            if (isNaN(cantidadInput) || cantidadInput <= 0) {
                alert("La cantidad debe ser un número positivo. Ejemplo: 5*001");
                return;
            }
            
            // Validar que el código tenga 3 dígitos
            if (codigoInput.length !== 3) {
                alert("El código debe tener exactamente 3 dígitos. Ejemplo: 5*001");
                return;
            }
            
            cantidad = cantidadInput;
            codigo = codigoInput;
        } else {
            alert("Formato incorrecto. Use: cantidad*codigo (ejemplo: 5*001)");
            return;
        }
    } else {
        // Validar código normal de 3 dígitos
        if (codigo.length !== 3) {
            alert("El código debe tener exactamente 3 dígitos");
            return;
        }
    }
    
    const producto = buscarProductoPorCodigo(codigo);
    
    if (!producto) {
        alert("Producto no encontrado. Código: " + codigo);
        return;
    }
    
    // Verificar si el producto ya está en el carrito
    const productoExistente = carritoCompra.find(item => item.codigo === codigo);
    
    if (productoExistente) {
        // Si ya existe, aumentar la cantidad
        productoExistente.cantidad += cantidad;
        productoExistente.total = productoExistente.precio * productoExistente.cantidad;
    } else {
        // Si no existe, agregarlo al carrito
        carritoCompra.push({
            codigo: producto.codigo,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cantidad,
            total: producto.precio * cantidad
        });
    }
    
    actualizarTablaCarrito();
}

// Función para actualizar la tabla HTML del carrito
function actualizarTablaCarrito() {
    const tbody = document.getElementById("bdContenido");
    tbody.innerHTML = ""; // Limpiar la tabla
    
    carritoCompra.forEach(item => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${item.nombre}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td>${item.cantidad}</td>
            <td>$${item.total.toFixed(2)}</td>
        `;
        tbody.appendChild(fila);
    });
    
    // Actualizar el total general
    actualizarTotalGeneral();
}

// Función para calcular y actualizar el total general
function actualizarTotalGeneral() {
    const totalGeneral = carritoCompra.reduce((total, item) => total + item.total, 0);
    const inputTotal = document.getElementById("totalGeneral");
    inputTotal.value = `$${totalGeneral.toFixed(2)}`;
}

// Función para limpiar/borrar todo el carrito
function limpiarCarrito() {
    // Confirmar antes de borrar
    if (confirm("¿Está seguro que desea borrar toda la lista de productos?")) {
        carritoCompra = []; // Vaciar el carrito
        actualizarTablaCarrito(); // Actualizar la tabla (se mostrará vacía)
        
        // Mostrar mensaje de confirmación
        alert("Lista de productos borrada exitosamente");
    }
}

// Función para limpiar el input del escáner
function limpiarEscaner() {
    const escaner = document.querySelector(".escaner");
    escaner.value = "";
}

// Event listener para el escáner cuando se carga la página
document.addEventListener("DOMContentLoaded", function() {
    const escaner = document.querySelector(".escaner");
    
    escaner.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const entrada = escaner.value.trim();
            
            if (entrada.length > 0) {
                agregarProductoAlCarrito(entrada);
                limpiarEscaner();
            } else {
                alert("Ingrese un código o cantidad*código");
                limpiarEscaner();
            }
        }
    });
    
    // Placeholder para el input
    escaner.placeholder = "Código: 001 o Cantidad*Código: 5*001";
    
    // Event listener para el botón de borrar (btn6)
    const btnBorrar = document.getElementById("btn6");
    btnBorrar.addEventListener("click", function() {
        limpiarCarrito();
    });
});
