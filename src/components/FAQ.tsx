'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "Bir web sitesinin veya projenin tamamlanması ne kadar sürüyor?",
    answer: "Projenin kapsamına göre değişmekle birlikte, standart kurumsal web siteleri ve dijital kataloglar genelde 1-2 hafta içerisinde canlıya alınır. Özel yazılım ve yönetim panelleri ise ihtiyaç analizi sonrasında belirlenen takvime göre (ortalama 4-8 hafta) tamamlanır."
  },
  {
    question: "Google Haritalar'da üst sıralara çıkmak garantili mi?",
    answer: "Yerel SEO ve harita optimizasyonu organik bir süreçtir. İşletme profilinizi en güncel Google algoritmalarına göre optimize ediyor, yorum stratejinizi kuruyoruz. Düzenli ve doğru yönetimle kısa sürede rakiplerinizin önüne geçerek telefon ve ziyaretçi trafiğinizin ciddi oranda arttığını göreceksiniz."
  },
  {
    question: "Ödeme süreçleri nasıl işliyor?",
    answer: "Projelerimizde genellikle ödemenin %50'si proje başlangıcında, kalan %50'si ise proje tesliminde ve onayınız alındıktan sonra tahsil edilir. Aylık danışmanlık veya yorum yönetimi paketlerimizde ise düzenli aylık faturalandırma yapılır."
  },
  {
    question: "Sadece web sitesi mi yapıyorsunuz, süreç sonrasında destek var mı?",
    answer: "Asla 'siteyi yapıp bırakmıyoruz'. İşletmenizin dijitaldeki teknoloji ortağı oluyoruz. Proje tesliminden sonra da olası hatalara karşı teknik destek sağlıyor, isterseniz aylık bakım paketlerimizle sisteminizin 7/24 güncel ve güvende kalmasını sağlıyoruz."
  },
  {
    question: "İşletmeme özel bir yazılım yaptırmak istiyorum, nereden başlamalıyım?",
    answer: "İhtiyacınızı anlamak bizim ilk adımımız. İletişim formunu doldurarak veya WhatsApp'tan bize ulaşarak ücretsiz ön analiz toplantısı talep edebilirsiniz. İş süreçlerinizi dinliyor, size zaman ve para kazandıracak en uygun dijital çözümü birlikte planlıyoruz."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-white rounded-r-[5rem] opacity-50 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-widest uppercase mb-4 border border-blue-100 shadow-sm">
            Sıkça Sorulan Sorular
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
            Aklınıza takılan <br className="hidden sm:block" />
            <span className="text-blue-600">soruların cevapları.</span>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Süreçlerimiz, hizmetlerimiz ve ödeme yöntemlerimiz hakkında en çok merak edilen detayları sizin için derledik.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-blue-200 shadow-lg shadow-blue-900/5' 
                  : 'border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-6 sm:px-8 sm:py-6 flex justify-between items-center focus:outline-none"
              >
                <span className={`font-bold text-lg sm:text-xl pr-4 transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <div className="w-full h-px bg-slate-100 mb-6"></div>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-left">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Aradığınız cevabı bulamadınız mı?</h4>
              <p className="text-slate-500 text-sm">Bizimle doğrudan iletişime geçin, hemen yanıtlayalım.</p>
            </div>
          </div>
          <a href="#contact" className="w-full sm:w-auto inline-flex justify-center items-center py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm transition-colors shrink-0">
            İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}
