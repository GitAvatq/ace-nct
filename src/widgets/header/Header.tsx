"use client"
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useThemeContext } from "@/app/providers/ThemeProvider";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/react";
import logo from "@/../public/acenct-logo.svg"
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

const Header = () => {
    const t = useTranslations('HomePage');
    const { handleToggle, dark } = useThemeContext()

    return (
        <header className="py-4 px-2.5 bg-white dark:bg-dark dark:text-white">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between">
                <div className="cursor-pointer">
                    <Image loading="eager" src={logo} width={60} height={80} alt="Logo" />
                    <p className="text-base font-medium">AceNCT</p>
                </div>

                <nav className="max-lg:hidden">
                    <ul className="flex items-center gap-9">
                        <li>
                            <Link href={"#"} className="dark:text-white relative cursor-pointer text-[18px] font-medium text-black after:absolute after:left-0 
                            after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-vintage after:transition-all after:duration-300 hover:after:w-full">
                                {t("header.homeTitle")}
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"} className="dark:text-white relative cursor-pointer text-[18px] font-medium text-black after:absolute after:left-0 
                            after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-vintage after:transition-all after:duration-300 hover:after:w-full">
                                {t("header.testsTitle")}
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"} className="dark:text-white relative cursor-pointer text-[18px] font-medium text-black after:absolute after:left-0 
                            after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-vintage after:transition-all after:duration-300 hover:after:w-full">
                                {t("header.subjectsTitle")}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-4 items-center">
                    <Switch
                        isSelected={dark}
                        onValueChange={handleToggle}
                        startContent={<Sun />}
                        endContent={<Moon />}
                        size="lg"
                        color="default"
                    />
                    <p className="navitem">
                        {t("buttons.login")}
                    </p>
                    <Button color="success"> {t("buttons.signUp")}</Button>
                </div>
            </div>
        </header>

    );
}

export default Header