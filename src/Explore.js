import React, { Component } from 'react';

class Explore extends Component {
  render() {
    return(
      <div className="row sticky-top ml-1">
        <div className="col-xl-8 col-lg-10 col-md-11 mt-4 p-0">
          <div className="input-icons"> 
            <i className="fas fa-search mr-3" id="Explore-search-icon"></i>
            <input className="Explore-blocks Explore-light" id="Explore-search-bar" placeholder="Search Twitter"/>
          </div>
        </div>
        <div className="col-xl-8 col-lg-10 col-md-11 mt-2 Explore-blocks">
          <p className="ml-2 mb-1"><strong>What's happening</strong></p>
          <hr className="m-0 p-0" />
          <div className="row Explore-trending-article py-2">
            <div className="Explore-trending-article ml-4">
              <p className="mb-0 Explore-light"><small>Trending in United States</small></p>
              <p className="mb-0 Explore-trends"><strong>#AreaX</strong></p>
              <p className="mb-0 Explore-light"><small>{ (Math.floor(Math.random() * 22)) + 15 }.{ Math.floor(Math.random() * 10)}K Tweets</small></p>
            </div>
          </div>
          <hr className="m-0 p-0" />
          <div className="row Explore-trending-article py-2">
            <div className="Explore-trending-article ml-4">
              <p className="mb-0 Explore-light"><small>Politics &bull; Live</small></p>
              <p className="mb-0 Explore-trends"><strong>US Government Announces Successful Expedition, Nothing To Worry</strong></p>
              <p className="mb-0 Explore-light"><small>{ (Math.floor(Math.random() * 10)) + 9 }.{ Math.floor(Math.random() * 10)}K Tweets</small></p>
            </div>
          </div>
          <hr className="m-0 p-0" />
          <div className="row Explore-trending-article pt-2">
            <div className="Explore-trending-article ml-4">
              <p className="mb-0 Explore-light"><small>Trending &bull; 2 hours ago</small></p>
              <p className="mb-0 Explore-trends"><strong>#WeDemandAnswersNow</strong></p>
              <p className="mb-0 Explore-light"><small>{ (Math.floor(Math.random() * 2)) + 3 }.{ Math.floor(Math.random() * 10)}K Tweets</small></p>
            </div>
          </div>
        </div>
        <hr />
        <div className="col-xl-8 col-lg-10 col-md-11 mt-4 Explore-blocks">
          <p className="ml-2 mb-1"><strong>Who to follow</strong></p>
          <hr className="m-2" />
          <div className="row pb-1">
            <div className="col-2">
              <div className="avatar-container">
                <img src="biologist-icon.png" className="avatar" alt="Biologist icon" />
              </div>
            </div>
            <div className="col-6">
              <div className="user-name">
                <div className="user-name-txt">
                  <span className="fake-link">biologist</span>
                </div>
                <div className="icon">
                  <svg viewBox="0 0 24 24" aria-label="Verfied account" className="verified-icon-svg">
                    <g>
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="user-nickname">
                @bio_adventurer
              </div>
            </div>
            <div className="col-4">
              <button className="btn btn-outline-primary px-3 py-1 ml-0 mt-1">Follow</button>
            </div>
          </div>
          <hr className="m-1 p-1" />
          <div className="row pt-1">
            <div className="col-2">
              <div className="avatar-container">
                <img src="surveyor-icon.jpg" className="avatar" alt="Surveyor icon" />
              </div>
            </div>
            <div className="col-6">
              <div className="user-name">
                <div className="user-name-txt">
                  <span className="fake-link">surveyor</span>
                </div>
                <div className="icon">
                  <svg viewBox="0 0 24 24" aria-label="Verfied account" className="verified-icon-svg">
                    <g>
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="user-nickname">
                @lonewolfsurveyor
              </div>
            </div>
            <div className="col-4">
              <button className="btn btn-outline-primary px-3 py-1 mx-0 mt-1">Follow</button>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-10 col-md-11 mt-4 mx-2">
          <small className="Explore-light">Terms of Service &bull; Privacy Policy &bull; Cookie Policy &bull; Ads<br/><br />This is part of the Ghost Museum Final Project by Eric McDaniel for the University of Wisconsin- Madison's English 167, as a part of a literary analysis of Jeff Vandermeer's <a href="https://www.jeffvandermeer.com/book/annihilation/"><em>Annihilation</em></a>. The source code for this project can be viewed <a href="https://github.com/McDanielES/annihilation-tweets">here</a>.</small>
        </div>
      </div>
    );
  }
}

export default Explore;