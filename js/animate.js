function animate() {

    requestAnimationFrame(animate);

    if (controlsEnabled) {
        raycaster.ray.origin.copy(controls.getObject().position);
        //raycaster.ray.origin.y -= 10;

        var intersections = raycaster.intersectObjects(objects);

        var isOnObject = intersections.length > 0;

        var time = performance.now();
        var delta = (time - prevTime) / 1000;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        if (moveForward) velocity.z -= 400.0 * delta;
        if (moveBackward) velocity.z += 400.0 * delta;

        if (moveLeft) velocity.x -= 400.0 * delta;
        if (moveRight) velocity.x += 400.0 * delta;

        if (isOnObject === true) {
            velocity.y = Math.max(0, velocity.y);
            controls.getObject().translateY(7.5 - intersections[0].distance);
            controls.getPObject().translateY(7.5 - intersections[0].distance);
            canJump = true;
        }

        controls.getObject().translateX(velocity.x * delta);
        controls.getObject().translateY(velocity.y * delta);
        controls.getObject().translateZ(velocity.z * delta);

        controls.getPObject().translateX(velocity.x * delta);
        controls.getPObject().translateY(velocity.y * delta);
        controls.getPObject().translateZ(velocity.z * delta);

        if (controls.getObject().position.y < 10) {

            velocity.y = 0;
            controls.getObject().position.y = 10;
            controls.getPObject().position.y = 0;

            canJump = true;

        }

        prevTime = time;

    }

    renderer.render(scene, camera);

}
