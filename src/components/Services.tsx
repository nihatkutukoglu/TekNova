'use client';

import { useState } from 'react';
import { 
  Globe, 
  Code2, 
  ShoppingCart, 
  Cog, 
  LineChart, 
  Wrench,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  Zap,
  Server,
  Users
} from 'lucide-react';

const categories = ['Tümü', 'Web', 'Yazılım', 'Otomasyon', 'Veri', 'Destek'];

const servicesData = [
  {
    id: 1,
    title: "Web Sitesi Geliştirme",
    category: "Web",
    description: "Kurumsal web siteleri, landing page'ler ve mobil uyumlu modern arayüzler geliştiriyoruz.",
    idealFor: "KOBİ'ler, yerel işletmeler, hizmet sağlayıcılar",
    includes: [
      "Responsive tasarım",
      "Hızlı açılış performansı",
      "SEO uyumlu yapı",
      "İletişim ve teklif formları",
      "Modern kullanıcı deneyimi"
    ],
    tags: ["Web", "Responsive", "SEO", "UI/UX"],
    icon: <Globe className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-32 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-200 transition-colors duration-500">
        <div className="h-6 border-b border-slate-200 bg-white flex items-center px-3 space-x-1">
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
        <div className="p-4">
          <div className="w-1/2 h-4 bg-slate-200 rounded-md mb-4 group-hover:bg-blue-100 transition-colors"></div>
          <div className="flex space-x-2 mb-4">
            <div className="w-16 h-6 bg-slate-200 rounded-md"></div>
            <div className="w-16 h-6 bg-slate-200 rounded-md"></div>
          </div>
          <div className="w-full h-12 bg-slate-100 rounded-lg group-hover:bg-blue-50 transition-colors border border-dashed border-slate-300"></div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Özel Yazılım Geliştirme",
    category: "Yazılım",
    description: "İşletmenize özel yönetim panelleri, takip sistemleri ve operasyonel yazılım çözümleri geliştiriyoruz.",
    idealFor: "Stok, sipariş, müşteri veya operasyon takibi isteyen işletmeler",
    includes: [
      "Yönetim paneli",
      "Kullanıcı yetkilendirme",
      "İş akışı tasarımı",
      "API entegrasyonları",
      "Ölçeklenebilir mimari"
    ],
    tags: ["Dashboard", "API", "Admin Panel", "Custom Software"],
    icon: <Code2 className="w-8 h-8" />,
    featured: true,
    mockup: (
      <div className="w-full h-32 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden relative group-hover:border-blue-500 transition-colors duration-500 shadow-inner">
        <div className="flex h-full">
          <div className="w-12 border-r border-slate-800 bg-slate-900/50 p-2 flex flex-col space-y-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md mb-2"></div>
            <div className="w-6 h-2 bg-slate-700 rounded-sm"></div>
            <div className="w-6 h-2 bg-slate-700 rounded-sm"></div>
            <div className="w-6 h-2 bg-slate-700 rounded-sm"></div>
          </div>
          <div className="flex-1 p-3">
            <div className="flex justify-between items-center mb-3">
              <div className="w-20 h-3 bg-slate-700 rounded-sm"></div>
              <div className="w-6 h-6 rounded-full bg-slate-700"></div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="h-10 bg-slate-800 rounded-md border border-slate-700 flex items-center px-2 group-hover:bg-blue-900/30 transition-colors">
                <div className="w-8 h-2 bg-slate-600 rounded-sm"></div>
              </div>
              <div className="h-10 bg-slate-800 rounded-md border border-slate-700 flex items-center px-2">
                <div className="w-8 h-2 bg-slate-600 rounded-sm"></div>
              </div>
            </div>
            <div className="w-full h-8 bg-slate-800 rounded-md border border-slate-700"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "E-Ticaret Çözümleri",
    category: "Yazılım",
    description: "Ürün, sipariş, stok ve ödeme süreçlerini dijitale taşıyan e-ticaret altyapıları oluşturuyoruz.",
    idealFor: "Online satışa başlamak veya mevcut sistemi geliştirmek isteyen firmalar",
    includes: [
      "Ürün yönetimi",
      "Sipariş takibi",
      "Stok kontrolü",
      "Ödeme entegrasyonu",
      "Kargo altyapısı"
    ],
    tags: ["E-Ticaret", "Sipariş", "Stok", "Ödeme"],
    icon: <ShoppingCart className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-32 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden p-3 relative group-hover:border-blue-200 transition-colors duration-500">
        <div className="flex justify-between mb-3">
          <div className="w-16 h-3 bg-slate-300 rounded-sm"></div>
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm group-hover:-translate-y-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="w-full h-10 bg-slate-100 rounded-md mb-2"></div>
              <div className="w-full h-2 bg-slate-200 rounded-sm mb-1"></div>
              <div className="w-1/2 h-2 bg-blue-200 rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "İşletme Otomasyonları",
    category: "Otomasyon",
    description: "Excel, defter veya WhatsApp ile yürüyen süreçleri düzenli ve sürdürülebilir yazılım sistemlerine dönüştürüyoruz.",
    idealFor: "Manuel süreçlerini dijitale taşımak isteyen işletmeler",
    includes: [
      "Süreç dijitalleştirme",
      "Sipariş/randevu takibi",
      "Operasyon yönetimi",
      "Tek panelden kontrol",
      "Verimlilik artışı"
    ],
    tags: ["Otomasyon", "Süreç", "Operasyon", "Verimlilik"],
    icon: <Cog className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-32 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-200 transition-colors duration-500 flex items-center justify-center p-4">
        <div className="flex items-center space-x-2 w-full">
          <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 flex-shrink-0 z-10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
            <div className="w-4 h-4 bg-blue-500 rounded-sm group-hover:bg-white transition-colors"></div>
          </div>
          <div className="flex-1 h-0.5 bg-blue-200 relative">
            <div className="absolute top-0 left-0 h-full bg-blue-500 w-0 group-hover:w-full transition-all duration-1000 ease-in-out"></div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-indigo-100 border border-indigo-200 flex-shrink-0 z-10 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
            <div className="w-4 h-4 rounded-full bg-indigo-500 group-hover:bg-white transition-colors"></div>
          </div>
          <div className="flex-1 h-0.5 bg-indigo-200 relative">
            <div className="absolute top-0 left-0 h-full bg-indigo-500 w-0 group-hover:w-full transition-all duration-1000 delay-300 ease-in-out"></div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-green-100 border border-green-200 flex-shrink-0 z-10 flex items-center justify-center group-hover:bg-green-500 transition-colors">
             <div className="w-4 h-4 bg-green-500 rounded-sm rotate-45 group-hover:bg-white transition-colors"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Veri ve Raporlama",
    category: "Veri",
    description: "Satış, müşteri, stok ve operasyon verilerinizi anlaşılır raporlar ve dashboard'larla takip edilebilir hale getiriyoruz.",
    idealFor: "Satış ve operasyon verisini daha iyi görmek isteyen ekipler",
    includes: [
      "Dashboard ekranları",
      "Satış raporları",
      "Stok raporları",
      "Müşteri analitiği",
      "Karar destek ekranları"
    ],
    tags: ["Dashboard", "Analitik", "Raporlama", "Veri"],
    icon: <LineChart className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-32 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-200 transition-colors duration-500 p-4">
        <div className="flex space-x-4 h-full items-end justify-center pb-2">
          {[40, 70, 45, 90, 60].map((h, i) => (
            <div key={i} className="w-6 bg-slate-200 rounded-t-md relative overflow-hidden group-hover:bg-blue-100 transition-colors" style={{ height: `${h}%` }}>
               <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-md h-0 group-hover:h-full transition-all duration-700 ease-out" style={{ transitionDelay: `${i * 100}ms` }}></div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Bakım ve Teknik Destek",
    category: "Destek",
    description: "Mevcut web siteleri ve yazılım sistemleri için bakım, güncelleme ve teknik destek sağlıyoruz.",
    idealFor: "Mevcut sistemi olan ama teknik desteğe ihtiyaç duyan işletmeler",
    includes: [
      "Düzenli bakım",
      "Hata düzeltme",
      "Güncelleme desteği",
      "Performans iyileştirme",
      "Sürekli teknik destek"
    ],
    tags: ["Destek", "Bakım", "Güncelleme", "Performans"],
    icon: <Wrench className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-32 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-200 transition-colors duration-500 p-4 flex flex-col justify-center space-y-3">
        <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <div className="h-2 w-16 bg-slate-300 rounded-sm"></div>
          </div>
          <div className="h-2 w-8 bg-slate-200 rounded-sm"></div>
        </div>
        <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:animate-spin"></div>
            <div className="h-2 w-20 bg-slate-300 rounded-sm"></div>
          </div>
          <div className="h-2 w-8 bg-slate-200 rounded-sm"></div>
        </div>
      </div>
    )
  }
];

const badges = [
  { icon: <Smartphone className="w-4 h-4 text-blue-600" />, text: "Mobil Uyumlu" },
  { icon: <TrendingUp className="w-4 h-4 text-blue-600" />, text: "Ölçeklenebilir Altyapı" },
  { icon: <ShieldCheck className="w-4 h-4 text-blue-600" />, text: "Teslim Sonrası Destek" },
  { icon: <Code2 className="w-4 h-4 text-blue-600" />, text: "İşletmeye Özel Çözüm" },
  { icon: <Server className="w-4 h-4 text-blue-600" />, text: "Modern Teknoloji Yığını" },
  { icon: <Users className="w-4 h-4 text-blue-600" />, text: "Anlaşılır Süreç" }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredServices = servicesData.filter(
    service => activeCategory === 'Tümü' || service.category === activeCategory
  );

  return (
    <section id="services" className="py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Decorative abstract background element */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-slate-50 border-l border-b border-slate-100 rounded-bl-[10rem] -z-10 opacity-50"></div>
      <div className="absolute top-40 left-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-100 text-slate-800 text-sm font-bold tracking-widest uppercase mb-6 border border-slate-200 shadow-sm">
              Hizmetlerimiz
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              İhtiyacınıza göre tasarlanmış <br className="hidden md:block" />
              <span className="text-blue-600">dijital çözümler.</span>
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
              TekNova olarak web siteleri, özel yazılım sistemleri, işletme otomasyonları ve veri odaklı çözümler geliştiriyoruz. Her hizmeti işletmenizin gerçek sürecine uygun, sade ve sürdürülebilir şekilde tasarlıyoruz.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 min-w-[280px]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600">
                <TargetIcon />
              </div>
              <span className="font-semibold text-slate-800">İşletmeye özel çözüm</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-800">Modern teknoloji altyapısı</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-800">Teslim sonrası destek</span>
            </div>
          </div>
        </div>

        {/* 2. Interactive Category Tabs */}
        <div className="mb-16 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto pb-4 hide-scrollbar">
          <div className="inline-flex space-x-2 bg-slate-50 p-1.5 rounded-full border border-slate-200/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Premium Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className={`group flex flex-col bg-white rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 relative overflow-hidden ${
                service.featured 
                  ? 'border-2 border-blue-100 shadow-xl shadow-blue-900/5 lg:col-span-2 lg:flex-row gap-8 items-center' 
                  : 'border border-slate-100 shadow-sm'
              }`}
            >
              {service.featured && (
                <div className="absolute top-6 right-8">
                  <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                    En Çok Tercih Edilen
                  </span>
                </div>
              )}
              
              <div className={`flex flex-col h-full ${service.featured ? 'lg:w-1/2' : ''}`}>
                <div className="mb-6 flex items-start justify-between">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 relative ${
                    service.featured ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    <div className="relative z-10">{service.icon}</div>
                    {!service.featured && <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-2xl font-black text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 text-lg font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-8 flex-1">
                  <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Neler Dahil?</h5>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-2 shrink-0 opacity-80" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {/* Ideal For (visible on hover or muted) */}
                  <p className="text-sm text-slate-500 italic mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    "{service.idealFor}"
                  </p>
                  
                  <button className={`w-full inline-flex items-center justify-center py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    service.featured 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20' 
                      : 'bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white border border-slate-200 group-hover:border-slate-900'
                  }`}>
                    Detayları Gör
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Mockup Area */}
              <div className={`mt-8 lg:mt-0 ${service.featured ? 'lg:w-1/2 flex-shrink-0' : 'w-full'}`}>
                {service.mockup}
              </div>

            </div>
          ))}
        </div>

        {/* 5. Bottom Trust Badges */}
        <div className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge, idx) => (
              <div key={idx} className="flex items-center justify-center space-x-3 bg-white border border-slate-200 py-4 px-4 rounded-2xl shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
                {badge.icon}
                <span className="text-xs sm:text-sm font-bold text-slate-700 text-center">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Bottom CTA Band */}
        <div className="relative bg-slate-900 rounded-[3rem] p-10 lg:p-16 overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-blue-600/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                İşletmeniz için en doğru çözümü <span className="text-blue-400">birlikte belirleyelim.</span>
              </h3>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                Hazır paketlerden fazlasını arıyorsanız, iş sürecinizi analiz edip size özel yazılım çözümünü birlikte planlayabiliriz.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a href="#contact" className="inline-flex justify-center items-center py-4 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-colors shadow-lg shadow-blue-900/50">
                Projenizi Konuşalım
              </a>
              <a href="#services" onClick={(e) => {
                e.preventDefault();
                setActiveCategory('Tümü');
                window.scrollTo({ top: document.getElementById('services')?.offsetTop, behavior: 'smooth' });
              }} className="inline-flex justify-center items-center py-4 px-8 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold text-lg transition-colors border border-slate-700">
                Tüm Hizmetleri İncele
              </a>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
