import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Panel from 'react-bootstrap/lib/Panel';
import Label from 'react-bootstrap/lib/Label';
import ReactTransitionGroup from 'react/lib/ReactCSSTransitionGroup.js';

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
    render() {
        const {selectedLunch} = this.props;

        return (
            <div>
                <Panel header="You've picked" bsStyle="warning">
                    <ReactTransitionGroup transitionName="example">
                        <Label key={selectedLunch}>{selectedLunch}</Label>
                    </ReactTransitionGroup>
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
