import React from 'react';



export default class Window extends React.Component {

    componentDidMount() {
        console.log('[React] component loaded.')
    }

    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}