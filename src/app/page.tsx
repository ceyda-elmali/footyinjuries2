"use client";
import React, { useRef, useEffect, useState } from "react";

export default function Home() {
  // State for dropdowns and search
  const [isLeaguesOpen, setIsLeaguesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState({ name: "English", flag: "🇬🇧", code: "en" });

  // Languages data
  const languages = [
    { name: "English", flag: "🇬🇧", code: "en" },
    { name: "Español", flag: "🇪🇸", code: "es" },
    { name: "Français", flag: "🇫🇷", code: "fr" },
    { name: "Deutsch", flag: "🇩🇪", code: "de" },
    { name: "Italiano", flag: "🇮🇹", code: "it" },
    { name: "Português", flag: "🇵🇹", code: "pt" },
  ];

  // Leagues data
  const leagues = [
    { name: "Premier League Injuries", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", path: "/premier-league" },
    { name: "La Liga Injuries", flag: "🇪🇸", path: "/la-liga" },
    { name: "Bundesliga Injuries", flag: "🇩🇪", path: "/bundesliga" },
    { name: "Serie A Injuries", flag: "🇮🇹", path: "/serie-a" },
    { name: "Ligue 1 Injuries", flag: "🇫🇷", path: "/ligue-1" },
    { name: "Primeira Liga Injuries", flag: "🇵🇹", path: "/primeira-liga" },
    { name: "Eredivisie Injuries", flag: "🇳🇱", path: "/eredivisie" },
    { name: "Brazilian Serie A Injuries", flag: "🇧🇷", path: "/brazilian-serie-a" },
    { name: "MLS Injuries", flag: "🇺🇸", path: "/mls" },
    { name: "Championship Injuries", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", path: "/championship" },
  ];

  // Updated data based on user requirements
  const upcomingMatches = [
    {
      home: "Liverpool",
      away: "Manchester United",
      date: "Dec 15, 2025",
      time: "15:00 GMT",
      injuredCount: 5,
      featuredPlayer: { name: "Mohamed Salah", position: "Forward", team: "Liverpool", severity: "Moderate" },
    },
    {
      home: "Barcelona",
      away: "Real Madrid",
      date: "Dec 16, 2025",
      time: "20:00 CET",
      injuredCount: 4,
      featuredPlayer: { name: "Pedri González", position: "Midfielder", team: "Barcelona", severity: "Minor" },
    },
    {
      home: "Bayern Munich",
      away: "Borussia Dortmund",
      date: "Dec 17, 2025",
      time: "18:30 CET",
      injuredCount: 3,
      featuredPlayer: { name: "Joshua Kimmich", position: "Midfielder", team: "Bayern Munich", severity: "Severe" },
    },
  ];

  const topInjuredPlayers = [
    { name: "Marcus Silva", team: "Manchester City", severity: "Severe", bodyPart: "Knee", returnDate: "March 2026", initials: "MS" },
    { name: "João Ferreira", team: "Real Madrid", severity: "Moderate", bodyPart: "Hamstring", returnDate: "Dec 15, 2025", initials: "JF" },
    { name: "Thomas Weber", team: "Bayern Munich", severity: "Minor", bodyPart: "Ankle", returnDate: "Nov 30, 2025", initials: "TW" },
    { name: "Alessandro Rossi", team: "AC Milan", severity: "Minor", bodyPart: "Muscle", returnDate: "Nov 28, 2025", initials: "AR" },
  ];

  const latestInjuries = [
    { name: "David Martinez", team: "Liverpool", severity: "Moderate", bodyPart: "Knee", date: "Dec 10, 2025", league: "Premier League", country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", status: "Out" },
    { name: "Pierre Dubois", team: "PSG", severity: "Minor", bodyPart: "Calf", date: "Nov 25, 2025", league: "Ligue 1", country: "🇫🇷", status: "Doubtful" },
    { name: "Carlos Rodriguez", team: "Barcelona", severity: "Moderate", bodyPart: "Groin", date: "Dec 5, 2025", league: "La Liga", country: "🇪🇸", status: "Out" },
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

  const teamStats = [
    { team: "Manchester City", count: 12, emoji: "🔵" },
    { team: "Real Madrid", count: 10, emoji: "⚪" },
    { team: "Bayern Munich", count: 9, emoji: "🔴" },
    { team: "PSG", count: 8, emoji: "🔵" },
    { team: "Barcelona", count: 7, emoji: "🔴" },
    { team: "Liverpool", count: 7, emoji: "🔴" },
    { team: "Chelsea", count: 6, emoji: "🔵" },
    { team: "Arsenal", count: 5, emoji: "🔴" },
    { team: "AC Milan", count: 5, emoji: "🔴" },
    { team: "Juventus", count: 4, emoji: "⚫" },
  ];

  const leagueStats = [
    { league: "Premier League", count: 47, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { league: "La Liga", count: 39, flag: "🇪🇸" },
    { league: "Bundesliga", count: 35, flag: "🇩🇪" },
    { league: "Serie A", count: 42, flag: "🇮🇹" },
    { league: "Ligue 1", count: 31, flag: "🇫🇷" },
    { league: "Primeira Liga", count: 28, flag: "🇵🇹" },
    { league: "Eredivisie", count: 24, flag: "🇳🇱" },
    { league: "Brazilian Serie A", count: 38, flag: "🇧🇷" },
    { league: "MLS", count: 33, flag: "🇺🇸" },
    { league: "Championship", count: 29, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  ];

  const featuredMedia = [
    "The Telegraph",
    "ESPN",
    "Marca",
    "The Athletic",
    "Sky Sports",
    "BBC Sport",
    "Goal.com",
  ];

  const premiumFeatures = [
    {
      title: "Premium Injury Alerts",
      description: "Get real-time notifications for your favorite teams",
      cta: "Subscribe Now - 50% Off",
      icon: "🔔",
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced injury predictions & recovery insights",
      cta: "Try Premium Free",
      icon: "🤖",
    },
    {
      title: "Expert Analysis",
      description: "Detailed injury reports from sports medicine experts",
      cta: "Learn More",
      icon: "📊",
    },
    {
      title: "Track Your Squad",
      description: "Monitor your fantasy team's injury status",
      cta: "Get Started",
      icon: "⚽",
    },
  ];

  // Inject global CSS for featured scroll animation
  useEffect(() => {
    const styleId = 'featured-scroll-global-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @keyframes featured-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .featured-scroll-row {
          animation: featured-scroll 30s linear infinite;
          will-change: transform;
        }
        .featured-scroll-row:hover {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

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
      {/* Navigation Ribbon */}
      <nav className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl">⚽</span>
              </div>
              <span className="font-bold text-lg hidden sm:block">FootyInjuries.com</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {/* Leagues Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLeaguesOpen(!isLeaguesOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors font-medium"
                >
                  Leagues
                  <svg
                    className={`w-4 h-4 transition-transform ${isLeaguesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isLeaguesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl shadow-2xl border border-border overflow-hidden">
                    <div className="py-2">
                      {leagues.map((league, idx) => (
                        <a
                          key={idx}
                          href={league.path}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                        >
                          <span className="text-2xl">{league.flag}</span>
                          <span className="text-sm font-medium">{league.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/injuries" className="px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors font-medium">
                Injuries
              </a>
              <a href="/teams" className="px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors font-medium">
                Teams
              </a>
              <a href="/players" className="px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors font-medium">
                Players
              </a>
              <a href="/news" className="px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors font-medium">
                News
              </a>
            </div>

            {/* Right Side - Icons */}
            <div className="flex items-center gap-3">

              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="w-10 h-10 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center"
                >
                  <span className="text-xl">{selectedLanguage.flag}</span>
                </button>

                {/* Language Dropdown Menu */}
                {isLanguageOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 glass-card rounded-xl shadow-2xl border border-border overflow-hidden">
                    <div className="py-2">
                      {languages.map((language, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedLanguage(language);
                            setIsLanguageOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors ${
                            selectedLanguage.code === language.code ? 'bg-primary/5' : ''
                          }`}
                        >
                          <span className="text-2xl">{language.flag}</span>
                          <span className="text-base font-medium">{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* User Icon */}
              <button className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden w-8 h-8 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-primary/20 via-background to-accent/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Football Injuries Today
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Real-time injury updates, player return dates & team news for 2025–2026
            </p>
            
            {/* Filtered Search Bar */}
            <div className="relative max-w-2xl mx-auto pt-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="relative w-full sm:w-96">
                  <input
                    type="search"
                    placeholder="Search player, team, or league..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-3 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  
                  {/* Search Results Dropdown */}
                  {searchQuery && (
                    <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-xl shadow-2xl border border-border overflow-hidden z-50 max-h-96 overflow-y-auto">
                      {/* Players */}
                      {[...topInjuredPlayers, ...latestInjuries, ...trendingPlayers, ...recoveredPlayers]
                        .filter(player => player.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .slice(0, 5).length > 0 && (
                        <div className="p-2">
                          <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">Players</div>
                          {[...topInjuredPlayers, ...latestInjuries, ...trendingPlayers, ...recoveredPlayers]
                            .filter(player => player.name.toLowerCase().includes(searchQuery.toLowerCase()))
                            .slice(0, 5)
                            .map((player, idx) => (
                              <a
                                key={idx}
                                href={`/player/${player.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 rounded-lg transition-colors"
                              >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">
                                  {player.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{player.name}</div>
                                  <div className="text-xs text-muted-foreground">{player.team}</div>
                                </div>
                              </a>
                            ))}
                        </div>
                      )}

                      {/* Teams */}
                      {teamStats
                        .filter(team => team.team.toLowerCase().includes(searchQuery.toLowerCase()))
                        .slice(0, 5).length > 0 && (
                        <div className="p-2 border-t border-border">
                          <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">Teams</div>
                          {teamStats
                            .filter(team => team.team.toLowerCase().includes(searchQuery.toLowerCase()))
                            .slice(0, 5)
                            .map((team, idx) => (
                              <a
                                key={idx}
                                href={`/team/${team.team.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 rounded-lg transition-colors"
                              >
                                <span className="text-2xl">{team.emoji}</span>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{team.team}</div>
                                  <div className="text-xs text-muted-foreground">{team.count} injuries</div>
                                </div>
                              </a>
                            ))}
                        </div>
                      )}

                      {/* Leagues */}
                      {leagues
                        .filter(league => league.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .slice(0, 5).length > 0 && (
                        <div className="p-2 border-t border-border">
                          <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">Leagues</div>
                          {leagues
                            .filter(league => league.name.toLowerCase().includes(searchQuery.toLowerCase()))
                            .slice(0, 5)
                            .map((league, idx) => (
                              <a
                                key={idx}
                                href={league.path}
                                className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 rounded-lg transition-colors"
                              >
                                <span className="text-2xl">{league.flag}</span>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{league.name}</div>
                                </div>
                              </a>
                            ))}
                        </div>
                      )}

                      {/* No Results */}
                      {[...topInjuredPlayers, ...latestInjuries, ...trendingPlayers, ...recoveredPlayers]
                        .filter(player => player.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 &&
                        teamStats.filter(team => team.team.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 &&
                        leagues.filter(league => league.name.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                        <div className="p-6 text-center text-muted-foreground">
                          <div className="text-3xl mb-2">🔍</div>
                          <div className="text-sm">No results found for "{searchQuery}"</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => {
                    if (searchQuery) {
                      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                    }
                  }}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Match Injuries */}
      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Match Injuries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 text-center">
                    <div className="font-bold text-lg">{match.home}</div>
                  </div>
                  <div className="px-4 text-muted-foreground font-semibold">vs</div>
                  <div className="flex-1 text-center">
                    <div className="font-bold text-lg">{match.away}</div>
                  </div>
                </div>
                <div className="text-center text-sm text-muted-foreground mb-4">
                  {match.date} • {match.time}
                </div>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 mb-4 text-center">
                  <div className="text-destructive font-bold">{match.injuredCount} Players Injured</div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                      {match.featuredPlayer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{match.featuredPlayer.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {match.featuredPlayer.position} • {match.featuredPlayer.team}
                      </div>
                    </div>
                    <div className={`text-sm font-semibold ${getSeverityColor(match.featuredPlayer.severity)}`}>
                      {match.featuredPlayer.severity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-primary hover:underline font-semibold">
              See All Upcoming Match Injuries →
            </button>
          </div>
        </div>
      </section>

      {/* Top Injured Players */}
      <section className="w-full py-12 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Top Injured Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topInjuredPlayers.map((player, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-lg">
                    {player.initials}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">{player.name}</div>
                    <div className="text-sm text-muted-foreground">{player.team}</div>
                  </div>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${getSeverityBg(player.severity)}`}>
                  <span className={getSeverityColor(player.severity)}>{player.severity}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Body Part:</span>
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
          <div className="text-center mt-8">
            <button className="text-primary hover:underline font-semibold">
              See All Top Injured Players →
            </button>
          </div>
        </div>
      </section>

      {/* Latest Injuries Table */}
      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Injuries</h2>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-card border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Player</th>
                    <th className="px-6 py-4 text-left font-semibold">League</th>
                    <th className="px-6 py-4 text-left font-semibold">Country</th>
                    <th className="px-6 py-4 text-left font-semibold">Severity</th>
                    <th className="px-6 py-4 text-left font-semibold">Body Part</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {latestInjuries.map((injury, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-card/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold">{injury.name}</div>
                        <div className="text-sm text-muted-foreground">{injury.team}</div>
                      </td>
                      <td className="px-6 py-4">{injury.league}</td>
                      <td className="px-6 py-4 text-2xl">{injury.country}</td>
                      <td className="px-6 py-4">
                        <span className={`font-semibold ${getSeverityColor(injury.severity)}`}>
                          {injury.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4">{injury.bodyPart}</td>
                      <td className="px-6 py-4">
                        <span className="text-sm">{injury.date}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-card/30 flex items-center justify-between border-t border-border">
              <div className="text-sm text-muted-foreground">Page 1 of 2</div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-card border border-border hover:bg-card/80">Previous</button>
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">Next</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="text-primary hover:underline font-semibold">
              See All Latest Injured Players →
            </button>
          </div>
        </div>
      </section>

      {/* As Featured On */}
      <section className="w-full py-12 bg-card/30 border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold text-center">As Featured On</h2>
        </div>
        <div className="relative">
          <div className="flex gap-8 featured-scroll-row">
            {[...featuredMedia, ...featuredMedia].map((media, idx) => (
              <div key={idx} className="flex-shrink-0 px-8 py-4 text-xl font-semibold text-muted-foreground whitespace-nowrap">
                {media}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 mt-8 text-center text-muted-foreground">
          FootyInjuries.com is trusted by leading sports media outlets worldwide for accurate football injury updates and player recovery information.
        </div>
      </section>

      {/* Premium Features */}
      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, idx) => (
              <div key={idx} className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
                  {feature.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="w-full py-12 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top 10 Leagues */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Top 10 Leagues Injuries</h3>
              <div className="space-y-3">
                {leagueStats.map((league, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-card/50 transition-colors">
                    <div className="w-8 text-center font-bold text-muted-foreground">{idx + 1}</div>
                    <div className="text-2xl">{league.flag}</div>
                    <div className="flex-1 font-semibold">{league.league}</div>
                    <div className="px-4 py-1 bg-primary/20 text-primary rounded-full font-bold">{league.count}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top 10 Teams */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Top 10 Teams with Most Injuries</h3>
              <div className="space-y-3">
                {teamStats.map((team, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-card/50 transition-colors">
                    <div className="w-8 text-center font-bold text-muted-foreground">{idx + 1}.</div>
                    <div className="text-xl">{team.emoji}</div>
                    <div className="flex-1 font-semibold">{team.team}</div>
                    <div className="px-4 py-1 bg-destructive/20 text-destructive rounded-full font-bold">{team.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending & Recovered Players */}
      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trending Players */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Trending Players</h3>
              <div className="space-y-3">
                {trendingPlayers.map((player, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-card/50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{player.name}</div>
                      <div className="text-sm text-muted-foreground">{player.team}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Recovered Players */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Latest Recovered Players</h3>
              <div className="space-y-3">
                {recoveredPlayers.map((player, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-card/50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center font-bold">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{player.name}</div>
                      <div className="text-sm text-muted-foreground">{player.team}</div>
                    </div>
                    <div className="text-sm text-accent font-semibold">{player.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Redesigned */}
      <section className="w-full bg-gradient-to-b from-background via-card/20 to-background border-t border-border py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Football Injuries Today — Latest Updates, Player Return Dates & Team News (2025–2026)
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Your real-time source for global football injury updates.
            </p>
            <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed mb-4">
                Football moves fast — and injuries change everything. Whether you're a fan, analyst, journalist, scout, or bettor looking for reliable player availability information, <span className="font-bold text-primary">FootyInjuries.com</span> delivers the world's most up-to-date injury news, covering every major league, every team, and every player.
              </p>
              <p className="text-lg leading-relaxed">
                From muscle strains to long-term ACL tears, from short recovery knocks to season-ending injuries, our platform tracks every development as it happens — with <span className="font-semibold text-accent">AI-powered injury insights, expected return dates, performance impact, and club medical updates.</span>
              </p>
            </div>
          </div>

          {/* Why It Matters Section */}
          <div className="mb-16">
            <div className="glass-card rounded-2xl p-8 border-l-4 border-primary">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">⚡</span>
                Why Football Injury News Matters
              </h3>
              <p className="text-lg mb-4 leading-relaxed">
                Injuries influence lineups, tactics, team strength, and even league outcomes. Clubs adjust their shape, bettors adapt their predictions, and analysts reassess player workloads.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Knowing which stars are out, doubtful, or returning soon is essential.
              </p>
              <div className="bg-card/50 rounded-xl p-6 mb-4">
                <p className="font-semibold text-lg mb-4"><span className="text-primary">FootyInjuries.com</span> helps you answer questions like:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Is my team missing key players this week?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Which players are doubtful for the next match?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>How long is a player expected to be out?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>What injuries are affecting Premier League clubs?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>Which players just returned to training?</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent text-xl">✓</span>
                    <span>How does injury timeline impact performance?</span>
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-accent">We provide the clarity you need — instantly.</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Latest Injuries */}
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                Latest Football Injuries — Updated Daily
              </h3>
              <p className="mb-4 text-muted-foreground">Our injury engine covers all major competitions, including:</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'MLS', 'Saudi Pro League', 'Championship', 'UCL / UEL / UECL', '+100 more leagues'].map((league, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-sm font-medium">
                    {league}
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-semibold mb-3">Each player profile includes:</p>
                <div className="space-y-2 text-sm">
                  {['Current Injury Status', 'Expected Return Date', 'Injury Type & Severity', 'Rehab Timeline', 'Match Availability', 'Past Injury History', 'Season Performance Metrics', 'AI-generated analysis & risk indicators'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Common Injuries */}
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🏥</span>
                Most Common Football Injuries We Track
              </h3>
              <p className="mb-4 text-muted-foreground">Football injuries vary by position, playing style, and match load. The ones we track most often are:</p>
              <div className="grid gap-2 mb-4">
                {[
                  { name: 'Hamstring Strains', severity: 'moderate' },
                  { name: 'Ankle Sprains', severity: 'minor' },
                  { name: 'ACL Tears & Ligament Damage', severity: 'severe' },
                  { name: 'Groin Injuries', severity: 'moderate' },
                  { name: 'Knee Problems', severity: 'moderate' },
                  { name: 'Muscle Fatigue & Overload', severity: 'minor' },
                  { name: 'Back Issues', severity: 'moderate' },
                  { name: 'Concussions', severity: 'severe' }
                ].map((injury, idx) => (
                  <div key={idx} className={`rounded-lg px-4 py-2 text-sm font-medium border ${
                    injury.severity === 'severe' ? 'bg-red-500/10 border-red-500/20' :
                    injury.severity === 'moderate' ? 'bg-orange-500/10 border-orange-500/20' :
                    'bg-yellow-500/10 border-yellow-500/20'
                  }`}>
                    {injury.name}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">Our system tags them with recovery difficulty and expected downtime so you can assess player risk at a glance.</p>
            </div>
          </div>

          {/* Team & Long-term Injuries */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">👥</span>
                Team-by-Team Injury Lists
              </h3>
              <p className="mb-4 text-muted-foreground">Explore injuries for every club with dedicated team pages showing:</p>
              <div className="space-y-2 mb-4">
                {['Current Injured Players', 'Severity Overview', 'Days Missed', 'Injury Timeline Charts', 'Players Returning Soon', 'Fitness Status Indicators', 'Squad Depth & Positional Impact'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-card/50 rounded-lg px-3 py-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm italic">Whether it's Manchester United injuries, Barcelona injury list, or AC Milan players out, we give you structured, easy-to-navigate team dashboards.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 border-l-4 border-destructive">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🩺</span>
                Long-Term Injuries & Big Absences
              </h3>
              <p className="mb-4 leading-relaxed">
                Some injuries reshape entire seasons. ACL tears, Achilles ruptures, and severe hamstring tears can sideline players for months.
              </p>
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 mb-4">
                <p className="font-semibold mb-3"><span className="text-primary">FootyInjuries.com</span> tracks long-term injuries closely — showing:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">→</span>
                    <span className="text-sm">how long they'll be out,</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">→</span>
                    <span className="text-sm">how often they've had the same injury,</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">→</span>
                    <span className="text-sm">and the expected timeline for full recovery.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search & AI Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🔍</span>
                Search Injuries by Player, Team, or League
              </h3>
              <div className="space-y-3 mb-4">
                <p className="text-muted-foreground">Trying to find out if Marcus Silva is injured?</p>
                <p className="text-muted-foreground">Wondering when Pedri, Bukayo Saka, Jude Bellingham, or Vinícius Júnior will return?</p>
                <p className="text-muted-foreground">Want the full Premier League injury list before the weekend?</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                <p className="font-semibold text-lg text-primary">Just use our global search bar and get answers instantly.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🤖</span>
                AI-Powered Injury Analysis
              </h3>
              <p className="mb-4"><span className="font-semibold text-primary">FootyInjuries.com</span> uses smart AI models that:</p>
              <div className="space-y-2 mb-4">
                {['summarize injuries in human language', 'estimate recovery windows', 'analyze performance impact', 'check minutes overload and fatigue risk', 'detect patterns in recurrent injuries', 'generate SEO-optimized insights for every player'].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-accent/10 rounded-lg px-3 py-2">
                    <span className="text-accent">✓</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-accent">This means every player page receives a unique, expert-level breakdown.</p>
            </div>
          </div>

          {/* Match Impact & Alerts */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">⚽</span>
                Match Impact: Who Will Miss the Next Game?
              </h3>
              <p className="mb-4 text-muted-foreground">Before each matchday, we update:</p>
              <div className="grid grid-cols-2 gap-3">
                {['Unavailable Players', 'Doubtful / 50–50 Players', 'Returning from Injury', 'Players who just resumed training'].map((item, idx) => (
                  <div key={idx} className="bg-card/50 border border-border rounded-lg px-3 py-2 text-sm font-medium text-center">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm italic">You can also check upcoming fixtures to see how injuries may affect your team's next match.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🔔</span>
                Real-Time Injury Alerts
              </h3>
              <p className="mb-4 text-muted-foreground">Get instant updates on:</p>
              <div className="space-y-2 mb-4">
                {['New injuries', 'Training setbacks', 'Recovery progress', 'Suspensions', 'Matchday squad availability'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-lg px-3 py-2">
                    <span className="text-primary">🔔</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold">Your homepage feed updates constantly to reflect the newest medical information.</p>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="glass-card rounded-2xl p-10 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20">
            <h3 className="text-3xl font-bold mb-6">Why FootyInjuries.com Is the Most Complete Injury Database</h3>
            <p className="text-lg mb-8 text-muted-foreground">Compared to ordinary injury lists, we provide:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                'Real-time updates',
                'AI-generated insights',
                'Player performance + minutes load',
                'Long-term injury timelines',
                'Historical medical records',
                'Team depth + positional impact',
                'Fast, clean, mobile-friendly UI',
                'Searchable platform covering 100+ leagues'
              ].map((item, idx) => (
                <div key={idx} className="bg-card rounded-xl p-4 border border-border hover:border-primary transition-colors">
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-accent text-xl">✔</span>
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              We're the only platform combining injury tracking, performance data, and AI analysis into one unified experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Logo and Description */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">⚽</span>
              <h3 className="text-xl font-bold">FootyInjuries.com</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">
              FootyInjuries.com is the home of football player injuries. We provide daily injury information, analysis, and predictions for football fans. Our goal is to find recent injuries about players easily and effective.
            </p>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Our Team</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">All League Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Team Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Player Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Methodology</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Leagues</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Premier League Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Bundesliga Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Serie A Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">La Liga Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Ligue 1 Injuries</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Teams Injuries</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Manchester City Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Real Madrid Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Bayern Munich Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">PSG Injuries</a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Barcelona Injuries</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>© 2025 FootyInjuries.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
