import React from 'react';
import { ExternalLink, Calendar, Users, Award, Sparkles,  Trophy, Star, Code } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Competitions = () => {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100); // slight delay to ensure render
    }
  }
}, [location]);

  const competitions = [
    {
      id: 'web-design',
      title: 'Web Design Competition',
      description: 'Create stunning digital experiences with modern web technologies. Showcase your skills in responsive design, user experience, and innovative digital solutions that push the boundaries of what\'s possible on the web.',
      longDescription: 'This competition focuses on creating exceptional web experiences that demonstrate mastery of modern development practices. Participants will be evaluated on design aesthetics, technical implementation, user experience, accessibility, and innovation. The challenge encourages the use of cutting-edge technologies and frameworks to create responsive, performant, and visually striking websites.',
      icon: <Code className="h-12 w-12" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      deadline: 'March 15, 2025',
      participants: '250+ registered',
      prize: '$5,000',
      requirements: [
        'Responsive design for all devices',
        'Modern CSS frameworks or vanilla CSS',
        'JavaScript interactivity',
        'Accessibility compliance (WCAG 2.1)',
        'Performance optimization',
      ],
    },
    {
      id: 'graphic design',
      title: 'Graphic Design Competition',
      description: 'Design visually compelling graphics and digital artwork. Demonstrate your creativity in branding, illustration, and visual communication.',
      longDescription: 'The Graphic Design Competition challenges participants to create outstanding visual designs that communicate effectively and aesthetically. Participants will be evaluated on creativity, technical skill, concept development, and visual impact. Projects can include branding materials, digital illustrations, poster designs, or comprehensive visual identity systems.',
      icon: <Trophy className="h-12 w-12" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      deadline: 'April 20, 2025',
      participants: '180+ registered',
      prize: '$7,500',
      requirements: [
        'Original creative concept',
        'Professional design execution',
        'Appropriate use of typography',
        'Color theory application',
        'High-resolution final deliverables',
      ],
    },
    {
      id: 'presentation',
      title: 'Presentation Competition',
      description: 'Deliver compelling presentations on technology topics. Showcase your communication skills and ability to explain complex concepts clearly.',
      longDescription: 'The Presentation Competition evaluates participants on their ability to communicate complex technical concepts in an engaging and understandable manner. Presentations should demonstrate deep knowledge of the chosen topic, clear structure, effective visual aids, and strong delivery skills. Topics can range from emerging technologies to innovative solutions for real-world problems.',
      icon: <Users className="h-12 w-12" />,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      deadline: 'May 10, 2025',
      participants: '320+ registered',
      prize: '$10,000',
      requirements: [
        'Clear presentation structure',
        'Engaging visual aids',
        'Technical accuracy',
        '15-20 minute duration',
        'Q&A session participation',
      ],
    },
    {
      id: 'esports',
      title: 'E-Sports Competition',
      description: 'Compete in popular esports titles and showcase your gaming skills. Battle against other participants in various competitive gaming tournaments.',
      longDescription: 'The E-Sports Competition brings together skilled gamers to compete in various popular gaming titles. Participants will compete in both individual and team-based tournaments across multiple game genres. The competition emphasizes strategic thinking, quick reflexes, teamwork, and sportsmanship in competitive gaming environments.',
      icon: <Star className="h-12 w-12" />,
      color: 'from-teal-500 to-green-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      deadline: 'June 5, 2025',
      participants: '150+ registered',
      prize: '$6,000',
      requirements: [
        'Gaming equipment proficiency',
        'Fair play and sportsmanship',
        'Team coordination skills',
        'Tournament bracket participation',
        'Adherence to game rules',
      ],
    },
    {
      id: 'hackathon',
      title: 'Hackathon Competition (Game Jam Competition)',
      description: 'Develop innovative games and applications within a limited timeframe. Collaborate with teams to create functional prototypes and creative solutions.',
      longDescription: 'The Hackathon Competition challenges participants to develop innovative games and applications within a compressed timeframe. Teams will work collaboratively to create functional prototypes that demonstrate creativity, technical skill, and problem-solving abilities. The competition emphasizes rapid development, creative thinking, and effective teamwork under pressure.',
      icon: <Sparkles className="h-12 w-12" />,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      deadline: 'July 15, 2025',
      participants: '200+ registered',
      prize: '$8,000',
      requirements: [
        'Functional prototype delivery',
        'Team collaboration',
        'Creative problem solving',
        'Time management skills',
        'Presentation of final product',
      ],
    },
    {
      id: 'quiz',
      title: 'ICT Quiz Competition',
      description: 'Test your knowledge of Information and Communication Technology. Compete in challenging quizzes covering various ICT topics and current trends.',
      longDescription: 'The ICT Quiz Competition tests participants\' comprehensive knowledge of Information and Communication Technology. The quiz covers a wide range of topics including computer science fundamentals, networking, cybersecurity, emerging technologies, and current industry trends. Participants will demonstrate their theoretical knowledge and practical understanding of ICT concepts.',
      icon: <Trophy className="h-12 w-12" />,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      deadline: 'August 20, 2025',
      participants: '400+ registered',
      prize: '$4,000',
      requirements: [
        'ICT knowledge proficiency',
        'Quick thinking and recall',
        'Multiple choice format',
        'Timed question rounds',
        'Fair competition conduct',
      ],
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Competition Details
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into each competition and discover the opportunities waiting for you. 
            Choose your challenge and start building the future.
          </p>
        </div>

        {/* Competition Details */}
        <div className="space-y-16">
          {competitions.map((competition, index) => (
            <div
              key={competition.id}
              id={competition.id}
              className={`${competition.bgColor} ${competition.borderColor} border-2 rounded-3xl p-8 lg:p-12`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${competition.color} text-white shadow-lg`}>
                      {competition.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {competition.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {competition.description}
                  </p>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {competition.longDescription}
                  </p>

                  {/* Requirements */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Requirements</h3>
                    <ul className="space-y-3">
                      {competition.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${competition.color} mt-2`}></div>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Registration CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${competition.color} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      Register for Competition
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </button>
                    <div className="text-sm text-gray-600 flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Registration form will be added here
                    </div>
                  </div>
                </div>

                {/* Sidebar Info */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Competition Info</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Deadline</p>
                          <p className="font-semibold text-gray-900">{competition.deadline}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Participants</p>
                          <p className="font-semibold text-gray-900">{competition.participants}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Prize Pool</p>
                          <p className="font-semibold text-gray-900">{competition.prize}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3">Quick Navigation</h4>
                      <div className="space-y-2">
                        {competitions.map((comp, idx) => (
                          <button
                            key={comp.id}
                            onClick={() => scrollToSection(comp.id)}
                            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                              comp.id === competition.id
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {comp.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Compete?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your competition and start building innovative solutions that could change the world.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Browse All Competitions
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Competitions;