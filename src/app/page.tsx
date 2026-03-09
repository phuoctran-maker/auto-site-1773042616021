import React from 'react';
import { Coffee, Star, Clock, MapPin, Phone, Instagram, Facebook, Twitter, Heart, Leaf, Award } from 'lucide-react';

export default function CafeLandingPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="text-amber-400 w-7 h-7" />
            <span className="text-xl font-bold tracking-tight text-amber-400">BrewHaven</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
            <a href="#features" className="hover:text-amber-400 transition-colors">Features</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
          <button className="bg-amber-400 text-stone-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-300 transition-colors">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-600/15 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>Rated #1 Coffee Shop in the City</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            <span className="text-stone-100">Sip Into</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Pure Bliss
            </span>
          </h1>

          <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Handcrafted coffee made with love and the finest beans from around the world. 
            Your perfect cup is waiting for you at BrewHaven.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-amber-400 text-stone-950 px-8 py-4 rounded-full font-bold text-base hover:bg-amber-300 transition-all hover:scale-105 shadow-lg shadow-amber-400/20">
              Explore Our Menu
            </button>
            <button className="w-full sm:w-auto border border-stone-700 text-stone-300 px-8 py-4 rounded-full font-semibold text-base hover:border-amber-400 hover:text-amber-400 transition-all">
              Find a Location
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: '15+', label: 'Years of Craft' },
              { value: '50K+', label: 'Happy Customers' },
              { value: '30+', label: 'Unique Blends' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-amber-400">{stat.value}</div>
                <div className="text-stone-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-600 text-xs">
          <span>Scroll Down</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-600 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 leading-tight">
              Where Every Cup <br />
              <span className="text-amber-400">Tells a Story</span>
            </h2>
            <p className="text-stone-400 leading-relaxed mb-6">
              Founded in 2009, BrewHaven was born from a simple passion — creating the perfect cup of coffee. 
              We source our beans directly from sustainable farms across Ethiopia, Colombia, and Vietnam, 
              ensuring every sip supports both quality and community.
            </p>
            <p className="text-stone-400 leading-relaxed mb-8">
              Our baristas are trained artisans who pour their heart into every beverage, from classic 
              espresso to innovative seasonal creations. We believe coffee is more than a drink — it's an experience.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['bg-amber-400', 'bg-orange-400', 'bg-amber-600', 'bg-orange-600'].map((color, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full ${color} border-2 border-stone-950 flex items-center justify-center text-stone-950 font-bold text-xs`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-stone-400 text-sm">
                <span className="text-amber-400 font-semibold">4.9/5</span> from 2,400+ reviews
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-10 border border-stone-800">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '☕', title: 'Espresso Bar', desc: 'Classic & modern espresso' },
                  { icon: '🌿', title: 'Plant Based', desc: '10+ milk alternatives' },
                  { icon: '🫘', title: 'Fresh Beans', desc: 'Roasted every morning' },
                  { icon: '🎵', title: 'Cozy Vibes', desc: 'Live music on weekends' },
                ].map((item) => (
                  <div key={item.title} className="bg-stone-800/60 rounded-2xl p-5 hover:bg-stone-800 transition-colors">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-stone-200 text-sm">{item.title}</div>
                    <div className="text-stone-500 text-xs mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-amber-400 text-stone-950 rounded-2xl px-4 py-3 text-center shadow-xl">
              <div className="text-2xl font-black">99%</div>
              <div className="text-xs font-semibold">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 px-6 bg-stone-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Crafted to <span className="text-amber-400">Perfection</span>
            </h2>
            <p className="text-stone-400 mt-4 max-w-xl mx-auto">
              From rich espresso to refreshing cold brews, explore our handcrafted selection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Signature Espresso',
                desc: 'Double shot with rich crema, smooth and bold',
                price: '$4.50',
                tag: 'Bestseller',
                emoji: '☕',
                gradient: 'from-amber-900/40 to-stone-800',
              },
              {
                name: 'Caramel Cloud Latte',
                desc: 'Silky steamed milk, espresso & house caramel drizzle',
                price: '$6.00',
                tag: 'Fan Favorite',
                emoji: '🥛',
                gradient: 'from-orange-900/40 to-stone-800',
              },
              {
                name: 'Cold Brew Tonic',
                desc: 'Slow-steeped cold brew over tonic water & citrus',
                price: '$5.50',
                tag: 'Seasonal',
                emoji: '🧊',
                gradient: 'from-amber-800/40 to-stone-800',
              },
              {
                name: 'Matcha Mist',
                desc: 'Ceremonial grade matcha with oat milk & honey',
                price: '$5.00',
                tag: 'Healthy',
                emoji: '🍵',
                gradient: 'from-green-900/30 to-stone-800',
              },
              {
                name: 'Hazelnut Mocha',
                desc: 'Dark chocolate, espresso & toasted hazelnut syrup',
                price: '$6.50',
                tag: 'Indulgent',
                emoji: '🍫',
                gradient: 'from-amber-950/60 to-stone-800',
              },
              {
                name: 'Sunrise Blend',
                desc: 'Single origin Ethiopian pour-over with floral notes',
                price: '$5.00',
                tag: 'Specialty',
                emoji: '🌄',
                gradient: 'from-orange-800/30 to-stone-800',
              },
            ].map((item) => (
              <div
                key={item.name}
                className={`bg-gradient-to-br ${item.gradient} border border-stone-800 rounded-2xl p-6 hover:border-amber-400/40 transition-all hover:-translate-y-1 cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{item.emoji}</span>
                  <span className="text-xs bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full font-medium">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-stone-100 text-lg mb-2">{item.name}</h3>
                <p className="text-stone-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-black text-xl">{item.price}</span>
                  <button className="text-xs text-stone-400 group-hover:text-amber-400 transition-colors font-medium">
                    Add to order →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Why BrewHaven</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">
              More Than Just <span className="text-amber-400">Coffee</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-7 h-7" />,
                title: 'Sustainably Sourced',
                desc: 'We partner directly with 20+ certified organic farms, ensuring fair wages and eco-friendly growing practices for every bean we use.',
                highlight: 'Eco Friendly',
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: 'Award-Winning Roasts',
                desc: 'Our master roasters have won 12 national awards. Each batch is roasted in small quantities to guarantee peak freshness and flavor.',
                highlight: '12 Awards',
              },
              {
                icon: <Heart className="w-7 h-7" />,
                title: 'Community First',
                desc: 'A portion of every sale goes to local community programs. We host weekly events, workshops, and open mic nights for our neighborhood.',
                highlight: 'Give Back',
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: 'Open Early, Stay