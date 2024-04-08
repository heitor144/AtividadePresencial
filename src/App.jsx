import { Routes, Route } from 'react-router-dom';
import './global.styles.css'
import styles from './components/App.module.css'
import { Header } from "./components/Header"
import { Sidebar } from './components/Sidebar'
import { Sobre } from "./components/Sobre"
import { Experiencia } from './components/Experiencia'
import { Formacao } from './components/Formacao'
import { Competencias } from './components/Competencias'

function App() {


  return (
    
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />


          <div>

            <Routes>
              <Route path='/' element={<Sobre />} />
              <Route path='/experiencia' element={<Experiencia />} />
              <Route path='/formacao' element={<Formacao />} />
              <Route path='/competencias' element={<Competencias />} />
              
            </Routes>
          </div>
        </div>
      </div>

  )
}

export default App
