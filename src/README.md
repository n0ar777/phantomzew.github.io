# 👻 Phantom Wallet - PWA

Application de portefeuille crypto inspirée de Phantom Wallet, construite avec React et Tailwind CSS.

![Phantom Wallet](https://img.shields.io/badge/PWA-Ready-success?style=for-the-badge&logo=google-chrome)
![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)

## ✨ Fonctionnalités

### 💼 Gestion de Portefeuille
- ✅ Affichage du solde total en USD
- ✅ Profit/perte en montant et pourcentage
- ✅ Support de 6 cryptomonnaies (SOL, USDC, USDT, ETH, BTC, RAY)
- ✅ Logos authentiques des cryptos
- ✅ Coche bleue de vérification (style Twitter/X)

### 🎯 Interactions
- ✅ **Pull-to-refresh** : Glissez vers le bas pour rafraîchir les prix
- ✅ **Prix éditables** : Cliquez sur le prix d'une crypto pour le modifier
- ✅ **Nom du compte éditable** : Cliquez sur le nom pour le changer
- ✅ **Variations automatiques** : Fluctuations réalistes des prix lors du refresh
- ✅ **Historique éditable** : Modifiez les montants des transactions

### 🛠️ Fonctionnalités
- ✅ Recevoir (affichage QR code)
- ✅ Envoyer (formulaire d'envoi)
- ✅ Acheter (achat de tokens avec mise à jour du profit)
- ✅ Échanger (interface)
- ✅ Historique des transactions
- ✅ Paramètres

### 📱 PWA (Progressive Web App)
- ✅ **Installation sur écran d'accueil** (mobile et desktop)
- ✅ **Mode standalone** (sans barre de navigateur)
- ✅ **Fonctionnement offline** avec Service Worker
- ✅ **Logo Phantom dans le task switcher**
- ✅ **Thème violet** (#AB9FF2)
- ✅ **Responsive design** optimisé mobile

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer les icônes

⚠️ **IMPORTANT** : Vous devez créer les icônes PWA avant de déployer.

1. Téléchargez le logo Phantom fourni
2. Allez sur https://realfavicongenerator.net/
3. Uploadez le logo et générez toutes les icônes
4. Placez les fichiers dans `/public/` :
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180)
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)

### Étape 2 : Configuration GitHub

```bash
# Initialisez le repo
git init
git add .
git commit -m "Initial commit - Phantom Wallet PWA"

# Créez un repo sur GitHub puis :
git remote add origin https://github.com/VOTRE-USERNAME/phantom-wallet.git
git branch -M main
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Allez dans **Settings** > **Pages**
2. Source : **main** branch, **/ (root)**
3. Cliquez sur **Save**
4. Attendez 1-2 minutes

Votre app sera disponible à :
```
https://VOTRE-USERNAME.github.io/phantom-wallet/
```

### Étape 4 : Mettre à jour les URLs

Dans `/public/index.html`, remplacez :
```html
<meta property="og:url" content="https://VOTRE-USERNAME.github.io/phantom-wallet/">
<meta property="twitter:url" content="https://VOTRE-USERNAME.github.io/phantom-wallet/">
```

Dans `/public/manifest.json`, ajoutez le nom du repo :
```json
{
  "start_url": "/phantom-wallet/",
  "scope": "/phantom-wallet/",
  "icons": [
    {
      "src": "/phantom-wallet/icon-192.png",
      ...
    }
  ]
}
```

📖 **Guide détaillé** : Voir [GITHUB-PAGES-DEPLOY.md](./GITHUB-PAGES-DEPLOY.md)

## 💻 Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Tester la PWA localement
npm install -g http-server
http-server -p 8080
```

## 📂 Structure du projet

```
/
├── public/
│   ├── index.html          # Point d'entrée HTML avec métadonnées PWA
│   ├── manifest.json       # Manifest PWA
│   ├── sw.js              # Service Worker
│   ├── 404.html           # Page 404 pour GitHub Pages
│   └── [icônes PWA]       # À créer
├── components/
│   ├── wallet-dashboard.tsx    # Écran principal
│   ├── buy-screen.tsx         # Écran d'achat
│   ├── send-screen.tsx        # Écran d'envoi
│   ├── receive-screen.tsx     # Écran de réception
│   ├── transaction-history.tsx # Historique
│   ├── settings.tsx           # Paramètres
│   ├── footer.tsx             # Navigation footer
│   └── asset-list.tsx         # Liste des cryptos
├── App.tsx                # Composant principal
├── register-sw.ts         # Enregistrement Service Worker
└── styles/globals.css     # Styles globaux

```

## 🎨 Design

L'interface reproduit fidèlement le design de Phantom Wallet :
- **Couleurs** : Fond sombre (#0F0F11, #1A1A1D) avec accents violets (#AB9FF2)
- **Typography** : Système de fonts Apple/SF Pro
- **Icônes** : lucide-react + logos authentiques des cryptos
- **Animations** : Transitions fluides et pull-to-refresh
- **Layout** : Mobile-first, responsive, footer à 5 icônes

## 🔧 Technologies utilisées

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icônes
- **PWA** - Service Worker + Manifest
- **LocalStorage** - Persistance des données

## 📱 Installation PWA

### Sur mobile :
- **Android** : Menu → "Ajouter à l'écran d'accueil"
- **iOS** : Bouton partage → "Sur l'écran d'accueil"

### Sur desktop :
- **Chrome/Edge** : Icône + dans la barre d'adresse → "Installer"

Une fois installée, l'app :
- ✅ S'ouvre en mode standalone (sans barre du navigateur)
- ✅ Affiche le logo Phantom dans le task switcher
- ✅ Fonctionne offline
- ✅ Se comporte comme une app native

## 🐛 Troubleshooting

Voir [GITHUB-PAGES-DEPLOY.md](./GITHUB-PAGES-DEPLOY.md) section Troubleshooting

## 📄 Licence

Ce projet est un clone éducatif inspiré de Phantom Wallet.
Les logos et noms de marques appartiennent à leurs propriétaires respectifs.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une PR.

---

**Fait avec ❤️ et React**
