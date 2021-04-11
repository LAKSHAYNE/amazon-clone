import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M12/GW_April/True48MP/D21200796_IN_WLME_SamsungGalaxy_M12_New_Launch_DesktopTallHero_3000x1200_6._CB655658906_.jpg"
          alt="top img"
        />
        <div className="home__row">
          <Product img="https://images.squarespace-cdn.com/content/v1/5ec5a0b33cdd692457617ca2/1590182170507-DOQYV87FZBO64GS0303U/ke17ZwdGBToddI8pDm48kHNA6JJvt8wTA0FI5RRs1RF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmE6HPlVaI96aHpRGHVDvss0MrI9o705g3G_ZQl29_0vn/KOURY_ANGELO_WEB_200.jpg"
            title="THE WEEKND BILLBOARD"
            rating={5}
            price={99.99}
            id="12321341"
           />
          <Product img="https://images-na.ssl-images-amazon.com/images/G/31/img21/Wireless/CatPage/6C/D20819578_WL_CatPage_NewWidget_SBCs-hex_s21._SY530_QL85_.jpg"
            title="Samsung S21"
            price={999.99}
            rating={4}
            id="13245889"  
           />
        </div>

        <div className="home__row">
        <Product 
            img="https://m.media-amazon.com/images/I/41Hxk3Dl5RL.jpg"
            title="HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch Laptop"
            rating={4}
            price={850}
            id="97245688"
        />
        <Product
            title="Microsoft Surface Laptop 3 Intel Core™ i5 10th Gen 13.5 inch Touchscreen Laptop" 
            img="https://m.media-amazon.com/images/I/31fcb+HkMBL.jpg"
            rating={4}
            price={1200}
            id="64654685"
        />
        <Product 
            img="https://m.media-amazon.com/images/I/41HiLejNULL.jpg"
            rating={3}
            price={1400}
            id="85296314"
            title="Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD)"
        />
        </div>

        <div className="home__row">
        <Product 
            img="https://m.media-amazon.com/images/I/81JGrbtkBAL._AC_UY218_.jpg"
            rating={4}
            title="Sony Bravia 165 cm (65 inches) 4K Ultra HD Smart OLED TV KD-65A9G 4K"
            id="78965234"
            price={6000}

        />
        </div>
      </div>
    </div>
  );
}

export default Home;
