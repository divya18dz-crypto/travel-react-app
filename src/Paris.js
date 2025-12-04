import React from "react";
import p11 from "./asserts/p11.jpg";
import p2 from "./asserts/p2.jpg";
import p3 from "./asserts/p3.jpg";
import "./All.css";
function Paris(){
    return(
          <div>
            <center><h2>Paris</h2></center>
              <table>
                    <tr>
                        <td><img src={p11} alt="t1"/></td>
                        <td><p>The Eiffel Tower, Montmartre, Saint-Germain-des-Prés, the Champs Elysées, the Bateaux Mouches, the Moulin Rouge... one does not know how to start describing Paris and its treasures.</p></td>
                    </tr>
                    <tr>
                      <td><img src={p2} alt="t2"/></td>
                      <td><p>Do you prefer classical or contemporary art?
Designed for amateurs and aficionados alike, Paris will know how to scratch your art itch. From the Louvre Museum to the Musée d'Orsay to the Centre Pompidou to Musée de l'Orangerie (to name but a few), discover Paris's iconic permanent and special exhibitions.</p></td>
                    </tr>
                       <tr>
                          <td><img src={p3} alt="t3"/></td>
                            <td><p>Emblem of French luxury, Haute Couture is resolutely Parisian!
Designed as works of art and for the pleasure of sight, Parisian clothes and accessories are quintessentially elegant and unapologetically extravagant.</p></td>
                        </tr>
                  </table>
                  <center>
                      <button className="book-btn">Book Package</button>
                  </center>
                </div>
    );
}
export default Paris;