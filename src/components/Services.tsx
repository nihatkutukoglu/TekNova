'use client';

import { useState, useEffect } from 'react';
import { 
  Globe, 
  Store,
  QrCode,
  Code2, 
  ShoppingCart,
  Database,
  MessageSquare,
  BarChart4,
  Star,
  Map,
  Cog, 
  MessageCircle,
  LineChart, 
  Wrench,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  Zap,
  Server,
  Users,
  X,
  FileText
} from 'lucide-react';

interface ServiceProcess {
  step: number;
  title: string;
  desc: string;
}

interface ServiceData {
  id: number;
  title: string;
  category: string;
  description: string;
  idealFor: string;
  includes: string[];
  process: ServiceProcess[];
  benefit: string;
  tags: string[];
  icon: React.ReactNode;
  featured: boolean;
  mockup: React.ReactNode;
}

const categories = [
  'Tümü',
  'Dijital Varlık Hizmetleri',
  'İşletme Yazılımları',
  'Analiz ve Raporlama',
  'Otomasyon ve Destek'
];

const servicesData: ServiceData[] = [
  // ============================================
  // KATEGORİ 1: DİJİTAL VARLIK HİZMETLERİ
  // ============================================
  {
    id: 1,
    title: "Web Sitesi Geliştirme",
    category: "Dijital Varlık Hizmetleri",
    description: "İşletmenizin dijitalde profesyonel görünmesini sağlayan, mobil uyumlu, hızlı ve modern web siteleri geliştiriyoruz.",
    idealFor: "Kurumsal görünüm isteyen işletmeler, hizmet sağlayıcılar ve yerel markalar.",
    includes: [
      "Ana sayfa tasarımı",
      "Mobil uyumlu yapı",
      "İletişim formu",
      "SEO altyapısı",
      "Modern arayüz"
    ],
    process: [
      { step: 1, title: "İhtiyaç Analizi", desc: "Hedeflerinizi ve beklentilerinizi dinleriz." },
      { step: 2, title: "Tasarım & Prototip", desc: "Kurumsal kimliğinize uygun arayüz tasarlarız." },
      { step: 3, title: "Geliştirme & Test", desc: "Modern teknolojilerle kodlar ve test ederiz." },
      { step: 4, title: "Yayına Alma", desc: "Sitenizi canlıya alır ve eğitimi veririz." }
    ],
    benefit: "İşletmeniz internette daha güvenilir görünür ve müşteriler size daha kolay ulaşır.",
    tags: ["Web", "Responsive", "SEO", "Kurumsal Site"],
    icon: <Globe className="w-8 h-8" />,
    featured: true,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm flex flex-col">
        <div className="h-6 border-b border-slate-200 bg-white flex items-center px-3 space-x-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-red-400 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-amber-400 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors"></div>
        </div>
        <div className="h-6 border-b border-slate-100 bg-white flex items-center justify-between px-3 shrink-0">
          <div className="w-12 h-2 bg-slate-200 rounded-sm"></div>
          <div className="flex space-x-2">
            <div className="w-4 h-1.5 bg-slate-100 rounded-sm"></div>
            <div className="w-4 h-1.5 bg-slate-100 rounded-sm"></div>
            <div className="w-4 h-1.5 bg-slate-100 rounded-sm"></div>
          </div>
        </div>
        <div className="p-4 flex flex-col items-center justify-center flex-1 bg-gradient-to-b from-blue-50/50 to-transparent">
          <div className="w-3/4 h-3 bg-slate-800 rounded-md mb-2 group-hover:bg-blue-600 transition-colors"></div>
          <div className="w-1/2 h-2 bg-slate-400 rounded-md mb-4"></div>
          <div className="w-16 h-5 bg-blue-600 rounded-md mb-4 group-hover:scale-105 transition-transform shadow-sm shadow-blue-500/20"></div>
          <div className="flex space-x-2 w-full mt-auto">
            <div className="flex-1 h-10 bg-white rounded border border-slate-100 shadow-sm p-2 flex flex-col justify-between group-hover:-translate-y-1 transition-transform">
              <div className="w-4 h-4 rounded bg-blue-100 mb-1"></div>
              <div className="w-full h-1 bg-slate-200 rounded"></div>
            </div>
            <div className="flex-1 h-10 bg-white rounded border border-slate-100 shadow-sm p-2 flex flex-col justify-between group-hover:-translate-y-1 transition-transform delay-75">
              <div className="w-4 h-4 rounded bg-indigo-100 mb-1"></div>
              <div className="w-full h-1 bg-slate-200 rounded"></div>
            </div>
            <div className="flex-1 h-10 bg-white rounded border border-slate-100 shadow-sm p-2 flex flex-col justify-between group-hover:-translate-y-1 transition-transform delay-150">
              <div className="w-4 h-4 rounded bg-emerald-100 mb-1"></div>
              <div className="w-full h-1 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Google İşletme Profili Kurulumu",
    category: "Dijital Varlık Hizmetleri",
    description: "Google Maps üzerinde işletmenizin doğru, eksiksiz ve çekici görünmesini sağlayarak müşteri trafiğinizi artırıyoruz.",
    idealFor: "Haritalarda görünmek ve yerel müşterileri çekmek isteyen restoran, kafe, kuaför ve mağazalar.",
    includes: [
      "İşletme adı ve kategori ayarı",
      "Arama motoruna uygun açıklama",
      "Profesyonel fotoğraf düzeni",
      "Çalışma saatleri ve iletişim",
      "WhatsApp entegrasyonu"
    ],
    process: [
      { step: 1, title: "Mevcut Durum", desc: "Var olan profili inceler veya sıfırdan hesap açarız." },
      { step: 2, title: "Optimizasyon", desc: "Doğru kategori ve bilgileri gireriz." },
      { step: 3, title: "Görsel Yükleme", desc: "Fotoğraflarınızı en iyi şekilde sergileriz." },
      { step: 4, title: "Teslim", desc: "Hesap yönetimini size teslim ederiz." }
    ],
    benefit: "Müşterileriniz arama yaptığında sizi kolayca bulur, güven duyar ve hemen iletişime geçer.",
    tags: ["Google Maps", "SEO", "Yerel İşletme"],
    icon: <Store className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm flex flex-col p-3">
        <div className="w-full bg-white rounded-lg border border-slate-100 shadow-sm flex items-center p-2 mb-3">
           <div className="w-10 h-10 bg-slate-100 rounded-md mr-3 flex items-center justify-center">
              <Store className="w-5 h-5 text-slate-400" />
           </div>
           <div>
              <div className="w-20 h-2.5 bg-slate-800 rounded-sm mb-1.5"></div>
              <div className="flex space-x-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />)}
                 <div className="text-[7px] text-slate-400 ml-1">(128)</div>
              </div>
           </div>
        </div>
        <div className="flex gap-2 mb-3">
           <div className="flex-1 bg-blue-50 text-blue-600 rounded flex items-center justify-center py-1.5 text-[8px] font-bold border border-blue-100">Yol Tarifi</div>
           <div className="flex-1 bg-white text-slate-700 rounded flex items-center justify-center py-1.5 text-[8px] font-bold border border-slate-200">Ara</div>
           <div className="flex-1 bg-white text-slate-700 rounded flex items-center justify-center py-1.5 text-[8px] font-bold border border-slate-200">Kaydet</div>
        </div>
        <div className="grid grid-cols-3 gap-2 flex-1">
           <div className="bg-slate-200 rounded-md"></div>
           <div className="bg-slate-200 rounded-md"></div>
           <div className="bg-slate-200 rounded-md"></div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Dijital Katalog ve QR Menü",
    category: "Dijital Varlık Hizmetleri",
    description: "Kafe, restoran veya hizmet işletmeniz için anında güncellenebilen, mobil uyumlu ve şık QR menüler tasarlıyoruz.",
    idealFor: "Fiyatlarını anlık güncellemek isteyen restoran, kafe, kuaför ve güzellik salonları.",
    includes: [
      "Özel QR kod tasarımı",
      "Kategori bazlı ürün listeleme",
      "Fotoğraflı ürün sunumu",
      "WhatsApp sipariş butonu",
      "Yönetim paneli"
    ],
    process: [
      { step: 1, title: "Menü Analizi", desc: "Mevcut ürün ve fiyat listenizi alırız." },
      { step: 2, title: "Katalog Tasarımı", desc: "Markanıza uygun dijital tasarımı yaparız." },
      { step: 3, title: "QR Kod Üretimi", desc: "Masanıza koyacağınız QR kodları hazırlarız." },
      { step: 4, title: "Panel Eğitimi", desc: "Fiyatları nasıl değiştireceğinizi gösteririz." }
    ],
    benefit: "Baskı maliyetinden kurtulur, fiyatları anında günceller ve hijyenik bir deneyim sunarsınız.",
    tags: ["QR Menü", "Katalog", "Mobil"],
    icon: <QrCode className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm flex items-center justify-center p-4">
         <div className="w-32 h-full bg-white rounded-3xl border-4 border-slate-800 shadow-xl overflow-hidden relative flex flex-col">
            <div className="h-4 bg-slate-800 rounded-b-xl mx-8 relative -top-1"></div>
            <div className="p-3 bg-blue-600 text-white pb-6">
               <div className="w-12 h-2 bg-white/30 rounded mb-1"></div>
               <div className="w-16 h-3 bg-white rounded"></div>
            </div>
            <div className="bg-white flex-1 -mt-4 rounded-t-xl p-2 overflow-hidden flex flex-col space-y-2">
               {[1,2,3].map(i => (
                 <div key={i} className="flex space-x-2 items-center">
                    <div className="w-8 h-8 bg-slate-100 rounded-md shrink-0"></div>
                    <div className="flex-1">
                       <div className="w-12 h-1.5 bg-slate-800 rounded mb-1"></div>
                       <div className="w-8 h-1.5 bg-slate-300 rounded"></div>
                    </div>
                    <div className="w-6 h-2 bg-blue-100 rounded text-[5px] text-blue-600 flex items-center justify-center font-bold">120₺</div>
                 </div>
               ))}
            </div>
         </div>
         <div className="absolute right-4 bottom-4 w-12 h-12 bg-white rounded-lg border border-slate-200 shadow-lg p-1.5 group-hover:scale-110 transition-transform">
            <div className="w-full h-full border-[2px] border-slate-800 border-dashed rounded-sm flex items-center justify-center">
               <QrCode className="w-5 h-5 text-slate-800" />
            </div>
         </div>
      </div>
    )
  },

  // ============================================
  // KATEGORİ 2: İŞLETME YAZILIMLARI
  // ============================================
  {
    id: 4,
    title: "Özel Yazılım Geliştirme",
    category: "İşletme Yazılımları",
    description: "İşletmenize özel yönetim panelleri, takip sistemleri ve operasyonel yazılım çözümleri geliştiriyoruz.",
    idealFor: "Stok, sipariş, müşteri veya operasyon süreçlerini dijitalleştirmek isteyen işletmeler.",
    includes: [
      "Yönetim paneli",
      "Yetkilendirme",
      "Modül yapısı",
      "API entegrasyonu",
      "Raporlama ekranları"
    ],
    process: [
      { step: 1, title: "Süreç Analizi", desc: "İşletmenizin işleyişini detaylı inceleriz." },
      { step: 2, title: "Mimari & UX", desc: "Size özel ekranları ve altyapıyı tasarlarız." },
      { step: 3, title: "Kodlama", desc: "Güvenli ve ölçeklenebilir kodlama yaparız." },
      { step: 4, title: "Test & Canlı", desc: "Tüm senaryoları test eder ve yayına alırız." }
    ],
    benefit: "İş süreçleriniz daha düzenli, ölçülebilir ve kolay yönetilebilir hale gelir.",
    tags: ["Dashboard", "Admin Panel", "API", "Custom Software"],
    icon: <Code2 className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-56 lg:h-full min-h-[14rem] bg-slate-900 rounded-xl border border-slate-700 overflow-hidden relative group-hover:border-blue-500 transition-all duration-500 shadow-inner group-hover:shadow-blue-900/20 flex">
        <div className="w-12 lg:w-16 border-r border-slate-800 bg-slate-900/80 p-2 lg:p-3 flex flex-col items-center space-y-3 lg:space-y-4">
          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-600 rounded-lg mb-2 shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm opacity-50"></div>
          </div>
          <div className="w-5 lg:w-6 h-1 lg:h-1.5 bg-slate-700 rounded-sm"></div>
          <div className="w-5 lg:w-6 h-1 lg:h-1.5 bg-slate-700 rounded-sm"></div>
          <div className="w-5 lg:w-6 h-1 lg:h-1.5 bg-slate-700 rounded-sm"></div>
          <div className="w-5 lg:w-6 h-1 lg:h-1.5 bg-slate-700 rounded-sm mt-auto"></div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-10 border-b border-slate-800 flex items-center justify-between px-3 lg:px-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 lg:w-4 lg:h-4 text-slate-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
              <div className="w-16 lg:w-24 h-2 lg:h-2.5 bg-slate-800 rounded-sm"></div>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="w-4 h-4 rounded-full bg-slate-800"></div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 border border-slate-700"></div>
            </div>
          </div>
          <div className="p-3 lg:p-4 flex-1 flex flex-col">
            <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-3 lg:mb-4">
              <div className="h-14 lg:h-16 bg-slate-800/50 rounded-lg border border-slate-700/50 p-2 lg:p-3 flex flex-col justify-between group-hover:bg-slate-800 transition-colors">
                <div className="w-12 h-1.5 lg:h-2 bg-slate-600 rounded-sm"></div>
                <div className="flex items-end justify-between">
                  <div className="w-8 h-3 lg:h-4 bg-slate-300 rounded-sm"></div>
                  <div className="flex space-x-0.5">
                    <div className="w-1 h-2 bg-emerald-500/40 rounded-sm"></div>
                    <div className="w-1 h-3 bg-emerald-500/60 rounded-sm"></div>
                    <div className="w-1 h-4 bg-emerald-500 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <div className="h-14 lg:h-16 bg-slate-800/50 rounded-lg border border-slate-700/50 p-2 lg:p-3 flex flex-col justify-between group-hover:bg-slate-800 transition-colors">
                <div className="w-16 h-1.5 lg:h-2 bg-slate-600 rounded-sm"></div>
                <div className="flex items-end justify-between">
                  <div className="w-10 h-3 lg:h-4 bg-slate-300 rounded-sm"></div>
                  <div className="w-8 h-4 bg-blue-500/20 rounded flex items-center justify-center text-[8px] text-blue-400 font-bold">+12%</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-2 lg:p-3 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2 lg:mb-3">
                <div className="w-20 h-2 bg-slate-600 rounded-sm"></div>
                <div className="w-10 h-1.5 bg-slate-700 rounded-sm"></div>
              </div>
              <div className="space-y-1.5 lg:space-y-2">
                {[1,2,3].map(i => (
                  <div key={i} className="flex justify-between items-center bg-slate-800/50 p-1.5 lg:p-2 rounded border border-slate-700/30 group-hover:border-slate-600/50 transition-colors">
                    <div className="flex space-x-2 items-center">
                      <div className="w-3 h-3 lg:w-4 lg:h-4 rounded bg-slate-700"></div>
                      <div>
                        <div className="w-16 lg:w-20 h-1.5 bg-slate-300 rounded-sm mb-1"></div>
                        <div className="w-10 h-1 bg-slate-600 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="w-12 h-1.5 bg-slate-700 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "E-Ticaret Çözümleri",
    category: "İşletme Yazılımları",
    description: "Ürün, sipariş, stok ve ödeme süreçlerini yöneten modern e-ticaret altyapıları oluşturuyoruz.",
    idealFor: "Online satışa başlamak isteyen veya mevcut satış sistemini geliştirmek isteyen işletmeler.",
    includes: [
      "Ürün yönetimi",
      "Sipariş takibi",
      "Stok kontrolü",
      "Ödeme entegrasyonu",
      "Kargo altyapısı"
    ],
    process: [
      { step: 1, title: "Altyapı Kurulumu", desc: "Güçlü e-ticaret altyapısını kurarız." },
      { step: 2, title: "Tasarım Özelleştirme", desc: "Markanıza özel satış odaklı tasarım uygularız." },
      { step: 3, title: "Ödeme & Kargo", desc: "Sanal pos ve kargo entegrasyonlarını yaparız." },
      { step: 4, title: "Test & Eğitim", desc: "Sipariş testlerini tamamlar, paneli anlatırız." }
    ],
    benefit: "Ürünlerinizi daha geniş kitlelere ulaştırabilir ve satış süreçlerinizi daha rahat yönetebilirsiniz.",
    tags: ["E-Ticaret", "Sipariş", "Stok", "Ödeme"],
    icon: <ShoppingCart className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden p-2 relative group-hover:border-blue-300 transition-all duration-500 shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-2 shrink-0 bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
          <div className="w-16 h-2.5 bg-slate-800 rounded-sm"></div>
          <div className="w-24 h-3.5 bg-slate-50 rounded-md border border-slate-200 flex items-center px-1">
             <div className="w-2 h-2 text-slate-400"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
          </div>
          <div className="relative">
            <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShoppingCart className="w-3.5 h-3.5" />
            </div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white group-hover:scale-125 transition-transform"></div>
          </div>
        </div>
        <div className="flex gap-2 flex-1 overflow-hidden">
          <div className="flex-1 grid grid-cols-2 gap-2">
            {[1,2].map(i => (
              <div key={i} className="bg-white p-1.5 rounded-lg border border-slate-100 shadow-sm group-hover:-translate-y-1 transition-transform duration-300 flex flex-col" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="w-full h-12 bg-slate-100 rounded-md mb-1.5 flex items-center justify-center">
                  <div className="w-6 h-6 bg-slate-200 rounded-md rotate-45"></div>
                </div>
                <div className="w-3/4 h-2 bg-slate-700 rounded-sm mb-1"></div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="w-1/3 h-2 bg-blue-600 rounded-sm"></div>
                  <div className="w-5 h-5 bg-slate-900 rounded-md flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                     <div className="w-2 h-0.5 bg-white"></div>
                     <div className="h-2 w-0.5 bg-white absolute"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-24 bg-white rounded-lg border border-slate-100 shadow-sm p-2 flex flex-col">
            <div className="w-12 h-2 bg-slate-800 rounded-sm mb-2"></div>
            <div className="space-y-1.5 mb-auto">
              <div className="flex justify-between items-center">
                <div className="w-10 h-1.5 bg-slate-200 rounded-sm"></div>
                <div className="w-4 h-1.5 bg-slate-300 rounded-sm"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-8 h-1.5 bg-slate-200 rounded-sm"></div>
                <div className="w-4 h-1.5 bg-slate-300 rounded-sm"></div>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100">
              <div className="flex justify-between mb-2">
                 <div className="w-8 h-2 bg-slate-800 rounded-sm"></div>
                 <div className="w-6 h-2 bg-blue-600 rounded-sm"></div>
              </div>
              <div className="w-full h-5 bg-slate-900 rounded-md flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                 <div className="w-8 h-1 bg-white/50 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Stok, Sipariş ve Cari Takip Sistemi",
    category: "İşletme Yazılımları",
    description: "Müşterilerinizi, borç-alacak durumunu, depo stoklarını ve siparişlerinizi yönetebileceğiniz entegre paneller.",
    idealFor: "Defter veya Excel ile iş yapmaktan yorulan, her şeyi tek tıkla görmek isteyen işletmeler.",
    includes: [
      "Stok / Envanter modülü",
      "Müşteri cari kartları",
      "Sipariş ve durum takibi",
      "Kasa ve ödeme takibi",
      "Özet raporlar"
    ],
    process: [
      { step: 1, title: "Veri Toplama", desc: "Mevcut excel/defter verilerinizi inceleriz." },
      { step: 2, title: "Sistem Kurulumu", desc: "İhtiyacınıza uygun stok/cari yapısını kurarız." },
      { step: 3, title: "Veri Aktarımı", desc: "Eski verilerinizi yeni sisteme taşırız." },
      { step: 4, title: "Eğitim", desc: "Günlük nasıl kullanacağınızı öğretiriz." }
    ],
    benefit: "Kimden ne alacağınız, depoda ne kaldığı karışmaz; işletmenizin finansal durumunu net görürsünüz.",
    tags: ["Stok", "Cari Takip", "Sipariş"],
    icon: <Database className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm p-3 flex flex-col">
        <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100 shadow-sm mb-3">
           <div className="flex space-x-2">
              <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center"><Database className="w-3 h-3 text-blue-600"/></div>
              <div>
                 <div className="w-12 h-1.5 bg-slate-800 rounded mb-1"></div>
                 <div className="w-8 h-1.5 bg-slate-400 rounded"></div>
              </div>
           </div>
           <div className="w-16 h-4 bg-emerald-100 rounded flex items-center justify-center text-[7px] font-bold text-emerald-600">+ Tahsilat</div>
        </div>
        <div className="bg-white border border-slate-100 rounded-lg flex-1 overflow-hidden flex flex-col">
           <div className="flex bg-slate-50 p-2 border-b border-slate-100">
              <div className="flex-1 w-12 h-1.5 bg-slate-400 rounded"></div>
              <div className="flex-1 w-12 h-1.5 bg-slate-400 rounded mx-2"></div>
              <div className="w-10 h-1.5 bg-slate-400 rounded"></div>
           </div>
           {[1,2,3].map(i => (
             <div key={i} className="flex p-2 border-b border-slate-50 items-center hover:bg-slate-50">
                <div className="flex-1 w-16 h-1.5 bg-slate-700 rounded"></div>
                <div className="flex-1 w-10 h-1.5 bg-slate-400 rounded mx-2"></div>
                <div className={`w-8 h-1.5 rounded ${i===2 ? 'bg-red-400' : 'bg-emerald-400'}`}></div>
             </div>
           ))}
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "WhatsApp Destekli Sipariş & Randevu",
    category: "İşletme Yazılımları",
    description: "Müşterilerinizin web veya sosyal medya üzerinden kolayca sipariş verip veya randevu alıp doğrudan WhatsApp'ınıza düşmesini sağlar.",
    idealFor: "Kuaför, oto yıkama, kasap, klinik veya WhatsApp'tan sipariş alan tüm işletmeler.",
    includes: [
      "Mini randevu/sipariş formu",
      "Otomatik WhatsApp yönlendirme",
      "Hazır mesaj şablonları",
      "Müşteri bilgi toplama",
      "Mobil uyumlu arayüz"
    ],
    process: [
      { step: 1, title: "Akış Belirleme", desc: "Hangi bilgilerin istenileceğini belirleriz." },
      { step: 2, title: "Form Tasarımı", desc: "Müşterinin dolduracağı kolay formu tasarlarız." },
      { step: 3, title: "WhatsApp Bağlantısı", desc: "Siparişi formatlayıp WP'ye atacak kodu yazarız." },
      { step: 4, title: "Instagram Entegrasyonu", desc: "Linki bio'nuza ekler test ederiz." }
    ],
    benefit: "Siparişler eksik gelmez, 'fiyat nedir' soruları azalır, her randevu düzenli bir mesaj olarak cebinize gelir.",
    tags: ["WhatsApp", "Randevu", "Sipariş"],
    icon: <MessageSquare className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-[#e5ddd5] rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-green-400 transition-all duration-500 shadow-sm flex flex-col">
         <div className="bg-[#075e54] p-3 flex items-center shadow-md z-10 shrink-0">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-2"><Store className="w-3 h-3 text-white"/></div>
            <div className="w-20 h-2 bg-white rounded-sm"></div>
         </div>
         <div className="p-3 flex flex-col space-y-2 overflow-hidden bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover bg-center h-full">
            <div className="self-end bg-[#dcf8c6] p-2.5 rounded-lg rounded-tr-none shadow-sm max-w-[85%] relative group-hover:scale-[1.02] transition-transform">
               <div className="text-[9px] font-bold text-slate-800 mb-1">Yeni Randevu Talebi 📅</div>
               <div className="w-24 h-1 bg-slate-500 rounded-sm mb-1"></div>
               <div className="w-16 h-1 bg-slate-500 rounded-sm mb-1"></div>
               <div className="w-20 h-1 bg-slate-500 rounded-sm"></div>
               <div className="text-[6px] text-right text-slate-400 mt-1">14:22 ✓✓</div>
            </div>
            <div className="self-start bg-white p-2.5 rounded-lg rounded-tl-none shadow-sm max-w-[80%] mt-2">
               <div className="w-20 h-1 bg-slate-500 rounded-sm mb-1"></div>
               <div className="w-12 h-1 bg-slate-500 rounded-sm"></div>
               <div className="text-[6px] text-right text-slate-400 mt-1">14:25</div>
            </div>
         </div>
      </div>
    )
  },

  // ============================================
  // KATEGORİ 3: ANALİZ VE RAPORLAMA
  // ============================================
  {
    id: 8,
    title: "Veri ve Raporlama",
    category: "Analiz ve Raporlama",
    description: "Satış, stok, müşteri ve operasyon verilerinizi anlaşılır dashboard’lara ve raporlara dönüştürüyoruz.",
    idealFor: "Verilerini daha iyi görmek ve daha doğru karar almak isteyen işletmeler.",
    includes: [
      "Dashboard ekranları",
      "Satış raporları",
      "Stok raporları",
      "Grafikler",
      "Karar destek ekranları"
    ],
    process: [
      { step: 1, title: "Veri Kaynakları", desc: "Verilerinizin nerede tutulduğunu analiz ederiz." },
      { step: 2, title: "Dashboard Tasarımı", desc: "Hangi KPI'ların önemli olduğunu belirleriz." },
      { step: 3, title: "Entegrasyon", desc: "Veri kaynaklarını sisteme otomatik bağlarız." },
      { step: 4, title: "Otomatik Rapor", desc: "Canlı güncellenen rapor ekranlarınızı teslim ederiz." }
    ],
    benefit: "İşletmenizde neyin iyi gittiğini ve neye odaklanmanız gerektiğini daha net görürsünüz.",
    tags: ["Veri", "Dashboard", "Analitik", "Raporlama"],
    icon: <LineChart className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm p-2 flex flex-col">
        <div className="flex space-x-2 mb-2 shrink-0">
          <div className="flex-1 bg-white p-2 rounded-lg border border-slate-100 shadow-sm flex flex-col justify-between">
             <div className="w-10 h-1.5 bg-slate-400 rounded-sm mb-1"></div>
             <div className="w-12 h-3 bg-slate-800 rounded-sm mb-1"></div>
             <div className="flex items-center text-[8px] text-emerald-500 font-bold">
               <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +12%
             </div>
          </div>
          <div className="flex-1 bg-white p-2 rounded-lg border border-slate-100 shadow-sm flex flex-col justify-between">
             <div className="w-12 h-1.5 bg-slate-400 rounded-sm mb-1"></div>
             <div className="w-14 h-3 bg-slate-800 rounded-sm mb-1"></div>
             <div className="flex items-center text-[8px] text-blue-500 font-bold">
               <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +5%
             </div>
          </div>
        </div>
        <div className="flex-1 flex gap-2 h-full overflow-hidden">
           <div className="flex-[2] bg-white rounded-lg border border-slate-100 shadow-sm p-2 flex flex-col justify-end">
             <div className="w-12 h-1.5 bg-slate-800 rounded-sm mb-auto"></div>
             <div className="flex space-x-1.5 h-16 items-end justify-between px-1">
               {[30, 50, 40, 70, 55, 90].map((h, i) => (
                 <div key={i} className="w-full bg-slate-100 rounded-t-sm relative group-hover:bg-blue-50 transition-colors" style={{ height: '100%' }}>
                    <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-sm transition-all duration-700 ease-out" style={{ height: `${h}%` }}></div>
                 </div>
               ))}
             </div>
           </div>
           <div className="flex-1 bg-white rounded-lg border border-slate-100 shadow-sm p-2 flex flex-col items-center justify-center">
             <div className="relative w-12 h-12">
               <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                 <path className="text-slate-100" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                 <path className="text-blue-500 group-hover:text-indigo-500 transition-colors duration-700" strokeWidth="4" strokeDasharray="65, 100" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
               </div>
             </div>
             <div className="w-8 h-1.5 bg-slate-300 rounded-sm mt-3"></div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Esnaf Dijital Görünürlük Analizi & Karnesi",
    category: "Analiz ve Raporlama",
    description: "İşletmenizin Google, haritalar ve sosyal medyadaki durumunu analiz edip 100 üzerinden skorlayan kapsamlı rapor.",
    idealFor: "İnternetteki eksiklerini görmek ve rakiplerine göre ne durumda olduğunu bilmek isteyen işletmeler.",
    includes: [
      "Google Maps durum analizi",
      "Dijital görünürlük skoru (100)",
      "Yorum ve fotoğraf analizi",
      "Rakip karşılaştırması",
      "Öncelikli aksiyon planı"
    ],
    process: [
      { step: 1, title: "Veri Toplama", desc: "İnternetteki izlerinizi tararız." },
      { step: 2, title: "Rakip Analizi", desc: "Bölgenizdeki 5 rakiple kıyaslarız." },
      { step: 3, title: "Raporlama", desc: "Eksikleri PDF rapor haline getiririz." },
      { step: 4, title: "Sunum", desc: "Sonuçları size sunar ve yol haritası çizeriz." }
    ],
    benefit: "Dijitalde nerede para kaybettiğinizi görür, doğru adımlarla görünürlüğünüzü artırırsınız.",
    tags: ["Analiz", "Karne", "Görünürlük"],
    icon: <BarChart4 className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm p-3 flex flex-col justify-center items-center">
         <div className="w-20 h-20 relative mb-3 group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
               <path className="text-slate-200" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               <path className="text-emerald-500" strokeWidth="4" strokeDasharray="76, 100" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <div className="text-xl font-black text-slate-800">76</div>
               <div className="text-[6px] text-slate-500 uppercase">Skor</div>
            </div>
         </div>
         <div className="bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm w-full">
            <div className="flex justify-between items-center mb-1.5">
               <div className="w-16 h-1.5 bg-slate-700 rounded"></div>
               <div className="text-[8px] text-emerald-600 font-bold">İyi</div>
            </div>
            <div className="flex justify-between items-center">
               <div className="w-20 h-1.5 bg-slate-400 rounded"></div>
               <div className="text-[8px] text-red-500 font-bold">Eksik</div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 10,
    title: "Google Maps Yorum & Müşteri Algısı Raporu",
    category: "Analiz ve Raporlama",
    description: "Müşterilerin sizin hakkınızda neyi sevip neyden şikayet ettiğini analiz edip, eylem planı çıkarıyoruz.",
    idealFor: "Hizmet kalitesini ölçmek ve kötü yorumların asıl nedenini bulmak isteyen restoran, klinik ve kafeler.",
    includes: [
      "Olumlu/olumsuz duygu analizi",
      "En çok bahsedilen kelimeler",
      "Tekrarlayan şikayetlerin tespiti",
      "Rakiplerle yorum kıyaslaması",
      "İyileştirme önerileri"
    ],
    process: [
      { step: 1, title: "Yorum Çekimi", desc: "Google Maps'teki tüm yorumları alırız." },
      { step: 2, title: "Metin Analizi", desc: "Kelime ve duygu analizi yaparız." },
      { step: 3, title: "Kategori Ayrımı", desc: "Fiyat, hız, lezzet gibi başlıklar çıkarırız." },
      { step: 4, title: "Aksiyon Planı", desc: "Neyi değiştirmeniz gerektiğini raporlarız." }
    ],
    benefit: "Müşteri kaybının önüne geçer, eksiklerinizi anlar ve memnuniyeti artıracak hamleler yaparsınız.",
    tags: ["Yorum Analizi", "Müşteri Algısı"],
    icon: <Star className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm p-3 flex flex-col">
         <div className="flex space-x-2 mb-3">
            <div className="flex-1 bg-white p-2 rounded border border-slate-100 shadow-sm flex flex-col items-center justify-center">
               <div className="text-emerald-500 font-bold text-lg">78%</div>
               <div className="w-12 h-1 bg-slate-200 rounded mt-1"></div>
            </div>
            <div className="flex-1 bg-white p-2 rounded border border-slate-100 shadow-sm flex flex-col items-center justify-center">
               <div className="text-red-500 font-bold text-lg">12%</div>
               <div className="w-12 h-1 bg-slate-200 rounded mt-1"></div>
            </div>
         </div>
         <div className="bg-white rounded-lg border border-slate-100 p-2 flex-1 flex flex-col justify-center space-y-2">
            <div className="flex items-center">
               <div className="w-16 h-2 bg-emerald-100 text-emerald-700 text-[6px] font-bold px-1 rounded mr-2 flex items-center">Lezzet</div>
               <div className="flex-1 h-1 bg-emerald-500 rounded"></div>
            </div>
            <div className="flex items-center">
               <div className="w-16 h-2 bg-slate-100 text-slate-700 text-[6px] font-bold px-1 rounded mr-2 flex items-center">Fiyat</div>
               <div className="flex-1 h-1 bg-slate-300 rounded w-1/2"></div>
            </div>
            <div className="flex items-center">
               <div className="w-16 h-2 bg-red-100 text-red-700 text-[6px] font-bold px-1 rounded mr-2 flex items-center">Hız</div>
               <div className="w-1/4 h-1 bg-red-500 rounded"></div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 11,
    title: "Yeni İş Kurulum: Lokasyon & Rakip Analizi",
    category: "Analiz ve Raporlama",
    description: "Yeni bir işletme açmadan önce o bölgedeki rakiplerin gücünü ve dijital fırsatları haritalandırıyoruz.",
    idealFor: "Yeni mekan açacak girişimciler ('Buraya kafe açsam iş yapar mı?' diyenler).",
    includes: [
      "Bölgedeki rakip sayısı",
      "Rakiplerin puan ve güç durumu",
      "Bölgenin dijital rekabet seviyesi",
      "Müşteri beklenti analizi",
      "Fırsat ve risk değerlendirmesi"
    ],
    process: [
      { step: 1, title: "Lokasyon Seçimi", desc: "Hedeflediğiniz mahalleyi/bölgeyi alırız." },
      { step: 2, title: "Rakip Taraması", desc: "Bölgedeki tüm benzer işletmeleri inceleriz." },
      { step: 3, title: "Boşluk Tespiti", desc: "Rakiplerin yapamadığı şeyleri buluruz." },
      { step: 4, title: "Strateji", desc: "Nasıl fark yaratacağınızı raporlarız." }
    ],
    benefit: "Körlemesine yatırım yapmak yerine verilerle adım atar, doğru lokasyonda doğru mesajı verirsiniz.",
    tags: ["Fizibilite", "Rakip Analizi", "Yeni İş"],
    icon: <Map className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm p-0">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-20"></div>
         <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full h-full bg-white/90 backdrop-blur border border-slate-200 rounded-lg shadow-lg p-3 flex flex-col relative z-10">
               <div className="flex items-center space-x-2 mb-3">
                  <Map className="w-4 h-4 text-blue-600" />
                  <div className="w-16 h-2 bg-slate-800 rounded"></div>
               </div>
               <div className="flex justify-between items-end mb-2">
                  <div className="w-10 h-8 bg-blue-100 rounded border border-blue-200"></div>
                  <div className="w-10 h-12 bg-slate-200 rounded border border-slate-300"></div>
                  <div className="w-10 h-6 bg-red-100 rounded border border-red-200 group-hover:h-14 transition-all duration-500"></div>
                  <div className="w-10 h-10 bg-slate-200 rounded border border-slate-300"></div>
               </div>
               <div className="mt-auto flex justify-center">
                 <div className="px-2 py-1 bg-slate-900 text-white rounded text-[7px] font-bold shadow-sm">Rekabet Düşük - Fırsat Var</div>
               </div>
            </div>
         </div>
      </div>
    )
  },

  // ============================================
  // KATEGORİ 4: OTOMASYON VE DESTEK
  // ============================================
  {
    id: 12,
    title: "İşletme Operasyon Otomasyonları",
    category: "Otomasyon ve Destek",
    description: "Excel, defter veya WhatsApp ile yürüyen iş süreçlerinizi dijital sistemlere dönüştürüyoruz.",
    idealFor: "Manuel süreçlerini düzenli ve sürdürülebilir hale getirmek isteyen işletmeler.",
    includes: [
      "Süreç analizi",
      "Takip sistemi",
      "Operasyon paneli",
      "Bildirim yapıları",
      "Tek panel yönetimi"
    ],
    process: [
      { step: 1, title: "Süreç Tespiti", desc: "Hangi süreçlerin manuel yürüdüğünü buluruz." },
      { step: 2, title: "İş Akışı Çizimi", desc: "Dijital ortamdaki yeni akışı planlarız." },
      { step: 3, title: "Sistem Kurulumu", desc: "Otomasyon altyapısını ve panelleri oluştururuz." },
      { step: 4, title: "Ekip Eğitimi", desc: "Ekibinize yeni sistemi nasıl kullanacağını öğretiriz." }
    ],
    benefit: "Zaman kaybı azalır, operasyonlar daha düzenli hale gelir.",
    tags: ["Otomasyon", "Süreç", "Operasyon", "Verimlilik"],
    icon: <Cog className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm flex">
        <div className="w-24 bg-white border-r border-slate-200 p-2 flex flex-col space-y-2 shrink-0">
          <div className="w-12 h-2 bg-slate-800 rounded-sm mb-1"></div>
          {[1,2,3].map(i => (
            <div key={i} className={`p-1.5 rounded-md border ${i === 1 ? 'border-blue-200 bg-blue-50' : 'border-slate-100 bg-slate-50'}`}>
               <div className="w-10 h-1.5 bg-slate-700 rounded-sm mb-1.5"></div>
               <div className="flex justify-between items-center">
                 <div className="w-6 h-1 bg-slate-300 rounded-sm"></div>
                 <div className={`w-2.5 h-2.5 rounded-full ${i === 1 ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
               </div>
            </div>
          ))}
        </div>
        <div className="flex-1 p-2 bg-slate-50/50 flex flex-col overflow-hidden">
           <div className="flex space-x-1.5 mb-2">
              <div className="flex-1 h-5 bg-amber-100 text-amber-700 rounded border border-amber-200 flex items-center justify-center text-[7px] font-bold">Bekliyor</div>
              <div className="flex-1 h-5 bg-blue-100 text-blue-700 rounded border border-blue-200 flex items-center justify-center text-[7px] font-bold">İşlemde</div>
              <div className="flex-1 h-5 bg-emerald-100 text-emerald-700 rounded border border-emerald-200 flex items-center justify-center text-[7px] font-bold">Bitti</div>
           </div>
           
           <div className="relative flex-1 rounded-lg border border-slate-200 bg-white p-2">
              <div className="absolute top-4 left-4 right-4 h-0.5 bg-slate-100">
                <div className="h-full bg-blue-500 w-0 group-hover:w-[60%] transition-all duration-1000 ease-in-out"></div>
              </div>
              <div className="relative z-10 flex justify-between px-1">
                 <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-500 shadow-sm flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                 </div>
                 <div className="w-6 h-6 rounded-full bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center group-hover:border-blue-500 transition-colors delay-300">
                    <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors delay-300"></div>
                 </div>
                 <div className="w-6 h-6 rounded-full bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center group-hover:border-slate-300 transition-colors delay-500">
                    <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-slate-300 transition-colors delay-500"></div>
                 </div>
              </div>
              
              <div className="mt-4 p-2 bg-slate-50 border border-slate-100 rounded-md group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors">
                 <div className="w-12 h-1.5 bg-slate-700 rounded-sm mb-1.5"></div>
                 <div className="w-full h-1 bg-slate-200 rounded-sm mb-1"></div>
                 <div className="w-4/5 h-1 bg-slate-200 rounded-sm"></div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: "Yorum Yönetimi ve Cevap Şablonları",
    category: "Otomasyon ve Destek",
    description: "Google Maps yorumlarınıza profesyonel ve sektöre uygun cevaplar vererek itibarınızı koruyoruz.",
    idealFor: "Kötü yorumlara nasıl cevap vereceğini bilemeyen veya vakit bulamayan esnaflar.",
    includes: [
      "Olumlu yorum cevap şablonları",
      "Kriz yönetimi şablonları",
      "Haftalık yorum kontrolü",
      "Otomatik veya manuel cevaplama",
      "Marka dili oluşturma"
    ],
    process: [
      { step: 1, title: "Dil Belirleme", desc: "İşletmenize uygun samimi/resmi dili seçeriz." },
      { step: 2, title: "Şablon Kurulumu", desc: "Sık gelen yorumlara taslaklar hazırlarız." },
      { step: 3, title: "Cevaplama", desc: "Eski yorumlarınızı yanıtlarız." },
      { step: 4, title: "Takip", desc: "Düzenli kontrol ile yeni yorumları yönetiriz." }
    ],
    benefit: "Müşterileriniz değer gördüğünü hisseder, kötü niyetli yorumlar krize dönüşmeden çözülür.",
    tags: ["İtibar Yönetimi", "Yorumlar"],
    icon: <MessageCircle className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm p-3 flex flex-col space-y-3 justify-center">
         <div className="bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
            <div className="flex items-center space-x-1 mb-1">
               {[1,2,3,4,5].map(i => <Star key={i} className={`w-2.5 h-2.5 ${i===5 ? 'text-slate-300' : 'text-amber-400 fill-amber-400'}`} />)}
            </div>
            <div className="w-full h-1 bg-slate-300 rounded mb-1"></div>
            <div className="w-2/3 h-1 bg-slate-300 rounded"></div>
         </div>
         <div className="ml-6 relative">
            <div className="absolute -left-3 -top-2 w-3 h-4 border-l-2 border-b-2 border-blue-200 rounded-bl-lg"></div>
            <div className="bg-blue-50 p-2.5 rounded-lg border border-blue-100 shadow-sm group-hover:bg-blue-100 transition-colors">
               <div className="w-12 h-1.5 bg-blue-800 rounded mb-1.5"></div>
               <div className="w-full h-1 bg-blue-300 rounded mb-1"></div>
               <div className="w-3/4 h-1 bg-blue-300 rounded"></div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: 14,
    title: "Aylık Dijital Performans Danışmanlığı",
    category: "Otomasyon ve Destek",
    description: "Web siteniz ve Maps hesabınızın aylık durumunu raporlayıp düzenli danışmanlık veriyoruz.",
    idealFor: "İşletmesinin dijitalde düzenli olarak büyümesini ve rakiplerinin önüne geçmesini isteyenler.",
    includes: [
      "Aylık ziyaretçi raporları",
      "Aylık yorum değişimi",
      "Rakip hareket takibi",
      "Güncelleme önerileri",
      "Düzenli toplantı/rapor sunumu"
    ],
    process: [
      { step: 1, title: "Hedef Belirleme", desc: "Aylık hedeflerimizi koyarız." },
      { step: 2, title: "İzleme", desc: "Sistemi 30 gün boyunca takip ederiz." },
      { step: 3, title: "Raporlama", desc: "Ay sonu verileri basitleştirerek size sunarız." },
      { step: 4, title: "Aksiyon", desc: "Sonraki ay için yeni kararlar alırız." }
    ],
    benefit: "Dijital varlıklarınız sahipsiz kalmaz, her ay üstüne koyarak büyümeye devam eder.",
    tags: ["Aylık Rapor", "Danışmanlık"],
    icon: <LineChart className="w-8 h-8" />,
    featured: false,
    mockup: (
       <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm p-3 flex flex-col justify-end">
         <div className="absolute top-3 left-3 w-16 h-2 bg-slate-800 rounded"></div>
         <div className="absolute top-3 right-3 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[6px] font-bold rounded-full">AĞUSTOS</div>
         <div className="flex space-x-1.5 items-end h-24 mt-auto border-b border-slate-200 pb-1">
            {[40, 50, 30, 60, 45, 80, 65, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-slate-200 rounded-t relative group">
                 <div className="absolute bottom-0 w-full bg-blue-500 rounded-t transition-all duration-700 group-hover:bg-indigo-500" style={{ height: `${h}%` }}></div>
              </div>
            ))}
         </div>
       </div>
    )
  },
  {
    id: 15,
    title: "Bakım ve Teknik Destek",
    category: "Otomasyon ve Destek",
    description: "Mevcut web siteniz veya yazılım sisteminiz için bakım, güncelleme ve teknik destek sağlıyoruz.",
    idealFor: "Mevcut sistemi olan ve düzenli teknik destek ihtiyacı duyan işletmeler.",
    includes: [
      "Hata düzeltme",
      "Güncelleme desteği",
      "Performans iyileştirme",
      "Güvenlik kontrolleri",
      "Teknik bakım"
    ],
    process: [
      { step: 1, title: "Sistem İncelemesi", desc: "Mevcut sisteminizin röntgenini çekeriz." },
      { step: 2, title: "İyileştirmeler", desc: "Güvenlik ve performans güncellemelerini yaparız." },
      { step: 3, title: "Sürekli İzleme", desc: "7/24 monitoring araçlarıyla sistemi izleriz." },
      { step: 4, title: "Periyodik Rapor", desc: "Yapılan bakım ve durumu aylık raporlarız." }
    ],
    benefit: "Sisteminiz daha güvenli, güncel ve sorunsuz şekilde çalışmaya devam eder.",
    tags: ["Destek", "Bakım", "Performans", "Güncelleme"],
    icon: <Wrench className="w-8 h-8" />,
    featured: false,
    mockup: (
      <div className="w-full h-48 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative group-hover:border-blue-300 transition-all duration-500 shadow-sm p-3 flex flex-col justify-between">
        <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
           <div className="flex items-center space-x-2">
             <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
               <ShieldCheck className="w-4 h-4 text-emerald-500" />
             </div>
             <div>
               <div className="w-16 h-2 bg-slate-800 rounded-sm mb-1"></div>
               <div className="flex items-center text-[7px] text-emerald-600 font-semibold">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></div>
                 Tüm sistemler aktif
               </div>
             </div>
           </div>
           <div className="text-[10px] font-bold text-slate-800">99.9%</div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 my-2">
           <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-1.5">
                <div className="w-10 h-1.5 bg-slate-400 rounded-sm"></div>
                <div className="w-4 h-1.5 bg-blue-500 rounded-sm"></div>
              </div>
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                 <div className="w-4/5 h-full bg-blue-500 rounded-full"></div>
              </div>
           </div>
           <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-1.5">
                <div className="w-12 h-1.5 bg-slate-400 rounded-sm"></div>
                <div className="w-5 h-1.5 bg-amber-500 rounded-sm"></div>
              </div>
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                 <div className="w-3/5 h-full bg-amber-500 rounded-full group-hover:bg-emerald-500 transition-colors"></div>
              </div>
           </div>
        </div>

        <div className="bg-slate-900 rounded-lg p-2 font-mono text-[8px] text-slate-400 leading-relaxed flex-1 flex flex-col justify-center">
          <div className="text-emerald-400">[OK] System scan completed</div>
          <div>[INFO] Applying security patch...</div>
          <div className="text-blue-400 group-hover:text-emerald-400 transition-colors">[OK] Patch applied successfully</div>
          <div className="animate-pulse">_</div>
        </div>
      </div>
    )
  }
];

const badges = [
  { icon: <Smartphone className="w-4 h-4 text-blue-600" />, text: "Mobil Uyumlu" },
  { icon: <TrendingUp className="w-4 h-4 text-blue-600" />, text: "Hızlı Teslimat" },
  { icon: <ShieldCheck className="w-4 h-4 text-blue-600" />, text: "Sürekli Destek" },
  { icon: <Code2 className="w-4 h-4 text-blue-600" />, text: "İşletmeye Özel" },
  { icon: <Server className="w-4 h-4 text-blue-600" />, text: "Güvenli Altyapı" },
  { icon: <Users className="w-4 h-4 text-blue-600" />, text: "Müşteri Odaklı" }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300); // delay for exit animation
  };

  const openModal = (service: ServiceData) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredServices = activeCategory === 'Tümü' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeCategory);

  return (
    <>
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
              Yerel işletmelerin dijitalleşmesini sağlayan, müşteri trafiğini artıran ve operasyonel süreçleri kolaylaştıran stratejik teknoloji paketleri üretiyoruz.
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
              <span className="font-semibold text-slate-800">Pratik ve satılabilir</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-800">Büyüme garantili</span>
            </div>
          </div>
        </div>

        {/* 2. Interactive Category Tabs */}
        <div className="mb-16 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto pb-4 hide-scrollbar">
          <div className="inline-flex space-x-2 bg-slate-50 p-1.5 rounded-full border border-slate-200/60">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
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
              className={`group flex flex-col bg-white rounded-[2.5rem] p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 relative overflow-hidden ${
                service.featured 
                  ? 'border-2 border-blue-100 shadow-xl shadow-blue-900/5 lg:col-span-2 lg:flex-row gap-8 items-stretch' 
                  : 'border border-slate-100 shadow-sm'
              }`}
            >
              {service.featured && (
                <div className="absolute top-6 right-8 z-10 hidden lg:block">
                  <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                    En Çok Tercih Edilen
                  </span>
                </div>
              )}
              
              {/* Mockup Area */}
              <div className={`${service.featured ? 'order-first lg:order-last lg:w-1/2 flex-shrink-0 mb-6 lg:mb-0 flex' : 'w-full mb-8'}`}>
                {service.mockup}
              </div>

              <div className={`flex flex-col flex-1 ${service.featured ? 'order-last lg:order-first lg:w-1/2 lg:py-2' : 'w-full'}`}>
                
                {service.featured && (
                  <div className="mb-4 lg:hidden">
                    <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                      En Çok Tercih Edilen
                    </span>
                  </div>
                )}

                {/* 1. Icon & Title */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 relative ${
                    service.featured ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-50 text-slate-900 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    <div className="relative z-10">{service.icon}</div>
                    {!service.featured && <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>}
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 leading-tight">{service.title}</h4>
                </div>

                {/* 2. Description */}
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* 3. Kimler için uygun? */}
                <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Kimler İçin Uygun?</h5>
                  <p className="text-sm text-slate-700 leading-relaxed">{service.idealFor}</p>
                </div>

                {/* 5. Fayda */}
                <div className="mb-8 flex items-start space-x-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                  <Zap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-blue-900 leading-relaxed">
                    {service.benefit}
                  </p>
                </div>

                {/* 7. Button */}
                <div className="mt-auto relative z-20">
                  <button 
                    type="button"
                    onClick={() => openModal(service)}
                    className={`w-full inline-flex items-center justify-center py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
                    service.featured 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20' 
                      : 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
                  }`}>
                    Detayları Gör
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-24 mt-[-2rem]">
          <p className="inline-flex items-center text-sm font-semibold text-slate-500 bg-slate-50 py-2 px-6 rounded-full border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            Farklı bir ihtiyacınız mı var? Birlikte analiz edip size özel paket oluşturalım.
          </p>
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
                İhtiyacınızı ücretsiz analiz edip, size zaman ve para kazandıracak dijital yol haritasını birlikte çıkaralım.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a href="#contact" className="inline-flex justify-center items-center py-4 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-colors shadow-lg shadow-blue-900/50">
                Projenizi Konuşalım
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

      {/* Service Detail Modal/Drawer */}
      <div 
        className={`fixed inset-0 z-[9999] flex items-end sm:items-stretch sm:justify-end transition-opacity duration-300 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-labelledby="slide-over-title" 
        role="dialog" 
        aria-modal="true"
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={closeModal}
        ></div>

        {/* Panel */}
        <div 
          className={`relative w-full sm:w-[500px] md:w-[600px] lg:w-[45%] h-[85vh] sm:h-full bg-white sm:rounded-l-3xl rounded-t-3xl sm:rounded-tr-none shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${
            isModalOpen ? 'translate-y-0 sm:translate-x-0' : 'translate-y-full sm:translate-y-0 sm:translate-x-full'
          }`}
        >
          {selectedService && (
            <>
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur sticky top-0 z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    {selectedService.icon}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900" id="slide-over-title">{selectedService.title}</h2>
                </div>
                <button 
                  type="button"
                  onClick={closeModal}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8 bg-slate-50/50">
                
                {/* Mockup */}
                <div className="w-full bg-white p-2 rounded-[2rem] border border-slate-100 shadow-sm pointer-events-none">
                  {selectedService.mockup}
                </div>

                {/* Description & Ideal For */}
                <div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {selectedService.description}
                  </p>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Kimler İçin Uygun?</h5>
                    <p className="text-slate-800 font-medium">{selectedService.idealFor}</p>
                  </div>
                </div>

                {/* Benefit */}
                <div className="flex items-start space-x-4 bg-blue-600 text-white p-6 rounded-2xl shadow-lg shadow-blue-600/20">
                  <Zap className="w-6 h-6 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-1">Size Ne Kazandırır?</h5>
                    <p className="text-lg font-medium leading-relaxed">{selectedService.benefit}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Neler Dahil */}
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" />
                      Neler Dahil?
                    </h5>
                    <ul className="space-y-3">
                      {selectedService.includes.map((item: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 shrink-0"></div>
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Süreç */}
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center">
                      <Cog className="w-4 h-4 mr-2 text-blue-500" />
                      Süreç Nasıl İlerler?
                    </h5>
                    <div className="space-y-4">
                      {selectedService.process.map((step: ServiceProcess, i: number) => (
                        <div key={i} className="flex space-x-3">
                          <div className="flex flex-col items-center">
                            <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center z-10 border border-white">
                              {step.step}
                            </div>
                            {i !== selectedService.process.length - 1 && (
                              <div className="w-0.5 h-full bg-slate-100 -mt-2"></div>
                            )}
                          </div>
                          <div className="pb-4">
                            <h6 className="text-sm font-bold text-slate-800">{step.title}</h6>
                            <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {selectedService.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Footer CTA */}
              <div className="p-4 sm:p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a href="#contact" onClick={closeModal} className="flex-1 inline-flex justify-center items-center py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm sm:text-base transition-colors shadow-lg shadow-blue-600/20">
                  <FileText className="w-4 h-4 mr-2" />
                  Bu Hizmet İçin Teklif Al
                </a>
                <a href="#contact" onClick={closeModal} className="flex-1 inline-flex justify-center items-center py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm sm:text-base transition-colors shadow-lg shadow-emerald-500/20">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp&apos;tan Sor
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
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
