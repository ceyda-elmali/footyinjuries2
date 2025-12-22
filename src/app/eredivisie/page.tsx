"use client";
import React from "react";

export default function EredivisieInjuries() {
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

      <section className="w-full bg-gradient-to-br from-orange-600/20 via-background to-orange-400/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center text-5xl">
              🇳🇱
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Eredivisie</h1>
              <p className="text-xl text-muted-foreground mb-4">Netherlands</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Season:</span> <span className="font-semibold">2025/26</span>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Gameweek:</span> <span className="font-semibold">14</span>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Last updated:</span> <span className="font-semibold">Nov 27, 2025</span>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center border-l-4 border-destructive">
              <div className="text-5xl font-bold text-destructive mb-2">18</div>
              <div className="text-sm font-semibold text-muted-foreground">Total Injuries</div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card rounded-2xl p-12">
            <div className="text-6xl mb-6">⚽</div>
            <h2 className="text-3xl font-bold mb-4">Eredivisie Injury Data</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive injury information for Eredivisie is coming soon. We're working on bringing you detailed player injury reports, return dates, and team-by-team analysis.
            </p>
            <p className="text-sm text-muted-foreground">
              Check back soon for the latest updates on Ajax, PSV, Feyenoord, and all Eredivisie clubs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
