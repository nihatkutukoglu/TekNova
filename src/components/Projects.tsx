'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, LayoutDashboard, Database, CalendarDays, X, CheckCircle2 } from 'lucide-react';

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

  interface ProjectData {
    id?: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }

  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
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
              <div className="mt-auto relative z-20">
                <button 
                  type="button"
                  onClick={() => openModal(project)}
                  className="inline-flex items-center text-slate-900 font-bold text-lg hover:text-blue-600 transition-colors group/btn"
                >
                  Detayları Gör
                  <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal/Drawer */}
      <div 
        className={`fixed inset-0 z-[9999] flex items-end sm:items-stretch sm:justify-end transition-opacity duration-300 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={closeModal}
        ></div>

        <div 
          className={`relative w-full sm:w-[500px] md:w-[600px] lg:w-[45%] h-[85vh] sm:h-full bg-white sm:rounded-l-3xl rounded-t-3xl sm:rounded-tr-none shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${
            isModalOpen ? 'translate-y-0 sm:translate-x-0' : 'translate-y-full sm:translate-y-0 sm:translate-x-full'
          }`}
        >
          {selectedProject && (
            <>
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur sticky top-0 z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center">
                    {selectedProject.icon}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{selectedProject.title}</h2>
                </div>
                <button 
                  type="button"
                  onClick={closeModal}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8 bg-slate-50/50">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" />
                    Proje Özellikleri
                  </h5>
                  <p className="text-slate-600">Bu proje için detaylı analiz ve ekran görüntüleri çok yakında eklenecektir.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
