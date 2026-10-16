function Welcome({ name }) {
  return <p className="greeting">Hello, {name}! (Functional component)</p>;
}

class WelcomeClass extends React.Component {
  render() {
    return <p className="greeting">Hello, {this.props.name}! (Class component)</p>;
  }
}

export default function App() {
  return (
    <main className="page">
      <h1>Welcome</h1>
      <Welcome name="Alex" />
      <WelcomeClass name="Jordan" />
    </main>
  );
}