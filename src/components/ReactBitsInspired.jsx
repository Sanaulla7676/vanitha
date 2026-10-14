import React, { useEffect, useRef, useState } from 'react';

export function useReducedMotion(){const [reduced,setReduced]=useState(false);useEffect(()=>{const m=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(m.matches);update();m.addEventListener?.('change',update);return()=>m.removeEventListener?.('change',update)},[]);return reduced}
export function BlurText({text,children}){return <span className="blur-text">{text||children}</span>}
export function SplitText({text}){return <span>{text}</span>}
export function FadeContent({children}){return <div className="fade-content">{children}</div>}
export function AnimatedContent({children,className='',delay=0}){const ref=useRef(null);const [shown,setShown]=useState(false);useEffect(()=>{const el=ref.current;if(!el){setShown(true);return}if(!('IntersectionObserver'in window)){setShown(true);return}const io=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){setShown(true);io.disconnect()}},{threshold:.05});io.observe(el);return()=>io.disconnect()},[]);return <div ref={ref} className={`animated-content ${shown?'is-visible':''} ${className}`} style={{transitionDelay:`${delay}ms`}}>{children}</div>}
export function ScrollReveal({children}){return <AnimatedContent>{children}</AnimatedContent>}
export function GradualBlur(){return <div className="gradual-blur"/>}
export function Magnet({children}){return <span className="magnet-wrap">{children}</span>}
export function SpotlightCard({children,className=''}){return <div className={`spotlight-card ${className}`}>{children}</div>}
export function TiltedCard({children,className=''}){return <div className={`tilted-card ${className}`}>{children}</div>}
export function GlareHover({children}){return <div className="glare-hover">{children}</div>}
export function CountUp({value,suffix='',decimals=0}){const [count,setCount]=useState(value);return <>{Number(count).toFixed(decimals)}{suffix}</>}
export function LogoLoop({children}){return <div className="logo-loop">{children}</div>}
export function ScrollExpand({children}){return <div>{children}</div>}
export function ClickSpark({children}){return <span>{children}</span>}
export function Noise(){return <div className="noise-overlay" aria-hidden="true"/>}
export function Particles(){return <div className="particles" aria-hidden="true"/>}
export function Aurora(){return <div className="aurora" aria-hidden="true"/>}
export function PillNav({items}){const [active,setActive]=useState('home');useEffect(()=>{const update=()=>{let cur='home';for(const item of items){const el=document.getElementById(item.id);if(el&&el.getBoundingClientRect().top<180)cur=item.id}setActive(cur)};window.addEventListener('scroll',update,{passive:true});update();return()=>window.removeEventListener('scroll',update)},[items]);return <nav className="pill-nav" aria-label="Main navigation">{items.map(i=><a key={i.id} href={`#${i.id}`} className={active===i.id?'active':''} onClick={()=>setActive(i.id)}>{i.label}</a>)}</nav>}
export function ScrollStack({children}){return <div>{children}</div>}
export function AccordionGallery({children}){return <div>{children}</div>}
