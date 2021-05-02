
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['Estudar Promises', 'Estudar Jest', 'Estudar React'];
function App() {
  return (<ul> { array.map((curr) => task(curr)) } </ul>);
}

export default App;
