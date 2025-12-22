"use client";
import React, { useState } from "react";

export default function BundesligaInjuries() {
  const [injuryMapView, setInjuryMapView] = useState<"type" | "severity">("type");

  const latestInjuries = [
    { name: "Jamal Musiala", team: "Bayern Munich", injury: "Ankle Injury", severity: "Minor", returnDate: "Dec 18, 2025", reportedDate: "Nov 26, 2025", initials: "JM" },
    { name: "Florian Wirtz", team: "Bayer Leverkusen", injury: "Muscle Strain", severity: "Moderate", returnDate: "Dec 22, 2025", reportedDate: "Nov 25, 2025", initials: "FW" },
  ];

  const expectedComebacks = [
    { name: "Jamal Musiala", team: "Bayern Munich", impact: "High Impact", daysUntil: 5, returnDate: "Dec 18, 2025", initials: "JM" },
    { name: "Florian Wirtz", team: "Bayer Leverkusen", impact: "Critical Impact", daysUntil: 9, returnDate: "Dec 22, 2025", initials: "FW" },
  ];

  const topInjuredPlayers = [
    { rank: 1, name: "Jamal Musiala", team: "Bayern Munich", injury: "Ankle Injury", status: "Recovery", returnDate: "Dec 18, 2025", value: "€110M", initials: "JM" },
    { rank: 2, name: "Florian Wirtz", team: "Bayer Leverkusen", injury: "Muscle Strain", status: "In Treatment", returnDate: "Dec 22, 2025", value: "€130M", initials: "FW" },
    { rank: 3, name: "Serge Gnabry", team: "Bayern Munich", injury: "Hamstring Strain", status: "Recovery", returnDate: "Dec 20, 2025", value: "€65M", initials: "SG" },
    { rank: 4, name: "Dayot Upamecano", team: "Bayern Munich", injury: "Knee Injury", status: "In Treatment", returnDate: "Jan 2026", value: "€60M", initials: "DU" },
    { rank: 5, name: "Karim Adeyemi", team: "Borussia Dortmund", injury: "Thigh Injury", status: "Recovery", returnDate: "Dec 19, 2025", value: "€55M", initials: "KA" },
  ];

  const injuryByType = [
    { type: "Hamstring Strain", count: 9, percentage: 26, color: "bg-red-500" },
    { type: "Knee Injury", count: 7, percentage: 20, color: "bg-orange-500" },
    { type: "Ankle Injury", count: 6, percentage: 17, color: "bg-yellow-500" },
    { type: "Muscle Fatigue", count: 6, percentage: 17, color: "bg-blue-500" },
    { type: "Thigh Injury", count: 5, percentage: 14, color: "bg-purple-500" },
    { type: "Other", count: 2, percentage: 6, color: "bg-gray-500" },
  ];

  const injuryBySeverity = [
    { severity: "Severe", count: 5, percentage: 14, color: "bg-red-500" },
    { severity: "Moderate", count: 18, percentage: 52, color: "bg-orange-500" },
    { severity: "Minor", count: 12, percentage: 34, color: "bg-yellow-500" },
  ];

  const leagueTable = [
    { rank: 1, team: "Bayern Munich", logo: "⚽", injuries: 9, avgSeverity: "Moderate", avgDays: 20, keyInjured: "Jamal Musiala, Serge Gnabry" },
    { rank: 2, team: "Bayer Leverkusen", logo: "⚽", injuries: 6, avgSeverity: "Moderate", avgDays: 18, keyInjured: "Florian Wirtz" },
    { rank: 3, team: "Borussia Dortmund", logo: "⚽", injuries: 5, avgSeverity: "Minor", avgDays: 15, keyInjured: "Karim Adeyemi" },
    { rank: 4, team: "RB Leipzig", logo: "⚽", injuries: 4, avgSeverity: "Minor", avgDays: 12, keyInjured: "—" },
    { rank: 5, team: "Union Berlin", logo: "⚽", injuries: 3, avgSeverity: "Minor", avgDays: 10, keyInjured: "—" },
    { rank: 6, team: "Freiburg", logo: "⚽", injuries: 2, avgSeverity: "Minor", avgDays: 8, keyInjured: "—" },
    { rank: 7, team: "Eintracht Frankfurt", logo: "⚽", injuries: 2, avgSeverity: "Minor", avgDays: 9, keyInjured: "—" },
    { rank: 8, team: "Wolfsburg", logo: "⚽", injuries: 1, avgSeverity: "Minor", avgDays: 7, keyInjured: "—" },
    { rank: 9, team: "Borussia M'gladbach", logo: "⚽", injuries: 1, avgSeverity: "Minor", avgDays: 6, keyInjured: "—" },
    { rank: 10, team: "Hoffenheim", logo: "⚽", injuries: 2, avgSeverity: "Moderate", avgDays: 13, keyInjured: "—" },
  ];

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
    if (impact.includes("Critical")) return "text-red-500";
    if (impact.includes("High")) return "text-orange-500";
    return "text-yellow-500";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back to Home Button */}
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

      {/* Header Section */}
      <section className="w-full bg-gradient-to-br from-red-600/20 via-background to-yellow-400/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-yellow-400 flex items-center justify-center text-5xl">
              🇩🇪
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Bundesliga</h1>
              <p className="text-xl text-muted-foreground mb-4">Germany</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Season:</span> <span className="font-semibold">2025/26</span>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Gameweek:</span> <span className="font-semibold">13</span>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Last updated:</span> <span className="font-semibold">Nov 27, 2025</span>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center border-l-4 border-destructive">
              <div className="text-5xl font-bold text-destructive mb-2">35</div>
              <div className="text-sm font-semibold text-muted-foreground">Total Injuries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Injuries */}
      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Injuries in Bundesliga</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestInjuries.map((player, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-yellow-400 flex items-center justify-center font-bold">
                    {player.initials}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">{player.name}</div>
                    <div className="text-sm text-muted-foreground">{player.team}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-semibold mb-1">{player.injury}</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getSeverityBg(player.severity)}`}>
                      <span className={getSeverityColor(player.severity)}>{player.severity}</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="text-muted-foreground">Return: <span className="text-foreground font-semibold">{player.returnDate}</span></div>
                    <div className="text-muted-foreground">Reported: <span className="text-foreground">{player.reportedDate}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Comebacks */}
      <section className="w-full py-12 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Expected Comebacks This Week</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expectedComebacks.map((player, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform border-t-4 border-accent">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-red-600 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {player.initials}
                </div>
                <div className="font-bold mb-1">{player.name}</div>
                <div className="text-sm text-muted-foreground mb-3">{player.team}</div>
                <div className={`text-sm font-semibold mb-2 ${getImpactColor(player.impact)}`}>
                  {player.impact}
                </div>
                <div className="text-xs text-muted-foreground mb-1">{player.daysUntil} days until return</div>
                <div className="text-sm font-semibold">{player.returnDate}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Injured Players Table */}
      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Top Injured Players by Market Value</h2>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-card border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">#</th>
                    <th className="px-6 py-4 text-left font-semibold">Player</th>
                    <th className="px-6 py-4 text-left font-semibold">Club</th>
                    <th className="px-6 py-4 text-left font-semibold">Injury</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                    <th className="px-6 py-4 text-left font-semibold">Return</th>
                    <th className="px-6 py-4 text-left font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {topInjuredPlayers.map((player, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-card/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-muted-foreground">{player.rank}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-yellow-400 flex items-center justify-center font-bold text-sm">
                            {player.initials}
                          </div>
                          <span className="font-semibold">{player.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">{player.team}</td>
                      <td className="px-6 py-4">{player.injury}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          player.status === "In Treatment" ? "bg-orange-500/10 text-orange-500" : "bg-green-500/10 text-green-500"
                        }`}>
                          {player.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{player.returnDate}</td>
                      <td className="px-6 py-4 font-bold text-primary">{player.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Injury Map */}
      <section className="w-full py-12 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Injury Map</h2>
          <div className="glass-card rounded-xl p-8">
            <div className="flex gap-4 mb-8 justify-center">
              <button
                onClick={() => setInjuryMapView("type")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  injuryMapView === "type" ? "bg-primary text-primary-foreground" : "bg-card hover:bg-card/80"
                }`}
              >
                By Type
              </button>
              <button
                onClick={() => setInjuryMapView("severity")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  injuryMapView === "severity" ? "bg-primary text-primary-foreground" : "bg-card hover:bg-card/80"
                }`}
              >
                By Severity
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {injuryMapView === "type" ? (
                  injuryByType.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{item.type}</span>
                        <span className="text-muted-foreground">{item.count} ({item.percentage}%)</span>
                      </div>
                      <div className="w-full bg-card rounded-full h-3 overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))
                ) : (
                  injuryBySeverity.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{item.severity}</span>
                        <span className="text-muted-foreground">{item.count} ({item.percentage}%)</span>
                      </div>
                      <div className="w-full bg-card rounded-full h-3 overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  {injuryMapView === "type" ? (
                    injuryByType.map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white font-bold mb-2`}>
                          {item.count}
                        </div>
                        <div className="text-xs font-medium">{item.type.split(' ')[0]}</div>
                      </div>
                    ))
                  ) : (
                    injuryBySeverity.map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white font-bold mb-2`}>
                          {item.count}
                        </div>
                        <div className="text-xs font-medium">{item.severity}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* League Table */}
      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">League Table - Injury Overview</h2>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-card border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">#</th>
                    <th className="px-6 py-4 text-left font-semibold">Team</th>
                    <th className="px-6 py-4 text-left font-semibold">Injuries</th>
                    <th className="px-6 py-4 text-left font-semibold">Avg Severity</th>
                    <th className="px-6 py-4 text-left font-semibold">Avg Days</th>
                    <th className="px-6 py-4 text-left font-semibold">Key Injured</th>
                  </tr>
                </thead>
                <tbody>
                  {leagueTable.map((team, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-card/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-muted-foreground">{team.rank}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{team.logo}</span>
                          <span className="font-semibold">{team.team}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          team.injuries > 8 ? "bg-red-500/10 text-red-500" :
                          team.injuries > 4 ? "bg-orange-500/10 text-orange-500" :
                          "bg-green-500/10 text-green-500"
                        }`}>
                          {team.injuries}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={getSeverityColor(team.avgSeverity)}>{team.avgSeverity}</span>
                      </td>
                      <td className="px-6 py-4 font-semibold">{team.avgDays}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{team.keyInjured}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Report */}
      <section className="w-full py-12 bg-card/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Week 13 Bundesliga Injury Report – Last Updated Nov 27, 2025</h2>
            <div className="prose prose-invert max-w-none space-y-4 text-foreground">
              <p className="leading-relaxed">
                The Bundesliga enters Gameweek 13 with a relatively manageable injury situation across the league, though Bayern Munich continues to deal with several key absences.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Bayern Munich</span> are managing without Jamal Musiala and Serge Gnabry, both dealing with muscular issues. The young German midfielder should return before the winter break, providing a timely boost for the title race.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Bayer Leverkusen</span> face a crucial period with Florian Wirtz recovering from a muscle strain. The talented playmaker is expected back before Christmas, crucial for their title challenge.
              </p>
              <p className="leading-relaxed">
                Overall, the Bundesliga has recorded 35 active injuries, lower than other major European leagues. The upcoming winter break will provide valuable recovery time for all clubs.
              </p>
              <p className="leading-relaxed font-semibold">
                Stay updated with FootyInjuries.com for the latest Bundesliga injury news and return dates.
              </p>
              <div className="border-t border-border pt-6 mt-8 text-sm text-muted-foreground flex items-center justify-between">
                <span>Last updated: Nov 27, 2025</span>
                <span>•</span>
                <span>Stay informed with <span className="text-primary font-semibold">FootyInjuries.com</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
