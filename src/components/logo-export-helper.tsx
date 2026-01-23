/**
 * Composant d'aide pour exporter le logo Phantom en différentes tailles
 * 
 * UTILISATION :
 * 1. Importez ce composant temporairement dans App.tsx
 * 2. Ouvrez l'application dans le navigateur
 * 3. Faites un clic droit sur chaque logo → "Enregistrer l'image sous..."
 * 4. Renommez selon les instructions
 * 5. Placez dans /public/
 * 6. Supprimez ce composant (ou commentez l'import)
 */

import phantomLogo from 'figma:asset/deeedec83d3187a74b7b05f89dc88f3daf42aff5.png';

export function LogoExportHelper() {
  const sizes = [
    { width: 16, height: 16, name: 'favicon-16x16.png' },
    { width: 32, height: 32, name: 'favicon-32x32.png' },
    { width: 180, height: 180, name: 'apple-touch-icon.png' },
    { width: 192, height: 192, name: 'icon-192.png' },
    { width: 512, height: 512, name: 'icon-512.png' },
  ];

  return (
    <div style={{ 
      padding: '40px', 
      background: '#0F0F11', 
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'system-ui'
    }}>
      <h1 style={{ marginBottom: '20px' }}>🎨 Exportateur de logos Phantom</h1>
      
      <div style={{ 
        background: '#1A1A1D', 
        padding: '20px', 
        borderRadius: '12px',
        marginBottom: '30px'
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>📋 Instructions</h2>
        <ol style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
          <li>Faites un <strong>clic droit</strong> sur chaque image ci-dessous</li>
          <li>Sélectionnez <strong>"Enregistrer l'image sous..."</strong></li>
          <li>Utilisez le nom de fichier indiqué sous chaque image</li>
          <li>Placez tous les fichiers dans le dossier <code style={{ 
            background: '#2A2A2D', 
            padding: '2px 8px', 
            borderRadius: '4px' 
          }}>/public/</code></li>
          <li>Pour le favicon.ico, utilisez un convertisseur en ligne comme <a 
            href="https://www.favicon-generator.org/" 
            style={{ color: '#AB9FF2' }}
            target="_blank"
            rel="noopener noreferrer"
          >favicon-generator.org</a> avec l'image 32x32</li>
        </ol>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px',
        marginTop: '30px'
      }}>
        {sizes.map((size) => (
          <div 
            key={size.name}
            style={{
              background: '#1A1A1D',
              padding: '20px',
              borderRadius: '12px',
              textAlign: 'center',
              border: '2px solid #2A2A2D'
            }}
          >
            <div style={{
              background: '#7C66DC',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: size.height + 40 + 'px'
            }}>
              <img 
                src={phantomLogo}
                alt={`Logo ${size.width}x${size.height}`}
                width={size.width}
                height={size.height}
                style={{
                  imageRendering: size.width <= 32 ? 'pixelated' : 'auto',
                  display: 'block'
                }}
              />
            </div>
            
            <div style={{ fontSize: '14px', color: '#999', marginBottom: '5px' }}>
              {size.width} × {size.height}
            </div>
            
            <div style={{ 
              fontSize: '12px', 
              color: '#AB9FF2',
              background: '#2A2A2D',
              padding: '8px',
              borderRadius: '6px',
              fontFamily: 'monospace',
              wordBreak: 'break-all'
            }}>
              {size.name}
            </div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '40px',
        padding: '20px',
        background: '#2A2A2D',
        borderRadius: '12px',
        borderLeft: '4px solid #AB9FF2'
      }}>
        <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>💡 Astuce</h3>
        <p style={{ lineHeight: '1.6', margin: 0 }}>
          <strong>Méthode plus rapide :</strong> Utilisez un générateur d'icônes en ligne comme{' '}
          <a 
            href="https://realfavicongenerator.net/" 
            style={{ color: '#AB9FF2' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            RealFaviconGenerator
          </a>
          {' '}qui créera toutes les tailles automatiquement à partir d'une seule image 512x512.
        </p>
      </div>

      <div style={{
        marginTop: '30px',
        padding: '15px',
        background: '#1A1A1D',
        borderRadius: '8px',
        fontSize: '14px',
        color: '#999'
      }}>
        ⚠️ Une fois les icônes créées et placées dans /public/, vous pouvez supprimer ce composant
        ou commenter son import dans App.tsx
      </div>
    </div>
  );
}

/**
 * Pour utiliser ce composant :
 * 
 * Dans App.tsx, ajoutez temporairement :
 * 
 * import { LogoExportHelper } from './components/logo-export-helper';
 * 
 * return <LogoExportHelper />;
 * 
 * Ensuite exportez toutes les icônes, puis supprimez cet import.
 */
