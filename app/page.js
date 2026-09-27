const services = [
  ["01", "Profesyonel Yıkama", "Dış yüzey temizliği, güvenli yıkama ve detaylı kurutma."],
  ["02", "İç Detaylı Temizlik", "Kabin, koltuk, plastik ve ulaşılması zor bölgelerde detaylı temizlik."],
  ["03", "Pasta & Cila", "Boya yüzeyindeki kusurların giderilmesi ve parlaklığın yenilenmesi."],
  ["04", "Seramik Kaplama", "Boya yüzeyini korumaya ve uzun süreli parlaklık sağlamaya yönelik uygulamalar."],
  ["05", "PPF", "Boya koruma filmi uygulaması ve detaylı yüzey hazırlığı."],
  ["06", "Detailing", "Aracınıza özel kapsamlı bakım ve kozmetik uygulamalar."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#" className="brand">
          <img src="/logo.png" alt="Köpük Lab" />
        </a>
        <div className="navLinks">
          <a href="#hizmetler">Hizmetler</a>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#iletisim">İletişim</a>
          <a className="navButton" href="#randevu">Randevu Al</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">CAR CARE & DETAILING</p>
          <h1>Aracınıza<br /><span>hak ettiği</span> özen.</h1>
          <p className="heroText">
            Profesyonel araç bakım ve detailing hizmetleri.
            Köpük Lab'da temizlikten korumaya kadar her detay titizlikle ele alınır.
          </p>
          <div className="actions">
            <a className="button primary" href="#randevu">Online Randevu Al</a>
            <a className="button ghost" href="#hizmetler">Hizmetleri İncele</a>
          </div>
        </div>
        <div className="heroMark">
          <img src="/logo.png" alt="" />
        </div>
      </section>

      <section id="hizmetler" className="section">
        <div className="sectionHead">
          <p className="eyebrow">HİZMETLERİMİZ</p>
          <h2>Detay, bizim<br />işimiz.</h2>
        </div>
        <div className="serviceGrid">
          {services.map(([num, title, desc]) => (
            <article className="service" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href="#randevu">Randevu →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="hakkimizda" className="splitSection">
        <div>
          <p className="eyebrow">KÖPÜK LAB</p>
          <h2>Temizlik değil,<br /><span>detay.</span></h2>
        </div>
        <div className="splitText">
          <p>
            Köpük Lab, otomobil bakımını standart bir yıkama hizmetinin ötesine
            taşıyan profesyonel bir car care & detailing markasıdır.
          </p>
          <p>
            Her araç için doğru ürün, doğru teknik ve kontrollü bir uygulama
            süreci kullanıyoruz.
          </p>
        </div>
      </section>

      <section id="randevu" className="booking">
        <div>
          <p className="eyebrow">ONLINE RANDEVU</p>
          <h2>Aracınız için<br />bir zaman ayırın.</h2>
          <p className="muted">Randevu sistemi bir sonraki aşamada Supabase'e bağlanacak.</p>
        </div>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Ad Soyad" />
          <input placeholder="Telefon" />
          <input placeholder="Plaka" />
          <select defaultValue="">
            <option value="" disabled>Hizmet seçin</option>
            {services.map(([, title]) => <option key={title}>{title}</option>)}
          </select>
          <div className="formRow">
            <input type="date" />
            <input type="time" />
          </div>
          <button className="button primary" type="submit">Randevu Talebi Gönder</button>
        </form>
      </section>

      <footer id="iletisim">
        <img src="/logo.png" alt="Köpük Lab" />
        <p>CAR CARE & DETAILING</p>
        <span>© 2026 Köpük Lab. Tüm hakları saklıdır.</span>
      </footer>
    </main>
  );
}
