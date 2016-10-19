import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Panel from 'react-bootstrap/lib/Panel';
import Label from 'react-bootstrap/lib/Label';

class LunchApp extends React.Component {
    render() {
        const now = new Date();
        const formattedDate = moment(now).format('MMMM Do YYYY');
        return (
            <div>
                <Panel>
                    <h2>Options for lunch for {formattedDate}</h2>
                    <LunchOptionsPanel lunchData={this.props.lunchChoices} />
                </Panel>
            </div>
        );
    }
}

class LunchOptionsPanel extends React.Component {
    render() {
        return (
            <div>
                <Panel header="Please select one" bsStyle="info">
                    {this.props.lunchData.map((lunch, lunchIndex) => (
                        <h3 key={lunchIndex}><Label>{lunch}</Label></h3>
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
