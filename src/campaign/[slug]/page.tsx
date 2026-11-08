
export default async function CampaignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main style={{ maxWidth: 850, margin: "60px auto", padding: 24 }}>
      <a href="/" style={{ color: "#2463eb" }}>
        ← Back to AVENORA
      </a>

      <div
        style={{
          marginTop: 35,
          padding: 50,
          borderRadius: 18,
          background: "#edf3ff",
          textAlign: "center",
          fontSize: 75,
        }}
      >
        💙
      </div>

      <p className="eyebrow" style={{ marginTop: 35 }}>
        AVENORA CAMPAIGN
      </p>

      <h1 style={{ fontSize: 38 }}>{title}</h1>

      <p style={{ color: "#64748b", lineHeight: 1.8 }}>
        Every meaningful change begins with people who care.
        Discover this campaign and learn how you can support its mission.
      </p>

      <div style={{ marginTop: 30, padding: 24, background: "#f6f8fc", borderRadius: 12 }}>
        <p>Fundraising progress</p>
        <h2>Campaign information coming soon</h2>
        <p style={{ color: "#64748b" }}>
          Verified campaign details, fundraising totals and supporter
          contributions will appear here once the campaign system is connected.
        </p>
      </div>

      <a
        href="/start"
        className="primary-button"
        style={{ marginTop: 25 }}
      >
        Start your own campaign
      </a>
    </main>
  );
}
