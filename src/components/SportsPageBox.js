import React from 'react'

const SportsPageBox = ({sport}) => {
  return (
    <div className="sportsPageBox">
      <img className="sportsPageBox__icon" src={sport.icon} />
      <p className="sportsPageBox__name">{sport.slug}</p>
    </div>
  )
}

export default SportsPageBox
