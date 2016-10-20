### Lab 13
#### Abstract
React Router is a popular tool to manage your client-side routes.

#### Hints
- `import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';`
- `import { Router, Route, Link, IndexRoute } from ‘react-router';`
- Will need to create a new component: LunchAppPanel, that has contents of current LunchApp component. Also create stub Support and Contact React components:
```
<Router>
    <Route path="/" component={LunchApp}>
        <IndexRoute component={LunchAppPanel} lunchChoices={lunchChoices} />
        <Route path="support" component={Support}/>
        ...
```
- In LunchApp, use `React-Bootstrap` `ButtonToolbar` and `Buttons`, then create `Links`, and LAST LINE VERY IMPORTANT:
```
<Link to={‘/'}>Home</Link>
<Link to={'contact'}>Contact Us</Link>          
<Link to={'support'}>Support</Link>     
{this.props.children}
```
