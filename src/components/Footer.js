import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{background:'#022c22',color:'rgba(255,255,255,0.55)',padding:'60px 24px 32px'}}>
      <div style={{maxWidth:1280,margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:40,marginBottom:48}}>
          <div>
            <div style={{fontWeight:900,fontSize:'1.4rem',color:'#fff',marginBottom:12,fontFamily:'Arial Black,Arial,sans-serif'}}>
              ŞAMATA <span style={{color:'#14b8a6'}}>RAFTİNG</span>
            </div>
            <p style={{fontSize:'0.875rem',lineHeight:1.7,marginBottom:12}}>Beşkonak, Köprülü Kanyon Milli Parkı, Manavgat / Antalya</p>
            <a href="https://wa.me/905380848760" target="_blank" rel="noopener noreferrer" style={{color:'#14b8a6',fontWeight:700,fontSize:'0.875rem'}}>+90 538 084 87 60</a>
          </div>
          <div>
            <h4 style={{color:'#fff',fontWeight:700,fontSize:'0.875rem',letterSpacing:'1px',textTransform:'uppercase',marginBottom:16}}>Turlarımız</h4>
            {[
              ['/turlar/rafting','Rafting Turu'],
              ['/turlar/buggy-safari','Buggy Safari'],
              ['/turlar/zipline','Zipline'],
              ['/turlar/kanyon-turu','Kanyon Turu'],
              ['/turlar/cabrio-safari','Cabrio Safari'],
              ['/turlar/combo-tur','Combo Tur 5+1'],
              ['/turlar/yat-gezisi','Yat Gezisi'],
            ].map(([href,label])=>(
              <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.55)',fontSize:'0.875rem',marginBottom:8}}>{label}</Link>
            ))}
          </div>
          <div>
            <h4 style={{color:'#fff',fontWeight:700,fontSize:'0.875rem',letterSpacing:'1px',textTransform:'uppercase',marginBottom:16}}>Hızlı Bağlantılar</h4>
            {[['/galeri','Galeri'],['/hakkimizda','Hakkımızda'],['/iletisim','İletişim'],['/sss','SSS'],['/rezervasyon','Online Rezervasyon']].map(([href,label])=>(
              <Link key={href} href={href} style={{display:'block',color:'rgba(255,255,255,0.55)',fontSize:'0.875rem',marginBottom:8}}>{label}</Link>
            ))}
          </div>
          <div>
            <h4 style={{color:'#fff',fontWeight:700,fontSize:'0.875rem',letterSpacing:'1px',textTransform:'uppercase',marginBottom:16}}>Turizm Belgesi</h4>
            <div style={{background:'rgba(255,255,255,0.05)',borderRadius:12,padding:16,border:'1px solid rgba(255,255,255,0.08)'}}>
              <div style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.5)',marginBottom:4}}>T.C. Kültür ve Turizm Bakanlığı</div>
              <div style={{color:'#14b8a6',fontWeight:700,fontSize:'0.85rem'}}>A Grubu Seyahat Acentası</div>
              <div style={{color:'#fff',fontWeight:800,fontSize:'0.95rem',marginTop:4}}>Belge No: 16773</div>
              <div style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.4)',marginTop:6}}>Rabbit Turizm · Şamata Rafting Turizm Ltd. Şti.</div>
            </div>
          </div>
        </div>
        <div style={{borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:24,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
          <p style={{fontSize:'0.8rem'}}>© 2026 Şamata Rafting – Tüm hakları saklıdır.</p>
          <a href="https://www.instagram.com/samatarafting/" target="_blank" rel="noopener noreferrer" style={{color:'rgba(255,255,255,0.5)',fontSize:'0.8rem'}}>@samatarafting</a>
        </div>
      </div>
    </footer>
  )
}
