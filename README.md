# Portfolio site

A static portfolio built with HTML, CSS, and vanilla JavaScript modules. It needs no build step or package manager. Poppins and Ionicons are loaded from Google Fonts and unpkg, so those assets need an internet connection; the page content and styles are served locally.

## Run locally

Serve the project root with a static web server; the page fragments are loaded with `fetch`, so opening `index.html` directly as a `file://` URL will not work.

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Project structure

- `index.html` is the shared shell: sidebar, navigation, and page mount point.
- `pages/` contains one HTML fragment per site section.
- `assets/css/` separates base styles, shared layout, page sections, and responsive rules.
- `assets/js/` separates page loading and each interactive feature into ES modules. `main.js` initializes the app.
- `assets/images/` and `assets/icons/` contain visual assets.
- `docs/template-content.txt` preserves the original text export.

The contact form opens a prefilled email draft in the visitor's email app. It does not send messages through a server.
