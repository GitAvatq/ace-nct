import React from 'react';
import Link from 'next/link';
import {
    Calculator,
    Atom,
    BookOpen,
    Dna,
    Globe,
    Beaker,
    BookText,
    Languages,
    Sparkles,
    ArrowRight
} from 'lucide-react';
import { Badge } from '@/shared/badge/Badge';

interface ISubjectCardProps {
    title: string;
    icon: React.ReactNode;
    gradientFrom: string;
    gradientTo: string;
    emoji?: string;
    href: string;
    description: string;
    testCount: number;
}

const SubjectCard = ({
    title,
    icon,
    gradientFrom,
    gradientTo,
    emoji,
    href,
    description,
    testCount
}: ISubjectCardProps) => {
    return (
        <Link href={href} className="group block">
            <div className="relative p-6 bg-white dark:bg-[#1E1E2E] rounded-2xl 
                          shadow-sm hover:shadow-xl dark:shadow-gray-900/30
                          border border-gray-100 dark:border-gray-800
                          hover:border-[#3D8D7A]/30 dark:hover:border-[#3D8D7A]/50
                          transition-all duration-300
                          hover:-translate-y-1">

                {/* Верхний акцентный градиент */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} 
                              rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Иконка и эмодзи */}
                <div className="relative mb-5">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} 
                                  flex items-center justify-center text-white shadow-md
                                  group-hover:shadow-lg group-hover:scale-105 
                                  transition-all duration-300`}>
                        <span className="text-2xl">{icon}</span>
                    </div>
                    {emoji && (
                        <span className="absolute -top-2 -right-2 text-2xl 
                                       opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {emoji}
                        </span>
                    )}
                </div>

                <div className="space-y-3">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 
                                     group-hover:text-[#1C352D] dark:group-hover:text-[#4AB8A0] 
                                     transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`}></div>
                            <span className="text-xs text-gray-400 dark:text-gray-500">{testCount} тестов</span>
                        </div>

                        <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 
                                             group-hover:text-[#3D8D7A] dark:group-hover:text-[#4AB8A0]
                                             group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

const PopularSubjects = () => {
    const subjects = [
        {
            title: "Математика",
            description: "Алгебра, геометрия, тригонометрия",
            icon: <Calculator size={32} />,
            emoji: "📐",
            gradientFrom: "from-[#1C352D]",
            gradientTo: "to-[#2a4a3f]",
            href: "/subjects/mathematics",
            testCount: 48
        },
        {
            title: "Физика",
            description: "Механика, оптика, электричество",
            icon: <Atom size={32} />,
            emoji: "⚡",
            gradientFrom: "from-[#3D8D7A]",
            gradientTo: "to-[#2b6455]",
            href: "/subjects/physics",
            testCount: 36
        },
        {
            title: "История",
            description: "Всемирная история, история страны",
            icon: <BookOpen size={32} />,
            emoji: "📜",
            gradientFrom: "from-[#1C352D]",
            gradientTo: "to-[#3D8D7A]",
            href: "/subjects/history",
            testCount: 42
        },
        {
            title: "Биология",
            description: "Ботаника, зоология, анатомия",
            icon: <Dna size={32} />,
            emoji: "🧬",
            gradientFrom: "from-[#3D8D7A]",
            gradientTo: "to-[#1C352D]",
            href: "/subjects/biology",
            testCount: 31
        },
        {
            title: "География",
            description: "Физическая и экономическая география",
            icon: <Globe size={32} />,
            emoji: "🌍",
            gradientFrom: "from-[#1C352D]",
            gradientTo: "to-[#3D8D7A]",
            href: "/subjects/geography",
            testCount: 28
        },
        {
            title: "Химия",
            description: "Неорганическая и органическая",
            icon: <Beaker size={32} />,
            emoji: "🧪",
            gradientFrom: "from-[#3D8D7A]",
            gradientTo: "to-[#2b6455]",
            href: "/subjects/chemistry",
            testCount: 34
        },
        {
            title: "Литература",
            description: "Классическая и современная",
            icon: <BookText size={32} />,
            emoji: "📚",
            gradientFrom: "from-[#1C352D]",
            gradientTo: "to-[#2a4a3f]",
            href: "/subjects/literature",
            testCount: 27
        },
        {
            title: "Русский язык",
            description: "Грамматика и орфография",
            icon: <Languages size={32} />,
            emoji: "🔤",
            gradientFrom: "from-[#3D8D7A]",
            gradientTo: "to-[#1C352D]",
            href: "/subjects/russian",
            testCount: 39
        },
        {
            title: "Информатика",
            description: "Программирование, алгоритмы",
            icon: <Calculator size={32} />,
            emoji: "💻",
            gradientFrom: "from-[#1C352D]",
            gradientTo: "to-[#3D8D7A]",
            href: "/subjects/informatics",
            testCount: 25
        },
        {
            title: "Английский язык",
            description: "Грамматика, лексика",
            icon: <Languages size={32} />,
            emoji: "🇬🇧",
            gradientFrom: "from-[#3D8D7A]",
            gradientTo: "to-[#1C352D]",
            href: "/subjects/english",
            testCount: 33
        }
    ];

    const displayedSubjects = subjects.slice(0, 10);

    return (
        <section className="relative py-24 overflow-hidden 
                          bg-white dark:bg-[#0A0A0F]">

            <div className="absolute inset-0 overflow-hidden pointer-events-none 
                          dark:hidden block">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br 
                              from-[#1C352D]/5 to-[#3D8D7A]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr 
                              from-[#3D8D7A]/5 to-[#1C352D]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none 
                          hidden dark:block">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br 
                              from-[#1C352D]/20 to-[#3D8D7A]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr 
                              from-[#3D8D7A]/20 to-[#1C352D]/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-[1280px] mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center mb-16">
                      <Badge
                        icon={Sparkles}
                        title='Предметы'
                    />

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#1C352D] to-[#3D8D7A] 
                                       bg-clip-text text-transparent">
                            Популярные предметы
                        </span>
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        Выбери предмет и начни подготовку прямо сейчас
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {displayedSubjects.map((subject, index) => (
                        <SubjectCard
                            key={index}
                            title={subject.title}
                            description={subject.description}
                            icon={subject.icon}
                            emoji={subject.emoji}
                            gradientFrom={subject.gradientFrom}
                            gradientTo={subject.gradientTo}
                            href={subject.href}
                            testCount={subject.testCount}
                        />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        href="/subjects"
                        className="group inline-flex items-center gap-3 px-8 py-4 
                                 bg-gradient-to-r from-[#1C352D] to-[#3D8D7A] 
                                 text-white rounded-xl font-semibold
                                 hover:shadow-2xl hover:shadow-[#3D8D7A]/30 
                                 dark:hover:shadow-[#3D8D7A]/20
                                 transform hover:-translate-y-0.5
                                 transition-all duration-300"
                    >
                        <span>Все предметы</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 
                                             transition-transform duration-300" />
                    </Link>

                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
                        и еще 5 предметов в разработке
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PopularSubjects;