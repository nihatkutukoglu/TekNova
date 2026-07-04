export default function Footer() {
  const links = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetler', href: '/#services' },
    { name: 'Projeler', href: '/#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Hakkımızda', href: '/#about' },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-16 mb-12">
          
          <div className="mb-10 md:mb-0">
            <a href="/" className="text-4xl font-black tracking-tighter block mb-4">
              Tek<span className="text-blue-500">Nova.</span>
            </a>
            <p className="text-slate-400 text-xl font-light max-w-sm">
              Modern yazılım çözümleri.
            </p>
          </div>

          <ul className="flex flex-wrap gap-8 md:gap-12 text-lg font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-slate-300 hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 font-medium">
          <p className="mb-4 md:mb-0">
            © 2026 TekNova.
          </p>
          <a href="mailto:teknovabilgi@gmail.com" className="hover:text-white transition-colors">
            teknovabilgi@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
