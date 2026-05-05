import React from "react";
import classes from "./settingsForm.module.css";

const SettingsForm = () => {
  return (
    <div className={classes.settingsForm}>
      <h3 className={classes.accSettings}>Account Settings</h3>
      <label>
        Name of account
        <input type="text" placeholder="myron" />
      </label>
      <label>
        Username
        <input type="text" placeholder="myron" />
      </label>
      <label>
        Email
        <input type="email" placeholder="myron@example.com" />
      </label>
      <label>
        Phone Number
        <input type="phone" placeholder="+1 555 555 5555" />
      </label>

      <div className={classes.buttons}>
        <button className={classes.saveChanges}>Save Changes</button>
        <button className={classes.cancel}>Cancel</button>
      </div>
    </div>
  );
};

export default SettingsForm;
