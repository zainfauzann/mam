// Inject shared header + footer + mega menu
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isOn = (p) => path === p.toLowerCase() ? 'on' : '';

  const util = `
<div class="util">
  <div class="left">
    <span>Member Login</span>
    <span>Apply for Licence</span>
  </div>
  <div class="right">
    <span>+603-77315888</span>
  </div>
</div>`;

  // Mega menu definitions
  const mega = {
    about: {
      cols: [
        { h: 'The Association', links: [
          ['About MAM','about.html','Our story, mandate &amp; recognition'],
          ['Vision &amp; Mission','about.html#vm','Why we exist'],
          ['Heritage &amp; Timeline','about.html#timeline','Seventy years on the grid'],
          ['Governance','about.html','Council, statutes &amp; bylaws'],
        ]},
        { h: 'Disciplines', links: [
          ['All disciplines','about.html#disciplines','Twelve under one authority'],
          ['Circuit &amp; Road Racing','about.html#disciplines','Touring, GT, ARRC, Cub Prix'],
          ['Karting','about.html#disciplines','National junior pathway'],
          ['Rally &amp; Off-Road','about.html#disciplines','Stage rally, 4×4, Borneo Safari'],
        ]},
        { h: 'Recognition', links: [
          ['FIA','about.html','National Sporting Authority'],
          ['FIM Asia','about.html','Federation member'],
          ['Olympic Council of Malaysia','about.html','National council'],
          ['Sports Commissioner (KBS)','about.html','Government registration'],
        ]},
      ],
      feat: { lab:'Featured', h:'Seven decades, one mission', p:'From 1956 hill climbs to Sepang MotoGP — read the MAM heritage timeline.', href:'about.html' }
    },
    team: {
      cols: [
        { h: 'Council', links: [
          ['Office Bearers','team.html#leads','President · Deputy · Sec-Gen'],
          ['Council Members','team.html','15-seat governing council'],
          ['Term 2025 – 2027','team.html','Mandate &amp; appointments'],
        ]},
        { h: 'Officials', links: [
          ['Stewards','team.html#officials','Chief stewards by discipline'],
          ['Race Direction','team.html#officials','Clerks of course &amp; directors'],
          ['Technical Delegates','team.html#officials','Scrutineering &amp; tech'],
          ['Medical &amp; Safety','team.html#officials','CMO and intervention teams'],
        ]},
        { h: 'Commissions', links: [
          ['All commissions','team.html#commissions','Nine specialist bodies'],
          ['Circuit Sport','team.html#commissions','CSC'],
          ['National Karting','team.html#commissions','NKC'],
          ['Medical','team.html#commissions','MED'],
        ]},
      ],
      feat: { lab:'New term', h:'Council 2025 – 2027', p:'Meet the 15-member governing council and the desks they lead.', href:'team.html' }
    },
    news: {
      cols: [
        { h: 'Newsroom', links: [
          ['Latest news','news.html','Race reports &amp; press'],
          ['Race results','news.html','Round-by-round outcomes'],
          ['Press releases','news.html','Official statements'],
          ['Regulation updates','news.html','Tech bulletins &amp; code'],
        ]},
        { h: 'By discipline', links: [
          ['Road Racing','news.html','ARRC, Cub Prix, MotoGP MY'],
          ['Karting','news.html','National Karting Series'],
          ['Rally &amp; Off-Road','news.html','Stage rally, Borneo Safari'],
          ['Drag &amp; Time Attack','news.html','Specialty discipline news'],
        ]},
        { h: 'Stay informed', links: [
          ['Subscribe to newsletter','news.html#subscribe','Weekly race-week briefing'],
          ['Press accreditation','contact.html','For media partners'],
          ['Photo &amp; video archive','news.html','Editorial library'],
        ]},
      ],
      feat: { lab:'Featured story', h:'Hafizh on pole at Sepang ARRC R3', p:'Closest SS600 grid in three seasons. Read the full report.', href:'news.html' }
    },
    calendar: {
      cols: [
        { h: 'Calendar', links: [
          ['All events','calendar.html','62 sanctioned events · 2026'],
          ['This month','calendar.html','May – June overview'],
          ['Map view','calendar.html','By state &amp; venue'],
          ['Subscribe (.ics)','downloads.html#cal','Apple/Google calendar'],
        ]},
        { h: 'Championships', links: [
          ['ARRC — Asia Road Racing','calendar.html','Sepang R3 · 10 May'],
          ['Petronas Cub Prix','calendar.html','Round 4 · Kuantan'],
          ['National Karting Series','calendar.html','R5 · Tangkak'],
          ['Malaysia Drag Cup','calendar.html','Round 2 · Batu Tiga'],
        ]},
        { h: 'Venues', links: [
          ['Sepang International Circuit','calendar.html','Selangor'],
          ['Pasir Gudang','calendar.html','Johor'],
          ['Bukit Jalil MX','calendar.html','Kuala Lumpur'],
          ['All affiliate venues','about.html','Across 11 states'],
        ]},
      ],
      feat: { lab:'This weekend', h:'Race weekend at Sepang', p:'ARRC Round 3 — SS600 / AP250 / UB150. Lights out Saturday 14:00 MYT.', href:'calendar.html' }
    },
    downloads: {
      cols: [
        { h: 'Regulations', links: [
          ['Sporting Code 2026','downloads.html#code','National rulebook · v 2026.1'],
          ['Technical Regulations','downloads.html#tech','Per-discipline tech regs'],
          ['Tech Bulletins','downloads.html#tech','Latest amendments'],
          ['Appendices','downloads.html#code','A · B · L'],
        ]},
        { h: 'Forms', links: [
          ['Driver licence (4-wheel)','downloads.html#licence','Application form'],
          ['Rider licence (2-wheel)','downloads.html#licence','Application form'],
          ['Officials licence','downloads.html#licence','Apply &amp; renew'],
          ['Event permit pack','downloads.html#event','Complete organiser kit'],
        ]},
        { h: 'Other resources', links: [
          ['2026 Calendar PDF','downloads.html#cal','Printable schedule'],
          ['Subscribe (.ics)','downloads.html#cal','Live calendar feed'],
          ['Templates &amp; SR','downloads.html#templ','Editable Word/Excel'],
          ['Brand &amp; logo','downloads.html#brand','Press &amp; partner assets'],
        ]},
      ],
      feat: { lab:'Just published', h:'2026 Sporting Code v 2026.1', p:'Effective 1 June. Updates to Articles 12 (scrutineering) &amp; 17 (penalties).', href:'downloads.html' }
    },
    contact: {
      cols: [
        { h: 'Get in touch', links: [
          ['Send a message','contact.html','General enquiry form'],
          ['Visit HQ','contact.html','Sri Penchala, Kuala Lumpur'],
          ['Office hours','contact.html','Mon – Fri · 9am – 5pm'],
          ['FAQ','contact.html','Common questions'],
        ]},
        { h: 'Direct desks', links: [
          ['Licences','contact.html','licences@mam.com.my'],
          ['Event permits','contact.html','events@mam.com.my'],
          ['Press &amp; media','contact.html','press@mam.com.my'],
          ['Partnerships','contact.html','partners@mam.com.my'],
        ]},
        { h: 'Become a member', links: [
          ['Apply for licence','downloads.html#licence','Driver · Rider · Official'],
          ['Affiliate your club','contact.html','Club affiliation pathway'],
          ['Officials clinic','team.html','Path to stewardship'],
          ['Volunteer','contact.html','Marshals &amp; event crew'],
        ]},
      ],
      feat: { lab:'New here?', h:'Become a MAM member', p:'Apply for your competition licence or affiliate your club today.', href:'downloads.html' }
    },
  };

  function megaPanel(key){
    const m = mega[key]; if(!m) return '';
    const cols = m.cols.map(c=>`
      <div class="mega-col">
        <h6>${c.h}</h6>
        ${c.links.map(([t,h,d])=>`<a class="link" href="${h}"><span class="t">${t}</span>${d?`<span class="d">${d}</span>`:''}</a>`).join('')}
      </div>`).join('');
    const feat = `
      <a class="mega-feat" href="${m.feat.href}">
        <div>
          <div class="lab">— ${m.feat.lab}</div>
          <h5>${m.feat.h}</h5>
          <p>${m.feat.p}</p>
        </div>
        <span class="go">Explore</span>
      </a>`;
    return `<div class="mega"><div class="mega-inner">${cols}${feat}</div></div>`;
  }

  const navItem = (label, href, key, current) => `
    <div class="nav-item">
      <a href="${href}" class="${isOn(current)}">${label}${key?`<span class="chev"></span>`:''}</a>
      ${key?megaPanel(key):''}
    </div>`;

  const header = `
<header class="main">
  <a href="index.html" class="logo"><img src="assets/mam-logo.png" alt="MAM" /></a>
  <nav class="primary">
    ${navItem('Home','index.html',null,'index.html')}
    ${navItem('About MAM','about.html','about','about.html')}
    ${navItem('Team Members','team.html','team','team.html')}
    ${navItem('News','news.html','news','news.html')}
    ${navItem('Event Calendar','calendar.html','calendar','calendar.html')}
    ${navItem('Downloads','downloads.html','downloads','downloads.html')}
    ${navItem('Contact Us','contact.html','contact','contact.html')}
  </nav>
  <div class="header-actions">
    <button class="icon-btn" aria-label="Search">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    </button>
    <a href="contact.html" class="btn primary">Apply Licence</a>
  </div>
</header>`;

  const footer = `
<footer>
  <div class="wrap">
    <div class="ftop">
      <div class="fbrand">
        <a href="index.html" class="logo"><img src="assets/mam-logo.png" alt="MAM" /></a>
        <p>The national sporting authority for motorsport in Malaysia. The only Malaysian body recognised by FIA &amp; FIM Asia.</p>
        <div class="badges">
          <span class="fbadge">FIA Member</span>
          <span class="fbadge">FIM Asia</span>
        </div>
      </div>
      <div class="fcol">
        <h5>About</h5>
        <a href="about.html">Our Story</a>
        <a href="about.html">Vision &amp; Mission</a>
        <a href="about.html">Governance</a>
        <a href="team.html">Team</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="fcol">
        <h5>Sport</h5>
        <a href="calendar.html">Calendar</a>
        <a href="news.html">Results</a>
        <a href="news.html">Standings</a>
        <a href="about.html">Disciplines</a>
      </div>
      <div class="fcol">
        <h5>Services</h5>
        <a href="downloads.html">Licences</a>
        <a href="downloads.html">Permits</a>
        <a href="downloads.html">Regulations</a>
        <a href="downloads.html">Forms</a>
      </div>
      <div class="fcol">
        <h5>Community</h5>
        <a href="about.html">Affiliate Clubs</a>
        <a href="news.html">News</a>
        <a href="news.html">Press</a>
        <a href="contact.html">Careers</a>
      </div>
    </div>
    <div class="fbottom">
      <span>© 2026 Motorsports Association of Malaysia · Persatuan Sukan Permotoran Malaysia</span>
      <div class="links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div>
</footer>`;

  const headerSlot = document.getElementById('site-header');
  if(headerSlot) headerSlot.innerHTML = util + header;
  const footerSlot = document.getElementById('site-footer');
  if(footerSlot) footerSlot.innerHTML = footer;
})();
