import React, { useState } from 'react';
import {
  Briefcase,
  Rocket,
  TrendingUp,
  BookOpen,
  Calendar,
  Award,
  ChevronRight,
  Zap,
  Target,
  Star,
  Clock,
  MapPin
} from 'lucide-react';

export const Experience = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const experiences = {
    professional: [
      {
        title: 'React Developer',
        company: 'Tech Company',
        period: '2023 - Present',
        location: 'Remote',
        description: 'Building scalable web applications with modern React ecosystem',
        achievements: [
          'Led development of 5+ React applications',
          'Improved performance by 40% through code optimization',
          'Mentored 3 junior developers',
          'Reduced bugs by 60% with testing strategies'
        ],
        skills: ['React', 'Redux', 'TypeScript', 'Tailwind', 'Jest'],
        color: 'blue',
        icon: '🚀'
      },
      {
        title: 'Frontend Engineer',
        company: 'Startup Inc',
        period: '2022 - 2023',
        location: 'San Francisco, CA',
        description: 'Developed user-facing features and collaborated with design team',
        achievements: [
          'Built responsive dashboards for 10K+ users',
          'Integrated 3rd-party APIs for payment systems',
          'Improved page load speed by 50%',
          'Implemented A/B testing framework'
        ],
        skills: ['JavaScript', 'React', 'CSS3', 'API', 'Git'],
        color: 'purple',
        icon: '💻'
      },
      {
        title: 'Web Developer',
        company: 'Digital Agency',
        period: '2021 - 2022',
        location: 'Remote',
        description: 'Created client websites and web applications',
        achievements: [
          'Delivered 20+ client projects on time',
          'Increased client satisfaction scores by 30%',
          'Developed reusable component library',
          'Optimized sites for Core Web Vitals'
        ],
        skills: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'SEO'],
        color: 'green',
        icon: '🌐'
      }
    ],
    learning: [
      {
        title: 'React Native Development',
        company: 'Self-Learning',
        period: 'Current',
        location: 'Online',
        description: 'Building cross-platform mobile applications',
        achievements: [
          'Completed 2 mobile app projects',
          'Mastered navigation and state management',
          'Integrated native device features',
          'Published apps to stores'
        ],
        skills: ['React Native', 'Expo', 'Mobile UI', 'Native APIs'],
        color: 'pink',
        icon: '📱'
      },
      {
        title: 'Data Structures & Algorithms',
        company: 'Practice Platform',
        period: 'Ongoing',
        location: 'LeetCode / Codeforces',
        description: 'Solving complex problems to improve problem-solving skills',
        achievements: [
          'Solved 300+ coding problems',
          'Top 20% in coding contests',
          'Mastered 20+ DSA patterns',
          'Improved problem-solving speed by 70%'
        ],
        skills: ['C++', 'Algorithms', 'Problem Solving', 'Optimization'],
        color: 'orange',
        icon: '🧠'
      },
      {
        title: 'Full Stack Development',
        company: 'Personal Projects',
        period: '2023 - Present',
        location: 'GitHub',
        description: 'Building end-to-end web applications',
        achievements: [
          'Created 3 full-stack applications',
          'Implemented authentication systems',
          'Deployed to cloud platforms',
          'Achieved 95% test coverage'
        ],
        skills: ['Node.js', 'MongoDB', 'Express', 'AWS', 'Docker'],
        color: 'cyan',
        icon: '⚡'
      }
    ]
  };

  const stats = [
    { value: '3+', label: 'Years Experience', icon: <Calendar className="w-6 h-6" /> },
    { value: '50+', label: 'Projects Completed', icon: <Briefcase className="w-6 h-6" /> },
    { value: '100%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { value: '∞', label: 'Learning Mode', icon: <BookOpen className="w-6 h-6" /> }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl mb-6">
            <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <Rocket className="w-6 h-6 text-purple-500 dark:text-purple-400 -ml-2" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and continuous learning path in web development
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-8"></div>
        </div> */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </span>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-5">
              My professional journey and continuous learning path in web development
            </p>
          </h2>
        </div>


        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="inline-flex p-2 rounded-lg bg-white dark:bg-gray-900 mb-2">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('professional')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'professional'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            <Briefcase className="w-5 h-5" />
            Professional Experience
          </button>
          <button
            onClick={() => setActiveTab('learning')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'learning'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            <BookOpen className="w-5 h-5" />
            Learning Journey
          </button>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences[activeTab].map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
            >
              {/* Left accent border */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-lg ${exp.color === 'blue' ? 'bg-gradient-to-b from-blue-500 to-cyan-400' :
                exp.color === 'purple' ? 'bg-gradient-to-b from-purple-500 to-pink-400' :
                  exp.color === 'green' ? 'bg-gradient-to-b from-green-500 to-emerald-400' :
                    exp.color === 'pink' ? 'bg-gradient-to-b from-pink-500 to-rose-400' :
                      exp.color === 'orange' ? 'bg-gradient-to-b from-orange-500 to-yellow-400' :
                        'bg-gradient-to-b from-cyan-500 to-blue-400'
                }`}></div>

              <div className="relative pl-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="text-3xl">{exp.icon}</div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    <Award className="w-5 h-5 text-blue-500" />
                    Key Achievements
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    <Zap className="w-5 h-5 text-purple-500" />
                    Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronRight className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Legend */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Career Path</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2021</div>
              <div className="text-gray-600 dark:text-gray-400">Started Web Development</div>
            </div>
            <div className="hidden md:block">
              <TrendingUp className="w-12 h-12 text-gray-300 dark:text-gray-600" />
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">2022</div>
              <div className="text-gray-600 dark:text-gray-400">Frontend Specialization</div>
            </div>
            <div className="hidden md:block">
              <TrendingUp className="w-12 h-12 text-gray-300 dark:text-gray-600" />
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">2023</div>
              <div className="text-gray-600 dark:text-gray-400">React & Full Stack</div>
            </div>
            <div className="hidden md:block">
              <TrendingUp className="w-12 h-12 text-gray-300 dark:text-gray-600" />
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">2024</div>
              <div className="text-gray-600 dark:text-gray-400">Advanced & Mobile</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};