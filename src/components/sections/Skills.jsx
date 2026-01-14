import React, { useState, useEffect } from 'react';
import {
  Code2,
  Sparkles,
  Zap,
  Cpu,
  Palette,
  Server,
  Smartphone,
  Database,
  Cloud,
  GitBranch,
  Layers,
  Globe,
  Shield,
  Terminal,
  Wifi,
  CircuitBoard,
  Cpu as Chip
} from 'lucide-react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = {
    frontend: {
      color: 'border-blue-200 bg-blue-50 hover:bg-blue-100',
      glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]',
      icon: <Palette className="w-6 h-6 text-blue-600" />,
      skills: [
        { name: 'React.js', icon: '⚛️', level: 'advanced' },
        { name: 'JavaScript', icon: '🔧', level: 'advanced' },
        { name: 'TypeScript', icon: '📘', level: 'intermediate' },
        { name: 'Next.js', icon: '⏭️', level: 'intermediate' },
        { name: 'Tailwind CSS', icon: '🎨', level: 'advanced' },
        { name: 'HTML5', icon: '📄', level: 'expert' },
        // { name: 'CSS3', icon: '🎭', level: 'expert' },
        { name: 'Redux', icon: '🔄', level: 'advanced' }
      ]
    },
    backend: {
      color: 'border-purple-200 bg-purple-50 hover:bg-purple-100',
      glow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]',
      icon: <Server className="w-6 h-6 text-purple-600" />,
      skills: [
        { name: 'Node.js', icon: '🟢', level: 'intermediate' },
        { name: 'Express', icon: '⚡', level: 'intermediate' },
        { name: 'REST APIs', icon: '🔌', level: 'advanced' },
        { name: 'MongoDB', icon: '🍃', level: 'intermediate' },
        { name: 'Firebase', icon: '🔥', level: 'intermediate' },
        { name: 'GraphQL', icon: '📈', level: 'learning' },
        { name: 'Python', icon: '🐍', level: 'intermediate' }
      ]
    },
    tools: {
      color: 'border-green-200 bg-green-50 hover:bg-green-100',
      glow: 'hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]',
      icon: <Terminal className="w-6 h-6 text-green-600" />,
      skills: [
        { name: 'Git & GitHub', icon: '🐙', level: 'advanced' },
        { name: 'VS Code', icon: '💻', level: 'expert' },
        // { name: 'Figma', icon: '🎨', level: 'intermediate' },
        { name: 'Docker', icon: '🐳', level: 'learning' },
        { name: 'AWS', icon: '☁️', level: 'learning' },
        // { name: 'Jest', icon: '🧪', level: 'intermediate' },
        // { name: 'Webpack', icon: '📦', level: 'intermediate' }
      ]
    },
    mobile: {
      color: 'border-pink-200 bg-pink-50 hover:bg-pink-100',
      glow: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]',
      icon: <Smartphone className="w-6 h-6 text-pink-600" />,
      skills: [
        { name: 'React Native', icon: '📱', level: 'intermediate' },
        { name: 'Expo', icon: '⚡', level: 'intermediate' },
        // { name: 'Mobile UI', icon: '📲', level: 'intermediate' },
        // { name: 'PWA', icon: '🔗', level: 'learning' }
      ]
    }
  };

  const levelColors = {
    expert: 'from-blue-500 to-cyan-400',
    advanced: 'from-purple-500 to-pink-400',
    intermediate: 'from-green-500 to-emerald-400',
    learning: 'from-yellow-500 to-orange-400'
  };

  const allSkills = Object.values(skillsData).flatMap(cat => cat.skills);
  const filteredSkills = activeCategory === 'all'
    ? allSkills
    : skillsData[activeCategory]?.skills || [];

  // Create hexagonal grid effect
  const HexagonSkill = ({ skill, categoryKey, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), index * 100);
      return () => clearTimeout(timer);
    }, [index]);

    return (
      <div
        className={`
          relative transform transition-all duration-500
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
          hover:z-10
        `}
        onMouseEnter={() => setHoveredSkill(skill.name)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        {/* Hexagon Shape */}
        <div className={`
          relative w-40 h-44 flex items-center justify-center
          ${skillsData[categoryKey]?.color}
          border-2 rounded-2xl
          ${skillsData[categoryKey]?.glow}
          transition-all duration-300
          hover:-translate-y-3
          ${hoveredSkill === skill.name ? 'scale-110' : 'scale-100'}
        `}>
          {/* Decorative Corner */}
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-current opacity-20 rounded-tr-xl"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-current opacity-20 rounded-bl-xl"></div>

          {/* Skill Content */}
          <div className="text-center p-6">
            <div className="text-4xl mb-3">{skill.icon}</div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">{skill.name}</h3>

            {/* Level Indicator (Dots) */}
            <div className="flex justify-center space-x-1">
              {['expert', 'advanced', 'intermediate', 'learning'].map((level, idx) => (
                <div
                  key={idx}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${skill.level === level
                      ? `bg-gradient-to-r ${levelColors[level]} scale-125`
                      : 'bg-gray-300'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
              <CircuitBoard className="w-12 h-12 text-blue-600" />
              <Sparkles className="w-8 h-8 text-purple-500 -ml-3" />
            </div>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tech Stack
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Technologies I work with to build exceptional digital experiences
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveCategory('all')}
              className={`
                px-6 py-3 rounded-xl font-semibold transition-all duration-300
                ${activeCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border-2 border-gray-100 hover:border-blue-200'
                }
              `}
            >
              <Globe className="inline-block w-5 h-5 mr-2" />
              All Skills
            </button>

            {Object.entries(skillsData).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`
                  px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  flex items-center gap-2
                  ${activeCategory === key
                    ? 'bg-white text-gray-800 shadow-lg border-2'
                    : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:border-gray-200'
                  }
                  ${key === 'frontend' && activeCategory === key ? 'border-blue-200' : ''}
                  ${key === 'backend' && activeCategory === key ? 'border-purple-200' : ''}
                  ${key === 'tools' && activeCategory === key ? 'border-green-200' : ''}
                  ${key === 'mobile' && activeCategory === key ? 'border-pink-200' : ''}
                `}
              >
                {category.icon}
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid - Hexagonal Layout */}
        <div className="relative min-h-[600px]">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Skills Container */}
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className={`
                  transform transition-all duration-700
                  hover:scale-105 hover:z-10
                  ${hoveredSkill === skill.name ? 'scale-110' : 'scale-100'}
                `}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Hexagon Card */}
                <div className={`
                  relative w-44 h-48 flex flex-col items-center justify-center
                  bg-white border-2 rounded-3xl
                  transition-all duration-300
                  ${skillsData[activeCategory === 'all'
                    ? Object.keys(skillsData).find(key =>
                      skillsData[key].skills.some(s => s.name === skill.name)
                    )
                    : activeCategory]?.color.split(' ')[0].replace('border-', 'border-')}
                  ${hoveredSkill === skill.name ? 'shadow-2xl' : 'shadow-lg'}
                  group
                `}>
                  {/* Floating Icon Background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="text-8xl">{skill.icon}</div>
                  </div>

                  {/* Main Content */}
                  <div className="relative z-10 text-center p-6">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 text-xl mb-2">{skill.name}</h3>

                    {/* Skill Level Badge */}
                    <span className={`
                      inline-block px-3 py-1 rounded-full text-xs font-semibold
                      ${skill.level === 'expert' ? 'bg-blue-100 text-blue-700' : ''}
                      ${skill.level === 'advanced' ? 'bg-purple-100 text-purple-700' : ''}
                      ${skill.level === 'intermediate' ? 'bg-green-100 text-green-700' : ''}
                      ${skill.level === 'learning' ? 'bg-yellow-100 text-yellow-700' : ''}
                    `}>
                      {skill.level}
                    </span>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-current opacity-20"></div>
                  <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-current opacity-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-24 p-8 bg-gradient-to-r from-gray-50 to-white rounded-3xl border border-gray-100 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Object.entries(levelColors).map(([level, gradient]) => (
              <div key={level} className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center`}>
                  {level === 'expert' && <Zap className="w-5 h-5 text-white" />}
                  {level === 'advanced' && <Cpu className="w-5 h-5 text-white" />}
                  {level === 'intermediate' && <Layers className="w-5 h-5 text-white" />}
                  {level === 'learning' && <Sparkles className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 capitalize">{level}</h4>
                  <p className="text-sm text-gray-600">
                    {level === 'expert' && 'Extensive experience'}
                    {level === 'advanced' && 'Strong proficiency'}
                    {level === 'intermediate' && 'Working knowledge'}
                    {level === 'learning' && 'Currently exploring'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {allSkills.length}+
              </div>
              <div className="text-gray-600 text-sm">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {Object.keys(skillsData).length}
              </div>
              <div className="text-gray-600 text-sm">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};