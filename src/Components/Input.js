import React from 'react';

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
                    <input type="submit" value="Submit" />
                </form>
            </div >
        );
    }
}

export default Input;

