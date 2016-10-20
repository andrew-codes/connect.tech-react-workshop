### Lab 9
#### Abstract
You can use the props system to send not just state data, but also functions to manage data-passing between components.

#### Hints
- Create a submit button in `SpecialInstructionsInput` to “submit” the instructions
- The `handleChange` should use “ref” to get the data out of the input element!
- Don’t forget to import the Bootstrap button!
- `import Button from ‘react-bootstrap/lib/Button’;`

```
<input ref=‘specialInstructionsInput'>

this.refs.specialInstructionsInput.value
```
