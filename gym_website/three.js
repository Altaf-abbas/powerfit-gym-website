const container = document.getElementById("three-container");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
alpha: true,
antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.appendChild(renderer.domElement);

// Lights
const light1 = new THREE.PointLight(0xffffff, 2);
light1.position.set(5, 5, 5);
scene.add(light1);

const light2 = new THREE.PointLight(0xff0000, 3);
light2.position.set(-5, -3, 5);
scene.add(light2);

const ambient = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambient);

// Torus (Gym Ring)
const geometry = new THREE.TorusGeometry(2, 0.45, 32, 120);

const material = new THREE.MeshStandardMaterial({
color: 0xff3333,
metalness: 1,
roughness: 0.15
});

const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Floating Spheres
const balls = [];

for(let i=0;i<40;i++){

const g = new THREE.SphereGeometry(0.05,16,16);

const m = new THREE.MeshStandardMaterial({
color:0xffffff
});

const s = new THREE.Mesh(g,m);

s.position.set(
(Math.random()-0.5)*12,
(Math.random()-0.5)*8,
(Math.random()-0.5)*8
);

scene.add(s);

balls.push(s);

}

camera.position.z = 6;

function animate(){

requestAnimationFrame(animate);

torus.rotation.x += 0.006;
torus.rotation.y += 0.01;

balls.forEach((b,index)=>{

b.position.y += Math.sin(Date.now()*0.001+index)*0.002;

});

renderer.render(scene,camera);

}

animate();

window.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5);

const y=(e.clientY/window.innerHeight-.5);

camera.position.x=x*1.5;
camera.position.y=-y*1.5;

camera.lookAt(scene.position);

});

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});