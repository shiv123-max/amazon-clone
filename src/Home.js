import React from "react";
import "./Home.css";
import Product from "./Product";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Home = () => {
  const properties = {
    duration: 1000,
    autoplay: true,
    transitionDuration: 200,
    arrows: true,
    infinite: true,
    // indicators: i => <div className="indicator">{i + 1}</div>
  };

  const slideImages = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Heros/D24082897_IN_CEPC_Graphics_3000x12000.5x._CB664256932_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Ashish-Bhoot-Maarike_1500x600._CB662929257_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/RedmiNote10T5G/GW/Prime_Day/Set2/D25249523_IN_WLME_RedmiK19_NewLaunch_Tall_Hero_1500x600._CB662935734_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/prime_day/Toofan/1500x600_EN_JPN._CB664643376_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/Echodevice21/smartshoppingdays/ASH-GW_1500X600._CB664047323_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/Feb/SSW/Super_saver_brands/1500PC._CB658944950_.jpg"
  ];

  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Heros/D24082897_IN_CEPC_Graphics_3000x12000.5x._CB664256932_.jpg"
          alt=""
        /> */}
        <Slide {...properties}>
          {slideImages.map((each, index) => (
            //   <div key={index} className="each-slide">
            <img key={index} className="home__image" src={each} alt="sample" />
            //   </div>
          ))}
        </Slide>

        <div className="home__row">
          <Product
            id="1"
            title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
            image="https://images-na.ssl-images-amazon.com/images/I/71t4GuxLCuL.jpg"
            price={399}
            rating={5}
          />
          <Product
            id="2"
            title="PHILIPS HL7505/02 500W Mixer Grinder, Red"
            image="https://m.media-amazon.com/images/I/419K73+cBsL._AC_SS450_.jpg"
            price={2699}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="OnePlus 108 cm (43 inches) Y Series Full HD LED Smart Android TV 43Y1"
            image="https://images-na.ssl-images-amazon.com/images/I/71vZLIfj5yS._SX425_.jpg"
            price={29499}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            title="Redmi Note 10 Pro Max (Vintage Bronze, 6GB RAM, 128GB Storage) -108MP Quad Camera"
            image="https://images-na.ssl-images-amazon.com/images/I/71PcudHlqGS._SL1500_.jpg"
            price={19999}
            rating={4}
          />
          <Product
            id="5"
            title="JBL Charge 3 by Harman Portable Bluetooth Speaker"
            image="https://images-na.ssl-images-amazon.com/images/I/61Etwf40NDL._SX355_.jpg"
            price={8990}
            rating={5}
          />
          <Product
            id="6"
            title="Elements by Peter England Men's Slim fit Polo"
            image="https://images-na.ssl-images-amazon.com/images/I/81PHlHgA2ML._UL1500_.jpg"
            price={499}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
