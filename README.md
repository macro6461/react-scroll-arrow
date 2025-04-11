# react-scroll-arrow

This is the source code for the react-scroll-arrow npm package. 

## Usage

To use, simply install via NPM or Yarn.

```
npm i react-scroll-arrow

yarn add react-scroll-arrow
```

Once installed, import it into your desired component like so. 

```javascript
import ReactScrollArrow from "react-scroll-arrow";

function App() {

  return (
    <>
      // REST OF APP COMPONENT
      <ReactScrollArrow/>
    </>
  )
}

export default App
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| component | React Component | No | - | You can create and pass your own React Component if you don't want to use the default. |
| pageYOffset | number | No | 400 | How far down you want to scroll before the arrow appears. |

Below is an example of it used with the optional props.

```javascript
import ReactScrollArrow from "react-scroll-arrow";



function App() {

  return (
    <>
      // REST OF APP COMPONENT
      <ReactScrollArrow component={TestScrollArrow} pageYOffset={200}/>
    </>
  )
}

export default App
```

You can see the code for `TestScrollArrow` in the `example/src/components` directory of the repo.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
