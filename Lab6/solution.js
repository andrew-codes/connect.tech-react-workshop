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

    componentWillMount() {
        console.log('LunchOptionsPanel - componentWillMount')
    }

    componentDidMount() {
        console.log('LunchOptionsPanel - componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('LunchOptionsPanel - componentWillReceiveProps', nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('LunchOptionsPanel - componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('LunchOptionsPanel - componentDidUpdate', prevProps, prevState)
    }

    componentWillUnmount() {
        console.log('LunchOptionsPanel - componentWillUnmount')
    }

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
    componentWillMount() {
        console.log('SelectedLunchPanel - componentWillMount')
    }

    componentDidMount() {
        console.log('SelectedLunchPanel - componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('SelectedLunchPanel - componentWillReceiveProps', nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('SelectedLunchPanel - componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('SelectedLunchPanel - componentDidUpdate', prevProps, prevState)
    }

    componentWillUnmount() {
        console.log('SelectedLunchPanel - componentWillUnmount')
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

const lunchChoices = ['Chicken', 'Fish', 'Vegetarian'];
ReactDOM.render(
    <LunchApp lunchChoices={lunchChoices} />,
    document.getElementById('root')
);
