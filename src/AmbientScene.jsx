import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import logoVector from "./assets/co-logo-solid.svg?raw";

function createSpring(value) {
  return { value, velocity: 0 };
}

function advanceSpring(state, target, delta) {
  const stiffness = 7.2;
  const damping = 5.2;
  state.velocity += ((target - state.value) * stiffness - state.velocity * damping) * delta;
  state.value += state.velocity * delta;
}

function createLogoGeometry() {
  const svg = new SVGLoader().parse(logoVector);
  const shapes = svg.paths.flatMap((path) => SVGLoader.createShapes(path));
  const geometries = shapes.map((shape) => {
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 48,
      steps: 2,
      curveSegments: 20,
      bevelEnabled: true,
      bevelThickness: 6.5,
      bevelSize: 5.5,
      bevelSegments: 8,
    });
    geometry.rotateX(Math.PI);
    geometry.computeBoundingBox();
    return geometry;
  });

  const bounds = new THREE.Box3();
  geometries.forEach((geometry) => bounds.union(geometry.boundingBox));
  const center = bounds.getCenter(new THREE.Vector3());
  const size = bounds.getSize(new THREE.Vector3());
  const scale = 4.35 / Math.max(size.x, 1);

  geometries.forEach((geometry) => {
    geometry.translate(-center.x, -center.y, -center.z);
    geometry.scale(scale, scale, scale);
    geometry.computeVertexNormals();
  });

  return geometries;
}

export default function AmbientScene({ theme = "dark", path = "/" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = theme === "light" ? 1.28 : 1.08;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const group = new THREE.Group();
    const logoGroup = new THREE.Group();
    const geometries = createLogoGeometry();
    const materials = [
      new THREE.MeshPhysicalMaterial({
        color: theme === "light" ? 0x1975b4 : 0x12689f,
        emissive: theme === "light" ? 0x061927 : 0x06243a,
        emissiveIntensity: theme === "light" ? 0.28 : 0.72,
        metalness: 0.62,
        roughness: 0.24,
        clearcoat: 0.76,
        clearcoatRoughness: 0.18,
      }),
      new THREE.MeshStandardMaterial({
        color: theme === "light" ? 0x4d7189 : 0x04131f,
        emissive: theme === "light" ? 0x05090c : 0x03101a,
        emissiveIntensity: theme === "light" ? 0.16 : 0.48,
        metalness: 0.74,
        roughness: 0.31,
      }),
    ];

    geometries.forEach((geometry) => {
      const mesh = new THREE.Mesh(geometry, materials);
      logoGroup.add(mesh);
    });

    const hemisphere = new THREE.HemisphereLight(0x7fc7ff, 0x010306, 1.5);
    const keyLight = new THREE.DirectionalLight(0xa4d8ff, 3.4);
    keyLight.position.set(3.6, 4.2, 5.5);
    const blueRim = new THREE.PointLight(0x248dff, 5.4, 13);
    blueRim.position.set(3.1, 0.5, 3.8);
    const coralRim = new THREE.PointLight(0xff6b55, 3.2, 11);
    coralRim.position.set(-3.2, -1.4, 2.6);

    group.add(logoGroup);
    scene.add(group, hemisphere, keyLight, blueRim, coralRim);

    let frame = 0;
    let elapsed = 0;
    let logoSpin = -0.34;
    let isWide = window.innerWidth / Math.max(window.innerHeight, 1) > 1.25;
    let targetSide = -1;
    let targetY = 0;
    const xSpring = createSpring(-1.7);
    const ySpring = createSpring(0);
    const homeCaseBlocks = Array.from(document.querySelectorAll(".case-block[data-logo-side]"));
    const casePageAnchors = Array.from(
      document.querySelectorAll(
        ".case-page-cover, .case-gallery-item, .case-page-scenarios, .enterprise-accents, .rag-flow-section, .social-video-card, .social-event-card",
      ),
    );
    const motionAnchors = homeCaseBlocks.length > 0 ? homeCaseBlocks : casePageAnchors;
    const contactSection = document.getElementById("contact");
    const clock = new THREE.Clock();

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();

      isWide = camera.aspect > 1.25;
      group.scale.setScalar(isWide ? 0.62 : 0.34);
      if (reduceMotion) renderer.render(scene, camera);
    };

    const handleScroll = () => {
      if (!isWide || motionAnchors.length === 0) {
        targetSide = -1;
        targetY = 0;
      } else {
        const viewportCenter = window.innerHeight * 0.5;
        const remainingScroll = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
        const casesTop = motionAnchors[0].getBoundingClientRect().top;
        const contactTop = contactSection?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
        const isContactInView = contactTop < window.innerHeight * 0.72;

        if (isContactInView || remainingScroll < window.innerHeight * 0.85) {
          targetSide = -1;
          targetY = -1.02;
        } else if (casesTop > window.innerHeight * 0.72) {
          targetSide = -1;
          targetY = -0.08;
        } else {
          let activeCase = motionAnchors[0];
          let activeRect = activeCase.getBoundingClientRect();
          let closestDistance = Math.abs(activeRect.top + activeRect.height * 0.5 - viewportCenter);

          motionAnchors.slice(1).forEach((caseBlock) => {
            const rect = caseBlock.getBoundingClientRect();
            const distance = Math.abs(rect.top + rect.height * 0.5 - viewportCenter);
            if (distance < closestDistance) {
              activeCase = caseBlock;
              activeRect = rect;
              closestDistance = distance;
            }
          });

          const explicitSide = activeCase.dataset.logoSide;
          if (explicitSide) {
            targetSide = explicitSide === "right" ? 1 : -1;
          } else {
            const activeIndex = motionAnchors.indexOf(activeCase);
            const anchorCenter = activeRect.left + activeRect.width * 0.5;
            const hasClearSide = activeRect.width < window.innerWidth * 0.72;
            const visualIsLeft = hasClearSide ? anchorCenter < window.innerWidth * 0.5 : activeIndex % 2 === 0;
            targetSide = visualIsLeft ? 1 : -1;
          }
          const caseCenterOffset = activeRect.top + activeRect.height * 0.5 - viewportCenter;
          targetY = THREE.MathUtils.clamp(caseCenterOffset * 0.0012, -0.42, 0.42);
        }
      }

      if (reduceMotion) {
        group.position.set(isWide ? targetSide * 1.72 : 0, targetY, 0);
        renderer.render(scene, camera);
      }
    };

    const render = () => {
      const delta = Math.min(clock.getDelta(), 1 / 30);
      elapsed += delta;
      logoSpin += delta * 0.24;

      const destinationX = isWide ? targetSide * 1.72 : 0;
      advanceSpring(xSpring, destinationX, delta);
      advanceSpring(ySpring, targetY, delta);

      const flightLift = Math.min(Math.abs(xSpring.velocity) * 0.07, 0.27);
      group.position.x = xSpring.value + Math.sin(elapsed * 0.19) * 0.045;
      group.position.y = ySpring.value + flightLift + Math.sin(elapsed * 0.27) * 0.065;
      group.position.z = Math.sin(elapsed * 0.14) * 0.1;
      group.rotation.x = 0.035 + Math.sin(elapsed * 0.21) * 0.04;
      group.rotation.z = Math.sin(elapsed * 0.16) * 0.02 - xSpring.velocity * 0.018;

      logoGroup.rotation.x = -0.11 + Math.sin(elapsed * 0.31) * 0.08;
      logoGroup.rotation.y = logoSpin + xSpring.velocity * 0.022;
      logoGroup.rotation.z = -0.025 + Math.sin(elapsed * 0.23) * 0.018;

      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };

    resize();
    handleScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (reduceMotion) {
      group.rotation.set(0.035, 0, -0.015);
      logoGroup.rotation.set(-0.1, -0.28, -0.025);
      renderer.render(scene, camera);
    } else {
      render();
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
    };
  }, [theme, path]);

  return <canvas className="ambient-scene" ref={canvasRef} aria-hidden="true" />;
}
