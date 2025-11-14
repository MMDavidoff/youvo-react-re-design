import React from 'react';
import Container from '../components/container/Container';
import GoBack from '../components/goBack/GoBack';
import Row from '../components/row/Row';
import TopBarInfo from '../components/topBarInfo/TopBarInfo';
import InfoDetails from '../components/infoDetails/InfoDetails';
import LogOutBtn from '../components/logOutBtn/LogOutBtn';
import DivideLine from "../components/divideLine/DivideLine";
import EventList from "../components/eventList/EventList";
import UpcomingGames from '../components/upcomingGames/UpcomingGames';
import TopTime from '../components/topTime/TopTime';


const AccInfoPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <div>
          <GoBack />
          <TopBarInfo/>
          <InfoDetails/>
          <div style={{
            marginTop: "20px"
          }}>
          <LogOutBtn />
          </div>
          </div>
          <DivideLine />
          <div>
          <TopTime />
          <UpcomingGames />
          <EventList /> 
          </div>
        </Row>
      </Container>

    </div>
  );
}

export default AccInfoPage;
