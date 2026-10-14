import React, { useEffect, useMemo, useState } from 'react';
import { AccordionGallery, AnimatedContent, Aurora, BlurText, ClickSpark, CountUp, FadeContent, GlareHover, GradualBlur, LogoLoop, Magnet, Noise, Particles, PillNav, ScrollExpand, ScrollReveal, ScrollStack, SpotlightCard, SplitText, TiltedCard, useReducedMotion } from './components/ReactBitsInspired.jsx';

const slides = [
  { image: 'https://images.unsplash.com/photo-1770802898203-7db83df3c438?auto=format&fit=crop&w=1600&q=85', alt: 'Dinosaur-themed birthday party decorations with balloons and character cutouts', shortTitle: 'Themed birthdays', category: 'BIRTHDAYS & THEME DECOR', titleTop: 'Little moments.', titleAccent: 'beautifully celebrated.', description: 'Thoughtful themes, playful details and a setting your family will remember long after the candles are out.' },
  { image: 'https://images.unsplash.com/photo-1770804545377-98b051c2bc4b?auto=format&fit=crop&w=1600&q=85', alt: 'Birthday party decoration with balloons and playful character cutouts', shortTitle: 'Kids’ celebrations', category: 'FIRST BIRTHDAYS', titleTop: 'Their first birthday.', titleAccent: 'a memory forever.', description: 'Soft palettes, personal touches and charming photo moments, planned around your little one.' },
  { image: 'https://images.unsplash.com/photo-1754539461230-23f1739a1c82?auto=format&fit=crop&w=1600&q=85', alt: 'Birthday party backdrop with balloons and decorative styling', shortTitle: 'Birthday backdrops', category: 'KIDS’ PARTY DECOR', titleTop: 'Big smiles begin', titleAccent: 'with little details.', description: 'Bring a favourite theme to life with balanced colour, considered styling and a joyful atmosphere.' },
  { image: 'https://images.unsplash.com/photo-1745573673583-a51f665ae48e?auto=format&fit=crop&w=1600&q=85', alt: 'Wedding stage decorated with flowers and elegant drapery', shortTitle: 'Floral weddings', category: 'WEDDINGS & ENGAGEMENTS', titleTop: 'For the day', titleAccent: 'you will always remember.', description: 'Elegant florals, beautiful staging and a welcoming setting for the people who matter most.' },
  { image: 'https://images.unsplash.com/photo-1559373098-7c09a893f57a?auto=format&fit=crop&w=1600&q=85', alt: 'Wedding table with glassware and floral table decorations', shortTitle: 'Wedding details', category: 'SPECIAL OCCASIONS', titleTop: 'A beautiful setting', titleAccent: 'for your next chapter.', description: 'From intimate gatherings to grand celebrations, every detail should feel considered and personal.' },
  { image: 'https://images.unsplash.com/photo-1777732785763-a6544bad56ff?auto=format&fit=crop&w=1600&q=85', alt: 'Colorful balloons and celebration decorations displayed outdoors', shortTitle: 'Party inspirations', category: 'EVENT STYLING & PLANNING', titleTop: 'Your vision,', titleAccent: 'beautifully brought to life.', description: 'Share the occasion, the mood and your ideas. We’ll help shape them into a thoughtful event setting.' },
];
const services = [
  { number: '01', title: 'Birthday celebrations', text: 'First birthdays, children’s themes and adult birthday moments.', tag: 'Joyful & personal' },
  { number: '02', title: 'Weddings & engagements', text: 'Floral stages, elegant backdrops and celebration styling.', tag: 'Romantic details' },
  { number: '03', title: 'Baby showers', text: 'Soft colours, welcoming spaces and memorable photo corners.', tag: 'Gentle & thoughtful' },
  { number: '04', title: 'Corporate events', text: 'Polished event settings for business gatherings and special launches.', tag: 'Clean & considered' },
  { number: '05', title: 'Bidding events', text: 'Event styling and setup for bidding occasions, tailored to your brief.', tag: 'Custom setup' },
  { number: '06', title: 'Other occasions', text: 'Anniversaries, family gatherings and celebrations made your own.', tag: 'Made for you' },
];
const faqs = [
  { q: 'What details should I share to get a quote?', a: 'Share the event type, date, venue or locality, approximate guest count, preferred theme and budget range. The team can then discuss a suitable setup for your occasion.' },
  { q: 'Can the decoration be customised to a theme?', a: 'Share reference images, colours or a mood you like so the team can confirm what is feasible for your event.' },
  { q: 'Do you cover venues outside Kumaraswamy Layout?', a: 'Send your venue or locality through WhatsApp so the team can confirm travel coverage and availability before you plan around it.' },
  { q: 'How early should I enquire?', a: 'Earlier is better, especially for popular dates and larger events. Send the event date first so availability can be checked.' },
];
const navItems = [{ id: 'home', label: 'Home' }, { id: 'services', label: 'Services' }, { id: 'styles', label: 'Portfolio' }, { id: 'process', label: 'Process' }, { id: 'contact', label: 'Contact' }];
const whatsappBase = 'https://wa.me/919082723800';
const getQuoteUrl = (message = 'Hello Vanitha K Events, I would like to discuss an event decoration enquiry.') => `${whatsappBase}?text=${encodeURIComponent(message)}`;

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = useMemo(() => navItems, []);
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Vanitha K Events home" onClick={() => setMobileOpen(false)}><span className="brand-copy"><span className="brand-name">Vanitha K <em>Events</em></span><span className="brand-line">DECOR <b>·</b> PLAN <b>·</b> CELEBRATE</span></span></a>
    <div className={`header-links ${mobileOpen ? 'mobile-open' : ''}`}><PillNav items={items} /><a className="header-phone" href="tel:+919082723800">+91 90827 23800</a><a className="header-quote" href={getQuoteUrl()} target="_blank" rel="noreferrer">Discuss your event <span aria-hidden="true">↗</span></a></div>
    <button className="mobile-menu-button" type="button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(v => !v)}><span></span><span></span></button>
  </header>;
}
function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[active];
  useEffect(() => { if (paused) return; const id = window.setInterval(() => setActive(v => (v + 1) % slides.length), 2000); return () => window.clearInterval(id); }, [paused]);
  return <section className="hero" id="home">
    <div className="hero-visual"><img key={slide.image} className="hero-image" src={slide.image} alt={slide.alt} /><div className="hero-shade"></div><GradualBlur /><Particles /></div>
    <div className="hero-copy"><BlurText text={slide.category} /><h1><SplitText text={slide.titleTop} /><br/><em>{slide.titleAccent}</em></h1><FadeContent><p>{slide.description}</p></FadeContent><div className="hero-actions"><Magnet><a className="button button-dark" href={getQuoteUrl(`Hello Vanitha K Events, I would like to enquire about ${slide.shortTitle.toLowerCase()}.`)} target="_blank" rel="noreferrer">Plan your celebration <span>↗</span></a></Magnet><a className="text-link" href="#styles">Explore our work <span>↓</span></a></div></div>
    <div className="hero-bottom"><div className="hero-caption"><span className="tiny-dot"></span><span>{slide.shortTitle}</span><span className="caption-divider"></span><span>Thoughtfully styled in Bengaluru</span></div><div className="slide-controls"><button className="play-control" type="button" onClick={() => setPaused(v => !v)} aria-label={paused ? 'Play carousel' : 'Pause carousel'}>{paused ? '▶' : 'Ⅱ'}</button><span className="slide-count">0{active + 1} <span>/</span> 0{slides.length}</span><div className="slide-dots">{slides.map((s, i) => <button key={s.image} className={i === active ? 'active' : ''} type="button" aria-label={`Show ${s.shortTitle}`} onClick={() => setActive(i)}></button>)}</div></div></div>
  </section>;
}
function SectionHeading({ eyebrow, title, accent, text }) {
 return <div className="section-heading"><BlurText text={eyebrow}/><h2>{title} <em>{accent}</em></h2>{text && <p>{text}</p>}</div>;
}
function Services() {
 return <section className="section services-section" id="services"><div className="container"><div className="services-intro"><SectionHeading eyebrow="WHAT WE CREATE" title="Every occasion," accent="a little more special." text="Considered styling, lovely details and a thoughtful process from the first idea to the final setup."/><a className="text-link" href={getQuoteUrl('Hello Vanitha K Events, please share service options and pricing.')} target="_blank" rel="noreferrer">Discuss your ideas <span>↗</span></a></div><div className="services-grid">{services.map((service, i) => <AnimatedContent key={service.number} delay={i * 70}><SpotlightCard className="service-card"><div className="service-top"><span className="service-number">{service.number}</span><span className="service-tag">{service.tag}</span></div><h3>{service.title}</h3><p>{service.text}</p><a className="service-arrow" href={getQuoteUrl(`Hello Vanitha K Events, I am interested in ${service.title.toLowerCase()}.`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${service.title}`}>↗</a></SpotlightCard></AnimatedContent>)}</div></div></section>;
}
function Portfolio() {
 const [selected, setSelected] = useState(null);
 return <section className="section portfolio-section" id="styles"><div className="container"><SectionHeading eyebrow="A FEW FAVOURITES" title="Beautifully set." accent="Fondly remembered." text="A little inspiration for the kind of celebration you have in mind."/><div className="portfolio-grid">{slides.map((slide, i) => <TiltedCard key={slide.image} className={`portfolio-card portfolio-card-${i+1}`}><button type="button" className="portfolio-image-button" onClick={() => setSelected(i)} aria-label={`View ${slide.shortTitle} image`}><img src={slide.image} alt={slide.alt}/><span className="image-open">↗</span></button><div className="portfolio-meta"><div><span>{slide.category}</span><h3>{slide.shortTitle}</h3></div><button type="button" onClick={() => setSelected(i)} aria-label={`Open ${slide.shortTitle}`}>+</button></div></TiltedCard>)}</div></div>{selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={slides[selected].shortTitle} onClick={() => setSelected(null)}><button type="button" className="lightbox-close" aria-label="Close image">×</button><button type="button" className="lightbox-prev" aria-label="Previous image" onClick={e => {e.stopPropagation();setSelected((selected + slides.length - 1) % slides.length)}}>‹</button><img src={slides[selected].image} alt={slides[selected].alt} onClick={e => e.stopPropagation()}/><button type="button" className="lightbox-next" aria-label="Next image" onClick={e => {e.stopPropagation();setSelected((selected + 1) % slides.length)}}>›</button><p>{slides[selected].shortTitle}</p></div>}</section>;
}
function Process() {
 const steps = [{n:'01',title:'Tell us the occasion',text:'Share the date, venue, event type and the feeling you want the space to have.'},{n:'02',title:'Shape the details',text:'We’ll discuss themes, references, styling options and what fits your plans.'},{n:'03',title:'Celebrate the moment',text:'Once everything is agreed, the team can coordinate the setup for your day.'}];
 return <section className="section process-section" id="process"><div className="container process-layout"><div><SectionHeading eyebrow="HOW IT COMES TOGETHER" title="From first idea" accent="to lovely memories." text="A clear, friendly process that keeps the important things in focus."/><a className="button button-outline" href={getQuoteUrl()} target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a></div><div className="process-steps">{steps.map(s => <article className="process-step" key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><span className="process-chevron">↗</span></article>)}</div></div></section>;
}
function Reviews() {
 return <section className="social-proof"><div className="container proof-inner"><div><span className="eyebrow">MADE FOR YOUR MOMENTS</span><h2>Thoughtful details.<br/><em>Happy celebrations.</em></h2></div><div className="proof-stats"><div><strong><CountUp value={4.9} decimals={1}/><span>★</span></strong><p>Google rating shown in the supplied profile</p></div><div><strong><CountUp value={100} suffix="+"/></strong><p>Celebration ideas, made personal</p></div></div></div></section>;
}
function FAQ() {
 const [open, setOpen] = useState(0);
 return <section className="section faq-section"><div className="container faq-layout"><SectionHeading eyebrow="GOOD TO KNOW" title="A few helpful" accent="answers." text="The details that make planning feel a little easier."/><div className="faq-list">{faqs.map((item,i)=><article className={open===i?'faq-item open':'faq-item'} key={item.q}><button type="button" aria-expanded={open===i} onClick={()=>setOpen(open===i?-1:i)}><span>{item.q}</span><b>{open===i?'−':'+'}</b></button>{open===i&&<p>{item.a}</p>}</article>)}</div></div></section>;
}
function Contact() {
 return <section className="contact-section" id="contact"><Aurora/><div className="container contact-inner"><div><BlurText text="LET’S MAKE IT MEANINGFUL"/><h2>Have something<br/><em>lovely to celebrate?</em></h2><p>Tell us what you’re planning. We’ll take it from there, one thoughtful detail at a time.</p></div><div className="contact-actions"><a className="button button-light" href={getQuoteUrl()} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a><a className="contact-phone" href="tel:+919082723800">+91 90827 23800</a><span className="contact-note">Bengaluru · Enquiries welcome</span></div></div></section>;
}
export default function App() {
 const reducedMotion = useReducedMotion();
 return <div className={reducedMotion ? 'app reduced-motion' : 'app'}><Noise/><Header/><main><Hero/><div className="intro-strip"><div className="container"><span>MADE WITH CARE</span><p>Celebrations that feel like <em>you.</em></p><span>01 — 06</span></div></div><Services/><Portfolio/><Reviews/><Process/><FAQ/><Contact/></main><footer className="site-footer"><div className="container footer-inner"><a className="footer-brand" href="#home">Vanitha K <em>Events</em></a><span>Decor · Plan · Celebrate</span><span>© {new Date().getFullYear()} Vanitha K Events</span><a href="#home">Back to top ↑</a></div></footer></div>;
}
