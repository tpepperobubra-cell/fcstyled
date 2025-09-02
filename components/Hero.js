export default function Hero() {
  return (
    <section style={{ background: "#f44336", color: "#fff", padding: "100px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Florida’s Trusted Fire Damage Claim Experts
      </h2>
      <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto 30px" }}>
        We fight for homeowners to maximize insurance payouts after fire, smoke, or water damage.
      </p>
      <a
        href="#contact"
        style={{
          background: "#111",
          color: "#fff",
          padding: "12px 25px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "600",
          display: "inline-block"
        }}
      >
        Get Free Consultation
      </a>
    </section>
  );
}
