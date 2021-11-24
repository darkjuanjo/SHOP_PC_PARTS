// This App.js file is the center of the application. Think of App.js as the root component, 
// or the wrapper component that houses all of the other components. To effect any change on 
// the application, we need to either modify this file or add components inside it.
import LoginForm from './components/Login';
import Nav from './components/Nav';

// To allow for Gallery to be a child of Nav, we "lift" the state by adding 3 things:
// First, declare categories using the useState.
// Then, set currentCategory with its setter using useState.
// Finally, edit the nav componenent to have the variables as shown
function App() {

  // To pass Props to child elements, the declarations go INSIDE the opening tag of the component
  // It's almost like making a function call. When you make a call, you pass parameters. That's 
  // what happens when you declare Props inside an opening tag, such as what's inside the <Nav> opener.
  return (
    <div>
      {/* Passing the getter and setter functions into the Nav component will allow the components
      to modify their states in the App component, which will conditionally render based on the user's selection. */}
      <Nav></Nav>
      <main>
          <LoginForm></LoginForm>
      </main>
    </div>
  );
}

export default App;


