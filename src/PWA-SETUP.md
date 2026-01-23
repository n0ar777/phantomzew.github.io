# Configuration PWA - Phantom Wallet

## ✅ Votre application est maintenant prête pour PWA !

### Fichiers créés :
1. **`/public/manifest.json`** - Métadonnées de l'application PWA
2. **`/public/sw.js`** - Service Worker pour fonctionnement offline
3. **`/register-sw.ts`** - Script d'enregistrement du Service Worker
4. **`/App.tsx`** - Modifié pour enregistrer le Service Worker automatiquement

---

## 📱 Comment installer la PWA ?

### Sur Mobile (iOS/Android) :

#### **Android (Chrome/Edge)**
1. Ouvrez l'application dans Chrome
2. Tapez sur le menu (⋮) en haut à droite
3. Sélectionnez **"Ajouter à l'écran d'accueil"** ou **"Installer l'application"**
4. Confirmez l'installation
5. L'icône apparaîtra sur votre écran d'accueil

#### **iOS (Safari)**
1. Ouvrez l'application dans Safari
2. Tapez sur le bouton de partage (□↑) en bas
3. Faites défiler et sélectionnez **"Sur l'écran d'accueil"**
4. Nommez l'application et tapez **"Ajouter"**
5. L'icône apparaîtra sur votre écran d'accueil

### Sur Desktop :

#### **Chrome/Edge**
1. Ouvrez l'application
2. Regardez dans la barre d'adresse, vous verrez une icône d'installation (⊕)
3. Cliquez dessus et sélectionnez **"Installer"**
4. L'application s'ouvrira dans une fenêtre dédiée

---

## 🎨 Étapes restantes (à faire sur votre serveur) :

### 1. **Ajouter les icônes d'application**
Créez deux icônes et placez-les dans `/public/` :
- `/public/icon-192.png` (192x192 pixels)
- `/public/icon-512.png` (512x512 pixels)

Recommandations pour les icônes :
- Fond violet/mauve (#AB9FF2) avec le logo Phantom
- Format PNG avec transparence
- Centrées sur un fond de couleur unie

### 2. **Ajouter les métadonnées dans le HTML**
Dans votre fichier `index.html`, ajoutez dans la section `<head>` :

```html
<!-- PWA Manifest -->
<link rel="manifest" href="/manifest.json">

<!-- Theme Color -->
<meta name="theme-color" content="#AB9FF2">

<!-- Apple Touch Icons -->
<link rel="apple-touch-icon" href="/icon-192.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Phantom">

<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

### 3. **Screenshot (optionnel mais recommandé)**
Créez un screenshot de votre application et placez-le dans `/public/screenshot.png`
- Taille recommandée : 390x844 pixels (format iPhone)
- Capture d'écran de l'écran principal avec des cryptos

---

## 🚀 Fonctionnalités PWA activées :

✅ **Fonctionnement offline** - L'application se met en cache et fonctionne sans connexion  
✅ **Installation sur l'écran d'accueil** - Se comporte comme une app native  
✅ **Mode Standalone** - S'ouvre sans la barre du navigateur  
✅ **Couleur de thème** - Barre de statut violette (#AB9FF2)  
✅ **Orientation Portrait** - Optimisée pour mobile  
✅ **Auto-update** - Vérifie les mises à jour toutes les heures  

---

## 🔧 Tester la PWA localement :

1. Servez l'application avec HTTPS (requis pour Service Worker)
2. Ouvrez les DevTools (F12)
3. Allez dans l'onglet **"Application"** (Chrome) ou **"Storage"** (Firefox)
4. Vérifiez :
   - **Manifest** : Devrait afficher les infos du manifest.json
   - **Service Workers** : Devrait être enregistré et actif
   - **Cache Storage** : Devrait contenir les fichiers mis en cache

---

## 📦 Déploiement :

Pour que la PWA fonctionne en production :
1. **HTTPS est OBLIGATOIRE** (les Service Workers ne fonctionnent qu'en HTTPS)
2. Le fichier `sw.js` doit être à la racine du domaine ou dans `/public/`
3. Le fichier `manifest.json` doit être accessible publiquement

Plateformes de déploiement recommandées :
- **Vercel** (auto-HTTPS, parfait pour React)
- **Netlify** (auto-HTTPS, très simple)
- **GitHub Pages** (gratuit avec HTTPS)
- **Firebase Hosting** (excellent pour PWA)

---

## 🎯 Prochaines améliorations PWA possibles :

- [ ] Notifications push pour les variations de prix
- [ ] Sync en arrière-plan pour les prix des cryptos
- [ ] Mode offline complet avec LocalStorage pour les données
- [ ] Badge sur l'icône pour afficher les notifications
- [ ] Share API pour partager son adresse wallet

---

**Votre application Phantom Wallet est maintenant prête à être installée comme une PWA ! 🎉**
