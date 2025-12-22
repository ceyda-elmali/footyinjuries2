"use client";
import React from "react";

const leaguePages = [
  { path: "ligue-1", name: "Ligue 1", country: "France", flag: "🇫🇷", colors: "from-blue-600/20 via-background to-red-600/20", gradient: "from-blue-600 via-white to-red-600", injuries: 28, gameweek: 14 },
  { path: "primeira-liga", name: "Primeira Liga", country: "Portugal", flag: "🇵🇹", colors: "from-green-600/20 via-background to-red-600/20", gradient: "from-green-600 to-red-600", injuries: 22, gameweek: 13 },
  { path: "eredivisie", name: "Eredivisie", country: "Netherlands", flag: "🇳🇱", colors: "from-orange-600/20 via-background to-orange-400/20", gradient: "from-orange-600 to-orange-400", injuries: 18, gameweek: 14 },
  { path: "brazilian-serie-a", name: "Brazilian Serie A", country: "Brazil", flag: "🇧🇷", colors: "from-green-600/20 via-background to-yellow-400/20", gradient: "from-green-600 to-yellow-400", injuries: 31, gameweek: 35 },
  { path: "mls", name: "MLS", country: "United States", flag: "🇺🇸", colors: "from-blue-600/20 via-background to-red-600/20", gradient: "from-blue-600 to-red-600", injuries: 26, gameweek: 32 },
  { path: "championship", name: "Championship", country: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", colors: "from-primary/20 via-background to-accent/20", gradient: "from-primary to-accent", injuries: 41, gameweek: 18 },
];

export default function Ligue1Injuries() {
  const league = leaguePages[0];
  
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

      <section className={`w-full bg-gradient-to-br ${league.colors} border-b border-border`}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${league.gradient} flex items-center justify-center text-5xl`}>
              {league.flag}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{league.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{league.country}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Season:</span> <span className="font-semibold">2025/26</span>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Gameweek:</span> <span className="font-semibold">{league.gameweek}</span>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Last updated:</span> <span className="font-semibold">Nov 27, 2025</span>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center border-l-4 border-destructive">
              <div className="text-5xl font-bold text-destructive mb-2">{league.injuries}</div>
              <div className="text-sm font-semibold text-muted-foreground">Total Injuries</div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card rounded-2xl p-12">
            <div className="text-6xl mb-6">🏥</div>
            <h2 className="text-3xl font-bold mb-4">{league.name} Injury Data</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive injury information for {league.name} is coming soon. We're working on bringing you detailed player injury reports, return dates, and team-by-team analysis.
            </p>
            <p className="text-sm text-muted-foreground">
              Check back soon for the latest updates on all {league.name} clubs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
