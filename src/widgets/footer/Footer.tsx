import { IconTelegram } from 'nucleo-social-media';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Instagram', icon: '📱', href: 'https://instagram.com', color: 'hover:text-pink-500' },
        { name: 'TikTok', icon: '🎵', href: 'https://tiktok.com', color: 'hover:text-black' },
        { name: 'YouTube', icon: '▶️', href: 'https://youtube.com', color: 'hover:text-red-600' },
        { name: 'VK', icon: '📘', href: 'https://vk.com', color: 'hover:text-blue-600' },
    ];

    return (
        <footer className='bg-[#1C352D] text-white/90'>
            <div className='max-w-[1280px] mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div>
                        <h3 className='text-xl font-bold mb-4 text-white'>Подготовка к НЦТ</h3>
                        <p className='text-sm text-white/70 leading-relaxed'>
                            Системная подготовка к экзаменам для 9-11 классов. Тесты, разборы ошибок и отслеживание прогресса.
                        </p>

                        <Link
                            href={"https://t.me/your_channel"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-2 mt-4 bg-white/20 hover:bg-white/50 transition-colors px-4 py-2 rounded-lg text-sm'
                        >
                            <span><IconTelegram /></span>
                            <span>Наш Telegram-канал</span>
                        </Link>
                    </div>

                    <div>
                        <h3 className='text-xl font-bold mb-4 text-white'>Быстрые ссылки</h3>
                        <ul className='space-y-2 text-sm text-white/70'>
                            <li>
                                <Link href="/" className='hover:text-white transition-colors'>
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link href="/tests" className='hover:text-white transition-colors'>
                                    Тесты
                                </Link>
                            </li>
                            <li>
                                <Link href="/subjects" className='hover:text-white transition-colors'>
                                    Предметы
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className='hover:text-white transition-colors'>
                                    Блог
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className='hover:text-white transition-colors'>
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-bold mb-4 text-white'>Контакты</h3>
                        <ul className='space-y-3 text-sm text-white/70'>
                            <li className='flex items-start gap-3'>
                                <span>📧</span>
                                <a href="mailto:support@nctprep.kz" className='hover:text-white transition-colors'>
                                    support@acenct.kg
                                </a>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span>📱</span>
                                <a href="tel:+996508100165" className='hover:text-white transition-colors'>
                                    +996 508 100 165
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-bold mb-4 text-white'>Мы в соцсетях</h3>

                        <div className='flex flex-wrap gap-3 mb-6'>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-xl transition-all hover:bg-white/20 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Форма подписки (опционально) */}
                        <div>
                            <p className='text-sm text-white/70 mb-2'>Подпишись на новости и новые тесты</p>
                            <div className='flex'>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className='flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/40'
                                />
                                <button className='px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-r-lg text-sm font-medium'>
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-t border-white/10'>
                <div className='max-w-[1280px] mx-auto px-4 py-4'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50'>
                        <div>
                            © {currentYear} Подготовка к НЦТ. Все права защищены.
                        </div>
                        <div className='flex gap-4'>
                            <Link href="/privacy" className='hover:text-white/70 transition-colors'>
                                Политика конфиденциальности
                            </Link>
                            <span>|</span>
                            <Link href="/terms" className='hover:text-white/70 transition-colors'>
                                Условия использования
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;