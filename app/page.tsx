import Link from "next/link"
import "./globals.css"

export default function HomePage() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="nav">
          <div className="logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">NeighborFit India</span>
          </div>
          <div className="nav-links">
            <Link href="/research" className="nav-link">
              Research
            </Link>
            <Link href="/questionnaire" className="btn btn-primary">
              Find My Area
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main">
        <div className="hero">
          <h1 className="hero-title">
            Find Your Perfect
            <span className="highlight"> Indian Neighborhood</span>
          </h1>
          <p className="hero-description">
            Discover the best areas in Mumbai, Delhi, Bangalore, and other major Indian cities that match your lifestyle
            and preferences.
          </p>
          <Link href="/questionnaire" className="btn btn-large btn-primary">
            Start Assessment
          </Link>
        </div>

        {/* Features */}
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Smart Matching</h3>
            <p>Algorithm analyzes your preferences against Indian neighborhood data</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏙️</div>
            <h3>Major Cities</h3>
            <p>Coverage across Mumbai, Delhi, Bangalore, Pune, Chennai, and more</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real Data</h3>
            <p>Based on transport, safety, cost of living, and amenities data</p>
          </div>
        </div>

        {/* How it Works */}
        <div className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Answer Questions</h3>
              <p>Tell us about your lifestyle, budget, and preferences</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>AI Analysis</h3>
              <p>Our system matches you with suitable Indian neighborhoods</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Results</h3>
              <p>Receive personalized area recommendations with detailed insights</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta">
          <h2>Ready to Find Your Ideal Area?</h2>
          <p>Join thousands who found their perfect neighborhood in India</p>
          <Link href="/questionnaire" className="btn btn-large btn-primary">
            Take Assessment Now
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 NeighborFit India - Find Your Perfect Indian Neighborhood</p>
      </footer>
    </div>
  )
}
