# Guía rápida: activar localhost (Mundo Alfabeto)

Esta guía te sirve para mostrar en video cómo correr la app desde Terminal.

## 1) Abrir Terminal

En macOS:
- `Cmd + Space`
- escribe `Terminal`
- Enter

## 2) Ir a la carpeta del proyecto

```bash
cd ~/Desktop/mundo-alfabeto
```

> Si tu proyecto está en otra ruta, cambia ese `cd`.

## 3) Instalar dependencias (solo la primera vez)

```bash
npm install
```

## 4) Levantar servidor local

```bash
npm run dev
```

Cuando inicie, verás algo como:

```text
Local: http://localhost:3000/
```

## 5) Abrir en navegador

Abre:
- `http://localhost:3000`

## 6) Detener el servidor

En la terminal donde corre la app:
- `Ctrl + C`

---

## Problemas comunes (rápido)

### A) Pantalla en blanco
- Recarga con `Cmd + Shift + R`
- revisa errores en terminal

### B) Puerto ocupado
Si aparece “Port 3000 is in use”, Vite usará `3001`, `3002`, etc.
Usa la URL `Local:` que muestre la terminal.

### C) Comando `npm` no existe
- Instala Node.js (LTS)
- cierra y abre terminal

---

## Comandos resumen (para pantalla)

```bash
cd ~/Desktop/mundo-alfabeto
npm install
npm run dev
```
