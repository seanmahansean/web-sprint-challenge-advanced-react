# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
before the introduction of hooks, a functional component could not be stateful, which is where it deals with state that can be changed through logic of the component, allowing for more logic to be possible to implement. After hooks were introduced, both class components and functional components could be stateful.
2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is used to have something do something before mounting, and will be followed by a render

componentWillUpdate is called to have something rerender whenever something happens
3. Define stateful logic.
Stateful logic is pretty simple, its logic that is powered by the ability to change the state to make different things happen.
4. What are the three step of creating a successful test? What is done in each phase?
Arrange - Sets the stage to test something
Act - Does the test
Assert - gets the response of the test to see if it passes or fails