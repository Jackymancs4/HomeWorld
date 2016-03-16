function grid() {
// grid

	var size = 100, step = 10;

	var geometry = new THREE.Geometry();

	for ( var i = - size; i <= size; i += step ) {

		geometry.vertices.push( new THREE.Vector3( - size, 5, i ) );
		geometry.vertices.push( new THREE.Vector3(   size, 5, i ) );

		geometry.vertices.push( new THREE.Vector3( i, 5, - size ) );
		geometry.vertices.push( new THREE.Vector3( i, 5,   size ) );

	}

	var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2, transparent: true } );

	var line = new THREE.LineSegments( geometry, material );
	scene.add( line );

	//
	
}