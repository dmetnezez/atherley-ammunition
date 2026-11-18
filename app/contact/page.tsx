export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h2>Contact</h2>
        <p className="lede">Questions about an order or a product? Get in touch.</p>
        <p>
          Email:{" "}
          <a
            href="mailto:Daniel.ather556@gmail.com"
            style={{ color: "var(--forest-700)", textDecoration: "underline" }}
          >
            Daniel.ather556@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
