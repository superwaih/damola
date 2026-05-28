/**
 * Realistic placeholder mockups for each section.
 * Each simulates what a real screenshot / photo would look like.
 */

/* ── Portrait photo placeholder ────────────────────────────────
   Warm amber/orange glow — mimics studio/natural light portrait.
─────────────────────────────────────────────────────────────── */
export function PortraitPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0e0b08] ${className}`}>
      {/* Warm ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 via-orange-900/50 to-[#0e0b08]" />
      {/* Soft spotlight glow from upper-right */}
      <div className="absolute -top-16 -right-8 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
      {/* Warm ground fill */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-orange-900/30 to-transparent" />
      {/* Person silhouette — head + torso */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Head */}
        <div className="w-24 h-28 rounded-full bg-amber-800/50 blur-sm mb-0" />
        {/* Neck */}
        <div className="-mt-4 w-10 h-8 bg-amber-800/40 blur-sm" />
        {/* Torso / jacket */}
        <div className="-mt-2 w-56 h-80 rounded-t-[3rem] bg-rose-600/30 blur-sm" />
      </div>
      {/* Subtle rim light on person */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-96 bg-gradient-to-t from-orange-400/10 to-transparent blur-xl" />
    </div>
  );
}

/* ── Web dashboard mockup (UVIVIO V2) ───────────────────────────
   Browser chrome + sidebar + content grid.
─────────────────────────────────────────────────────────────── */
export function WebDashboardMockup() {
  return (
    <div className="w-full h-full bg-[#0b0b1a] flex flex-col overflow-hidden">
      {/* Browser chrome */}
      <div className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-[#13131f] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-2 h-3 rounded-full bg-white/8" />
        <div className="w-3 h-3 rounded bg-white/10" />
      </div>

      {/* App shell */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="flex-shrink-0 w-11 bg-[#0a0a18] border-r border-white/5 flex flex-col items-center gap-3 py-3">
          <div className="w-6 h-6 rounded-lg bg-indigo-600/80" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-5 h-5 rounded bg-white/10" />
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-28 bg-white/25 rounded-full" />
            <div className="flex-1" />
            <div className="h-5 w-16 rounded-full bg-indigo-500/50" />
            <div className="w-5 h-5 rounded-full bg-white/10" />
          </div>

          {/* Stat cards row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { w: "w-12", c: "bg-indigo-400/30" },
              { w: "w-10", c: "bg-purple-400/30" },
              { w: "w-8", c: "bg-blue-400/30" },
            ].map(({ w, c }, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-2">
                <div className={`h-3 ${w} ${c} rounded-full mb-1.5`} />
                <div className="h-4 w-10 bg-white/20 rounded mb-1" />
                <div className="h-1.5 w-full bg-white/5 rounded-full">
                  <div className={`h-full ${c} rounded-full`} style={{ width: `${40 + i * 20}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Content grid */}
          <div className="flex-1 grid grid-cols-5 gap-2 overflow-hidden">
            {/* Wide left panel */}
            <div className="col-span-3 bg-white/5 rounded-lg p-2.5 flex flex-col gap-2 overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="h-2 w-16 bg-white/20 rounded-full" />
                <div className="flex-1" />
                <div className="h-2 w-8 bg-indigo-400/40 rounded-full" />
              </div>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 border-t border-white/5">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-500/40 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-1.5 w-3/4 bg-white/15 rounded-full mb-1" />
                    <div className="h-1 w-1/2 bg-white/8 rounded-full" />
                  </div>
                  <div className="h-1.5 w-8 bg-indigo-400/30 rounded-full flex-shrink-0" />
                </div>
              ))}
            </div>

            {/* Right panel */}
            <div className="col-span-2 flex flex-col gap-2 overflow-hidden">
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg p-2.5 flex-1">
                <div className="h-1.5 w-12 bg-white/20 rounded-full mb-2" />
                <div className="space-y-1.5">
                  {[75, 50, 90].map((w, i) => (
                    <div key={i} className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-400/50 rounded-full" style={{ width: `${w}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-2.5">
                <div className="h-1.5 w-10 bg-white/20 rounded-full mb-2" />
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-8 rounded bg-white/5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Phone screen content variants ─────────────────────────────── */
function FeedScreen() {
  return (
    <>
      <div className="flex items-center justify-between mb-1.5">
        <div className="h-2 w-14 bg-white/40 rounded-full" />
        <div className="w-4 h-4 rounded-full bg-white/15" />
      </div>
      {[
        { accent: "bg-orange-500/60", w: "w-2/3" },
        { accent: "bg-rose-500/50", w: "w-1/2" },
        { accent: "bg-pink-500/50", w: "w-3/4" },
      ].map(({ accent, w }, i) => (
        <div key={i} className="bg-white/8 rounded-xl p-2 mb-1.5">
          <div className={`h-1.5 ${w} ${accent} rounded-full mb-1`} />
          <div className="h-1 w-full bg-white/15 rounded-full mb-1" />
          <div className="flex gap-1.5 items-center mt-1.5">
            <div className="h-5 flex-1 bg-white/5 rounded" />
            <div className="h-5 w-10 bg-orange-500/40 rounded text-[6px] text-white/60 flex items-center justify-center">RSVP</div>
          </div>
        </div>
      ))}
    </>
  );
}

function LearningScreen() {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <div className="h-2 w-16 bg-white/40 rounded-full" />
        <div className="w-4 h-4 rounded-full bg-indigo-400/40" />
      </div>
      <div className="h-16 rounded-xl bg-gradient-to-br from-indigo-600/40 to-purple-600/30 mb-2 p-2 flex flex-col justify-end">
        <div className="h-1 w-full bg-white/10 rounded-full">
          <div className="h-full w-3/5 bg-indigo-400/70 rounded-full" />
        </div>
      </div>
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex items-center gap-1.5 mb-1.5">
          <div className="w-6 h-6 rounded-lg bg-indigo-500/30 flex-shrink-0" />
          <div className="flex-1">
            <div className="h-1.5 w-3/4 bg-white/20 rounded-full mb-1" />
            <div className="h-1 w-1/2 bg-white/10 rounded-full" />
          </div>
        </div>
      ))}
    </>
  );
}

function ChatScreen() {
  return (
    <>
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-5 h-5 rounded-full bg-blue-400/50" />
        <div className="h-2 w-16 bg-white/35 rounded-full" />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="self-start bg-white/10 rounded-xl rounded-tl-sm px-2 py-1.5 max-w-[70%]">
          <div className="h-1.5 w-16 bg-white/30 rounded-full mb-0.5" />
          <div className="h-1 w-12 bg-white/15 rounded-full" />
        </div>
        <div className="self-end bg-blue-600/60 rounded-xl rounded-tr-sm px-2 py-1.5 max-w-[65%]">
          <div className="h-1.5 w-14 bg-white/40 rounded-full" />
        </div>
        <div className="self-start bg-white/10 rounded-xl rounded-tl-sm px-2 py-1.5 max-w-[75%]">
          <div className="h-1.5 w-20 bg-white/30 rounded-full mb-0.5" />
          <div className="h-1 w-10 bg-white/15 rounded-full" />
        </div>
      </div>
    </>
  );
}

/* ── Single phone frame ─────────────────────────────────────────── */
function PhoneFrame({
  gradient,
  screen,
  elevated = false,
  scale = 1,
}: {
  gradient: string;
  screen: "feed" | "learning" | "chat";
  elevated?: boolean;
  scale?: number;
}) {
  return (
    <div
      className={`relative flex-shrink-0 rounded-[28px] overflow-hidden ring-2 ring-white/15 shadow-2xl shadow-black/60 ${elevated ? "-translate-y-4" : ""}`}
      style={{ width: 110 * scale, aspectRatio: "9/19", transform: `translateY(${elevated ? -16 : 0}px) scale(${scale})` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-black/40 rounded-full z-10" />
      {/* Screen content */}
      <div className="absolute inset-0 pt-6 pb-5 px-2 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-hidden">
          {screen === "feed" && <FeedScreen />}
          {screen === "learning" && <LearningScreen />}
          {screen === "chat" && <ChatScreen />}
        </div>
        {/* Bottom tab bar */}
        <div className="flex justify-around pt-2 border-t border-white/10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded-sm ${i === 0 ? "bg-white/50" : "bg-white/15"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── POPWUP mobile mockup (2 phones, warm tones) ────────────────── */
export function PopwupMobileMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#1a0810] via-[#200d12] to-[#0f0810] flex items-end justify-center gap-4 pb-4 pt-6 px-4">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-rose-900/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-orange-600/15 rounded-full blur-3xl" />
      <div className="relative flex items-end gap-3 justify-center">
        <PhoneFrame
          gradient="from-rose-900 via-orange-800 to-pink-900"
          screen="feed"
          elevated={false}
          scale={0.9}
        />
        <PhoneFrame
          gradient="from-orange-800 via-rose-800 to-pink-900"
          screen="chat"
          elevated
          scale={1}
        />
        <PhoneFrame
          gradient="from-pink-900 via-rose-800 to-orange-800"
          screen="feed"
          elevated={false}
          scale={0.9}
        />
      </div>
    </div>
  );
}

/* ── UVIVIO Mobile mockup (3 phones, blue tones, wide) ──────────── */
export function UvivioMobileMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#090d1f] via-[#0c1028] to-[#0a0820] flex items-end justify-center gap-4 pb-4 pt-6 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-blue-900/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-600/15 rounded-full blur-3xl" />
      <div className="relative flex items-end gap-4 justify-center">
        <PhoneFrame
          gradient="from-blue-900 via-indigo-800 to-violet-900"
          screen="learning"
          elevated={false}
          scale={0.85}
        />
        <PhoneFrame
          gradient="from-indigo-800 via-blue-800 to-purple-900"
          screen="chat"
          elevated
          scale={1}
        />
        <PhoneFrame
          gradient="from-violet-900 via-indigo-800 to-blue-900"
          screen="learning"
          elevated={false}
          scale={0.85}
        />
        <PhoneFrame
          gradient="from-purple-900 via-violet-800 to-indigo-900"
          screen="feed"
          elevated={false}
          scale={0.8}
        />
      </div>
    </div>
  );
}

/* ── Website thumbnail (portfolio pieces) ───────────────────────── */
export function WebsiteThumbnail({ dark = true, accent = "indigo" }: { dark?: boolean; accent?: "indigo" | "teal" }) {
  const accentColor = accent === "teal" ? "bg-teal-500/40" : "bg-indigo-500/40";
  const bg = dark ? "bg-[#0b0b18]" : "bg-[#0f1420]";
  return (
    <div className={`w-full h-full ${bg} flex flex-col overflow-hidden`}>
      {/* Nav */}
      <div className="flex-shrink-0 flex items-center gap-3 px-3 py-2 border-b border-white/5">
        <div className="w-4 h-4 rounded bg-white/20" />
        <div className="flex-1" />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-1.5 w-6 bg-white/15 rounded-full" />
        ))}
        <div className={`h-4 w-10 ${accentColor} rounded`} />
      </div>
      {/* Hero area */}
      <div className="p-3 flex-1 flex flex-col gap-2 overflow-hidden">
        <div className="h-2 w-1/3 bg-white/10 rounded-full" />
        <div className="h-3 w-3/4 bg-white/25 rounded-full" />
        <div className="h-2.5 w-1/2 bg-white/20 rounded-full" />
        <div className="flex gap-2 mt-1">
          <div className={`h-5 w-14 ${accentColor} rounded-full`} />
          <div className="h-5 w-14 bg-white/10 rounded-full" />
        </div>
        {/* Content blocks */}
        <div className="flex-1 grid grid-cols-2 gap-1.5 mt-1 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white/5 rounded-lg p-1.5">
              <div className="h-6 bg-white/8 rounded mb-1" />
              <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Service card thumbnails ────────────────────────────────────── */
export function MobileDesignThumb() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0d0b1f] via-[#110e28] to-[#0a0820] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/15 rounded-full blur-3xl" />
      <div className="relative flex gap-3 items-end">
        <PhoneFrame gradient="from-indigo-800 via-purple-800 to-violet-900" screen="learning" scale={0.85} />
        <PhoneFrame gradient="from-purple-700 via-indigo-800 to-blue-900" screen="chat" elevated scale={1} />
      </div>
    </div>
  );
}

export function WebDesignThumb() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#180d18] via-[#1a0d20] to-[#0f0818] relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-pink-600/15 rounded-full blur-3xl" />
      {/* Browser window */}
      <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-1.5 px-2.5 py-2 bg-[#1a1025]">
          {["bg-red-400/60","bg-yellow-400/60","bg-green-400/60"].map((c,i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${c}`} />
          ))}
          <div className="flex-1 mx-2 h-2.5 bg-white/8 rounded-full" />
        </div>
        <WebsiteThumbnail dark accent="indigo" />
      </div>
    </div>
  );
}

export function ProductDesignThumb() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#060d1c] via-[#0a1022] to-[#08091a] relative overflow-hidden flex items-center justify-center p-3">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
      <div className="absolute top-0 right-0 w-48 h-32 bg-blue-600/15 rounded-full blur-3xl" />
      {/* Mixed devices */}
      <div className="relative flex items-end gap-2 justify-center w-full">
        {/* Tablet */}
        <div className="flex-shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-xl" style={{ width: 90, height: 120 }}>
          <WebsiteThumbnail dark accent="indigo" />
        </div>
        {/* Phone */}
        <PhoneFrame gradient="from-blue-800 via-indigo-700 to-violet-900" screen="learning" elevated scale={0.9} />
      </div>
    </div>
  );
}
