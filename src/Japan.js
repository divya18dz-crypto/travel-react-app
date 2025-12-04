import React from "react";
import j1 from "./asserts/j1.jpg";
import j2 from "./asserts/j2.jpg";
import j3 from "./asserts/j3.jpg";
import "./All.css";
function Japan(){
    return(
          <div>
            <center><h2>Japan</h2></center>
              <table>
                    <tr>
                        <td><img src={j1} alt="t1"/></td>
                        <td><p>apan is an archipelago of 6,852 volcanic islands in the Pacific Ocean characterised by a rich cultural history and remarkable natural beauty. It is one of the most densely populated countries in the world and the majority of its 127 million residents live on the largest islands of Honshu, Hokkaido, Kyushu and Shikoku</p></td>
                    </tr>
                    <tr>
                      <td><img src={j2} alt="t2"/></td>
                      <td><p>Japan has a multi-faceted culture, where ancient traditions contrast with modern technology and fast-paced cities. Japanese culture is based on strict discipline, hard work and a devotion to group mentality.</p></td>
                    </tr>
                       <tr>
                          <td><img src={j3} alt="t3"/></td>
                            <td><p>Japan's rich culture is encapsulated in its traditions such as the complicated and delicate tea ceremony, the silk and paper calligraphy and ancient pottery. However, Japan is also known for its singular popular culture of manga, and anime which have a cult of followers around the world.</p></td>
                        </tr>
                  </table>
                  <center>
                      <button className="book-btn">Book Package</button>
                  </center>
                </div>
    );
}
export default Japan;