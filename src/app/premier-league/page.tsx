"use client";
import React, { useState } from "react";

export default function PremierLeagueInjuries() {
  const [injuryMapView, setInjuryMapView] = useState<"type" | "severity">("type");

  // Latest injuries data
  const latestInjuries = [
    { name: "Mohamed Salah", team: "Liverpool", injury: "Hamstring Strain", severity: "Moderate", returnDate: "Dec 20, 2025", reportedDate: "Nov 26, 2025", initials: "MS" },
    { name: "Kevin De Bruyne", team: "Manchester City", injury: "Hamstring Strain", severity: "Moderate", returnDate: "Dec 25, 2025", reportedDate: "Nov 25, 2025", initials: "KDB" },
    { name: "Bukayo Saka", team: "Arsenal", injury: "Ankle Injury", severity: "Minor", returnDate: "Dec 18, 2025", reportedDate: "Nov 24, 2025", initials: "BS" },
    { name: "Bruno Fernandes", team: "Manchester United", injury: "Muscle Fatigue", severity: "Minor", returnDate: "Dec 16, 2025", reportedDate: "Nov 23, 2025", initials: "BF" },
  ];

  // Expected comebacks
  const expectedComebacks = [
    { name: "Bruno Fernandes", team: "Manchester United", impact: "High Impact", daysUntil: 3, returnDate: "Dec 16, 2025", initials: "BF" },
    { name: "Diogo Jota", team: "Liverpool", impact: "High Impact", daysUntil: 4, returnDate: "Dec 17, 2025", initials: "DJ" },
    { name: "Erling Haaland", team: "Manchester City", impact: "Critical Impact", daysUntil: 4, returnDate: "Dec 17, 2025", initials: "EH" },
    { name: "Bukayo Saka", team: "Arsenal", impact: "High Impact", daysUntil: 5, returnDate: "Dec 18, 2025", initials: "BS" },
    { name: "Trent Alexander-Arnold", team: "Liverpool", impact: "High Impact", daysUntil: 5, returnDate: "Dec 18, 2025", initials: "TAA" },
  ];

  // Top injured players by market value
  const topInjuredPlayers = [
    { rank: 1, name: "Mohamed Salah", team: "Liverpool", injury: "Hamstring Strain", status: "In Treatment", returnDate: "Dec 20, 2025", value: "€75M", initials: "MS" },
    { rank: 2, name: "Erling Haaland", team: "Manchester City", injury: "Ankle Injury", status: "Recovery", returnDate: "Dec 17, 2025", value: "€180M", initials: "EH" },
    { rank: 3, name: "Kevin De Bruyne", team: "Manchester City", injury: "Hamstring Strain", status: "In Treatment", returnDate: "Dec 25, 2025", value: "€85M", initials: "KDB" },
    { rank: 4, name: "Bukayo Saka", team: "Arsenal", injury: "Ankle Injury", status: "Recovery", returnDate: "Dec 18, 2025", value: "€120M", initials: "BS" },
    { rank: 5, name: "Trent Alexander-Arnold", team: "Liverpool", injury: "Knee Injury", status: "Recovery", returnDate: "Dec 18, 2025", value: "€80M", initials: "TAA" },
    { rank: 6, name: "Bruno Fernandes", team: "Manchester United", injury: "Muscle Fatigue", status: "Recovery", returnDate: "Dec 16, 2025", value: "€70M", initials: "BF" },
    { rank: 7, name: "Reece James", team: "Chelsea", injury: "Hamstring Strain", status: "In Treatment", returnDate: "Jan 10, 2026", value: "€65M", initials: "RJ" },
    { rank: 8, name: "Diogo Jota", team: "Liverpool", injury: "Muscle Fatigue", status: "Recovery", returnDate: "Dec 17, 2025", value: "€60M", initials: "DJ" },
    { rank: 9, name: "Richarlison", team: "Tottenham", injury: "Knee Injury", status: "In Treatment", returnDate: "Dec 22, 2025", value: "€55M", initials: "R" },
    { rank: 10, name: "Ollie Watkins", team: "Aston Villa", injury: "Ankle Sprain", status: "Recovery", returnDate: "Dec 19, 2025", value: "€50M", initials: "OW" },
  ];

  // Injury map data
  const injuryByType = [
    { type: "Hamstring Strain", count: 12, percentage: 26, color: "bg-red-500" },
    { type: "Knee Injury", count: 9, percentage: 19, color: "bg-orange-500" },
    { type: "Ankle Injury", count: 8, percentage: 17, color: "bg-yellow-500" },
    { type: "Muscle Fatigue", count: 7, percentage: 15, color: "bg-blue-500" },
    { type: "Thigh Injury", count: 6, percentage: 13, color: "bg-purple-500" },
    { type: "Other", count: 5, percentage: 10, color: "bg-gray-500" },
  ];

  const injuryBySeverity = [
    { severity: "Severe", count: 8, percentage: 17, color: "bg-red-500" },
    { severity: "Moderate", count: 24, percentage: 51, color: "bg-orange-500" },
    { severity: "Minor", count: 15, percentage: 32, color: "bg-yellow-500" },
  ];

  // League table with injury overview
  const leagueTable = [
    { rank: 1, team: "Liverpool", logo: "⚽", injuries: 7, avgSeverity: "Moderate", avgDays: 18, keyInjured: "Mohamed Salah, Trent Alexander-Arnold" },
    { rank: 2, team: "Manchester City", logo: "⚽", injuries: 12, avgSeverity: "Moderate", avgDays: 22, keyInjured: "Kevin De Bruyne, Erling Haaland" },
    { rank: 3, team: "Arsenal", logo: "⚽", injuries: 5, avgSeverity: "Minor", avgDays: 14, keyInjured: "Bukayo Saka" },
    { rank: 4, team: "Chelsea", logo: "⚽", injuries: 6, avgSeverity: "Moderate", avgDays: 16, keyInjured: "Reece James, Wesley Fofana" },
    { rank: 5, team: "Manchester United", logo: "⚽", injuries: 4, avgSeverity: "Minor", avgDays: 12, keyInjured: "Bruno Fernandes" },
    { rank: 6, team: "Tottenham", logo: "⚽", injuries: 3, avgSeverity: "Minor", avgDays: 10, keyInjured: "Richarlison" },
    { rank: 7, team: "Newcastle United", logo: "⚽", injuries: 2, avgSeverity: "Minor", avgDays: 8, keyInjured: "Callum Wilson" },
    { rank: 8, team: "Brighton", logo: "⚽", injuries: 1, avgSeverity: "Minor", avgDays: 7, keyInjured: "—" },
    { rank: 9, team: "Aston Villa", logo: "⚽", injuries: 2, avgSeverity: "Moderate", avgDays: 15, keyInjured: "Ollie Watkins" },
    { rank: 10, team: "West Ham", logo: "⚽", injuries: 3, avgSeverity: "Minor", avgDays: 11, keyInjured: "—" },
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
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>

      {/* Header Section */}
      <section className="w-full bg-gradient-to-br from-primary/20 via-background to-accent/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* League Badge */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl">
              🏴󠁧󠁢󠁥󠁮󠁧󠁿
            </div>
            
            {/* League Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Premier League</h1>
              <p className="text-xl text-muted-foreground mb-4">England</p>
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

            {/* Total Injuries Badge */}
            <div className="glass-card rounded-2xl p-6 text-center border-l-4 border-destructive">
              <div className="text-5xl font-bold text-destructive mb-2">47</div>
              <div className="text-sm font-semibold text-muted-foreground">Total Injuries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Injuries */}
      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Injuries in Premier League</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestInjuries.map((player, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {expectedComebacks.map((player, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform border-t-4 border-accent">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center font-bold text-lg mx-auto mb-4">
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
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">
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
            {/* Toggle Buttons */}
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

            {/* Injury Chart */}
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

              {/* Pie Chart Representation */}
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    {injuryMapView === "type" ? (
                      injuryByType.map((item, idx) => {
                        const prevPercentage = injuryByType.slice(0, idx).reduce((sum, i) => sum + i.percentage, 0);
                        const strokeDasharray = `${item.percentage} ${100 - item.percentage}`;
                        const strokeDashoffset = -prevPercentage;
                        return (
                          <circle
                            key={idx}
                            cx="50"
                            cy="50"
                            r="15.9"
                            fill="transparent"
                            stroke={item.color.replace('bg-', '')}
                            strokeWidth="32"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            className={item.color.replace('bg-', 'stroke-')}
                          />
                        );
                      })
                    ) : (
                      injuryBySeverity.map((item, idx) => {
                        const prevPercentage = injuryBySeverity.slice(0, idx).reduce((sum, i) => sum + i.percentage, 0);
                        const strokeDasharray = `${item.percentage} ${100 - item.percentage}`;
                        const strokeDashoffset = -prevPercentage;
                        return (
                          <circle
                            key={idx}
                            cx="50"
                            cy="50"
                            r="15.9"
                            fill="transparent"
                            strokeWidth="32"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            className={item.color.replace('bg-', 'stroke-')}
                          />
                        );
                      })
                    )}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* League Table - Injury Overview */}
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
            <h2 className="text-3xl font-bold mb-6">Week 14 Premier League Injury Report – Last Updated Nov 27, 2025</h2>
            
            <div className="prose prose-invert max-w-none space-y-4 text-foreground">
              <p className="leading-relaxed">
                The Premier League enters Gameweek 14 with several high-profile players still sidelined, though there's positive news on the horizon as key stars prepare for their comebacks.
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold">Liverpool</span> continues to manage a challenging injury situation with Mohamed Salah's hamstring strain keeping him out until late December. The Egyptian forward's absence has been felt, but Diogo Jota is set to return this weekend, providing a timely boost for the Reds' attacking options. Trent Alexander-Arnold is also nearing full fitness and should be available for selection within days.
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold">Manchester City</span> faces their own challenges with Kevin De Bruyne and Erling Haaland both recovering from injuries. The Belgian midfielder's hamstring problem will keep him out until Christmas, but there's better news regarding Haaland. The Norwegian striker has progressed well in his recovery from an ankle injury and is expected to feature in City's next match, a massive boost for Pep Guardiola's side.
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold">Arsenal's</span> injury concerns are relatively minor in comparison, with Bukayo Saka the only significant absentee. The young English winger is recovering from an ankle problem and should be back in action before the week is out. His return couldn't come at a better time as the Gunners push for a top-four finish.
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold">Manchester United</span> received welcome news as Bruno Fernandes is set to shake off his muscle fatigue ahead of schedule. The Portuguese midfielder has been crucial to United's recent form, and his imminent return gives manager Erik ten Hag a full-strength squad to choose from.
              </p>

              <p className="leading-relaxed">
                <span className="font-semibold">Chelsea</span> continue to navigate a difficult period with Reece James facing an extended spell on the sidelines. The England defender's recurring hamstring issues remain a concern, with the club taking a cautious approach to his rehabilitation. He's not expected back until the new year.
              </p>

              <p className="leading-relaxed">
                Looking at the broader picture, the league has recorded 47 active injuries across all 20 teams, with hamstring strains accounting for over a quarter of all cases. The congested fixture schedule continues to take its toll, particularly on teams competing in European competitions.
              </p>

              <p className="leading-relaxed">
                The coming week promises to be pivotal for several clubs as key players return to action. Fantasy managers should monitor the situation closely, as the return of premium assets like Haaland and Jota could significantly impact team selections and captaincy choices.
              </p>

              <p className="leading-relaxed font-semibold">
                Stay tuned to FootyInjuries.com for the latest updates, expected return dates, and detailed injury analysis throughout the season.
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
