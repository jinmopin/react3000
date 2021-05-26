import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello</h1>
                <h2>지금은 {this.props.date.toLocaleTimeString()} 입니다.</h2>
            </div>
        )
    }
}

function tick() {
    ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
}

setInterval(tick, 1000);

