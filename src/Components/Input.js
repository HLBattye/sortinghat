import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.state = { name: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, value, name) {
        this.setState({ value: event.target.value });
        this.setState({ name: event.target.name });
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.onSubmit(e, this.state.value)}>
                    <label>
                        Number of people to be sorted?
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div >
        );
    }
}

export default Input;

