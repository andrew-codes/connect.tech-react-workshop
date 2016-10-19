import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Panel from 'react-bootstrap/lib/Panel';
import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';

class LunchApp extends React.Component {
    render() {
        const now = new Date();
        const formattedDate = moment(now).format('MMMM Do YYYY');
        return (
            <div>
                <Panel>
                    <h2>Options for lunch for {formattedDate}:</h2>
                    <LunchOptionsPanel lunchData={this.props.lunchChoices} />
                </Panel>
            </div>
        );
    }
}

class LunchOptionsPanel extends React.Component {
    state = {
        selectedLunch: 'Nothing selected'
    };

    handleClick = (event) => {
        this.setState({selectedLunch: event.target.textContent});
    };

    render() {
        const {lunchData} = this.props;

        return (
            <div>
                <Panel header="Please select one" bsStyle="info">
                    {lunchData.map((lunch, lunchIndex) => (
                        <h3 key={lunchIndex} onClick={this.handleClick}>
                            <Label>{lunch}</Label>
                        </h3>
                    ))}
                </Panel>
                <SelectedLunchPanel selectedLunch={this.state.selectedLunch} />
            </div>
        );
    }
}

class SelectedLunchPanel extends React.Component {
    state = {
        instructions: ''
    };

    updateInstructions = (instructions) => {
        this.setState({instructions: instructions});
    };

    render() {
        const {selectedLunch} = this.props;
        const {instructions} = this.state;

        return (
            <div>
                <Panel header="You've picked" bsStyle="warning">
                    <Label>{selectedLunch}</Label>
                    <p>Special Instructions: {instructions}</p>
                    <SpecialInstructionsInput
                        value={instructions}
                        updateInstructions={this.updateInstructions} />
                </Panel>
            </div>
        );
    }
}

class SpecialInstructionsInput extends React.Component {
    handleChange = () => {
        this.props.updateInstructions(this.refs.specialInstructionsInput.value);
    };

    render() {
        return (
            <div>
                <Label>Enter special instructions:</Label>
                <input
                    ref='specialInstructionsInput'
                    type='text' />
                <Button onClick={this.handleChange}>Submit</Button>
            </div>
        );
    }
}

const lunchChoices = ['Chicken', 'Fish', 'Vegetarian'];
ReactDOM.render(
    <LunchApp lunchChoices={lunchChoices} />,
    document.getElementById('root')
);
