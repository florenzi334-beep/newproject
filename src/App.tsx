import { useEffect, useRef, useState } from 'react';
import {
  Search,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  AlertTriangle,
  HandCoins,
  MousePointerClick,
  Eye,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Phone shell                                                        */
/* ------------------------------------------------------------------ */

type PhoneProps = {
  label: string;
  step: string;
  children: React.ReactNode;
  className?: string;
};

function Phone({ label, step, children, className = '' }: PhoneProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
        <span className="rounded-full bg-neon/10 px-2 py-0.5 font-semibold text-neon">{step}</span>
        <span>{label}</span>
      </div>

      <div className="relative">
        {/* glow halo */}
        <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-neon/10 blur-2xl" />

        {/* device frame */}
        <div className="relative h-[640px] w-[300px] rounded-[2.75rem] border border-white/10 bg-ink-900 p-3 shadow-phone">
          {/* side buttons */}
          <div className="absolute -left-[3px] top-28 h-12 w-[3px] rounded-l bg-white/10" />
          <div className="absolute -left-[3px] top-44 h-16 w-[3px] rounded-l bg-white/10" />
          <div className="absolute -right-[3px] top-36 h-20 w-[3px] rounded-r bg-white/10" />

          {/* screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-ink-950">
            {/* dynamic island */}
            <div className="absolute left-1/2 top-2 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
            <div className="scrollbar-none relative h-full w-full overflow-y-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Status bar                                                         */
/* ------------------------------------------------------------------ */

function StatusBar({ dark = false }: { dark?: boolean }) {
  const tone = dark ? 'text-white' : 'text-white';
  return (
    <div className={`flex items-center justify-between px-6 pt-3 text-[11px] font-semibold ${tone}`}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <span className="inline-block h-2.5 w-3.5 rounded-[2px] border border-current">
          <span className="block h-full w-3/4 rounded-[1px] bg-current" />
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 1 — Home                                                    */
/* ------------------------------------------------------------------ */

function HomeScreen() {
  const [url, setUrl] = useState('my-store.myshopify.com');
  return (
    <div className="flex min-h-full flex-col bg-ink-950 bg-radial-fade">
      <StatusBar />

      {/* brand */}
      <div className="flex items-center justify-between px-6 pt-5">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-neon text-ink-950 shadow-neon-sm">
            <Zap className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <span className="font-display text-sm font-700 tracking-tight">MobileMend</span>
        </div>
        <div className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5">
          <span className="text-[10px] font-semibold text-white/60">JM</span>
        </div>
      </div>

      {/* headline */}
      <div className="px-6 pt-10">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-neon/20 bg-neon/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neon">
          <Sparkles className="h-3 w-3" /> Mobile UX Audit
        </div>
        <h1 className="font-display text-[26px] font-700 leading-[1.1] tracking-tight text-balance">
          Find lost sales on your{' '}
          <span className="bg-gradient-to-r from-neon to-neon-400 bg-clip-text text-transparent">
            mobile store
          </span>
        </h1>
        <p className="mt-3 text-[13px] leading-relaxed text-white/50">
          Paste your Shopify URL. Get a full mobile checkout report in 60 seconds.
        </p>
      </div>

      {/* URL input */}
      <div className="px-6 pt-7">
        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-white/40">
          Store URL
        </label>
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-800 px-3.5 py-3.5 focus-within:border-neon/50 focus-within:shadow-neon-sm transition">
          <Search className="h-4 w-4 shrink-0 text-white/30" />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="my-store.myshopify.com"
            className="w-full bg-transparent text-[13px] font-medium text-white placeholder:text-white/25 focus:outline-none"
          />
          <span className="shrink-0 rounded-md bg-white/5 px-1.5 py-0.5 text-[9px] font-semibold text-white/40">
            HTTPS
          </span>
        </div>

        {/* trust row */}
        <div className="mt-3 flex items-center gap-3 text-[10px] text-white/35">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-neon" /> Secure scan
          </span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>No login needed</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>60s report</span>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pt-6">
        <button className="group relative w-full overflow-hidden rounded-2xl bg-neon py-4 text-ink-950 shadow-neon animate-pulseGlow">
          <span className="relative z-10 flex items-center justify-center gap-2 font-display text-[15px] font-700 tracking-tight">
            Audit My Store
            <span className="rounded-md bg-ink-950/15 px-1.5 py-0.5 text-[12px] font-700">$5</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700" />
        </button>
        <p className="mt-2.5 text-center text-[10px] text-white/30">
          One-time audit · refunded if no issues found
        </p>
      </div>

      {/* recent scans */}
      <div className="mt-auto px-6 pb-8 pt-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">
          Recent audits
        </p>
        <div className="space-y-2">
          {[
            { name: 'allbirds.com', score: 91 },
            { name: 'glossier.com', score: 84 },
          ].map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5"
            >
              <span className="text-[12px] font-medium text-white/70">{s.name}</span>
              <span className="rounded-md bg-neon/10 px-2 py-0.5 text-[11px] font-700 text-neon">
                {s.score}/100
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 2 — Loading                                                 */
/* ------------------------------------------------------------------ */

function LoadingScreen() {
  const [progress, setProgress] = useState(34);
  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => (p >= 92 ? 92 : p + Math.random() * 7));
    }, 220);
    return () => clearInterval(t);
  }, []);

  const steps = [
    { label: 'Rendering mobile viewport', done: true },
    { label: 'Mapping tap targets', done: true },
    { label: 'Walking checkout flow', done: progress > 60 },
    { label: 'Scoring conversion risks', done: progress > 88 },
  ];

  return (
    <div className="flex min-h-full flex-col bg-ink-950 bg-radial-fade">
      <StatusBar />
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        {/* animated ring */}
        <div className="relative mb-10 grid place-items-center">
          <div className="absolute h-40 w-40 rounded-full bg-neon/10 blur-2xl animate-pulseGlow" />
          <svg className="h-36 w-36 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#39ff14"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={327}
              strokeDashoffset={327 - (327 * progress) / 100}
              style={{ transition: 'stroke-dashoffset 0.4s ease', filter: 'drop-shadow(0 0 6px rgba(57,255,20,0.6))' }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="font-display text-3xl font-700 text-white">
              {Math.round(progress)}%
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/40">analyzing</span>
          </div>
        </div>

        {/* status text */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-ink-800 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          <span className="font-display text-[13px] font-600 text-white/90">
            Scanning Mobile Layout &amp; Checkout…
          </span>
        </div>

        {/* progress bar */}
        <div className="w-full">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
            <div
              className="relative h-full rounded-full bg-gradient-to-r from-neon-600 to-neon transition-all duration-300"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-y-0 -left-1/3 w-1/3 animate-shimmer bg-white/40 blur-sm" />
              </div>
            </div>
          </div>

          {/* steps */}
          <div className="mt-5 space-y-2.5">
            {steps.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 text-[12px]">
                <span
                  className={`grid h-4 w-4 place-items-center rounded-full transition ${
                    s.done ? 'bg-neon text-ink-950' : 'border border-white/15 bg-white/5 text-transparent'
                  }`}
                >
                  <CheckCircle2 className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className={s.done ? 'text-white/70' : 'text-white/35'}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="px-6 pb-8 text-center text-[10px] text-white/25">
        MobileMend is reading your theme, cart, and checkout. Hang tight.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 3 — Results                                                 */
/* ------------------------------------------------------------------ */

function ScoreDial({ score }: { score: number }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const [shown, setShown] = useState(0);
  useEffect(() => {
    let frame = 0;
    const id = setInterval(() => {
      setShown((s) => {
        if (s >= score) return score;
        return Math.min(score, s + 2);
      });
      if (frame++ > 60) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [score]);

  return (
    <div className="relative grid place-items-center">
      <svg className="h-32 w-32 -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ - (circ * shown) / 100}
          style={{ filter: 'drop-shadow(0 0 6px rgba(57,255,20,0.5))' }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1fcc0a" />
            <stop offset="100%" stopColor="#39ff14" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-3xl font-700 leading-none text-white">{shown}</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">/ 100</span>
      </div>
    </div>
  );
}

function ErrorCard({
  tag,
  title,
  detail,
  severity,
}: {
  tag: string;
  title: string;
  detail: string;
  severity: 'high' | 'med';
}) {
  return (
    <div className="rounded-xl border border-danger-500/20 bg-danger-500/[0.06] p-3">
      <div className="flex items-start gap-2.5">
        <span
          className={`mt-0.5 rounded-md px-1.5 py-0.5 text-[9px] font-700 uppercase tracking-wider ${
            severity === 'high'
              ? 'bg-danger-500 text-white'
              : 'bg-warn/20 text-warn'
          }`}
        >
          {tag}
        </span>
        <div className="min-w-0">
          <p className="text-[12px] font-600 text-white">{title}</p>
          <p className="mt-0.5 text-[11px] leading-snug text-white/45">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function ResultScreen() {
  return (
    <div className="flex min-h-full flex-col bg-ink-950 bg-radial-fade">
      <StatusBar />

      {/* header */}
      <div className="flex items-center justify-between px-5 pt-4">
        <button className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60">
          <ChevronRight className="h-4 w-4 rotate-180" />
        </button>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
          Audit Report
        </span>
        <button className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60">
          <Sparkles className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* score */}
      <div className="flex flex-col items-center px-5 pt-4">
        <ScoreDial score={78} />
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-neon/10 px-2.5 py-1 text-[11px] font-700 text-neon">
            Good, fixable
          </span>
          <span className="text-[11px] text-white/40">my-store.myshopify.com</span>
        </div>
        <p className="mt-2 text-center text-[11px] text-white/40">
          You're losing an estimated <span className="font-600 text-white">$1,240/mo</span> to mobile friction.
        </p>
      </div>

      {/* error cards */}
      <div className="px-5 pt-5">
        <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/40">
          <AlertTriangle className="h-3 w-3 text-danger-400" /> Issues found · 3
        </p>
        <div className="space-y-2">
          <ErrorCard
            tag="Critical"
            title="Checkout button below the fold"
            detail="Add-to-cart CTA pushed 640px down on iPhone SE. 41% of users never scroll."
            severity="high"
          />
          <ErrorCard
            tag="High"
            title="Tiny tap targets on size selector"
            detail="Size swatches are 28px — Apple's 44px minimum. Mis-taps on 12% of sessions."
            severity="high"
          />
          <ErrorCard
            tag="Medium"
            title="No guest checkout option"
            detail="Forced account creation drops 23% of mobile buyers at step 2."
            severity="med"
          />
        </div>
      </div>

      {/* tips */}
      <div className="px-5 pt-5 pb-8">
        <p className="mb-2.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/40">
          <Zap className="h-3 w-3 text-neon" /> Fix these to convert more
        </p>
        <div className="space-y-2">
          {[
            { icon: MousePointerClick, text: 'Sticky "Add to cart" bar on mobile product pages', lift: '+8%' },
            { icon: HandCoins, text: 'Enable guest checkout, move signup to post-purchase', lift: '+12%' },
            { icon: Eye, text: 'Lazy-load images below the fold, cut LCP by 1.4s', lift: '+5%' },
          ].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-neon/10 text-neon">
                <t.icon className="h-4 w-4" />
              </span>
              <p className="flex-1 text-[12px] font-medium text-white/80">{t.text}</p>
              <span className="shrink-0 rounded-md bg-neon/10 px-1.5 py-0.5 text-[10px] font-700 text-neon">
                {t.lift}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-4 w-full rounded-2xl border border-neon/30 bg-neon/5 py-3 font-display text-[13px] font-700 text-neon transition hover:bg-neon/10">
          Export full PDF report
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 bg-grid">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-neon/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-neon/5 blur-[120px]" />

      {/* page header */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 pt-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-neon-sm" />
          Mobile UX Audit · Shopify
        </div>
        <h1 className="font-display text-3xl font-700 tracking-tight text-white sm:text-4xl">
          Find lost sales on your mobile store
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/45">
          A three-screen flow: paste a URL, run the scan, get a fixable score and conversion tips.
        </p>
      </header>

      {/* phones */}
      <main className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-start lg:justify-center lg:gap-10">
        <Phone label="Home" step="01">
          <HomeScreen />
        </Phone>
        <Phone label="Scanning" step="02" className="lg:mt-12">
          <LoadingScreen />
        </Phone>
        <Phone label="Report" step="03">
          <ResultScreen />
        </Phone>
      </main>

      {/* footer */}
      <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-12 text-center text-[11px] text-white/25">
        MobileMend — mobile UX audits for Shopify · concept design
      </footer>
    </div>
  );
}
