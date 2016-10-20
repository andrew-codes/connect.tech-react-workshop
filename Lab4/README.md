### Lab 4
#### Abstract
Pass props to a component as you declare it in your JSX - this is an important practice in React.  Data "flow" is an important concept to consider as you plan your component structure.

#### Hints
- Save an array to a variable: `let lunchChoices = ['Chicken', 'Fish', ‘Vegetarian’];`
- Send a variable to a components similar to an attribute on an html element: `<HelloWorld lunchChoices={lunchChoices}/>
`
- Access these props from within component:
```
let lunchOptions = this.props.lunchChoices.map(function(c) {
    return <h2><Label>{c}</Label></h2>
});
```
- Show the `lunchOptions` variable from within your `render` function
- Next steps: Create a NEW component called LunchOptionsPanel, include inside LunchApp - pass data down and show lunch options inside of it
