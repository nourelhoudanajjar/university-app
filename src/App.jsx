import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import nfcb from './assets/nfcb.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <img src={nfcb} alt="" id="n"/>
      <h1>Fiche étudiant</h1>
      <p><strong> Nom & Prénom: </strong>Nour Elhouda Najjar</p>
      <br />
      <p ><strong>Email:</strong>nournajjar796@gmail.com</p><br />
      <p ><strong>Téléphone:</strong>+216 22 854 370 </p><br />
      <p ><strong>Fillière:</strong>Génie logiciel et Systèmes d'informatique</p><br />
      <p><strong>Année d'étude:</strong>2026/2027</p><br />
      <p><strong>Groupe :</strong>GLSI 2</p><br />
      <p><strong>Ville :</strong> Bizerte </p><br />
      <a href="mailto:nournajjar796@gmail.com">
        <button  id="btn">Contacter</button>
      </a>
      
    </div>
        )
}

export default App;
