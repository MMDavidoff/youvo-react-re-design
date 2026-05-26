import React from "react";
import Container from "../components/container/Container";
import RegTopBar from "../components/regTopBar/RegTopBar";
import SettingsForm from "../components/settingsForm/SettingsForm";
import classes from "./SettingsPage.module.css";

const SettingsPage = () => {
  return (
    <div>
      <RegTopBar isRegister={true} />
      <Container>
        <div className={classes.settingsPage}>
          <SettingsForm />
        </div>
      </Container>
    </div>
  );
};

export default SettingsPage;
