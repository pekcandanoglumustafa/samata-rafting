import Image from 'next/image'
export const metadata = {title:'Hakkımızda – Şamata Rafting Turizm Ltd. Şti.',description:'A Grubu Seyahat Acentası Belge No: 16773. Köprülü Kanyon\'da yıllardır hizmet.'}
export default function HakkimizdaPage() {
  return (
    <>
      <div style={{background:'linear-gradient(135deg,#064e3b,#022c22)',padding:'120px 24px 60px',textAlign:'center'}}>
        <h1 style={{fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:900,color:'#fff',letterSpacing:'-1px',fontFamily:'Arial Black,Arial,sans-serif'}}>Hakkımızda</h1>
      </div>
      <div style={{maxWidth:1100,margin:'0 auto',padding:'80px 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center',marginBottom:80}}>
          <div>
            <h2 style={{fontSize:'2rem',fontWeight:900,color:'#111827',marginBottom:20,fontFamily:'Arial Black,Arial,sans-serif'}}>Beşkonak\'ın En Köklü Macera Merkezi</h2>
            <p style={{color:'#4b5563',lineHeight:1.8,marginBottom:16}}>Şamata Rafting olarak, Antalya\'nın Beşkonak beldesindeki efsanevi Köprülü Kanyon\'da yıllardır misafirlerimize unutulmaz macera deneyimleri sunuyoruz.</p>
            <p style={{color:'#4b5563',lineHeight:1.8,marginBottom:16}}>Manavgat ve Side sahillerinden kalkan yat gezisi hizmetimizle de Akdeniz\'in güzelliklerini keşfettiriyoruz. 7 farklı aktivite ile kapsamlı macera deneyimi sunmaktan gurur duyuyoruz.</p>
          </div>
          <div style={{borderRadius:20,overflow:'hidden',aspectRatio:'4/3',position:'relative',boxShadow:'0 20px 60px rgba(0,0,0,0.15)'}}>
            <Image src="/images/rafting3.webp" alt="Şamata Rafting" fill style={{objectFit:'cover'}}/>
          </div>
        </div>
        <div style={{background:'#f0fdfa',borderRadius:24,padding:40,border:'1px solid #99f6e4',marginBottom:60}}>
          <h3 style={{fontSize:'1.5rem',fontWeight:900,color:'#064e3b',marginBottom:24,fontFamily:'Arial Black,Arial,sans-serif'}}>🏛️ Resmi Turizm Belgesi</h3>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16}}>
            {[['Belge Türü','A Grubu Seyahat Acentası'],['Belge No','16773'],['Ünvan','Rabbit Turizm Seyahat Acentası'],['İşletme','Şamata Rafting Turizm Ltd. Şti.'],['Merkezi','Antalya'],['Tarih','29.12.2023']].map(([l,v])=>(
              <div key={l} style={{background:'#fff',padding:'14px 16px',borderRadius:10}}>
                <div style={{fontSize:'0.72rem',color:'#6b7280',fontWeight:600,marginBottom:4}}>{l}</div>
                <div style={{fontWeight:700,color:'#064e3b',fontSize:'0.9rem'}}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
