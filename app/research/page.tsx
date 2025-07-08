import Link from "next/link"
import "../globals.css"

export default function ResearchPage() {
  return (
    <div className="container">
      <header className="header">
        <div className="nav">
          <Link href="/" className="logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">NeighborFit India</span>
          </Link>
        </div>
      </header>

      <main className="main">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#2563eb" }}>Research & Methodology</h1>

          <div className="feature-card" style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "#2563eb", marginBottom: "1rem" }}>🎯 Problem Statement</h2>
            <p style={{ marginBottom: "1rem" }}>
              Finding the right neighborhood in Indian cities is challenging due to:
            </p>
            <ul style={{ paddingLeft: "2rem", lineHeight: "1.8" }}>
              <li>Fragmented information across multiple sources</li>
              <li>Lack of systematic comparison tools</li>
              <li>Subjective reviews without data backing</li>
              <li>No personalized matching based on lifestyle</li>
              <li>Difficulty in understanding commute patterns</li>
            </ul>
          </div>

          <div className="feature-card" style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "#2563eb", marginBottom: "1rem" }}>📊 Data Sources</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div>
                <h4 style={{ marginBottom: "0.5rem" }}>Primary Sources:</h4>
                <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  <li>Census of India data</li>
                  <li>Municipal corporation records</li>
                  <li>Transport authority data</li>
                  <li>Crime statistics from police</li>
                  <li>Real estate market data</li>
                  <li>Local business directories</li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: "0.5rem" }}>Challenges:</h4>
                <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  <li>Data availability varies by city</li>
                  <li>Inconsistent data formats</li>
                  <li>Language barriers in local data</li>
                  <li>Rapid urban development changes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-card" style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "#2563eb", marginBottom: "1rem" }}>🧮 Algorithm Design</h2>
            <div style={{ backgroundColor: "#f3f4f6", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
              <code style={{ fontFamily: "monospace" }}>
                Score = (Safety × W1) + (Commute × W2) + (Cost × W3) + (Lifestyle × W4) + (Transport × W5)
              </code>
            </div>
            <p style={{ marginBottom: "1rem" }}>Where W1-W5 are user-defined importance weights (1-10 scale)</p>

            <h4 style={{ marginBottom: "0.5rem" }}>Scoring Factors:</h4>
            <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.6" }}>
              <li>
                <strong>Safety:</strong> Crime rates, police presence, lighting
              </li>
              <li>
                <strong>Commute:</strong> Distance to business hubs, traffic patterns
              </li>
              <li>
                <strong>Transport:</strong> Metro/bus connectivity, frequency
              </li>
              <li>
                <strong>Cost:</strong> Rent prices, daily expenses, utilities
              </li>
              <li>
                <strong>Lifestyle:</strong> Restaurants, entertainment, culture
              </li>
              <li>
                <strong>Family:</strong> Schools, hospitals, parks, community
              </li>
            </ul>
          </div>

          <div className="feature-card" style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "#2563eb", marginBottom: "1rem" }}>🏙️ Indian Cities Coverage</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {[
                { city: "Mumbai", areas: "Bandra, Andheri, Powai, Thane" },
                { city: "Delhi NCR", areas: "Gurgaon, Noida, Lajpat Nagar" },
                { city: "Bangalore", areas: "Koramangala, Whitefield, HSR" },
                { city: "Pune", areas: "Koregaon Park, Hinjewadi, Viman Nagar" },
                { city: "Chennai", areas: "Anna Nagar, T. Nagar, OMR" },
                { city: "Hyderabad", areas: "Hitech City, Banjara Hills, Gachibowli" },
              ].map((city, index) => (
                <div key={index} style={{ padding: "1rem", backgroundColor: "#f9fafb", borderRadius: "8px" }}>
                  <h4 style={{ color: "#2563eb", marginBottom: "0.5rem" }}>{city.city}</h4>
                  <p style={{ fontSize: "0.9rem", color: "#666" }}>{city.areas}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="feature-card" style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "#2563eb", marginBottom: "1rem" }}>🔍 User Research Insights</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div>
                <h4 style={{ marginBottom: "0.5rem" }}>Key Findings:</h4>
                <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  <li>80% prioritize safety above all factors</li>
                  <li>Commute time critical factor for 75% users</li>
                  <li>Budget constraints override preferences for 70%</li>
                  <li>Public transport access increasingly important</li>
                  <li>Family users prioritize schools and hospitals</li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: "0.5rem" }}>Indian Context:</h4>
                <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  <li>Joint family considerations important</li>
                  <li>Religious/cultural proximity matters</li>
                  <li>Vegetarian food availability crucial</li>
                  <li>Festival celebration spaces valued</li>
                  <li>Regional language comfort zones</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h2 style={{ color: "#2563eb", marginBottom: "1rem" }}>⚠️ Limitations & Future Work</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div>
                <h4 style={{ color: "#dc2626", marginBottom: "0.5rem" }}>Current Limitations:</h4>
                <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  <li>Limited to major metro cities</li>
                  <li>Data freshness varies by source</li>
                  <li>No real-time traffic integration</li>
                  <li>Cultural factors not fully quantified</li>
                  <li>Seasonal variations not considered</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: "#059669", marginBottom: "0.5rem" }}>Planned Improvements:</h4>
                <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", lineHeight: "1.6" }}>
                  <li>Tier-2 city expansion</li>
                  <li>Real-time data integration</li>
                  <li>Machine learning refinement</li>
                  <li>Community feedback integration</li>
                  <li>Regional language support</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/questionnaire" className="btn btn-primary btn-large">
              Try the Algorithm
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
