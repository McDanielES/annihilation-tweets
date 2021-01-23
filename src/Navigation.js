import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return(
      <div className="row sticky-top">
        <div className="offset-6 col-5">
          <div className="row mb-4">
            <div className="col">
              <img src="icons/twitter-logo.png" className="Navigation-logo mt-4" alt="Twitter Logo" />
            </div>
          </div>
          <div className="row Navigation-links" id="Nagivation-home">
            <div className="col-2">
              <i className="fas fa-home"></i>
            </div>
            <div className="col-7 ml-2">
              <strong>Home</strong>
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-bell"></i>
            </div>
            <div className="col-7 ml-2">
              <strong>Notifications</strong>
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="col-7 ml-2">
              <strong>Messages</strong>
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-list-ol"></i>
            </div>
            <div className="col-7 ml-2">
              <strong>Lists</strong>
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-user"></i>
            </div>
            <div className="col-7 ml-2">
             <strong>Profile</strong>
            </div>
          </div>
          <div className="row Navigation-links">
            <div className="col-2">
              <i className="fas fa-cogs"></i>
            </div>
            <div className="col-7 ml-2">
              <strong>Settings</strong>
            </div>
          </div>
          <button className="btn btn-primary mt-5"><strong>Tweet</strong></button>
          <div className="row Navigation-links Navigation-footer">
            <div className="col-1">
              <i className="fas fa-book"></i>
            </div>
            <div className="col ml-2">
              <a href="/"><strong>View Curator's Essay</strong></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Navigation;