### Lab 5
#### Abstract
Unlike props which are meant to share data across components, state is a self-contained data management tool.  As state updates, so will your DOM.

#### Hints
- In LunchOptionsPanel:
```
constructor(props) {
    super(props);
    this.state = {selectedLunch: 'Nothing selected'};
    this.handleClick = this.handleClick.bind(this);
  }
```
- Then add a `handleClick` method that accepts an implicit `event` object and performs a `this.setState()`, passing in an object with new `selectedLunch` value
- For that value, get the clicked item from `event.target.textContent`
- React implements the event handling system as reserved props: `<h3 onClick={this.handleClick} />`
- Pass down the state to a child with props: `<SelectedLunchPanel  selectedLunch={this.state.selectedLunch}>
`
