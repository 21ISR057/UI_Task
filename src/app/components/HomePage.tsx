import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Target, 
  Shield, 
  BarChart3, 
  Lightbulb,
  CheckCircle,
  Star,
  Zap,
  Award
} from 'lucide-react';

export function HomePage() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzUzMzI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "VentureCapital helped us secure $2M in Series A funding. Their network and guidance were invaluable in scaling our SaaS platform."
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1769071166862-8cc3a6f2ac5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczNTQ2Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "The team's expertise in healthcare technology made all the difference. We went from idea to market leader in 18 months."
    },
    {
      name: "Emily Watson",
      role: "CTO, AI Innovations",
      image: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzUyNjQyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: "Outstanding support throughout our funding journey. Their strategic insights helped us achieve a successful exit within 3 years."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">VentureCapital</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
              <Link to="/form" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Apply</Link>
              <Link 
                to="/login" 
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all text-sm font-medium shadow-sm"
              >
                Sign In
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Now Accepting Applications
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fund Your Next Big Venture
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with investors who believe in your vision. Get the funding, mentorship, and resources you need to scale your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/form" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 font-medium shadow-sm group"
                >
                  Apply for Funding
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/login" 
                  className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all inline-flex items-center justify-center gap-2 font-medium"
                >
                  Investor Portal
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Fast approval</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-20 blur-2xl"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzM1NDYyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business team collaboration"
                className="rounded-2xl shadow-xl relative w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">$2.5B+</div>
              <div className="text-sm text-gray-600">Total Invested</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">350+</div>
              <div className="text-sm text-gray-600">Companies Funded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">89%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">1,200+</div>
              <div className="text-sm text-gray-600">Active Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VentureCapital</h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive support to help startups scale and investors maximize returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Guidance",
                description: "Expert mentorship and strategic planning to help your venture reach its full potential"
              },
              {
                icon: Users,
                title: "Network Access",
                description: "Connect with industry leaders, partners, and resources to accelerate growth"
              },
              {
                icon: BarChart3,
                title: "Data-Driven Insights",
                description: "Advanced analytics and market intelligence to make informed investment decisions"
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Comprehensive due diligence and risk assessment for secure investments"
              },
              {
                icon: Lightbulb,
                title: "Innovation Focus",
                description: "Supporting cutting-edge technologies and disruptive business models"
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description: "Consistent returns and successful exits across multiple sectors and stages"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Success stories from entrepreneurs who transformed their vision into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <ImageWithFallback 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of successful ventures that have raised funding through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/form" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all inline-flex items-center justify-center gap-2 font-medium shadow-lg group"
            >
              Start Your Application
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/login" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all inline-flex items-center justify-center font-medium"
            >
              Access Investor Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
