import Image from "next/image";
import heroImg from "./assets/hero-image.png"
import { Flame } from 'lucide-react';
import { ContactButton } from "@/shared/cta-btn/ContactButton";
import { Badge } from "@/shared/badge/Badge";

const Hero = () => {
    return (
        <div className='pt-6 sm:pt-8 md:pt-10 overflow-hidden dark:bg-[#0A0A0F]'>
            <div className='max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-10 lg:gap-12'>
                <div className='flex flex-col gap-4 sm:gap-5 items-start w-full lg:w-1/2 text-center lg:text-left'>
                    <Badge title="НЦТ 2026" icon={Flame} />
                    <h1 className='max-sm:text-2xl max-md:text-3xl text-4xl font-jost font-medium 
                                   text-[#0B666A] dark:text-[#4AB8A0] leading-[52px] max-sm:leading-8'>
                        Подготовка к НЦТ для 9-11 классов с системой тестов и разборов
                    </h1>
                    <p className='text-sm sm:text-base md:text-[17px] text-gray-600 dark:text-gray-300 
                                opacity-75 max-w-2xl mx-auto lg:mx-0'>
                        Надоело искать ответы в Telegram? Начни системную подготовку
                        с тестами и мгновенной проверкой.
                    </p>
                    <div className="w-full sm:w-auto flex justify-center lg:justify-start mt-2">
                        <ContactButton
                            href="/test"
                            title="Пройти пробный тест"
                            icon={Flame}
                        />
                    </div>
                </div>

                <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 relative'>
                    <div className="relative">
                        <div className="absolute -top-4 -right-4 w-24 h-24 
                                      bg-gradient-to-br from-[#0B666A]/20 to-[#35A29F]/20 
                                      dark:from-[#1C352D]/30 dark:to-[#3D8D7A]/30
                                      rounded-full blur-2xl -z-10">
                        </div>
                        <Image
                            src={heroImg}
                            alt='Hero image'
                            className="w-full h-auto drop-shadow-2xl
                                     dark:brightness-90 dark:contrast-125"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 mt-8 sm:mt-10 md:mt-12">
                <div className="h-px bg-gradient-to-r from-transparent 
                              via-[#0B666A]/20 dark:via-[#3D8D7A]/30 to-transparent">
                </div>
            </div>
        </div>
    );
};

export default Hero;