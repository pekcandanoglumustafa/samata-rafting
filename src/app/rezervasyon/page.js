'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function RezervasyonForm() {
  const [form, setForm] = useState({
    ad: '',
    telefon: '',
    tur: '',
    tarih: '',
    kisi: '',
    konum: '',
    otel: '',
    servis: '',
    notlar: '',
  })
  const [gonderildi, setGonderildi] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const tur = searchParams.get('tur')
    if (tur) setForm(f => ({...f, tur}))
  }, [searchParams])

  const turler = [
    { value: 'rafting', label: '🚣 Rafting Turu – 1.200 TL / 20 EUR (yemek dahil)', fiyat: '1.200 TL / 20 EUR' },
    { value: 'combo', label: '⭐ Combo Tur 5+1 – 1.750 TL / 30 EUR (yemek dahil)', fiyat: '1.750 TL / 30 EUR' },
    { value: 'buggy', label: '🚗 Buggy Safari', fiyat: 'Fiyat bilgisi alınacak' },
    { value: 'zipline', label: '🪂 Zipline', fiyat: 'Fiyat bilgisi alınacak' },
    { value: 'kanyon', label: '🏔️ Kanyon Turu', fiyat: 'Fiyat bilgisi alınacak' },
    { value: 'cabrio', label: '🚙 Cabrio Safari', fiyat: 'Fiyat bilgisi alınacak' },
    { value: 'yat', label: '⛵ Yat Gezisi', fiyat: 'Fiyat bilgisi alınacak' },
  ]

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const gonder = (e) => {
    e.preventDefault()
    const tur = turler.find(t => t.value === form.tur)
    const mesaj = `🎯 *YENİ REZERVASYON TALEBİ*

👤 *Ad Soyad:* ${form.ad}
📞 *Telefon:* ${form.telefon}
🎯 *Seçilen Tur:* ${tur?.label || form.tur}
📅 *Tarih:* ${form.tarih}
👥 *Kişi Sayısı:* ${form.kisi} kişi
📍 *Nerede:* ${form.konum === 'otel' ? `Otel – ${form.otel}` : form.konum === 'disinda' ? `Otel dışı – ${form.otel}` : form.konum}
🚌 *Servis:* ${form.servis === 'evet' ? '✅ Servis istiyorum (Antalya içi)' : '❌ Servis istemiyorum'}
${form.notlar ? `📝 *Not:* ${form.notlar}` : ''}

_Şamata Rafting Rezervasyon Formu_`

    const url = `https://wa.me/905380848760?text=${encodeURIComponent(mesaj)}`
    window.open(url, '_blank')
    setGonderildi(true)
  }

  const input = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 12,
    border: '1.5px solid #e5e7eb',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    background: '#fff',
    color: '#111827',
    transition: 'border-color 0.2s',
  }

  const label = {
    display: 'block',
    fontWeight: 700,
    fontSize: '0.875rem',
    color: '#374151',
    marginBottom: 8,
  }

  const group = { marginBottom: 20 }

  return (
    <>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg,#064e3b,#022c22)', padding: '120px 24px 60px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#14b8a6', marginBottom: 12 }}>Online Rezervasyon</div>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '-1px', marginBottom: 16, fontFamily: 'Arial Black,Arial,sans-serif' }}>
          Yerinizi Ayırtın
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 500, margin: '0 auto' }}>
          Formu doldurun, WhatsApp üzerinden anında onay alın.
        </p>
      </div>

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 24px 80px' }}>

        {gonderildi ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', background: '#f0fdfa', borderRadius: 24, border: '1px solid #99f6e4' }}>
            <div style={{ fontSize: '4rem', marginBottom: 20 }}>✅</div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#064e3b', marginBottom: 12 }}>WhatsApp Açıldı!</h2>
            <p style={{ color: '#4b5563', lineHeight: 1.7, marginBottom: 28 }}>
              Rezervasyon bilgileriniz WhatsApp mesajı olarak hazırlandı. Gönderi butonuna basmanız yeterli — ekibimiz en kısa sürede onay verecektir.
            </p>
            <button onClick={() => { setGonderildi(false); setForm({ ad:'',telefon:'',tur:'',tarih:'',kisi:'',konum:'',otel:'',servis:'',notlar:'' }) }}
              style={{ background: '#0d9488', color: '#fff', padding: '13px 28px', borderRadius: 50, fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer' }}>
              Yeni Rezervasyon Yap
            </button>
          </div>
        ) : (
          <form onSubmit={gonder}>
            <div style={{ background: '#fff', borderRadius: 24, padding: '40px', boxShadow: '0 4px 32px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6' }}>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#111827', marginBottom: 28, paddingBottom: 16, borderBottom: '2px solid #f3f4f6', fontFamily: 'Arial Black,Arial,sans-serif' }}>
                👤 Kişisel Bilgiler
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={label}>Ad Soyad *</label>
                  <input name="ad" value={form.ad} onChange={handle} required placeholder="Adınız ve soyadınız" style={input}/>
                </div>
                <div>
                  <label style={label}>Telefon Numarası *</label>
                  <input name="telefon" value={form.telefon} onChange={handle} required placeholder="+90 5XX XXX XX XX" style={input} type="tel"/>
                </div>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#111827', marginBottom: 28, paddingBottom: 16, borderBottom: '2px solid #f3f4f6', fontFamily: 'Arial Black,Arial,sans-serif', marginTop: 36 }}>
                🎯 Tur Seçimi
              </h2>

              <div style={group}>
                <label style={label}>Hangi Turu Seçmek İstiyorsunuz? *</label>
                <select name="tur" value={form.tur} onChange={handle} required style={{...input, appearance:'none', backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat:'no-repeat', backgroundPosition:'right 16px center', paddingRight:40}}>
                  <option value="">Tur seçiniz...</option>
                  {turler.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>

              {form.tur && (
                <div style={{ background: '#f0fdfa', borderRadius: 12, padding: '14px 18px', marginBottom: 20, border: '1px solid #99f6e4', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '1.5rem' }}>💰</span>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#0d9488', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Seçilen tur fiyatı</div>
                    <div style={{ fontWeight: 800, color: '#064e3b', fontSize: '1.05rem' }}>{turler.find(t=>t.value===form.tur)?.fiyat}</div>
                    {(form.tur === 'rafting' || form.tur === 'combo') && (
                      <div style={{ fontSize: '0.78rem', color: '#6b7280', marginTop: 2 }}>✓ Servis ve yemek dahildir</div>
                    )}
                  </div>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={group}>
                  <label style={label}>Tercih Ettiğiniz Tarih *</label>
                  <input name="tarih" value={form.tarih} onChange={handle} required type="date" style={input} min={new Date().toISOString().split('T')[0]}/>
                </div>
                <div style={group}>
                  <label style={label}>Kaç Kişisiniz? *</label>
                  <select name="kisi" value={form.kisi} onChange={handle} required style={{...input, appearance:'none', backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat:'no-repeat', backgroundPosition:'right 16px center', paddingRight:40}}>
                    <option value="">Seçiniz...</option>
                    {[...Array(20)].map((_,i) => <option key={i+1} value={i+1}>{i+1} kişi</option>)}
                    <option value="21+">21+ kişi (grup)</option>
                  </select>
                </div>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#111827', marginBottom: 28, paddingBottom: 16, borderBottom: '2px solid #f3f4f6', fontFamily: 'Arial Black,Arial,sans-serif', marginTop: 20 }}>
                📍 Konum & Servis
              </h2>

              <div style={group}>
                <label style={label}>Nereden Geliyorsunuz? *</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[['otel','🏨 Oteldeyim'],['disinda','🏠 Otel Dışındayım']].map(([val, lbl]) => (
                    <label key={val} style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px',
                      borderRadius: 12, border: `2px solid ${form.konum === val ? '#0d9488' : '#e5e7eb'}`,
                      background: form.konum === val ? '#f0fdfa' : '#fff',
                      cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s', fontSize: '0.95rem'
                    }}>
                      <input type="radio" name="konum" value={val} checked={form.konum === val} onChange={handle} style={{ accentColor: '#0d9488' }}/> {lbl}
                    </label>
                  ))}
                </div>
              </div>

              {form.konum && (
                <div style={group}>
                  <label style={label}>{form.konum === 'otel' ? 'Otel Adı *' : 'Adresiniz / Bulunduğunuz Yer *'}</label>
                  <input name="otel" value={form.otel} onChange={handle} required
                    placeholder={form.konum === 'otel' ? 'Örn: Titanic Beach Hotel, Side' : 'Örn: Side merkez, Manavgat...'}
                    style={input}/>
                </div>
              )}

              <div style={group}>
                <label style={label}>Antalya İçi Servis İstiyor Musunuz? *</label>
                <p style={{ fontSize: '0.82rem', color: '#6b7280', marginBottom: 12, marginTop: -4 }}>
                  Antalya, Belek, Side, Manavgat, Alanya ve çevre otellere servis hizmetimiz mevcuttur.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[['evet','🚌 Evet, servis istiyorum'],['hayir','🚶 Hayır, kendi geleceğim']].map(([val, lbl]) => (
                    <label key={val} style={{
                      display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px',
                      borderRadius: 12, border: `2px solid ${form.servis === val ? '#0d9488' : '#e5e7eb'}`,
                      background: form.servis === val ? '#f0fdfa' : '#fff',
                      cursor: 'pointer', fontWeight: 600, transition: 'all 0.2s', fontSize: '0.95rem'
                    }}>
                      <input type="radio" name="servis" value={val} checked={form.servis === val} onChange={handle} style={{ accentColor: '#0d9488' }}/> {lbl}
                    </label>
                  ))}
                </div>
              </div>

              <div style={group}>
                <label style={label}>Eklemek İstediğiniz Notlar (isteğe bağlı)</label>
                <textarea name="notlar" value={form.notlar} onChange={handle} rows={3}
                  placeholder="Özel istekleriniz, sorularınız..."
                  style={{...input, resize:'vertical', minHeight:90}}/>
              </div>

              {/* Özet */}
              {form.ad && form.tur && form.tarih && form.kisi && form.konum && form.servis && (
                <div style={{ background: '#064e3b', borderRadius: 16, padding: '20px 24px', marginBottom: 24, color: '#fff' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#14b8a6', marginBottom: 12, letterSpacing: '1px', textTransform: 'uppercase' }}>Rezervasyon Özeti</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: '0.875rem' }}>
                    <div><span style={{ color: 'rgba(255,255,255,0.6)' }}>Ad:</span> <strong>{form.ad}</strong></div>
                    <div><span style={{ color: 'rgba(255,255,255,0.6)' }}>Tarih:</span> <strong>{form.tarih}</strong></div>
                    <div><span style={{ color: 'rgba(255,255,255,0.6)' }}>Tur:</span> <strong>{turler.find(t=>t.value===form.tur)?.value.toUpperCase()}</strong></div>
                    <div><span style={{ color: 'rgba(255,255,255,0.6)' }}>Kişi:</span> <strong>{form.kisi}</strong></div>
                    <div><span style={{ color: 'rgba(255,255,255,0.6)' }}>Servis:</span> <strong>{form.servis === 'evet' ? '✅ Evet' : '❌ Hayır'}</strong></div>
                  </div>
                </div>
              )}

              <button type="submit" style={{
                width: '100%', background: '#25D366', color: '#fff',
                padding: '18px', borderRadius: 14, fontWeight: 800,
                fontSize: '1.1rem', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                boxShadow: '0 8px 28px rgba(37,211,102,0.35)'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp ile Rezervasyon Talebi Gönder
              </button>
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#9ca3af', marginTop: 12 }}>
                WhatsApp açılacak, mesajı gönderin — ekibimiz en kısa sürede onay verir.
              </p>
            </div>
          </form>
        )}


        {/* SSS Özeti */}
        <div style={{ marginTop: 40, background: '#f9fafb', borderRadius: 20, padding: '32px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#111827', marginBottom: 20, fontFamily: 'Arial Black,Arial,sans-serif' }}>❓ Sıkça Sorulan Sorular</h3>
          {[
            ['Etkinlikler saat kaçta başlıyor?', 'Servisli gruplar genellikle saat 11'e doğru buluşuyor. Kendi aracıyla gelenler istedikleri saatte gelebilir — programı gruplara göre ayarlıyoruz.'],
            ['Kaç kişi olmam gerekiyor?', 'Kaç kişi olduğunuz hiç önemli değil! Tek kişi de, büyük grup da gelebilir.'],
            ['Ödeme ne zaman yapılır?', 'Etkinlik günü yerinde nakit veya kart ile ödeme yapılır. Peşinat yok.'],
            ['Yüzme bilmeyenler katılabilir mi?', 'Evet, can yeleği ve kask verilir. Rehberlerimiz her an yanınızda.'],
          ].map(([s, c]) => (
            <div key={s} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ fontWeight: 700, color: '#111827', marginBottom: 6, fontSize: '0.9rem' }}>{s}</div>
              <div style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6 }}>{c}</div>
            </div>
          ))}
          <a href="/sss" style={{ color: '#0d9488', fontWeight: 700, fontSize: '0.875rem' }}>Tüm soruları gör →</a>
        </div>
        {/* Alternatif iletişim */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 28 }}>
          <a href="tel:+905380848760" style={{ background: '#0d9488', color: '#fff', padding: '16px', borderRadius: 14, fontWeight: 700, textAlign: 'center', fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            📞 Tıkla Ara · Bilgi Al
          </a>
          <a href="https://wa.me/905380848760" target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: '#25D366', padding: '16px', borderRadius: 14, fontWeight: 700, textAlign: 'center', fontSize: '0.95rem', border: '2px solid #25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            📱 Direkt WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}

export default function Rezervasyon() {
  return <Suspense fallback={null}><RezervasyonForm /></Suspense>
}
