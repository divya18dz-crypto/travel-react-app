import React from "react";
import s1 from "./asserts/s1.jpg";
import s2 from "./asserts/s2.jpg";
import s3 from "./asserts/s3.jpg";
import "./All.css";
function Singa(){
    return(
          <div>
            <center><h2>Singapore</h2></center>
                <table>
                  <tr>
                    <td><img src={s1} alt="t1"/></td>
                    <td><p>Singapore, also known as the Lion City, is full of amazing places that will make your visit unforgettable. Singapore's beauty comes in many forms. Whether you like modern places, historical sites, or natural wonders, each spot is special and will make your visit to Singapore an adventure full of beautiful memories. Let's discover some of the most beautiful spots that show off Singapore's mix of modern style and natural wonders.</p></td>
                  </tr>
                  <tr>
                    <td><img src={s2} alt="t2"/></td>
                    <td><p>Shaped like a diamond, Singapore is the world's only island city-state. Until 1819, it was home to only a thousand indigenous Malays, and Chinese settlers but the establishment of the East India Company’s trading post by Sir Stamford Raffles changed everything. Part of the British Straits</p></td>
                  </tr>
                  <tr>
                    <td><img src={s3} alt="t3"/></td>
                    <td><p>The population of Singapore has more than doubled since 1980, making the country one of the most crowded islands in the world. But low crime, affordable public transportation, and a technologically advanced capital known for towering skyscrapers help the country consistently rank high for life satisfaction. People living there also have a high life expectancy: 82 year</p></td>
                  </tr>
                </table>
                <center>
                  <button className="book-btn">Book Package</button>
                </center>
              </div>
    );
}
export default Singa;