# 🌳 Tryptique 3D - Scène Pastorale Interactive

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![Three.js](https://img.shields.io/badge/Three.js-0.168.0-black.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Une scène 3D interactive développée avec React et Three.js, représentant un environnement pastoral immersif avec une vache animée, des arbres dispersés et des effets de post-traitement cinématographiques.

## ✨ Fonctionnalités

- 🌱 **Terrain d'herbe** avec sol 3D réaliste
- 🐄 **Vache animée** avec animation "Eating" contrôlée par clic
- 🌳 **8 arbres dispersés** avec positions et échelles variées
- 🎮 **Interactivité** : Cliquez sur la vache pour déclencher l'animation
- 🎥 **Caméra libre** avec contrôles OrbitControls
- ☀️ **Éclairage diurne** avec lumière ambiante et directionnelle
- 🎛️ **Panneau de contrôle Leva** pour ajuster la scène en temps réel
- 🎬 **Effets de post-traitement** : Profondeur de champ et grain cinématographique

## 🛠️ Technologies

- **React 18.3.1** + **Vite 7.1.0** - Framework et build tool
- **@react-three/fiber 8.17.8** - Three.js pour React
- **@react-three/drei 9.114.3** - Utilitaires 3D (useGLTF, OrbitControls, Environment)
- **@react-three/postprocessing 2.16.3** - Effets de post-traitement
- **Three.js 0.168.0** - Moteur 3D WebGL
- **Leva 0.9.35** - Interface de contrôle interactive
- **Modèles GLB** - Assets 3D (sol, vache, arbres)

## 🎯 Architecture

```
src/
├── App.jsx                 # Scène principale avec Canvas et éléments 3D
├── main.jsx               # Point d'entrée de l'application
├── App.css                # Styles globaux
├── index.css              # Styles de base
└── components/
    ├── Model.jsx          # Composant pour modèles 3D statiques
    └── AnimatedModel.jsx  # Composant pour modèles 3D animés avec contrôle interactif

public/
└── models/
    ├── arbre.glb         # Modèle 3D des arbres
    ├── sol.glb           # Modèle 3D du terrain
    └── vache.glb         # Modèle 3D animé de la vache
```

## 🚀 Installation et lancement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/jeanmasso/tryptique-3D.git

# Aller dans le dossier
cd tryptique-3D

# Installer les dépendances
npm install
```

### Développement
```bash
# Lancer le serveur de développement
npm run dev
```
L'application sera accessible sur `http://localhost:5173`

### Production
```bash
# Construire pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 🎮 Utilisation

### Contrôles de la scène
- **Clic gauche + glisser** : Faire tourner la caméra
- **Molette** : Zoom avant/arrière
- **Clic droit + glisser** : Déplacer la vue
- **Clic sur la vache** : Démarrer/arrêter l'animation de broutage

### Panneau de contrôle Leva
Le panneau en haut à droite permet d'ajuster :
- **Éclairage** : Intensité ambiante, directionnelle et couleur
- **Environnement** : Couleur du fond
- **Post-traitement** : Profondeur de champ et grain

## 🎨 Effets visuels

- **Depth of Field** : Effet de flou de profondeur pour un rendu photographique
- **Film Grain** : Grain cinématographique pour une ambiance vintage
- **Éclairage dynamique** : Simulation de lumière naturelle diurne

## 📱 Compatibilité

- ✅ Navigateurs modernes (Chrome 56+, Firefox 51+, Safari 15+)
- ✅ Support WebGL2 requis pour les effets de post-traitement
- ✅ Compatible desktop et mobile

## 🌐 Déploiement

Le projet est configuré pour Netlify avec :
- Configuration automatique via `netlify.toml`
- Cache optimisé pour les assets 3D
- Support des modèles GLB

## 📝 Spécifications du projet

Ce projet répond aux exigences de formation suivantes :
- ✅ Projet React avec @react-three/fiber et @react-three/drei
- ✅ Modèles GLB statiques et animés dans public/models/
- ✅ Composant Model pour modèles sans animation
- ✅ Composant AnimatedModel avec useAnimations
- ✅ Scène Canvas avec multiples modèles et sol
- ✅ Interaction par clic pour déclencher animations
- ✅ Préchargement avec useGLTF.preload()
- ✅ Effets de post-traitement avec @react-three/postprocessing

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou proposer une pull request.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Jean Masso**
- GitHub: [@jeanmasso](https://github.com/jeanmasso)
- Projet: Formation LP MIAW - Dev Front Avancé

---

*Une démonstration parfaite d'intégration React/Three.js avec gestion d'animations et d'interactivité utilisateur.* 🌟
