export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Görüşme",
      description: "İhtiyacınızı ve mevcut iş sürecinizi dinleriz."
    },
    {
      num: "02",
      title: "Analiz",
      description: "Size uygun çözümü, proje kapsamını ve maliyeti belirleriz."
    },
    {
      num: "03",
      title: "Geliştirme",
      description: "Web sitesi, panel veya özel yazılım sistemini geliştiririz."
    },
    {
      num: "04",
      title: "Teslim",
      description: "Projeyi yayına alır, kullanım desteği ve bakım süreci sunarız."
    }
  ];

  return (
    <section id="process" className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Süreç</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1]">
              Nasıl Çalışıyoruz?
            </h3>
          </div>
          <p className="text-lg text-slate-500 font-light mt-6 md:mt-0 max-w-sm">
            Karmaşık süreçleri dört net adıma bölerek size zaman kazandırıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-20 w-full h-px bg-slate-200"></div>
              )}
              
              <div className="flex flex-col">
                <div className="relative z-10 w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-white transition-colors duration-500">{step.num}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
