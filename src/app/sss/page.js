import Link from 'next/link'

export const metadata = {
  title: 'Sıkça Sorulan Sorular – Şamata Rafting',
  description: 'Şamata Rafting hakkında merak edilenler. Saatler, fiyatlar, servis, kişi sayısı ve daha fazlası.',
}

const sorular = [
  {
    s: 'Etkinlikler saat kaçta başlıyor?',
    c: 'Servis ile gelen gruplarımız genellikle saat 11\'e doğru buluşuyor ve etkinlikler başlıyor. Kendi aracıyla gelen misafirlerimiz istedikleri saatte gelebilir — programı gruplara göre esnek şekilde ayarlıyoruz.'
  },
  {
    s: 'Kaç kişi olmam gerekiyor?',
    c: 'Kaç kişi olduğunuz hiç önemli değil! Tek kişi de gelebilirsiniz, 50 kişilik grup da. Her boyuttaki gruba uygun program hazırlıyoruz.'
  },
  {
    s: 'Fiyatlar nedir?',
    c: 'Rafting Turu (yemek dahil): 1.200 TL / 20 EUR. Combo Tur 5+1 (Buggy + Zipline + Cabrio Safari + Kanyon Turu + Rafting, yemek dahil): 1.750 TL / 30 EUR. Diğer aktiviteler için WhatsApp\'tan bilgi alabilirsiniz.'
  },
  {
    s: 'Servis hizmetiniz var mı?',
    c: 'Evet! Antalya, Belek, Side, Manavgat, Alanya ve çevre otellere servis hizmetimiz mevcuttur. Servis ve yemek her iki pakete de dahildir.'
  },
  {
    s: 'Yüzme bilmeyenler katılabilir mi?',
    c: 'Evet, yüzme bilmek zorunlu değil. Tüm katılımcılara can yeleği ve kask verilir. Sertifikalı rehberlerimiz her an yanınızda olur.'
  },
  {
    s: 'Kaç yaşında katılabilirsiniz?',
    c: 'Rafting için 7 yaş ve üzeri önerilir. 7-12 yaş arası çocuklar ebeveynleriyle birlikte katılabilir. Diğer aktiviteler için yaş sınırı tur sayfalarında belirtilmiştir.'
  },
  {
    s: 'Ne giymem gerekiyor?',
    c: 'Islananacağını düşünerek gelin — mayo veya şort ideal. Değiştirebileceğiniz kıyafet getirmenizi öneririz. Ayakkabı olarak sandalet veya spor ayakkabı olabilir.'
  },
  {
    s: 'Rezervasyonu nasıl yapabilirim?',
    c: 'Online rezervasyon formumuzu doldurabilir, WhatsApp\'tan yazabilir veya telefon ile arayabilirsiniz. Form doldurduğunuzda bilgiler anında WhatsApp\'a iletilir ve ekibimiz onay verir.'
  },
  {
    s: 'İptal veya değişiklik yapabilir miyim?',
    c: 'Evet, tarih değişikliği ve iptaller için en az 1 gün öncesinden WhatsApp veya telefon ile bize ulaşmanız yeterli.'
  },
  {
    s: 'Ödeme nasıl yapılıyor?',
    c: 'Ödeme etkinlik günü yerinde nakit veya kart ile yapılabilir. Peşinat talep etmiyoruz.'
  },
]

export default function SSSPage() {
  return (
    <>
      <div style={{background:'linear-gradient(135deg,#064e3b,#022c22)',padding:'120px 24px 60px',textAlign:'center'}}>
        <div style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'3px',textTransform:'uppercase',color:'#14b8a6',marginBottom:12}}>SSS</div>
        <h1 style={{fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:900,color:'#fff',letterSpacing:'-1px',marginBottom:16,fontFamily:'Arial Black,Arial,sans-serif'}}>Sıkça Sorulan Sorular</h1>
        <p style={{color:'rgba(255,255,255,0.7)',fontSize:'1.05rem',maxWidth:500,margin:'0 auto'}}>Aklınızdaki soruların cevabını bulamadıysanız bize ulaşın.</p>
      </div>

      <div style={{maxWidth:780,margin:'0 auto',padding:'72px 24px 80px'}}>
        <div style={{display:'flex',flexDirection:'column',gap:0}}>
          {sorular.map((item, i) => (
            <details key={i} style={{borderBottom:'1px solid #e5e7eb',padding:'24px 0'}} open={i===0}>
              <summary style={{fontWeight:800,fontSize:'1.05rem',color:'#111827',cursor:'pointer',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16}}>
                <span>{item.s}</span>
                <span style={{color:'#0d9488',flexShrink:0,fontSize:'1.2rem'}}>+</span>
              </summary>
              <p style={{color:'#4b5563',lineHeight:1.8,marginTop:16,fontSize:'0.975rem'}}>{item.c}</p>
            </details>
          ))}
        </div>

        <div style={{background:'#f0fdfa',borderRadius:20,padding:'32px',marginTop:48,textAlign:'center',border:'1px solid #99f6e4'}}>
          <div style={{fontSize:'2rem',marginBottom:12}}>💬</div>
          <h3 style={{fontSize:'1.3rem',fontWeight:900,color:'#064e3b',marginBottom:8}}>Başka sorunuz var mı?</h3>
          <p style={{color:'#4b5563',marginBottom:24,lineHeight:1.7}}>WhatsApp veya telefon ile bize ulaşın, hemen yanıt verelim.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/rezervasyon" style={{background:'#ea580c',color:'#fff',padding:'13px 24px',borderRadius:50,fontWeight:700,fontSize:'0.95rem'}}>📋 Rezervasyon Yap</Link>
            <a href="tel:+905380848760" style={{background:'#0d9488',color:'#fff',padding:'13px 24px',borderRadius:50,fontWeight:700,fontSize:'0.95rem'}}>📞 Tıkla Ara</a>
            <a href="https://wa.me/905380848760" target="_blank" rel="noopener noreferrer" style={{background:'#25D366',color:'#fff',padding:'13px 24px',borderRadius:50,fontWeight:700,fontSize:'0.95rem'}}>📱 WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  )
}
