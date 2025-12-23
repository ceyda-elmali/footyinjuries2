"use client";
import React from "react";

export default function ContactPage() {
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

      <section className="w-full bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">Get in touch with our team</p>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:info@footyinjuries.com" className="text-primary hover:underline">info@footyinjuries.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🐦</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Twitter</h3>
                  <a href="https://twitter.com/footyinjuries" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@footyinjuries</a>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
