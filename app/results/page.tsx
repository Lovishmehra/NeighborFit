"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import "../globals.css"

interface NeighborhoodMatch {
  name: string
  city: string
  overall_score: number
  scores: {
    safety: number
    commute: number
    nightlife: number
    family_friendly: number
    cost_of_living: number
    transport: number
  }
  highlights: string[]
  concerns: string[]
  median_rent: string
  area_type: string
}

export default function ResultsPage() {
  const [results, setResults] = useState<NeighborhoodMatch[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedResults = sessionStorage.getItem("matchResults")
    if (storedResults) {
      setResults(JSON.parse(storedResults))
    }
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="container">
        <div style={{ textAlign: "center", padding: "4rem 0" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "4px solid #e5e7eb",
              borderTop: "4px solid #2563eb",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 1rem",
            }}
          ></div>
          <p>Analyzing neighborhoods...</p>
        </div>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="container">
        <div style={{ textAlign: "center", padding: "4rem 0" }}>
          <p style={{ marginBottom: "1rem" }}>No results found. Please take the questionnaire first.</p>
          <Link href="/questionnaire" className="btn btn-primary">
            Take Assessment
          </Link>
        </div>
      </div>
    )
  }

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
        <div className="results-container">
          <h1 style={{ textAlign: "center", marginBottom: "1rem", color: "#2563eb" }}>Your Neighborhood Matches</h1>
          <p style={{ textAlign: "center", marginBottom: "3rem", color: "#666" }}>
            Based on your preferences, here are the best areas for you in India
          </p>

          {results.map((neighborhood, index) => (
            <div key={index} className="result-card">
              <div
                className="result-header"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <div>
                  <h2 className="result-title">{neighborhood.name}</h2>
                  <p className="result-location">{neighborhood.city}</p>
                  <p style={{ opacity: 0.8, fontSize: "0.9rem" }}>{neighborhood.area_type}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="result-score">{neighborhood.overall_score}%</div>
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                    }}
                  >
                    {neighborhood.overall_score >= 80
                      ? "Excellent"
                      : neighborhood.overall_score >= 60
                        ? "Good"
                        : "Fair"}{" "}
                    Match
                  </div>
                </div>
              </div>

              <div className="result-content">
                <div className="score-breakdown">
                  {Object.entries(neighborhood.scores).map(([category, score]) => (
                    <div key={category} className="score-item">
                      <div className="score-label">{category.replace("_", " ").toUpperCase()}</div>
                      <div className="score-value">{score}%</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div className="highlights">
                    <h4>✅ Why It's Great</h4>
                    <ul>
                      {neighborhood.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="concerns">
                    <h4>⚠️ Things to Consider</h4>
                    <ul>
                      {neighborhood.concerns.map((concern, idx) => (
                        <li key={idx}>{concern}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "1.5rem",
                    padding: "1rem",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    <strong>Median Rent:</strong> {neighborhood.median_rent}
                  </span>
                  <span>
                    <strong>Area Type:</strong> {neighborhood.area_type}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/questionnaire" className="btn btn-primary" style={{ marginRight: "1rem" }}>
              Retake Assessment
            </Link>
            <Link href="/research" className="btn" style={{ backgroundColor: "#6b7280", color: "white" }}>
              View Research
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
