import React from "react";
import "./All.css";
import t1 from "./asserts/t1.jpg";
import t2 from "./asserts/t2.jpg";
import t3 from "./asserts/t3.jpg";

function Thai() {
  return (
    <div>
      <center>
      <h2>Thailand</h2>
      </center>
      <table>
        <tr>
          <td><img src={t1} alt="t1"/></td>
          <td><p>Wat Phra Kaew and Damnoen Saduak Floating Market showcase Thailand's living traditions. Luxurious stays at JC Kevin Sathon Bangkok complement meaningful encounters at Chiang Mai's elephant sanctuary.</p></td>
        </tr>
        <tr>
          <td><img src={t2} alt="t2"/></td>
          <td><p>Bangkok has established itself as the primary political, economic, and cultural hub of Thailand. It is a dynamic metropolis where tradition and modernity coexist. The city’s eternal beauty is a tribute to its rich legacy, and it continues to attract people around the world.</p></td>
        </tr>
        <tr>
          <td><img src={t3} alt="t3"/></td>
          <td><p>Thailand is counted among the top beach destinations in the world. It is also a relatively low-cost beach destination for Western travellers with powerful currencies. If you have the sun and sea in mind for your next vacation, visit Thailand for amazing and memorable experiences. Here are five reasons why Thailand is great for beach and island escapes.</p></td>
        </tr>
      </table>
      <center>
        <button className="book-btn">Book Package</button>
      </center>
    </div>
  );
}
export default Thai;