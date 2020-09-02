import React, { useState, useEffect } from 'react'

export default function Planetlist() {
  const [planets, setPlanets] = useState([])
  const imgURL = 'https://starwars-visualguide.com/assets/img/planets/'

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then((res) => res.json())
      .then(
        (resp) => {
          setPlanets(resp.results)
        },
      )
  }, [])

  function getId(url) {
    return url.split('/')[url.split('/').length - 2]
  }

  return (
    <ul className="grid grid--columns grid--gap">
      {planets.map((planet) => (
        <li
          key={planet.name}
          style={
          { backgroundImage: `url(${imgURL + getId(planet.url)}.jpg)` }
          }
        >
          <div className="desc">
            <h3>{planet.name}</h3>
            <p>{`Diameter: ${planet.diameter}`}</p>
            <p>{planet.terrain}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
