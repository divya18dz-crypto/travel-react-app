import React from "react";
import ss1 from "./asserts/ss1.jpg";
import ss2 from "./asserts/ss2.jpg";
import ss3 from "./asserts/ss3.jpg";
import "./All.css";
function Korea(){
    return(
          <div>
            <center><h2>South Korea</h2></center>
              <table>
                    <tr>
                        <td><img src={ss1} alt="t1"/></td>
                        <td><p>The end of South Korea’s long, frigid winter is announced by puffs of pink and white. Cherry blossom season is a big deal here, celebrated with local festivals and flower-themed drinks — and it’s as beautiful as it is fleeting</p></td>
                    </tr>
                    <tr>
                      <td><img src={ss2} alt="t2"/></td>
                      <td><p>So, come in the spring and do as the locals do: grab a watermelon drink, sit in a park on a dotjari (a cushioned picnic mat) and watch as the wind sends the cherry petals swirling in a rain of pastel pink.</p></td>
                    </tr>
                       <tr>
                          <td><img src={ss3} alt="t3"/></td>
                            <td><p>Half-a-mile wide and crossing the city from north to south, Seoul’s major river, the Hangang, is the capital’s most popular cherry-viewing spot. With cherry trees lining much of its park-fringed banks, you can enjoy the spectacle somewhere quiet, somewhere lively or anywhere in between. Yeouido Park is the busiest place </p></td>
                        </tr>
                  </table>
                  <center>
                      <button className="book-btn">Book Package</button>
                  </center>
                </div>
    );
}
export default Korea;