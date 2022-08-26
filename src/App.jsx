import React from 'react'
import './App.css'
//import Weatherform from './components/UserForm'
//import WeatherLogic from './components/weatherLogic.jsx'
//import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Boxy from './weathermodels/box'
import WeatherForm from './components/UserForm'

//import Sunny from './weathermodels/sunny.jsx'




function App() {
  return (
    <>
    <WeatherForm/>
    <Canvas onCreated={state => state.gl.setClearColor(0x87CEEB)}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Boxy position={[-1, 0, 0]} />
      </Canvas>
    </>
  )
}

export default App
