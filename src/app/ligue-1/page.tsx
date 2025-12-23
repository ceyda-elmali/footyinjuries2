"use client";
import React, { useState } from "react";

export default function Ligue1Injuries() {
  const [injuryMapView, setInjuryMapView] = useState<"type" | "severity">("type");

  const latestInjuries = [
    { name: "Kylian Mbappé", team: "PSG", injury: "Thigh Injury", severity: "Minor", returnDate: "Dec 14, 2025", reportedDate: "Nov 28, 2025", initials: "KM" },
    { name: "Neymar Jr.", team: "PSG", injury: "Hamstring", severity: "Moderate", returnDate: "Dec 20, 2025", reportedDate: "Nov 27, 2025", initials: "NJ" },
  ];

  const expectedComebacks = [
    { name: "Kylian Mbappé", team: "PSG", impact: "Critical Impact", daysUntil: 1, returnDate: "Dec 14, 2025", initials: "KM" },
    { name: "Alexandre Lacazette", team: "Lyon", impact: "High Impact", daysUntil: 3, returnDate: "Dec 16, 2025", initials: "AL" },
  ];

  const topInjuredPlayers = [
    { rank: 1, name: "Kylian Mbappé", team: "PSG", injury: "Thigh Injury", status: "Recovery", returnDate: "Dec 14, 2025", value: "€180M", initials: "KM" },
    { rank: 2, name: "Neymar Jr.", team: "PSG", injury: "Hamstring", status: "Recovery", returnDate: "Dec 20, 2025", value: "€90M", initials: "NJ" },
    { rank: 3, name: "Alexandre Lacazette", team: "Lyon", injury: "Ankle", status: "In Treatment", returnDate: "Dec 16, 2025", value: "€15M", initials: "AL" },
    { rank: 4, name: "Jonathan David", team: "Lille", injury: "Muscle Fatigue", status: "Recovery", returnDate: "Dec 15, 2025", value: "€50M", initials: "JD" },
    { rank: 5, name: "Dimitri Payet", team: "Marseille", injury: "Calf Strain", status: "In Treatment", returnDate: "Dec 18, 2025", value: "€8M", initials: "DP" },
  ];

  const injuryByType = [
    { type: "Hamstring Strain", count: 8, percentage: 29, color: "bg-red-500" },
    { type: "Muscle Fatigue", count: 6, percentage: 21, color: "bg-orange-500" },
    { type: "Ankle Injury", count: 5, percentage: 18, color: "bg-yellow-500" },
    { type: "Thigh Injury", count: 5, percentage: 18, color: "bg-blue-500" },
    { type: "Knee Injury", count: 3, percentage: 11, color: "bg-purple-500" },
    { type: "Other", count: 1, percentage: 3, color: "bg-gray-500" },
  ];

  const injuryBySeverity = [
    { severity: "Severe", count: 4, percentage: 14, color: "bg-red-500" },
    { severity: "Moderate", count: 16, percentage: 57, color: "bg-orange-500" },
    { severity: "Minor", count: 8, percentage: 29, color: "bg-yellow-500" },
  ];

  const leagueTable = [
    { rank: 1, team: "PSG", logo: "⚽", injuries: 8, avgSeverity: "Moderate", avgDays: 19, keyInjured: "Kylian Mbappé, Neymar Jr." },
    { rank: 2, team: "Monaco", logo: "⚽", injuries: 5, avgSeverity: "Minor", avgDays: 15, keyInjured: "Wissam Ben Yedder" },
    { rank: 3, team: "Lyon", logo: "⚽", injuries: 4, avgSeverity: "Moderate", avgDays: 16, keyInjured: "Alexandre Lacazette" },
    { rank: 4, team: "Marseille", logo: "⚽", injuries: 4, avgSeverity: "Minor", avgDays: 13, keyInjured: "Dimitri Payet" },
    { rank: 5, team: "Lille", logo: "⚽", injuries: 3, avgSeverity: "Minor", avgDays: 12, keyInjured: "Jonathan David" },
    { rank: 6, team: "Lens", logo: "⚽", injuries: 2, avgSeverity: "Minor", avgDays: 10, keyInjured: "—" },
    { rank: 7, team: "Nice", logo: "⚽", injuries: 2, avgSeverity: "Minor", avgDays: 9, keyInjured: "—" },
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
      <section className="w-full bg-gradient-to-br from-blue-600/20 via-background to-red-600/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-white to-red-600 flex items-center justify-center text-5xl">
              🇫🇷
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Ligue 1</h1>
              <p className="text-xl text-muted-foreground mb-4">France</p>
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
              <div className="text-5xl font-bold text-destructive mb-2">28</div>
              <div className="text-sm font-semibold text-muted-foreground">Total Injuries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Injuries */}
      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Injuries in Ligue 1</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestInjuries.map((player, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center font-bold">
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center font-bold text-lg mx-auto mb-4">
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
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center font-bold text-sm">
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
                          team.injuries > 5 ? "bg-red-500/10 text-red-500" :
                          team.injuries > 3 ? "bg-orange-500/10 text-orange-500" :
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
            <h2 className="text-3xl font-bold mb-6">Week 14 Ligue 1 Injury Report – Last Updated Nov 27, 2025</h2>
            <div className="prose prose-invert max-w-none space-y-4 text-foreground">
              <p className="leading-relaxed">
                Ligue 1 enters Gameweek 14 with PSG dealing with significant injury concerns as they maintain their title challenge.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">PSG</span> are managing without their star duo. Kylian Mbappé is expected back this week from a thigh injury, while Neymar Jr. faces a longer spell on the sidelines with a hamstring problem.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Lyon</span> will be boosted by Alexandre Lacazette's imminent return. The veteran striker has been sidelined with an ankle injury but should feature this weekend.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">Marseille</span> continue to monitor Dimitri Payet's calf strain. The playmaker is a key figure in their European push.
              </p>
              <p className="leading-relaxed">
                Overall, Ligue 1 has recorded 28 active injuries, with most clubs managing their squads carefully ahead of the winter break.
              </p>
              <p className="leading-relaxed font-semibold">
                Stay updated with FootyInjuries.com for the latest Ligue 1 injury news and return dates.
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
