export const metadata = { title: "About" };

export default function About() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h2>Made in Canada</h2>
        <p className="lede">
          Atherley Ammunition is Canadian made, from start to finish.
        </p>
        <p>
          We make two things: 9mm and 5.56 ammunition. Keeping the range small lets us focus on
          quality control and consistency, and keeps the work here at home.
        </p>
        <p style={{ marginTop: 16, color: "var(--muted)" }}>
          Replace this page with your real story: where in Canada you manufacture, who you are,
          and what makes your ammunition worth choosing.
        </p>
      </div>
    </section>
  );
}
