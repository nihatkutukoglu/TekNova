export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  imageUrl: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "yerel-isletmeler-icin-google-haritalar-rehberi",
    title: "Yerel İşletmeler İçin Google Haritalar Rehberi: Görünürlüğünüzü Nasıl Artırırsınız?",
    excerpt: "Müşterilerinizin %80'i sizi ziyaret etmeden önce Google Haritalar'da arıyor. İşletmenizi rakiplerinizin önüne nasıl geçirirsiniz?",
    content: `
Google Haritalar (Google My Business), restoranlardan kliniklere, kuaförlerden perakende mağazalarına kadar tüm yerel işletmeler için hayati öneme sahiptir. Bugün bir müşteri "yakınımdaki kafeler" veya "en iyi diş hekimi" diye arattığında, Google'ın ilk gösterdiği şey Haritalar sonuçlarıdır.

Peki, bu sonuçlarda en üstte çıkmak (Local SEO) için neler yapmalısınız?

### 1. Profilinizi %100 Eksiksiz Doldurun
Çoğu işletme sadece adını ve adresini girip bırakıyor. Oysa çalışma saatleriniz, tatil günleriniz, ürünleriniz, hizmetleriniz ve sıkça sorulan sorularınız bile profilinizde yer almalıdır. Profil ne kadar doluysa, Google sizi o kadar güvenilir bulur.

### 2. Müşteri Yorumlarına Yanıt Verin (Hepsine!)
Yorum sayınız ve puanınız sıralamanızı doğrudan etkiler. Daha da önemlisi, gelen tüm yorumlara (olumsuz olanlar dahil) profesyonelce yanıt vermek, Google algoritmasına "aktif ve ilgili bir işletme" olduğunuz mesajını verir.

### 3. Düzenli Görsel Paylaşın
İşletmenizin içinin, dışının, çalışanlarınızın ve ürünlerinizin güncel fotoğraflarını haftalık olarak profilinize ekleyin. Görselleri olan işletmeler, olmayanlara göre çok daha fazla yol tarifi tıklaması alıyor.

### 4. İsim ve Adres Tutarlılığı (NAP)
İşletme adınız, adresiniz ve telefon numaranızın (Name, Address, Phone) internetteki tüm platformlarda (Instagram, web siteniz, firma rehberleri) birebir aynı olması çok kritiktir.

**TekNova Olarak Ne Yapıyoruz?**
Yerel işletmeler için harita optimizasyonunu profesyonelce yönetiyor, yorum stratejileri geliştiriyor ve sizi bulunduğunuz bölgede ilk 3 sıraya (Local Pack) taşıyoruz. Detaylı bilgi için bizimle iletişime geçebilirsiniz.
    `,
    date: "14 Mayıs 2026",
    readTime: "4 Dk",
    author: {
      name: "TekNova Ekibi",
      role: "SEO & Dijital Pazarlama",
    },
    imageUrl: "/images/blog/google-maps.png",
    category: "Yerel SEO",
    tags: ["Google Maps", "SEO", "Dijital Pazarlama", "Rehber"],
  },
  {
    id: "2",
    slug: "2026-da-neden-bir-web-sitesine-ihtiyaciniz-var",
    title: "2026'da Neden Hâlâ Bir Web Sitesine İhtiyacınız Var?",
    excerpt: "Sosyal medya varken web sitesi gereksiz mi? İşletmelerin yaptığı en büyük dijital pazarlama hatalarından birini inceliyoruz.",
    content: `
Pek çok işletme sahibi haklı olarak şu soruyu soruyor: *"Instagram ve Facebook sayfam var, binlerce takipçim var, neden bir web sitesine para harcayayım?"*

Sosyal medya harika bir pazarlama aracıdır, ancak işin aslı şudur: Sosyal medya hesapları size ait değildir. Markanızın dijital dünyadaki **tek tapulu mülkü** kendi web sitenizdir.

İşte 2026 yılında profesyonel bir web sitesine sahip olmanızın 4 kritik nedeni:

### 1. Güvenilirlik ve Prestij (İlk İzlenim)
Günümüzde tüketicilerin %75'i bir markanın güvenilirliğine web sitesinin kalitesine bakarak karar veriyor. Sadece Instagram hesabı olan bir işletme ile, şık, hızlı ve güvenli bir web sitesine sahip olan işletme arasında devasa bir kurumsal algı farkı vardır.

### 2. Sosyal Medya Algoritmalarından Bağımsızlık
Instagram algoritması değiştiğinde veya hesabınız haksız yere kapatıldığında tüm müşteri ağınızı kaybedebilirsiniz. Ancak kendi web siteniz, kendi kurallarınız demektir. 

### 3. Google'da Bulunabilirlik (Organik Trafik)
İnsanlar belirli bir hizmeti ararken Instagram'a değil, Google'a girerler. Arama motorlarında (SEO) üst sıralarda çıkan bir web sitesi, size siz uyurken bile müşteri getiren 7/24 açık bir mağazadır.

### 4. Dönüşüm ve Satış Odaklılık
Sosyal medya dikkat dağıtıcıdır; müşteriniz ürününüze bakarken bir anda komik bir kedi videosuna kayabilir. Web sitenizde ise dikkati dağıtacak hiçbir şey yoktur. Ziyaretçi tamamen sizin sunduğunuz deneyime odaklanır.

**Sonuç**
Sosyal medya insanlarla tanıştığınız bir fuar alanı, web siteniz ise onları ağırlayıp satışı kapattığınız ofisinizdir. İkisi birbirini tamamlar. Modern, mobil uyumlu ve şık bir web sitesi için TekNova'dan ücretsiz danışmanlık alabilirsiniz.
    `,
    date: "22 Nisan 2026",
    readTime: "5 Dk",
    author: {
      name: "TekNova Ekibi",
      role: "Web Geliştirme",
    },
    imageUrl: "/images/blog/website-2026.png",
    category: "Web Geliştirme",
    tags: ["Web Tasarım", "İşletme Büyütme", "Kurumsal Kimlik"],
  },
  {
    id: "3",
    slug: "kucuk-isletmeler-icin-ozel-yazilim-otomasyon-cozumleri",
    title: "Küçük İşletmeler İçin Özel Yazılım ve Otomasyon Çözümleri",
    excerpt: "Özel yazılımlar sadece dev şirketler için değildir. İşletmenizin verimliliğini %50 artıracak basit otomasyon fikirleri.",
    content: `
"Özel yazılım" veya "otomasyon" kelimeleri genellikle küçük işletme sahiplerine çok pahalı, karmaşık ve sadece büyük holdinglere özelmiş gibi gelir. Oysa günümüz teknolojisinde bu durum tamamen değişti.

Excel tabloları içinde kayboluyorsanız, personelinizi manuel veri girişleriyle yoruyorsanız veya stok takibinde hatalar yaşıyorsanız, basit bir özel yazılım hayatınızı kurtarabilir.

### Neleri Otomatize Edebilirsiniz?

#### 1. Randevu ve Rezervasyon Sistemleri
Telefonla randevu almak hem personelinizin vaktini alır hem de hata payı yüksektir. Müşterilerinizin 7/24 kendi kendilerine randevu alabildiği, SMS ile hatırlatmaların otomatik gittiği bir sistem, randevu iptallerini %40 oranında azaltır.

#### 2. Stok ve Envanter Yönetimi
Ürünlerinizin nerede olduğunu, hangisinin tükenmek üzere olduğunu ve ne kadar kâr ettiğinizi tek bir ekrandan, cep telefonunuzdan görmek istemez misiniz? Size özel yazılmış basit bir panel, tüm karmaşayı bitirir.

#### 3. Müşteri İlişkileri Yönetimi (Basit CRM)
Hangi müşterinin ne sıklıkla geldiğini, en çok ne satın aldığını bilirseniz onlara özel kampanyalar yapabilirsiniz. Doğum günlerinde otomatik SMS atan bir sistem, müşteri sadakatini inanılmaz artırır.

#### 4. Teklif ve Fatura Oluşturma
Her müşteri için baştan Word/Excel belgesi hazırlamak yerine, 3 tıklamayla şık, logolu ve hesaplamaları otomatik yapılmış bir teklif/fatura PDF'i oluşturan bir yazılım size günde saatler kazandırır.

**TekNova Farkı**
Biz, hazır (ve kullanamayacağınız yüzlerce özelliği olan) karmaşık sistemler satmıyoruz. Sadece işinize yarayacak, sizin iş yapış şeklinize özel, kullanımı çok kolay paneller geliştiriyoruz.
    `,
    date: "05 Mart 2026",
    readTime: "6 Dk",
    author: {
      name: "TekNova Ekibi",
      role: "Yazılım Mühendisliği",
    },
    imageUrl: "/images/blog/automation.png",
    category: "Özel Yazılım",
    tags: ["Otomasyon", "CRM", "Verimlilik"],
  }
];
