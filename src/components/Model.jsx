import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model({ url, color, ...props }) {
  const { scene } = useGLTF(url);
  
  // Clone la scène seulement pour les arbres (multiples instances)
  // Pour les modèles uniques comme la vache et le sol, pas de clonage
  const shouldClone = url.includes('arbre.glb');
  const sceneToUse = shouldClone ? scene.clone() : scene;
  
  // Appliquer une couleur si spécifiée (seulement pour les arbres)
  if (color && url.includes('arbre.glb') && shouldClone) {
    sceneToUse.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.material.color.set(color);
      }
    });
  }
  
  return <primitive object={sceneToUse} {...props} />;
}