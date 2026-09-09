import { Canvas } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import BosphorusMesh from './BosphorusMesh'

export default function TurkeyScene() { return <Canvas className="turkey-scene" camera={{ position: [0, 3, 8], fov: 45 }}><ambientLight intensity={.45} /><pointLight position={[2, 4, 3]} color="#8ED8D0" intensity={3} /><Float speed={1.2} rotationIntensity={.05}><BosphorusMesh /></Float><Sparkles count={80} scale={[12, 4, 12]} size={1.4} color="#8ED8D0" opacity={.4} /></Canvas> }
