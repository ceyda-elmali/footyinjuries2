"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back to Home */}
      <div className="w-full bg-card/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>

      {/* Header */}
      <section className="w-full bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About FootyInjuries.com</h1>
          <p className="text-xl text-muted-foreground">
            Your trusted source for real-time football injury updates and player availability information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FootyInjuries.com is dedicated to providing the most accurate and up-to-date information about football player injuries across all major leagues worldwide. We understand that injuries can significantly impact team performance, fantasy football decisions, and betting strategies.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold mb-1">Real-Time Updates</h3>
                    <p className="text-muted-foreground">Get instant notifications about player injuries as they happen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold mb-1">Comprehensive Coverage</h3>
                    <p className="text-muted-foreground">Track injuries across Premier League, La Liga, Bundesliga, Serie A, Ligue 1, and more</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold mb-1">Detailed Analysis</h3>
                    <p className="text-muted-foreground">Understand injury severity, expected return dates, and team impact</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold mb-1">AI-Powered Insights</h3>
                    <p className="text-muted-foreground">Advanced analytics to predict recovery timelines and performance impact</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Why Trust Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of sports data analysts and medical experts work around the clock to verify every piece of information. We source our data from official club announcements, trusted medical reports, and verified insider sources to ensure you always have the most reliable injury information.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-center text-muted-foreground">
                Have questions or feedback? <a href="/contact" className="text-primary hover:underline font-semibold">Contact us</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
