import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
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
  return (
    <Canvas 
      camera={{ position: [0, 15, 20], fov: 75 }}
      style={{ width: '100vw', height: '100vh', display: 'block' }}
    >
      <color attach="background" args={['#87CEEB']} /> {/* Fond bleu ciel pour le jour */}

      <Suspense fallback={null}>
        {/* --- SOL D'HERBE --- */}
        <Model url="/models/sol.glb" position={[0, 0, 0]} scale={[100, 1, 100]} />
        
        {/* --- VACHE AU CENTRE ANIMÉE EN TRAIN DE MANGER (CLIC POUR ANIMER) --- */}
        <AnimatedModel 
          url="/models/vache.glb" 
          position={[0, 0.2, 0]} 
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

      {/* Lumières pour un environnement pastoral diurne */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#FFF8DC" />
      <Environment preset="park" />
      <OrbitControls />
    </Canvas>
  );
}

export default App;