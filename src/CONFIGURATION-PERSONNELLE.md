# ⚙️ Configuration Personnelle - À REMPLIR

## 📝 Vos informations

Remplissez ces informations avant de déployer :

```
Nom d'utilisateur GitHub : _____________________
Nom du repository        : _____________________
URL finale               : https://_____________.github.io/_____________/
```

---

## 🔧 Fichiers à modifier

Une fois votre repo GitHub créé, modifiez ces fichiers avec VOS informations :

### 1. `/public/index.html`

Lignes à modifier (vers la ligne 38-48) :

**AVANT** :
```html
<meta property="og:url" content="https://votre-username.github.io/votre-repo/">
<meta property="twitter:url" content="https://votre-username.github.io/votre-repo/">
```

**APRÈS** (exemple avec username "johndoe" et repo "phantom-wallet") :
```html
<meta property="og:url" content="https://johndoe.github.io/phantom-wallet/">
<meta property="twitter:url" content="https://johndoe.github.io/phantom-wallet/">
```

---

### 2. `/public/manifest.json`

**⚠️ IMPORTANT** : Seulement si votre repo s'appelle `phantom-wallet` (ou autre nom)  
**⚠️ IGNORER** : Si votre repo s'appelle `VOTRE-USERNAME.github.io`

**AVANT** :
```json
{
  "start_url": "./",
  "scope": "./",
  "icons": [
    {
      "src": "./icon-192.png",
      ...
    }
  ]
}
```

**APRÈS** (si repo = "phantom-wallet") :
```json
{
  "start_url": "/phantom-wallet/",
  "scope": "/phantom-wallet/",
  "icons": [
    {
      "src": "/phantom-wallet/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/phantom-wallet/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/phantom-wallet/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
```

**Règle simple** :
- Si repo = `VOTRE-USERNAME.github.io` → Utilisez `"/"` et `"/icon-192.png"`
- Si repo = `phantom-wallet` (ou autre) → Utilisez `"/phantom-wallet/"` et `"/phantom-wallet/icon-192.png"`

---

## 🎯 Template de commandes Git

Copiez-collez ces commandes dans votre terminal, en remplaçant les valeurs :

```bash
# 1. Initialisez le repo local
git init
git add .
git commit -m "Initial commit - Phantom Wallet PWA"

# 2. Créez d'abord un repo sur GitHub.com (sans README)
# Nom suggéré : phantom-wallet

# 3. Liez le repo local au repo GitHub
# ⚠️ REMPLACEZ "VOTRE-USERNAME" et "phantom-wallet" par vos vraies valeurs
git remote add origin https://github.com/VOTRE-USERNAME/phantom-wallet.git
git branch -M main
git push -u origin main

# 4. Activez GitHub Pages
# GitHub.com > Repo > Settings > Pages
# Source: main branch, / (root)
# Save

# 5. Attendez 2 minutes, puis testez :
# https://VOTRE-USERNAME.github.io/phantom-wallet/
```

---

## 📋 Checklist de modification

Cochez au fur et à mesure :

### Avant le premier commit :
- [ ] Icônes créées et placées dans `/public/` (6 fichiers)
- [ ] `favicon.ico`
- [ ] `favicon-16x16.png`
- [ ] `favicon-32x32.png`
- [ ] `apple-touch-icon.png`
- [ ] `icon-192.png`
- [ ] `icon-512.png`

### Après avoir créé le repo GitHub :
- [ ] Nom du repo noté : `_______________`
- [ ] Username GitHub noté : `_______________`
- [ ] `/public/index.html` modifié avec la bonne URL
- [ ] `/public/manifest.json` modifié avec le bon chemin (si nécessaire)

### Premier déploiement :
- [ ] `git init` exécuté
- [ ] `git add .` exécuté
- [ ] `git commit -m "..."` exécuté
- [ ] Repo créé sur GitHub
- [ ] `git remote add origin ...` exécuté
- [ ] `git push` exécuté
- [ ] GitHub Pages activé dans Settings > Pages

### Après le premier déploiement :
- [ ] URL testée : https://_____.github.io/_____/
- [ ] Service Worker actif (DevTools > Application)
- [ ] Manifest valide (DevTools > Application > Manifest)
- [ ] PWA installable (icône + dans la barre d'adresse)
- [ ] Logo visible sur mobile dans le task switcher

### Si modifications nécessaires :
- [ ] Fichiers modifiés
- [ ] `git add .`
- [ ] `git commit -m "Update URLs for GitHub Pages"`
- [ ] `git push`
- [ ] Attendu 2 minutes
- [ ] Retesté l'URL

---

## 🎨 Template pour les icônes

Si vous utilisez RealFaviconGenerator, voici les paramètres recommandés :

### iOS Settings :
```
☑️ I do not want to use a solid color
Background color: #7C66DC (optionnel)
```

### Android Chrome Settings :
```
Theme color: #AB9FF2
Background: #7C66DC
```

### Windows Settings :
```
Tile color: #AB9FF2
```

### Favicon Settings :
```
☑️ Generate icons for all platforms
```

---

## 📱 Test final

Une fois tout déployé, testez sur :

### Mobile (Android) :
```
1. Ouvrez https://VOTRE-USERNAME.github.io/phantom-wallet/
2. Menu (⋮) → "Ajouter à l'écran d'accueil"
3. Confirmez
4. Ouvrez l'app depuis l'écran d'accueil
5. Bouton "Recent Apps" (⏹)
6. ✅ Le logo Phantom doit être visible
```

### Mobile (iOS) :
```
1. Ouvrez dans Safari
2. Bouton partage (□↑)
3. "Sur l'écran d'accueil"
4. Ajoutez
5. Ouvrez l'app
6. Balayez vers le haut (multitâche)
7. ✅ Le logo Phantom doit être visible
```

### Desktop :
```
1. Ouvrez dans Chrome/Edge
2. Icône + dans la barre d'adresse
3. "Installer"
4. ✅ L'app s'ouvre dans une fenêtre dédiée
```

---

## 🔄 Commandes de mise à jour

Pour mettre à jour après modifications :

```bash
# Vérifiez les changements
git status

# Ajoutez tous les fichiers modifiés
git add .

# Commitez avec un message descriptif
git commit -m "Votre message ici"

# Poussez vers GitHub
git push

# GitHub Pages redéploie automatiquement en 1-2 minutes
```

---

## 💾 Sauvegardez vos infos

**Nom d'utilisateur GitHub** : `_______________`  
**Nom du repository** : `_______________`  
**URL de production** : `https://_______________`  

**Date de création** : `_______________`  
**Version** : `1.0.0`

---

## ✅ Une fois terminé

Supprimez ou archivez ce fichier si vous le souhaitez :

```bash
git rm CONFIGURATION-PERSONNELLE.md
git commit -m "Remove configuration template"
git push
```

---

**Bon déploiement ! 🚀**
