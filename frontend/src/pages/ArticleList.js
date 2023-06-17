import React from "react";
// import { Component } from "react";
import data from "./assets/MOCK_DATA.json";
import Article from "./Article";

var totalHeight;
var currHeight;
var displayedModal = false;
var checkedList = [];

function ArticleList() {

    function openModal(article) {
        document.getElementById("modal-title").innerText = article.title;
        document.getElementById("modal-accountAndDate").innerText = article.author + " | " + article.date;
        let content = article.content.replace(/\n/g, ' ');
        document.getElementById("modal-content").innerText = content;

        document.getElementById("modal-delete").onclick = () => deleteOpened(article.id);

        totalHeight = document.documentElement.scrollHeight;
        currHeight = document.documentElement.scrollTop + 90;

        document.getElementById("modal-background").style.height = totalHeight + "px";
        document.getElementById("modal").style.top = currHeight + "px";

        document.getElementById("modal").style.display = "block";
        document.getElementById("modal-background").style.display = "block";

        displayedModal = true;
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
        document.getElementById("modal-background").style.display = "none";

        displayedModal = false;
    }

    function updateCheckedList(id) {
        if (checkedList.includes(id)) {
            let index = checkedList.indexOf(id);
            checkedList.splice(index, 1);
        } else {
            checkedList.push(id);
        }
    }

    window.onscroll = () => {
        if (displayedModal) {
            currHeight = document.documentElement.scrollTop + 90;
            document.getElementById("modal").style.top = currHeight + "px";
        }
    }

    function selectAll(e) {
        let checked = e.target.checked;
        let checkboxes = document.getElementsByClassName("article-checkbox");

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = checked;
        }

        if (checked) {
            checkedList = list.map((article) => article.id);
        } else {
            checkedList = [];
        }
        
    }

    const [list, setList] = React.useState(data);

    function deleteOpened(id) {
        const newList = list.filter((article) => article.id !== id);

        checkedList.splice(checkedList.indexOf(id),1);

        setList(newList);

        closeModal();
    }

    function deleteChecked() {
        const newList = list.filter((article) => checkedList.indexOf(article.id) === -1);

        setList(newList);
    }

    return(
        <div>
            <h2>News Articles</h2>

            <div id="topleft">
            <input type="checkbox" style={{verticalAlign: "middle"}} onClick={(e)=>{selectAll(e)}} />
            <button className="publishButton">Publish</button>
            <button className="deleteButton" onClick={()=>{deleteChecked()}} >Delete</button>
            </div>
            
            <input type="text" id="searchBar" placeholder="Search ..."></input>
            
            <br/>
            <br/>

            <div id="modal-background" onClick={()=>{closeModal()}}></div>
            <div id="modal">
                <table style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            <td id="modal-title"></td>
                            <td id="modal-close"><button onClick={()=>{closeModal()}}>X</button></td>
                        </tr>
                    </tbody>
                </table>
                <p id="modal-accountAndDate"></p>
                <div id="modal-content"></div>
                <div id="modal-buttons">
                    <button className="publishButton" id="modal-publish">Publish</button>
                    <button className="deleteButton" id="modal-delete">Delete</button>
                </div>
            </div>
            
            {
                list.map((article) => {
                    let articleContent;
                    if (article.content.length > 80) {
                        articleContent = article.content.substring(0,80).concat("...");
                    } else {
                        articleContent = article.content;
                    }

                    return(
                        <Article className="articleDiv" key={article.id} data={article} openModal={openModal} updateCheckedList={updateCheckedList} articleContent={articleContent}  />
                    )
                })
                
            }
            
        </div>
    )
}

export default ArticleList;