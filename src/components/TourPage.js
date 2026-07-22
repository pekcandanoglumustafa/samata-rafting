import Image from 'next/image'
import Link from 'next/link'

export default function TourPage({tour}) {
  return (
    <>
      <div style={{position:'relative',height:'70vh',minHeight:480,overflow:'hidden'}}>
        <Image src={tour.img} alt={tour.title} fill style={{objectFit:'cover'}} priority/>
        <div style={{position:'absolute',inset:0,background:`linear-gradient(to bottom,rgba(6,78,59,0.45),rgba(2,44,34,0.85))`}}/>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',padding:'0 24px',paddingTop:96}}>
          <div style={{maxWidth:1280,margin:'0 auto',width:'100%'}}>
            <div style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',color:'#5eead4',marginBottom:12}}>{tour.icon} {tour.location}</div>
            <h1 style={{fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,color:'#fff',letterSpacing:'-2px',marginBottom:16,maxWidth:700,fontFamily:'Arial Black,Arial,sans-serif'}}>{tour.title}</h1>
            <p style={{color:'rgba(255,255,255,0.85)',fontSize:'1.1rem',maxWidth:540,lineHeight:1.7,marginBottom:28}}>{tour.desc}</p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a href="tel:+905380848760" style={{background:'#0d9488',color:'#fff',padding:'13px 28px',borderRadius:50,fontWeight:700,fontSize:'0.95rem',display:'inline-flex',alignItems:'center',gap:8}}>📞 Tıkla Ara · Bilgi Al</a>
              <Link href={`/rezervasyon?tur=${tour.slug}`} style={{background:'#ea580c',color:'#fff',padding:'13px 28px',borderRadius:50,fontWeight:700,fontSize:'0.95rem',display:'inline-flex',alignItems:'center',gap:8}}>📋 Rezervasyon Yap</Link>
              <a href={`https://wa.me/905380848760?text=${encodeURIComponent(tour.title+' hakkında bilgi almak istiyorum')}`} target="_blank" rel="noopener noreferrer" style={{background:'#25D366',color:'#fff',padding:'13px 28px',borderRadius:50,fontWeight:700,fontSize:'0.95rem'}}>📱 WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

      <div style={{maxWidth:1280,margin:'0 auto',padding:'80px 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:60}}>
          <div>
            <h2 style={{fontSize:'2rem',fontWeight:900,color:'#111827',marginBottom:20,fontFamily:'Arial Black,Arial,sans-serif'}}>{tour.contentTitle}</h2>
            {tour.paragraphs.map((p,i)=><p key={i} style={{color:'#4b5563',lineHeight:1.8,fontSize:'1.05rem',marginBottom:16}}>{p}</p>)}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,margin:'28px 0'}}>
              {tour.includes.map(item=>(
                <div key={item} style={{display:'flex',alignItems:'center',gap:8,background:'#f0fdfa',padding:'10px 14px',borderRadius:10,fontSize:'0.875rem',fontWeight:600,color:'#065f46'}}>
                  <span style={{color:'#0d9488'}}>✓</span> {item}
                </div>
              ))}
            </div>
            {tour.gallery && (
              <>
                <h3 style={{fontSize:'1.4rem',fontWeight:800,color:'#111827',margin:'36px 0 16px',fontFamily:'Arial Black,Arial,sans-serif'}}>Fotoğraflar</h3>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
                  {tour.gallery.map((img,i)=>(
                    <div key={i} style={{borderRadius:12,overflow:'hidden',aspectRatio:'4/3',position:'relative'}}>
                      <Image src={img} alt={`${tour.title} ${i+1}`} fill style={{objectFit:'cover'}}/>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div style={{marginTop:48,paddingTop:32,borderTop:'1px solid #e5e7eb'}}>
              <h3 style={{fontSize:'1.1rem',fontWeight:800,color:'#111827',marginBottom:16}}>Diğer Turlarımız</h3>
              <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
                {[['/turlar/rafting','🚣 Rafting'],['/turlar/buggy-safari','🚗 Buggy'],['/turlar/zipline','🪂 Zipline'],['/turlar/kanyon-turu','🏔️ Kanyon'],['/turlar/combo-tur','⭐ Combo'],['/turlar/yat-gezisi','⛵ Yat']].filter(l=>l[0]!==`/turlar/${tour.slug}`).map(([href,label])=>(
                  <Link key={href} href={href} style={{background:'#f3f4f6',color:'#374151',padding:'7px 14px',borderRadius:20,fontSize:'0.875rem',fontWeight:600}}>{label}</Link>
                ))}
              </div>
            </div>
          </div>
          <div style={{position:'sticky',top:100,height:'fit-content'}}>
            <div style={{background:'#f9fafb',borderRadius:20,padding:28,border:'1px solid #e5e7eb'}}>
              <h3 style={{fontSize:'1.4rem',fontWeight:900,color:'#111827',marginBottom:20}}>Rezervasyon</h3>
              {tour.price && (
                <div style={{background:'#fff',borderRadius:12,padding:'14px 16px',marginBottom:16,border:'1px solid #e5e7eb',display:'flex',alignItems:'center',gap:12}}>
                  <span style={{fontSize:'1.3rem'}}>💰</span>
                  <div>
                    <div style={{fontSize:'0.72rem',color:'#9ca3af',fontWeight:600}}>Fiyat</div>
                    <div style={{fontWeight:800,color:'#ea580c',fontSize:'1.05rem'}}>{tour.price}</div>
                    {tour.priceNote && <div style={{fontSize:'0.75rem',color:'#6b7280'}}>{tour.priceNote}</div>}
                  </div>
                </div>
              )}
              {tour.details.map(d=>(
                <div key={d.label} style={{display:'flex',gap:12,marginBottom:12,padding:'12px 14px',background:'#fff',borderRadius:10,border:'1px solid #f3f4f6'}}>
                  <span style={{fontSize:'1.1rem'}}>{d.icon}</span>
                  <div>
                    <div style={{fontSize:'0.72rem',color:'#9ca3af',fontWeight:600}}>{d.label}</div>
                    <div style={{fontWeight:700,color:'#111827',fontSize:'0.875rem'}}>{d.val}</div>
                  </div>
                </div>
              ))}
              <a href="tel:+905380848760" style={{display:'block',background:'#0d9488',color:'#fff',padding:'14px',borderRadius:10,fontWeight:700,textAlign:'center',marginTop:16}}>📞 Tıkla Ara · Bilgi Al</a>
              <a href={`https://wa.me/905380848760?text=${encodeURIComponent(tour.title+' için rezervasyon yapmak istiyorum')}`} target="_blank" rel="noopener noreferrer" style={{display:'block',background:'#25D366',color:'#fff',padding:'14px',borderRadius:10,fontWeight:700,textAlign:'center',marginTop:10}}>📱 WhatsApp ile Rezervasyon</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
