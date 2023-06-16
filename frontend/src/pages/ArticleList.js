import React, { Component } from "react";
import data from "./assets/MOCK_DATA.json";
import dragImage from "./assets/drag_indicator_square_cropped.png";
import profileImage from "./assets/account_circle_green.png";
import dateImage from "./assets/date_range_green.png";
import viewImage from "./assets/visibility_blue.png";

export default class ArticleList extends Component {

  constructor(props) {
    super(props);
 
  }

  render() {
    return(
        <>
            <h2>News Articles</h2>

            <div id="topleft">
            <input type="checkbox" style={{verticalAlign: "middle"}} />
            <button className="publishButton">Publish</button>
            <button className="deleteButton">Delete</button>
            </div>
            
            <input type="text" id="searchBar" placeholder="Search ..."></input>
            
            <br/>
            <br/>
            {
                data.map((article) => {
                    if (article.content.length > 80) {
                        return(
                            <div className="articleDiv" key={article.id+"-div"}>
                            <table>
                                <tbody>
                                <tr className="firstSubRow">
                                    <td className="firstCol"><img className="dragImage" src={dragImage} alt="drag" /></td>
                                    <td className="secondCol"><input type="checkbox" /></td>
                                    <td className="thirdCol"><span className="articleTitle">{article.title}</span></td>
                                    
                                </tr>
                                <tr className="secondSubRow">
                                    <td className="firstCol"></td>
                                    <td className="secondCol"></td>
                                    <td className="thirdCol">
                                        <img className="profileImage" src={profileImage} alt="account" />
                                        <div className="author">{article.author}</div>
                                        <img className="dateImage" src={dateImage} alt="calendar" />
                                        <div className="date">{article.date}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="firstCol"></td>
                                    <td className="secondCol"></td>
                                    <td className="thirdCol">
                                        <div className="content">{article.content.substring(0,80).concat("...")}</div>
                                        <img className="viewImage" src={viewImage} alt="view" />
                                        <span className="readfull">Read Full</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="hashtags">
                                <button className="hashtagButton">#Sports</button>
                                <button className="hashtagButton">#Worldwide</button>
                                <button className="hashtagButton">#Local</button>
                            </div>
                            </div>
                        )
                    } else {
                        return(<></>)
                    }

                })
            }
        </>
    )
  }
}