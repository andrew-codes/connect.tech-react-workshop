### Lab 8
#### Abstract
You can use the props system to send not just state data, but also functions to manage data-passing between components.

#### Hints
- Create a new component `SpecialInstructionsInput` with an Input element:
`<input ref=‘specialInstructionsInput' type=‘text' value={this.props.value}  onChange={this.handleChange} />`
- Add state to `SelectedLunchPanel`
- Update it with a function, pass this state AND `updateInstructions` FUNCTION down to the `SpecialInstructionsInput` component:
```
updateInstructions(instructions) {
    this.setState({instructions: instructions});
}
```
- Show this state, `this.state.instructions`, in `SelectedLunchPanel`:
```
<p>Special Instructions: {this.state.instructions}</p>
```
- In SpecialInstructionsInput, have `this.handleChange` call the passed in `updateInstructions` to update the PARENT
```
  handleChange(e) { e.target.value ….
```
