/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.PointerLockControls = function ( camera ) {

	var scope = this;

	//camera.rotation.set( 0, 0, 0 );

	pitch_material = new THREE.MeshLambertMaterial({ color: 0xff6666 });
	pitch_geometry = new THREE.CylinderGeometry( 1, 1, 3, 8 );

	var pitchObject = new THREE.Mesh(pitch_geometry, pitch_material, 500);
	pitchObject.add( camera );

	yaw_material = new THREE.MeshLambertMaterial({ color: 0xff5555 });
	yaw_geometry = new THREE.CylinderGeometry( 1, 1, 3, 8 );

	var yawObject = new THREE.Mesh(yaw_geometry, yaw_material);

	yawObject.position.y = 10;

	yawObject.add( pitchObject );

	var PI_2 = Math.PI / 2;

	var onMouseMove = function ( event ) {

		if ( scope.enabled === false ) return;

		var movementX = event.movementX || 0;
		var movementY = event.movementY || 0;

		yawObject.rotation.y -= movementX * 0.002;
		pitchObject.rotation.x -= movementY * 0.002;

		pitchObject.rotation.x = Math.max( - PI_2, Math.min( PI_2, pitchObject.rotation.x ) );

	};

	this.dispose = function() {

		document.removeEventListener( 'mousemove', onMouseMove, false );

	}

	document.addEventListener( 'mousemove', onMouseMove, false );

	this.enabled = false;

	this.getObject = function () {

		return yawObject;

	};

	this.getDirection = function() {

		// assumes the camera itself is not rotated

		var direction = new THREE.Vector3( 0, 0, - 1 );
		var rotation = new THREE.Euler( 0, 0, 0, "YXZ" );

		return function( v ) {

			rotation.set( pitchObject.rotation.x, yawObject.rotation.y, 0 );

			v.copy( direction ).applyEuler( rotation );

			return v;

		}

	}();

};
