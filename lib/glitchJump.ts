// Utility to trigger a random glitch jump animation on an element
export function triggerRandomGlitchJump(buttonEl: HTMLElement | null) {
  if (!buttonEl) return;
  // Helper for random value in range, rounded to nearest 10
  const rand = (min: number, max: number) => Math.round((Math.random() * (max - min) + min) / 10) * 10;
  // 5 keyframes: 0%, 15%, 35%, 60%, 100%
  const keyframes = [
    { percent: 0,    x: 0,    y: 0,    scale: 1,    rotate: 0 },
    { percent: 15,   x: rand(-600, 600), y: rand(-600, 600), scale: 1.12, rotate: rand(-15, 15) },
    { percent: 35,   x: rand(-600, 600), y: rand(-600, 600), scale: 1.08, rotate: rand(-12, 12) },
    { percent: 60,   x: rand(-600, 600), y: rand(-600, 600), scale: 1.12, rotate: rand(-15, 15) },
    { percent: 100,  x: 0,    y: 0,    scale: 1,    rotate: 0 }
  ];
  let css = '';
  for (const kf of keyframes) {
    css += `\n      ${kf.percent}% { transform: translate(${kf.x}px, ${kf.y}px) scale(${kf.scale}) rotate(${kf.rotate}deg); }`;
  }
  const animName = `glitch-jump-${Date.now()}-${Math.floor(Math.random()*10000)}`;
  const keyframesCSS = `@keyframes ${animName} {${css}\n}`;
  let styleTag = document.getElementById('glitch-jump-style') as HTMLStyleElement | null;
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'glitch-jump-style';
    document.head.appendChild(styleTag);
  }
  styleTag.appendChild(document.createTextNode(keyframesCSS));
  buttonEl.style.animation = 'none';
  void buttonEl.offsetWidth;
  buttonEl.style.animation = `${animName} 0.32s cubic-bezier(.25,1.7,.5,1.1) 1`;
}
