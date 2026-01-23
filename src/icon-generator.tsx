/**
 * Générateur d'icônes PWA à partir du logo Phantom
 * 
 * INSTRUCTIONS :
 * 1. Téléchargez l'image du logo Phantom (celle fournie)
 * 2. Utilisez un outil en ligne comme https://www.pwabuilder.com/imageGenerator
 *    ou https://realfavicongenerator.net/
 * 3. Uploadez l'image du logo Phantom
 * 4. Générez toutes les tailles d'icônes nécessaires
 * 5. Téléchargez et placez les fichiers dans /public/
 * 
 * FICHIERS À GÉNÉRER :
 * - favicon.ico (16x16, 32x32, 48x48)
 * - favicon-16x16.png
 * - favicon-32x32.png
 * - apple-touch-icon.png (180x180)
 * - icon-192.png (192x192)
 * - icon-512.png (512x512)
 * 
 * OU utilisez l'image ci-dessous directement dans votre code :
 */

import phantomLogo from 'figma:asset/deeedec83d3187a74b7b05f89dc88f3daf42aff5.png';

export const PHANTOM_LOGO = phantomLogo;

/**
 * Si vous voulez créer les icônes manuellement :
 * 
 * 1. Ouvrez l'image dans un éditeur (Photoshop, GIMP, Figma, etc.)
 * 2. Redimensionnez aux tailles nécessaires
 * 3. Exportez en PNG
 * 4. Placez dans /public/
 * 
 * Tailles nécessaires :
 * - 16x16 (favicon petit)
 * - 32x32 (favicon standard)
 * - 180x180 (Apple touch icon)
 * - 192x192 (Android icon)
 * - 512x512 (Android splash, icône haute résolution)
 */
