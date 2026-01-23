# 🚀 Démarrage Rapide - Phantom Wallet PWA

## ⚡ En 5 étapes seulement !

### 1️⃣ Créer les icônes (5 minutes)

**Option A - Automatique (RECOMMANDÉ)** :
```
1. Allez sur https://realfavicongenerator.net/
2. Uploadez le logo Phantom violet (dans le dossier du projet)
3. Téléchargez le package généré
4. Placez tous les fichiers PNG dans /public/
5. Renommez selon la checklist ci-dessous
```

**Option B - Manuel avec ce projet** :
```bash
# 1. Ajoutez temporairement dans App.tsx :
import { LogoExportHelper } from './components/logo-export-helper';
return <LogoExportHelper />; // Au lieu du contenu normal

# 2. Ouvrez l'app, clic droit sur chaque image → "Enregistrer sous"
# 3. Placez dans /public/
# 4. Supprimez l'import de LogoExportHelper
```

**Fichiers requis dans `/public/`** :
```
✅ favicon.ico
✅ favicon-16x16.png
✅ favicon-32x32.png
✅ apple-touch-icon.png (180x180)
✅ icon-192.png (192x192)
✅ icon-512.png (512x512)
```

---

### 2️⃣ Vérifier localement (2 minutes)

```bash
# Installez un serveur HTTP si nécessaire
npm install -g http-server

# Lancez le serveur
http-server -p 8080

# Ouvrez http://localhost:8080
```

**Vérifications** :
1. DevTools (F12) > Application > Service Workers → ✅ Activé
2. Application > Manifest → ✅ Toutes les icônes visibles
3. Icône "Installer" (+) dans la barre d'adresse → ✅ Visible

---

### 3️⃣ Créer le repo GitHub (1 minute)

```bash
# Initialisez git
git init
git add .
git commit -m "Initial commit - Phantom Wallet PWA"

# Sur GitHub.com, créez un nouveau repo (ex: phantom-wallet)
# Puis :
git remote add origin https://github.com/VOTRE-USERNAME/phantom-wallet.git
git branch -M main
git push -u origin main
```

---

### 4️⃣ Activer GitHub Pages (30 secondes)

```
1. GitHub.com → Votre repo → Settings
2. Menu gauche → Pages
3. Source → Branch: main, Folder: / (root)
4. Save
5. Attendez 2 minutes ⏱️
```

Votre app sera à :
```
https://VOTRE-USERNAME.github.io/phantom-wallet/
```

---

### 5️⃣ Ajuster les URLs (1 minute)

**Si votre repo s'appelle `phantom-wallet`** (pas `VOTRE-USERNAME.github.io`),
mettez à jour ces 2 fichiers :

**`/public/manifest.json`** :
```json
{
  "start_url": "/phantom-wallet/",
  "scope": "/phantom-wallet/",
  "icons": [
    {
      "src": "/phantom-wallet/icon-192.png",
      ...
    },
    {
      "src": "/phantom-wallet/icon-512.png",
      ...
    }
  ]
}
```

**`/public/index.html`** (lignes Open Graph) :
```html
<meta property="og:url" content="https://VOTRE-USERNAME.github.io/phantom-wallet/">
```

Puis :
```bash
git add .
git commit -m "Update URLs for GitHub Pages"
git push
```

---

## ✅ C'est terminé !

Votre PWA est en ligne ! Testez :

### Sur mobile :
1. Ouvrez https://VOTRE-USERNAME.github.io/phantom-wallet/
2. Menu → "Ajouter à l'écran d'accueil"
3. Ouvrez l'app depuis l'écran d'accueil
4. Appuyez sur le bouton multitâche → **Logo Phantom visible** ✅

### Sur desktop :
1. Ouvrez l'URL
2. Cliquez sur l'icône + dans la barre d'adresse
3. "Installer"
4. L'app s'ouvre dans une fenêtre dédiée ✅

---

## 📚 Documentation complète

Si vous avez besoin de plus de détails :

- **[ICONES-GUIDE.md](./ICONES-GUIDE.md)** - Guide détaillé pour créer les icônes
- **[GITHUB-PAGES-DEPLOY.md](./GITHUB-PAGES-DEPLOY.md)** - Déploiement complet
- **[check-pwa-ready.md](./check-pwa-ready.md)** - Checklist de vérification
- **[PWA-SETUP.md](./PWA-SETUP.md)** - Configuration PWA technique
- **[README.md](./README.md)** - Documentation générale

---

## 🐛 Problèmes courants

**❌ Les icônes ne s'affichent pas**
→ Vérifiez qu'elles existent bien dans `/public/`
```bash
ls -la public/*.png public/*.ico
```

**❌ Le Service Worker ne s'enregistre pas**
→ GitHub Pages active HTTPS automatiquement, mais testez en navigation privée

**❌ L'app ne s'installe pas**
→ Lancez Lighthouse (DevTools > Lighthouse > PWA) pour voir les erreurs

**❌ Mauvais chemin d'icônes sur GitHub Pages**
→ N'oubliez pas d'ajouter `/nom-du-repo/` dans manifest.json

---

## ⏱️ Temps total : ~10 minutes

1. Créer icônes : 5 min
2. Vérifier local : 2 min
3. GitHub setup : 1 min
4. Activer Pages : 30 sec
5. Ajuster URLs : 1 min
6. ✅ **TERMINÉ !**

---

**Bonne installation ! 🚀👻**
