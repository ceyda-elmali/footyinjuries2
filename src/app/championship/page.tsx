"use client";
import React from "react";

export default function ChampionshipInjuries() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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

      <section className="w-full bg-gradient-to-br from-primary/20 via-background to-accent/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-5xl">
              🏴󠁧󠁢󠁥󠁮󠁧󠁿
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Championship</h1>
              <p className="text-xl text-muted-foreground mb-4">England</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Season:</span> <span className="font-semibold">2025/26</span>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Gameweek:</span> <span className="font-semibold">18</span>
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border">
                  <span className="text-muted-foreground">Last updated:</span> <span className="font-semibold">Nov 27, 2025</span>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center border-l-4 border-destructive">
              <div className="text-5xl font-bold text-destructive mb-2">41</div>
              <div className="text-sm font-semibold text-muted-foreground">Total Injuries</div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Championship Injury Report – Week 18</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Championship continues to be one of the most physically demanding leagues in world football, with 41 active injuries across the 24 clubs. The relentless fixture schedule takes its toll as teams battle for promotion.
              </p>
              <p>
                <span className="font-semibold text-foreground">Leeds United</span>, <span className="font-semibold text-foreground">Southampton</span>, and <span className="font-semibold text-foreground">Leicester City</span> are among the promotion contenders managing significant injury lists.
              </p>
              <p>
                Hamstring and muscle fatigue injuries are particularly prevalent due to the congested fixture list. Most clubs are rotating their squads heavily to manage player workload.
              </p>
              <p className="font-semibold text-foreground">
                The winter period will be crucial for injury management as teams face three games per week in some cases.
              </p>
              <div className="mt-8 pt-6 border-t border-border text-sm flex items-center justify-between">
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
