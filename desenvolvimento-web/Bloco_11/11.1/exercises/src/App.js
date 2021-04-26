
const task = (value) => {
  return (
    <li>{value}</li>
  );
}
function App() {
  const array = ['Estudar Promises', 'Estudar Jest', 'Estudar React'];
  return array.map((curr) => task(curr));
}

export default App;
