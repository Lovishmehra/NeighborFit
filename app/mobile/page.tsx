"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Heart, Star, ArrowRight, Menu, X, Home, Search, User, Settings } from "lucide-react"
import Link from "next/link"

export default function MobileHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-xl">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">NeighborFit</span>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-100 px-4 py-4">
            <nav className="space-y-3">
              <Link href="/research" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                <Search className="h-5 w-5 text-gray-600" />
                <span>Research</span>
              </Link>
              <Link href="/profile" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                <User className="h-5 w-5 text-gray-600" />
                <span>Profile</span>
              </Link>
              <Link href="/settings" className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                <Settings className="h-5 w-5 text-gray-600" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-1" />
            AI-Powered Matching
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Find Your
            <span className="block text-blue-600">Perfect Neighborhood</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Smart algorithm matches your lifestyle with the ideal neighborhood in minutes.
          </p>

          <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-xl">
            Start Matching
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4 mb-12">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Analysis</h3>
                  <p className="text-purple-100">15+ lifestyle factors analyzed</p>
                </div>
                <div className="text-3xl">🧠</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Perfect Matches</h3>
                  <p className="text-blue-100">95% accuracy guarantee</p>
                </div>
                <div className="text-3xl">🎯</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real Data</h3>
                  <p className="text-green-100">Live neighborhood insights</p>
                </div>
                <div className="text-3xl">📊</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Take Assessment</h3>
                <p className="text-gray-600 text-sm">Answer questions about your lifestyle and preferences</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">AI Analysis</h3>
                <p className="text-gray-600 text-sm">Our algorithm processes your data against neighborhood metrics</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Get Results</h3>
                <p className="text-gray-600 text-sm">Receive personalized neighborhood recommendations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-12">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">10K+</div>
              <div className="text-sm text-gray-600">Happy Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Match Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">5min</div>
              <div className="text-sm text-gray-600">Assessment</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Match?</h2>
          <p className="mb-6 opacity-90">Join thousands who found their perfect neighborhood</p>
          <Button
            size="lg"
            className="w-full bg-white text-blue-600 hover:bg-gray-100 py-4 text-lg rounded-xl font-semibold"
          >
            Start Your Journey
          </Button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <button className="flex flex-col items-center py-2 px-3 text-blue-600">
            <Home className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center py-2 px-3 text-gray-400">
            <Search className="h-5 w-5 mb-1" />
            <span className="text-xs">Search</span>
          </button>
          <button className="flex flex-col items-center py-2 px-3 text-gray-400">
            <Heart className="h-5 w-5 mb-1" />
            <span className="text-xs">Saved</span>
          </button>
          <button className="flex flex-col items-center py-2 px-3 text-gray-400">
            <User className="h-5 w-5 mb-1" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
