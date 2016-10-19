import React from 'react';

export default class ToDoItem extends React.Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            done: !!this.props.done
        };
    }

    render() {
        const {done} = this.state;

        return (
            <label>
                <input type="checkbox" defaultChecked={done} onChange={this.onChange} />
                {this.props.name}
            </label>
        );
    }

    /**
     * Event handlers
     **/
    onChange = (event) => {
        this.setDone(event.target.checked);
    };

    /**
     * Utilities
     **/
    setDone = (done) => {
        this.setState({done: !!done});
    };
}