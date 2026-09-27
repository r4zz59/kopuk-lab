import Image from 'next/image';

const services = [
  ['01', 'Premium Yıkama', 'Profesyonel dış yıkama ve detaylı kurutma.'],
  ['02', 'İç Detaylı Temizlik', 'Kabin, döşeme, plastik ve ulaşılması zor noktalar için detaylı temizlik.'],
  ['03', 'Pasta & Cila', 'Boya yüzeyinin temizlenmesi, kusurların azaltılması ve parlaklık kazandırılması.'],
  ['04', 'Seramik Kaplama', 'Boya koruması ve uzun süreli parlaklık için profesyonel uygulamalar.'],
  ['05', 'PPF', 'Günlük kullanım kaynaklı taş, çizik ve yüzey etkilerine karşı koruma çözümleri.'],
  ['06', 'Detaylı Bakım', 'Aracın ihtiyacına göre kişiselleştirilmiş detailing uygulamaları.']
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <Image src="/logo.png" alt="Köpük Lab" width={150} height={150} className="logo" />
        <div className="links"><a href="#hizmetler">Hizmetler</a><a href="#hakkimizda">Hakkımızda</a><a href="#iletisim">İletişim</a><a className="navButton" href="#randevu">Randevu Al</a></div>
      </nav>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">CAR CARE & DETAILING</p>
          <h1>Aracınıza<br/><span>hak ettiği</span><br/>özeni verin.</h1>
          <p className="heroText">Profesyonel bakım, detailing ve koruma uygulamaları.</p>
          <a className="primary" href="#randevu">Online Randevu Al <span>→</span></a>
        </div>
        <div className="scroll">SCROLL ↓</div>
      </section>

      <section id="hizmetler" className="section services">
        <div className="sectionHead"><p className="eyebrow">SERVICES</p><h2>Detayda fark yaratırız.</h2><p>Aracınız için ihtiyaca özel profesyonel bakım ve koruma çözümleri.</p></div>
        <div className="serviceGrid">{services.map(([n,t,d]) => <article className="service" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#randevu">Detaylı bilgi <b>↗</b></a></article>)}</div>
      </section>

      <section id="hakkimizda" className="statement"><p className="eyebrow">KÖPÜK LAB</p><h2>Temizlik değil,<br/><em>detay.</em></h2><p>Aracınızı sadece temizlemiyor, her yüzeyini olması gereken şekilde ele alıyoruz. İşimizin merkezinde detay, özen ve sonuç var.</p></section>

      <section id="randevu" className="booking"><div><p className="eyebrow">ONLINE APPOINTMENT</p><h2>Randevunuzu<br/>oluşturun.</h2><p>Size uygun hizmeti ve zamanı seçin. Randevu talebiniz bize ulaştığında sizi bilgilendirelim.</p></div><form><label>Ad Soyad<input placeholder="Adınız Soyadınız" /></label><label>Telefon<input placeholder="05XX XXX XX XX" /></label><label>Plaka<input placeholder="34 ABC 123" /></label><label>Hizmet<select defaultValue=""><option value="" disabled>Hizmet seçin</option><option>Premium Yıkama</option><option>İç Detaylı Temizlik</option><option>Pasta & Cila</option><option>Seramik Kaplama</option><option>PPF</option><option>Detaylı Bakım</option></select></label><div className="formRow"><label>Tarih<input type="date" /></label><label>Saat<input type="time" /></label></div><button type="button">Randevu Talebi Gönder →</button></form></section>

      <footer id="iletisim"><Image src="/logo.png" alt="Köpük Lab" width={120} height={120} className="footerLogo" /><div><p>CAR CARE & DETAILING</p><p>Profesyonel araç bakım ve detailing.</p></div><div className="footerRight"><p>İLETİŞİM</p><p>Telefon • WhatsApp</p></div></footer>
    </main>
  );
}
