import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AmbientScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const group = new THREE.Group();
    const blue = new THREE.MeshPhysicalMaterial({
      color: 0x4aa8ff,
      metalness: 0.48,
      roughness: 0.22,
      transmission: 0.28,
      transparent: true,
      opacity: 0.48,
    });
    const coral = new THREE.MeshPhysicalMaterial({
      color: 0xff6b55,
      metalness: 0.35,
      roughness: 0.28,
      transmission: 0.2,
      transparent: true,
      opacity: 0.34,
    });
    const ringGeometry = new THREE.TorusGeometry(1.28, 0.085, 18, 128);
    const smallRingGeometry = new THREE.TorusGeometry(0.82, 0.055, 16, 96);
    const nodeGeometry = new THREE.IcosahedronGeometry(0.22, 1);

    const ringA = new THREE.Mesh(ringGeometry, blue);
    ringA.rotation.x = 0.78;
    ringA.rotation.y = -0.42;
    const ringB = new THREE.Mesh(ringGeometry, coral);
    ringB.rotation.x = -0.48;
    ringB.rotation.y = 0.9;
    ringB.position.set(0.18, -0.08, -0.2);
    const ringC = new THREE.Mesh(smallRingGeometry, blue.clone());
    ringC.material.opacity = 0.2;
    ringC.position.set(-0.9, 0.96, -0.55);
    ringC.rotation.set(0.35, 0.7, -0.35);
    const node = new THREE.Mesh(nodeGeometry, coral.clone());
    node.material.opacity = 0.58;
    node.position.set(1.18, -1.05, 0.25);

    group.add(ringA, ringB, ringC, node);
    scene.add(group);
    scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.6);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    let frame = 0;
    let scrollProgress = 0;
    const clock = new THREE.Clock();

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      group.position.x = camera.aspect > 1.25 ? 2.35 : 0.72;
      group.scale.setScalar(camera.aspect > 1.25 ? 1 : 0.72);
    };

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (reduceMotion) renderer.render(scene, camera);
    };

    const render = () => {
      const time = clock.getElapsedTime();
      group.rotation.y += (scrollProgress * Math.PI * 1.7 - group.rotation.y) * 0.035;
      group.rotation.x += ((scrollProgress - 0.35) * 0.7 - group.rotation.x) * 0.028;
      group.position.y = Math.sin(time * 0.24) * 0.14 + (scrollProgress - 0.5) * 0.8;
      ringC.rotation.z = time * 0.16;
      node.rotation.x = time * 0.25;
      node.rotation.y = time * 0.18;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };

    resize();
    handleScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (reduceMotion) {
      group.rotation.set(-0.12, 0.55, 0);
      renderer.render(scene, camera);
    } else {
      render();
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      ringGeometry.dispose();
      smallRingGeometry.dispose();
      nodeGeometry.dispose();
      [blue, coral, ringC.material, node.material].forEach((material) => material.dispose());
      renderer.dispose();
    };
  }, []);

  return <canvas className="ambient-scene" ref={canvasRef} aria-hidden="true" />;
}
