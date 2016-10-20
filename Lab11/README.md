### Lab 11
#### Abstract
As a client-side tool, it is common to need to get and send data to/from a server.  Axios is a useful tool to abstract AJAX calls.

#### Hints
- Use the Axios library to save and pull lunch data
- Create a new input called `guestName` in `SpecialInstructionsInput` component
- Send name, selection, instruction data to REST server: `var endpoint = '/lunches';`
- Create a button called Get Lunch Orders, show fetched lunch data in our React app in new component named `AllLunchOrdersPanel`
- Where do we put saveData function if we need the selection, name, and instructions?
- Passing data to AllLunchOrdersPanel from LunchOptionsPanel.
- Use the property passing style to pass function down to LunchOptionsPanel
```
axios.get(‘/lunches')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
       console.log(response);
    });
```
```
axios.post(endpoint, {
      name: name,
      lunch: selection,
      instructions: instructions
    })
    .then(...
```
- IMPORTANT - this is the data contract with the server:
```
{
    name: name,
    lunch: selection,
    instructions: instructions
}
```
