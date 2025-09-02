export default function Header() {
  return (
    <header style={{ background: "#111", color: "#fff", padding: "20px 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "700" }}>FireClaimsFL</h1>
        <nav>
          <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 }}>
            <li><a href="#services" style={{ color: "#fff", textDecoration: "none" }}>Services</a></li>
            <li><a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
            <li><a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
