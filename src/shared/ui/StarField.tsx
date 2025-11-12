import { useMemo } from "react";

type Star = {
  top: number;
  left: number;
  size: number;
  opacity: number;
};

export function StarField({ count = 640, clusterCount = 16 }: { count?: number; clusterCount?: number }) {
  const stars: Star[] = useMemo(() => {
    const centers = Array.from({ length: clusterCount }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: 6 + Math.random() * 7,
    }));
    const totalWeight = centers.reduce((sum, c) => sum + c.r, 0);
    const starsPerCluster = centers.map((c) => Math.max(12, Math.round((c.r / totalWeight) * count)));
    const result: Star[] = [];
    centers.forEach((c, idx) => {
      const n = starsPerCluster[idx];
      for (let i = 0; i < n; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = c.r * Math.pow(Math.random(), 0.5);
        const jitter = (Math.random() - 0.5) * 2;
        let left = c.x + radius * Math.cos(angle) + jitter;
        let top = c.y + radius * Math.sin(angle) + jitter;
        left = Math.min(100, Math.max(0, left));
        top = Math.min(100, Math.max(0, top));
        const s = Math.random();
        const size = s < 0.9 ? 1 : s < 0.98 ? 2 : 3;
        const opacity = 0.8 + Math.random() * 0.2;
        result.push({ top, left, size, opacity });
      }
    });
    return result;
  }, [count, clusterCount]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {stars.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-full"
          style={{
            position: "absolute",
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}
