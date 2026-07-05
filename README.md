# 📦 Proyecto Final – Ecommerce con React + Firebase

## 📌 Descripción general

Este proyecto consiste en una aplicación web tipo ecommerce desarrollada en **React + Vite**, con integración a **Firebase** para autenticación y gestión de datos.

Permite la administración completa de productos, incluyendo creación, edición, eliminación y visualización, junto con un sistema de login y rutas protegidas para el panel administrativo.

---

# 🚀 Tecnologías utilizadas

* ⚛️ React
* ⚡ Vite
* 🔥 Firebase (Auth + Firestore)
* 🖼 ImgBB (subida de imágenes)
* 🌐 React Router DOM
* 💅 CSS personalizado
* 📦 Context API (manejo de estado global)

---

# 🧩 Funcionalidades principales

## 🔐 Autenticación

* Login de usuarios con Firebase Auth
* Protección de rutas privadas (Dashboard/Admin)
* Manejo de sesión persistente

---

## 📦 Gestión de productos (CRUD)

* ➕ Alta de productos (Create)
* 📖 Listado de productos (Read)
* ✏️ Edición de productos (Update)
* ❌ Eliminación de productos (Delete)

---

## 🖼 Imágenes

* Subida de imágenes mediante ImgBB
* Vista previa antes de guardar
* Renderizado de miniaturas en panel admin

---

## 🗂 Organización de productos

* Categorías implementadas con `<select>`
* Ordenamiento de productos por categoría
* Visualización optimizada en el dashboard

---

## 🧭 Navegación

* React Router implementado
* Rutas dinámicas para productos
* Dashboard administrativo separado del flujo público

---

## 🛒 Experiencia de usuario

* Interfaz responsive
* Flujo de compra básico
* Carrito de productos con Context API

---

## ⚙️ Mejoras de UX/UI

* Reemplazo de `alert()` y `confirm()` por modales personalizados
* Feedback visual en acciones (success / error)
* Mejoras en el panel de administración

---

# 🧠 Arquitectura del proyecto

El proyecto está organizado bajo una arquitectura basada en componentes:

```
src/

├── components/
│   ├── adminComponents/
│   ├── products/
│   ├── ui/
│
├── pages/
│   ├── Home
│   ├── ProductDetail
│   ├── Dashboard
│
├── context/
│   ├── AuthContext
│   ├── CartContext
│
├── services/
│   ├── firebase.js
│   ├── productsService.js
│
├── routes/
│   ├── PrivateRoute.jsx
│
├── App.jsx
└── main.jsx
```

---

# 🔥 Firebase (Backend)

Se utiliza Firebase como backend serverless:

* **Authentication** → Login de usuarios
* **Firestore** → Base de datos de productos
* **Storage (ImgBB externo)** → manejo de imágenes

---

# 🔒 Rutas protegidas

El acceso al dashboard está restringido mediante un sistema de autenticación:

* Usuarios no autenticados no pueden acceder a `/admin`
* Redirección automática al login

---

# 📊 Estado del proyecto

## ✔️ Completado

* Login con Firebase Auth
* CRUD de productos
* Dashboard admin
* Subida de imágenes
* Categorías
* Context API
* Routing

## ⚠️ Mejoras aplicadas

* UI mejorada con modales
* Orden de productos optimizado
* Vista previa de imágenes

---

# 🧪 Cómo ejecutar el proyecto

## 1. Clonar repositorio

```bash
git clone <repo-url>
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Configurar variables de entorno

Crear archivo `.env`:

```
VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx
VITE_FIREBASE_PROJECT_ID=xxxx
```

## 4. Ejecutar proyecto

```bash
npm run dev
```

---

# 📦 Build de producción

```bash
npm run build
```

---

# 🎯 Decisiones técnicas importantes

* Firebase fue elegido por rapidez de implementación y escalabilidad
* Context API en lugar de Redux por simplicidad del proyecto
* ImgBB para simplificar manejo de imágenes sin backend propio
* Arquitectura modular basada en componentes reutilizables

---

# 🧾 Conclusión

El proyecto representa una aplicación ecommerce funcional con administración completa, autenticación segura y una arquitectura escalable basada en React.
