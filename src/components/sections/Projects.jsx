import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Moon, Sun, ChevronDown, Code2, Briefcase, GraduationCap, Award, User, FolderGit2 } from 'lucide-react';
import { ProjectCard } from '../common/ProjectCard';

export const Projects = () => {
    const projects = [
        {
            name: 'Admin Dashboard',
            description: 'Comprehensive admin panel with data visualization, user management, and analytics.',
            techStack: ['React', 'Redux', 'Tailwind CSS', 'Recharts'],
            features: ['User authentication', 'Real-time data updates', 'Interactive charts', 'Role-based access control']
        },
        {
            name: 'E-commerce Product Management',
            description: 'Full-featured product management system with cart functionality and checkout.',
            techStack: ['React', 'Redux Toolkit', 'Axios', 'Tailwind CSS'],
            features: ['Product CRUD operations', 'Shopping cart', 'Search and filters', 'Order management']
        },
        {
            name: 'Blog Management System',
            description: 'Content management platform for creating, editing, and publishing blog posts.',
            techStack: ['React', 'React Router', 'Formik', 'REST API'],
            features: ['Rich text editor', 'Category management', 'Draft saving', 'Comment system']
        },
        {
            name: 'Authentication System',
            description: 'Secure login and signup system with form validation and protected routes.',
            techStack: ['React', 'Formik', 'Axios', 'JWT'],
            features: ['User registration', 'Login/Logout', 'Password validation', 'Protected routes']
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">

                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        <span className="relative">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Featured Projects
                            </span>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        </span>
                    </h2>
                    {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};