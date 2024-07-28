import logo from './assets/logo.svg';
import './App.scss';
import offerPoster1 from './assets/posters/offer1.png';
import offerPoster2 from './assets/posters/offer2.png';
import offerPoster3 from './assets/posters/offer3.png';
import offerPoster4 from './assets/posters/offer4.png';
import offerMobilePoster1 from './assets/posters/mobile/offer1.png';
import offerMobilePoster2 from './assets/posters/mobile/offer2.png';
import offerMobilePoster3 from './assets/posters/mobile/offer3.png';
import offerMobilePoster4 from './assets/posters/mobile/offer4.png';
import footerLogo from './assets/footerLogo.png';

const offers = [
    {
        name: 'Move the borders\nof reality!',
        description: 'Go on a space adventure - it\'s possible with us!',
        mobileDescription: 'Go on a space adventure',
        defaultImage: offerPoster1,
        mobileImage: offerMobilePoster1
    },
    {
        name: 'Space is not\njust stars\nand planets',
        description: 'Go on a space adventure!',
        mobileDescription: 'it is a majestic journey to',
        defaultImage: offerPoster2,
        mobileImage: offerMobilePoster2
    },
    {
        name: 'For those\nwho dream\nof stars',
        description: 'Our offer: make your dream come true',
        defaultImage: offerPoster3,
        mobileImage: offerMobilePoster3
    },
    {
        name: 'Fulfill your\nfantastic\ndreams',
        description: 'Space has never been so close',
        defaultImage: offerPoster4,
        mobileImage: offerMobilePoster4
    },
]

function App() {
  return (
      <div className="app">
          <header className="header">
              <a href="/" className="header__logo">
                  <img src={logo} alt="Go Logo"/>
              </a>
              <nav className="header__nav">
                  <ul className="header__nav_list">
                      <li className="header__nav_list_item">
                          <a href="/">
                              Home
                          </a>
                      </li>
                      <li className="header__nav_list_item">
                          <a href="/">
                              Products
                          </a>
                      </li>
                      <li className="header__nav_list_item">
                          <a href="/">
                              <svg width="24" height="20" viewBox="0 0 24 20" fill="white"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"
                                        fill="white"/>
                                  <defs>
                                      <linearGradient
                                          id="paint0_linear_16_42"
                                          x1="8" y1="4" x2="19" y2="20"
                                          gradientUnits="userSpaceOnUse">
                                          <stop stop-color="#EBFF00"/>
                                          <stop offset="1" stop-color="#FF70D9"/>
                                      </linearGradient>
                                  </defs>
                              </svg>
                          </a>
                      </li>
                  </ul>
              </nav>
              <div className="header__burger">
                  <input type="checkbox" className="header__burger_action"/>
                  <span className="header__burger_item"></span>
                  <span className="header__burger_item"></span>
                  <span className="header__burger_item"></span>
              </div>
          </header>
          <section className="banner">
              <div className="banner__content">
                  <h1 className="banner__content_title">
                      Discover the vast expanses of <span className="banner__content_title_last_word">
                    space
                </span>
                  </h1>
                  <h2 className="banner__content_sub_title">
                      Where the possibilities are <span className="banner__content_sub_title_last_word">
                    endless!
                </span>
                  </h2>
                  <a href="/" className="read_more read_more__filled">Learn more</a>
              </div>
              <div className="banner_sticker"/>
          </section>
          <div className="container">
              <section className="offers">
                  <h3 className="section_title">Offers</h3>
                  <div className="offers__list">
                      {offers.map(({name, description, defaultImage, mobileDescription, mobileImage}, index) => (
                          <div
                              key={index}
                              className="offers__list_item">
                              <h3 className="offers__list_item_title">
                                  {name}
                              </h3>
                              <p className="offers__list_item_description">
                                  {window.innerWidth <= 768 ? (mobileDescription || description) : description}
                              </p>
                              <div className="offers__list_item_poster">
                                  <picture>
                                      <source media="(max-width:768px)" srcSet={mobileImage}/>
                                      <img src={defaultImage} alt="offer poster"/>
                                  </picture>
                              </div>
                              <a href="/" className="read_more read_more__mobile">Learn more</a>
                          </div>
                      ))}
                  </div>
              </section>

              <section className="about">
                  <h3 className="section_title">
                      Embark on a space journey
                  </h3>
                  <p className="about__description">
                      Travelling into space is one of the most exciting and unforgettable adventures that can
                      change your life forever. And if you have ever dreamed of exploring stars,
                      planets and galaxies, then our company is ready to help you realize this dream.
                      We offer a unique experience that will allow you to go on a space journey and see all
                      the secrets of the universe. We guarantee that every moment in space will be filled with
                      incredible impressions, excitement and new discoveries. Our team of professionals
                      takes care of your safety and comfort so that you can fully enjoy your adventure in space.
                      We offer various options for space excursions.
                  </p>
                  <input type="checkbox" id="about_view-more" class="about_view-more"/>
                  <label className="read_more read_more__text" for="about_view-more">Read more</label>
                  <p id="about_more_description" className="about__description">
                      Travelling into space is one of the most exciting and unforgettable adventures that can
                      change your life forever. And if you have ever dreamed of exploring stars,
                      planets and galaxies, then our company is ready to help you realize this dream.
                      We offer a unique experience that will allow you to go on a space journey and see all
                      the secrets of the universe. We guarantee that every moment in space will be filled with
                      incredible impressions, excitement and new discoveries. Our team of professionals
                      takes care of your safety and comfort so that you can fully enjoy your adventure in space.
                      We offer various options for space excursions.
                  </p>
              </section>
          </div>
          <footer className="footer">
              <div className="footer__logo">
                  <img src={footerLogo} alt="rocket logo"/>
              </div>
              <p className="footer__description">
                  Exciting space adventure!
              </p>
          </footer>
      </div>
  );
}

export default App;
