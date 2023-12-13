import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setClearColor(0xffffff);

camera.lookAt(0,0,0);
camera.position.z = 5;

const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(-10, 8, 1);
scene.add(directionalLight);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const loader = new GLTFLoader();
loader.load('./monkey.glb', (gltf) => {
    const model = gltf.scene;
    scene.add( model );
});

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();