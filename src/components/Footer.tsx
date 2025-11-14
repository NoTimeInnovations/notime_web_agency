import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">NoTime</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Professional websites delivered in 48 hours. Quality, speed, and innovation combined.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">E-Commerce</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Custom Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">SEO Optimization</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; 2024 NoTime Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
