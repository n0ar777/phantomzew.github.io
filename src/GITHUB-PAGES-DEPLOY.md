# 🚀 Déploiement sur GitHub Pages

## ✅ Checklist avant déploiement

### 1. **Créer les icônes PWA**

Vous devez créer les icônes à partir du logo Phantom fourni :

**Option A : Utiliser un générateur en ligne (RECOMMANDÉ)**
1. Allez sur https://realfavicongenerator.net/ ou https://www.pwabuilder.com/imageGenerator
2. Uploadez l'image du logo Phantom (celle avec le fantôme violet)
3. Téléchargez le package complet
4. Placez les fichiers suivants dans `/public/` :
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180)
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)

**Option B : Créer manuellement**
1. Ouvrez l'image dans un éditeur (Photoshop, GIMP, Canva, etc.)
2. Créez les versions suivantes :
   - 16x16, 32x32 (favicons)
   - 180x180 (Apple touch icon)
   - 192x192 (Android icon standard)
   - 512x512 (Android icon haute résolution)
3. Exportez en PNG avec fond transparent ou fond violet (#7C66DC)

### 2. **Configuration GitHub Pages**

#### Étape 1 : Créer le dépôt GitHub
```bash
# Initialisez git dans votre projet
git init

# Ajoutez tous les fichiers
git add .

# Commit initial
git commit -m "Initial commit - Phantom Wallet PWA"

# Créez un nouveau repo sur GitHub (sans README)
# Puis liez-le :
git remote add origin https://github.com/VOTRE-USERNAME/phantom-wallet.git
git branch -M main
git push -u origin main
```

#### Étape 2 : Activer GitHub Pages
1. Allez sur votre repo GitHub
2. Cliquez sur **Settings**
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Source", sélectionnez **main** branch et **/ (root)**
5. Cliquez sur **Save**
6. Attendez quelques minutes (GitHub construit et déploie)

#### Étape 3 : Configurer le domaine
Votre site sera disponible à :
```
https://VOTRE-USERNAME.github.io/phantom-wallet/
```

### 3. **Configuration pour GitHub Pages**

Si votre repo s'appelle `phantom-wallet`, vous devez mettre à jour quelques chemins :

**Dans `/public/index.html`** :
Remplacez les méta Open Graph/Twitter :
```html
<meta property="og:url" content="https://VOTRE-USERNAME.github.io/phantom-wallet/">
<meta property="twitter:url" content="https://VOTRE-USERNAME.github.io/phantom-wallet/">
```

**IMPORTANT pour GitHub Pages** :
Si votre repo n'est PAS nommé `VOTRE-USERNAME.github.io`, ajoutez le nom du repo dans les chemins du manifest :

Dans `/public/manifest.json`, modifiez :
```json
{
  "start_url": "/phantom-wallet/",
  "scope": "/phantom-wallet/"
}
```

Et dans tous les chemins d'icônes :
```json
{
  "src": "/phantom-wallet/icon-192.png",
  ...
}
```

### 4. **Tester localement avant de déployer**

```bash
# Installez un serveur local si nécessaire
npm install -g http-server

# Lancez le serveur
http-server -p 8080

# Ouvrez http://localhost:8080
```

Vérifiez :
- ✅ Les icônes s'affichent correctement
- ✅ Le manifest.json est accessible
- ✅ Le Service Worker s'enregistre (DevTools > Application > Service Workers)
- ✅ L'application fonctionne en mode standalone

### 5. **Structure des fichiers pour GitHub Pages**

```
/
├── public/
│   ├── index.html          ✅ CRÉÉ
│   ├── manifest.json       ✅ CRÉÉ
│   ├── sw.js              ✅ CRÉÉ
│   ├── favicon.ico        ⚠️ À CRÉER
│   ├── favicon-16x16.png  ⚠️ À CRÉER
│   ├── favicon-32x32.png  ⚠️ À CRÉER
│   ├── apple-touch-icon.png ⚠️ À CRÉER
│   ├── icon-192.png       ⚠️ À CRÉER
│   ├── icon-512.png       ⚠️ À CRÉER
│   └── screenshot.png     📸 OPTIONNEL
├── components/            ✅ PRÊT
├── styles/                ✅ PRÊT
├── App.tsx               ✅ PRÊT
└── register-sw.ts        ✅ CRÉÉ
```

### 6. **Vérification post-déploiement**

Une fois déployé sur GitHub Pages :

1. **Lighthouse Audit** (Chrome DevTools) :
   - Ouvrez DevTools (F12)
   - Onglet "Lighthouse"
   - Cochez "Progressive Web App"
   - Lancez l'audit → Vous devriez avoir 90-100/100

2. **Installation PWA** :
   - Sur Android : Menu → "Installer l'application"
   - Sur iOS : Bouton partage → "Sur l'écran d'accueil"
   - Sur Desktop : Icône + dans la barre d'adresse

3. **Vérifier le logo dans le task switcher** :
   - Installez l'app
   - Ouvrez-la
   - Appuyez sur le bouton multitâche/task switcher
   - Le logo Phantom devrait apparaître ✅

---

## 🎨 Exemple de favicon.ico multi-résolution

Si vous voulez créer le `favicon.ico` avec plusieurs résolutions :

```bash
# Avec ImageMagick (si installé)
convert icon-512.png -define icon:auto-resize=16,32,48 favicon.ico
```

Ou utilisez un outil en ligne :
- https://favicon.io/
- https://www.favicon-generator.org/

---

## 🔥 Commandes Git rapides

```bash
# Mettre à jour après modifications
git add .
git commit -m "Update PWA configuration"
git push

# GitHub Pages redéploie automatiquement en 1-2 minutes
```

---

## 🐛 Troubleshooting

### Le Service Worker ne s'enregistre pas
- Vérifiez que vous êtes en HTTPS (GitHub Pages l'active automatiquement)
- Vérifiez que `sw.js` est à la racine de `/public/`
- Videz le cache (Ctrl+Shift+Delete)

### Les icônes ne s'affichent pas
- Vérifiez les chemins dans `manifest.json`
- Si sur GitHub Pages avec un repo nommé, ajoutez `/nom-du-repo/` avant chaque chemin
- Exemple : `"src": "/phantom-wallet/icon-192.png"`

### L'app ne s'installe pas
- Vérifiez que tous les champs requis sont dans le manifest
- Lighthouse vous dira ce qui manque

### Le logo n'apparaît pas dans le task switcher
- Assurez-vous que `icon-192.png` et `icon-512.png` existent
- Vérifiez que `theme_color` est défini dans le manifest
- Désinstallez et réinstallez l'app

---

## ✅ Checklist finale

- [ ] Icônes créées et placées dans `/public/`
- [ ] Chemins mis à jour dans `manifest.json` (avec `/nom-repo/` si nécessaire)
- [ ] Chemins mis à jour dans `index.html` (meta OG/Twitter)
- [ ] Testé localement avec un serveur HTTP
- [ ] Service Worker fonctionne
- [ ] Repo GitHub créé et code pushé
- [ ] GitHub Pages activé dans les settings
- [ ] Site accessible à l'URL GitHub Pages
- [ ] PWA installable sur mobile et desktop
- [ ] Logo Phantom visible dans le task switcher

**Votre Phantom Wallet est prêt à être déployé ! 🚀👻**
