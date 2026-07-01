import { Target, Lightbulb, ShieldCheck } from 'lucide-react';

export default function WhyTekNova() {
  const features = [
    {
      title: "İhtiyaca Özel Yaklaşım",
      description: "Hazır kalıplar yerine işletmenizin sürecine uygun sistemler geliştiriyoruz.",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "Anlaşılır Süreç",
      description: "Teknik karmaşayı sadeleştiriyor, proje boyunca her adımı açıkça anlatıyoruz.",
      icon: <Lightbulb className="w-8 h-8 text-white" />
    },
    {
      title: "Uzun Vadeli Destek",
      description: "Teslim sonrası bakım, geliştirme ve teknik destekle yanınızda olmaya devam ediyoruz.",
      icon: <ShieldCheck className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-32 lg:py-40 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          <div className="lg:col-span-5">
            <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">Neden Biz?</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8">
              Sadece kod yazmıyor, <br />
              <span className="text-slate-400">çözüm üretiyoruz.</span>
            </h3>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-lg">
              İşletmenizin gerçek ihtiyacını analiz ediyor, karmaşık teknik dilden uzak durarak size en uygun ve sürdürülebilir dijital sistemi kuruyoruz.
            </p>
            <a href="#contact" className="inline-flex items-center text-white font-semibold text-lg hover:text-blue-400 transition-colors border-b-2 border-blue-500 pb-1">
              Birlikte çalışalım
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid sm:grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-6 p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">{feature.title}</h4>
                    <p className="text-lg text-slate-400 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
