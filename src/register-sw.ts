// Enregistrement du Service Worker
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker enregistré avec succès:', registration.scope);
          
          // Vérifier les mises à jour toutes les heures
          setInterval(() => {
            registration.update();
          }, 3600000);
        })
        .catch((error) => {
          console.log('Erreur lors de l\'enregistrement du Service Worker:', error);
        });
    });
  }
}

// Fonction pour demander la permission de notifications (optionnel)
export async function requestNotificationPermission() {
  if ('Notification' in window && 'serviceWorker' in navigator) {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
  return false;
}

// Fonction pour installer la PWA
export function promptInstall() {
  let deferredPrompt: any;

  window.addEventListener('beforeinstallprompt', (e) => {
    // Empêche l'affichage automatique du prompt
    e.preventDefault();
    deferredPrompt = e;
    
    // Tu peux maintenant afficher ton propre bouton d'installation
    console.log('PWA installable');
  });

  // Fonction à appeler quand l'utilisateur clique sur ton bouton d'installation
  return async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response: ${outcome}`);
      deferredPrompt = null;
    }
  };
}
