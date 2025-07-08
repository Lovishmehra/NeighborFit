import { type NextRequest, NextResponse } from "next/server"

// Indian neighborhood data
const indianNeighborhoods = [
  // Mumbai
  {
    name: "Bandra West",
    city: "Mumbai, Maharashtra",
    area_type: "Upscale Suburban",
    characteristics: {
      safety: 85,
      commute: 80,
      nightlife: 90,
      family_friendly: 75,
      cost_of_living: 30, // Lower = more expensive
      transport: 85,
    },
    median_rent: "₹80,000 - ₹1,20,000",
    demographics: {
      age_group_fit: { "18-25": 80, "26-35": 90, "36-50": 85, "50+": 70 },
      lifestyle_fit: { urban: 95, professional: 85, family: 75, balanced: 90 },
      city_fit: { mumbai: 100, delhi: 0, bangalore: 0, pune: 0, chennai: 0, hyderabad: 0, kolkata: 0 },
    },
  },
  {
    name: "Andheri East",
    city: "Mumbai, Maharashtra",
    area_type: "Commercial Hub",
    characteristics: {
      safety: 75,
      commute: 90,
      nightlife: 70,
      family_friendly: 80,
      cost_of_living: 50,
      transport: 95,
    },
    median_rent: "₹45,000 - ₹75,000",
    demographics: {
      age_group_fit: { "18-25": 85, "26-35": 95, "36-50": 80, "50+": 65 },
      lifestyle_fit: { urban: 80, professional: 95, family: 75, balanced: 85 },
      city_fit: { mumbai: 100, delhi: 0, bangalore: 0, pune: 0, chennai: 0, hyderabad: 0, kolkata: 0 },
    },
  },

  // Delhi NCR
  {
    name: "Gurgaon Sector 29",
    city: "Delhi NCR, Haryana",
    area_type: "IT Hub",
    characteristics: {
      safety: 80,
      commute: 85,
      nightlife: 85,
      family_friendly: 70,
      cost_of_living: 40,
      transport: 75,
    },
    median_rent: "₹35,000 - ₹60,000",
    demographics: {
      age_group_fit: { "18-25": 90, "26-35": 95, "36-50": 75, "50+": 60 },
      lifestyle_fit: { urban: 90, professional: 95, family: 70, balanced: 85 },
      city_fit: { mumbai: 0, delhi: 100, bangalore: 0, pune: 0, chennai: 0, hyderabad: 0, kolkata: 0 },
    },
  },
  {
    name: "Lajpat Nagar",
    city: "Delhi NCR, Delhi",
    area_type: "Central Delhi",
    characteristics: {
      safety: 70,
      commute: 95,
      nightlife: 80,
      family_friendly: 85,
      cost_of_living: 65,
      transport: 90,
    },
    median_rent: "₹25,000 - ₹45,000",
    demographics: {
      age_group_fit: { "18-25": 85, "26-35": 80, "36-50": 90, "50+": 85 },
      lifestyle_fit: { urban: 85, professional: 80, family: 90, balanced: 85 },
      city_fit: { mumbai: 0, delhi: 100, bangalore: 0, pune: 0, chennai: 0, hyderabad: 0, kolkata: 0 },
    },
  },

  // Bangalore
  {
    name: "Koramangala",
    city: "Bangalore, Karnataka",
    area_type: "Tech Hub",
    characteristics: {
      safety: 85,
      commute: 70,
      nightlife: 95,
      family_friendly: 75,
      cost_of_living: 45,
      transport: 70,
    },
    median_rent: "₹30,000 - ₹55,000",
    demographics: {
      age_group_fit: { "18-25": 95, "26-35": 90, "36-50": 75, "50+": 60 },
      lifestyle_fit: { urban: 95, professional: 90, family: 70, balanced: 85 },
      city_fit: { mumbai: 0, delhi: 0, bangalore: 100, pune: 0, chennai: 0, hyderabad: 0, kolkata: 0 },
    },
  },
  {
    name: "Whitefield",
    city: "Bangalore, Karnataka",
    area_type: "IT Corridor",
    characteristics: {
      safety: 90,
      commute: 60,
      nightlife: 70,
      family_friendly: 90,
      cost_of_living: 55,
      transport: 65,
    },
    median_rent: "₹25,000 - ₹45,000",
    demographics: {
      age_group_fit: { "18-25": 75, "26-35": 85, "36-50": 95, "50+": 80 },
      lifestyle_fit: { urban: 70, professional: 90, family: 95, balanced: 85 },
      city_fit: { mumbai: 0, delhi: 0, bangalore: 100, pune: 0, chennai: 0, hyderabad: 0, kolkata: 0 },
    },
  },

  // Pune
  {
    name: "Koregaon Park",
    city: "Pune, Maharashtra",
    area_type: "Upscale Area",
    characteristics: {
      safety: 85,
      commute: 75,
      nightlife: 85,
      family_friendly: 80,
      cost_of_living: 50,
      transport: 70,
    },
    median_rent: "₹25,000 - ₹45,000",
    demographics: {
      age_group_fit: { "18-25": 85, "26-35": 90, "36-50": 85, "50+": 75 },
      lifestyle_fit: { urban: 90, professional: 85, family: 80, balanced: 90 },
      city_fit: { mumbai: 0, delhi: 0, bangalore: 0, pune: 100, chennai: 0, hyderabad: 0, kolkata: 0 },
    },
  },

  // Chennai
  {
    name: "Anna Nagar",
    city: "Chennai, Tamil Nadu",
    area_type: "Residential Hub",
    characteristics: {
      safety: 90,
      commute: 80,
      nightlife: 65,
      family_friendly: 95,
      cost_of_living: 60,
      transport: 85,
    },
    median_rent: "₹20,000 - ₹35,000",
    demographics: {
      age_group_fit: { "18-25": 70, "26-35": 80, "36-50": 95, "50+": 90 },
      lifestyle_fit: { urban: 75, professional: 85, family: 95, balanced: 85 },
      city_fit: { mumbai: 0, delhi: 0, bangalore: 0, pune: 0, chennai: 100, hyderabad: 0, kolkata: 0 },
    },
  },

  // Hyderabad
  {
    name: "Hitech City",
    city: "Hyderabad, Telangana",
    area_type: "IT Hub",
    characteristics: {
      safety: 85,
      commute: 85,
      nightlife: 80,
      family_friendly: 75,
      cost_of_living: 55,
      transport: 80,
    },
    median_rent: "₹20,000 - ₹40,000",
    demographics: {
      age_group_fit: { "18-25": 90, "26-35": 95, "36-50": 80, "50+": 65 },
      lifestyle_fit: { urban: 85, professional: 95, family: 75, balanced: 85 },
      city_fit: { mumbai: 0, delhi: 0, bangalore: 0, pune: 0, chennai: 0, hyderabad: 100, kolkata: 0 },
    },
  },
]

function calculateScore(neighborhood: any, preferences: any) {
  const weights = {
    safety: preferences.safety_importance / 10,
    commute: preferences.commute_importance / 10,
    nightlife: preferences.nightlife_importance / 10,
    family_friendly: preferences.family_importance / 10,
    cost_of_living: preferences.cost_importance / 10,
    transport: preferences.transport_importance / 10,
  }

  let totalScore = 0
  let totalWeight = 0

  Object.entries(weights).forEach(([factor, weight]) => {
    if (neighborhood.characteristics[factor] !== undefined) {
      totalScore += neighborhood.characteristics[factor] * weight
      totalWeight += weight
    }
  })

  const baseScore = totalWeight > 0 ? totalScore / totalWeight : 0

  // Apply demographic bonuses
  const ageBonus = neighborhood.demographics.age_group_fit[preferences.age_group] || 0
  const lifestyleBonus = neighborhood.demographics.lifestyle_fit[preferences.lifestyle] || 0
  const cityBonus = neighborhood.demographics.city_fit[preferences.city_preference] || 0

  // If city doesn't match, heavily penalize
  if (cityBonus === 0) return 0

  const finalScore = baseScore * 0.6 + ageBonus * 0.15 + lifestyleBonus * 0.15 + cityBonus * 0.1

  return Math.round(Math.min(100, Math.max(0, finalScore)))
}

function generateInsights(neighborhood: any, preferences: any) {
  const highlights = []
  const concerns = []

  if (neighborhood.characteristics.safety >= 85) {
    highlights.push("Excellent safety with good security and low crime rates")
  }
  if (neighborhood.characteristics.transport >= 85) {
    highlights.push("Great connectivity with metro/bus access")
  }
  if (neighborhood.characteristics.nightlife >= 80 && preferences.nightlife_importance >= 7) {
    highlights.push("Vibrant nightlife with restaurants and entertainment")
  }
  if (neighborhood.characteristics.family_friendly >= 85 && preferences.family_importance >= 7) {
    highlights.push("Family-friendly with good schools and parks")
  }
  if (neighborhood.characteristics.commute >= 85) {
    highlights.push("Excellent connectivity to major business areas")
  }

  if (neighborhood.characteristics.cost_of_living <= 40) {
    concerns.push("Higher cost of living area")
  }
  if (neighborhood.characteristics.commute <= 60) {
    concerns.push("May have traffic congestion during peak hours")
  }
  if (neighborhood.characteristics.transport <= 60) {
    concerns.push("Limited public transport options")
  }

  return { highlights, concerns }
}

export async function POST(request: NextRequest) {
  try {
    const preferences = await request.json()

    // Filter neighborhoods by city preference
    const cityNeighborhoods = indianNeighborhoods.filter(
      (n) => n.demographics.city_fit[preferences.city_preference as keyof typeof n.demographics.city_fit] > 0,
    )

    const scoredNeighborhoods = cityNeighborhoods.map((neighborhood) => {
      const overallScore = calculateScore(neighborhood, preferences)
      const insights = generateInsights(neighborhood, preferences)

      return {
        name: neighborhood.name,
        city: neighborhood.city,
        area_type: neighborhood.area_type,
        overall_score: overallScore,
        scores: neighborhood.characteristics,
        highlights: insights.highlights,
        concerns: insights.concerns,
        median_rent: neighborhood.median_rent,
      }
    })

    const topMatches = scoredNeighborhoods
      .filter((n) => n.overall_score > 0)
      .sort((a, b) => b.overall_score - a.overall_score)
      .slice(0, 5)

    return NextResponse.json(topMatches)
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
