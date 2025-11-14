import { Zap, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 text-sm font-medium">Launch Offer: 48-Hour Delivery</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            NoTime
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
          Your Website, Delivered in{' '}
          <span className="text-cyan-400 font-bold">48 Hours</span>
        </p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Professional business pages for your products and services. Lightning-fast development, stunning results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
          >
            View Our Work
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2">48h</div>
            <div className="text-slate-300">Rapid Delivery</div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
            <div className="text-slate-300">Projects Completed</div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-slate-300">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}
