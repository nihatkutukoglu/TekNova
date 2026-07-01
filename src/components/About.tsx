export default function About() {
  return (
    <section id="about" className="py-32 lg:py-40 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Hakkımızda</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-10">
              Teknoloji, <br />
              <span className="text-slate-400">sade olmalı.</span>
            </h3>
            
            <div className="space-y-8 text-xl text-slate-600 font-light leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">TekNova</strong>, işletmelerin dijital süreçlerini daha verimli hale getirmek için yazılım çözümleri geliştiren çevik bir ekiptir.
              </p>
              <p>
                Karmaşık teknik terimler arkasına saklanmadan, işletmenizin gerçek sorunlarını çözecek doğru dijital araçları üretiriz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
              <div className="text-5xl lg:text-7xl font-black text-slate-900 mb-2">50+</div>
              <div className="text-lg text-slate-500 font-medium">Tamamlanan Proje</div>
            </div>
            <div className="bg-slate-900 p-10 rounded-[2rem] shadow-xl flex flex-col justify-center items-center text-center translate-y-8">
              <div className="text-5xl lg:text-7xl font-black text-white mb-2">%100</div>
              <div className="text-lg text-slate-400 font-medium">Müşteri Memnuniyeti</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
