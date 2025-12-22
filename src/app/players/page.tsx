"use client";
import React, { useState } from "react";

export default function PlayersPage() {
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterPosition, setFilterPosition] = useState<string>("all");

  const allPlayers = [
    { name: "Mohamed Salah", team: "Liverpool", position: "Forward", status: "Injured", injury: "Hamstring", returnDate: "Dec 20, 2025", value: "€75M", initials: "MS", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Erling Haaland", team: "Manchester City", position: "Forward", status: "Injured", injury: "Ankle", returnDate: "Dec 17, 2025", value: "€180M", initials: "EH", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Vinícius Júnior", team: "Real Madrid", position: "Forward", status: "Injured", injury: "Hamstring", returnDate: "Dec 20, 2025", value: "€120M", initials: "VJ", flag: "🇪🇸" },
    { name: "Kevin De Bruyne", team: "Manchester City", position: "Midfielder", status: "Injured", injury: "Hamstring", returnDate: "Dec 25, 2025", value: "€85M", initials: "KDB", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Pedri", team: "Barcelona", position: "Midfielder", status: "Injured", injury: "Thigh", returnDate: "Dec 22, 2025", value: "€100M", initials: "P", flag: "🇪🇸" },
    { name: "Jude Bellingham", team: "Real Madrid", position: "Midfielder", status: "Fit", injury: "—", returnDate: "—", value: "€150M", initials: "JB", flag: "🇪🇸" },
    { name: "Bukayo Saka", team: "Arsenal", position: "Forward", status: "Injured", injury: "Ankle", returnDate: "Dec 18, 2025", value: "€120M", initials: "BS", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Trent Alexander-Arnold", team: "Liverpool", position: "Defender", status: "Injured", injury: "Knee", returnDate: "Dec 18, 2025", value: "€80M", initials: "TAA", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Kylian Mbappé", team: "Real Madrid", position: "Forward", status: "Fit", injury: "—", returnDate: "—", value: "€180M", initials: "KM", flag: "🇪🇸" },
    { name: "Phil Foden", team: "Manchester City", position: "Midfielder", status: "Fit", injury: "—", returnDate: "—", value: "€110M", initials: "PF", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "Jamal Musiala", team: "Bayern Munich", position: "Midfielder", status: "Injured", injury: "Ankle", returnDate: "Dec 18, 2025", value: "€110M", initials: "JM", flag: "🇩🇪" },
    { name: "Florian Wirtz", team: "Bayer Leverkusen", position: "Midfielder", status: "Injured", injury: "Muscle", returnDate: "Dec 22, 2025", value: "€130M", initials: "FW", flag: "🇩🇪" },
  ];

  const filteredPlayers = allPlayers.filter(player => {
    const statusMatch = filterStatus === "all" || player.status.toLowerCase() === filterStatus;
    const positionMatch = filterPosition === "all" || player.position === filterPosition;
    return statusMatch && positionMatch;
  });

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Football Players</h1>
          <p className="text-xl text-muted-foreground">Browse player profiles and injury status</p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Filter by Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Players</option>
                <option value="injured">Injured</option>
                <option value="fit">Fit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Filter by Position</label>
              <select
                value={filterPosition}
                onChange={(e) => setFilterPosition(e.target.value)}
                className="px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Positions</option>
                <option value="Forward">Forward</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Defender">Defender</option>
                <option value="Goalkeeper">Goalkeeper</option>
              </select>
            </div>
            <div className="flex items-end">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filteredPlayers.length}</span> of {allPlayers.length} players
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map((player, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-xl mb-3">
                    {player.initials}
                  </div>
                  <div className="font-bold text-lg">{player.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <span>{player.flag}</span>
                    <span>{player.team}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Position</span>
                    <span className="font-medium">{player.position}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Market Value</span>
                    <span className="font-bold text-primary">{player.value}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      player.status === "Injured" ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"
                    }`}>
                      {player.status}
                    </span>
                  </div>
                  {player.status === "Injured" && (
                    <div className="pt-2 border-t border-border">
                      <div className="text-xs text-muted-foreground mb-1">Injury: <span className="text-foreground font-medium">{player.injury}</span></div>
                      <div className="text-xs text-muted-foreground">Return: <span className="text-foreground font-semibold">{player.returnDate}</span></div>
                    </div>
                  )}
                  <a
                    href={`/player/${player.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-4"
                  >
                    View Profile
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
