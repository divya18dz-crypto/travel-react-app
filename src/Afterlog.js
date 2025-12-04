import React from "react";
import './Afterlogg.css';
import Thaii from "./asserts/Thaii.jpg";
import Singapore from "./asserts/Singapore.jpg";
import malaysia from "./asserts/malaysia.jpg";
import southkorea from "./asserts/southkorea.jpg";
import japan1 from "./asserts/japan1.jpg";
import paris from "./asserts/paris.jpg";
import { Link } from "react-router-dom";
function After(){
    return(
          <div>
              <table className="tablehome">
                  <tr>
                        <td>
                              <Link to={"/Thailand"}>
                                    <img src={Thaii} alt="Thailand"/>
                              </Link>
                              <h4>Explore Thailand</h4>
                        </td>
                        <td>
                              <Link to={"/Singapore"}>
                                    <img src={Singapore} alt="Thailand"/> 
                              </Link>
                              <h4>Explore Singapore</h4>
                        </td>
                        <td>
                              <Link to={"/Malaysia"}>
                                    <img src={malaysia} alt="Thailand"/>
                              </Link>
                              <h4>Explore Malaysia</h4>
                        </td>
                  </tr>
                  <tr>
                        <td>
                              <Link to={"/SouthKorea"}>
                                    <img src={southkorea} alt="Thailand"/>
                              </Link>
                              <h4>Explore South Korea</h4>
                        </td>
                        <td>
                              <Link to={"/Japan"}>
                                    <img src={japan1} alt="Thailand"/>
                              </Link>
                              <h4>Explore Japan</h4>
                        </td>
                        <td>
                              <Link to={"/Paris"}>
                                    <img src={paris} alt="Thailand"/>
                              </Link>
                              <h4>Explore Paris</h4>
                        </td>
                  </tr>
              </table>
      </div>
    );      
}
export default After;