var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());
global.should = chai.should();

var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});
global.navigator = {
    userAgent: 'node.js'
};