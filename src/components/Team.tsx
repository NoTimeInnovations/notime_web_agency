import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Muhammed Rinshad S R',
    role: 'CEO of NoTime and Cravings',
    image: '/members/rinshad.png',
    linkedin: 'https://www.linkedin.com/in/muhammedrinshad/'
  },
  {
    name: 'Thrisha',
    role: 'CTO of NoTime',
    image: '/members/thrisha.jpg',
    linkedin: 'https://www.linkedin.com/in/thrishakannan/'
  },
  {
    name: 'Abhin',
    role: 'Full Stack Developer',
    image: '/members/abhin.png',
    linkedin: 'https://www.linkedin.com/in/abhin-ks-a98543258/'
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the <span className="text-cyan-400">Team</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The talented individuals behind NoTime's rapid development magic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                <div className="flex gap-3 justify-center">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
