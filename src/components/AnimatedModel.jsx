import React, { useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function AnimatedModel({ url, animationName, clickToPlay = false, ...props }) {
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);
  const [isPlaying, setIsPlaying] = useState(!clickToPlay);

  // Gérer le clic pour démarrer/arrêter l'animation
  const handleClick = () => {
    if (clickToPlay && actions && animationName && actions[animationName]) {
      if (isPlaying) {
        actions[animationName].stop();
        setIsPlaying(false);
      } else {
        actions[animationName].play();
        setIsPlaying(true);
      }
    }
  };

  // Démarrer l'animation automatiquement ou attendre le clic
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      if (!clickToPlay) {
        // Mode automatique : jouer l'animation immédiatement
        if (animationName && actions[animationName]) {
          actions[animationName].play();
        } else {
          actions[Object.keys(actions)[0]].play();
        }
      }
      // En mode clic, on attend le clic de l'utilisateur
    }
  }, [actions, animationName, clickToPlay]);

  return (
    <primitive 
      object={scene} 
      {...props} 
      onClick={clickToPlay ? handleClick : undefined}
    />
  );
}