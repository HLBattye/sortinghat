import React from 'react';

class Hat extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <p className={this.props.isHidden ? "hidden1" : "fadeText"
        } >
            {this.props.personName + " you are in " + this.props.houseName}</p >
    }
}

export default Hat;