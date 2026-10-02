import React from 'react';
import '../App.css';
import Homeimage from '../assets/images/home_book.png';

function Home() {
  return (
    <section className="home_bg">
      <div className="container">
        <div className="home_Section">
          <div>
            <h1>
              Find your next great read at our online <span>ACE book store</span>
            </h1>
            <p>Explore our current collection</p>
            <div className="search_container">
              <input type="text" placeholder="Find your books here...." />
              <button className="search_button">Search now</button>
            </div>
          </div>

          <div className="home_img">
            <img src={Homeimage} alt="Book store" className="book-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;