import React from "react";
import { Container } from "react-bootstrap";
import Pdf from "react-to-pdf";

const Blog = () => {

    const ref = React.createRef();

  return (
    <Container >


        <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => (
                    <button
                    className="btn btn-danger mt-5"
                    onClick={toPdf}
                    >
                    Download PDF
                    </button>
                )}
                </Pdf>

      <h1 className="text-center mb-5" style={{paddingTop: "-100px"}}>This is Blog Section</h1>
      <div ref={ref}>
        <h3>Differences between uncontrolled and controlled components?
            </h3>
        <p>In React, uncontrolled components and controlled components refer to two different ways of handling form elements and user input:
        <br />
        1. Uncontrolled components: These are form elements that store their own state internally, rather than relying on React state. This means that the values of the input fields are not controlled by React, and can be accessed directly from the DOM. Uncontrolled components are often simpler to use, but they can be harder to validate and maintain.
        <br />  
        2. Controlled components: These are form elements that rely on React state to store their values. This means that the values of the input fields are controlled by React, and any changes to the values are reflected in the state. Controlled components are often used when you need to validate input, conditionally disable or enable fields, or perform other complex tasks.</p>
      </div>
      <div>
        <h2>What is a custom hook, and why will you create a custom hook?</h2>
        <p>
        A custom hook in React is a function that encapsulates reusable logic that can be shared across multiple components. Custom hooks are a way to extract common code into a separate function that can be used in multiple components.
        <br />
        You would create a custom hook when you find yourself repeating the same code or pattern across multiple components. By creating a custom hook, you can encapsulate the common logic and reuse it in multiple places, making your code more modular and easier to maintain.
        
        </p>
      </div>
    </Container>
  );
};

export default Blog;
