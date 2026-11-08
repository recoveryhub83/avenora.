
"use client";

import { useState } from "react";

export default function StartCampaign() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Personal");
  const [goal, setGoal] = useState("");
  const [story, setStory] = useState("");

  return (
    <main style={{ maxWidth: 720, margin: "60px auto", padding: 24 }}>
      <a href="/" style={{ color: "#2463eb" }}>← Back to AVENORA</a>

      <p className="eyebrow" style={{ marginTop: 40 }}>
        START SOMETHING MEANINGFUL
      </p>

      <h1 style={{ fontSize: 38 }}>Create your campaign</h1>

      <p style={{ color: "#64748b", lineHeight: 1.7 }}>
        Tell the world about your cause and the difference you want to make.
      </p>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("Your campaign details are ready for the next development stage. They have not been published or saved.");
        }}
        style={{ display: "grid", gap: 18, marginTop: 35 }}
      >
        <label>
          Campaign title
          <input
            required
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="What are you raising funds for?"
            style={fieldStyle}
          />
        </label>

        <label>
          Campaign category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            style={fieldStyle}
          >
            <option>Personal</option>
            <option>Education</option>
            <option>Medical</option>
            <option>Community</option>
            <option>Business</option>
            <option>Nonprofit</option>
            <option>Emergency</option>
            <option>Creative project</option>
          </select>
        </label>

        <label>
          Fundraising goal (USD)
          <input
            required
            type="number"
            min="1"
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            placeholder="Example: 5000"
            style={fieldStyle}
          />
        </label>

        <label>
          Tell your story
          <textarea
            required
            value={story}
            onChange={(event) => setStory(event.target.value)}
            placeholder="Explain your cause and how the funds will help..."
            rows={6}
            style={fieldStyle}
          />
        </label>

        <button type="submit" className="primary-button">
          Continue
        </button>
      </form>

      <p style={{ color: "#64748b", fontSize: 12, marginTop: 20 }}>
        This is an initial prototype. Campaign submission, verification,
        storage and publishing will be connected in a later development stage.
      </p>
    </main>
  );
}

const fieldStyle = {
  display: "block",
  width: "100%",
  padding: 14,
  marginTop: 8,
  border: "1px solid #d7deea",
  borderRadius: 8,
  fontSize: 15,
  fontFamily: "inherit",
};
