import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

cube3.position.x = 2
group.add(cube3)

// Objects
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// Position
// DEFAULT: mesh.position.y = 1 (1mm, 1cm, 1m, 1km)
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// // mesh.position.set(0.7, -0.6, 1)

// // Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// // mesh.scale.set(2, 0.5, 0.5)

// // Rotation
// // Change the order 
// mesh.rotation.reorder('YXZ')

// mesh.rotation.x = 0.5 // Math.PI = 3.14159 = half a rotation
// mesh.rotation.y = Math.PI * 0.25

// REMEMBER: when you update rotation it updates QUATERNION and the same in reverse

// Axes helper
const AxesHelper = new THREE.AxesHelper() // default 1
scene.add(AxesHelper)

// Distance between de mesh and the center 
// console.log(mesh.position.length())

// Take the vector lenght and reduce until is 1
// mesh.position.normailize()

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// Rotate camera to see de z axis helper
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)

// Look at the object
// trying to guess... camera.lookAt(new THREE.Vector3(0, 0, 0))
// camera.lookAt(mesh.position)

// Distance to the camera
// console.log(mesh.position.distanceTo(camera.position))

//  Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)