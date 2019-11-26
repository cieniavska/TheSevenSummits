import React from "react";

function List(props) {
    const drop = e => {
        e.preventDefault();
        const listItem_id = e.dataTransfer.getData("listItem_id");
        const listItem = document.getElementsByClassName("list-item");
        listItem.display.style = "block";
        e.target.appendChild(listItem);
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div id={props.id} onDrop={drop} onDragOver={dragOver} className="list">
            {props.children}
        </div>
    )
}

export default List;