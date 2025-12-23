"use client";
import React, { useState } from "react";

export default function LatestInjuriesPage() {
  const [filterLeague, setFilterLeague] = useState<string>("all");
  const [filterSeverity, setFilterSeverity] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const latestInjuries = [
    { name: "David Martinez", team: "Liverpool", severity: "Moderate", bodyPart: "Knee", reportedDate: "Dec 10, 2025", returnDate: "Dec 25, 2025", league: "Premier League", country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", status: "Out", initials: "DM", daysAgo: 0 },
    { name: "Hans Mueller", team: "Bayern Munich", severity: "Minor", bodyPart: "Ankle", reportedDate: "Dec 9, 2025", returnDate: "Dec 18, 2025", league: "Bundesliga", country: "🇩🇪", status: "Doubtful", initials: "HM", daysAgo: 1 },
    { name: "Marco Bianchi", team: "AC Milan", severity: "Severe", bodyPart: "ACL", reportedDate: "Dec 8, 2025", returnDate: "Mar 2026", league: "Serie A", country: "🇮🇹", status: "Out", initials: "MB", daysAgo: 2 },
    { name: "João Santos", team: "Benfica", severity: "Moderate", bodyPart: "Hamstring", reportedDate: "Dec 7, 2025", returnDate: "Dec 22, 2025", league: "Primeira Liga", country: "🇵🇹", status: "Out", initials: "JS", daysAgo: 3 },
    { name: "Carlos Rodriguez", team: "Barcelona", severity: "Moderate", bodyPart: "Groin", reportedDate: "Dec 5, 2025", returnDate: "Dec 20, 2025", league: "La Liga", country: "🇪🇸", status: "Out", initials: "CR", daysAgo: 5 },
    { name: "Liam O'Connor", team: "Celtic", severity: "Minor", bodyPart: "Calf", reportedDate: "Dec 4, 2025", returnDate: "Dec 15, 2025", league: "Scottish Premiership", country: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", status: "Doubtful", initials: "LO", daysAgo: 6 },
    { name: "Antoine Dupont", team: "Lyon", severity: "Moderate", bodyPart: "Thigh", reportedDate: "Dec 3, 2025", returnDate: "Dec 19, 2025", league: "Ligue 1", country: "🇫🇷", status: "Out", initials: "AD", daysAgo: 7 },
    { name: "Erik van Dijk", team: "Ajax", severity: "Minor", bodyPart: "Ankle", reportedDate: "Dec 2, 2025", returnDate: "Dec 14, 2025", league: "Eredivisie", country: "🇳🇱", status: "Doubtful", initials: "ED", daysAgo: 8 },
    { name: "Lucas Silva", team: "Flamengo", severity: "Moderate", bodyPart: "Knee", reportedDate: "Dec 1, 2025", returnDate: "Dec 23, 2025", league: "Brazilian Serie A", country: "🇧🇷", status: "Out", initials: "LS", daysAgo: 9 },
    { name: "Michael Johnson", team: "LA Galaxy", severity: "Minor", bodyPart: "Muscle", reportedDate: "Nov 30, 2025", returnDate: "Dec 16, 2025", league: "MLS", country: "🇺🇸", status: "Doubtful", initials: "MJ", daysAgo: 10 },
    { name: "Pierre Dubois", team: "PSG", severity: "Minor", bodyPart: "Calf", reportedDate: "Nov 25, 2025", returnDate: "Dec 13, 2025", league: "Ligue 1", country: "🇫🇷", status: "Doubtful", initials: "PD", daysAgo: 15 },
    { name: "Jamal Musiala", team: "Bayern Munich", severity: "Minor", bodyPart: "Ankle", reportedDate: "Nov 26, 2025", returnDate: "Dec 18, 2025", league: "Bundesliga", country: "🇩🇪", status: "Doubtful", initials: "JM", daysAgo: 14 },
  ];

  const filteredInjuries = latestInjuries.filter(injury => {
    const severityMatch = filterSeverity === "all" || injury.severity.toLowerCase() === filterSeverity;
    const leagueMatch = filterLeague === "all" || injury.league === filterLeague;
    return severityMatch && leagueMatch;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredInjuries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInjuries = filteredInjuries.slice(startIndex, endIndex);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Injury Reports</h1>
          <p className="text-xl text-muted-foreground">Most recently reported injuries across all leagues - Updated in real-time</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="w-full py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{latestInjuries.filter(i => i.daysAgo === 0).length}</div>
              <div className="text-sm text-muted-foreground">Today</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-accent mb-1">{latestInjuries.filter(i => i.daysAgo <= 7).length}</div>
              <div className="text-sm text-muted-foreground">This Week</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-red-500 mb-1">{latestInjuries.filter(i => i.severity === "Severe").length}</div>
              <div className="text-sm text-muted-foreground">Severe</div>
            </div>
            <div className="glass-card rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">{latestInjuries.filter(i => i.severity === "Moderate").length}</div>
              <div className="text-sm text-muted-foreground">Moderate</div>
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
                onChange={(e) => { setFilterSeverity(e.target.value); setCurrentPage(1); }}
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
                onChange={(e) => { setFilterLeague(e.target.value); setCurrentPage(1); }}
                className="px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Leagues</option>
                <option value="Premier League">Premier League</option>
                <option value="La Liga">La Liga</option>
                <option value="Bundesliga">Bundesliga</option>
                <option value="Serie A">Serie A</option>
                <option value="Ligue 1">Ligue 1</option>
                <option value="Primeira Liga">Primeira Liga</option>
                <option value="Eredivisie">Eredivisie</option>
                <option value="Brazilian Serie A">Brazilian Serie A</option>
                <option value="MLS">MLS</option>
              </select>
            </div>
            <div className="flex items-end">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filteredInjuries.length}</span> of {latestInjuries.length} injuries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Injuries Grid */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentInjuries.map((injury, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                {/* Time Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {injury.daysAgo === 0 ? "Today" : injury.daysAgo === 1 ? "Yesterday" : `${injury.daysAgo} days ago`}
                  </span>
                  <span className="text-xl">{injury.country}</span>
                </div>

                {/* Player Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold">
                    {injury.initials}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">{injury.name}</div>
                    <div className="text-sm text-muted-foreground">{injury.team}</div>
                  </div>
                </div>

                {/* Injury Details */}
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
                    <div className="text-xs text-muted-foreground">Reported: <span className="text-foreground font-semibold">{injury.reportedDate}</span></div>
                    <div className="text-xs text-muted-foreground">Return: <span className="text-foreground font-semibold">{injury.returnDate}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border border-border transition-colors ${
                  currentPage === 1
                    ? 'bg-card/50 text-muted-foreground cursor-not-allowed'
                    : 'bg-card hover:bg-card/80'
                }`}
              >
                Previous
              </button>
              <div className="px-4 py-2 text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? 'bg-primary/50 text-primary-foreground cursor-not-allowed'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
