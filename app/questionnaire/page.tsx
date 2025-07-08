"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import "../globals.css"

export default function QuestionnairePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    age_group: "",
    lifestyle: "",
    budget_range: "",
    city_preference: "",
    commute_importance: 5,
    safety_importance: 5,
    nightlife_importance: 5,
    family_importance: 5,
    cost_importance: 5,
    transport_importance: 5,
    commute_method: "",
    work_location: "",
  })

  const steps = [
    { title: "About You", description: "Basic information" },
    { title: "Lifestyle", description: "Your preferences" },
    { title: "Priorities", description: "What matters most" },
    { title: "Practical", description: "Budget and commute" },
  ]

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const results = await response.json()
        sessionStorage.setItem("matchResults", JSON.stringify(results))
        router.push("/results")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <div className="form-group">
              <label className="form-label">Age Group</label>
              <div className="form-radio-group">
                {[
                  { value: "18-25", label: "18-25 (Student/Early Career)" },
                  { value: "26-35", label: "26-35 (Young Professional)" },
                  { value: "36-50", label: "36-50 (Established Career/Family)" },
                  { value: "50+", label: "50+ (Established/Pre-retirement)" },
                ].map((option) => (
                  <div key={option.value} className="form-radio-item">
                    <input
                      type="radio"
                      id={option.value}
                      name="age_group"
                      value={option.value}
                      checked={formData.age_group === option.value}
                      onChange={(e) => handleInputChange("age_group", e.target.value)}
                      className="form-radio"
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Preferred City</label>
              <select
                value={formData.city_preference}
                onChange={(e) => handleInputChange("city_preference", e.target.value)}
                className="form-select"
              >
                <option value="">Select a city</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi NCR</option>
                <option value="bangalore">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="chennai">Chennai</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="kolkata">Kolkata</option>
              </select>
            </div>
          </div>
        )

      case 1:
        return (
          <div>
            <div className="form-group">
              <label className="form-label">Lifestyle Type</label>
              <div className="form-radio-group">
                {[
                  { value: "urban", label: "Urban Explorer (City life, nightlife, culture)" },
                  { value: "family", label: "Family Focused (Schools, parks, safety)" },
                  { value: "professional", label: "Career Professional (Commute, networking)" },
                  { value: "balanced", label: "Balanced (Mix of work, social, relaxation)" },
                ].map((option) => (
                  <div key={option.value} className="form-radio-item">
                    <input
                      type="radio"
                      id={option.value}
                      name="lifestyle"
                      value={option.value}
                      checked={formData.lifestyle === option.value}
                      onChange={(e) => handleInputChange("lifestyle", e.target.value)}
                      className="form-radio"
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div>
            {[
              { key: "safety_importance", label: "Safety Importance" },
              { key: "commute_importance", label: "Commute Convenience" },
              { key: "nightlife_importance", label: "Nightlife/Entertainment" },
              { key: "family_importance", label: "Family-Friendly Features" },
              { key: "transport_importance", label: "Public Transport Access" },
              { key: "cost_importance", label: "Cost of Living" },
            ].map((item) => (
              <div key={item.key} className="form-group">
                <label className="form-label">{item.label}</label>
                <div className="slider-container">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={formData[item.key as keyof typeof formData] as number}
                    onChange={(e) => handleInputChange(item.key, Number.parseInt(e.target.value))}
                    className="slider"
                  />
                  <div className="slider-value">{formData[item.key as keyof typeof formData]}/10</div>
                </div>
              </div>
            ))}
          </div>
        )

      case 3:
        return (
          <div>
            <div className="form-group">
              <label className="form-label">Monthly Budget (Housing)</label>
              <div className="form-radio-group">
                {[
                  { value: "under_25000", label: "Under ₹25,000" },
                  { value: "25000_50000", label: "₹25,000 - ₹50,000" },
                  { value: "50000_100000", label: "₹50,000 - ₹1,00,000" },
                  { value: "over_100000", label: "Over ₹1,00,000" },
                ].map((option) => (
                  <div key={option.value} className="form-radio-item">
                    <input
                      type="radio"
                      id={option.value}
                      name="budget_range"
                      value={option.value}
                      checked={formData.budget_range === option.value}
                      onChange={(e) => handleInputChange("budget_range", e.target.value)}
                      className="form-radio"
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Primary Commute Method</label>
              <select
                value={formData.commute_method}
                onChange={(e) => handleInputChange("commute_method", e.target.value)}
                className="form-select"
              >
                <option value="">Select commute method</option>
                <option value="metro">Metro/Subway</option>
                <option value="bus">Bus</option>
                <option value="auto">Auto/Taxi</option>
                <option value="bike">Two-wheeler</option>
                <option value="car">Car</option>
                <option value="walk">Walking</option>
                <option value="wfh">Work from Home</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Work Location (if applicable)</label>
              <input
                type="text"
                value={formData.work_location}
                onChange={(e) => handleInputChange("work_location", e.target.value)}
                placeholder="e.g., Bandra, Gurgaon, Whitefield"
                className="form-input"
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.age_group && formData.city_preference
      case 1:
        return formData.lifestyle
      case 2:
        return true
      case 3:
        return formData.budget_range && formData.commute_method
      default:
        return false
    }
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
        <div className="form-container">
          {/* Progress Indicator */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: index <= currentStep ? "#2563eb" : "#e5e7eb",
                  color: index <= currentStep ? "white" : "#666",
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#2563eb" }}>{steps[currentStep].title}</h2>
          <p style={{ textAlign: "center", marginBottom: "2rem", color: "#666" }}>{steps[currentStep].description}</p>

          {renderStep()}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="btn"
              style={{
                backgroundColor: currentStep === 0 ? "#e5e7eb" : "#6b7280",
                color: "white",
                cursor: currentStep === 0 ? "not-allowed" : "pointer",
              }}
            >
              Previous
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceed()}
                className="btn btn-primary"
                style={{
                  opacity: canProceed() ? 1 : 0.5,
                  cursor: canProceed() ? "pointer" : "not-allowed",
                }}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="btn btn-primary"
                style={{
                  opacity: canProceed() ? 1 : 0.5,
                  cursor: canProceed() ? "pointer" : "not-allowed",
                }}
              >
                Get My Matches
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
