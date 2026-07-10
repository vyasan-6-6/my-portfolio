import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// Background Particles Component
function StarField() {
    const ref = useRef();
    // Generate 3000 particle sphere coordinates in float32 array
    const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 15 }));

    useFrame((state, delta) => {
        if (ref.current) {
            // Rotate particles slowly in background
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#a855f7"
                    size={0.03}
                    sizeWrite={false}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

// 3D Rotating Globe Component
function Globe() {
    const globeRef = useRef();
    const ringRef = useRef();

    useFrame((state, delta) => {
        if (globeRef.current) {
            // Auto rotate globe
            globeRef.current.rotation.y += delta * 0.15;
        }
        if (ringRef.current) {
            // Wobble ring slightly
            ringRef.current.rotation.z += delta * 0.05;
            ringRef.current.rotation.x = Math.PI / 2.3 + Math.sin(state.clock.getElapsedTime()) * 0.05;
        }
    });

    return (
        <group>
            {/* Ambient & Directional Lights */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <directionalLight position={[-10, -10, 5]} intensity={0.5} />

            {/* Earth Core (Dark Solid Sphere) */}
            <mesh>
                <sphereGeometry args={[2.0, 64, 64]} />
                <meshStandardMaterial color="#0f172a" roughness={0.9} metalness={0.1} />
            </mesh>

            {/* Earth Wireframe Shell (Neon Indigo Mesh) */}
            <mesh ref={globeRef}>
                <sphereGeometry args={[2.05, 32, 32]} />
                <meshStandardMaterial 
                    color="#6366f1" 
                    wireframe 
                    transparent 
                    opacity={0.35} 
                    roughness={0.1}
                />
            </mesh>

            {/* Glowing Orbiting Ring (Cyan Torus) */}
            <mesh ref={ringRef} rotation={[Math.PI / 2.2, 0, 0]}>
                <torusGeometry args={[2.9, 0.04, 8, 100]} />
                <meshStandardMaterial 
                    color="#06b6d4" 
                    emissive="#06b6d4"
                    emissiveIntensity={1.5}
                    transparent 
                    opacity={0.8} 
                />
            </mesh>
        </group>
    );
}

export default function Canvas3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-auto select-none" style={{ minHeight: '100vh' }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                gl={{ antialias: true }}
                dpr={[1, 2]}
            >
                {/* Space Stars Background */}
                <StarField />

                {/* The 3D Globe */}
                <Globe />

                {/* Drag and Rotate Controls (Recruiter Friendly) */}
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    autoRotate={false} 
                />
            </Canvas>
        </div>
    );
}
