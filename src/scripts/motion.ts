import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initTerminal } from './terminal';

gsap.registerPlugin(ScrollTrigger);

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s as any) as T;
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s as any)] as T[];

export function initMotion() {
  const nav = $('.nav');
  const onScroll = () => nav.classList.toggle('is-solid', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tty = $('[data-tty]');
  if (tty) initTerminal(tty, !reduced);
  if (reduced) return;

  // Smooth scroll, driven by GSAP's ticker so ScrollTrigger stays in sync.
  const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  $$<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      const el = id === '#top' ? document.body : $(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: 0, duration: 1.4 });
    }),
  );

  // ---------- hero intro ----------
  const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
  intro
    .from('.hero__name .line > span', { yPercent: 110, duration: 1.4, stagger: 0.12 })
    .from('[data-hero-fade]', { y: 24, opacity: 0, duration: 1.1, stagger: 0.1 }, 0.5)
    .from('.hero__meta', { opacity: 0, duration: 1 }, 0.6)
    .from('.tty', { opacity: 0, y: 60, rotateX: 12, transformPerspective: 1200, duration: 1.6 }, 0.3);

  // ---------- manifesto: words light up as you read ----------
  const words = $$('.manifesto .w');
  gsap.to(words, {
    opacity: 1,
    stagger: 0.1,
    ease: 'none',
    scrollTrigger: { trigger: '.manifesto p', start: 'top 80%', end: 'bottom 45%', scrub: true },
  });

  // ---------- generic reveals ----------
  $$('[data-reveal]').forEach((el) =>
    gsap.to(el, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } }),
  );

  // ---------- contact lines ----------
  $$('.contact [data-split]').forEach((el, i) =>
    gsap.from(el, {
      yPercent: 60,
      opacity: 0,
      duration: 1.4,
      delay: i * 0.1,
      ease: 'expo.out',
      scrollTrigger: { trigger: '.contact', start: 'top 70%' },
    }),
  );

  // ---------- marquee: a slow drift that follows the scroll direction; stops under the pointer ----------
  $$('[data-marquee]').forEach((row) => {
    const dir = Number(row.dataset.marquee);
    const half = row.scrollWidth / 2;
    const tween = gsap.fromTo(
      row,
      { x: dir > 0 ? 0 : -half },
      { x: dir > 0 ? -half : 0, duration: 110, ease: 'none', repeat: -1 },
    );
    let hovered = false;
    let direction = 1;
    row.addEventListener('pointerenter', () => { hovered = true; gsap.to(tween, { timeScale: 0, duration: 0.5, overwrite: true }); });
    row.addEventListener('pointerleave', () => { hovered = false; gsap.to(tween, { timeScale: direction, duration: 0.6, overwrite: true }); });
    ScrollTrigger.create({
      trigger: row,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        if (hovered) return;
        direction = self.direction || 1;
        const boost = gsap.utils.clamp(0, 0.6, Math.abs(self.getVelocity()) / 4000);
        gsap.to(tween, { timeScale: direction * (1 + boost), duration: 0.5, overwrite: true });
        gsap.to(tween, { timeScale: direction, duration: 1.2, delay: 0.5 });
      },
    });
  });

  // ---------- floating project visuals ----------
  $$('[data-float]').forEach((el) =>
    gsap.fromTo(
      el,
      { y: 80, rotate: -4, scale: 0.92 },
      { y: -40, rotate: 3, scale: 1, ease: 'none', scrollTrigger: { trigger: el.closest('.pcard'), start: 'top bottom', end: 'bottom top', scrub: true } },
    ),
  );

  // ---------- real screenshots: the three phones fan out as the card arrives ----------
  const FAN = [
    { xPercent: -50, rotate: -7, scale: 0.86, yPercent: 2 },
    { xPercent: 0, rotate: 0, scale: 1, yPercent: -2 },
    { xPercent: 50, rotate: 7, scale: 0.86, yPercent: 2 },
  ];
  $$('.shots').forEach((group) => {
    const card = group.closest('.pcard');
    $$('[data-shot]', group).forEach((shot) => {
      const i = Number(shot.dataset.shot);
      const to = FAN[i] ?? FAN[1];
      gsap.fromTo(
        shot,
        { xPercent: 0, yPercent: 18 + i * 4, rotate: 0, scale: 0.82 },
        { ...to, ease: 'power2.out', scrollTrigger: { trigger: card, start: 'top 95%', end: 'top 45%', scrub: 0.6 } },
      );
    });
  });

  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', () => {
    // ---------- hero: pin and explode the stack ----------
    gsap.timeline({
      scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=70%', pin: true, scrub: 0.8 },
    })
      .to('.tty', { scale: 1.06, y: -30, ease: 'none' }, 0)
      .to('.hero__text', { y: -60, opacity: 0.25, ease: 'none' }, 0.3)
      .to('.scroll-hint', { opacity: 0, duration: 0.1 }, 0);

    // ---------- timeline: pin, fill the track, swap the job ----------
    const jobs = $$('.job');
    const dots = $$('.track__dot');
    const show = (i: number) => {
      jobs.forEach((j, k) => j.classList.toggle('is-on', k === i));
      dots.forEach((d, k) => d.classList.toggle('is-on', k <= i));
    };
    show(0);
    gsap.to('.track__fill', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top top',
        end: `+=${jobs.length * 70}%`,
        pin: '.timeline__pin',
        scrub: 0.6,
        onUpdate: (self) => show(Math.min(jobs.length - 1, Math.floor(self.progress * jobs.length * 0.999))),
      },
    });

    // ---------- projects: each card sinks back as the next one slides over it ----------
    const cards = $$('.pcard');
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;
      gsap.fromTo(
        card,
        { scale: 1, filter: 'brightness(1)' },
        {
          scale: 0.9,
          filter: 'brightness(0.45)',
          ease: 'none',
          immediateRender: false,
          scrollTrigger: { trigger: next, start: 'top 60%', end: 'top 120px', scrub: true },
        },
      );
    });

    // ---------- AI: horizontal track ----------
    const track = $('.ai__track');
    const distance = () => track.scrollWidth - window.innerWidth + Math.max(32, (window.innerWidth - 1360) / 2);
    gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: { trigger: '.ai', start: 'top top', end: () => `+=${distance()}`, pin: '.ai__pin', scrub: 0.8, invalidateOnRefresh: true },
    });
  });

  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}
