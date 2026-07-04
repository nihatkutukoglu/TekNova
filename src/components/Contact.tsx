'use client';

import { useState } from 'react';
import { MessageSquare, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Form doğrulama (basit)
    if (!formData.name || !formData.phone || !formData.message) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '93812a1a-9538-4d86-85ba-cb6326722eda', 
          ...formData,
          subject: 'TekNova - Yeni İletişim Formu Talebi',
          from_name: formData.name
        })
      });

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Text & WhatsApp CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">İletişim</h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                Projenizi <br />
                <span className="text-slate-400">konuşalım.</span>
              </h3>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-12 max-w-md">
                Yeni bir web sitesi, özel yazılım veya otomasyon ihtiyacınız için hemen bizimle iletişime geçin.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="#"
                className="group flex items-center justify-between bg-slate-900 hover:bg-slate-800 text-white p-6 sm:p-8 rounded-[2rem] transition-colors"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">WhatsApp</div>
                    <div className="text-slate-400 font-medium">Hemen Yazın</div>
                  </div>
                </div>
              </a>

              <a
                href="mailto:teknovabilgi@gmail.com"
                className="group flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-900 p-6 sm:p-8 rounded-[2rem] transition-colors"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">E-posta</div>
                    <div className="text-slate-500 font-medium">teknovabilgi@gmail.com</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Clean Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="bg-slate-50 p-10 sm:p-14 rounded-[3rem] border border-slate-100 relative">
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Ad Soyad *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-6 py-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-white text-lg disabled:opacity-50"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Telefon *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-6 py-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-white text-lg disabled:opacity-50"
                      placeholder="05XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-6 py-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-white text-lg disabled:opacity-50"
                    placeholder="ornek@sirket.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">İhtiyacınız</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-6 py-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-white text-lg appearance-none disabled:opacity-50"
                  >
                    <option value="">Seçiniz</option>
                    <option value="Web Sitesi">Web Sitesi</option>
                    <option value="Özel Yazılım / Panel">Özel Yazılım / Panel</option>
                    <option value="Google & Haritalar">Google & Haritalar</option>
                    <option value="Dijital Otomasyon">Dijital Otomasyon</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Proje Detayları *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full px-6 py-5 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all bg-white text-lg resize-none disabled:opacity-50"
                    placeholder="Kısaca bahsedin..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold text-lg py-5 px-8 rounded-2xl transition-all flex items-center justify-center space-x-2"
                >
                  {status === 'idle' && <span>Gönder</span>}
                  {status === 'loading' && <><Loader2 className="w-5 h-5 animate-spin" /><span>Gönderiliyor...</span></>}
                  {status === 'success' && <><CheckCircle2 className="w-5 h-5" /><span>Talebiniz Alındı!</span></>}
                  {status === 'error' && <><AlertCircle className="w-5 h-5" /><span>Hata Oluştu, Tekrar Deneyin</span></>}
                </button>
                
                {status === 'success' && (
                  <p className="text-emerald-600 text-sm font-semibold text-center mt-4">
                    Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                )}
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
