import React from "react";
import dragImage from "./assets/drag_indicator_square_cropped.png";
import profileImage from "./assets/account_circle_green.png";
import dateImage from "./assets/date_range_green.png";
import viewImage from "./assets/visibility_blue.png";

class Article extends React.Component {

    render() {
        var article = this.props.data;
        var articleContent = this.props.articleContent;

        return(
            <div className="articleDiv" key={article.id+"-div"}>
            <table>
                <tbody>
                <tr className="firstSubRow">
                    <td className="firstCol"><img className="dragImage" src={dragImage} alt="drag" /></td>
                    <td className="secondCol"><input type="checkbox" className="article-checkbox" onClick={()=>{this.props.updateCheckedList(article.id)}}  /></td>
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
                        <div className="content">{articleContent}</div>
                        <div className="selectableReadFull" onClick={() => this.props.openModal(article)}>
                            <img className="viewImage" src={viewImage} alt="view" />
                            <span className="readfull">Read Full</span>
                        </div>
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
    };   
}

export default Article;