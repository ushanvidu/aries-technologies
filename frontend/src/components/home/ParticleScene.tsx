'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedParticles() {
    const groupRef = useRef < THREE.Group > (null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Gentle floating movement for the whole group based on mouse
        const x = state.pointer.x;
        const y = state.pointer.y;

        if (groupRef.current) {
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.2, 0.05);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.2, 0.05);
        }
    });

    return (
        <group ref={groupRef}>
            {/* White Neural Dust */}
            <Sparkles
                count={300}
                scale={10}
                size={1}
                speed={0.4}
                opacity={0.6}
                color="#ffffff"
            />
            {/* Red Accents - representing active nodes */}
            <Sparkles
                count={50}
                scale={8}
                size={3}
                speed={0.6}
                opacity={0.8}
                color="#FF2E2E"
            />
        </group>
    );
}

export function ParticleScene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full bg-background">
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                {/* Deep Black Fog to blend edges */}
                <fog attach="fog" args={['#050505', 2, 10]} />
                <ambientLight intensity={0.5} />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <AnimatedParticles />
                </Float>

                {/* Background stars for depth */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
            {/* Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
        </div>
    );
}
