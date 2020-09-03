import React, { useState } from 'react'

// Components
import PlanetsList from './PlanetList'
import PeopleList from './PeopleList'

// css
import '../Scss/index.scss'

export default function App() {
  const [peopleId, setCharacter] = useState(null)
  const [planetId, setPlanet] = useState(null)

  return (
    <div className="container">
      <h1 className="text-center">Star Wars API</h1>
      { peopleId || planetId
        ? (
          <>
            <button className="button primary inline" onClick={() => { setCharacter(null); setPlanet(null) }} type="button">
              &lsaquo; Return to Main
            </button>
            <p>People or Planet Details</p>
          </>
        )
        : (
          <>
            <h2>People</h2>
            <div className="horizontal-list">
              <PeopleList setCharacter={setCharacter} />
            </div>
            <h2>Planets</h2>
            <div className="vertical-list">
              <PlanetsList setPlanet={setPlanet} />
            </div>
          </>
        )}
      <footer>
        <p>
          Star Wars and all associated names and/or images are copyright Lucasfilm Ltd.
          Images taken from &nbsp;
          <a href="https://starwars-visualguide.com/" target="_blank" rel="noreferrer">starwars-visualguide.com</a>
          .
        </p>
      </footer>
    </div>
  )
}
