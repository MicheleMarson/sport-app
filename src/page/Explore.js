import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SportBox from '../components/SportBox'
import "../style/Explore.css"

const Explore = ({state, setState}) => {
  let url = `https://private-7c1f2f-technicaltaskapi.apiary-mock.com/feed`
  const [feed, setFeed] = useState()
  const [filter, setFilter] = useState({
    input: "",
    sport: "football",
    country: "croatia"
  })

  useEffect(() => {
    const getSport = async () => {
      let res = await fetch(url)
      let data = await res.json()
      setFeed(data)
    }

    getSport()
  },[])

  const inputHandler = (e) => {
    setFilter({ ...filter,input:e.target.value})
  }
  
  // ---------filtering-----------

  // filter data on input , search
  let filterFeed = feed?.filter(item => {
    return (item.description.toLowerCase().indexOf(filter.input.toLowerCase()) || 
      item.athlete.name.toLowerCase().indexOf(filter.input.toLowerCase()) || 
      item.author.name.toLowerCase().indexOf(filter.input.toLowerCase())) !== -1 && 
      item.athlete.sport.slug === filter.sport && 
      item.athlete.country.slug === filter.country
  })


  // find all sports -- api has only 
  let sports = feed?.map(item => item.athlete.sport.slug)
  // find all countries
  let countries = feed?.map(item => item.athlete.country.slug)

  // ---------filtering-----------


  return (
    <div className="explore">
      <div className="explore__filter">
        <form className="explore__form">
          <input placeholder="Search..." id="search" value={filter.input} onChange={inputHandler}/>
          <select className="explore__sportSearch">
              <option disabled>Sport</option>
            {[...new Set(sports)].map(item => (
              <option onClick={(e) => setFilter({...filter, sport:e.target.value})}>{item}</option>
            ))}
          </select>
          <select className="explore__countrySearch">
              <option disabled>Country</option>
            {[...new Set(countries)].map(item => (
              <option onClick={(e) => setFilter({...filter, country:e.target.value})}>{item}</option>
            ))}
          </select>
        </form>
      </div>
        <div className="explore__box">
          {(filterFeed && filterFeed.length > 0) ? filterFeed?.map(item => (
              <SportBox 
                item={item}
                id={item.id}
                createdDate={item.createdAt}
                createdBefore={item.createdBefore}
                author={item.author.name}
                description={item.description}
                video={item.video}
                views={item.views}
                athlete={item.athlete}
              />
          )):<p className="explore__dataNotFound">{!filterFeed?"Loading":"Data not found"}</p>}
        </div>
    </div>
  )
}

export default Explore
