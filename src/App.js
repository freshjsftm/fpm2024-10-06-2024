import './App.css';

function List(props) {
  const { title, numbers, children } = props;
  return (
    <article>
      <h2 title={title}>List {numbers}</h2>
      <ul>{children}</ul>
    </article>
  );
}

function App() {
  return (
    <>
      <List title="text for title" numbers={2}>
        <li>Max</li>
        <li>Anna</li>
      </List>
      <List title="text for title" numbers={3}>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </List>
    </>
  );
}

export default App;
