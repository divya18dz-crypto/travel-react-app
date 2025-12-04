import React from "react";
import m11 from "./asserts/m11.jpg";
import m2 from "./asserts/m2.jpg";
import m3 from "./asserts/m3.jpg";
import "./All.css";
function Malay(){
    return(
         <div>
          <center><h2>Malaysia</h2></center>
              <table>
                           <tr>
                             <td><img src={m11} alt="t1"/></td>
                             <td><p>Malaysia is a beautiful country known for its rich culture, friendly people, and amazing mix of traditions. From busy cities to peaceful beaches, Malaysia offers something for everyone. </p></td>
                           </tr>
                           <tr>
                             <td><img src={m2} alt="t2"/></td>
                             <td><p>The country is famous for its stunning natural wonders, delicious food, and exciting festivals that bring people together. Whether you enjoy exploring cities, relaxing by the beach, or tasting new dishes, Malaysia has it all.</p></td>
                           </tr>
                           <tr>
                             <td><img src={m3} alt="t3"/></td>
                             <td><p> If you're planning a trip to Malaysia, this guide is a great place to start. Even if you’re just curious about what is Malaysia famous for, it’s a wonderful way to learn more!</p></td>
                           </tr>
                         </table>
                         <center>
                           <button className="book-btn">Book Package</button>
                         </center>
      </div>
    );
}
export default Malay;