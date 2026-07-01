import { Check } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      title: "Başlangıç",
      target: "Kurumsal web sitesi isteyen işletmeler için.",
      features: [
        "Ana sayfa & Hakkımızda",
        "Hizmetler sayfası",
        "İletişim formu",
        "Mobil uyumlu tasarım",
        "Google Maps entegrasyonu"
      ],
      popular: false
    },
    {
      title: "İşletme Paneli",
      target: "Stok, müşteri veya sipariş takibi isteyenler için.",
      features: [
        "Giriş paneli",
        "Müşteri & Ürün yönetimi",
        "Detaylı raporlama",
        "Yetkili kullanıcı sistemi",
        "Teknik destek"
      ],
      popular: true
    },
    {
      title: "Dijital Dönüşüm",
      target: "Tüm iş süreçlerini dijitale taşımak isteyenler için.",
      features: [
        "Özel web sitesi",
        "Kapsamlı yönetim paneli",
        "Veri analizi",
        "Personel eğitimi",
        "7/24 bakım ve destek"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Çözüm Paketleri</h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1]">
            İşletmeniz için <br />
            <span className="text-slate-400">doğru altyapı.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative rounded-[2rem] p-10 lg:p-12 flex flex-col ${
                pkg.popular 
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 lg:scale-105 z-10' 
                  : 'bg-slate-50 border border-slate-100'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-6 rounded-full">
                    En Çok Tercih Edilen
                  </span>
                </div>
              )}
              
              <div className="mb-10">
                <h4 className={`text-3xl font-black mb-4 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                  {pkg.title}
                </h4>
                <p className={`text-lg font-light h-14 ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {pkg.target}
                </p>
              </div>

              <ul className="space-y-5 mb-12 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`w-6 h-6 shrink-0 mr-4 ${pkg.popular ? 'text-blue-400' : 'text-slate-900'}`} />
                    <span className={`text-lg font-medium ${pkg.popular ? 'text-slate-300' : 'text-slate-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center py-5 rounded-2xl font-bold text-lg transition-all ${
                  pkg.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-500'
                    : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-900'
                }`}
              >
                Teklif Al
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
