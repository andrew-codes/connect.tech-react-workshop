### Lab 6
#### Abstract
Lifecycle methods fire at all steps in a component's lifecycle.  They give you control to manage your application as components are added, removed, and updated.

#### Hints
- Documentation: `https://facebook.github.io/react/docs/component-specs.html`
- Observe what happens at each step:
```
componentWillMount()
componentDidMount()
componentWillReceiveProps(nextProps)
componentWillUpdate(nextProps, nextState)
componentDidUpdate(prevProps, prevState)
componentWillUnmount()
```
- Example:
```
componentWillMount() {
    console.log(‘componentName -> componentWillMount’)
}
```
