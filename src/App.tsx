import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, ChevronRight, ChevronsRight, Play, ArrowUp, User, Calendar, Menu, X, MapPin, Phone, Mail, ChevronLeft } from 'lucide-react';
import AgeVerification from './components/AgeVerification';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Lukas Meyer",
      role: "Physical Therapist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
      text: "Greenderma changed my life. The medical follow-up was exceptional and the products helped me regain my quality of life in a natural and safe way."
    },
    {
      name: "Sarah Jenkins",
      role: "Yoga Instructor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      text: "I've tried many natural remedies, but Greenderma's approach is truly holistic. My sleep patterns have improved dramatically since I started their program."
    },
    {
      name: "David Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      text: "The stress relief I've experienced is remarkable. The team took the time to understand my specific needs and tailored a solution that actually works."
    },
    {
      name: "Elena Rodriguez",
      role: "Nutritionist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      text: "As a health professional, I appreciate the science-backed approach. The quality of the products is unmatched, and the results speak for themselves."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const blogPosts = [
    {
      id: 1,
      title: "CBD for Anxiety: A Natural Path to Calm",
      author: "DR. ELIAS SMITH",
      date: "MARCH 10, 2026",
      image: "/images/blog-anxiety.png",
      excerpt: "Discover how CBD interacts with the endocannabinoid system to regulate stress and promote emotional balance naturally.",
      content: "Anxiety and stress have become pervasive in modern life, but nature offers a powerful ally in CBD. Cannabidiol (CBD) interacts with our body's endocannabinoid system, specifically targeting receptors that regulate mood and fear responses. Unlike traditional pharmaceutical interventions, CBD provides a soothing effect without the risk of dependency or cognitive impairment. Studies suggest that daily CBD use can significantly lower cortisol levels, helping individuals maintain a state of calm even in high-pressure situations. At Greenderma, we focus on full-spectrum extracts that maximize these therapeutic benefits through the 'entourage effect'."
    },
    {
      id: 2,
      title: "The Science of Sleep: How CBD Restores Rest",
      author: "SARAH JENKINS",
      date: "MARCH 08, 2026",
      image: "/images/blog-sleep.png",
      excerpt: "Tired of restless nights? Learn why CBD is becoming the preferred choice for those seeking deep, restorative sleep without morning grogginess.",
      content: "Quality sleep is the foundation of health, yet millions struggle with insomnia. CBD has emerged as a revolutionary solution for sleep disorders. By addressing the root causes of sleeplessness—such as physical discomfort and a racing mind—CBD helps the body transition into a restorative state. Research indicates that CBD may improve sleep duration and quality by stabilizing the sleep-wake cycle. Unlike many over-the-counter sleep aids, CBD doesn't cause next-day lethargy, allowing you to wake up feeling genuinely refreshed. Our Greenderma sleep-focused formulas are designed to help you drift off naturally and stay asleep through the night."
    },
    {
      id: 3,
      title: "Managing Chronic Pain with Topical CBD",
      author: "LUKAS MEYER",
      date: "MARCH 05, 2026",
      image: "/images/blog-pain.png",
      excerpt: "Explore the benefits of localized CBD application for inflammatory conditions and chronic muscle or joint pain relief.",
      content: "For those living with chronic pain, every day can be a challenge. CBD topicals, such as ointments and creams, offer a targeted approach to pain management. When applied directly to the skin, CBD bypasses the bloodstream and interacts directly with local cannabinoid receptors in the muscle tissue and joints. This provides rapid relief from inflammation and soreness. It's particularly effective for athletes recovering from intense training or individuals managing age-related joint conditions. Greenderma's topical solutions combine high-potency CBD with essential oils like eucalyptus and peppermint to enhance the cooling, analgesic effect."
    }
  ];

  const [activeArticle, setActiveArticle] = useState<typeof blogPosts[0] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [activeInfoTopic, setActiveInfoTopic] = useState<{ title: string; subtitle: string; content: string } | null>(null);

  const products = [
    {
      id: 1,
      name: "CBD DELTA-8 Oil 6000mg",
      price: "$89.00",
      image: "/images/CBD DELTA-8 Oil 6000mg.png",
      description: "Full Spectrum with 3700mg Delta-8, 2300mg CBD, Less than 0.3% Delta 9 THC. An ultra-high potency formula created for maximum efficacy, delivering profound relief and comprehensive botanical benefits."
    },
    {
      id: 2,
      name: "Hemp Caps 175mg 20 capsules",
      price: "$59.00",
      image: "/images/Hemp Caps 175mg 20 capsules.png",
      description: "Full Spectrum with 150mg THCa per capsule, 25mg CBD per capsule with less than 0.3% Delta 9 THC. A beautifully balanced blend designed to provide comprehensive daily support and holistic wellness from morning to night."
    },
    {
      id: 3,
      name: "CBD Gummies Nigthfall 30mg",
      price: "$98.00",
      image: "/images/CBD Gummies Nigthfall 30mg.png",
      description: "Full Spectrum with 10mg CBD per Gummy, 10mg CBN per Gummy, 10mg THC per Gummy, Less than 0.3% Delta 9 THC. Formulated to provide deep, restorative sleep and naturally enhance your nightly rest without morning grogginess."
    },
    {
      id: 4,
      name: "CBD Gummies Sleep 30mg",
      price: "$98.00",
      image: "/images/CBD Gummies Sleep 30mg.png",
      description: "Full Spectrum with 18mg Delta 8 THC per Gummy, Less than 0.3% Delta 9 THC. Designed specifically to help you unwind, relax your mind, and achieve a peaceful night's rest seamlessly."
    },
    {
      id: 5,
      name: "Hemp Live Caps 600mg 20 capsules",
      price: "$75.00",
      image: "/images/Hemp Live Caps 600mg 20 capsules.png",
      description: "Full Spectrum with 600mg THCa per Capsule, Less than 0.3% Delta 9 THC. A potent, full-spectrum formulation to support natural recovery, providing extended relief directly when you need it most."
    },
    {
      id: 6,
      name: "Fresh Hemp Caps 20 capsules",
      price: "$65.00",
      image: "/images/Fresh Hemp Caps 20 capsules.png",
      description: "Full Spectrum with 350mg THCa per capsule, Less than 0.3% Delta 9 THC. Formulated for convenient and precise daily dosing, offering a powerful and natural therapeutic experience."
    },
    {
      id: 7,
      name: "CBD Isolate Oil 3000mg",
      price: "$69.00",
      image: "/images/CBD Isolate Oil 3000mg.png",
      description: "Pure CBD Isolate: Lab-tested to ensure 0% THC, guaranteed. Less than 0.3% Delta 9 THC. An exceptional option for those seeking the powerful benefits of CBD in its purest form for daily wellness."
    },
    {
      id: 8,
      name: "CBD Balm Muscle Recovery 150g",
      price: "$65.00",
      image: "/images/cbd welness muscle recovery balm.png",
      description: "A powerful topical formula to soothe tired muscles and support rapid recovery. Enriched with premium CBD and natural botanicals to provide targeted, deep tissue relief."
    },
    {
      id: 9,
      name: "CBD Wellness Soothing Balm 150g",
      price: "$65.00",
      image: "/images/cbd welness soothing balm.png",
      description: "A calming balm formulated with full-spectrum CBD and essential oils. Designed to nourish the skin, ease daily tension, and promote overall relaxation and wellness."
    }
  ];

  const infoTopics = [
    {
      title: "Our Process",
      subtitle: "Excellence from Seed to Bottle.",
      content: "Our commitment to quality starts at the source. We utilize state-of-the-art cultivation techniques and cutting-edge laboratory facilities to ensure every drop of our CBD Isolate meets the highest industry standards. Through precise extraction and rigorous third-party testing, we guarantee a pure, potent, and consistent product that you can trust for your wellness journey."
    },
    {
      title: "Payments",
      subtitle: "Secure and Flexible Transactions.",
      content: "We offer a variety of secure payment methods to ensure a smooth checkout experience. Whether you are purchasing for personal use or wholesale, your financial data is protected by industry-leading encryption. We accept major credit cards and specialized payment gateways tailored for the global market."
    },
    {
      title: "Special Offers",
      subtitle: "Bulk Benefits for Consistent Care.",
      content: "Many wellness treatments require consistent use over time. To support your long-term health goals, we offer exclusive discounts on bulk orders. For purchases of 12 units or more, you unlock special pricing, making it easier and more affordable to maintain your supply of high-potency CBD."
    },
    {
      title: "Shipping",
      subtitle: "Worldwide Delivery with Local Compliance.",
      content: "We ship our premium CBD products worldwide. To ensure a hassle-free delivery, we strictly adhere to the local laws and regulations of each destination country. Our logistics team handles all necessary documentation to ensure your order arrives safely and legally at your doorstep, no matter where you are."
    },
    {
      title: "Regulations",
      subtitle: "Full Transparency and Compliance.",
      content: "We operate in total alignment with international health and safety standards. Every batch of our 6000mg CBD Isolate is accompanied by a Certificate of Analysis (COA), proving its purity and 0% THC content. We are dedicated to transparency, ensuring our products are as safe as they are effective."
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  // Drag to scroll logic for desktop
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeftPos(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (err: any) {
      setFormStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Newsletter Subscription State
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;

    setSubscribeStatus('loading');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Newsletter Subscriber',
          email: subscribeEmail,
          message: 'Lead veio do form: Stay in tune with nature\'s healing power'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setSubscribeStatus('success');
      setSubscribeEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 5000);
    } catch (err) {
      console.error('Subscription error:', err);
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 5000);
    }
  };

  const faqs = [
    {
      question: "WHAT IS GREENDERMA USED FOR?",
      answer: "Greenderma offers natural cannabis-based solutions to promote wellness, relieve stress, improve sleep quality, and assist in the treatment of various skin and general health conditions."
    },
    {
      question: "IS MEDICAL MARIJUANA SAFE TO USE?",
      answer: "Yes, when prescribed and monitored by qualified healthcare professionals, medical cannabis is safe and effective. Our products undergo rigorous quality testing."
    },
    {
      question: "DO I NEED A PRESCRIPTION TO GET GREENDERMA PRODUCTS?",
      answer: "For most of our therapeutic products, a medical prescription is required. Our team can assist you in the process of scheduling a consultation."
    },
    {
      question: "ARE YOUR PRODUCTS LAB-TESTED?",
      answer: "Absolutely. All Greenderma products are tested in independent laboratories to ensure purity, potency, and the absence of contaminants."
    },
    {
      question: "HOW LONG DOES IT TAKE TO FEEL THE EFFECTS?",
      answer: "The onset time varies depending on the method of use and each person's metabolism. Sublingual oils can take effect in 15-45 minutes, while capsules may take 1 to 2 hours."
    },
    {
      question: "CAN GREENDERMA HELP WITH STRESS AND ANXIETY?",
      answer: "Many of our patients report significant relief from stress and anxiety symptoms with the use of our CBD-rich products. Consult a doctor to see if it's right for you."
    }
  ];

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AgeVerification />
      <div id="home" className="min-h-screen relative font-sans text-white overflow-hidden bg-[#0a1f12]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-70 mix-blend-luminosity"
          style={{
            backgroundImage: 'url("/images/greendermacbd-background.webp")',
          }}
        />
        {/* Gradient overlays to match the dark green tint and readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a1f12]/80 via-[#0a1f12]/50 to-transparent" />
        <div className="absolute inset-0 z-0 bg-green-900/10 mix-blend-color" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navbar */}
          <nav className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
            {/* Left Links */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-[#FFD600] transition-colors cursor-pointer">Home</a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-[#FFD600] transition-colors cursor-pointer">About Us</a>
              <a href="#products" onClick={(e) => handleScroll(e, 'products')} className="hover:text-[#FFD600] transition-colors cursor-pointer">Products</a>
              <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="hover:text-[#FFD600] transition-colors cursor-pointer">FAQ</a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-[#FFD600] transition-colors cursor-pointer">Contact</a>
            </div>

            <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 cursor-pointer">
              <img src="/images/logo-greenderma.png" alt="Greenderma Logo" className="h-14 w-auto" />
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-6 ml-auto lg:ml-0">
              <button className="hover:text-[#FFD600] transition-colors cursor-pointer">
                <Search className="w-5 h-5" />
              </button>
              <button onClick={(e) => handleScroll(e, 'contact')} className="hidden lg:flex bg-[#FFD600] text-black px-5 py-2.5 rounded font-semibold text-sm hover:bg-yellow-400 transition-colors items-center cursor-pointer">
                Contact Us <ChevronRight className="ml-1 w-4 h-4" />
              </button>
              <button
                className="lg:hidden hover:text-[#FFD600] transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-[88px] left-0 right-0 bg-[#0a1f12] border-t border-white/10 z-50 px-6 py-4 flex flex-col space-y-4 shadow-xl">
              <a href="#home" onClick={(e) => { handleScroll(e, 'home'); setIsMobileMenuOpen(false); }} className="text-white hover:text-[#FFD600] transition-colors py-2 border-b border-white/5 cursor-pointer">Home</a>
              <a href="#about" onClick={(e) => { handleScroll(e, 'about'); setIsMobileMenuOpen(false); }} className="text-white hover:text-[#FFD600] transition-colors py-2 border-b border-white/5 cursor-pointer">About Us</a>
              <a href="#products" onClick={(e) => { handleScroll(e, 'products'); setIsMobileMenuOpen(false); }} className="text-white hover:text-[#FFD600] transition-colors py-2 border-b border-white/5 cursor-pointer">Products</a>
              <a href="#faq" onClick={(e) => { handleScroll(e, 'faq'); setIsMobileMenuOpen(false); }} className="text-white hover:text-[#FFD600] transition-colors py-2 border-b border-white/5 cursor-pointer">FAQ</a>
              <a href="#contact" onClick={(e) => { handleScroll(e, 'contact'); setIsMobileMenuOpen(false); }} className="text-white hover:text-[#FFD600] transition-colors py-2 border-b border-white/5 cursor-pointer">Contact</a>
              <button onClick={(e) => { handleScroll(e, 'contact'); setIsMobileMenuOpen(false); }} className="bg-[#FFD600] text-black px-5 py-3 rounded font-semibold text-sm hover:bg-yellow-400 transition-colors flex items-center justify-center mt-4 cursor-pointer">
                Contact Us <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          )}

          {/* Hero Content */}
          <main className="flex-grow container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between py-12 lg:py-0">

            {/* Left Column */}
            <div className="lg:w-1/2 max-w-2xl pt-10 lg:pt-0">
              <p className="text-[#FFD600] font-bold tracking-[0.15em] text-xs mb-6 uppercase">
                Your journey to true wellness starts here
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                Healing Science,<br />Inspired by Nature
              </h1>
              <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
                Discover the power of nature with Greenderma. We offer innovative treatments and high-quality cannabis-based products to transform your health and well-being.
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={(e) => handleScroll(e, 'contact')} className="bg-[#FFD600] text-black px-8 py-3.5 rounded font-bold hover:bg-yellow-400 transition-colors flex items-center text-sm cursor-pointer">
                  Start Free Consultation <ChevronsRight className="ml-2 w-4 h-4" />
                </button>
                <button onClick={(e) => handleScroll(e, 'products')} className="border border-[#FFD600] text-[#FFD600] px-8 py-3.5 rounded font-bold hover:bg-[#FFD600] hover:text-black transition-colors flex items-center text-sm cursor-pointer">
                  See Products <ChevronsRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column - Glass Card */}
            <div className="lg:w-5/12 mt-16 lg:mt-0 w-full max-w-md lg:max-w-none ml-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                {/* Subtle inner glow for the glass effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                <p className="text-lg text-white mb-8 leading-relaxed font-light relative z-10">
                  Experts in natural therapies and advanced dermatological care.
                </p>

                {/* Image Thumbnail */}
                <div className="relative rounded-2xl overflow-hidden group aspect-[16/10] z-10">
                  <img
                    src="/images/greenderma-hero-modal.png"
                    alt="Greenderma Hero Modal"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="bg-[#1b3320] text-white py-24 font-sans">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column */}
            <div className="space-y-8">
              <img
                src="/images/Greenderma Tender Uniform 1.webp"
                alt="Greenderma Staff"
                className="w-full rounded-2xl object-cover aspect-[4/3] shadow-xl"
              />
              <p className="text-gray-300 leading-relaxed font-light">
                At Greenderma, we believe in the healing power of nature. Our mission is to provide safe and educated access to cannabis therapies, improving the quality of life of our patients with premium products, specialized care, and a deep commitment to scientific research that ensures the best results for your wellness journey.
              </p>
              <button onClick={(e) => handleScroll(e, 'products')} className="bg-[#FFD600] text-black px-6 py-2.5 rounded font-bold hover:bg-yellow-400 transition-colors flex items-center text-sm cursor-pointer">
                Our Products <ChevronsRight className="ml-1 w-4 h-4" />
              </button>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-gray-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#689f38]" fill="currentColor">
                  <path d="M12 1L13.5 8.5L21 7L15.5 12.5L19 20L12 15.5L5 20L8.5 12.5L3 7L10.5 8.5L12 1Z" />
                </svg>
                <span>About Greenderma</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-[1.2]">
                <span className="relative z-10 inline-block">
                  Healing with Purpose,
                </span>
                <br />
                <span className="relative z-10 inline-block mt-2">
                  Guided by Nature.
                </span>
              </h2>

              <div className="relative rounded-2xl overflow-hidden mt-8 shadow-xl">
                <img
                  src="/images/Ointment Application Lifestyle.png"
                  alt="Ointment Application Lifestyle"
                  className="w-full object-cover aspect-[16/10]"
                />

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 grid grid-cols-3 gap-4">
                  {/* Stat 1 */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 lg:p-6 text-center shadow-lg">
                    <div className="text-3xl lg:text-4xl font-bold mb-2">10+</div>
                    <div className="text-[9px] lg:text-[10px] font-bold tracking-widest uppercase text-gray-200 leading-tight">Years of<br />Research</div>
                  </div>
                  {/* Stat 2 */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 lg:p-6 text-center shadow-lg">
                    <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
                    <div className="text-[9px] lg:text-[10px] font-bold tracking-widest uppercase text-gray-200 leading-tight">Satisfaction<br />Rate</div>
                  </div>
                  {/* Stat 3 */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 lg:p-6 text-center shadow-lg">
                    <div className="text-3xl lg:text-4xl font-bold mb-2">20+</div>
                    <div className="text-[9px] lg:text-[10px] font-bold tracking-widest uppercase text-gray-200 leading-tight">Medical<br />Partner</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-[#162a1a] text-white py-24 font-sans">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-xs font-bold tracking-widest uppercase text-gray-300 mb-4">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#689f38]" fill="currentColor">
                <path d="M12 1L13.5 8.5L21 7L15.5 12.5L19 20L12 15.5L5 20L8.5 12.5L3 7L10.5 8.5L12 1Z" />
              </svg>
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
              Wellness Starts with the Right Care
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column - Image */}
            <div className="lg:col-span-4 h-full">
              <img
                src="/images/greenderma-details (2).webp"
                alt="Greenderma Details"
                className="w-full h-full object-cover rounded-2xl shadow-xl min-h-[400px]"
              />
            </div>

            {/* Right Column - Services Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Service Card 1 */}
              <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 text-center hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-[#FFD600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 15c6.667-6 13.333 0 20-6" />
                    <path d="M9 22c1.798-1.998 2.518-3.207 2.807-4.143" />
                    <path d="M11.608 1.918C11.467 3.012 10.728 4.422 9 6" />
                    <path d="M2 9c6.667 6 13.333 0 20 6" />
                    <path d="M15 22c-1.798-1.998-2.518-3.207-2.807-4.143" />
                    <path d="M12.392 1.918C12.533 3.012 13.272 4.422 15 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Medical Consultation</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  Schedule a consultation with our specialist doctors for a personalized assessment and proper prescription.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 text-center hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-[#FFD600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Therapy Programs</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  Continuous treatment programs focused on your physical and mental well-being, with regular monitoring.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 text-center hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-[#FFD600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2v7.31" />
                    <path d="M14 9.3V1.99" />
                    <path d="M8.5 2h7" />
                    <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                    <path d="M5.52 16h12.96" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Product Guidance</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  Specialized guidance to help you choose the ideal products and dosages for your needs.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 text-center hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-[#FFD600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 18h8" />
                    <path d="M3 22h18" />
                    <path d="M14 22a7 7 0 1 0 0-14h-1" />
                    <path d="M9 14h2" />
                    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
                    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Research & Development</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  We constantly invest in research to bring the most innovative and effective solutions on the market.
                </p>
              </div>

              {/* Service Card 5 */}
              <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 text-center hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-[#FFD600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Patient Education</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  We provide educational materials and workshops so you can understand the benefits and correct use of treatments.
                </p>
              </div>

              {/* Service Card 6 */}
              <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 text-center hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-[#FFD600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Client Support</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  Our support team is always available to answer questions and assist in all stages of your treatment.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Greenderma Section */}
      <section className="bg-[#1b3320] text-white py-24 font-sans">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-gray-300 mb-4">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#689f38]" fill="currentColor">
                <path d="M12 1L13.5 8.5L21 7L15.5 12.5L19 20L12 15.5L5 20L8.5 12.5L3 7L10.5 8.5L12 1Z" />
              </svg>
              <span>Why Choose Greenderma</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              The Smarter Way to Heal Naturally
            </h2>
          </div>

          {/* Two Large Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">

            {/* Card 1 (Image Background) */}
            <div className="relative rounded-xl overflow-hidden min-h-[300px] flex flex-col justify-between p-8 lg:p-10 shadow-lg group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("/images/doctor-greenderma.png")',
                }}
              />
              <div className="absolute inset-0 bg-black/40" />

              <p className="relative z-10 text-gray-200 text-sm leading-relaxed font-light max-w-sm">
                Our commitment is to your health. We combine science, nature, and compassion to offer humanized care and real results that transform lives.
              </p>

              <div className="relative z-10 mt-12">
                <div className="text-5xl lg:text-6xl font-bold mb-2">150+</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Doctors</div>
              </div>
            </div>

            {/* Card 2 (Solid Green Background) */}
            <div className="bg-[#4a604c]/80 border border-white/5 rounded-xl min-h-[300px] flex flex-col justify-between p-8 lg:p-10 shadow-lg">
              <p className="text-gray-200 text-sm leading-relaxed font-light max-w-sm">
                We only work with certified and traceable products, ensuring maximum safety and efficacy in every drop of our oils and treatments.
              </p>

              <div className="mt-12">
                <div className="text-5xl lg:text-6xl font-bold mb-2">15+</div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Countries Served</div>
              </div>
            </div>

          </div>

          {/* Four Columns Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">

            {/* Feature 1 */}
            <div className="text-center px-6 lg:border-r border-dashed border-white/20">
              <div className="flex justify-center mb-6">
                <svg className="w-10 h-10 text-[#FFD600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 2h2" />
                  <path d="M12 2v20" />
                  <path d="M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2" />
                  <path d="M7 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Professional Medical</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Highly qualified and experienced medical team in cannabinoid therapies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center px-6 lg:border-r border-dashed border-white/20">
              <div className="flex justify-center mb-6">
                <svg className="w-10 h-10 text-[#FFD600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Natural & Holistic</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Integral approach that treats the root cause, focusing on the balance of body and mind.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center px-6 lg:border-r border-dashed border-white/20">
              <div className="flex justify-center mb-6">
                <svg className="w-10 h-10 text-[#FFD600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Compassionate</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Empathetic and welcoming care, respecting the unique journey of each patient.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center px-6">
              <div className="flex justify-center mb-6">
                <svg className="w-10 h-10 text-[#FFD600]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Wellness-Oriented</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Focus on promoting health and long-term quality of life, not just symptom relief.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#162a1a] text-white py-24 font-sans">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 text-xs font-bold tracking-widest uppercase text-gray-300 mb-4">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#689f38]" fill="currentColor">
                <path d="M12 1L13.5 8.5L21 7L15.5 12.5L19 20L12 15.5L5 20L8.5 12.5L3 7L10.5 8.5L12 1Z" />
              </svg>
              <span>How It Works Greenderma</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
              Simple Steps to Natural Healing
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Step 1 */}
            <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-xl font-bold">Step</span>
                <span className="text-4xl font-bold text-[#FFD600]">01</span>
              </div>
              <h3 className="text-xl font-bold mb-6">Initial Consultation</h3>
              <div className="border-t border-dashed border-white/20 mb-6"></div>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Schedule an initial consultation with our specialists to understand your needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-xl font-bold">Step</span>
                <span className="text-4xl font-bold text-[#FFD600]">02</span>
              </div>
              <h3 className="text-xl font-bold mb-6">Personal Assessment</h3>
              <div className="border-t border-dashed border-white/20 mb-6"></div>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Complete assessment of your medical history and health goals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-xl font-bold">Step</span>
                <span className="text-4xl font-bold text-[#FFD600]">03</span>
              </div>
              <h3 className="text-xl font-bold mb-6">Treatment Match</h3>
              <div className="border-t border-dashed border-white/20 mb-6"></div>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Identification of the ideal treatment and the most suitable products for your case.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-xl font-bold">Step</span>
                <span className="text-4xl font-bold text-[#FFD600]">04</span>
              </div>
              <h3 className="text-xl font-bold mb-6">Treatment Formulation</h3>
              <div className="border-t border-dashed border-white/20 mb-6"></div>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Development of a personalized treatment plan and medical prescription.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-xl font-bold">Step</span>
                <span className="text-4xl font-bold text-[#FFD600]">05</span>
              </div>
              <h3 className="text-xl font-bold mb-6">Delivery & Guidance</h3>
              <div className="border-t border-dashed border-white/20 mb-6"></div>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Safe delivery of products and detailed guidance on how to use them.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-[#4d6a52]/40 border border-white/5 rounded-xl p-8 hover:bg-[#4d6a52]/60 transition-colors cursor-pointer">
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-xl font-bold">Step</span>
                <span className="text-4xl font-bold text-[#FFD600]">06</span>
              </div>
              <h3 className="text-xl font-bold mb-6">Ongoing Support</h3>
              <div className="border-t border-dashed border-white/20 mb-6"></div>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Continuous monitoring to track progress and adjust treatment if necessary.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-[#1b3320] text-white py-16 font-sans">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            {/* Left Column - Content Box */}
            <div className="border border-dashed border-white/20 rounded-2xl p-8 lg:p-12 flex flex-col justify-center h-full">
              <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-gray-300 mb-6">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#689f38]" fill="currentColor">
                  <path d="M12 1L13.5 8.5L21 7L15.5 12.5L19 20L12 15.5L5 20L8.5 12.5L3 7L10.5 8.5L12 1Z" />
                </svg>
                <span>Get Started</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Heal Naturally with<br />Greenderma
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed font-light mb-8 max-w-md">
                Join thousands of people who have found relief through our holistic approach to health. Our natural CBD solutions are crafted to support your physical and emotional well-being safely.
              </p>

              <div>
                <button onClick={(e) => handleScroll(e, 'contact')} className="bg-[#FFD600] text-black px-6 py-2.5 rounded font-bold hover:bg-yellow-400 transition-colors flex items-center text-sm cursor-pointer">
                  Contact Us <ChevronsRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full relative min-h-[300px] lg:min-h-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/greenderma-calltoaction.png"
                alt="Greenderma Call to Action"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#1b3320] text-white py-16 font-sans">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-gray-300 mb-4">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#689f38]" fill="currentColor">
                <path d="M12 1L13.5 8.5L21 7L15.5 12.5L19 20L12 15.5L5 20L8.5 12.5L3 7L10.5 8.5L12 1Z" />
              </svg>
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-center">
              Voices of Healing
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-6xl mx-auto">

            {/* Left Image */}
            <div className="h-full min-h-[400px]">
              <img
                src="/images/image-greenderma-depoimentos.png"
                alt="Greenderma Testimonials"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-6">

              {/* Testimonial Card */}
              <div className="bg-white rounded-2xl rounded-tr-none p-8 lg:p-12 relative flex flex-col items-center text-center flex-grow cursor-pointer group">
                {/* Top Right Cutout */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#1b3320] rounded-bl-[2.5rem] flex items-start justify-end p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>

                {/* Avatar */}
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />

                <h3 className="text-xl font-bold text-[#1b3320] mb-1">{testimonials[activeTestimonial].name}</h3>
                <p className="text-[#689f38] text-[10px] font-bold tracking-widest uppercase mb-6">{testimonials[activeTestimonial].role}</p>

                <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8 min-h-[80px]">
                  {testimonials[activeTestimonial].text}
                </p>

                {/* Navigation Dots */}
                <div className="flex items-center space-x-2 mt-auto">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${activeTestimonial === index ? 'bg-[#689f38] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                      aria-label={`Testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-6">

                {/* Stat 1 */}
                <div className="bg-[#4a5a46] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-[#FFD600] text-xs font-bold mb-3 max-w-[150px] leading-tight">Healing journeys guided by Greenderma.</p>
                  <p className="text-4xl lg:text-5xl font-bold text-white tracking-tight">1.4K+</p>
                </div>

                {/* Stat 2 */}
                <div className="border border-dashed border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">94.5%</p>
                  <p className="text-[#FFD600] text-xs font-bold">Natural Relief Score</p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Check Our Product Section */}
      <section id="products" className="bg-[#1b3320] text-white py-16 lg:py-24 font-sans">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-gray-300 mb-4">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#689f38]" fill="currentColor">
                <path d="M12 1L13.5 8.5L21 7L15.5 12.5L19 20L12 15.5L5 20L8.5 12.5L3 7L10.5 8.5L12 1Z" />
              </svg>
              <span>Check Our Product</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-center">
              Nature's Healing, Scientifically Crafted
            </h2>
          </div>

          {/* Products Carousel */}
          <div className="relative max-w-[1400px] mx-auto group/carousel">
            
            {/* Carousel Navigation - Left */}
            <button 
              onClick={scrollLeft}
              className="absolute left-2 md:-left-6 top-[150px] md:top-1/3 -translate-y-1/2 bg-[#1b3320]/90 md:bg-[#1b3320] p-2 md:p-3 rounded-full text-white hover:text-[#FFD600] transition-all opacity-100 md:opacity-0 group-hover/carousel:opacity-100 z-10 border border-white/20 flex shadow-xl cursor-pointer"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              className={`flex overflow-x-auto gap-8 scrollbar-hide pb-8 pt-4 px-4 ${isMouseDown ? 'snap-none cursor-grabbing select-none' : 'snap-x snap-mandatory cursor-grab'}`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <style dangerouslySetInnerHTML={{__html: `
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}} />
              {products.map((product) => (
                <div key={product.id} className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[350px] flex flex-col group/card cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <div className="bg-[#4a7c46] rounded-xl aspect-square mb-6 flex items-center justify-center p-8 relative overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold leading-tight min-h-[3.5rem] flex items-center group-hover/card:text-[#FFD600] transition-colors">{product.name}</h3>
                  </div>
                  <div className="w-full h-px bg-white/20 mb-4"></div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-8 font-light min-h-[6rem] line-clamp-4 flex-grow">
                    {product.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between w-full">
                    <span className="text-2xl font-bold whitespace-nowrap text-white">{product.price}</span>
                    <button onClick={(e) => { e.stopPropagation(); handleScroll(e, 'contact'); }} className="text-white text-xs font-bold flex items-center hover:text-[#FFD600] transition-colors uppercase tracking-wider cursor-pointer group/btn">
                      Order Now <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation - Right */}
            <button 
              onClick={scrollRight}
              className="absolute right-2 md:-right-6 top-[150px] md:top-1/3 -translate-y-1/2 bg-[#1b3320]/90 md:bg-[#1b3320] p-2 md:p-3 rounded-full text-white hover:text-[#FFD600] transition-all opacity-100 md:opacity-0 group-hover/carousel:opacity-100 z-10 border border-white/20 flex shadow-xl cursor-pointer"
              aria-label="Next products"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Mobile Swipe Indicator */}
            <div className="flex justify-center mt-2 md:hidden text-gray-400 text-xs items-center gap-2">
              <span>Swipe to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faq" className="bg-[#1b3320] text-white py-16 lg:py-24 font-sans">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-gray-300 mb-4">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#689f38]" fill="currentColor">
                <path d="M12 1L13.5 8.5L21 7L15.5 12.5L19 20L12 15.5L5 20L8.5 12.5L3 7L10.5 8.5L12 1Z" />
              </svg>
              <span>FAQs</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-center">
              Your Questions, Clearly Answered.
            </h2>
          </div>

          {/* Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveFaq(isActive ? null : index)}
                  className={`cursor-pointer rounded-xl transition-all duration-300 border ${isActive
                    ? 'border-dashed border-white/30 bg-transparent'
                    : 'border-transparent bg-[#548c4e] hover:bg-[#4a7c46]'
                    }`}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase">
                      {faq.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      {isActive ? (
                        <ArrowUp className="w-5 h-5 text-gray-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>

                  {isActive && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* Blog Section */}
      <section className="bg-[#162a1a] text-white py-16 lg:py-24 font-sans">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-gray-300 mb-4">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#689f38]" fill="currentColor">
                <path d="M12 1L13.5 8.5L21 7L15.5 12.5L19 20L12 15.5L5 20L8.5 12.5L3 7L10.5 8.5L12 1Z" />
              </svg>
              <span>Blog</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-center mb-8">
              Insights for a Healthier Mind & Body.
            </h2>
            <button className="bg-[#FFD600] text-black px-6 py-3 rounded font-bold text-sm hover:bg-yellow-400 transition-colors flex items-center cursor-pointer">
              Read More Insights <ChevronsRight className="ml-1 w-4 h-4" />
            </button>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-[#4a7c46] rounded-xl overflow-hidden flex flex-col group transition-transform hover:-translate-y-1">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 mb-4 text-[10px] font-bold tracking-widest uppercase text-gray-300">
                    <div className="flex items-center space-x-1.5">
                      <User className="w-3 h-3 text-[#FFD600]" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3 h-3 text-[#FFD600]" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-200 text-sm mb-6 line-clamp-3 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={() => setActiveArticle(post)}
                      className="bg-[#FFD600] text-black px-6 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition-colors cursor-pointer"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#1b3320] text-white py-16 lg:py-24 font-sans relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#689f38]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD600]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column: Contact info */}
            <div className="lg:w-1/2">
              <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-gray-300 mb-4">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#689f38]" fill="currentColor">
                  <path d="M12 1L13.5 8.5L21 7L15.5 12.5L19 20L12 15.5L5 20L8.5 12.5L3 7L10.5 8.5L12 1Z" />
                </svg>
                <span>Connect With Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Talk to a Specialist
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-12 font-light max-w-lg">
                Have questions about our products or therapeutic programs? Our team of experts is ready to help you on your wellness journey.
              </p>

              <div className="space-y-8">
                {/* Contact Item: Address */}
                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#4a7c46] p-4 rounded-xl group-hover:bg-[#FFD600] group-hover:text-black transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Our Location</h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      9107 WEST RUSSELL ROAD SUITE 100<br />
                      LAS VEGAS, NV 89148, USA
                    </p>
                  </div>
                </div>

                {/* Contact Item: Phone */}
                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#4a7c46] p-4 rounded-xl group-hover:bg-[#FFD600] group-hover:text-black transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">WhatsApp</h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      +1 (702) 555-0123<br />
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Contact Item: Email */}
                <div className="flex items-start space-x-6 group">
                  <div className="bg-[#4a7c46] p-4 rounded-xl group-hover:bg-[#FFD600] group-hover:text-black transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email Support</h3>
                    <p className="text-gray-400 font-light leading-relaxed hover:text-[#FFD600] transition-colors cursor-pointer">
                      contact@greendermacbd.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-[#162a1a] border border-white/5 p-8 lg:p-12 rounded-2xl shadow-2xl relative overflow-hidden group">
                {/* Visual accent */}
                <div className="absolute top-0 right-0 w-2 h-full bg-[#FFD600]" />
                
                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name" 
                        className="bg-[#1b3320] border border-white/10 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#FFD600] transition-colors font-light text-sm"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Email" 
                        className="bg-[#1b3320] border border-white/10 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#FFD600] transition-colors font-light text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2 ml-1">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="How can we help you?" 
                      rows={4}
                      className="bg-[#1b3320] border border-white/10 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#FFD600] transition-colors font-light text-sm resize-none"
                    ></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  {formStatus === 'success' && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-sm rounded-lg">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={formStatus === 'loading'}
                    className={`w-full bg-[#FFD600] text-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center group cursor-pointer ${formStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'loading' ? 'Sending...' : 'Send Message'} 
                    {formStatus !== 'loading' && <ChevronsRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Preview Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
          <div
            className="absolute inset-0 bg-[#0a1f12]/95 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="relative bg-[#1b3320] text-white border border-[#4a7c46] w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-[#FFD600] hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable Content */}
            <div className="w-full md:w-1/2 bg-[#4a7c46] flex items-center justify-center p-8 md:p-12 min-h-[300px]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full max-w-sm h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFD600] mb-4 leading-tight">
                {selectedProduct.name}
              </h2>
              <div className="text-3xl font-bold text-white mb-6">
                {selectedProduct.price}
              </div>
              <div className="w-full h-px bg-white/20 mb-6"></div>
              <p className="space-y-6 text-gray-300 leading-relaxed text-lg flex-grow shrink-0">
                {selectedProduct.description}
              </p>
              
              <div className="mt-8 pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={(e) => { 
                    handleScroll(e, 'contact'); 
                    setSelectedProduct(null); 
                  }}
                  className="flex-1 bg-[#FFD600] text-black px-6 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center cursor-pointer group"
                >
                  Order Now <ChevronsRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => alert('Certificate of Analysis (COA) will be available here soon.')}
                  className="flex-1 border-2 border-[#689f38] text-white px-6 py-4 rounded-lg font-bold hover:bg-[#689f38] transition-colors flex items-center justify-center cursor-pointer"
                >
                  View COA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
          <div
            className="absolute inset-0 bg-[#0a1f12]/95 backdrop-blur-sm"
            onClick={() => setActiveArticle(null)}
          ></div>
          <div className="relative bg-white text-gray-900 w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto">
              <div className="h-64 sm:h-80 md:h-96">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-6 text-xs font-bold tracking-widest uppercase text-[#689f38]">
                  <div className="flex items-center space-x-1.5">
                    <User className="w-4 h-4" />
                    <span>{activeArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{activeArticle.date}</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1b3320] mb-8 leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  {activeArticle.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  <p>
                    For more information about how Greenderma can help you on your health journey, please visit our products section or contact our specialist team.
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="bg-[#1b3320] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#2c4c32] transition-colors"
                  >
                    Back to Insights
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Information Popup Modal */}
      {activeInfoTopic && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
          <div
            className="absolute inset-0 bg-[#0a1f12]/95 backdrop-blur-sm"
            onClick={() => setActiveInfoTopic(null)}
          ></div>
          <div className="relative bg-[#1b3320] text-white border border-[#4a7c46] w-full max-w-2xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setActiveInfoTopic(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-[#FFD600] hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-12 overflow-y-auto flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFD600] mb-4 leading-tight">
                {activeInfoTopic.title}
              </h2>
              <div className="text-xl font-bold text-white mb-6">
                {activeInfoTopic.subtitle}
              </div>
              <div className="w-24 h-px bg-white/20 mb-6"></div>
              <p className="space-y-6 text-gray-300 leading-relaxed text-lg">
                {activeInfoTopic.content}
              </p>
              
              <div className="mt-8 pt-8 w-full border-t border-white/20 flex justify-center">
                <button
                  onClick={() => setActiveInfoTopic(null)}
                  className="bg-[#4a7c46] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#548c4e] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */ }
      <footer className="bg-[#162a1a] text-white py-16 lg:py-24 font-sans">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-12 lg:gap-0">

            {/* Quick Links */}
            <div className="flex flex-col lg:pr-12">
              <h3 className="text-2xl font-bold mb-8">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { title: 'Home', id: 'home' },
                  { title: 'About Us', id: 'about' },
                  { title: 'Products', id: 'products' },
                  { title: 'Contact', id: 'contact' },
                  { title: 'FAQs', id: 'faq' }
                ].map((link) => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`} 
                      onClick={(e) => handleScroll(e, link.id)} 
                      className="group flex items-center text-base cursor-pointer"
                    >
                      <ChevronsRight className="w-4 h-4 mr-2 text-white" />
                      <span className="text-[#689f38] group-hover:text-[#548c4e] transition-colors">{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center text-center lg:px-12 lg:border-x lg:border-dashed lg:border-white/20">
              <div className="flex items-center justify-center mb-6">
                <img src="/images/logo-greenderma.png" alt="Greenderma Logo" className="h-18 w-auto" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
                Greenderma is a pioneer in natural treatments and cannabis-based therapies, committed to offering health, wellness, and quality of life for all our patients.
              </p>

              <div className="w-full border border-dashed border-white/20 rounded-xl p-8 bg-transparent">
                <h4 className="text-xl sm:text-2xl font-bold mb-6">Stay in tune with <br className="sm:hidden" /> nature's healing power</h4>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row bg-[#3a6336] p-1.5 rounded-lg">
                  <input
                    type="email"
                    required
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    disabled={subscribeStatus === 'loading'}
                    placeholder="Your Email"
                    className="bg-transparent text-white placeholder-gray-300 px-4 py-2 outline-none flex-grow text-sm disabled:opacity-50"
                  />
                  <button 
                    type="submit"
                    disabled={subscribeStatus === 'loading'}
                    className="bg-[#FFD600] text-black px-6 py-2.5 rounded font-bold text-sm hover:bg-yellow-400 transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                {subscribeStatus === 'success' && (
                  <p className="text-[#FFD600] text-sm mt-3 text-left">Successfully subscribed to our newsletter!</p>
                )}
                {subscribeStatus === 'error' && (
                  <p className="text-red-400 text-sm mt-3 text-left">An error occurred. Please try again.</p>
                )}
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col lg:pl-12">
              <h3 className="text-2xl font-bold mb-8">Information</h3>
              <ul className="space-y-4">
                {infoTopics.map((topic) => (
                  <li key={topic.title}>
                    <a href="#" onClick={(e) => { e.preventDefault(); setActiveInfoTopic(topic); }} className="group flex items-center text-base cursor-pointer">
                      <ChevronRight className="w-4 h-4 mr-2 text-white" />
                      <span className="text-[#689f38] group-hover:text-[#548c4e] transition-colors">{topic.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Copyright and Credits */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Greenderma. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Made with love by <a href="https://www.brandibuilder.com" target="_blank" rel="noopener noreferrer" className="text-[#689f38] hover:text-[#548c4e] transition-colors cursor-pointer">Brandibuilder</a>
            </p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </>
  );
}
