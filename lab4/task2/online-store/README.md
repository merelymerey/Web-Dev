# Task 2 – Online Store (Angular 21)

A single-page Angular application displaying a catalog of real tech products from **kaspi.kz**, with image galleries, star ratings, and WhatsApp / Telegram share functionality.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
ng serve

# 3. Open in browser
http://localhost:4200
```

## Features

| Feature | Angular Concept Used |
|---------|----------------------|
| Product catalog grid | `*ngFor` structural directive |
| Empty-state message | `*ngIf` structural directive |
| Live search & category filter | Two-way binding `[(ngModel)]`, Event binding `(ngModelChange)` |
| Product card component | `@Input()` decorator — receives `Product` data |
| Share button events | `@Output()` + `EventEmitter` — emits to parent |
| Star rating display | Property binding `[ngClass]`, method interpolation |
| Image gallery (bonus) | `(click)` event binding, component state |
| External kaspi.kz links | `[href]` property binding, `target="_blank"` |
| Share to WhatsApp / Telegram | `encodeURIComponent()`, `window.open()` |
| Responsive grid | CSS Grid `auto-fill / minmax` |

## Project Structure

```
src/
  app/
    models/
      product.model.ts          ← Product interface (TypeScript)
    services/
      product.service.ts        ← 10 real kaspi.kz products + helper methods
    components/
      product-list/
        product-list.ts         ← Search, filter, share handler
        product-list.html       ← *ngFor, *ngIf, [(ngModel)]
        product-list.css        ← Responsive grid layout
      product-card/
        product-card.ts         ← @Input, @Output, gallery, stars
        product-card.html       ← Template with event & property binding
        product-card.css        ← Card styles, share buttons
    app.ts                      ← Root standalone component
    app.html                    ← Navbar + footer shell
    app.routes.ts               ← Router configuration
angular.json
package.json
```

## Share Functionality

- **WhatsApp**: `https://wa.me/?text=Check out this product: {encoded_kaspi_link}`
- **Telegram**: `https://t.me/share/url?url={encoded_kaspi_link}&text={encoded_name}`

All URLs are safely encoded with `encodeURIComponent()`.

## Notes

- Product images use `placehold.co` placeholders. Replace the `image` / `images` arrays in `product.service.ts` with real kaspi.kz image URLs if desired.
- `*ngFor` and `*ngIf` are used as required by the lab. In Angular 17+ these are superseded by `@for`/`@if` control flow blocks but remain fully functional.
- `node_modules/` is excluded from Git via `.gitignore`.
