function Header({ title }) {
  return <header className="header"><h1>{title}</h1></header>;
}

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <h2>Navigation</h2>
      <nav>
        <a href="#overview">Overview</a>
        <a href="#updates">Updates</a>
        <a href="#about">About</a>
      </nav>
    </aside>
  );
}

function Content() {
  return (
    <main className="content" id="overview">
      <h2>Page content</h2>
      <p>This page is assembled from four reusable React components.</p>
      <p id="updates">The title is passed to the header as a prop.</p>
    </main>
  );
}

function Footer() {
  return <footer className="footer" id="about">Page layout example</footer>;
}

function Layout({ title }) {
  return (
    <div className="layout">
      <Header title={title} />
      <div className="body">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return <Layout title="Component Composition" />;
}