/*
  Very low opacity topographic contour lines, generated as SVG.
  Evokes an annotated field map behind the whole guide.
*/
export function TopoPattern() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="var(--teal)" strokeOpacity="0.045" strokeWidth="1.4">
          <path d="M-60 140c180-70 340-90 520-40s300 130 480 120 320-90 560-120" />
          <path d="M-60 190c190-60 350-75 530-28s310 118 490 110 330-82 540-108" />
          <path d="M-60 245c200-52 360-62 540-18s320 108 500 98 340-72 520-94" />
          <path d="M-60 310c210-45 375-50 555-8s330 96 510 88 350-62 495-80" />
        </g>
        <g stroke="var(--amber)" strokeOpacity="0.04" strokeWidth="1.4">
          <path d="M-60 640c220 60 400 78 580 30s320-138 500-130 340 96 480 122" />
          <path d="M-60 700c230 52 410 64 590 20s330-124 510-116 350 84 460 108" />
          <path d="M-60 765c240 45 420 52 600 12s340-110 520-102 360 72 440 92" />
        </g>
        <g stroke="var(--teal)" strokeOpacity="0.05" strokeWidth="1.2">
          <ellipse cx="1160" cy="185" rx="200" ry="80" transform="rotate(-14 1160 185)" />
          <ellipse cx="1160" cy="185" rx="140" ry="52" transform="rotate(-14 1160 185)" />
          <ellipse cx="1160" cy="185" rx="84" ry="28" transform="rotate(-14 1160 185)" />
        </g>
        <g stroke="var(--amber)" strokeOpacity="0.045" strokeWidth="1.2">
          <ellipse cx="240" cy="690" rx="220" ry="90" transform="rotate(10 240 690)" />
          <ellipse cx="240" cy="690" rx="150" ry="58" transform="rotate(10 240 690)" />
          <ellipse cx="240" cy="690" rx="88" ry="30" transform="rotate(10 240 690)" />
        </g>
      </svg>
    </div>
  );
}
