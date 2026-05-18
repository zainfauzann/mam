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
        { h: 'Our People', links: [
          ['Office Bearers','our-people.html#leads','President · Deputy · Sec-Gen · Treasurer'],
          ['Working Committee','our-people.html#wc','Operational team'],
          ['Commissions','our-people.html#commissions','Fifteen specialist bodies'],
          ['Term 2025 – 2027','our-people.html','Mandate &amp; appointments'],
        ]},
        { h: 'Sports / Discipline', links: [
          ['All disciplines','about.html#disciplines','Twelve under one authority'],
          ['Circuit &amp; Road Racing','about.html#disciplines','Touring, GT, ARRC, Cub Prix'],
          ['Karting','about.html#disciplines','National junior pathway'],
          ['Rally &amp; Off-Road','about.html#disciplines','Stage rally, 4×4, Borneo Safari'],
        ]},
        { h: 'The Association', links: [
          ['About MAM','about.html','Our story, mandate &amp; recognition'],
          ['Vision &amp; Mission','about.html#vm','Why we exist'],
          ['Heritage &amp; Timeline','about.html#timeline','Seventy years on the grid'],
          ['Recognition (FIA · FIM)','about.html','International standing'],
        ]},
      ],
      feat: { lab:'Featured', h:'Seven decades, one mission', p:'From 1956 hill climbs to Sepang MotoGP — read the MAM heritage timeline.', href:'about.html' }
    },
    membership: {
      cols: [
        { h: 'Inscription Fees', links: [
          ['Fee schedule 2026','membership.html#fees','All tiers, printable'],
          ['Driver / Rider','membership.html#fees','Per-licence inscription'],
          ['Affiliate clubs','membership.html#fees','Annual federation due'],
          ['Officials','membership.html#fees','Steward · scrutineer · marshal'],
        ]},
        { h: 'Affiliation Process', links: [
          ['How affiliation works','membership.html#process','Step-by-step path'],
          ['Eligibility','membership.html#process','Who can apply'],
          ['Required documents','membership.html#process','Articles · constitution · roster'],
          ['Renewal cycle','membership.html#process','Annual reaffirmation'],
        ]},
        { h: 'Member benefits', links: [
          ['Sanctioned events','membership.html','Host under MAM permit'],
          ['Insurance coverage','membership.html','Per-event club indemnity'],
          ['Officials clinic','our-people.html#commissions','Path to stewardship'],
          ['Federation voice','about.html','AGM voting rights'],
        ]},
      ],
      feat: { lab:'Become a member', h:'Affiliate your club with MAM', p:'80+ clubs across all 13 states already affiliate under MAM. Start the application today.', href:'membership.html' }
    },
    license: {
      cols: [
        { h: 'How to Apply', links: [
          ['Step-by-step guide','license.html#how-to-apply','From eligibility to issuance'],
          ['Required documents','license.html#how-to-apply','ID · medical · forms'],
          ['Medical examination','license.html#how-to-apply','FIA Annex L · panel doctors'],
          ['Fees &amp; payment','membership.html#fees','Inscription schedule'],
        ]},
        { h: 'Online Application', links: [
          ['Start application','license.html#apply','Online intake form'],
          ['Renew an existing licence','license.html#apply','2026 cycle renewal'],
          ['Replace lost / damaged','license.html#apply','Reissue request'],
          ['Track your status','license.html#apply','Application tracker'],
        ]},
        { h: 'Licence types', links: [
          ['Driver Competition Licence','license.html','Four-wheel · grades C/B/A'],
          ['Rider Competition Licence','license.html','Two-wheel · grades C/B/A'],
          ['Officials Licence','license.html','Steward · scrutineer · marshal'],
          ['Entrant Licence','license.html','Teams &amp; organisers'],
        ]},
      ],
      feat: { lab:'Quick start', h:'Apply for your competition licence', p:'New drivers and riders can submit the full application online — no need to visit the secretariat for the first pass.', href:'license.html#apply' }
    },
    calendar: {
      cols: [
        { h: 'Calendar', links: [
          ['All events','calendar.html','62 sanctioned events · 2026'],
          ['This month','calendar.html','May – June overview'],
          ['Map view','calendar.html','By state &amp; venue'],
          ['Subscribe (.ics)','documents.html#cal','Apple/Google calendar'],
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
    documents: {
      cols: [
        { h: 'Regulations', links: [
          ['Sporting Code 2026','documents.html#code','National rulebook · v 2026.1'],
          ['Technical Regulations','documents.html#tech','Per-discipline tech regs'],
          ['Tech Bulletins','documents.html#tech','Latest amendments'],
          ['Appendices','documents.html#code','A · B · L'],
        ]},
        { h: 'Forms', links: [
          ['Driver licence (4-wheel)','documents.html#licence','Application form'],
          ['Rider licence (2-wheel)','documents.html#licence','Application form'],
          ['Officials licence','documents.html#licence','Apply &amp; renew'],
          ['Event permit pack','documents.html#event','Complete organiser kit'],
        ]},
        { h: 'Other resources', links: [
          ['2026 Calendar PDF','documents.html#cal','Printable schedule'],
          ['Subscribe (.ics)','documents.html#cal','Live calendar feed'],
          ['Templates &amp; SR','documents.html#templ','Editable Word/Excel'],
          ['Brand &amp; logo','documents.html#brand','Press &amp; partner assets'],
        ]},
      ],
      feat: { lab:'Just published', h:'2026 Sporting Code v 2026.1', p:'Effective 1 June. Updates to Articles 12 (scrutineering) &amp; 17 (penalties).', href:'documents.html' }
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
          ['Apply for licence','license.html#apply','Driver · Rider · Official'],
          ['Affiliate your club','membership.html#process','Club affiliation pathway'],
          ['Officials clinic','our-people.html#commissions','Path to stewardship'],
          ['Volunteer','contact.html','Marshals &amp; event crew'],
        ]},
      ],
      feat: { lab:'New here?', h:'Become a MAM member', p:'Apply for your competition licence or affiliate your club today.', href:'license.html#apply' }
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
    ${navItem('Membership','membership.html','membership','membership.html')}
    ${navItem('License','license.html','license','license.html')}
    ${navItem('Calendar','calendar.html','calendar','calendar.html')}
    ${navItem('News','news.html','news','news.html')}
    ${navItem('Documents','documents.html','documents','documents.html')}
    ${navItem('Contact Us','contact.html','contact','contact.html')}
  </nav>
  <div class="header-actions">
    <button class="icon-btn" aria-label="Search">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    </button>
    <a href="license.html#apply" class="btn primary">Apply Licence</a>
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
        <a href="about.html#vm">Vision &amp; Mission</a>
        <a href="our-people.html">Our People</a>
        <a href="about.html#disciplines">Disciplines</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="fcol">
        <h5>Sport</h5>
        <a href="calendar.html">Calendar</a>
        <a href="news.html">Results</a>
        <a href="news.html">Standings</a>
        <a href="about.html#disciplines">Disciplines</a>
      </div>
      <div class="fcol">
        <h5>Membership &amp; Licence</h5>
        <a href="membership.html#fees">Inscription Fees</a>
        <a href="membership.html#process">Affiliation Process</a>
        <a href="license.html#how-to-apply">How to Apply</a>
        <a href="license.html#apply">Online Application</a>
      </div>
      <div class="fcol">
        <h5>Resources</h5>
        <a href="documents.html#code">Sporting Code</a>
        <a href="documents.html#licence">Licence Forms</a>
        <a href="documents.html#event">Event Permits</a>
        <a href="documents.html">All documents</a>
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
