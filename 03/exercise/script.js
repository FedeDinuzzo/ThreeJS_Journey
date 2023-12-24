import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// console.log(THREE) devuelve un objecto
// We need 4 elements (Scene - Objects - Camera - Renderer)

// Scene
const scene = new THREE.Scene()

// Object
// A visible object in Three.js is called Mesh (geometry - material)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh) // Add a mesh to the scene

// Sizes - aspect ratio
const sizes = {
  width: 800,
  height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// Objects can have a position: camera.position(x, y, z)
camera.position.z = 3
scene.add(camera)

// Renderer
// Will render the scene from the camera's point of view, the result will be drawn into a canvas
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)