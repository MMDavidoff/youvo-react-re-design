import React from "react";
import Username from "../components/username/Username";
import Container from "../components/container/Container";
import ButtonSection from "../components/buttonSection/ButtonSection";
import JoinedClubs from "../components/joinedClubs/JoinedClubs";
import ClubList from "../components/clubList/ClubList";
import Row from "../components/row/Row";
import DivideLine from "../components/divideLine/DivideLine";
import TopTime from "../components/topTime/TopTime";
import UpcomingGames from "../components/upcomingGames/UpcomingGames";
import EventList from "../components/eventList/EventList";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Row>
          <div>
          <Username />
          <ButtonSection />
          </div>
          <div>
          <JoinedClubs />
          <ClubList />
          </div>
          <DivideLine/>
          <div>
          <TopTime/>
          <UpcomingGames/>
          <EventList/>
          </div>

        </Row>
        
      </Container>
    </div>
  );
};

export default HomePage;
