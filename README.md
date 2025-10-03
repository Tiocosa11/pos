"# Punto de Venta (POS)

## Información del Proyecto

**Alumno:** Federico Antonio Gutierrez Amaya aka Tiocosa11  
**Materia:** Arquitectura de Software  
**Facilitador:** Humberto Abril  
**Grupo:** IDGS7-2

## Descripción

Sistema de punto de venta desarrollado con HTML, CSS y JavaScript que permite:

- Gestión de inventario con 100 productos predefinidos
- Escáner de códigos de barras (3 dígitos)
- Funcionalidad de cantidad múltiple (ej: 5\*001)
- Cálculo automático de totales
- Interfaz de usuario intuitiva con botones funcionales
- Sistema de limpieza/borrado de carrito

## Tecnologías Utilizadas

- **HTML5** - Estructura del sitio web
- **CSS3** - Estilos y diseño responsive
- **JavaScript** - Lógica de negocio y funcionalidad

## Estructura del Proyecto

```
pos/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos del proyecto
├── js/
│   └── function.js     # Lógica y funcionalidades
├── img/
│   ├── img1.png        # Logo izquierdo
│   ├── img2.png        # Logo derecho
│   └── *.svg           # Iconos de botones
└── README.md           # Documentación del proyecto
```

## Funcionalidades

### Escáner de Productos

- Ingreso de código de 3 dígitos
- Formato múltiple: `cantidad*codigo` (ej: `5*001`)
- Validación automática de códigos

### Gestión de Carrito

- Adición automática de productos
- Cálculo de cantidades y totales
- Actualización en tiempo real

### Interfaz de Usuario

- 6 botones funcionales con iconos SVG
- Visualización de total general
- Opción de limpiar carrito completo

## Instalación y Uso

1. Clonar el repositorio
2. Abrir `index.html` en un navegador web
3. Comenzar a escanear productos usando códigos de 3 dígitos

## Ejemplos de Códigos

- `001` - Coca Cola 600ml ($25.50)
- `010` - Huevos 12 piezas ($38.00)
- `025` - Pasta Espagueti ($16.00)
- `5*001` - 5 Coca Colas ($127.50)"
