# Proyecto de Autenticación con Next.js

Este proyecto es una aplicación de autenticación básica desarrollada con **Next.js**. Incluye funcionalidades de registro, inicio de sesión, cierre de sesión y un panel de control protegido.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

* **Node.js** (versión 16 o superior)
* **npm** o **yarn** (gestor de paquetes)

---

## Configuración Inicial

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Frankmolin/crud-nextjs.git
   cd proyecto-autenticacion-next
   ```
2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```
3. Configura las variables de entorno:

   * Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

     ```env
    
     LASECRETA=tu_clave_secreta
     ```
4. Configura la base de datos (si usas **Prisma**):

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

---

## Ejecución del Proyecto

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```
2. Abre tu navegador y visita:

   ```
   http://localhost:3000
   ```

---

## Funcionalidades

### 1. Registro

* **Ruta**: `/register`
* Permite a los usuarios registrarse proporcionando un correo electrónico y una contraseña.

### 2. Inicio de Sesión

* **Ruta**: `/login`
* Permite a los usuarios autenticarse con sus credenciales.

### 3. Cierre de Sesión

* Desde el Dashboard, los usuarios pueden cerrar sesión, lo que elimina el token de autenticación.

### 4. Panel de Control

* **Ruta**: `/dashboard`
* Página protegida que solo es accesible para usuarios autenticados.
* Muestra una lista de usuarios registrados.

---

## Estructura del Proyecto

```
├── app
│   ├── login         # Página de inicio de sesión
│   ├── register      # Página de registro
│   └── dashboard     # Página protegida
├── api
│   ├── login.js      # API para autenticar usuarios
│   ├── register.js   # API para registrar nuevos usuarios
│   ├── logout.js     # API para cerrar sesión
│   └── usuarios.js   # API para obtener la lista de usuarios
└── components        # Componentes reutilizables de la interfaz de usuario
```

---

## Notas Adicionales

* **Seguridad**: Las contraseñas se almacenan de forma segura utilizando **bcrypt**.
* **Tokens**: Se generan tokens JWT para autenticar a los usuarios.
* **Base de Datos**: Asegúrate de que la URL de la base de datos en `.env` sea válida.

---

## Problemas Comunes

1. **Error de conexión a la base de datos**

   * Verifica que la URL de la base de datos en el archivo `.env` sea correcta.
   * Asegúrate de que la base de datos esté en ejecución.

2. **Error al iniciar sesión**

   * Asegúrate de que el usuario esté registrado.
   * Verifica que las credenciales sean correctas.

3. **Error al cerrar sesión**

   * Asegúrate de que la API `/api/logout` esté configurada correctamente.

---

## Recursos Adicionales

* [Documentación de Next.js](https://nextjs.org/docs)
* [Documentación de Prisma](https://www.prisma.io/docs)
* [Documentación de bcrypt](https://www.npmjs.com/package/bcrypt)

---

¡Gracias por probar la aplicación! 🎉
