import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nika="Biju"></Person>
      <Person name="Sagor" nika="Biju"></Person>
      <Person nika="Biju"></Person>
      <Person></Person>
      <h1>New components</h1>
      <p id="bekar">React is coming</p>
      <Friend phone="01767211103"></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nika}</p>
    </div>
  )
}
function Friend(props) {
  return (
    <div className="container">
      <h1>Ratan</h1>
      <p>Phone:{props.phone}</p>
    </div>
  )
}

export default App;

