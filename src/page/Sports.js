import React, { useEffect, useState } from 'react'
import "../style/Sports.css"
import SportsPageBox from "../components/SportsPageBox"

const Sports = () => {
  const [sports, setSports] = useState([])
  let sportURL = "https://private-7c1f2f-technicaltaskapi.apiary-mock.com/sport"
  useEffect(() => {
    const getSports = async () => {
      await fetch(sportURL).then(res => res.json()).then(data => setSports(data))
    }

    getSports()
  }, [])

  return (
    <div className="sports">
      <div className="sports__grid">
        {sports && (sports?.map(item => (
          <SportsPageBox
            sport={item}
          />
        )))}
      </div>
    </div>
  )
}

export default Sports
