import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Şamata Rafting – Köprülü Kanyon Rafting, Buggy, Zipline, Yat Gezisi | Beşkonak Antalya',
  description: 'Antalya Beşkonak\'ta rafting, buggy safari, zipline, kanyon turu, yat gezisi. Köprülü Kanyon macera turları. A Grubu Seyahat Acentası. WhatsApp rezervasyon!',
}

const tours = [
  {href:'/turlar/rafting',icon:'🚣',title:'Rafting Turu',desc:'14 km Köprüçay\'da coşkulu sularda heyecan dolu yolculuk.',img:'/images/rafting2.webp',price:'1.200 TL / 20 EUR',priceNote:'Yemek dahil',badge:null},
  {href:'/turlar/buggy-safari',icon:'🚗',title:'Buggy Safari',desc:'Nehir yataklarında off-road buggy ile çamur ve adrenalin!',img:'/images/buggy3.webp',price:null,badge:null},
  {href:'/turlar/zipline',icon:'🪂',title:'Zipline',desc:'Kanyon üzerinde uçuş hissiyle nefes kesen manzara.',img:'/images/zipline.webp',price:null,badge:null},
  {href:'/turlar/kanyon-turu',icon:'🏔️',title:'Kanyon Turu',desc:'Tazı Kanyonu\'nun kristal sularında yüzme ve doğa.',img:'/images/canyon1.webp',price:null,badge:null},
  {href:'/turlar/cabrio-safari',icon:'🚙',title:'Cabrio Safari',desc:'Üstü açık araçlarla Beşkonak\'ın doğasını keşfet.',img:'/images/cabrio1.webp',price:null,badge:null},
  {href:'/turlar/combo-tur',icon:'⭐',title:'Combo Tur 5+1',desc:'Buggy+Zipline+Cabrio+Kanyon+Rafting – hepsini tek günde!',img:'/images/group1.webp',price:'1.750 TL / 30 EUR',priceNote:'Yemek dahil',badge:'EN POPÜLER'},
  {href:'/turlar/yat-gezisi',icon:'⛵',title:'Yat Gezisi',desc:'Manavgat & Side\'dan kalkan lüks yat turu.',img:'/images/yacht1.webp',price:null,badge:'YENİ'},
]

const reviews = [
  {name:'Ercan Doğan',time:'1 yıl önce',text:'"Kanyonun en lezzetli balığı burda! Kaptanlarıyla rafting yapabilirsiniz. Gidin pişman olmazsınız."',avatar:'E',color:'#0d9488'},
  {name:'Tarık Dönmez',time:'4 hafta önce',text:'"Yıllardır burayı tercih ediyoruz, çok güzel bir aile işletmesi. Her seferinde memnun kalıyoruz."',avatar:'T',color:'#ea580c'},
  {name:'F. Nilgün Kara Gökkaya',time:'10 ay önce',text:'"İki kez gittik. Sadece rafting değil buggy, zipline da yapabiliyorsunuz. Çok eğlenceli, tavsiye ederim!"',avatar:'F',color:'#7c3aed'},
  {name:'Burak Araslı',time:'1 yıl önce',text:'"Tüm çalışanlar çok güleryüzlü. Rafting başlangıcından bitişine kadar harika vakit geçirdik."',avatar:'B',color:'#064e3b'},
  {name:'Selçuk Şimşek',time:'4 yıl önce',text:'"İlk rafting tecrübemi şamata ile gerçekleştirdim. Buraya geldinizde yapmanız gereken ilk şey!"',avatar:'S',color:'#0891b2'},
  {name:'Büşra Uysaler',time:'1 yıl önce',text:'"Rafting denilince akla gelen ilk yer şamata rafting! 3 defa gittik, çok memnun kaldık."',avatar:'B',color:'#dc2626'},
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0}}>
          <Image src="/images/rafting2.webp" alt="Şamata Rafting Köprülü Kanyon" fill style={{objectFit:'cover'}} priority fetchPriority="high"/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(6,78,59,0.55),rgba(2,44,34,0.8))'}}/>
        </div>
        <div style={{position:'relative',zIndex:2,maxWidth:1280,margin:'0 auto',padding:'160px 24px 80px',width:'100%'}}>
          <div style={{maxWidth:750}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(20,184,166,0.15)',border:'1px solid rgba(20,184,166,0.4)',color:'#5eead4',padding:'6px 16px',borderRadius:50,fontSize:'0.8rem',fontWeight:600,letterSpacing:'1px',textTransform:'uppercase',marginBottom:24}}>
              🌊 Köprülü Kanyon · Beşkonak · Antalya
            </div>
            <h1 style={{fontSize:'clamp(3rem,10vw,7rem)',fontWeight:900,color:'#fff',lineHeight:0.92,letterSpacing:'-2px',marginBottom:24,fontFamily:'Arial Black,Arial,sans-serif'}}>
              ŞAMATA<br/><span style={{color:'#14b8a6'}}>RAFTİNG</span>
            </h1>
            <p style={{fontSize:'clamp(1rem,2vw,1.25rem)',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:40,maxWidth:560}}>
              Türkiye'nin en heyecanlı kanyonunda <strong style={{color:'#fff'}}>7 farklı aktivite</strong> ile unutulmaz macera sizi bekliyor.
            </p>
            <div style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:60}}>
              <a href="tel:+905380848760" style={{background:'#0d9488',color:'#fff',padding:'15px 28px',borderRadius:50,fontWeight:700,fontSize:'1rem',display:'inline-flex',alignItems:'center',gap:8,boxShadow:'0 8px 28px rgba(13,148,136,0.4)'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Tıkla Ara · Bilgi Al
              </a>
              <a href="https://wa.me/905380848760" target="_blank" rel="noopener noreferrer" style={{background:'#25D366',color:'#fff',padding:'15px 28px',borderRadius:50,fontWeight:700,fontSize:'1rem',display:'inline-flex',alignItems:'center',gap:8,boxShadow:'0 8px 28px rgba(37,211,102,0.4)'}}>
                WhatsApp Rezervasyon
              </a>
            </div>
            <div style={{display:'flex',gap:32,flexWrap:'wrap'}}>
              {[['14 KM','Rafting Parkuru'],['7','Farklı Aktivite'],['4.9★','Google Puanı'],['A Grubu','Seyahat Acentası']].map(([n,l])=>(
                <div key={n}>
                  <div style={{fontSize:'clamp(1.4rem,3vw,2rem)',fontWeight:900,color:'#14b8a6',lineHeight:1,fontFamily:'Arial Black,Arial,sans-serif'}}>{n}</div>
                  <div style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.65)',fontWeight:500,letterSpacing:'1px',textTransform:'uppercase',marginTop:4}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{position:'absolute',bottom:-2,left:0,right:0,overflow:'hidden',lineHeight:0}}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" style={{width:'100%'}}>
            <path fill="#ffffff" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"/>
          </svg>
        </div>
      </section>

      {/* TURLAR */}
      <section style={{padding:'96px 24px',background:'#fff'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:64}}>
            <div style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',color:'#0d9488',marginBottom:12}}>Hizmetlerimiz</div>
            <h2 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,color:'#111827',letterSpacing:'-1px',marginBottom:16,fontFamily:'Arial Black,Arial,sans-serif'}}>7 Farklı Macera Paketi</h2>
            <p style={{color:'#6b7280',fontSize:'1.1rem',maxWidth:560,margin:'0 auto',lineHeight:1.7}}>Her yaşa ve deneyim seviyesine uygun aktiviteler</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:24}}>
            {tours.map(tour=>(
              <Link key={tour.href} href={tour.href} style={{display:'block',borderRadius:20,overflow:'hidden',boxShadow:'0 4px 24px rgba(0,0,0,0.08)',border:'1px solid #f3f4f6',background:'#fff',textDecoration:'none'}}>
                <div style={{position:'relative',height:200}}>
                  <Image src={tour.img} alt={tour.title} fill style={{objectFit:'cover'}}/>
                  {tour.badge && <div style={{position:'absolute',top:12,right:12,background:tour.badge==='YENİ'?'#0d9488':'#ea580c',color:'#fff',padding:'4px 12px',borderRadius:20,fontSize:'0.7rem',fontWeight:800}}>⭐ {tour.badge}</div>}
                </div>
                <div style={{padding:'20px 24px 24px'}}>
                  <div style={{fontSize:'1.8rem',marginBottom:8}}>{tour.icon}</div>
                  <h3 style={{fontSize:'1.2rem',fontWeight:800,color:'#111827',marginBottom:8}}>{tour.title}</h3>
                  <p style={{color:'#6b7280',fontSize:'0.875rem',lineHeight:1.6,marginBottom:12}}>{tour.desc}</p>
                  {tour.price && (
                    <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap',marginBottom:12}}>
                      <span style={{background:'#ea580c',color:'#fff',padding:'4px 12px',borderRadius:20,fontWeight:800,fontSize:'0.875rem'}}>{tour.price}</span>
                      {tour.priceNote && <span style={{color:'#6b7280',fontSize:'0.78rem'}}>{tour.priceNote}</span>}
                    </div>
                  )}
                  <span style={{color:'#0d9488',fontWeight:700,fontSize:'0.875rem'}}>Detaylar →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* YORUMLAR */}
      <section style={{padding:'96px 24px',background:'#f9fafb'}}>
        <div style={{maxWidth:1280,margin:'0 auto'}}>
          <div style={{textAlign:'center',marginBottom:56}}>
            <div style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',color:'#0d9488',marginBottom:12}}>Müşteri Yorumları</div>
            <h2 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:900,color:'#111827',letterSpacing:'-1px',marginBottom:16,fontFamily:'Arial Black,Arial,sans-serif'}}>Misafirlerimiz Ne Diyor?</h2>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,flexWrap:'wrap'}}>
              <span style={{color:'#f59e0b',fontSize:'1.5rem'}}>★★★★★</span>
              <span style={{fontWeight:800,fontSize:'1.3rem',color:'#111827'}}>4.9</span>
              <span style={{color:'#9ca3af'}}>· 200+ Google yorumu</span>
              <a href="https://share.google/7gudHw7D8Ubt7107c" target="_blank" rel="noopener noreferrer" style={{background:'#f0fdfa',color:'#0d9488',padding:'6px 14px',borderRadius:20,fontSize:'0.8rem',fontWeight:700,border:'1px solid #99f6e4'}}>Tüm Yorumlar →</a>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:20}}>
            {reviews.map((r,i)=>(
              <div key={i} style={{background:'#fff',borderRadius:16,padding:24,border:'1px solid #e5e7eb'}}>
                <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
                  <div style={{width:42,height:42,background:r.color,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:800,flexShrink:0}}>{r.avatar}</div>
                  <div>
                    <div style={{fontWeight:700,color:'#111827',fontSize:'0.95rem'}}>{r.name}</div>
                    <div style={{fontSize:'0.75rem',color:'#9ca3af'}}>{r.time}</div>
                  </div>
                  <div style={{marginLeft:'auto',color:'#f59e0b'}}>★★★★★</div>
                </div>
                <p style={{color:'#4b5563',fontSize:'0.875rem',lineHeight:1.7}}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'96px 24px',background:'linear-gradient(135deg,#064e3b,#022c22)',textAlign:'center'}}>
        <div style={{maxWidth:700,margin:'0 auto'}}>
          <h2 style={{fontSize:'clamp(2rem,4vw,3.5rem)',fontWeight:900,color:'#fff',letterSpacing:'-1px',marginBottom:20,fontFamily:'Arial Black,Arial,sans-serif'}}>Maceraya Hazır Mısın?</h2>
          <p style={{color:'rgba(255,255,255,0.75)',fontSize:'1.1rem',lineHeight:1.7,marginBottom:40}}>Hemen ara veya WhatsApp'tan rezervasyon yap. Gruplar için özel fiyat!</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <a href="tel:+905380848760" style={{background:'#0d9488',color:'#fff',padding:'16px 32px',borderRadius:50,fontWeight:700,fontSize:'1rem'}}>📞 Tıkla Ara · Bilgi Al</a>
            <a href="https://wa.me/905380848760" target="_blank" rel="noopener noreferrer" style={{background:'#25D366',color:'#fff',padding:'16px 32px',borderRadius:50,fontWeight:700,fontSize:'1rem'}}>📱 WhatsApp ile Rezervasyon</a>
          </div>
        </div>
      </section>
    </>
  )
}
