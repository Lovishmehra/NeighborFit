import { Button } from "@/components/ui/button"
import { ArrowRight, Circle } from "lucide-react"
import Link from "next/link"

export default function MinimalHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Circle className="h-6 w-6 text-black fill-current" />
              <span className="text-xl font-medium">NeighborFit</span>
            </div>
            <div className="space-x-8">
              <Link href="/research" className="text-gray-600 hover:text-black transition-colors">
                Research
              </Link>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                Start
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <div className="py-32 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-light mb-8 leading-tight tracking-tight">
            Find neighborhoods
            <br />
            <span className="font-medium">that fit your life</span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Data-driven matching algorithm analyzes your preferences and connects you with compatible neighborhoods.
          </p>

          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-base">
            Take Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Process Section */}
        <div className="py-20 border-t border-gray-100">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-medium mb-6 mx-auto">
                1
              </div>
              <h3 className="text-lg font-medium mb-4">Answer Questions</h3>
              <p className="text-gray-600 leading-relaxed">
                Tell us about your lifestyle, preferences, and priorities through our comprehensive assessment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-medium mb-6 mx-auto">
                2
              </div>
              <h3 className="text-lg font-medium mb-4">Algorithm Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our system processes your data against neighborhood characteristics and compatibility metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-medium mb-6 mx-auto">
                3
              </div>
              <h3 className="text-lg font-medium mb-4">Get Matches</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive ranked neighborhood recommendations with detailed explanations and insights.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light mb-2">15+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Factors Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">95%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Match Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">5min</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Assessment Time</div>
            </div>
            <div>
              <div className="text-3xl font-light mb-2">Real</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Data Sources</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 border-t border-gray-100 text-center">
          <h2 className="text-3xl font-light mb-6">Ready to begin?</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Take our assessment and discover neighborhoods that match your lifestyle.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
            Start Assessment
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © 2024 NeighborFit — Systematic neighborhood matching
        </div>
      </footer>
    </div>
  )
}
