import './styles.css';

const asset = (name: string) => `${import.meta.env.BASE_URL}resources/${name}`;
const assets = {
  wordmark: asset('roa-wordmark.svg'),
  lockup: asset('roa-lockup.svg'),
  uiCanvas: asset('live-app-canvas-detail-2026-07-30.webp'),
  uiCrop: asset('live-app-crop-share-conference-2026-07-30.webp'),
  uiPresent: asset('live-app-presenting-roa-deck-2026-07-30.webp'),
  uiBrand: asset('live-app-canvas-brandline-deck-2026-07-30.webp'),
  uiService: asset('live-app-service-orders-2026-07-30.webp'),
};

document.querySelector('#app')!.innerHTML = `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" data-header>
  <a class="brand" href="#top" aria-label="ROA Solutions home"><img src="${assets.wordmark}" alt="ROA Solutions"></a>
  <nav class="desktop-nav" aria-label="Primary"><a href="#product">Product</a><a href="#experience">Experience</a><a href="#capabilities">Capabilities</a><a href="#integration">Integration</a><a href="#solutions">Solutions</a></nav>
  <a class="header-cta" href="#contact">Talk to ROA <span>↗</span></a>
  <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu"><span></span><span></span></button>
</header>
<div class="mobile-menu" id="mobile-menu" hidden><nav aria-label="Mobile"><a href="#product">Product</a><a href="#experience">Experience</a><a href="#capabilities">Capabilities</a><a href="#integration">Integration</a><a href="#solutions">Solutions</a><a href="#contact">Talk to ROA</a></nav></div>

<main id="main">
<section class="hero section-dark" id="top">
  <div class="hero-room" aria-hidden="true"><div class="room-ceiling"></div><div class="room-wall left"></div><div class="room-wall right"></div><div class="room-floor"></div><div class="room-table"></div><div class="room-display"><div class="display-bezel"><img src="${assets.uiCanvas}" alt=""></div></div><div class="room-d1"><span class="d1-mark">D1</span><span class="d1-light"></span></div><div class="hero-frame frame-corners"><i></i><i></i><i></i><i></i></div></div>
  <div class="hero-content container"><p class="eyebrow">ROA D1 · ROOM EXPERIENCE SYSTEM</p><h1>Control<br><em>the room.</em></h1><p class="hero-lede">Matrix, compute and software, unified in one professional system. Works with the technology already in your room.</p><div class="hero-actions"><a class="button button-light" href="#experience">Explore D1 <span>↗</span></a><a class="text-link" href="#product">See the system <span>↓</span></a></div></div>
  <div class="hero-bottom container"><span>01</span><span class="hero-line"></span><span>ROA SOLUTIONS</span></div>
</section>

<section class="experience section-bone" id="experience"><div class="container">
  <div class="section-intro split"><div><p class="eyebrow dark">THE EXPERIENCE</p><h2>Source live.<br><em>Place it where it belongs.</em></h2></div><p class="intro-copy">A live source appears as a picture, not a cryptic input label. Select it, move it onto the wall and the room responds.</p></div>
  <div class="gesture-demo" data-demo><div class="demo-sources" aria-label="Live sources">
    <button class="source-card active" type="button" data-source="camera"><span class="source-number">01</span><span class="source-thumb thumb-camera"></span><span class="source-name">Room camera</span></button>
    <button class="source-card" type="button" data-source="share"><span class="source-number">02</span><span class="source-thumb thumb-share"></span><span class="source-name">Wireless share</span></button>
    <button class="source-card" type="button" data-source="stream"><span class="source-number">03</span><span class="source-thumb thumb-stream"></span><span class="source-name">Streaming source</span></button>
  </div><div class="demo-stage"><div class="stage-label">VIDEO WALL <span>LIVE</span></div><div class="stage-wall"><div class="stage-window w1" data-window="camera"><span>ROOM CAMERA</span></div><div class="stage-window w2" data-window="share"><span>WIRELESS SHARE</span></div><div class="stage-window w3" data-window="stream"><span>STREAMING</span></div></div><div class="stage-result" aria-live="polite">Select a live source.</div></div></div>
  <div class="experience-proof"><div class="proof-label">THE REAL INTERFACE</div><div class="ui-large"><img src="${assets.uiCanvas}" alt="ROA D1 interface showing live sources arranged on a canvas" loading="lazy"><span class="ui-corner tl"></span><span class="ui-corner tr"></span><span class="ui-corner bl"></span><span class="ui-corner br"></span></div><p>Actual ROA D1 product UI. The website presents it; it does not redesign it.</p></div>
</div></section>

<section class="product section-graphite" id="product"><div class="container">
  <div class="section-intro split"><div><p class="eyebrow">THE PRODUCT</p><h2>One unit.<br><em>Three disciplines.</em></h2></div><p class="intro-copy">ROA D1 brings matrix, compute and software together in one professional system.</p></div>
  <div class="hardware-stage" aria-label="Conceptual presentation of ROA D1 hardware"><div class="hardware-shadow"></div><div class="hardware"><div class="hardware-front"><span class="hardware-logo">ROA&nbsp;&nbsp;D1</span><span class="hardware-led"></span></div><div class="hardware-top"></div><div class="hardware-side"></div></div><div class="hardware-caption">ROA D1 / PROFESSIONAL SYSTEM</div></div>
  <div class="three-system"><article><span>01</span><h3>Matrix</h3><p>Route what matters through the room.</p></article><article><span>02</span><h3>Compute</h3><p>Process what the room needs.</p></article><article><span>03</span><h3>Software</h3><p>Give the host one clear surface.</p></article></div>
</div></section>

<section class="capabilities section-paper" id="capabilities"><div class="container">
  <div class="section-intro"><p class="eyebrow dark">CAPABILITIES</p><h2>The room, <em>without the technical ceremony.</em></h2><p class="intro-copy narrow">D1 brings meeting surfaces together: sources, presentation, scenes, room controls and hospitality.</p></div>
  <div class="capability-grid">
    <article class="cap-card cap-feature"><div class="cap-media"><img src="${assets.uiCrop}" alt="ROA D1 crop and share workflow" loading="lazy"></div><div class="cap-copy"><span>01</span><h3>Live sources</h3><p>See what is on each source before you use it.</p></div></article>
    <article class="cap-card"><div class="cap-media"><img src="${assets.uiPresent}" alt="ROA D1 presentation state" loading="lazy"></div><div class="cap-copy"><span>02</span><h3>Presentation</h3><p>Bring a deck onto the same canvas as live room sources.</p></div></article>
    <article class="cap-card"><div class="cap-media"><img src="${assets.uiPresent}" alt="ROA D1 presentations interface" loading="lazy"></div><div class="cap-copy"><span>03</span><h3>Presentations</h3><p>Choose the presentation you need and place it into the room.</p></div></article>
    <article class="cap-card dark-card"><div class="cap-media"><img src="${assets.uiService}" alt="ROA D1 Service interface for hospitality" loading="lazy"></div><div class="cap-copy"><span>04</span><h3>Hospitality</h3><p>Service belongs on the same surface as the meeting.</p></div></article>
  </div>
  <div class="cap-list" aria-label="Additional capabilities"><div><span>05</span><strong>Video wall</strong><p>Compose live windows with free placement and scale.</p></div><div><span>06</span><strong>Scenes</strong><p>Bring saved room states into the host workflow.</p></div><div><span>07</span><strong>Room control</strong><p>Bring room controls into one consistent surface.</p></div></div>
</div></section>

<section class="presentation section-bone"><div class="container presentation-grid"><div class="presentation-copy"><p class="eyebrow dark">PRESENTATION</p><h2>From a file<br>to <em>the room.</em></h2><p>Present a deck, keep live sources visible and move between states without handing the meeting to a technician.</p><a class="button button-dark" href="#contact">Talk to ROA <span>↗</span></a></div><div class="presentation-visual"><div class="presentation-stack"><img src="${assets.uiPresent}" alt="ROA D1 presentation state" loading="lazy"><img src="${assets.uiBrand}" alt="ROA D1 presentation composed with live room sources" loading="lazy"></div><div class="stack-note">PRESENT / SELECT / PLACE</div></div></div></section>

<section class="integration section-dark" id="integration"><div class="container">
  <div class="section-intro split"><div><p class="eyebrow">INTEGRATION</p><h2>Works with<br><em>what is already there.</em></h2></div><p class="intro-copy">D1 is designed to work within existing professional AV environments rather than replace them.</p></div>
  <div class="ecosystem" aria-label="ROA D1 integration ecosystem"><div class="eco-center"><div class="eco-frame frame-corners"><i></i><i></i><i></i><i></i><strong>ROA<br><small>D1</small></strong></div></div><div class="eco-node n1"><span>DISPLAY</span><i></i></div><div class="eco-node n2"><span>VIDEO WALL</span><i></i></div><div class="eco-node n3"><span>CAMERAS</span><i></i></div><div class="eco-node n4"><span>AUDIO</span><i></i></div><div class="eco-node n5"><span>CONFERENCING</span><i></i></div><div class="eco-node n6"><span>ROOM SYSTEMS</span><i></i></div><div class="eco-node n7"><span>PRESENTATION SOURCES</span><i></i></div></div>
  <div class="integration-note"><p>Works within the control and video infrastructure the room already runs.</p><div class="ecosystem-names"><span>Crestron</span><span>Extron</span><span>Q-SYS</span></div></div>
</div></section>

<section class="solutions section-bone" id="solutions"><div class="container">
  <div class="section-intro split"><div><p class="eyebrow dark">SOLUTIONS</p><h2>Built for rooms<br><em>where decisions happen.</em></h2></div><p class="intro-copy">The product stays consistent. The room around it changes.</p></div>
  <div class="solution-rail">
    <article class="solution-card active" tabindex="0"><div class="solution-number">01</div><div class="solution-scene boardroom"><div class="scene-wall"></div><div class="scene-table"></div><div class="scene-screen"></div></div><div><span>EXECUTIVE</span><h3>Boardroom</h3><p>Host the room without becoming its technician.</p></div></article>
    <article class="solution-card" tabindex="0"><div class="solution-number">02</div><div class="solution-scene meeting"><div class="scene-wall"></div><div class="scene-table"></div><div class="scene-screen"></div></div><div><span>COLLABORATION</span><h3>Meeting room</h3><p>Bring sources, presentation and conferencing together.</p></div></article>
    <article class="solution-card" tabindex="0"><div class="solution-number">03</div><div class="solution-scene presentation-room"><div class="scene-wall"></div><div class="scene-table"></div><div class="scene-screen"></div></div><div><span>BRIEFING</span><h3>Presentation space</h3><p>Make the wall respond to the person presenting.</p></div></article>
    <article class="solution-card" tabindex="0"><div class="solution-number">04</div><div class="solution-scene operations"><div class="scene-wall"></div><div class="scene-table"></div><div class="scene-screen"></div></div><div><span>OPERATIONS</span><h3>Control environment</h3><p>Coordinate complex room states from one surface.</p></div></article>
  </div>
</div></section>

<section class="family section-graphite"><div class="container">
  <div class="section-intro split"><div><p class="eyebrow">THE D-SERIES</p><h2>One system.<br><em>Room to grow.</em></h2></div><p class="intro-copy">D1 is the current product focus. The identity architecture leaves room for D2 and D10 without inventing specifications.</p></div>
  <div class="family-grid"><article class="family-card current"><div class="family-mark"><span>ROA</span><strong>D1</strong></div><div><span>01 / CURRENT</span><h3>ROA D1</h3><p>Current product focus.</p></div></article><article class="family-card"><div class="family-mark"><span>ROA</span><strong>D2</strong></div><div><span>02 / FAMILY</span><h3>ROA D2</h3><p>Product family position reserved.</p></div></article><article class="family-card"><div class="family-mark"><span>ROA</span><strong>D10</strong></div><div><span>10 / FAMILY</span><h3>ROA D10</h3><p>Product family position reserved.</p></div></article></div>
</div></section>

<section class="cta section-paper" id="contact"><div class="cta-frame frame-corners"><i></i><i></i><i></i><i></i></div><div class="container cta-inner"><p class="eyebrow dark">ROA D1</p><h2>Make the room<br><em>feel simple.</em></h2><p>Bring ROA into the next room you are designing, specifying or hosting.</p><a class="button button-dark" href="mailto:hello@roa.solutions">Talk to ROA <span>↗</span></a></div></section>
</main>

<footer class="site-footer section-dark"><div class="container footer-top"><div class="footer-brand"><img src="${assets.lockup}" alt="ROA Solutions"><p>Professional room technology, designed to stay out of the way.</p></div><div class="footer-nav"><div><span>Explore</span><a href="#product">Product</a><a href="#experience">Experience</a><a href="#capabilities">Capabilities</a></div><div><span>Connect</span><a href="#integration">Integration</a><a href="#solutions">Solutions</a><a href="mailto:hello@roa.solutions">Talk to ROA</a></div></div></div><div class="container footer-bottom"><span>© 2026 ROA Solutions</span><span>ROA · D1</span><span>WEBSITE EXPERIENCE</span></div></footer>
`;

const menuButton = document.querySelector(
  '.menu-button'
) as HTMLButtonElement | null;
const mobileMenu = document.querySelector('#mobile-menu') as HTMLElement | null;
if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    mobileMenu.hidden = open;
    document.body.classList.toggle('menu-open', !open);
  });
  mobileMenu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      mobileMenu.hidden = true;
      document.body.classList.remove('menu-open');
    })
  );
}

const demo = document.querySelector('[data-demo]') as HTMLElement | null;
if (demo) {
  const cards = [...demo.querySelectorAll<HTMLButtonElement>('.source-card')];
  const windows = [...demo.querySelectorAll<HTMLElement>('.stage-window')];
  const result = demo.querySelector('.stage-result') as HTMLElement | null;
  const names: Record<string, string> = {
    camera: 'Room camera placed on the wall.',
    share: 'Wireless share placed on the wall.',
    stream: 'Streaming source placed on the wall.',
  };
  const selectSource = (source: string) => {
    cards.forEach(card =>
      card.classList.toggle('active', card.dataset.source === source)
    );
    windows.forEach(win => {
      const active = win.dataset.window === source;
      win.style.opacity = active ? '1' : '.45';
      win.style.transform = active ? 'scale(1.04)' : 'scale(1)';
      win.style.zIndex = active ? '3' : '1';
    });
    if (result) result.textContent = names[source] ?? 'Room responds.';
  };
  cards.forEach(card =>
    card.addEventListener('click', () =>
      selectSource(card.dataset.source ?? 'camera')
    )
  );
  selectSource('camera');
}

const header = document.querySelector('[data-header]');
const onScroll = () =>
  header?.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

document.querySelectorAll<HTMLElement>('.solution-card').forEach(card => {
  card.addEventListener('focus', () => card.classList.add('active'));
  card.addEventListener('blur', () => card.classList.remove('active'));
});
