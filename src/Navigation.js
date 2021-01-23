import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return(
      <div className="row mt-4">
        <div className="offset-6 col-5">
          <div className="row mb-4">
            <div className="col">
              <img src="icons/twitter-logo.png" className="Navigation-logo" alt="Twitter Logo" />
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-home"></i>
            </div>
            <div className="col-7">
              <strong>Home</strong>
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-bell"></i>
            </div>
            <div className="col-7">
              <strong>Notifications</strong>
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="col-7">
              <strong>Messages</strong>
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-list-ol"></i>
            </div>
            <div className="col-7">
              <strong>Lists</strong>
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-user"></i>
            </div>
            <div className="col-7">
             <strong>Profile</strong>
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-cogs"></i>
            </div>
            <div className="col-7">
              <strong>Settings</strong>
            </div>
          </div>
          <button className="btn btn-primary mt-5"><strong>Tweet</strong></button>
        </div>
      </div>
    )
  }
}


export default Navigation;