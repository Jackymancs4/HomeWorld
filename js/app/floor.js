function floor() {

    var simplex = new SimplexNoise();

    geometry = new THREE.PlaneGeometry(2000, 2000, segment + 1, segment + 1);
    geometry.rotateX(-Math.PI / 2);

    var index = 0;
    var i;

    for (i = 0; i <= segment; i++) {
        for (var j = 0; j <= segment; j++) {

            var vertex = geometry.vertices[index];
            //vertex.y = 1+terrainn[i][j];

            vertex.x += Math.random() * 20 - 10;
            vertex.z += Math.random() * 20 - 10;
            noise = simplex.noise2D(i / fact, j / fact) * mult + trasl;

            if (noise < barr)
                vertex.y = level;
            else
                vertex.y = noise;
            index++;
        }
    }

    for (i = 0, l = geometry.faces.length; i < l; i++) {

        var face = geometry.faces[i];
        face.vertexColors[0] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
        face.vertexColors[1] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
        face.vertexColors[2] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);

    }

    material = new THREE.MeshBasicMaterial({
        vertexColors: THREE.VertexColors
    });

    mesh = new THREE.Mesh(geometry, material);

    objects.push(mesh);
    scene.add(mesh);
}
