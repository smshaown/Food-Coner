import React from "react";
import { Container } from "react-bootstrap";
import Pdf from "react-to-pdf";
import blog from "../../assets/blog.png";

const Blog = () => {
  const ref = React.createRef();

  return (
    <Container>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="btn btn-danger mt-5" onClick={toPdf}>
            Download PDF
          </button>
        )}
      </Pdf>

      <h1 className="text-center mb-5" style={{ paddingTop: "-100px" }}>
        This is Blog Section
      </h1>
      <div ref={ref}>
       <div>
       <h3>1. Differences between uncontrolled and controlled components?</h3>
        <p>
          In React, uncontrolled components and controlled components refer to
          two different ways of handling form elements and user input:
          <br />
          1. Uncontrolled components: These are form elements that store their
          own state internally, rather than relying on React state. This means
          that the values of the input fields are not controlled by React, and
          can be accessed directly from the DOM. Uncontrolled components are
          often simpler to use, but they can be harder to validate and maintain.
          <br />
          2. Controlled components: These are form elements that rely on React
          state to store their values. This means that the values of the input
          fields are controlled by React, and any changes to the values are
          reflected in the state. Controlled components are often used when you
          need to validate input, conditionally disable or enable fields, or
          perform other complex tasks.
        </p>
       </div>

        <div>
        <h2>2. How to validate React props using PropTypes?</h2>
        <p>
          here's an example of how to use PropTypes to validate the props passed
          to an Article component in React:
        </p>
        <img src={blog} className="mx-auto mt-3 mb-3" alt="" />
        <p>
          In this example, we have defined a set of prop types for the
          MyComponent component. The PropTypes object provides a set of methods
          that can be used to validate the props. The name prop is expected to
          be a string and is marked as required using the isRequired method. The
          age prop is expected to be a number, but it is not required. The email
          prop is expected to be a string, but it is also not required. The
          isStudent prop is expected to be a boolean and is marked as required.
          The hobbies prop is expected to be an array of strings. The address
          prop is expected to be an object with four properties: street, city,
          state, and zipCode, each of which is expected to be a string. If any
          of the props do not match the expected type or are missing, a warning
          message will be logged to the console. By using PropTypes to validate
          props, you can catch potential bugs early and ensure that your
          components behave correctly.
        </p>
      </div>

      <div>
        <h2>3. Difference between nodejs and express js.</h2>

        <p>
          Node.js is a runtime environment for executing JavaScript code outside
          of a web browser. It is built on top of the V8 JavaScript engine and
          provides a set of built-in modules for performing various tasks, such
          as file I/O, network communication, and more. Express.js, on the other
          hand, is a web framework for Node.js. It provides a set of features
          and tools for building web applications and APIs using Node.js.
          Express.js provides a robust set of middleware functions, which can be
          used to handle various HTTP requests and responses, as well as to
          perform authentication, data validation, and more.
        </p>
      </div>

      <div>
        <h2>4. What is a custom hook, and why will you create a custom hook?</h2>
        <p>
          A custom hook in React is a function that encapsulates reusable logic
          that can be shared across multiple components. Custom hooks are a way
          to extract common code into a separate function that can be used in
          multiple components.
          <br />
          You would create a custom hook when you find yourself repeating the
          same code or pattern across multiple components. By creating a custom
          hook, you can encapsulate the common logic and reuse it in multiple
          places, making your code more modular and easier to maintain.
        </p>
      </div>
      </div>

      
    </Container>
  );
};

export default Blog;
