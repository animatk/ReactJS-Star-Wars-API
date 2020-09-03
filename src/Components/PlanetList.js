import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Planetlist = ({
  setPlanet,
}) => {
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
            <a href={`#planets/${planet.name}`} onClick={() => setPlanet(getId(planet.url))} role="button">
              More details &raquo;
            </a>
          </div>
        </li>
      ))}
    </ul>
  )
}

Planetlist.propTypes = {
  setPlanet: PropTypes.func.isRequired,
}

export default Planetlist
