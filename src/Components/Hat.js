import React from 'react';

class Hat extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <p className={this.props.personName.length === 0 ? "hidden1" : "fadeText"
        } >
            {this.props.personName + " you are in " + this.props.houseName}</p >
    }
}

export default Hat;