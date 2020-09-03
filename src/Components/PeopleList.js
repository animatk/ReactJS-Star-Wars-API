import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Peoplelist = ({
  setCharacter,
}) => {
  const [people, setPeople] = useState([])
  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/'

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then(
        (resp) => {
          setPeople(resp.results)
        },
      )
  }, [])

  function getId(url) {
    return url.split('/')[url.split('/').length - 2]
  }

  return (
    <ul className="">
      {people.map((person) => (
        <li>
          <a href={`#${person.name}`} onClick={() => setCharacter(getId(person.url))} role="button">
            <div
              className="img"
              key={person.name}
              style={
            { backgroundImage: `url(${imgURL + getId(person.url)}.jpg)` }
            }
            />
            <div className="desc">
              <h3>{person.name}</h3>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}

Peoplelist.propTypes = {
  setCharacter: PropTypes.func.isRequired,
}

export default Peoplelist
