import React from 'react';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './Container';
import { User } from './components/state/User';
import { Usereduser } from './components/state/Usereduser';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';

function App() {
  const names = [
        {first: 'Bruce', last: 'Wayne'},
        {first: 'Clark', last: 'Kent'},
        {first: 'Princess', last: 'Diana'}      
    ]
  return (
    <div className="App">
      <h2>Passing props</h2>
      <Greet name="John"  isLoggedIn={true} />
      <h2>Passing props as an object</h2>
      <Person first="John" last="Doe" />
      <h2>Array of Objects</h2>
      <PersonList names={names} />
      <Status status="loading" />
      <h2>Children props</h2>
      <Heading>Placeholder text</Heading>
      <h2>Event props</h2>
      <Button handleClick={(event, id) => console.log(event, id)} />
      <h2>Input props</h2>
      <Input value="" handleChange={(event) => console.log(event)} />
      <h2>Style props</h2>
      <Container styles={{border: '1px solid black', padding: '1rem'}} />
      <h2>UseState</h2>
      <User/>
      <h2>UseReducer</h2>
      <Usereduser/>
      <h3>UseContext</h3>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
