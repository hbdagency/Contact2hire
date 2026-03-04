'use client'

import { useRef, useMemo, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Sphere, Line, Float, OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'

// City coordinates (lat, lng) converted to 3D positions
const cities = [
  { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714, placements: 0, type: 'source' as const, flag: '🇮🇳' },
  { name: 'London', lat: 51.5074, lng: -0.1278, placements: 320, type: 'destination' as const, flag: '🇬🇧' },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, placements: 280, type: 'destination' as const, flag: '🇦🇪' },
  { name: 'Frankfurt', lat: 50.1109, lng: 8.6821, placements: 185, type: 'destination' as const, flag: '🇩🇪' },
  { name: 'Riyadh', lat: 24.7136, lng: 46.6753, placements: 150, type: 'destination' as const, flag: '🇸🇦' },
  { name: 'Amsterdam', lat: 52.3676, lng: 4.9041, placements: 95, type: 'destination' as const, flag: '🇳🇱' },
  { name: 'Doha', lat: 25.2854, lng: 51.5310, placements: 70, type: 'destination' as const, flag: '🇶🇦' },
  { name: 'Dublin', lat: 53.3498, lng: -6.2603, placements: 55, type: 'destination' as const, flag: '🇮🇪' },
]

// Convert lat/lng to 3D position on a sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)
  
  return new THREE.Vector3(x, y, z)
}

// Create curved line between two points
function createCurve(start: THREE.Vector3, end: THREE.Vector3, height: number = 0.5) {
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
  mid.normalize().multiplyScalar(2 + height)
  
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
  return curve.getPoints(50)
}

// Earth texture URL (simple blue marble)
const EARTH_TEXTURE_URL = 'https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg'
const EARTH_BUMP_URL = 'https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png'

// Globe component with texture
function GlobeWithTexture() {
  const globeRef = useRef<THREE.Group>(null)
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  
  // Load textures
  const [earthTexture, bumpTexture] = useLoader(THREE.TextureLoader, [EARTH_TEXTURE_URL, EARTH_BUMP_URL])
  
  // Rotation animation
  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.05
    }
  })

  // City positions
  const cityPositions = useMemo(() => {
    return cities.map(city => ({
      ...city,
      position: latLngToVector3(city.lat, city.lng, 2)
    }))
  }, [])

  // Connection lines from Ahmedabad to all destinations
  const connections = useMemo(() => {
    const source = cityPositions.find(c => c.type === 'source')
    if (!source) return []
    
    return cityPositions
      .filter(c => c.type === 'destination')
      .map(dest => ({
        from: source.position,
        to: dest.position,
        points: createCurve(source.position, dest.position, 0.3),
        placements: dest.placements,
        name: dest.name
      }))
  }, [cityPositions])

  return (
    <group ref={globeRef}>
      {/* Globe sphere with texture */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={0.05}
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Atmosphere glow */}
      <Sphere args={[2.05, 64, 64]}>
        <meshBasicMaterial
          color="#4FC3F7"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* City markers */}
      {cityPositions.map((city) => (
        <group key={city.name} position={city.position}>
          {/* City point */}
          <mesh
            onPointerOver={() => setHoveredCity(city.name)}
            onPointerOut={() => setHoveredCity(null)}
          >
            <sphereGeometry args={[city.type === 'source' ? 0.08 : 0.05, 16, 16]} />
            <meshBasicMaterial 
              color={city.type === 'source' ? '#F4B942' : '#0F5132'} 
            />
          </mesh>
          
          {/* Glow effect */}
          <mesh>
            <sphereGeometry args={[city.type === 'source' ? 0.12 : 0.08, 16, 16]} />
            <meshBasicMaterial 
              color={city.type === 'source' ? '#F4B942' : '#0F5132'}
              transparent
              opacity={0.4}
            />
          </mesh>
          
          {/* Label on hover */}
          {hoveredCity === city.name && (
            <Html distanceFactor={10} style={{ pointerEvents: 'none' }}>
              <div className="bg-cream/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap">
                <div className="font-bold text-charcoal text-sm">{city.name}</div>
                {city.type === 'destination' && (
                  <div className="text-sky text-xs">{city.placements}+ placements</div>
                )}
                {city.type === 'source' && (
                  <div className="text-coral text-xs">Source Hub</div>
                )}
              </div>
            </Html>
          )}
        </group>
      ))}

      {/* Connection lines */}
      {connections.map((conn, index) => (
        <Line
          key={index}
          points={conn.points}
          color="#F4B942"
          lineWidth={2}
          transparent
          opacity={0.8}
        />
      ))}
    </group>
  )
}

// Fallback globe without texture (for when texture fails to load)
function GlobeFallback() {
  const globeRef = useRef<THREE.Group>(null)
  
  // Rotation animation
  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.05
    }
  })

  // City positions
  const cityPositions = useMemo(() => {
    return cities.map(city => ({
      ...city,
      position: latLngToVector3(city.lat, city.lng, 2)
    }))
  }, [])

  // Connection lines
  const connections = useMemo(() => {
    const source = cityPositions.find(c => c.type === 'source')
    if (!source) return []
    
    return cityPositions
      .filter(c => c.type === 'destination')
      .map(dest => ({
        points: createCurve(source.position, dest.position, 0.3),
      }))
  }, [cityPositions])

  return (
    <group ref={globeRef}>
      {/* Globe sphere - styled to look like Earth */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#1E88E5"
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>
      
      {/* Continents approximation with green patches */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial
          color="#43A047"
          transparent
          opacity={0.3}
          wireframe
        />
      </Sphere>
      
      {/* Atmosphere */}
      <Sphere args={[2.05, 64, 64]}>
        <meshBasicMaterial
          color="#4FC3F7"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* City markers */}
      {cityPositions.map((city) => (
        <group key={city.name} position={city.position}>
          <mesh>
            <sphereGeometry args={[city.type === 'source' ? 0.08 : 0.05, 16, 16]} />
            <meshBasicMaterial 
              color={city.type === 'source' ? '#F4B942' : '#0F5132'} 
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[city.type === 'source' ? 0.12 : 0.08, 16, 16]} />
            <meshBasicMaterial 
              color={city.type === 'source' ? '#F4B942' : '#0F5132'}
              transparent
              opacity={0.4}
            />
          </mesh>
        </group>
      ))}

      {/* Connection lines */}
      {connections.map((conn, index) => (
        <Line
          key={index}
          points={conn.points}
          color="#F4B942"
          lineWidth={2}
          transparent
          opacity={0.8}
        />
      ))}
    </group>
  )
}

// Floating particles
function Particles() {
  const count = 100
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 + Math.random() * 0.5
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  const pointsRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#F4B942"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Main scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#F4B942" />
      
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <Suspense fallback={<GlobeFallback />}>
          <GlobeWithTexture />
        </Suspense>
      </Float>
      
      <Particles />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  )
}

// Legend component
function Legend() {
  return (
    <div className="absolute bottom-4 left-4 bg-cream/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
      <h4 className="font-display text-sm font-bold text-charcoal mb-3">Talent Flow</h4>
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-coral" />
          <span className="text-charcoal">Source Hub (India)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-sky" />
          <span className="text-charcoal">EMEA Destinations</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-coral/60" />
          <span className="text-charcoal">Talent Pipeline</span>
        </div>
      </div>
    </div>
  )
}

// Stats overlay
function StatsOverlay() {
  const stats = [
    { label: 'UK', value: '320+', flag: '🇬🇧' },
    { label: 'UAE', value: '280+', flag: '🇦🇪' },
    { label: 'Germany', value: '185+', flag: '🇩🇪' },
    { label: 'Saudi', value: '150+', flag: '🇸🇦' },
  ]

  return (
    <div className="absolute top-4 right-4 space-y-2">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-cream/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-200 flex items-center gap-2"
        >
          <span className="text-lg">{stat.flag}</span>
          <div>
            <div className="font-display text-sm font-bold text-charcoal">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Main export
export default function TalentFlowGlobe() {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      
      <Legend />
      <StatsOverlay />
      
      {/* Title overlay */}
      <div className="absolute top-4 left-4">
        <h3 className="font-display text-xl font-bold text-charcoal">
          India to EMEA
        </h3>
        <p className="text-sm text-gray-500">Talent Flow Visualization</p>
      </div>
    </div>
  )
}