# Portofoliu Web Dinamic

Pagina web personala de tip CV/Portofoliu cu integrare dinamica GitHub API.
Proiect realizat in cadrul cursului de Tehnologii Web, Universitatea "Lucian Blaga" din Sibiu.

---

## Tehnologii folosite

- HTML5
- CSS3 (Flexbox, tranzitii, design responsiv)
- JavaScript (ES6+, Fetch API, DOM manipulation)
- GitHub REST API v3
- Google Fonts (Kode Mono)

---

## Functionalitati

- Sectiune Profil cu poza interactiva (hover dither/normal)
- Sectiune Portofoliu cu fetch automat din GitHub API
- Fallback din lista locala JSON pentru proiecte externe
- Sectiune Experienta (Job, Voluntariat)
- Sectiune Educatie (Studii, Certificari)
- Navigare prin sidebar cu animatie hover
- Loading state cu GIF animat

---

## Structura proiectului

```
/
├── index.html          # Structura principala a paginii
├── style.css           # Stilizare completa
├── main.js             # Logica JavaScript (navigare, fetch API)
├── projects.json       # Lista locala de proiecte externe
├── README.md           # Documentatie proiect
└── assets/             # Imagini si GIF-uri
```

---

## Instalare locala

### Varianta 1 - Direct in browser

1. Cloneaza repository-ul:
```bash
git clone https://github.com/roberttatu9/portofoliu.git
```

2. Deschide fisierul `index.html` direct in browser.

> Nota: Fetch-ul catre GitHub API si `projects.json` necesita un server local (vezi Varianta 2) din cauza restrictiilor CORS.

### Varianta 2 - Server local (recomandat)

1. Cloneaza repository-ul:
```bash
git clone https://github.com/roberttatu9/portofoliu.git
cd portofoliu
```

2. Porneste un server local. Exemple:

Folosind Python:
```bash
python -m http.server 8080
```

Folosind Node.js (pachetul `serve`):
```bash
npx serve .
```

Folosind extensia **Live Server** din VS Code: click dreapta pe `index.html` si selecteaza "Open with Live Server".

3. Deschide browserul la adresa:
```
http://localhost:8080
```

---

## Deploy

Proiectul este disponibil live pe GitHub Pages:
```
https://roberttatu9.github.io/portofoliu/
```

---

## Autor

Tatu Robert-Gabriel
Universitatea "Lucian Blaga" din Sibiu
Contact: robertgabriel.tatu@ulbsibiu.ro
