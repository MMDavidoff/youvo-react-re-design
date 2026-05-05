import React from 'react';
import RegTopBar from '../components/regTopBar/RegTopBar';
import MainPageDate from '../components/mainPageDate/MainPageDate';
import MainPageButtons from '../components/mainPageButtons/MainPageButtons';
import classes from './MainPage.module.css';
import BlockWrapper from '../components/blockWrapper/BlockWrapper';
import BlockItem from '../components/blockItem/BlockItem';
import UpcomingEventItem from '../components/upcomingEventItem/UpcomingEventItem';

const MainPage = () => {
  return (
    <div>
      <RegTopBar />
      <MainPageDate />
      <div className={classes.buttonsWrapper}>
      <MainPageButtons icon="image/plus.svg" buttonText="Add Club" />
      <MainPageButtons icon="image/user-round-pen.svg" buttonText="Edit Profile" />
      <MainPageButtons icon="image/users.svg" buttonText="Join Club" />
      <MainPageButtons icon="image/calendars.svg" buttonText="Add Event" />
      <MainPageButtons icon="image/log-out.svg" buttonText="Log Out" className="redButton" />
      
      </div>
      <div className={classes.blocksWrapper}>
      <BlockWrapper title="Joined Clubs" >
        <BlockItem itemName="Football Club" itemSubName="12 members" itemDate="May 15, 2026" itemIcon="image/users.svg" />
        <BlockItem itemName="Basketball Team" itemSubName="15 members" itemDate="May 20, 2026" itemIcon="image/users.svg" />
        <BlockItem itemName="Tennis Club" itemSubName="8 members" itemDate="May 25, 2026" itemIcon="image/users.svg" />
      </BlockWrapper>
      <BlockWrapper title="Upcoming Events" >
        <UpcomingEventItem 
          upcomingTitle="Photography Workshop" 
          upcomingDescription="Learn the basics of photography in this hands-on workshop." 
          upcomingDate="May 15, 2026" 
          upcomingTime="3:00 PM" 
        />
         <UpcomingEventItem 
          upcomingTitle="Mechanical Workshop" 
          upcomingDescription="Learn the basics of mechanical engineering in this hands-on workshop." 
          upcomingDate="May 17, 2026" 
          upcomingTime="3:00 PM" 
        />
         <UpcomingEventItem 
          upcomingTitle="Cooking Workshop" 
          upcomingDescription="Learn the basics of cooking in this hands-on workshop." 
          upcomingDate="May 20, 2026" 
          upcomingTime="6:00 PM" 
        />
         <UpcomingEventItem 
          upcomingTitle="Painting Workshop" 
          upcomingDescription="Learn the basics of painting in this hands-on workshop." 
          upcomingDate="May 21, 2026" 
          upcomingTime="8:00 AM" 
        />
      </BlockWrapper>
      </div>
    </div>
  );
}

export default MainPage;
