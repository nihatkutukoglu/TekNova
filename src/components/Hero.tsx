import { ArrowRight, Layout, Activity, UserCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              İşletmeniz için <br />
              <span className="text-blue-600">güvenilir yazılım</span> <br />
              ortağı.
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 mb-10 leading-relaxed font-light max-w-2xl">
              TekNova, küçük ve orta ölçekli işletmeler için web siteleri, özel yazılım sistemleri ve işletme otomasyonları geliştiren çevik bir teknoloji ekibidir. Teknik karmaşayı sadeleştirir, işletmenize özel sürdürülebilir çözümler üretiriz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Projenizi Konuşalım
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-full text-slate-900 bg-white border-2 border-slate-200 hover:border-slate-900 transition-colors group"
              >
                Hizmetleri İncele
                <ArrowRight className="ml-3 w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Abstract Clean SaaS Mockup */}
          <div className="lg:col-span-5 relative w-full hidden md:block">
            {/* Elegant Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-slate-100 to-blue-50 blur-3xl -z-10"></div>
            
            <div className="relative bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
              
              {/* Window Controls */}
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
              </div>

              <div className="space-y-6">
                {/* Header Skeleton */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Layout className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="h-4 w-32 bg-slate-800 rounded-md mb-2"></div>
                      <div className="h-3 w-20 bg-slate-200 rounded-md"></div>
                    </div>
                  </div>
                  <UserCircle2 className="w-10 h-10 text-slate-300" />
                </div>

                {/* Main Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                    <div className="h-3 w-24 bg-slate-300 rounded-full mb-4"></div>
                    <div className="h-8 w-32 bg-slate-800 rounded-md mb-2"></div>
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-blue-500" />
                      <div className="h-3 w-16 bg-blue-100 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                    <div className="h-3 w-24 bg-slate-300 rounded-full mb-4"></div>
                    <div className="h-8 w-24 bg-slate-800 rounded-md mb-2"></div>
                    <div className="h-3 w-16 bg-slate-200 rounded-full mt-3"></div>
                  </div>
                </div>

                {/* Graph Skeleton */}
                <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 h-48 flex items-end justify-between space-x-3">
                  {[30, 45, 25, 60, 40, 80, 55].map((height, i) => (
                    <div key={i} className="w-full bg-slate-200 rounded-t-md relative group">
                      <div 
                        className="absolute bottom-0 w-full bg-blue-600 rounded-t-md transition-all duration-1000"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-10 -left-10 bg-white p-5 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 transform -rotate-3 animate-float">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Sistem Aktif</div>
                  <div className="text-xs text-slate-500">Performans %100</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
