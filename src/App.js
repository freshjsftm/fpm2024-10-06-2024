import './App.css';

function App() {
  return (
    <h1 title="qwerty" className="heading">
      Hi!
      <em className="inside">Qwerty</em>
    </h1>
  );
}

// createElement('h1', {className:"heading",title:"qwerty" }, 'Hi!', createElement('em', {className:"inside"}, 'Qwerty'))

export default App;
