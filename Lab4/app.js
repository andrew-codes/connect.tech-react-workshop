import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Panel from 'react-bootstrap/lib/Panel';

class LunchApp extends React.Component {
    render() {
        const now = new Date();
        const formattedDate = moment(now).format('MMMM Do YYYY');
        return (
            <div>
                <Panel>
                    <h2>Options for lunch for {formattedDate}</h2>
                </Panel>
            </div>
        );
    }
}

ReactDOM.render(
    <LunchApp />,
    document.getElementById('root')
);
