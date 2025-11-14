import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build <span className="text-cyan-400">Together</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Ready to launch your website in 48 hours? Get in touch with us today
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12">
          

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <p className="text-slate-400">info@notime.co.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone Us</h3>
                  <p className="text-slate-400">+91 9447156765</p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
