import { Palette, Code, Rocket, Smartphone, ShoppingCart, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Unique, modern designs tailored to your brand identity and business goals'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Clean, optimized code using the latest technologies for peak performance'
  },
  {
    icon: Smartphone,
    title: 'Responsive Layout',
    description: 'Perfect experience across all devices - desktop, tablet, and mobile'
  },
  {
    icon: ShoppingCart,
    title: 'WhatsApp Commerce',
    description: 'Setup a simple store which converts customers to Whatsapp'
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Search engine optimized to help your business get discovered online'
  },
  {
    icon: Rocket,
    title: 'Fast Deployment',
    description: 'Quick turnaround without compromising quality or attention to detail'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We <span className="text-cyan-400">Build</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional websites and digital solutions designed to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
