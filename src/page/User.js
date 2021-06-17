import React, { useEffect, useState } from 'react'
import "../style/User.css"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const User = ({state, setState}) => {
  const {userData} = state
  const [next, setNext] = useState(0) 

  const prevBtn = () => {
    if(next === 0){
      setNext(userData.athletes.length - 1)
    }else{
      setNext(prev => prev - 1)
    }
  }

  const nextBtn = () => {
    if(next === userData.athletes.length - 1){
      setNext(0)
    }else{
      setNext(prev => prev + 1)
    }
  }


  console.log(next);

  // console.log("userdata", state.userData);
  // src.replace(/open/, "uc")
  return (
  <>
    {state.userData && (
      <div className="user">
        <div className="user__data">
          <div className="user__img">
            <img src={userData.avatar.replace(/open/, "uc")} alt="userimg"/>
          </div>
          <div className="user__info">
            <div className="user__account">
              <div className="user__accountLabel user--label">
                <p>Account</p>
              </div>
              <div className="user__p">
                <p className="user__username">Username: {userData.username}</p>
                <p className="user__name">Name: {userData.name}</p>
                <p className="user__views">Views: {userData.views}</p>
              </div>
            </div>
            <div className="user__drive">
              <div className="user__driveLabel user--label">
                <p>Drive</p>
              </div>
              <div className="user__p">
                <p className="user__plan">Plan: {userData.plan.type}</p>
                <p className="user__storage">Storage: {userData.plan.storage.used} used, {userData.plan.storage.totalAvailable} total available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="user__athletes">
          <div className="user__athletesLabel">
            <p>Athletes</p>
          </div>
          <div className="user__next">
            <button onClick={prevBtn}><NavigateBeforeIcon/></button>
            <button onClick={nextBtn}><NavigateNextIcon/></button>
          </div>
          <div className="user__athletesInfo">
            <div className="user__athletesNameAndAge">
              <p className="user__athletesName">{userData.athletes[next].name}</p>
              <p className="user__athletesAge">{userData.athletes[next].age}</p>
            </div>
            <div className="user__atheletsClubAndCountry">
              <p className="user__athleteClub">{userData.athletes[next].club}</p>
              <p>{userData.athletes[next].country.name}</p>
            </div>
            <div className="user__athletesSport">
              <img src={userData.athletes[next].sport.icon} />
              <p className="user__athletesSportName">{userData.athletes[next].sport.name}</p>
            </div>
            <div className="user__athletesAvatar">
              <img src={userData.athletes[next].avatar.replace(/open/, "uc")} />
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default User
