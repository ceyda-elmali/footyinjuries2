"use client";
import React, { useState } from "react";

export default function InjuriesPage() {
  const [filterSeverity, setFilterSeverity] = useState<string>("all");
  const [filterLeague, setFilterLeague] = useState<string>("all");

  const allInjuries = [
    { name: "Mohamed Salah", team: "Liverpool", league: "Premier League", severity: "Moderate", bodyPart: "Hamstring", returnDate: "Dec 20, 2025", reportedDate: "Nov 26, 2025", initials: "MS", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Vinícius Júnior", team: "Real Madrid", league: "La Liga", severity: "Moderate", bodyPart: "Hamstring", returnDate: "Dec 20, 2025", reportedDate: "Nov 26, 2025", initials: "VJ", flag: "🇪🇸" },
    { name: "Kevin De Bruyne", team: "Manchester City", league: "Premier League", severity: "Moderate", bodyPart: "Hamstring", returnDate: "Dec 25, 2025", reportedDate: "Nov 25, 2025", initials: "KDB", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Pedri", team: "Barcelona", league: "La Liga", severity: "Moderate", bodyPart: "Thigh", returnDate: "Dec 22, 2025", reportedDate: "Nov 25, 2025", initials: "P", flag: "🇪🇸" },
    { name: "Jamal Musiala", team: "Bayern Munich", league: "Bundesliga", severity: "Minor", bodyPart: "Ankle", returnDate: "Dec 18, 2025", reportedDate: "Nov 26, 2025", initials: "JM", flag: "🇩🇪" },
    { name: "Bukayo Saka", team: "Arsenal", league: "Premier League", severity: "Minor", bodyPart: "Ankle", returnDate: "Dec 18, 2025", reportedDate: "Nov 24, 2025", initials: "BS", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Éder Militão", team: "Real Madrid", league: "La Liga", severity: "Severe", bodyPart: "Knee", returnDate: "Feb 2026", reportedDate: "Nov 20, 2025", initials: "EM", flag: "🇪🇸" },
    { name: "Gavi", team: "Barcelona", league: "La Liga", severity: "Severe", bodyPart: "ACL", returnDate: "Mar 2026", reportedDate: "Nov 15, 2025", initials: "G", flag: "🇪🇸" },
    { name: "Bruno Fernandes", team: "Manchester United", league: "Premier League", severity: "Minor", bodyPart: "Muscle Fatigue", returnDate: "Dec 16, 2025", reportedDate: "Nov 23, 2025", initials: "BF", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Florian Wirtz", team: "Bayer Leverkusen", league: "Bundesliga", severity: "Moderate", bodyPart: "Muscle", returnDate: "Dec 22, 2025", reportedDate: "Nov 25, 2025", initials: "FW", flag: "🇩🇪" },
  ];

  const filteredInjuries = allInjuries.filter(injury => {
    const severityMatch = filterSeverity === "all" || injury.severity.toLowerCase() === filterSeverity;
    const leagueMatch = filterLeague === "all" || injury.league === filterLeague;
    return severityMatch && leagueMatch;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "severe": return "text-red-500";
      case "moderate": return "text-orange-500";
      case "minor": return "text-yellow-500";
      default: return "text-gray-500";
    }
  };

  const getSeverityBg = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "severe": return "bg-red-500/10 border-red-500/20";
      case "moderate": return "bg-orange-500/10 border-orange-500/20";
      case "minor": return "bg-yellow-500/10 border-yellow-500/20";
      default: return "bg-gray-500/10 border-gray-500/20";
    }
  };

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
      <section className="w-full bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Football Injuries</h1>
          <p className="text-xl text-muted-foreground">Browse all current player injuries across major leagues</p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Filter by Severity</label>
              <select
                value={filterSeverity}
                onChange={(e) => setFilterSeverity(e.target.value)}
                className="px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Severities</option>
                <option value="severe">Severe</option>
                <option value="moderate">Moderate</option>
                <option value="minor">Minor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Filter by League</label>
              <select
                value={filterLeague}
                onChange={(e) => setFilterLeague(e.target.value)}
                className="px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Leagues</option>
                <option value="Premier League">Premier League</option>
                <option value="La Liga">La Liga</option>
                <option value="Bundesliga">Bundesliga</option>
                <option value="Serie A">Serie A</option>
                <option value="Ligue 1">Ligue 1</option>
              </select>
            </div>
            <div className="flex items-end">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filteredInjuries.length}</span> of {allInjuries.length} injuries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Injuries Grid */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInjuries.map((injury, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold">
                    {injury.initials}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">{injury.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <span>{injury.flag}</span>
                      <span>{injury.team}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">League</div>
                    <div className="text-sm font-medium">{injury.league}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Injury</div>
                    <div className="text-sm font-semibold">{injury.bodyPart}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Severity</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getSeverityBg(injury.severity)}`}>
                      <span className={getSeverityColor(injury.severity)}>{injury.severity}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="text-xs text-muted-foreground">Return: <span className="text-foreground font-semibold">{injury.returnDate}</span></div>
                    <div className="text-xs text-muted-foreground">Reported: <span className="text-foreground">{injury.reportedDate}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
