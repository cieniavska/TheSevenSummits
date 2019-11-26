import React from "react";

function ListItem(props) {

    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData("listItem_id", target.id) 

        setTimeout(() => {
            target.style.display
        },0)
    }

    const dragOver = (e) => {
        e.stopPropagation();
    }

    return (
        <div id={props.id} onDragStart={dragStart} onDragOver={dragOver} draggable="true" className="list-item">
            {props.children}
        </div>
    )
}

export default ListItem;