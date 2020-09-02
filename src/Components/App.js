import React, { memo } from 'react'

// Components
import PlanetsList from './PlanetList'

// css
import '../Scss/index.scss'

const App = memo(() => (
  <div className="container">
    <h1>Star Wars</h1>
    <h2>People</h2>
    <div className="horizontal-list">
      <p>People Items</p>
    </div>
    <h2>Planets</h2>
    <div className="vertical-list">
      <PlanetsList />
    </div>
    <footer>
      <p>
        Star Wars and all associated names and/or images are copyright Lucasfilm Ltd.
        Images taken from &nbsp;
        <a href="https://starwars-visualguide.com/" target="_blank" rel="noreferrer">starwars-visualguide.com</a>
        .
      </p>
    </footer>
  </div>
))

export default App
