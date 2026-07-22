'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const langs = ['TR','EN','DE','RU','AR']
const bookLabel = {TR:'📞 Rezervasyon',EN:'📞 Book Now',DE:'📞 Buchen',RU:'📞 Бронировать',AR:'📞 احجز'}
const navT = {
  about:{TR:'Hakkımızda',EN:'About',DE:'Über uns',RU:'О нас',AR:'عنا'},
  tours:{TR:'Turlar',EN:'Tours',DE:'Touren',RU:'Туры',AR:'الجولات'},
  gallery:{TR:'Galeri',EN:'Gallery',DE:'Galerie',RU:'Галерея',AR:'معرض'},
  contact:{TR:'İletişim',EN:'Contact',DE:'Kontakt',RU:'Контакты',AR:'اتصل'},
}
const tourLinks = [
  {href:'/turlar/rafting',label:{TR:'🚣 Rafting Turu',EN:'🚣 Rafting',DE:'🚣 Rafting',RU:'🚣 Рафтинг',AR:'🚣 رافتينج'}},
  {href:'/turlar/buggy-safari',label:{TR:'🚗 Buggy Safari',EN:'🚗 Buggy Safari',DE:'🚗 Buggy',RU:'🚗 Багги',AR:'🚗 باجي'}},
  {href:'/turlar/zipline',label:{TR:'🪂 Zipline',EN:'🪂 Zipline',DE:'🪂 Zipline',RU:'🪂 Зиплайн',AR:'🪂 زيب لاين'}},
  {href:'/turlar/kanyon-turu',label:{TR:'🏔️ Kanyon Turu',EN:'🏔️ Canyon Tour',DE:'🏔️ Kanyontour',RU:'🏔️ Каньон',AR:'🏔️ الوادي'}},
  {href:'/turlar/cabrio-safari',label:{TR:'🚙 Cabrio Safari',EN:'🚙 Cabrio Safari',DE:'🚙 Cabrio',RU:'🚙 Кабрио',AR:'🚙 كابريو'}},
  {href:'/turlar/combo-tur',label:{TR:'⭐ Combo Tur 5+1',EN:'⭐ Combo Tour 5+1',DE:'⭐ Kombi 5+1',RU:'⭐ Комбо 5+1',AR:'⭐ مدمجة'}},
  {href:'/turlar/yat-gezisi',label:{TR:'⛵ Yat Gezisi',EN:'⛵ Yacht Tour',DE:'⛵ Jacht',RU:'⛵ Яхта',AR:'⛵ يخت'}},
]

export default function Navbar() {
  const [lang, setLang] = useState('TR')
  const [open, setOpen] = useState(false)
  const [toursOpen, setToursOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navStyle = {
    position:'fixed',top:0,left:0,right:0,zIndex:200,
    background: scrolled ? 'rgba(6,78,59,0.97)' : '#064e3b',
    backdropFilter:'blur(12px)',
    boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.2)' : 'none',
    transition:'all 0.3s',
  }

  return (
    <>
      {/* Lang bar */}
      <div style={{position:'fixed',top:0,right:0,zIndex:300,display:'flex'}}>
        {langs.map(l => (
          <button key={l} onClick={()=>setLang(l)} style={{
            background: lang===l ? '#0d9488' : 'rgba(6,78,59,0.95)',
            color: lang===l ? '#fff' : 'rgba(255,255,255,0.6)',
            border:'none',padding:'6px 10px',fontSize:'0.72rem',fontWeight:700,
            cursor:'pointer',fontFamily:'inherit',borderLeft:'1px solid rgba(255,255,255,0.1)'
          }}>{l}</button>
        ))}
      </div>

      <nav style={navStyle}>
        <div style={{maxWidth:1280,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',height:64,marginTop:32}}>
          <Link href="/" style={{fontWeight:900,fontSize:'1.4rem',color:'#fff',letterSpacing:'-0.5px',fontFamily:'Arial Black,Arial,sans-serif'}}>
            ŞAMATA <span style={{color:'#14b8a6'}}>RAFTİNG</span>
          </Link>

          {/* Desktop */}
          <div className="desk-nav" style={{display:'flex',alignItems:'center',gap:4}}>
            <div style={{position:'relative'}} onMouseEnter={()=>setToursOpen(true)} onMouseLeave={()=>setToursOpen(false)}>
              <button style={{background:'none',color:'rgba(255,255,255,0.85)',padding:'8px 14px',borderRadius:8,fontWeight:600,fontSize:'0.875rem',cursor:'pointer',fontFamily:'inherit',display:'flex',alignItems:'center',gap:4}}>
                {navT.tours[lang]} <span style={{fontSize:'0.65rem'}}>▼</span>
              </button>
              {toursOpen && (
                <div style={{position:'absolute',top:'100%',left:0,background:'#fff',borderRadius:12,padding:'8px 0',minWidth:220,boxShadow:'0 20px 60px rgba(0,0,0,0.15)',border:'1px solid #e5e7eb',zIndex:300}}>
                  {tourLinks.map(t=>(
                    <Link key={t.href} href={t.href} style={{display:'block',padding:'10px 16px',color:'#374151',fontSize:'0.875rem',fontWeight:500}}>{t.label[lang]}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/galeri" style={{color:'rgba(255,255,255,.85)',padding:'8px 14px',fontWeight:600,fontSize:'0.875rem'}}>{navT.gallery[lang]}</Link>
            <Link href="/hakkimizda" style={{color:'rgba(255,255,255,.85)',padding:'8px 14px',fontWeight:600,fontSize:'0.875rem'}}>{navT.about[lang]}</Link>
            <Link href="/iletisim" style={{color:'rgba(255,255,255,.85)',padding:'8px 14px',fontWeight:600,fontSize:'0.875rem'}}>{navT.contact[lang]}</Link>
            <a href="https://wa.me/905380848760" target="_blank" rel="noopener noreferrer" style={{background:'#25D366',color:'#fff',padding:'9px 20px',borderRadius:50,fontWeight:700,fontSize:'0.875rem',marginLeft:8}}>
              {bookLabel[lang]}
            </a>
          </div>

          {/* Burger */}
          <button onClick={()=>setOpen(!open)} className="burger" style={{display:'none',flexDirection:'column',gap:5,background:'none',border:'none',cursor:'pointer',padding:4}}>
            <span style={{display:'block',width:24,height:2,background:'#fff',borderRadius:2,transition:'all 0.3s',transform:open?'rotate(45deg) translateY(7px)':'none'}}/>
            <span style={{display:'block',width:24,height:2,background:'#fff',borderRadius:2,opacity:open?0:1}}/>
            <span style={{display:'block',width:24,height:2,background:'#fff',borderRadius:2,transition:'all 0.3s',transform:open?'rotate(-45deg) translateY(-7px)':'none'}}/>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{position:'fixed',top:96,left:0,right:0,background:'rgba(6,78,59,0.98)',zIndex:190,padding:'12px 16px 20px',display:'flex',flexDirection:'column',gap:4}}>
          {tourLinks.map(t=>(
            <Link key={t.href} href={t.href} onClick={()=>setOpen(false)} style={{color:'rgba(255,255,255,0.8)',padding:'10px 16px',fontSize:'0.875rem',fontWeight:500}}>{t.label[lang]}</Link>
          ))}
          <Link href="/galeri" onClick={()=>setOpen(false)} style={{color:'#fff',padding:'12px 16px',fontWeight:600}}>{navT.gallery[lang]}</Link>
          <Link href="/hakkimizda" onClick={()=>setOpen(false)} style={{color:'#fff',padding:'12px 16px',fontWeight:600}}>{navT.about[lang]}</Link>
          <Link href="/iletisim" onClick={()=>setOpen(false)} style={{color:'#fff',padding:'12px 16px',fontWeight:600}}>{navT.contact[lang]}</Link>
          <a href="tel:+905380848760" style={{background:'#0d9488',color:'#fff',padding:'12px 16px',borderRadius:10,fontWeight:700,textAlign:'center',marginTop:8}}>📞 Tıkla Ara · Bilgi Al</a>
          <a href="https://wa.me/905380848760" target="_blank" rel="noopener noreferrer" style={{background:'#25D366',color:'#fff',padding:'12px 16px',borderRadius:10,fontWeight:700,textAlign:'center',marginTop:6}}>📱 WhatsApp Rezervasyon</a>
        </div>
      )}

      <style>{`
        @media(max-width:900px){.desk-nav{display:none!important}.burger{display:flex!important}}
      `}</style>
    </>
  )
}
