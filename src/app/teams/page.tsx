"use client";
import React, { useState } from "react";

export default function TeamsPage() {
  const [filterLeague, setFilterLeague] = useState<string>("all");

  const allTeams = [
    { name: "Manchester City", league: "Premier League", injuries: 12, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", emoji: "🔵", avgDays: 22, keyPlayers: "Kevin De Bruyne, Erling Haaland" },
    { name: "Real Madrid", league: "La Liga", injuries: 10, flag: "🇪🇸", emoji: "⚪", avgDays: 21, keyPlayers: "Vinícius Júnior, Éder Militão" },
    { name: "Bayern Munich", league: "Bundesliga", injuries: 9, flag: "🇩🇪", emoji: "🔴", avgDays: 20, keyPlayers: "Jamal Musiala, Serge Gnabry" },
    { name: "Barcelona", league: "La Liga", injuries: 7, flag: "🇪🇸", emoji: "🔴", avgDays: 19, keyPlayers: "Pedri, Gavi" },
    { name: "Liverpool", league: "Premier League", injuries: 7, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", emoji: "🔴", avgDays: 18, keyPlayers: "Mohamed Salah, Trent Alexander-Arnold" },
    { name: "PSG", league: "Ligue 1", injuries: 8, flag: "🇫🇷", emoji: "🔵", avgDays: 17, keyPlayers: "Neymar Jr." },
    { name: "Chelsea", league: "Premier League", injuries: 6, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", emoji: "🔵", avgDays: 16, keyPlayers: "Reece James, Wesley Fofana" },
    { name: "Bayer Leverkusen", league: "Bundesliga", injuries: 6, flag: "🇩🇪", emoji: "🔴", avgDays: 18, keyPlayers: "Florian Wirtz" },
    { name: "Arsenal", league: "Premier League", injuries: 5, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", emoji: "🔴", avgDays: 14, keyPlayers: "Bukayo Saka" },
    { name: "Atlético Madrid", league: "La Liga", injuries: 5, flag: "🇪🇸", emoji: "🔴", avgDays: 15, keyPlayers: "João Félix" },
    { name: "AC Milan", league: "Serie A", injuries: 6, flag: "🇮🇹", emoji: "🔴", avgDays: 16, keyPlayers: "—" },
    { name: "Inter Milan", league: "Serie A", injuries: 5, flag: "🇮🇹", emoji: "🔵", avgDays: 15, keyPlayers: "—" },
  ];

  const filteredTeams = allTeams.filter(team => 
    filterLeague === "all" || team.league === filterLeague
  );

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Football Teams</h1>
          <p className="text-xl text-muted-foreground">View injury statistics for all major football clubs</p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-end">
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
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-bold text-foreground">{filteredTeams.length}</span> teams
            </div>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{team.emoji}</div>
                  <div className="flex-1">
                    <div className="font-bold text-lg">{team.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <span>{team.flag}</span>
                      <span>{team.league}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Injuries</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      team.injuries > 8 ? "bg-red-500/10 text-red-500" :
                      team.injuries > 5 ? "bg-orange-500/10 text-orange-500" :
                      "bg-green-500/10 text-green-500"
                    }`}>
                      {team.injuries}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg Recovery Days</span>
                    <span className="font-semibold">{team.avgDays}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-1">Key Injured Players</div>
                    <div className="text-sm font-medium">{team.keyPlayers}</div>
                  </div>
                  <a
                    href={`/team/${team.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-4"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
