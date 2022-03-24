import React from "react";
import './Modal.css';

export default class Modal extends React.Component {

    state = {
        isOpen: false
    }

    render() {
        return(
            <React.Fragment>
                <button style={{marginBottom: '10px'}} onClick={() => this.setState({isOpen: true})}>Открыть окно</button>
                {this.state.isOpen && (<div className='modal'>
                    <div className='modal-body'>
                        <h1>Вы открыли модальное окно</h1>
                        <p>Поздравляю!</p>
                        <button onClick={() => this.setState({isOpen: false})}>Закрыть модальное окно</button>
                    </div>
                </div>)}
            </React.Fragment>
        )
    }
}
