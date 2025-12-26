"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isLeaguesOpen, setIsLeaguesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStat, setCurrentStat] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState("all"); // all, player, team, league
  const [selectedLeague, setSelectedLeague] = useState("all");
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [selectedSeverity, setSelectedSeverity] = useState("all");

  // Rotate stats every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const leagues = [
    { name: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", path: "/premier-league", injuries: 47 },
    { name: "La Liga", flag: "🇪🇸", path: "/la-liga", injuries: 39 },
    { name: "Bundesliga", flag: "🇩🇪", path: "/bundesliga", injuries: 35 },
    { name: "Serie A", flag: "🇮🇹", path: "/serie-a", injuries: 42 },
    { name: "Ligue 1", flag: "🇫🇷", path: "/ligue-1", injuries: 31 },
    { name: "Primeira Liga", flag: "🇵🇹", path: "/primeira-liga", injuries: 28 },
    { name: "Eredivisie", flag: "🇳🇱", path: "/eredivisie", injuries: 24 },
    { name: "Brazilian Serie A", flag: "🇧🇷", path: "/brazilian-serie-a", injuries: 38 },
    { name: "MLS", flag: "🇺🇸", path: "/mls", injuries: 33 },
    { name: "Championship", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", path: "/championship", injuries: 29 },
  ];

  const upcomingMatches = [
    {
      homeTeam: "Liverpool",
      awayTeam: "Manchester United",
      date: "Dec 15, 2025",
      time: "15:00 GMT",
      injuredCount: 5,
      featuredPlayer: { name: "Mohamed Salah", position: "Forward", team: "Liverpool", severity: "Moderate" }
    },
    {
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      date: "Dec 16, 2025",
      time: "20:00 CET",
      injuredCount: 4,
      featuredPlayer: { name: "Pedri González", position: "Midfielder", team: "Barcelona", severity: "Minor" }
    },
    {
      homeTeam: "Bayern Munich",
      awayTeam: "Borussia Dortmund",
      date: "Dec 17, 2025",
      time: "18:30 CET",
      injuredCount: 3,
      featuredPlayer: { name: "Joshua Kimmich", position: "Midfielder", team: "Bayern Munich", severity: "Severe" }
    },
  ];

  const topInjuredPlayers = [
    { name: "Marcus Silva", team: "Manchester City", severity: "Severe", bodyPart: "Knee", returnDate: "March 2026", initials: "MS" },
    { name: "João Ferreira", team: "Real Madrid", severity: "Moderate", bodyPart: "Hamstring", returnDate: "Dec 15, 2025", initials: "JF" },
    { name: "Thomas Weber", team: "Bayern Munich", severity: "Minor", bodyPart: "Ankle", returnDate: "Nov 30, 2025", initials: "TW" },
    { name: "Alessandro Rossi", team: "AC Milan", severity: "Minor", bodyPart: "Muscle", returnDate: "Nov 28, 2025", initials: "AR" },
  ];

  const latestInjuriesTable = [
    { name: "David Martinez", team: "Liverpool", league: "Premier League", country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", severity: "Moderate", bodyPart: "Knee", status: "Dec 10, 2025" },
    { name: "Pierre Dubois", team: "PSG", league: "Ligue 1", country: "🇫🇷", severity: "Minor", bodyPart: "Calf", status: "Nov 25, 2025" },
    { name: "Carlos Rodriguez", team: "Barcelona", league: "La Liga", country: "🇪🇸", severity: "Moderate", bodyPart: "Groin", status: "Dec 5, 2025" },
  ];

  const topTeamsWithInjuries = [
    { rank: 1, name: "Manchester City", injuries: 12, emoji: "🔵" },
    { rank: 2, name: "Real Madrid", injuries: 10, emoji: "⚪" },
    { rank: 3, name: "Bayern Munich", injuries: 9, emoji: "🔴" },
    { rank: 4, name: "PSG", injuries: 8, emoji: "🔵" },
    { rank: 5, name: "Barcelona", injuries: 7, emoji: "🔴" },
    { rank: 6, name: "Liverpool", injuries: 7, emoji: "🔴" },
    { rank: 7, name: "Chelsea", injuries: 6, emoji: "🔵" },
    { rank: 8, name: "Arsenal", injuries: 5, emoji: "🔴" },
    { rank: 9, name: "AC Milan", injuries: 5, emoji: "🔴" },
    { rank: 10, name: "Juventus", injuries: 4, emoji: "⚫" },
  ];

  const trendingPlayers = [
    { name: "Erling Haaland", team: "Manchester City" },
    { name: "Kylian Mbappé", team: "Real Madrid" },
    { name: "Vinícius Jr.", team: "Real Madrid" },
    { name: "Jude Bellingham", team: "Real Madrid" },
    { name: "Phil Foden", team: "Manchester City" },
  ];

  const recoveredPlayers = [
    { name: "Kevin De Bruyne", team: "Manchester City", date: "Nov 20, 2025" },
    { name: "Pedri", team: "Barcelona", date: "Nov 19, 2025" },
    { name: "Neymar Jr.", team: "Al-Hilal", date: "Nov 18, 2025" },
    { name: "Thibaut Courtois", team: "Real Madrid", date: "Nov 17, 2025" },
    { name: "Casemiro", team: "Manchester United", date: "Nov 16, 2025" },
  ];

  const mediaOutlets = [
    "The Telegraph", "ESPN", "Marca", "The Athletic", "Sky Sports", "BBC Sport", "Goal.com"
  ];

  const premiumFeatures = [
    {
      title: "Premium Injury Alerts",
      description: "Get real-time notifications for your favorite teams",
      cta: "Subscribe Now - 50% Off",
      icon: "🔔"
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced injury predictions & recovery insights",
      cta: "Try Premium Free",
      icon: "🤖"
    },
    {
      title: "Expert Analysis",
      description: "Detailed injury reports from sports medicine experts",
      cta: "Learn More",
      icon: "📊"
    },
    {
      title: "Track Your Squad",
      description: "Monitor your fantasy team's injury status",
      cta: "Get Started",
      icon: "⚽"
    },
  ];

  const stats = [
    { label: "Total Injuries", value: "346", icon: "🏥" },
    { label: "Teams Tracked", value: "120+", icon: "⚽" },
    { label: "Leagues Covered", value: "10", icon: "🌍" },
    { label: "Daily Updates", value: "24/7", icon: "🔄" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Modern Navigation */}
      <nav className="sticky top-0 z-50 w-full glass backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚽</span>
              </div>
              <span className="font-bold text-xl hidden sm:block gradient-text">FootyInjuries</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <div className="relative">
                <button
                  onClick={() => setIsLeaguesOpen(!isLeaguesOpen)}
                  className="flex items-center gap-1 text-gray-600 hover:text-foreground transition-smooth font-medium"
                >
                  Leagues
                  <svg className={`w-4 h-4 transition-transform ${isLeaguesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLeaguesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-slide-up">
                    <div className="py-2">
                      {leagues.slice(0, 6).map((league, idx) => (
                        <a
                          key={idx}
                          href={league.path}
                          className="flex items-center justify-between px-4 py-3 hover:bg-muted transition-smooth"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{league.flag}</span>
                            <span className="text-sm font-medium">{league.name}</span>
                          </div>
                          <span className="badge badge-primary">{league.injuries}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <a href="/latest-injuries" className="text-gray-600 hover:text-foreground transition-smooth font-medium">Injuries</a>
              <a href="/teams" className="text-gray-600 hover:text-foreground transition-smooth font-medium">Teams</a>
              <a href="/players" className="text-gray-600 hover:text-foreground transition-smooth font-medium">Players</a>
              <a href="/news" className="text-gray-600 hover:text-foreground transition-smooth font-medium">News</a>
            </div>

            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="w-10 h-10 rounded-full hover:bg-muted transition-smooth flex items-center justify-center"
                >
                  <span className="text-2xl">
                    {selectedLanguage === "en" && "🇬🇧"}
                    {selectedLanguage === "es" && "🇪🇸"}
                    {selectedLanguage === "fr" && "🇫🇷"}
                    {selectedLanguage === "de" && "🇩🇪"}
                    {selectedLanguage === "it" && "🇮🇹"}
                    {selectedLanguage === "pt" && "🇵🇹"}
                  </span>
                </button>

                {isLanguageOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 glass-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-slide-up z-50">
                    <div className="py-2">
                      <button
                        onClick={() => {
                          setSelectedLanguage("en");
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-smooth ${
                          selectedLanguage === "en" ? "bg-muted/50" : ""
                        }`}
                      >
                        <span className="text-2xl">🇬🇧</span>
                        <span className="text-sm font-medium">English</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedLanguage("es");
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-smooth ${
                          selectedLanguage === "es" ? "bg-muted/50" : ""
                        }`}
                      >
                        <span className="text-2xl">🇪🇸</span>
                        <span className="text-sm font-medium">Español</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedLanguage("fr");
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-smooth ${
                          selectedLanguage === "fr" ? "bg-muted/50" : ""
                        }`}
                      >
                        <span className="text-2xl">🇫🇷</span>
                        <span className="text-sm font-medium">Français</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedLanguage("de");
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-smooth ${
                          selectedLanguage === "de" ? "bg-muted/50" : ""
                        }`}
                      >
                        <span className="text-2xl">🇩🇪</span>
                        <span className="text-sm font-medium">Deutsch</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedLanguage("it");
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-smooth ${
                          selectedLanguage === "it" ? "bg-muted/50" : ""
                        }`}
                      >
                        <span className="text-2xl">🇮🇹</span>
                        <span className="text-sm font-medium">Italiano</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedLanguage("pt");
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-smooth ${
                          selectedLanguage === "pt" ? "bg-muted/50" : ""
                        }`}
                      >
                        <span className="text-2xl">🇵🇹</span>
                        <span className="text-sm font-medium">Português</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Button */}
              <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-smooth flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Alerts Button */}
              <button className="btn btn-primary btn-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="hidden sm:inline">Alerts</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-mesh py-20 md:py-32">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight">
              Football Injuries<br />Today
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Real-time injury updates, player return dates & team news for the 2025–2026 season
            </p>

            <div className="max-w-3xl mx-auto mb-12">
              {/* Search Bar */}
              <div className="relative mb-4">
                <input
                  type="search"
                  placeholder="Search player, team, or league..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input w-full pl-12 pr-4 py-4 text-lg rounded-2xl"
                />
                <svg className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                {/* League Filter */}
                <select
                  value={selectedLeague}
                  onChange={(e) => setSelectedLeague(e.target.value)}
                  className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-border hover:border-primary transition-smooth text-sm font-medium cursor-pointer"
                >
                  <option value="all">All Leagues</option>
                  <option value="premier-league">Premier League</option>
                  <option value="la-liga">La Liga</option>
                  <option value="bundesliga">Bundesliga</option>
                  <option value="serie-a">Serie A</option>
                  <option value="ligue-1">Ligue 1</option>
                </select>

                {/* Team Filter */}
                <select
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}
                  className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-border hover:border-primary transition-smooth text-sm font-medium cursor-pointer"
                >
                  <option value="all">All Teams</option>
                  <option value="manchester-city">Manchester City</option>
                  <option value="real-madrid">Real Madrid</option>
                  <option value="bayern-munich">Bayern Munich</option>
                  <option value="psg">PSG</option>
                  <option value="barcelona">Barcelona</option>
                  <option value="liverpool">Liverpool</option>
                </select>

                {/* Severity Filter */}
                <select
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                  className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-border hover:border-primary transition-smooth text-sm font-medium cursor-pointer"
                >
                  <option value="all">All Severities</option>
                  <option value="minor">Minor</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                </select>

                {/* Clear Filters Button */}
                {(selectedLeague !== "all" || selectedTeam !== "all" || selectedSeverity !== "all" || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedLeague("all");
                      setSelectedTeam("all");
                      setSelectedSeverity("all");
                      setSearchQuery("");
                    }}
                    className="px-4 py-2 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 transition-smooth text-sm font-medium"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              {/* Active Filters Display */}
              {(selectedLeague !== "all" || selectedTeam !== "all" || selectedSeverity !== "all") && (
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {selectedLeague !== "all" && (
                    <span className="badge badge-primary">
                      League: {selectedLeague.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  )}
                  {selectedTeam !== "all" && (
                    <span className="badge badge-primary">
                      Team: {selectedTeam.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  )}
                  {selectedSeverity !== "all" && (
                    <span className="badge badge-primary">
                      Severity: {selectedSeverity.charAt(0).toUpperCase() + selectedSeverity.slice(1)}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`stat-card card-shine transition-all duration-500 ${
                    currentStat === idx ? 'scale-105 glow-primary' : ''
                  }`}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="stat-value text-3xl">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Match Injuries */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Upcoming Match Injuries</h2>
            <a href="/upcoming-matches" className="text-primary hover:underline font-semibold flex items-center gap-2">
              See All Upcoming Match Injuries →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingMatches.map((match, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 card-shine hover-lift">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-center">
                      <div className="font-bold text-lg">{match.homeTeam}</div>
                    </div>
                    <div className="text-muted-foreground font-bold">vs</div>
                    <div className="text-center">
                      <div className="font-bold text-lg">{match.awayTeam}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{match.date}</div>
                  <div className="text-sm text-muted-foreground">{match.time}</div>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="badge badge-destructive mb-3">{match.injuredCount} Players Injured</div>
                  <div>
                    <div className="font-bold">{match.featuredPlayer.name}</div>
                    <div className="text-sm text-muted-foreground">{match.featuredPlayer.position} • {match.featuredPlayer.team}</div>
                    <span className={`badge mt-2 ${
                      match.featuredPlayer.severity === "Severe" ? "badge-destructive" :
                      match.featuredPlayer.severity === "Moderate" ? "badge-warning" :
                      "badge-accent"
                    }`}>
                      {match.featuredPlayer.severity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Injured Players */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Top Injured Players</h2>
            <a href="/top-injured" className="text-primary hover:underline font-semibold flex items-center gap-2">
              See All Top Injured Players →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topInjuredPlayers.map((player, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 card-shine hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {player.initials}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{player.name}</h3>
                    <p className="text-sm text-muted-foreground">{player.team}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Severity:</span>
                    <span className={`badge ${
                      player.severity === "Severe" ? "badge-destructive" :
                      player.severity === "Moderate" ? "badge-warning" :
                      "badge-accent"
                    }`}>
                      {player.severity}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Injury:</span>
                    <span className="font-semibold">{player.bodyPart}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Return:</span>
                    <span className="font-semibold">{player.returnDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Injuries Table */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Latest Injuries</h2>
            <a href="/latest-injuries" className="text-primary hover:underline font-semibold flex items-center gap-2">
              See All Latest Injured Players →
            </a>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Player</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">League</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Country</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Severity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Body Part</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {latestInjuriesTable.map((injury, idx) => (
                    <tr key={idx} className="border-t border-border hover:bg-muted/30 transition-smooth">
                      <td className="px-6 py-4">
                        <div className="font-semibold">{injury.name}</div>
                        <div className="text-sm text-muted-foreground">{injury.team}</div>
                      </td>
                      <td className="px-6 py-4 text-sm">{injury.league}</td>
                      <td className="px-6 py-4 text-2xl">{injury.country}</td>
                      <td className="px-6 py-4">
                        <span className={`badge ${
                          injury.severity === "Severe" ? "badge-destructive" :
                          injury.severity === "Moderate" ? "badge-warning" :
                          "badge-accent"
                        }`}>
                          {injury.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">{injury.bodyPart}</td>
                      <td className="px-6 py-4 text-sm">{injury.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-border px-6 py-4 flex items-center justify-center gap-4">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="btn btn-secondary btn-sm"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-sm text-muted-foreground">Page {currentPage} of 2</span>
              <button 
                onClick={() => setCurrentPage(Math.min(2, currentPage + 1))}
                className="btn btn-secondary btn-sm"
                disabled={currentPage === 2}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* As Featured On */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">As Featured On</h2>
          <div className="marquee mb-8">
            <div className="marquee-content">
              {mediaOutlets.map((outlet, idx) => (
                <div key={idx} className="text-lg md:text-xl font-bold text-muted-foreground hover:text-foreground transition-smooth whitespace-nowrap">
                  {outlet}
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="marquee-content" aria-hidden="true">
              {mediaOutlets.map((outlet, idx) => (
                <div key={`duplicate-${idx}`} className="text-lg md:text-xl font-bold text-muted-foreground hover:text-foreground transition-smooth whitespace-nowrap">
                  {outlet}
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            FootyInjuries.com is trusted by leading sports media outlets worldwide for accurate football injury updates and player recovery information.
          </p>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 text-center card-shine hover-lift">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                <button className="btn btn-primary btn-sm w-full">{feature.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 10 Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top 10 Leagues */}
            <div className="glass-card rounded-2xl p-8 card-shine">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold gradient-text">Top 10 Leagues</h3>
                <span className="text-4xl">🏆</span>
              </div>
              <div className="space-y-3">
                {leagues.map((league, idx) => (
                  <div 
                    key={idx} 
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-muted/30 to-transparent hover:from-primary/10 hover:to-primary/5 transition-all duration-300 hover-lift"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {/* Progress Bar Background */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent transition-all duration-500"
                      style={{ width: `${(league.injuries / 50) * 100}%` }}
                    ></div>
                    
                    <div className="relative flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        {/* Rank with Medal for Top 3 */}
                        <div className="flex items-center justify-center w-8 h-8">
                          {idx === 0 && <span className="text-2xl">🥇</span>}
                          {idx === 1 && <span className="text-2xl">🥈</span>}
                          {idx === 2 && <span className="text-2xl">🥉</span>}
                          {idx > 2 && <span className="text-muted-foreground font-bold text-lg">{idx + 1}</span>}
                        </div>
                        
                        <span className="text-3xl group-hover:scale-110 transition-transform">{league.flag}</span>
                        <span className="font-semibold text-lg group-hover:text-primary transition-colors">{league.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-primary">{league.injuries}</span>
                        <span className="badge badge-primary group-hover:scale-110 transition-transform">
                          injuries
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top 10 Teams */}
            <div className="glass-card rounded-2xl p-8 card-shine">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold gradient-text">Most Affected Teams</h3>
                <span className="text-4xl">⚠️</span>
              </div>
              <div className="space-y-3">
                {topTeamsWithInjuries.map((team, idx) => (
                  <div 
                    key={idx} 
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-muted/30 to-transparent hover:from-destructive/10 hover:to-destructive/5 transition-all duration-300 hover-lift"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {/* Progress Bar Background */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-destructive/5 to-transparent transition-all duration-500"
                      style={{ width: `${(team.injuries / 15) * 100}%` }}
                    ></div>
                    
                    <div className="relative flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        {/* Rank with Medal for Top 3 */}
                        <div className="flex items-center justify-center w-8 h-8">
                          {idx === 0 && <span className="text-2xl">🥇</span>}
                          {idx === 1 && <span className="text-2xl">🥈</span>}
                          {idx === 2 && <span className="text-2xl">🥉</span>}
                          {idx > 2 && <span className="text-muted-foreground font-bold text-lg">{team.rank}</span>}
                        </div>
                        
                        <span className="text-3xl group-hover:scale-110 transition-transform">{team.emoji}</span>
                        <span className="font-semibold text-lg group-hover:text-destructive transition-colors">{team.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-destructive">{team.injuries}</span>
                        <span className="badge badge-destructive group-hover:scale-110 transition-transform">
                          injuries
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending & Recovered Players */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trending Players */}
            <div className="glass-card rounded-2xl p-8 card-shine">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold gradient-text">Trending Players</h3>
              </div>
              <div className="space-y-4">
                {trendingPlayers.map((player, idx) => (
                  <div 
                    key={idx} 
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-muted/30 to-transparent hover:from-primary/10 hover:to-primary/5 transition-all duration-300 hover-lift p-4"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Rank Badge */}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                        {idx + 1}
                      </div>

                      {/* Avatar with pulse animation */}
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-50 blur-md group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                          {player.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>

                      {/* Player Info */}
                      <div className="flex-1">
                        <div className="font-bold text-lg group-hover:text-primary transition-colors">{player.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <span>⚽</span>
                          <span>{player.team}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Recovered Players */}
            <div className="glass-card rounded-2xl p-8 card-shine">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold gradient-text-secondary">Latest Recovered</h3>

              </div>
              <div className="space-y-4">
                {recoveredPlayers.map((player, idx) => (
                  <div 
                    key={idx} 
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-muted/30 to-transparent hover:from-green-500/10 hover:to-emerald-500/5 transition-all duration-300 hover-lift p-4"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >


                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Avatar with checkmark */}
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 opacity-50 blur-md group-hover:opacity-75 transition-opacity"></div>
                          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                            ✓
                          </div>
                        </div>

                        {/* Player Info */}
                        <div className="flex-1">
                          <div className="font-bold text-lg group-hover:text-green-600 transition-colors">{player.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <span>⚽</span>
                            <span>{player.team}</span>
                          </div>
                        </div>
                      </div>

                      {/* Recovery Date */}
                      <div className="text-right">
                        <div className="badge badge-accent group-hover:scale-110 transition-transform">
                          Recovered
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{player.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight">
              Football Injuries Today — Latest Updates, Player Return Dates & Team News (2025–2026)
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Your real-time source for global football injury updates.
            </p>
          </div>
          
          {/* Intro Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 mb-12 card-shine hover-lift">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">⚡</span>
              <div>
                <h3 className="text-2xl font-bold mb-4">Real-Time Injury Intelligence</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Football moves fast — and injuries change everything. Whether you're a fan, analyst, journalist, scout, or bettor looking for reliable player availability information, FootyInjuries.com delivers the world's most up-to-date injury news, covering every major league, every team, and every player.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From muscle strains to long-term ACL tears, from short recovery knocks to season-ending injuries, our platform tracks every development as it happens — with AI-powered injury insights, expected return dates, performance impact, and club medical updates.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Why It Matters */}
            <div className="glass-card rounded-3xl p-8 card-shine hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🎯</span>
                <h3 className="text-2xl font-bold gradient-text">Why It Matters</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Injuries influence lineups, tactics, team strength, and even league outcomes. Clubs adjust their shape, bettors adapt their predictions, and analysts reassess player workloads.
              </p>
              
              <p className="font-semibold mb-4 text-lg">We help you answer:</p>
              
              <div className="space-y-3">
                {[
                  "Is my team missing key players this week?",
                  "Which players are doubtful for the next match?",
                  "How long is a player expected to be out?",
                  "What injuries are affecting clubs right now?",
                  "Which players just returned to training?",
                  "How does injury timeline impact performance?"
                ].map((question, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <span className="text-primary text-xl mt-0.5 group-hover:scale-125 transition-transform">→</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{question}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                <p className="font-semibold text-primary">We provide the clarity you need — instantly.</p>
              </div>
            </div>

            {/* Features */}
            <div className="glass-card rounded-3xl p-8 card-shine hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">📊</span>
                <h3 className="text-2xl font-bold gradient-text">Comprehensive Coverage</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our injury engine covers all major competitions, including Premier League, La Liga, Serie A, Bundesliga, Ligue 1, MLS, Saudi Pro League, Championship, UCL / UEL / UECL, and over 100 more domestic and international competitions.
              </p>
              
              <p className="font-semibold mb-4 text-lg">Each player profile includes:</p>
              
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: "📍", text: "Current Injury Status" },
                  { icon: "📅", text: "Expected Return Date" },
                  { icon: "⚠️", text: "Injury Type & Severity" },
                  { icon: "🏥", text: "Rehab Timeline" },
                  { icon: "✅", text: "Match Availability" },
                  { icon: "📈", text: "Past Injury History" },
                  { icon: "⚽", text: "Season Performance Metrics" },
                  { icon: "🤖", text: "AI-generated analysis & risk indicators" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-500/5 to-transparent hover:from-green-500/10 transition-all group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="font-medium group-hover:text-green-600 transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 card-shine text-center bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">The Most Complete Injury Database</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We're the only platform combining injury tracking, performance data, and AI analysis into one unified experience. Real-time updates, AI-generated insights, and fast, clean, mobile-friendly UI covering 100+ leagues.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="badge badge-primary text-base px-6 py-3">Real-time Updates</span>
                <span className="badge badge-secondary text-base px-6 py-3">AI-Powered Insights</span>
                <span className="badge badge-accent text-base px-6 py-3">100+ Leagues</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-30"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#6366F1] leading-tight">
            Never Miss an Update
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-normal max-w-3xl mx-auto">
            Get instant notifications when your favorite teams have injury news
          </p>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <button 
              onClick={() => {
                if ('Notification' in window) {
                  Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                      alert('✅ Notifications enabled! You\'ll receive injury updates.');
                    } else if (permission === 'denied') {
                      alert('❌ Notifications blocked. Please enable them in your browser settings.');
                    }
                  });
                } else {
                  alert('❌ Your browser doesn\'t support notifications.');
                }
              }}
              className="group flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="text-lg font-semibold text-gray-800">Enable Notifications</span>
            </button>
            <button 
              onClick={() => {
                const seoSection = document.querySelector('section:has(h2:contains("Football Injuries Today"))');
                if (seoSection) {
                  seoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Logo and Description */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl">⚽</span>
              </div>
              <span className="font-bold text-xl gradient-text">FootyInjuries.com</span>
            </div>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              FootyInjuries.com is the home of football player injuries. We provide daily injury information, analysis, and predictions for football fans. Our goal is to find recent injuries about players easily and effective.
            </p>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>
              <h3 className="font-bold mb-4 text-foreground">Company</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="/about" className="block hover:text-primary transition-smooth">About Us</a>
                <a href="/team" className="block hover:text-primary transition-smooth">Our Team</a>
                <a href="/contact" className="block hover:text-primary transition-smooth">Contact</a>
                <a href="/privacy" className="block hover:text-primary transition-smooth">Privacy Policy</a>
                <a href="/terms" className="block hover:text-primary transition-smooth">Terms of Service</a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold mb-4 text-foreground">Resources</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="/latest-injuries" className="block hover:text-primary transition-smooth">All League Injuries</a>
                <a href="/teams" className="block hover:text-primary transition-smooth">Team Injuries</a>
                <a href="/players" className="block hover:text-primary transition-smooth">Player Injuries</a>
                <a href="/methodology" className="block hover:text-primary transition-smooth">Methodology</a>
              </div>
            </div>

            {/* Leagues */}
            <div>
              <h3 className="font-bold mb-4 text-foreground">Leagues</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="/premier-league" className="block hover:text-primary transition-smooth">Premier League Injuries</a>
                <a href="/bundesliga" className="block hover:text-primary transition-smooth">Bundesliga Injuries</a>
                <a href="/serie-a" className="block hover:text-primary transition-smooth">Serie A Injuries</a>
                <a href="/la-liga" className="block hover:text-primary transition-smooth">La Liga Injuries</a>
                <a href="/ligue-1" className="block hover:text-primary transition-smooth">Ligue 1 Injuries</a>
              </div>
            </div>

            {/* Teams Injuries */}
            <div>
              <h3 className="font-bold mb-4 text-foreground">Teams Injuries</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="/teams/manchester-city" className="block hover:text-primary transition-smooth">Manchester City Injuries</a>
                <a href="/teams/real-madrid" className="block hover:text-primary transition-smooth">Real Madrid Injuries</a>
                <a href="/teams/bayern-munich" className="block hover:text-primary transition-smooth">Bayern Munich Injuries</a>
                <a href="/teams/psg" className="block hover:text-primary transition-smooth">PSG Injuries</a>
                <a href="/teams/barcelona" className="block hover:text-primary transition-smooth">Barcelona Injuries</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 FootyInjuries.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
