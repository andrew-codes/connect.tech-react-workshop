import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Panel from 'react-bootstrap/lib/Panel';
import Label from 'react-bootstrap/lib/Label';

class LunchApp extends React.Component {
    render() {
        var now = new Date();
        var formattedDate = moment(now).format('MMMM Do YYYY');
        return (
            <div>
                <Panel>
                    <h2>Options for lunch for {formattedDate}:</h2>
                    <LunchOptionsPanel lunchData={this.props.lunchChoices}> </LunchOptionsPanel>
                </Panel>
            </div>
        );
    }
}

class LunchOptionsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedLunch: 'Nothing selected'};
    }

    handleClick = (event) => {

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
                <SelectedLunchPanel selectedLunch={this.state.selectedLunch}></SelectedLunchPanel>
            </div>
        );
    }
}

class SelectedLunchPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Panel header="You've picked" bsStyle="warning">
                    {this.props.selectedLunch}
                </Panel>
            </div>
        );
    }
}

var lunchChoices = ['Chicken', 'Fish', 'Vegetarian'];
ReactDOM.render(
    <LunchApp lunchChoices={lunchChoices} />,
    document.getElementById('root')
);
