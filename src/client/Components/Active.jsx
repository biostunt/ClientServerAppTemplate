import React from 'react';


export default class Active extends React.Component {

    onClick() {

    }

    render() {
        return (
            <button style={{ background: 'orange' }} onClick={this.onClick.bind(this)}>
                Нажми меня
            </button>
        );
    }
}