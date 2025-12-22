"use client";
import React, { useState } from "react";

export default function NewsPage() {
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const allNews = [
    {
      title: "Mohamed Salah Sidelined with Hamstring Injury",
      category: "Premier League",
      date: "Nov 26, 2025",
      excerpt: "Liverpool's star forward Mohamed Salah will miss the next few weeks due to a hamstring strain sustained during training. The Egyptian is expected to return before Christmas.",
      image: "⚽",
      readTime: "3 min read"
    },
    {
      title: "Vinícius Júnior Injury Update: Real Madrid Provide Timeline",
      category: "La Liga",
      date: "Nov 26, 2025",
      excerpt: "Real Madrid have confirmed that Vinícius Júnior will be out until late December with a hamstring injury. The Brazilian winger is undergoing intensive treatment.",
      image: "⚽",
      readTime: "4 min read"
    },
    {
      title: "Kevin De Bruyne's Recovery Progressing Well",
      category: "Premier League",
      date: "Nov 25, 2025",
      excerpt: "Manchester City midfielder Kevin De Bruyne is making good progress in his recovery from a hamstring injury. Pep Guardiola expects him back for the festive fixtures.",
      image: "⚽",
      readTime: "2 min read"
    },
    {
      title: "Gavi's Long Road to Recovery: Barcelona Star Updates Fans",
      category: "La Liga",
      date: "Nov 24, 2025",
      excerpt: "Barcelona's young midfielder Gavi has shared a positive update on his ACL recovery. The Spanish international is targeting a return in March 2026.",
      image: "⚽",
      readTime: "5 min read"
    },
    {
      title: "Bundesliga Injury Crisis: Bayern Munich Hit Hard",
      category: "Bundesliga",
      date: "Nov 23, 2025",
      excerpt: "Bayern Munich are dealing with multiple injuries as they enter a crucial period. Jamal Musiala and Serge Gnabry are both expected to miss upcoming fixtures.",
      image: "⚽",
      readTime: "4 min read"
    },
    {
      title: "Premier League Injury Report: Week 14 Analysis",
      category: "Analysis",
      date: "Nov 22, 2025",
      excerpt: "A comprehensive look at the injury situation across the Premier League. With 47 active injuries, clubs are struggling with squad depth as the busy period approaches.",
      image: "📊",
      readTime: "6 min read"
    },
    {
      title: "Bukayo Saka Nearing Return for Arsenal",
      category: "Premier League",
      date: "Nov 21, 2025",
      excerpt: "Arsenal winger Bukayo Saka is close to returning from his ankle injury. Mikel Arteta confirmed the England international is training with the squad.",
      image: "⚽",
      readTime: "3 min read"
    },
    {
      title: "Injury Prevention: How Top Clubs Are Adapting",
      category: "Analysis",
      date: "Nov 20, 2025",
      excerpt: "An in-depth look at how elite football clubs are using data and sports science to prevent injuries and manage player workload during the congested fixture schedule.",
      image: "🔬",
      readTime: "8 min read"
    },
    {
      title: "Florian Wirtz Injury Blow for Bayer Leverkusen",
      category: "Bundesliga",
      date: "Nov 19, 2025",
      excerpt: "Bayer Leverkusen's star playmaker Florian Wirtz has suffered a muscle strain. The German international is expected to miss two weeks of action.",
      image: "⚽",
      readTime: "3 min read"
    },
    {
      title: "Fantasy Football: Navigating the Injury Crisis",
      category: "Fantasy",
      date: "Nov 18, 2025",
      excerpt: "With key players sidelined, fantasy managers need to adapt their strategies. Here's our guide to the best replacements and differential picks.",
      image: "🎮",
      readTime: "5 min read"
    },
  ];

  const filteredNews = allNews.filter(news => 
    filterCategory === "all" || news.category === filterCategory
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Injury News & Updates</h1>
          <p className="text-xl text-muted-foreground">Latest football injury news, analysis, and recovery updates</p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-2">Filter by Category</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Categories</option>
                <option value="Premier League">Premier League</option>
                <option value="La Liga">La Liga</option>
                <option value="Bundesliga">Bundesliga</option>
                <option value="Serie A">Serie A</option>
                <option value="Ligue 1">Ligue 1</option>
                <option value="Analysis">Analysis</option>
                <option value="Fantasy">Fantasy</option>
              </select>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-bold text-foreground">{filteredNews.length}</span> articles
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((article, idx) => (
              <article key={idx} className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-transform">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-48 flex items-center justify-center text-6xl">
                  {article.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    <a
                      href={`/news/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for daily injury updates and exclusive analysis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
