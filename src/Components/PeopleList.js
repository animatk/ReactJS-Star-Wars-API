import React, { useState, useEffect } from 'react'

export default function Peoplelist() {
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
        </li>
      ))}
    </ul>
  )
}
