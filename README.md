
# Frontend React Productos Garbarino

Esta es la parte de frontend del ejercicio de frontend de la entrevista de trabajo en Garbarino.

# General

Se utilizó React para armar el frontend que consumirá la aplicación backend.


# Estructura

La aplicación está estructurada de la siguiente manera:
 ```
  /App.js -> Entry point de la aplicación. Define las rutas de la misma.
  /Home.js -> Genera las primeras peticiones de productos y categorias al backend y renderea el markup en base a lo que se obtuvo como respuesta.
  /ProductList.js -> renderea el listado de productos.
  /Product.js -> renderea cada item de un producto. 
  /ProductDetail.js -> renderea el detalle del producto que se está viendo.
  /ProductForm.js -> formulario de creación de productos.
  ```
 
# Instalación

 ```
 1. git clone https://github.com/lnzzz/frontend.git
 2. ejecutar 'npm install' dentro del directorio en el cual fue clonado el repo.
 3. correr 'npm start'
 ```
 
 Si todo salió OK, debería abrirse un navegador con la aplicación corriendo en localhost:3000 con el listado de productos y el formulario de carga.
 
 En caso de no poder comunicarse con el backend, apareceran 2 mensajes de error de que no pudieron cargarse los productos y las categorías.
