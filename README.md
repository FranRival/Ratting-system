# ⭐ Microservicio de Calificaciones (Estrellas)

Microservicio para gestionar las **calificaciones por estrellas** de una **Webtool Homepage**.

## Objetivo

Evitar el uso de plugins tradicionales para mostrar reseñas y calificaciones, ya que **Google puede ignorarlas o considerarlas spam**, impidiendo que las valoraciones sean tenidas en cuenta.

Este microservicio implementa una solución propia, independiente y reutilizable.

## Características

- ⭐ Sistema de calificaciones por estrellas.
- ☁️ Ejecutado mediante **Cloudflare Workers**.
- ♻️ Arquitectura reutilizable.
- 🚀 Diseñado para desplegarse en una flota de aproximadamente **700 sitios web**.
- 🔌 No depende de plugins de terceros.

## Arquitectura

```
Website
    │
    ▼
Cloudflare Worker
    │
    ▼
Microservicio de Calificaciones
    │
    ▼
Respuesta JSON / API
```

## Casos de uso

- Homepages de Webtools.
- Sitios con múltiples dominios.
- Infraestructuras con cientos de sitios que requieren un único servicio centralizado para gestionar las calificaciones.

## Tecnologías

- Cloudflare Workers
- JavaScript
- API REST
- JSON
