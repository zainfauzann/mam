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
    <span>+603-7731 5888</span>
  </div>
</div>`;

  // Mega menu definitions
  const mega = {
    about: {
      cols: [
        { h: 'The Association', links: [
          ['Our story','about.html#story','Who we are'],
          ['Vision &amp; mission','about.html#vm','What we aim to do'],
          ['History','about.html#timeline','1963 to today'],
          ['Recognition','about.html#recognition','FIA, FIM, OCM, KBS'],
        ]},
        { h: 'Disciplines', links: [
          ['All disciplines','about.html#disciplines','Six discipline commissions'],
          ['4 &amp; 2 Wheels Racing','about.html#disciplines','Circuit, Cub Prix, Superbike'],
          ['Karting &amp; Rally','about.html#disciplines','Championship, Rotax, Rally Sprint'],
          ['Off Road &amp; E-Sports','about.html#disciplines','Motocross, eRacing GP'],
        ]},
        { h: 'Members', links: [
          ['Affiliate clubs','clubs.html','28 affiliated clubs'],
          ['Affiliate your club','affiliation.html','New application, probation, membership'],
          ['Fees','fees.html','Event inscription and licence fees'],
        ]},
      ],
      feat: { lab:'History', h:'From 1963 to today', p:'How Malaysian motorsport got its own sporting authority.', href:'about.html#timeline' }
    },
    team: {
      cols: [
        { h: 'Leadership', links: [
          ['Office bearers','team.html#bearers','President, Deputy, Sec-Gen, Treasurer'],
          ['EXCO members','team.html#exco','Five members'],
        ]},
        { h: 'Secretariat', links: [
          ['Motorsports','team.html#secretariat','Regulations, 4 &amp; 2-wheels, safety'],
          ['Administration','team.html#secretariat','HR, legal, finance, digital, PR'],
          ['Mobility','team.html#secretariat','Road safety, road assist, tourism'],
        ]},
        { h: 'Commissions', links: [
          ['All commissions','team.html#commissions','16 commissions'],
          ['Discipline commissions','team.html#commissions','Racing, rally, karting, e-sports'],
          ['Safety &amp; regulation','team.html#commissions','Stewards, safety, medical, legal'],
        ]},
      ],
      feat: { lab:'Term 2025 - 2027', h:'Who runs MAM', p:'Office bearers, EXCO, the secretariat and 16 commissions.', href:'team.html' }
    },
    news: {
      cols: [
        { h: 'Newsroom', links: [
          ['Featured','news.html#featured','Malaysia Festival of Speed 2026'],
          ['Latest news','news.html#latest','Statements and announcements'],
        ]},
        { h: 'Stay informed', links: [
          ['Newsletter','index.html#subscribe','Results and rule changes by email'],
          ['Press enquiries','contact.html#message','Choose Press &amp; Media'],
        ]},
      ],
      feat: { lab:'Featured', h:'Malaysia Festival of Speed 2026', p:'Seven grassroots disciplines over three days at Sepang.', href:'news.html#featured' }
    },
    calendar: {
      cols: [
        { h: 'Calendar 2026', links: [
          ['All events','calendar.html#list','37 events, latest first'],
          ['October','calendar.html#m10','Including MotoGP at Sepang'],
          ['November','calendar.html#m11','Superbike, Sepang 1000KM'],
          ['December','calendar.html#m12','MSF finale, Mini Cub Prix'],
        ]},
        { h: 'Competing', links: [
          ['Get a licence','licence.html','Forms and online application'],
          ['Competition rules','downloads.html#rules','National Competition Rules'],
        ]},
      ],
      feat: { lab:'Next up', h:'MotoGP at Sepang', p:'PETRONAS Malaysian Grand Prix, 29 Oct - 1 Nov.', href:'event.html?id=28' }
    },
    downloads: {
      cols: [
        { h: 'Documents', links: [
          ['Governance','downloads.html#gov','Constitution, E-Motorsport'],
          ['Competition rules','downloads.html#rules','Rules and medical form'],
          ['Licence','licence.html','Applications and how to apply'],
          ['Duty &amp; tax exemption','downloads.html#dtex','DTEX vehicle and parts'],
        ]},
        { h: 'Apply', links: [
          ['Online licence application','https://license-mam.com/pubLicenseForm','license-mam.com'],
          ['Fees','fees.html','Event inscription and licence fees'],
          ['Affiliation','affiliation.html','Affiliate member process'],
        ]},
      ],
      feat: { lab:'Licence 2026', h:'Apply for a competition licence', p:'Forms, medical, payment and submission in six steps.', href:'licence.html' }
    },
    licence: {
      cols: [
        { h: 'Competition licence', links: [
          ['Categories &amp; fees','licence.html#types','Car, motorcycle, karting, e-sports'],
          ['Insurance coverage','licence.html#insurance','Plan 1 RM210, Plan 2 RM100'],
          ['Documents required','licence.html#apply','Nine documents to submit'],
          ['Where to submit','licence.html#submit','Email or hardcopy'],
        ]},
        { h: 'Apply', links: [
          ['Apply online','https://license-mam.com/pubLicenseForm','license-mam.com'],
          ['Licence forms','downloads.html#licence','Application and team entrant'],
          ['Medical form','downloads.html#rules','Medical examination'],
        ]},
        { h: 'Fees &amp; membership', links: [
          ['Event inscription fees','fees.html#events','Club to international'],
          ['Licence fee summary','fees.html#car','2026 rates'],
          ['Affiliate member process','affiliation.html','New application, probation, membership'],
        ]},
      ],
      feat: { lab:'Licence 2026', h:'Apply for your MAM competition licence', p:'Categories, fees, insurance and the documents you need.', href:'licence.html' }
    },
    contact: {
      cols: [
        { h: 'Get in touch', links: [
          ['Send a message','contact.html#message','Enquiry form'],
          ['Visit HQ','contact.html#hq','The Nizra Building, Sungai Penchala, KL'],
          ['FAQ','contact.html#faq','Licences, AAM, DTEX, affiliation'],
        ]},
        { h: 'Direct contacts', links: [
          ['General enquiries','contact.html#hq','admin@mam.org.my'],
          ['Licence walk-in','contact.html#desks','SIC Paddock Office, Sepang'],
          ['2-wheel licences','contact.html#desks','izzat@mam.org.my'],
          ['Secretary General','contact.html#desks','nanthan@mam.org.my'],
        ]},
      ],
      feat: { lab:'New here?', h:'Start racing', p:'Get your competition licence or affiliate your club.', href:'licence.html' }
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
          <div class="lab">${m.feat.lab}</div>
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
    ${navItem('Team','team.html','team','team.html')}
    ${navItem('News','news.html','news','news.html')}
    ${navItem('Calendar','calendar.html','calendar','calendar.html')}
    ${navItem('Licence','licence.html','licence','licence.html')}
    ${navItem('Downloads','downloads.html','downloads','downloads.html')}
    ${navItem('Contact Us','contact.html','contact','contact.html')}
  </nav>
  <div class="header-actions">
    <button class="menu-btn" aria-label="Menu" onclick="this.closest('header').classList.toggle('open')"><span></span></button>
    <button class="icon-btn" aria-label="Search">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    </button>
    <a href="licence.html" class="btn primary">Apply Licence</a>
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
        <a href="about.html#story">Our Story</a>
        <a href="about.html#vm">Vision &amp; Mission</a>
        <a href="about.html#timeline">History</a>
        <a href="about.html#recognition">Recognition</a>
      </div>
      <div class="fcol">
        <h5>People</h5>
        <a href="team.html#bearers">Office Bearers</a>
        <a href="team.html#exco">EXCO</a>
        <a href="team.html#secretariat">Secretariat</a>
        <a href="team.html#commissions">Commissions</a>
      </div>
      <div class="fcol">
        <h5>Compete</h5>
        <a href="calendar.html">Event Calendar</a>
        <a href="licence.html">Licences</a>
        <a href="downloads.html#rules">Competition Rules</a>
        <a href="downloads.html#dtex">Duty &amp; Tax Exemption</a>
        <a href="fees.html">Fees</a>
      </div>
      <div class="fcol">
        <h5>Connect</h5>
        <a href="news.html">News</a>
        <a href="clubs.html">Affiliate Clubs</a>
        <a href="affiliation.html">Affiliate Your Club</a>
        <a href="contact.html#faq">FAQ</a>
        <a href="contact.html#message">Contact</a>
      </div>
    </div>
    <div class="fbottom">
      <span>© 2026 Motorsports Association of Malaysia · Persatuan Sukan Bermotor Malaysia</span>
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

  // Scroll spy for in-page nav (sidebars, tab bars)
  window.addEventListener('load',()=>{
    const navs=[...document.querySelectorAll('aside.side, .fbar')].map(n=>({n,links:[...n.querySelectorAll('a[href^="#"]')].filter(a=>a.textContent.trim()!=='All'&&document.querySelector(a.getAttribute('href')))})).filter(x=>x.links.length);
    if(!navs.length) return;
    const tick=()=>{navs.forEach(({links})=>{let cur=links[0];const y=140;links.forEach(a=>{const t=document.querySelector(a.getAttribute('href'));if(t.getBoundingClientRect().top-y<=0)cur=a});if(innerHeight+scrollY>=document.documentElement.scrollHeight-4)cur=links[links.length-1];links.forEach(a=>a.classList.toggle('on',a===cur));const all=[...links[0].parentNode.children].find(a=>a.textContent.trim()==='All');if(all){const top=document.querySelector(links[0].getAttribute('href')).getBoundingClientRect().top-y>0;all.classList.toggle('on',top);if(top)links.forEach(a=>a.classList.remove('on'));}});};
    addEventListener('scroll',tick,{passive:true});tick();
  });
})();
