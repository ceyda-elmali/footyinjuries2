"use client";
import React from "react";

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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

      <section className="w-full bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Methodology</h1>
          <p className="text-xl text-muted-foreground">How we collect, verify, and present injury data</p>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
            <p className="text-muted-foreground leading-relaxed">
              We aggregate injury information from multiple trusted sources including official club announcements, press conferences, medical reports, and verified insider sources. Our automated systems monitor these sources 24/7 to ensure real-time updates.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Verification Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every injury report goes through a multi-step verification process:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-accent">•</span> Cross-reference with official club sources</li>
              <li className="flex items-start gap-2"><span className="text-accent">•</span> Verification by sports medicine experts</li>
              <li className="flex items-start gap-2"><span className="text-accent">•</span> Confirmation from multiple independent sources</li>
              <li className="flex items-start gap-2"><span className="text-accent">•</span> Regular updates based on latest medical reports</li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Severity Classification</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 border border-yellow-500/20 text-yellow-500">Minor</span>
                <span className="text-sm text-muted-foreground">1-7 days recovery time</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 border border-orange-500/20 text-orange-500">Moderate</span>
                <span className="text-sm text-muted-foreground">1-4 weeks recovery time</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/20 text-red-500">Severe</span>
                <span className="text-sm text-muted-foreground">1+ months recovery time</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">AI-Powered Predictions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our machine learning models analyze historical injury data, player age, injury type, and recovery patterns to predict return dates and potential re-injury risks. These predictions are continuously refined based on actual outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
