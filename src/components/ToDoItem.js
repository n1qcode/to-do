import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";


const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function ToDoItem({listItemsTodo, number, onChange}) {
    const {removeItem} = useContext(Context);
    const classes = [];

    if (listItemsTodo.completed) {
        classes.push('done');
    }

    return(
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" style={styles.input}
                       checked={listItemsTodo.completed}
                       onChange={() => {
                            onChange(listItemsTodo.id);
                       }}
                />
                <strong>{number + 1}</strong>
                &#41;
                &nbsp;
                {listItemsTodo.title}
            </span>
            <button className='rm' onClick={removeItem.bind(null, listItemsTodo.id)}>&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    listItemsTodo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default ToDoItem;
