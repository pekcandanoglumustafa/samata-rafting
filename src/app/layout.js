import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: { default: 'Şamata Rafting – Köprülü Kanyon | Beşkonak Antalya', template: '%s | Şamata Rafting' },
  description: 'Antalya Beşkonak Köprülü Kanyon\'da rafting, buggy safari, zipline, kanyon turu, cabrio safari, yat gezisi. A Grubu Seyahat Acentası – Belge No: 16773',
  keywords: ['rafting antalya', 'köprülü kanyon rafting', 'beşkonak rafting', 'buggy safari antalya', 'zipline antalya', 'yat gezisi manavgat'],
  openGraph: { title: 'Şamata Rafting', description: 'Antalya macera turları', url: 'https://samatarafting.com', type: 'website' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" href="/images/rafting2.webp" as="image" type="image/webp"/>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230d9488'/><text y='.9em' font-size='75' x='10'>🚣</text></svg>"/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org","@type":"TouristAttraction",
          "name":"Şamata Rafting","telephone":"+905380848760",
          "address":{"@type":"PostalAddress","addressLocality":"Beşkonak","addressRegion":"Antalya","addressCountry":"TR"},
          "url":"https://samatarafting.com","openingHours":"Mo-Su 08:00-18:00"
        })}}/>
      </head>
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        <WhatsAppButton/>
      </body>
    </html>
  )
}
