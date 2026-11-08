
const campaigns = [
  {
    title: "Help Children Access Quality Education",
    category: "Education",
    raised: "$12,450",
    goal: "$20,000",
    progress: 62,
    image: "📚",
  },
  {
    title: "Support Families in Need",
    category: "Community",
    raised: "$8,200",
    goal: "$15,000",
    progress: 55,
    image: "🤝",
  },
  {
    title: "Bring Clean Water to Communities",
    category: "Environment",
    raised: "$18,600",
    goal: "$25,000",
    progress: 74,
    image: "💧",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="/" className="logo">AVENORA<span>.</span></a>
        <div className="navlinks">
          <a href="#explore">Explore</a>
          <a href="#how">How it works</a>
          <a href="/start">Start a campaign</a>
        </div>
        <a href="/start" className="navbutton">Get started</a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">A WORLD OF POSSIBILITY</p>
          <h1>Big dreams begin with <span>people like you.</span></h1>
          <p className="hero-description">
            Discover meaningful causes, support ambitious ideas,
            and help people around the world make good possible.
          </p>
          <div className="hero-actions">
            <a href="#explore" className="primary-button">Explore campaigns</a>
            <a href="/start" className="secondary-button">Start fundraising</a>
          </div>
          <p className="hero-note">Together, we can make a difference.</p>
        </div>
        <div className="hero-art">
          <div className="art-circle">♡</div>
          <div className="art-card">
            <span>🌍</span>
            <h3>One world. Many possibilities.</h3>
            <p>Every contribution can create change.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div><strong>Global</strong><span>A worldwide community</span></div>
        <div><strong>One mission</strong><span>Making good possible</span></div>
        <div><strong>Every cause</strong><span>Room for every idea</span></div>
      </section>

      <section className="campaign-section" id="explore">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DISCOVER THE DIFFERENCE</p>
            <h2>Causes worth believing in.</h2>
          </div>
          <a href="/start">Start your campaign →</a>
        </div>

        <div className="campaign-grid">
          {campaigns.map((campaign) => (
            <article className="campaign-card" key={campaign.title}>
              <div className="campaign-image">{campaign.image}</div>
              <div className="campaign-info">
                <span className="category">{campaign.category}</span>
                <h3>{campaign.title}</h3>
                <div className="progress-track">
                  <div style={{ width: `${campaign.progress}%` }} />
                </div>
                <div className="campaign-numbers">
                  <strong>{campaign.raised} raised</strong>
                  <span>Goal: {campaign.goal}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-note">
          Illustrative campaign examples — not real fundraising records.
        </p>
      </section>

      <section className="how-section" id="how">
        <p className="eyebrow">SIMPLE. MEANINGFUL. GLOBAL.</p>
        <h2>Good things happen when we come together.</h2>
        <div className="steps">
          <div><span>01</span><h3>Create</h3><p>Share your story and introduce your cause.</p></div>
          <div><span>02</span><h3>Connect</h3><p>Reach people who believe in your mission.</p></div>
          <div><span>03</span><h3>Make an impact</h3><p>Bring your fundraising goals closer to reality.</p></div>
        </div>
      </section>

      <section className="closing">
        <h2>Your idea deserves a chance.</h2>
        <p>Start something meaningful with AVENORA.</p>
        <a href="/start" className="primary-button">Create your campaign</a>
      </section>

      <footer>
        <a href="/" className="logo">AVENORA<span>.</span></a>
        <p>Make Good Possible.</p>
        <p>© 2026 AVENORA. All rights reserved.</p>
      </footer>
    </main>
  );
}
