import React from 'react'
import './App.css'
//import Weatherform from './components/UserForm'
//import WeatherLogic from './components/weatherLogic.jsx'
//import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
//import Boxy from './weathermodels/box'
//import WeatherForm from './components/UserForm'
import Sunny from './weathermodels/sunny.jsx'
import{ OrbitControls } from '@react-three/drei'
import WeatherLogic from './logic/weatherLogic'




function App() {
  return (
    <>  
    <WeatherLogic/>
    <Canvas >
      <OrbitControls/>
      <ambientLight intensity={0.2} color={("#ffffff")} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Sunny/>
      </Canvas>
      </>
  )
}

export default App
