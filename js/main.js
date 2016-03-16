
var camera, scene, renderer;
var geometry, material, mesh;
var controls;

var objects = [];

var blocker = document.getElementById( 'blocker' );
var instructions = document.getElementById( 'instructions' );

var plane, cube;
var mouse, raycaster, rayl, isShiftDown = false;
var rollOverMesh, rollOverMaterial;
var cubeGeo, cubeMaterial;

LCC();

var controlsEnabled = false;

var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;

var dist=1000;

var prevTime = performance.now();
var velocity = new THREE.Vector3();

init();
animate();