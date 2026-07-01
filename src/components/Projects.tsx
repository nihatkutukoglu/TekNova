import { ArrowRight, LayoutDashboard, Database, CalendarDays } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Restoran Sipariş Takip Sistemi",
      description: "Masa, sipariş, ürün ve ödeme süreçlerini tek panelden yönetme.",
      icon: <LayoutDashboard className="w-8 h-8 text-slate-900" />
    },
    {
      title: "Stok ve Cari Takip Paneli",
      description: "Ürün, müşteri, borç-alacak ve raporlama süreçlerini dijitale taşıma.",
      icon: <Database className="w-8 h-8 text-slate-900" />
    },
    {
      title: "Randevu Yönetim Sistemi",
      description: "Kuaför, klinik, servis veya danışmanlık işletmeleri için randevu takibi.",
      icon: <CalendarDays className="w-8 h-8 text-slate-900" />
    }
  ];

  return (
    <section id="projects" className="py-32 lg:py-40 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Demo Projeler</h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] max-w-3xl">
            İşletmeler için geliştirilebilecek <br />
            <span className="text-slate-400">örnek çözümler.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 group flex flex-col"
            >
              <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h4>
              <p className="text-slate-600 text-lg font-light mb-10 flex-1">
                {project.description}
              </p>
              <button className="inline-flex items-center text-slate-900 font-bold text-lg hover:text-blue-600 transition-colors group/btn mt-auto">
                Detayları Gör
                <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
