export const metadata = {title:'İletişim – Şamata Rafting Rezervasyon',description:'Şamata Rafting iletişim. Telefon: +90 538 084 87 60. Beşkonak, Manavgat / Antalya.'}
export default function IletisimPage() {
  return (
    <>
      <div style={{background:'linear-gradient(135deg,#064e3b,#022c22)',padding:'120px 24px 60px',textAlign:'center'}}>
        <h1 style={{fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:900,color:'#fff',letterSpacing:'-1px',fontFamily:'Arial Black,Arial,sans-serif'}}>İletişim</h1>
      </div>
      <div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60}}>
          <div>
            <h2 style={{fontSize:'1.8rem',fontWeight:900,color:'#111827',marginBottom:32}}>Rezervasyon & Bilgi</h2>
            {[
              {icon:'📱',label:'WhatsApp & Telefon',val:'+90 538 084 87 60',href:'https://wa.me/905380848760',isLink:true},
              {icon:'📞',label:'Doğrudan Ara',val:'+90 538 084 87 60',href:'tel:+905380848760',isLink:true},
              {icon:'📸',label:'Instagram',val:'@samatarafting',href:'https://www.instagram.com/samatarafting/',isLink:true},
              {icon:'📍',label:'Adres',val:'Beşkonak Mah. Köylüler Küme Evleri No:71/4-Z01\nManavgat / Antalya',isLink:false},
              {icon:'🕐',label:'Çalışma Saatleri',val:'Her gün 08:00 – 18:00 (Sezon boyunca)',isLink:false},
              {icon:'🏛️',label:'Turizm Belgesi',val:'A Grubu Seyahat Acentası – Belge No: 16773',isLink:false},
            ].map(c=>(
              <div key={c.label} style={{display:'flex',gap:14,marginBottom:16,padding:18,background:'#f9fafb',borderRadius:12,border:'1px solid #e5e7eb'}}>
                <div style={{width:46,height:46,background:'#064e3b',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.2rem',flexShrink:0}}>{c.icon}</div>
                <div>
                  <div style={{fontSize:'0.72rem',color:'#9ca3af',fontWeight:600,textTransform:'uppercase',letterSpacing:'1px',marginBottom:4}}>{c.label}</div>
                  {c.isLink
                    ? <a href={c.href} target={c.href.startsWith('http')?'_blank':'_self'} rel="noopener noreferrer" style={{fontWeight:700,color:'#0d9488',fontSize:'0.95rem'}}>{c.val}</a>
                    : <p style={{fontWeight:600,color:'#111827',fontSize:'0.9rem',whiteSpace:'pre-line'}}>{c.val}</p>
                  }
                </div>
              </div>
            ))}
          </div>
          <div>
            <div style={{borderRadius:20,overflow:'hidden',boxShadow:'0 8px 40px rgba(0,0,0,0.1)',marginBottom:16}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.0!2d31.4523!3d37.1456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b8e0e0e0e0e1%3A0x0!2zU8ehamFtYXRhIFJhZnRpbmcsIEJlxZ9rb25hay!5e0!3m2!1str!2str!4v1" width="100%" height="320" style={{border:'none',display:'block'}} allowFullScreen loading="lazy" title="Şamata Rafting Konum"/>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Şamata+Rafting+Beşkonak+Antalya" target="_blank" rel="noopener noreferrer" style={{display:'block',background:'#0d9488',color:'#fff',padding:'13px',borderRadius:10,fontWeight:700,textAlign:'center',marginBottom:10}}>🗺️ Yol Tarifi Al</a>
            <a href="https://wa.me/905380848760" target="_blank" rel="noopener noreferrer" style={{display:'block',background:'#25D366',color:'#fff',padding:'13px',borderRadius:10,fontWeight:700,textAlign:'center'}}>📱 WhatsApp ile Rezervasyon</a>
          </div>
        </div>
      </div>
    </>
  )
}
