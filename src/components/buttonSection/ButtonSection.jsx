import React from "react";
import classes from "./ButtonSection.module.css";
import ButtonItem from "../buttonItem/ButtonItem";

const ButtonSection = () => {
  return (
      <div className={classes.buttonSection}>

      <ButtonItem name={"Add Club"} logo={"/image/group-add.svg"}/>
       <ButtonItem name={"Edit Profile"} logo={"/image/edit-246.png"}/>
       <ButtonItem name={"Join Club"} logo={"/image/plus-sign-2.png"}/>
       <ButtonItem name={"Add Event"} logo={"/image/event-add.png"}/>
        <ButtonItem name={"Log out"} logo={"/image/exit-yuvo.png"} background={"rgba(255, 0, 0, 0.45)"}/>
      </div>
  );
};

export default ButtonSection;
