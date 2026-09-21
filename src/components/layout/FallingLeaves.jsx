import { useMemo } from "react";

const LEAF_IMAGES = [
  "/leaves/leaf-orange.png",
  "/leaves/leaf-brown.png",
  "/leaves/leaf-red.png",
  "/leaves/leaf-yellow.png",
];

const LEAF_COUNT = 16;

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function makeLeaves() {
  return Array.from({ length: LEAF_COUNT }, (_, i) => ({
    id: i,
    image: LEAF_IMAGES[Math.floor(Math.random() * LEAF_IMAGES.length)],
    left: randomBetween(0, 100),
    size: randomBetween(18, 38),
    fallDuration: randomBetween(11, 19),
    swayDuration: randomBetween(3, 6),
    spinDuration: randomBetween(4, 9),
    delay: randomBetween(0, 19),
    spinDirection: Math.random() > 0.5 ? 1 : -1,
    opacity: randomBetween(0.55, 0.9),
  }));
}

export default function FallingLeaves() {
  const leaves = useMemo(makeLeaves, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="leaf"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            opacity: leaf.opacity,
            animationDuration: `${leaf.fallDuration}s, ${leaf.swayDuration}s`,
            animationDelay: `${leaf.delay}s, ${leaf.delay}s`,
          }}
        >
          <img
            src={leaf.image}
            alt=""
            className="leaf-spin"
            style={{
              animationDuration: `${leaf.spinDuration}s`,
              animationDirection:
                leaf.spinDirection > 0 ? "normal" : "reverse",
            }}
          />
        </span>
      ))}
    </div>
  );
}
