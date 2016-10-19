import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';

class HelloWorld extends React.Component {
    render() {
        const now = new Date();
        const formattedDate = moment(now).format('MMMM Do YYYY, h:mm:ss A');
        return (
            <div>
                <Panel>
                    <Jumbotron>
                        <h1>Welcome to Atlanta!</h1>
                        <p>The current time is: {formattedDate}</p>
                        <p>
                            <Button bsStyle="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                </Panel>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);
