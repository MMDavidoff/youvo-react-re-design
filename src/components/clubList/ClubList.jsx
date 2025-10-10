import React from 'react';
import classes from "./clubList.module.css"
import ClubItem from '../clubItem/clubItem';

const club1 = {
  name: "Club 1" , 
  description:"Lorem ipsum dolor sit amet, hello club dolor ipsum sit amet",
  img: "/image/ClubPhoto.png"

}

const club2 = {
  name: "team3" , 
  description:"very-cool-cool-club-in-the-world",
  img: "/image/ClubPhoto.png"

}

const club3 = {
  name: "team3" , 
  description:"very-cool-cool-club-in-the-world",
  img: "/image/ClubPhoto.png"

}
const ClubList = () => {
  return (
    <div>
      <div className={classes.clubList}>
        <ClubItem club={club1}/>
         <ClubItem club={club2}/>
         <ClubItem club={club3}/>

      </div>
    </div>
  );
}

export default ClubList;
