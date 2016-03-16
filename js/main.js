//Base


var scene, renderer;
var geometry, material, mesh;
var controls;

var objects = [];

//Terrain

var dim=2048;
var clusterdim=128;
var segment=32;
var fact=16;
var mult=50;
var trasl=0;
var barr=1;
var level=2.5;

//Character

var camera;
var raycaster;
var mouse;
var isShiftDown = false;


var controlsEnabled = false;

var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;

var prevTime = performance.now();
var velocity = new THREE.Vector3();

//Document

var blocker = document.getElementById( 'blocker' );
var instructions = document.getElementById( 'instructions' );
LCC();

//Start

init();
animate();