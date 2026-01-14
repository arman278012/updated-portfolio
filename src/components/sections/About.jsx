import React from 'react';
import {
    User,
    Sparkles,
    Target,
    Heart,
    Code2,
    Globe,
    TrendingUp,
    MessageSquare,
    Rocket,
    Zap,
    Award,
    BookOpen
} from 'lucide-react';

export const About = () => {
    const passionPoints = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable code',
            color: 'from-blue-500 to-cyan-400'
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: 'Web Experiences',
            description: 'Creating exceptional user interfaces',
            color: 'from-purple-500 to-pink-400'
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Continuous Growth',
            description: 'Always learning, always improving',
            color: 'from-green-500 to-emerald-400'
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: 'Sharing Knowledge',
            description: 'Contributing to developer community',
            color: 'from-orange-500 to-red-400'
        }
    ];

    const stats = [
        { value: '2+', label: 'Years Experience', icon: '🔥' },
        { value: '50+', label: 'Projects Built', icon: '🚀' },
        { value: '100%', label: 'Passion', icon: '❤️' },
        { value: '∞', label: 'Learning Drive', icon: '📚' }
    ];

    return (
        <section id="about" className="relative py-24 bg-white overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl"></div>

            <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(to right, #f0f0f0 1px, transparent 1px),
                           linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)`,
                backgroundSize: '80px 80px',
                maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }}></div>
            <div className="text-center mb-16">

                <h2 className="text-5xl font-bold text-gray-900 mb-4">
                    <span className="relative">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            About me
                        </span>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    </span>
                </h2>
                {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div> */}
            </div>


            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                {/* <div className="text-center mb-20">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mb-6 shadow-lg">
                        <User className="w-12 h-12 text-blue-600" />
                        <Sparkles className="w-8 h-8 text-purple-500 -ml-4" />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        <span className="block">Hello, I'm</span>
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            A Frontend Developer
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Specializing in <span className="font-semibold text-blue-600">React.js</span> • <span className="font-semibold text-purple-600">Modern JavaScript</span> • <span className="font-semibold text-green-600">UI/UX Excellence</span>
                    </p>

                    <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div> */}

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

                    {/* Left Column - Main Content */}
                    <div className="space-y-8">
                        {/* Mission Statement */}
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">My Mission</h3>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To transform complex challenges into elegant, intuitive web solutions that deliver exceptional user experiences and drive business success.
                            </p>
                        </div>

                        {/* Personal Journey */}
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Rocket className="w-7 h-7 text-purple-600" />
                                My Journey
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                From a curiosity about how websites work to a dedicated pursuit of mastering modern web development. What started as a hobby has evolved into a professional passion for creating digital experiences that make a difference.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Today, I focus on building scalable applications with <span className="font-semibold text-blue-600">React.js</span>, sharing insights through <span className="font-semibold text-blue-600">LinkedIn content</span>, and continuously expanding my expertise in frontend technologies.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Visual Elements */}
                    <div className="space-y-8">
                        {/* Passion Points Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {passionPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${point.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="text-white">
                                            {point.icon}
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">{point.title}</h4>
                                    <p className="text-gray-600 text-sm">{point.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Stats Cards */}
                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-xl border border-blue-100">
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-2xl mb-2">{stat.icon}</div>
                                        <div className="text-gray-700 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>

                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                            <Zap className="w-5 h-5 text-white" />
                            <span className="text-white font-semibold">Currently Available</span>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-6">
                            Let's Build Something Amazing Together
                        </h3>

                        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                            I'm passionate about collaborating on innovative projects that push the boundaries of what's possible on the web.
                            Let's connect and create something exceptional.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>

                {/* Learning Philosophy */}
                <div className="mt-20 bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl">
                            <BookOpen className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Learning Philosophy</h3>
                            <p className="text-gray-600">Continuous growth through practice and sharing</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="font-medium text-gray-800">Daily coding practice & DSA</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span className="font-medium text-gray-800">Regular LinkedIn tech posts</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                <span className="font-medium text-gray-800">Open source contributions</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                                <span className="font-medium text-gray-800">Side project experimentation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <span className="font-medium text-gray-800">Tech community engagement</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                                <span className="font-medium text-gray-800">Mentoring junior developers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};