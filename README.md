# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# FabriApp - Página Web Oficial

## 🏭 Sobre FabriApp

FabriApp es un sistema integral de gestión para fábricas que revoluciona la forma en que las empresas manejan sus operaciones. Nuestra plataforma incluye:

- **Gestión de Inventarios**: Control total de stock con alertas automáticas
- **Recetas Inteligentes**: Gestión avanzada de fórmulas y costos
- **Control de Producción**: Monitoreo en tiempo real de líneas productivas
- **Rutas Optimizadas**: Sistema inteligente de rutas de reparto con seguimiento GPS

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de estilos utility-first
- **Vite** - Herramienta de construcción y desarrollo
- **Lucide React** - Iconos modernos y elegantes

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos para ejecutar el proyecto

1. **Clona el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd FABRIAPP
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre el navegador**
   Visita `http://localhost:5173/` para ver la página web

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/           # Componentes de layout (Header, Footer)
│   ├── sections/         # Secciones de la página (Hero, Features, etc.)
│   └── ui/              # Componentes reutilizables (Button, Card)
├── utils/               # Funciones de utilidad
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales con Tailwind
```

## 🎨 Características de Diseño

- **Diseño Responsive**: Adaptado para móvil, tablet y desktop
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Navegación Intuitiva**: Scroll suave entre secciones
- **Accesibilidad**: Componentes accesibles y semánticamente correctos
- **Performance**: Optimizado para carga rápida

## 📞 Secciones de la Página

1. **Hero**: Presentación principal con llamada a la acción
2. **Características**: Módulos y funcionalidades de FabriApp
3. **Productos**: Planes de precios y comparación
4. **Sobre Nosotros**: Historia, misión y equipo
5. **Contacto**: Formulario y información de contacto

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para revisar el código

## 📈 Optimizaciones Implementadas

- **Code Splitting**: Carga de componentes bajo demanda
- **Lazy Loading**: Imágenes y componentes cargados cuando son necesarios
- **Bundling Optimizado**: Configuración de Vite para máximo rendimiento
- **SEO Friendly**: Meta tags y estructura semántica

## 🌟 Próximas Mejoras

- [ ] Integración con CMS para contenido dinámico
- [ ] Modo oscuro
- [ ] Múltiples idiomas (i18n)
- [ ] Análisis de métricas web
- [ ] Progressive Web App (PWA)

## 📄 Licencia

Este proyecto es parte de FabriApp. Todos los derechos reservados.

## 🤝 Contribución

Para contribuir al proyecto, por favor contacta al equipo de desarrollo.

---

**FabriApp** - Transformando la industria manufacturera 🏭✨

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
