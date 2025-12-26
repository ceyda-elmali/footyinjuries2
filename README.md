# ⚽ FootyInjuries

A comprehensive football injury tracking platform providing real-time injury updates, player statistics, and team injury reports across major European leagues and international competitions.

## 🌟 Features

### 📊 Comprehensive Coverage

- **Multiple Leagues**: Premier League, La Liga, Bundesliga, Serie A, Ligue 1, Eredivisie, Primeira Liga, Championship, MLS, Brazilian Serie A, and Saudi Pro League
- **Real-time Updates**: Latest injury news and status updates
- **Player Profiles**: Detailed injury history and statistics for individual players
- **Team Analytics**: Team-specific injury reports and trends

### 🗺️ Interactive Visualizations

- **Injury Map View**: Visual representation of injury locations on player body
- **Severity Indicators**: Color-coded severity levels (Minor, Moderate, Serious, Long-term)
- **Recovery Timeline**: Expected return dates and recovery progress

### 🔍 Advanced Features

- **Smart Filtering**: Filter by league, team, position, injury type, and severity
- **Search Functionality**: Quick search across players, teams, and injuries
- **Upcoming Matches**: View injury impact on upcoming fixtures
- **Top Injured Players**: Track most frequently injured players
- **Latest Injuries**: Stay updated with recent injury news

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ceydaakin/footyinjuries.git
cd footyinjuries
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library with Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Geist (optimized with next/font)

## 📁 Project Structure

```
footyinjuries/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── players/      # Player pages
│   │   ├── teams/        # Team pages
│   │   ├── injuries/     # Injury listings
│   │   └── [league]/     # League-specific pages
│   ├── components/       # Reusable components
│   │   ├── ui/          # UI primitives
│   │   └── ...          # Feature components
│   └── lib/             # Utilities and helpers
├── public/              # Static assets
└── ...
```

## 🎨 Key Pages

- **Home** (`/`) - Dashboard with latest injuries, top players, and upcoming matches
- **Players** (`/players`) - Complete player injury database
- **Teams** (`/teams`) - Team-specific injury reports
- **Injuries** (`/injuries`) - Comprehensive injury listings
- **League Pages** - Dedicated pages for each supported league
- **About** (`/about`) - Information about the platform
- **Methodology** (`/methodology`) - Data collection and classification methods

## 📊 Data & Methodology

Our platform aggregates injury data from multiple reliable sources and categorizes them by:

- **Injury Type**: Muscle, Ligament, Bone, etc.
- **Severity**: Minor, Moderate, Serious, Long-term
- **Body Location**: Visual mapping of injury locations
- **Recovery Timeline**: Estimated return dates

For detailed information, visit our [Methodology page](https://footyinjuries.com/methodology).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

For questions or feedback, please visit our [Contact page](https://footyinjuries.com/contact).

## 🔗 Links

- **Live Site**: [footyinjuries.com](https://footyinjuries.com)
- **GitHub**: [github.com/ceydaakin/footyinjuries](https://github.com/ceydaakin/footyinjuries)

---

Built with ⚽ by the FootyInjuries team
