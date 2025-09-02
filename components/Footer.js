export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#fff", padding: "28px 0", marginTop: 40 }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontWeight: 700 }}>FireClaimsFL.com</div>
          <div style={{ fontSize: 13, opacity: 0.85 }}>
            FL License A161638 • Central FL
          </div>
        </div>
        <div style={{ fontSize: 13 }}>
          © {new Date().getFullYear()} FireClaimsFL
        </div>
      </div>
    </footer>
  );
  }
