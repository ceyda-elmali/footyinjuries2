"use client";
import React, { useState } from "react";

export default function UpcomingMatchesPage() {
  const [filterLeague, setFilterLeague] = useState<string>("all");

  const upcomingMatches = [
    {
      home: "Liverpool",
      away: "Manchester United",
      date: "Dec 15, 2025",
      time: "15:00 GMT",
      league: "Premier League",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      venue: "Anfield",
      injuries: [
        { name: "Mohamed Salah", team: "Liverpool", position: "Forward", severity: "Moderate", injury: "Hamstring", status: "Doubtful" },
        { name: "Casemiro", team: "Manchester United", position: "Midfielder", severity: "Minor", injury: "Ankle", status: "Doubtful" },
        { name: "Luke Shaw", team: "Manchester United", position: "Defender", severity: "Moderate", injury: "Muscle", status: "Out" },
      ],
    },
    {
      home: "Barcelona",
      away: "Real Madrid",
      date: "Dec 16, 2025",
      time: "20:00 CET",
      league: "La Liga",
      flag: "🇪🇸",
      venue: "Camp Nou",
      injuries: [
        { name: "Pedri González", team: "Barcelona", position: "Midfielder", severity: "Minor", injury: "Thigh", status: "Doubtful" },
        { name: "Éder Militão", team: "Real Madrid", position: "Defender", severity: "Severe", injury: "Knee", status: "Out" },
        { name: "Gavi", team: "Barcelona", position: "Midfielder", severity: "Severe", injury: "ACL", status: "Out" },
      ],
    },
    {
      home: "Bayern Munich",
      away: "Borussia Dortmund",
      date: "Dec 17, 2025",
      time: "18:30 CET",
      league: "Bundesliga",
      flag: "🇩🇪",
      venue: "Allianz Arena",
      injuries: [
        { name: "Joshua Kimmich", team: "Bayern Munich", position: "Midfielder", severity: "Severe", injury: "Hamstring", status: "Out" },
        { name: "Jamal Musiala", team: "Bayern Munich", position: "Midfielder", severity: "Minor", injury: "Ankle", status: "Doubtful" },
      ],
    },
    {
      home: "AC Milan",
      away: "Inter Milan",
      date: "Dec 18, 2025",
      time: "20:45 CET",
      league: "Serie A",
      flag: "🇮🇹",
      venue: "San Siro",
      injuries: [
        { name: "Rafael Leão", team: "AC Milan", position: "Forward", severity: "Moderate", injury: "Muscle", status: "Doubtful" },
        { name: "Lautaro Martínez", team: "Inter Milan", position: "Forward", severity: "Minor", injury: "Ankle", status: "Doubtful" },
      ],
    },
    {
      home: "PSG",
      away: "Marseille",
      date: "Dec 19, 2025",
      time: "21:00 CET",
      league: "Ligue 1",
      flag: "🇫🇷",
      venue: "Parc des Princes",
      injuries: [
        { name: "Neymar Jr.", team: "PSG", position: "Forward", severity: "Moderate", injury: "Hamstring", status: "Out" },
        { name: "Pierre Dubois", team: "Marseille", position: "Midfielder", severity: "Minor", injury: "Calf", status: "Doubtful" },
      ],
    },
    {
      home: "Arsenal",
      away: "Chelsea",
      date: "Dec 20, 2025",
      time: "16:30 GMT",
      league: "Premier League",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      venue: "Emirates Stadium",
      injuries: [
        { name: "Bukayo Saka", team: "Arsenal", position: "Forward", severity: "Minor", injury: "Ankle", status: "Doubtful" },
        { name: "Reece James", team: "Chelsea", position: "Defender", severity: "Moderate", injury: "Hamstring", status: "Out" },
      ],
    },
  ];

  const filteredMatches = upcomingMatches.filter(match => 
    filterLeague === "all" || match.league === filterLeague
  );

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Match Injuries</h1>
          <p className="text-xl text-muted-foreground">Injury reports and player availability for upcoming fixtures</p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
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
                Showing <span className="font-bold text-foreground">{filteredMatches.length}</span> of {upcomingMatches.length} matches
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matches Grid */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMatches.map((match, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-transform">
                {/* Match Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{match.flag}</span>
                    <span className="text-sm font-semibold text-muted-foreground">{match.league}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{match.venue}</div>
                </div>

                {/* Teams */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 text-center">
                    <div className="font-bold text-lg">{match.home}</div>
                  </div>
                  <div className="px-4 text-muted-foreground font-semibold">vs</div>
                  <div className="flex-1 text-center">
                    <div className="font-bold text-lg">{match.away}</div>
                  </div>
                </div>

                {/* Match Info */}
                <div className="text-center text-sm text-muted-foreground mb-4">
                  {match.date} • {match.time}
                </div>

                {/* Injury Count */}
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 mb-4 text-center">
                  <div className="text-destructive font-bold">{match.injuries.length} Players Affected</div>
                </div>

                {/* Injuries List */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold mb-2">Injury Report:</div>
                  {match.injuries.map((injury, injIdx) => (
                    <div key={injIdx} className="flex items-center gap-3 p-3 bg-card/50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">
                        {injury.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{injury.name}</div>
                        <div className="text-xs text-muted-foreground">{injury.team} • {injury.position}</div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mb-1 ${getSeverityBg(injury.severity)}`}>
                          <span className={getSeverityColor(injury.severity)}>{injury.severity}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{injury.injury}</div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-semibold ${
                        injury.status === "Out" ? "bg-red-500/10 text-red-500" : "bg-yellow-500/10 text-yellow-500"
                      }`}>
                        {injury.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
