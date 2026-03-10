// src/components/Advantages.tsx
import React from 'react';
import {
    LayoutGrid,
    Brain,
    TrendingUp,
    Sparkles,
    ArrowUpRight
} from 'lucide-react';
import { Badge } from '@/shared/badge/Badge';

interface IAdvantageCardProps {
    problem: string;
    solution: string;
    icon: React.ReactNode;
    number: number;
}

const AdvantageCard = ({ problem, solution, icon, number }: IAdvantageCardProps) => {
    return (
        <div className="group relative isolate">
            {/* Карточка */}
            <div className="relative bg-white/90 dark:bg-[#1E1E2E]/90 backdrop-blur-sm 
                          rounded-3xl p-8 
                          border border-gray-100 dark:border-gray-800 shadow-sm
                          hover:shadow-2xl hover:shadow-[#3D8D7A]/20 dark:hover:shadow-[#3D8D7A]/10
                          hover:border-[#3D8D7A]/20 dark:hover:border-[#3D8D7A]/30
                          transition-all duration-500 ease-out
                          hover:-translate-y-2
                          z-10">

                {/* Декоративный уголок */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br 
                              from-[#1C352D]/5 dark:from-[#3D8D7A]/10 
                              to-[#3D8D7A]/5 dark:to-[#1C352D]/10 
                              rounded-bl-[100px] rounded-tr-3xl -z-10"></div>

                {/* Номер и иконка */}
                <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl font-black 
                                  text-[#1C352D]/10 dark:text-white/10 
                                  group-hover:text-[#1C352D]/20 dark:group-hover:text-white/20 
                                  transition-colors duration-500">
                        {number}
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1C352D] to-[#3D8D7A] 
                                  rounded-2xl flex items-center justify-center text-white
                                  shadow-lg shadow-[#3D8D7A]/20 dark:shadow-[#3D8D7A]/40
                                  group-hover:scale-110 group-hover:rotate-3 
                                  group-hover:shadow-xl group-hover:shadow-[#3D8D7A]/30 
                                  dark:group-hover:shadow-[#3D8D7A]/50
                                  transition-all duration-500">
                        {icon}
                    </div>
                </div>

                {/* Контент */}
                <div className="space-y-4">
                    {/* Проблема */}
                    <div>
                        <span className="text-xs font-medium text-gray-400 dark:text-gray-500 
                                       uppercase tracking-[0.2em]">
                            Проблема
                        </span>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                            {problem}
                        </p>
                    </div>

                    {/* Разделитель */}
                    <div className="relative py-2">
                        <div className="absolute left-0 right-0 h-px bg-gradient-to-r 
                                      from-transparent via-[#3D8D7A]/20 dark:via-[#3D8D7A]/40 
                                      to-transparent"></div>
                        <ArrowUpRight className="relative mx-auto w-4 h-4 text-[#3D8D7A] 
                                               bg-white dark:bg-[#1E1E2E] rotate-45 
                                               rounded-full" />
                    </div>

                    {/* Решение */}
                    <div>
                        <span className="text-xs font-medium text-[#3D8D7A] 
                                       dark:text-[#4AB8A0] uppercase tracking-[0.2em]">
                            Решение
                        </span>
                        <p className="font-semibold text-gray-800 dark:text-gray-200 
                                   mt-2 text-lg leading-tight">
                            {solution}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Advantages = () => {
    const advantages = [
        {
            number: 1,
            problem: "Посты с ответами тонут в мемах и рекламе. Невозможно найти нужную тему.",
            solution: "Все темы структурированы по классам и предметам. Нашел — решил — запомнил.",
            icon: <LayoutGrid size={24} />,
        },
        {
            number: 2,
            problem: "Списал ответ и забыл. На экзамене — ступор.",
            solution: "Разбор каждой ошибки с объяснениями. Понимаешь, а не зазубриваешь.",
            icon: <Brain size={24} />,
        },
        {
            number: 3,
            problem: "Не видишь прогресс. Демотивация и брошенная подготовка.",
            solution: "Детальная статистика и графики. Видишь свой рост и слабые места.",
            icon: <TrendingUp size={24} />,
        }
    ];

    return (
        <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 
                          dark:from-[#0A0A0F] dark:to-[#111117] overflow-hidden">

            {/* Фоновые декоративные элементы для светлой темы */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none 
                          dark:hidden block">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br 
                              from-[#1C352D]/5 to-[#3D8D7A]/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr 
                              from-[#3D8D7A]/5 to-[#1C352D]/5 rounded-full blur-3xl"></div>
            </div>

            {/* Фоновые декоративные элементы для темной темы */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none 
                          hidden dark:block">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br 
                              from-[#1C352D]/20 to-[#3D8D7A]/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr 
                              from-[#3D8D7A]/20 to-[#1C352D]/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-[1280px] mx-auto px-4">
                {/* Заголовок */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <Badge icon={Sparkles} title='Почему мы?' />

                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        <span className="bg-gradient-to-r from-[#1C352D] to-[#3D8D7A] 
                                       bg-clip-text text-transparent">
                            Думаешь как в Telegram?
                        </span>
                        <br />
                        <span className="text-gray-800 dark:text-gray-200">
                            Мы предлагаем систему
                        </span>
                    </h2>

                    <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                        Хватит собирать ответы по крупицам в мессенджерах.
                        Начни готовиться по-настоящему.
                    </p>
                </div>

                {/* Сетка карточек */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {advantages.map((item, index) => (
                        <AdvantageCard
                            key={index}
                            number={item.number}
                            problem={item.problem}
                            solution={item.solution}
                            icon={item.icon}
                        />
                    ))}
                </div>

                {/* CTA Блок */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 
                                  p-1 bg-white dark:bg-[#1E1E2E] rounded-2xl 
                                  shadow-lg hover:shadow-xl dark:shadow-gray-900/50
                                  transition-shadow">
                        <span className="text-gray-500 dark:text-gray-400 px-4">
                            Готов начать системно?
                        </span>
                        <button className="group relative inline-flex items-center gap-2 
                                         bg-gradient-to-r from-[#1C352D] to-[#3D8D7A] 
                                         text-white px-8 py-3 rounded-xl font-semibold
                                         overflow-hidden transition-all duration-300
                                         hover:shadow-2xl hover:shadow-[#3D8D7A]/30 
                                         dark:hover:shadow-[#3D8D7A]/20
                                         hover:scale-105 active:scale-100">
                            <span className="relative z-10">Попробовать бесплатно</span>
                            <ArrowUpRight className="relative z-10 w-5 h-5 
                                                   group-hover:translate-x-0.5 
                                                   group-hover:-translate-y-0.5 
                                                   transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r 
                                          from-[#3D8D7A] to-[#1C352D] opacity-0 
                                          group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Нижний разделитель */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 mt-32">
                <div className="h-px bg-gradient-to-r from-transparent 
                              via-[#0B666A]/20 dark:via-[#3D8D7A]/30 to-transparent">
                </div>
            </div>
        </section>
    );
};

export default Advantages;