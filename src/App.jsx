import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
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
    // Contrôles de la vache
    cowPositionY,
    cowScale,
    
    // Contrôles des lumières
    ambientIntensity,
    directionalIntensity,
    lightColor,
    
    // Contrôles de l'environnement
    backgroundColor,
    
    // Contrôles du sol
    groundScale
  } = useControls({
    // Vache
    cowPositionY: { value: 0.2, min: -1, max: 3, step: 0.1, label: 'Vache - Position Y' },
    cowScale: { value: 1, min: 0.5, max: 2, step: 0.1, label: 'Vache - Échelle' },
    
    // Éclairage
    ambientIntensity: { value: 0.6, min: 0, max: 2, step: 0.1, label: 'Lumière ambiante' },
    directionalIntensity: { value: 1, min: 0, max: 3, step: 0.1, label: 'Lumière directionnelle' },
    lightColor: { value: '#FFF8DC', label: 'Couleur lumière' },
    
    // Environnement
    backgroundColor: { value: '#87CEEB', label: 'Couleur fond' },
    
    // Sol
    groundScale: { value: 100, min: 20, max: 200, step: 10, label: 'Taille du sol' }
  });

  return (
    <Canvas 
      camera={{ position: [0, 15, 20], fov: 75 }}
      style={{ width: '100vw', height: '100vh', display: 'block' }}
    >
      <color attach="background" args={[backgroundColor]} /> {/* Fond contrôlé par Leva */}

      <Suspense fallback={null}>
        {/* --- SOL D'HERBE --- */}
        <Model url="/models/sol.glb" position={[0, 0, 0]} scale={[groundScale, 1, groundScale]} />
        
        {/* --- VACHE AU CENTRE ANIMÉE EN TRAIN DE MANGER (CLIC POUR ANIMER) --- */}
        <AnimatedModel 
          url="/models/vache.glb" 
          position={[0, cowPositionY, 0]} 
          scale={[cowScale, cowScale, cowScale]}
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
    </Canvas>
  );
}

export default App;