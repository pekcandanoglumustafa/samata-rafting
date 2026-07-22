import Image from 'next/image'
export const metadata = {title:'Galeri – Rafting Buggy Zipline Yat Fotoğrafları',description:'Şamata Rafting galeri. Köprülü Kanyon rafting, buggy safari, zipline ve yat gezisi fotoğrafları.'}
const imgs = [
  {src:'/images/rafting2.webp',alt:'Rafting Köprülü Kanyon',label:'Rafting'},
  {src:'/images/buggy1.webp',alt:'Buggy Safari Beşkonak',label:'Buggy Safari'},
  {src:'/images/zipline.webp',alt:'Zipline Antalya',label:'Zipline'},
  {src:'/images/rafting3.webp',alt:'Rafting Şamata',label:'Rafting'},
  {src:'/images/buggy3.webp',alt:'Buggy Nehir',label:'Buggy Safari'},
  {src:'/images/canyon1.webp',alt:'Kanyon Turu',label:'Kanyon Turu'},
  {src:'/images/buggy5.webp',alt:'Buggy Su',label:'Buggy Safari'},
  {src:'/images/rafting1.webp',alt:'Rafting Aksyon',label:'Rafting'},
  {src:'/images/group1.webp',alt:'Büyük Grup',label:'Combo Tur'},
  {src:'/images/yacht1.webp',alt:'Yat Gezisi Side',label:'Yat Gezisi'},
  {src:'/images/yacht2.webp',alt:'Yat Manavgat',label:'Yat Gezisi'},
  {src:'/images/buggy6.webp',alt:'Buggy Grup',label:'Buggy Safari'},
  {src:'/images/yacht3.webp',alt:'Yat Akdeniz',label:'Yat Gezisi'},
  {src:'/images/cabrio1.webp',alt:'Cabrio Safari',label:'Cabrio Safari'},
  {src:'/images/yacht4.webp',alt:'Yat Turu',label:'Yat Gezisi'},
  {src:'/images/group2.webp',alt:'Grup Turu',label:'Combo Tur'},
]
export default function GaleriPage() {
  return (
    <>
      <div style={{background:'linear-gradient(135deg,#064e3b,#022c22)',padding:'120px 24px 60px',textAlign:'center'}}>
        <div style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',color:'#14b8a6',marginBottom:12}}>Fotoğraflar</div>
        <h1 style={{fontSize:'clamp(2.5rem,5vw,4rem)',fontWeight:900,color:'#fff',letterSpacing:'-1px',fontFamily:'Arial Black,Arial,sans-serif'}}>Galeri</h1>
      </div>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'60px 24px'}}>
        <div style={{columns:'3 280px',gap:16}}>
          {imgs.map((img,i)=>(
            <div key={i} style={{breakInside:'avoid',marginBottom:16,borderRadius:12,overflow:'hidden',position:'relative'}}>
              <Image src={img.src} alt={img.alt} width={400} height={300} style={{width:'100%',height:'auto',display:'block'}}/>
              <div style={{position:'absolute',bottom:0,left:0,right:0,background:'linear-gradient(transparent,rgba(0,0,0,0.6))',padding:'20px 12px 10px'}}>
                <span style={{background:'rgba(13,148,136,0.9)',color:'#fff',padding:'3px 10px',borderRadius:20,fontSize:'0.72rem',fontWeight:700}}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
