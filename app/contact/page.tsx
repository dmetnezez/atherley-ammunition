export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h2>Contact</h2>
        <p className="lede">Questions about an order or a product? Get in touch.</p>
        <p>
          Email: <a href="mailto:hello@example.com" style={{ color: "var(--forest-700)", textDecoration: "underline" }}>hello@example.com</a>
        </p>
        <p style={{ marginTop: 12, color: "var(--muted)" }}>
          Swap in your real email, and add a form later if you want one.
        </p>
      </div>
    </section>
  );
}
