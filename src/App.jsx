import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { EffectComposer, DepthOfField, Noise } from '@react-three/postprocessing';
import { useControls } from 'leva';
import { Model } from './components/Model';
import { AnimatedModel } from './components/AnimatedModel';
import './App.css';

// Liste des modèles à précharger
const modelsToPreload = [
  '/models/arbre.glb',
  '/models/sol.glb',
  '/models/vache.glb',
];

// Préchargement de tous les modèles
modelsToPreload.forEach(url => useGLTF.preload(url));

function App() {
  // Contrôles Leva pour ajuster la scène en temps réel
  const {
    // Contrôles des lumières
    ambientIntensity,
    directionalIntensity,
    lightColor,
    
    // Contrôles de l'environnement
    backgroundColor,
    
    // Contrôles des effets de post-traitement
    depthOfFieldEnabled,
    focusDistance,
    
    // Contrôles du grain
    noiseEnabled,
    noiseIntensity
  } = useControls({
    // Éclairage
    ambientIntensity: { 
      value: 0.6, 
      min: 0, 
      max: 2, 
      step: 0.1, 
      label: 'Lumière ambiante'
    },
    directionalIntensity: { 
      value: 1, 
      min: 0, 
      max: 3, 
      step: 0.1, 
      label: 'Lumière directionnelle'
    },
    lightColor: { 
      value: '#FFF8DC', 
      label: 'Couleur lumière'
    },
    
    // Environnement
    backgroundColor: { 
      value: '#87CEEB', 
      label: 'Couleur fond'
    },
    
    // Post-traitement
    depthOfFieldEnabled: { 
      value: false, 
      label: 'Profondeur de champ'
    },
    focusDistance: { 
      value: 0.1, 
      min: 0, 
      max: 1, 
      step: 0.01, 
      label: 'Focus'
    },
    
    // Grain
    noiseEnabled: {
      value: true,
      label: 'Grain activé'
    },
    noiseIntensity: {
      value: 0.25,
      min: 0,
      max: 1,
      step: 0.05,
      label: 'Intensité du grain'
    }
  }, { 
    collapsed: false,
    titleBar: { title: '🎛️ Contrôles Tryptique 3D' }
  });

  return (
    <Canvas 
      camera={{ position: [0, 15, 20], fov: 75 }}
      style={{ width: '100vw', height: '100vh', display: 'block' }}
    >
      <color attach="background" args={[backgroundColor]} /> {/* Fond contrôlé par Leva */}

      <Suspense fallback={null}>
        {/* --- SOL D'HERBE --- */}
        <Model url="/models/sol.glb" position={[0, 0, 0]} scale={[100, 1, 100]} />
        
        {/* --- VACHE AU CENTRE ANIMÉE EN TRAIN DE MANGER (CLIC POUR ANIMER) --- */}
        <AnimatedModel 
          url="/models/vache.glb" 
          position={[0, 0.2, 0]} 
          scale={[1, 1, 1]}
          animationName="Eating" 
          clickToPlay={true}
        />
        
        {/* --- ARBRES DISPERSÉS --- */}
        <Model url="/models/arbre.glb" position={[-8, 0.2, -5]} scale={[1.2, 1.2, 1.2]} />
        <Model url="/models/arbre.glb" position={[6, 0.2, -8]} scale={[1, 1, 1]} />
        <Model url="/models/arbre.glb" position={[-4, 0.2, 7]} scale={[0.8, 0.8, 0.8]} />
        <Model url="/models/arbre.glb" position={[10, 0.2, 3]} scale={[1.1, 1.1, 1.1]} />
        <Model url="/models/arbre.glb" position={[-12, 0.2, 10]} scale={[1.3, 1.3, 1.3]} />
        <Model url="/models/arbre.glb" position={[8, 0.2, 12]} scale={[0.9, 0.9, 0.9]} />
        <Model url="/models/arbre.glb" position={[-15, 0.2, -2]} scale={[1, 1, 1]} />
        <Model url="/models/arbre.glb" position={[3, 0.2, -12]} scale={[1.4, 1.4, 1.4]} />

      </Suspense>

      {/* Lumières contrôlées par Leva */}
      <ambientLight intensity={ambientIntensity} />
      <directionalLight position={[10, 10, 5]} intensity={directionalIntensity} color={lightColor} />
      <OrbitControls />

      {/* Effets de post-traitement */}
      <EffectComposer>
        {noiseEnabled && (
          <Noise 
            premultiply={false}
            opacity={noiseIntensity}
          />
        )}
        {depthOfFieldEnabled && (
          <DepthOfField 
            focusDistance={focusDistance}
            focalLength={0.05}
            bokehScale={2}
          />
        )}
      </EffectComposer>
    </Canvas>
  );
}

export default App;