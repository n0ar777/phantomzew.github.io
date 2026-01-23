# ✅ Checklist PWA - Êtes-vous prêt à déployer ?

## 📋 Checklist complète

### 1. Fichiers PWA créés

- [x] `/public/manifest.json` ✅ Créé
- [x] `/public/sw.js` ✅ Créé
- [x] `/public/index.html` ✅ Créé avec toutes les métadonnées
- [x] `/public/404.html` ✅ Créé pour GitHub Pages
- [x] `/register-sw.ts` ✅ Créé
- [x] `/.nojekyll` ✅ Créé (pour GitHub Pages)
- [x] `/App.tsx` ✅ Modifié pour enregistrer le Service Worker

### 2. Icônes PWA (⚠️ À CRÉER MANUELLEMENT)

Vérifiez que ces fichiers existent dans `/public/` :

```bash
cd public
ls -la *.png *.ico
```

Vous devriez voir :
- [ ] `favicon.ico`
- [ ] `favicon-16x16.png`
- [ ] `favicon-32x32.png`
- [ ] `apple-touch-icon.png` (180x180)
- [ ] `icon-192.png` (192x192)
- [ ] `icon-512.png` (512x512)

**❌ Si vous ne les voyez pas** → Voir [ICONES-GUIDE.md](./ICONES-GUIDE.md)

### 3. Configuration

- [x] `manifest.json` configuré avec :
  - [x] `name: "Phantom Wallet"`
  - [x] `theme_color: "#AB9FF2"`
  - [x] `background_color: "#7C66DC"`
  - [x] `display: "standalone"`
  - [x] Chemins des icônes corrects

- [x] `index.html` contient :
  - [x] `<link rel="manifest">`
  - [x] `<meta name="theme-color">`
  - [x] `<link rel="apple-touch-icon">`
  - [x] Toutes les métadonnées Open Graph
  - [x] Script de redirect pour SPA

- [x] `App.tsx` enregistre le Service Worker :
  - [x] `import { registerServiceWorker }`
  - [x] `useEffect(() => registerServiceWorker())`

### 4. GitHub Pages

- [ ] Repo GitHub créé
- [ ] Code pushé sur GitHub
- [ ] GitHub Pages activé dans Settings > Pages
- [ ] URLs mises à jour dans `index.html` (meta OG/Twitter)
- [ ] Chemins dans `manifest.json` ajustés si repo nommé (ex: `/phantom-wallet/`)

### 5. Tests locaux

Avant de déployer, testez localement :

#### Test 1 : Service Worker

```bash
# Lancez un serveur local
http-server -p 8080
# ou
python -m http.server 8080
```

1. Ouvrez http://localhost:8080
2. DevTools (F12) > **Application** > **Service Workers**
3. Vérifiez : "Status: activated and running" ✅

#### Test 2 : Manifest

1. DevTools > **Application** > **Manifest**
2. Vérifiez :
   - ✅ Nom de l'app : "Phantom Wallet"
   - ✅ Couleur de thème : #AB9FF2
   - ✅ Toutes les icônes s'affichent (pas de 404)
   - ✅ "No issues found"

#### Test 3 : Icônes

1. DevTools > **Network**
2. Rechargez la page (Ctrl+R)
3. Cherchez :
   - `favicon.ico` → 200 OK ✅
   - `icon-192.png` → 200 OK ✅
   - `icon-512.png` → 200 OK ✅
   - `apple-touch-icon.png` → 200 OK ✅

Si vous voyez des **404**, les icônes n'existent pas.

#### Test 4 : Lighthouse

1. DevTools > **Lighthouse**
2. Sélectionnez :
   - ✅ Progressive Web App
   - ✅ Mobile
3. "Analyze page load"
4. **Score attendu** : 90-100/100 pour PWA

Problèmes courants :
- ❌ "Does not register a service worker" → Vérifiez que sw.js est à la racine de /public/
- ❌ "Web app manifest does not meet the installability requirements" → Vérifiez manifest.json
- ❌ "No icons found" → Créez les icônes (voir ICONES-GUIDE.md)

### 6. Installation PWA

Testez l'installation :

#### Sur Desktop (Chrome) :
1. Ouvrez l'app
2. Regardez la barre d'adresse → Icône "Installer" (+) doit apparaître
3. Cliquez et installez
4. L'app s'ouvre dans une fenêtre dédiée ✅

#### Sur Mobile :
1. Ouvrez l'app dans Chrome (Android) ou Safari (iOS)
2. Menu → "Ajouter à l'écran d'accueil"
3. Installez
4. Ouvrez depuis l'écran d'accueil
5. ✅ Doit s'ouvrir en mode standalone (pas de barre de navigateur)

### 7. Logo dans le Task Switcher

C'est LE test final ! 👻

#### Sur Android :
1. Installez l'app
2. Ouvrez-la
3. Appuyez sur le bouton "Recent Apps" (⏹)
4. ✅ **Vous devez voir** : Logo Phantom + "Phantom Wallet"

#### Sur iOS :
1. Installez l'app via Safari
2. Ouvrez-la
3. Balayez vers le haut (multitâche)
4. ✅ **Vous devez voir** : Logo Phantom + "Phantom"

**Si le logo n'apparaît pas** :
- ❌ Les icônes n'existent pas → Créez-les
- ❌ Mauvais chemin dans manifest.json → Vérifiez les chemins
- ❌ Cache du navigateur → Désinstallez l'app et réinstallez

---

## 🚀 Commandes de déploiement rapide

Une fois tout vérifié :

```bash
# 1. Vérifiez que les icônes existent
ls -la public/*.png public/*.ico

# 2. Initialisez git (si pas déjà fait)
git init
git add .
git commit -m "Initial commit - Phantom Wallet PWA ready"

# 3. Créez un repo sur GitHub puis :
git remote add origin https://github.com/VOTRE-USERNAME/phantom-wallet.git
git branch -M main
git push -u origin main

# 4. Activez GitHub Pages :
# GitHub.com > Repo > Settings > Pages > Source: main / (root) > Save

# 5. Attendez 2 minutes puis testez :
# https://VOTRE-USERNAME.github.io/phantom-wallet/
```

---

## 🔧 Après déploiement

### Mise à jour des URLs

**Dans `/public/index.html`**, remplacez :

```html
<!-- Avant -->
<meta property="og:url" content="https://votre-username.github.io/votre-repo/">

<!-- Après (exemple) -->
<meta property="og:url" content="https://johndoe.github.io/phantom-wallet/">
```

**Dans `/public/manifest.json`**, si votre repo s'appelle `phantom-wallet` :

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

⚠️ **Important** : Si votre repo s'appelle `VOTRE-USERNAME.github.io`, utilisez `"/"` au lieu de `"/phantom-wallet/"`.

### Commitez les changements :

```bash
git add .
git commit -m "Update URLs for GitHub Pages"
git push
```

---

## ✅ Vérification finale sur GitHub Pages

1. **Ouvrez** : https://VOTRE-USERNAME.github.io/phantom-wallet/

2. **DevTools** (F12) > **Application** :
   - Service Workers : ✅ Activé
   - Manifest : ✅ Pas d'erreurs
   - Cache Storage : ✅ Fichiers en cache

3. **Lighthouse** :
   - PWA : 90-100/100 ✅

4. **Installez l'app** :
   - Sur mobile : Menu → Installer
   - Sur desktop : Icône + dans la barre d'adresse

5. **Vérifiez le logo** :
   - Ouvrez l'app
   - Task switcher → Logo Phantom visible ✅

---

## 🎯 Résumé : Êtes-vous prêt ?

### ✅ OUI si :
- [x] Tous les fichiers PWA sont créés
- [x] Les 6 fichiers d'icônes existent dans `/public/`
- [x] Le Service Worker s'enregistre localement
- [x] Le manifest est valide (pas d'erreurs dans DevTools)
- [x] L'app est installable localement
- [x] Le logo apparaît dans le task switcher

### ❌ NON si :
- [ ] Les icônes n'existent pas → **Voir [ICONES-GUIDE.md](./ICONES-GUIDE.md)**
- [ ] Le Service Worker ne s'enregistre pas → Vérifiez `/register-sw.ts` et `/App.tsx`
- [ ] Le manifest a des erreurs → Vérifiez les chemins dans `manifest.json`
- [ ] L'app ne s'installe pas → Lancez Lighthouse pour voir les erreurs

---

## 📞 Besoin d'aide ?

Consultez les guides :
- [ICONES-GUIDE.md](./ICONES-GUIDE.md) - Créer les icônes
- [GITHUB-PAGES-DEPLOY.md](./GITHUB-PAGES-DEPLOY.md) - Déployer sur GitHub Pages
- [PWA-SETUP.md](./PWA-SETUP.md) - Configuration PWA complète
- [README.md](./README.md) - Documentation générale

---

**Bonne chance pour le déploiement ! 🚀👻**
