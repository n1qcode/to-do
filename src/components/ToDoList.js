import React from "react";
import PropTypes from 'prop-types';
import ToDoItem from "./ToDoItem";


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function ToDoList(props) {
    return (
        <ul style={styles.ul}>
            {props.listOfTodos.map((item, index) => {
                return <ToDoItem
                    listItemsTodo={item}
                    key={item.id}
                    number={index}
                    onChange={props.onToggle}
                />
            })}
        </ul>
    )
}

ToDoList.propTypes = {
    listOfTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default ToDoList;
