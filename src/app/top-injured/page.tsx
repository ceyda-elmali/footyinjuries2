"use client";
import React, { useState } from "react";

export default function TopInjuredPlayersPage() {
  const [filterSeverity, setFilterSeverity] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("value");

  const topInjuredPlayers = [
    { rank: 1, name: "Erling Haaland", team: "Manchester City", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", position: "Forward", severity: "Moderate", bodyPart: "Ankle", returnDate: "Dec 17, 2025", value: 180, impact: "Critical", initials: "EH" },
    { rank: 2, name: "Kylian Mbappé", team: "Real Madrid", league: "La Liga", flag: "🇪🇸", position: "Forward", severity: "Minor", bodyPart: "Thigh", returnDate: "Dec 14, 2025", value: 180, impact: "High", initials: "KM" },
    { rank: 3, name: "Vinícius Júnior", team: "Real Madrid", league: "La Liga", flag: "🇪🇸", position: "Forward", severity: "Moderate", bodyPart: "Hamstring", returnDate: "Dec 20, 2025", value: 120, impact: "High", initials: "VJ" },
    { rank: 4, name: "Jude Bellingham", team: "Real Madrid", league: "La Liga", flag: "🇪🇸", position: "Midfielder", severity: "Minor", bodyPart: "Ankle", returnDate: "Dec 15, 2025", value: 150, impact: "High", initials: "JB" },
    { rank: 5, name: "Bukayo Saka", team: "Arsenal", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", position: "Forward", severity: "Minor", bodyPart: "Ankle", returnDate: "Dec 18, 2025", value: 120, impact: "High", initials: "BS" },
    { rank: 6, name: "Phil Foden", team: "Manchester City", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", position: "Midfielder", severity: "Moderate", bodyPart: "Muscle", returnDate: "Dec 22, 2025", value: 110, impact: "High", initials: "PF" },
    { rank: 7, name: "Jamal Musiala", team: "Bayern Munich", league: "Bundesliga", flag: "🇩🇪", position: "Midfielder", severity: "Minor", bodyPart: "Ankle", returnDate: "Dec 18, 2025", value: 110, impact: "High", initials: "JM" },
    { rank: 8, name: "Florian Wirtz", team: "Bayer Leverkusen", league: "Bundesliga", flag: "🇩🇪", position: "Midfielder", severity: "Moderate", bodyPart: "Muscle", returnDate: "Dec 22, 2025", value: 130, impact: "High", initials: "FW" },
    { rank: 9, name: "Pedri", team: "Barcelona", league: "La Liga", flag: "🇪🇸", position: "Midfielder", severity: "Moderate", bodyPart: "Thigh", returnDate: "Dec 22, 2025", value: 100, impact: "High", initials: "P" },
    { rank: 10, name: "Kevin De Bruyne", team: "Manchester City", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", position: "Midfielder", severity: "Moderate", bodyPart: "Hamstring", returnDate: "Dec 25, 2025", value: 85, impact: "Critical", initials: "KDB" },
    { rank: 11, name: "Mohamed Salah", team: "Liverpool", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", position: "Forward", severity: "Moderate", bodyPart: "Hamstring", returnDate: "Dec 20, 2025", value: 75, impact: "Critical", initials: "MS" },
    { rank: 12, name: "Trent Alexander-Arnold", team: "Liverpool", league: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", position: "Defender", severity: "Moderate", bodyPart: "Knee", returnDate: "Dec 18, 2025", value: 80, impact: "High", initials: "TAA" },
    { rank: 13, name: "Rafael Leão", team: "AC Milan", league: "Serie A", flag: "🇮🇹", position: "Forward", severity: "Moderate", bodyPart: "Muscle", returnDate: "Dec 19, 2025", value: 90, impact: "High", initials: "RL" },
    { rank: 14, name: "Lautaro Martínez", team: "Inter Milan", league: "Serie A", flag: "🇮🇹", position: "Forward", severity: "Minor", bodyPart: "Ankle", returnDate: "Dec 16, 2025", value: 110, impact: "High", initials: "LM" },
    { rank: 15, name: "Éder Militão", team: "Real Madrid", league: "La Liga", flag: "🇪🇸", position: "Defender", severity: "Severe", bodyPart: "Knee", returnDate: "Feb 2026", value: 70, impact: "Critical", initials: "EM" },
  ];

  const filteredPlayers = topInjuredPlayers.filter(player => 
    filterSeverity === "all" || player.severity.toLowerCase() === filterSeverity
  );

  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    if (sortBy === "value") return b.value - a.value;
    if (sortBy === "returnDate") return new Date(a.returnDate).getTime() - new Date(b.returnDate).getTime();
    return a.rank - b.rank;
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

  const getImpactColor = (impact: string) => {
    if (impact === "Critical") return "text-red-500";
    if (impact === "High") return "text-orange-500";
    return "text-yellow-500";
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Injured Players by Market Value</h1>
          <p className="text-xl text-muted-foreground">High-value players currently sidelined with injuries</p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="w-full py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{topInjuredPlayers.length}</div>
              <div className="text-sm text-muted-foreground">Total Players</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-destructive mb-1">€{topInjuredPlayers.reduce((sum, p) => sum + p.value, 0)}M</div>
              <div className="text-sm text-muted-foreground">Combined Value</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">{topInjuredPlayers.filter(p => p.impact === "Critical").length}</div>
              <div className="text-sm text-muted-foreground">Critical Impact</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-1">{topInjuredPlayers.filter(p => p.severity === "Severe").length}</div>
              <div className="text-sm text-muted-foreground">Severe Injuries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
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
              <label className="block text-sm font-medium mb-2">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="value">Market Value</option>
                <option value="returnDate">Return Date</option>
                <option value="rank">Rank</option>
              </select>
            </div>
            <div className="flex items-end">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-bold text-foreground">{sortedPlayers.length}</span> of {topInjuredPlayers.length} players
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Players Table */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-card border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">#</th>
                    <th className="px-6 py-4 text-left font-semibold">Player</th>
                    <th className="px-6 py-4 text-left font-semibold">League</th>
                    <th className="px-6 py-4 text-left font-semibold">Position</th>
                    <th className="px-6 py-4 text-left font-semibold">Injury</th>
                    <th className="px-6 py-4 text-left font-semibold">Severity</th>
                    <th className="px-6 py-4 text-left font-semibold">Impact</th>
                    <th className="px-6 py-4 text-left font-semibold">Return</th>
                    <th className="px-6 py-4 text-left font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPlayers.map((player, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-card/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-muted-foreground">{player.rank}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">
                            {player.initials}
                          </div>
                          <div>
                            <div className="font-semibold">{player.name}</div>
                            <div className="text-sm text-muted-foreground">{player.team}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{player.flag}</span>
                          <span className="text-sm">{player.league}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">{player.position}</td>
                      <td className="px-6 py-4 text-sm">{player.bodyPart}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getSeverityBg(player.severity)}`}>
                          <span className={getSeverityColor(player.severity)}>{player.severity}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-semibold ${getImpactColor(player.impact)}`}>{player.impact}</span>
                      </td>
                      <td className="px-6 py-4 text-sm">{player.returnDate}</td>
                      <td className="px-6 py-4 font-bold text-primary">€{player.value}M</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
