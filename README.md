# React Info Site

This is a simple React site that I created to learn React. It is a single page site that has a one sections that describe React and its features.

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## Features

- Single page site

## How to Run

1. Clone the repository
2. Run `cd React-Info-Site`
3. Run `npm install`
4. Run `npm run dev`

## Live Site

The live site can be found [here](https://react-info-site-one.vercel.app/)

## About this Course

This project was created as part of the [React for Beginners](https://reactforbeginners.com/) course by Wes Bos.

## What I Learned

1. Why do we need to `import React from "react"` in our files?

> React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?

> A JavaScript object. React elements that describe what React should eventually add to the real DOM for us.

3. What's wrong with this code:

```jsx
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

> We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?

> Declarative means I can tell the computer WHAT to do and expect it to handle the details. Imperative means I need to tell it HOW to do each step.

5. What does it mean for something to be "composable"?

> We have small pieces that we can put together to make something larger/greater than the individual pieces.

6. What is a React component?

> A reusable piece of your website that you can use over and over again.

7. What's wrong with this code?

```jsx
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

> React components need to be capitalized < PascalCase > `function MyComponent()`

8. What's wrong with this code?

```jsx
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

> We need to use `ReactDOM.render(<Header />, document.getElementById("root"))`
