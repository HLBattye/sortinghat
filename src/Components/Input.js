import React from 'react';
import { Button } from 'react-bootstrap';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className={this.props.hidden ? "hidden" : ""}>
                <form onSubmit={(e) => this.props.onSubmit(e, this.state.value)}>
                    <label>
                        {this.props.label}
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <Button variant="outline-primary">OK
                    </Button>
                </form>
            </div >
        );
    }
}

export default Input;

