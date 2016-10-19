import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Panel from 'react-bootstrap/lib/Panel';
import Input from 'react-bootstrap/lib/Input';
import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios';
// import api from './api';
const endpoint = '/lunches';

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
        selectedLunch: 'Nothing selected',
        lunchOrder: []
    };

    handleClick = (event) => {
        // may need to use innerText for older IE
        this.setState({
            selectedLunch: event.target.textContent
        });
    };

    showLunchOrdersHandler = () => {
        this.getData()
            .then((response) => {
                console.log(response.data);
                this.setState({lunchOrders: response.data});
            })
            .catch((response) => {
                if (response instanceof Error) {
                    // Something happened in setting up the request that triggered an Error
                    console.log('error', response);
                }
            });
    };

    saveLunchOrderHandler = (name, instructions) => {
        const {selectedLunch} = this.state;

        console.log('sending this data to server:', selectedLunch, name, instructions);
        this.saveData(this.state.selectedLunch, name, instructions)
            .then(() => {
                alert('sent data to server');
            })
            .catch((response) => {
                alert('error sending data to server' + JSON.stringify(response));
            });
    };

    saveData = (selection, name, instructions) => axios.post(endpoint, {
        name: name,
        lunch: selection,
        instructions: instructions
    });

    getData = () => axios.get(endpoint);

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
                <SelectedLunchPanel selectedLunch={this.state.selectedLunch}
                                    saveLunchOrderHandler={this.saveLunchOrderHandler} />
                <AllLunchOrdersPanel lunchOrders={this.state.lunchOrders}
                                     showLunchOrdersHandler={this.showLunchOrdersHandler} />
            </div>
        );
    }
}

class SelectedLunchPanel extends React.Component {
    state = {
        instructions: '',
        guestName: ''
    };

    updateInstructions = (instructions, guestName) => {
        this.setState({instructions: instructions, guestName: guestName});
        this.props.saveLunchOrderHandler(guestName, instructions);
    };

    render() {
        const {selectedLunch} = this.props;
        const {instructions, guestName} = this.state;

        return (
            <div>
                <Panel header="You've picked" bsStyle="warning">
                    <Label>{selectedLunch}</Label>
                    <p>Special Instructions: {instructions} for {guestName}</p>
                    <SpecialInstructionsInput
                        value={instructions}
                        updateInstructions={this.updateInstructions} />
                </Panel>
            </div>
        );
    }
}

class SpecialInstructionsInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () => {
        this.props.updateInstructions(this.refs.specialInstructionsInput.getValue(), this.refs.guestName.getValue());
    };

    render() {
        return (
            <div>
                <Input
                    ref='specialInstructionsInput'
                    type='text'
                    placeholder="Enter Instructions" />
                <Input
                    ref='guestName'
                    type='text'
                    placeholder="Enter Guest Name.." />
                <Button onClick={this.handleChange}>Submit</Button>
            </div>
        );
    }
}

class AllLunchOrdersPanel extends React.Component {
    render() {
        const {lunchOrders, showLunchOrdersHandler} = this.props;

        return (
            <div>
                <Panel header="Current Orders" bsStyle="info">
                    <Button onClick={showLunchOrdersHandler}>Get Lunch Orders</Button>
                    {lunchOrders.map((lunch, lunchIndex) => (
                        <p key={lunchIndex}>
                            Guest: {lunch.name} ordered {lunch.lunch} with instructions: {lunch.instructions}.
                        </p>
                    ))}
                </Panel>
            </div>
        );
    }
}

const lunchChoices = ['Chicken', 'Fish', 'Vegetarian'];
ReactDOM.render(
    <LunchApp lunchChoices={lunchChoices} />,
    document.getElementById('root')
);
