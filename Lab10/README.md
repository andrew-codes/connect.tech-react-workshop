### Lab 10
#### Abstract
A dispatcher is a common tool to help more-efficiently pass data between components.

#### Hints
- Create a simple dispatcher, as an ES6 module, and wire it up into the example! Put in its own file, call it: `my-dispatcher.js`:
```
var registeredCallback;
exports.on = function(channel, callback) {
        registeredCallback = callback; };
exports.trigger = function(channel, data) {
        registeredCallback(channel, data) };
exports.removeCallback = function() {
        registeredCallback = null; };
```
- Register with the dispatcher using `componentDidMount`
- Registering with dispatcher:
```
dispatcher.on('updateInstructionsDispatch', this.updateInstructions);
```
- Firing dispatcher:
```
dispatcher.trigger(‘updateInstructionsDispatch', somedata)
```
