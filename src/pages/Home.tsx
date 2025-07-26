import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Star, Sparkles ,  Presentation, Code, Gamepad2  } from 'lucide-react';



const Home = () => {
  const competitions = [
    {
      id: 'web-design',
      title: 'Web Design Competition',
      description: 'Create stunning digital experiences with modern web technologies. Showcase your skills in responsive design, user experience, and innovative digital solutions.',
      icon: <Code className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 'graphic design',
      title: 'Graphic Design Competition',
      description: 'Design and develop cutting-edge mobile applications that solve real-world problems. Focus on user-centric design and seamless functionality.',
      icon: <Trophy className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      id: 'presentation',
      title: 'Presentation Competition',
      description: 'Create secure and user-friendly digital identity solutions. Explore blockchain, biometrics, and advanced authentication methods.',
      icon: <Presentation className="h-8 w-8" />,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
    {
      id: 'esports',
      title: 'E-Sports Competition',
      description: 'Integrate artificial intelligence into practical applications. Demonstrate innovation in machine learning, natural language processing, and automation.',
      icon: <Gamepad2 className="h-8 w-8" />,
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },

    {
      id: 'hackathon',
      title: 'Hackathon Competition',
      description: 'Integrate artificial intelligence into practical applications. Demonstrate innovation in machine learning, natural language processing, and automation.',
      icon: <Star className="h-8 w-8" />,
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },

    {
      id: 'quiz',
      title: 'ICT quiz Competition',
      description: 'Integrate artificial intelligence into practical applications. Demonstrate innovation in machine learning, natural language processing, and automation.',
      icon: <Star className="h-8 w-8" />,
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },

  ];

  return (

    

    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90"></div>
        
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rotate-45"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border-2 border-yellow-300 rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rotate-45"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 border-2 border-blue-300 rotate-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              SPC ICT 
              <span className="block text-yellow-300"> ... </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Shape the future of digital identity through innovation, creativity, and cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/competitions"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Competitions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Competitions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities to showcase your skills and compete with the best minds in digital innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitions.map((competition) => (
              <div
                key={competition.id}
                className={`relative group ${competition.bgColor} ${competition.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-2 rounded-xl bg-gradient-to-r ${competition.color} text-white shadow-lg`}>
                    {competition.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {competition.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                      {competition.description}
                    </p>
                    <Link
                      to={`/competitions#${competition.id}`}
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${competition.color} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm`}
                    >
                      More Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make Your Mark?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of innovators and showcase your digital identity solutions to the world.
          </p>
          <Link
            to="/competitions"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;