"use client";

import { motion } from "framer-motion";

// Simulated contribution data (52 weeks x 7 days)
function generateContributions(): number[][] {
  const weeks: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      // More activity in recent weeks
      const recency = w / 52;
      const baseChance = 0.3 + recency * 0.5;
      if (Math.random() < baseChance) {
        const intensity = Math.random();
        if (w > 45) {
          // Very active recently
          week.push(intensity < 0.2 ? 1 : intensity < 0.5 ? 2 : intensity < 0.8 ? 3 : 4);
        } else {
          week.push(intensity < 0.5 ? 1 : intensity < 0.8 ? 2 : 3);
        }
      } else {
        week.push(0);
      }
    }
    weeks.push(week);
  }
  return weeks;
}

const contributions = generateContributions();

const colors = [
  "bg-[#161b22]",
  "bg-[#0e4429]",
  "bg-[#006d32]",
  "bg-[#26a641]",
  "bg-[#39d353]",
];

export default function GitHubActivity() {
  const totalContributions = contributions
    .flat()
    .reduce((sum, val) => sum + val, 0);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold">Contribution Activity</h2>
              <p className="text-sm text-muted">
                {totalContributions} contributions in the last year
              </p>
            </div>
            <a
              href="https://github.com/charlestonneslan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              View on GitHub
            </a>
          </div>

          {/* Contribution grid */}
          <div className="bg-card-bg border border-card-border rounded-xl p-4 overflow-x-auto">
            <div className="flex gap-[3px] min-w-[720px]">
              {contributions.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((level, di) => (
                    <motion.div
                      key={di}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: wi * 0.01 + di * 0.005,
                        duration: 0.2,
                      }}
                      className={`w-[11px] h-[11px] rounded-sm ${colors[level]} hover:ring-1 hover:ring-white/30 transition-all cursor-pointer`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-1 mt-3 text-xs text-muted">
              <span>Less</span>
              {colors.map((color, i) => (
                <div key={i} className={`w-[11px] h-[11px] rounded-sm ${color}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
