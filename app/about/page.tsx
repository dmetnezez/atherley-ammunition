export const metadata = { title: "About" };

export default function About() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h2>Our story</h2>
        <p className="lede">
          I'm a young entrepreneur making bullets in Canada, for Canadians.
        </p>
        <p>
          Atherley Ammunition started with a simple idea: Canadian shooters should be able to buy
          quality ammunition that is actually made here at home. I keep the range focused on two
          calibers, 9mm and 5.56, so I can put my full attention on making every box consistent
          and dependable.
        </p>
        <p style={{ marginTop: 16 }}>
          When you buy from Atherley, you're backing a Canadian-made product and a young Canadian
          business. Thank you for the support.
        </p>
      </div>
    </section>
  );
}
