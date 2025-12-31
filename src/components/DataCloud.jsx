import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function HiveLattice({ rows = 20, cols = 40 }) {
    const mesh = useRef()
    const { mouse, viewport } = useThree()

    const dummy = useMemo(() => new THREE.Object3D(), [])

    // Hexagonal Lattice Math
    const grid = useMemo(() => {
        const points = []
        const spacingX = 1.6
        const spacingY = 1.4
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const x = (j - cols / 2) * spacingX + (i % 2 === 0 ? 0 : spacingX / 2)
                const y = (i - rows / 2) * spacingY
                points.push({ x, y, z: 0 })
            }
        }
        return points
    }, [rows, cols])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        grid.forEach((point, i) => {
            const { x, y } = point

            // Calculate distance to mouse for warping effect
            const dx = (state.mouse.x * viewport.width / 2) - x
            const dy = (state.mouse.y * viewport.height / 2) - y
            const dist = Math.sqrt(dx * dx + dy * dy)
            const force = Math.max(0, 1 - dist / 5)

            const z = Math.sin(time + dist * 0.5) * 0.5 + (force * 2)

            dummy.position.set(x, y, z)
            dummy.scale.setScalar(0.2 + (force * 0.5))
            dummy.rotation.set(0, 0, time * 0.1 + (force * Math.PI))
            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[null, null, rows * cols]}>
            <circleGeometry args={[0.5, 6]} /> {/* 6 segments = Hexagon */}
            <meshStandardMaterial
                color="#ffffff"
                emissive="#333333"
                emissiveIntensity={1}
                wireframe
            />
        </instancedMesh>
    )
}

export default function DataCloud() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none', background: '#050505' }}>
            <Canvas camera={{ fov: 60, position: [0, 0, 25] }}>
                <ambientLight intensity={0.1} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
                <HiveLattice />
            </Canvas>
        </div>
    )
}
