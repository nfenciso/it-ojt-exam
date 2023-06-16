import React, { Component } from "react";
import data from "./assets/MOCK_DATA.json";
import dragImage from "./assets/drag_indicator_square.png";

export default class ArticleList extends Component {

  constructor(props) {
    super(props);
 
  }

  render() {
  
    return(
        <table>
            {
                data.map((article) => {
                    let content;
                    if (article.content.length > 80) {
                        content = article.content.substring(0,80).concat("...")
                    } else {
                        content = article.content
                    }

                    return(
                        <div>
                            <tr>
                                <td>
                                    <img className="dragImage" src={dragImage} /><input type="checkbox" /></td>
                                <td>{article.title}</td>
                                <td>| #Sports | #Worldwide | #Local |</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>{article.author} {article.date}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>{content}</td>
                                <td></td>
                            </tr>
                        </div>
                    )
                })
            }
        </table>
    )
  }
}