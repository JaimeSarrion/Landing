// The hero terminal: an agent session that types itself, finishes, pauses and starts again.

type Step =
  | { k: 'cmd'; text: string }                    // typed by "me", character by character
  | { k: 'task'; text: string; done: string; ms: number } // spinner, then a done line
  | { k: 'out'; html: string; ms?: number };      // printed at once

const SCRIPT: Step[] = [
  { k: 'cmd', text: 'implement spec 014-checkout-form' },
  { k: 'task', text: 'Reading specs/014-checkout-form/spec.md', done: '<span class="ok">✓</span> Read <span class="file">spec.md</span>, <span class="file">plan.md</span> and <span class="file">tasks.md</span>', ms: 1100 },
  { k: 'task', text: '<span class="ag">planner</span> splitting the spec into test cases', done: '<span class="ok">✓</span> <span class="ag">planner</span> 6 test cases', ms: 1300 },
  { k: 'task', text: '<span class="ag">writer</span> writing tests/checkout.spec.ts', done: '<span class="ok">✓</span> <span class="ag">writer</span> <span class="file">tests/checkout.spec.ts</span> <span class="add">+148</span>', ms: 1600 },
  { k: 'out', html: '<span class="d">  │</span> <span class="add">+ test("rejects an expired card", async ({ page }) =&gt; {</span>', ms: 140 },
  { k: 'out', html: '<span class="d">  │</span> <span class="add">+   await checkout.fillCard({ expiry: "01/24" });</span>', ms: 140 },
  { k: 'out', html: '<span class="d">  │</span> <span class="add">+   await expect(checkout.error).toHaveText(/expired/);</span>', ms: 400 },
  { k: 'task', text: '<span class="ag">reviewer</span> checking selectors and waits', done: '<span class="ok">✓</span> <span class="ag">reviewer</span> no flaky waits found', ms: 1200 },
  { k: 'cmd', text: 'npx playwright test checkout' },
  { k: 'task', text: 'Running 6 tests using 3 workers', done: '<span class="ok">✓ 6 passed</span> <span class="d">(2.1s)</span>', ms: 1500 },
  { k: 'out', html: '<span class="ok">●</span> <span class="c">Pull request opened:</span> test: checkout form coverage', ms: 3600 },
];

const SPIN = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const MAX_LINES = 18;

export function initTerminal(root: HTMLElement, animate: boolean) {
  const out = root.querySelector<HTMLElement>('.tty__lines')!;
  const btn = root.querySelector<HTMLButtonElement>('.tty__pause')!;

  const add = (html: string) => {
    const el = document.createElement('div');
    el.innerHTML = html;
    out.append(el);
    while (out.children.length > MAX_LINES) out.firstElementChild!.remove();
    return el;
  };
  const prompt = (text = '') => `<span class="p">❯</span> <span class="c">${text}</span>`;

  // Reduced motion: the finished session, still.
  if (!animate) {
    for (const s of SCRIPT) add(s.k === 'cmd' ? prompt(s.text) : s.k === 'task' ? s.done : s.html);
    add(prompt() + '<span class="cur"></span>');
    btn.hidden = true;
    return;
  }

  let paused = false;
  let visible = true;
  btn.addEventListener('click', () => {
    paused = !paused;
    btn.textContent = paused ? 'Play' : 'Pause';
    btn.setAttribute('aria-pressed', String(paused));
  });
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(root);

  const wait = (ms: number) =>
    new Promise<void>((res) => {
      let left = ms;
      let last = performance.now();
      const tick = (now: number) => {
        if (!paused && visible) left -= now - last;
        last = now;
        left <= 0 ? res() : requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });

  const run = async () => {
    for (;;) {
      out.textContent = '';
      for (const s of SCRIPT) {
        if (s.k === 'cmd') {
          const line = add(prompt() + '<span class="cur"></span>');
          for (let i = 1; i <= s.text.length; i++) {
            line.innerHTML = prompt(s.text.slice(0, i)) + '<span class="cur"></span>';
            await wait(28 + Math.random() * 50);
          }
          await wait(380);
          line.innerHTML = prompt(s.text);
        } else if (s.k === 'task') {
          const line = add('');
          const t0 = performance.now();
          let f = 0;
          while (performance.now() - t0 < s.ms || paused) {
            line.innerHTML = `<span class="spin">${SPIN[f++ % SPIN.length]}</span> ${s.text}`;
            await wait(80);
          }
          line.innerHTML = s.done;
        } else {
          add(s.html);
          await wait(s.ms ?? 200);
        }
      }
      const end = add(prompt() + '<span class="cur"></span>');
      await wait(2600);
      end.remove();
    }
  };
  run();
}
