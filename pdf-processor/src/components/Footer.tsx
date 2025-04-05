'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { SocialIcons } from './SocialIcons';

type FooterSection = {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
};

const footerLinks: {
  ar: FooterSection[];
  en: FooterSection[];
  hi: FooterSection[];
  zh: FooterSection[];
} = {
  ar: [
    {
      title: 'الأدوات',
      links: [
        { name: 'تحويل PDF إلى Word', href: '/tools/convert' },
        { name: 'تحويل الصور إلى PDF', href: '/tools/convert' },
        { name: 'دمج ملفات PDF', href: '/tools/merge' },
        { name: 'ضغط PDF', href: '/tools/compress' }
      ]
    },
    {
      title: 'تعرف علينا',
      links: [
        { name: 'من نحن', href: '/about' },
        { name: 'المدونة', href: '/blog' },
        { name: 'تواصل معنا', href: '/contact' },
        { name: 'الخصوصية', href: '/privacy' },
        { name: 'حذف البيانات', href: '/data-deletion' }
      ]
    },
    {
      title: 'المصادر',
      links: [
        { name: 'الأسئلة الشائعة', href: '/faqs' },
        { name: 'الدليل الإرشادي', href: '/docs' },
        { name: 'مركز المساعدة', href: '/help' },
        { name: 'الباقات', href: '/pricing' }
      ]
    },
    {
      title: 'آخر المقالات',
      links: [
        { name: 'كيفية تحويل PDF إلى Word', href: '/blog/how-to-convert-pdf-to-word' },
        { name: 'مميزات PDF Processor الجديدة', href: '/blog/new-features-overview' },
        { name: 'دليل تحويل الصور إلى PDF', href: '/blog/complete-guide-images-to-pdf' }
      ]
    }
  ],
  en: [
    {
      title: 'Tools',
      links: [
        { name: 'PDF to Word', href: '/tools/convert' },
        { name: 'Images to PDF', href: '/tools/convert' },
        { name: 'Merge PDFs', href: '/tools/merge' },
        { name: 'Compress PDF', href: '/tools/compress' }
      ]
    },
    {
      title: 'About Us',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Data Deletion', href: '/data-deletion' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'FAQs', href: '/faqs' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Help Center', href: '/help' },
        { name: 'Pricing', href: '/pricing' }
      ]
    },
    {
      title: 'Latest Posts',
      links: [
        { name: 'How to Convert PDF to Word', href: '/blog/how-to-convert-pdf-to-word' },
        { name: 'New PDF Processor Features', href: '/blog/new-features-overview' },
        { name: 'Guide to Converting Images to PDF', href: '/blog/complete-guide-images-to-pdf' }
      ]
    }
  ],
  hi: [
    {
      title: 'उपकरण',
      links: [
        { name: 'PDF से Word में बदलें', href: '/tools/convert' },
        { name: 'छवियों को PDF में बदलें', href: '/tools/convert' },
        { name: 'PDF को मर्ज करें', href: '/tools/merge' },
        { name: 'PDF कम्प्रेस करें', href: '/tools/compress' }
      ]
    },
    {
      title: 'हमारे बारे में',
      links: [
        { name: 'परिचय', href: '/about' },
        { name: 'ब्लॉग', href: '/blog' },
        { name: 'संपर्क करें', href: '/contact' },
        { name: 'गोपनीयता', href: '/privacy' },
        { name: 'डेटा डिलीशन', href: '/data-deletion' }
      ]
    },
    {
      title: 'संसाधन',
      links: [
        { name: 'सामान्य प्रश्न', href: '/faqs' },
        { name: 'प्रलेखन', href: '/docs' },
        { name: 'सहायता केंद्र', href: '/help' },
        { name: 'मूल्य निर्धारण', href: '/pricing' }
      ]
    },
    {
      title: 'नवीनतम पोस्ट',
      links: [
        { name: 'PDF को Word में कैसे बदलें', href: '/blog/how-to-convert-pdf-to-word' },
        { name: 'नई PDF प्रोसेसर सुविधाएं', href: '/blog/new-features-overview' },
        { name: 'छवियों को PDF में बदलने की गाइड', href: '/blog/complete-guide-images-to-pdf' }
      ]
    }
  ],
  zh: [
    {
      title: '工具',
      links: [
        { name: 'PDF转Word', href: '/tools/convert' },
        { name: '图片转PDF', href: '/tools/convert' },
        { name: '合并PDF', href: '/tools/merge' },
        { name: '压缩PDF', href: '/tools/compress' }
      ]
    },
    {
      title: '关于我们',
      links: [
        { name: '关于', href: '/about' },
        { name: '博客', href: '/blog' },
        { name: '联系我们', href: '/contact' },
        { name: '隐私政策', href: '/privacy' },
        { name: '数据删除', href: '/data-deletion' }
      ]
    },
    {
      title: '资源',
      links: [
        { name: '常见问题', href: '/faqs' },
        { name: '文档', href: '/docs' },
        { name: '帮助中心', href: '/help' },
        { name: '定价', href: '/pricing' }
      ]
    },
    {
      title: '最新文章',
      links: [
        { name: '如何将PDF转换为Word', href: '/blog/how-to-convert-pdf-to-word' },
        { name: 'PDF处理器新功能', href: '/blog/new-features-overview' },
        { name: '图片转PDF完整指南', href: '/blog/complete-guide-images-to-pdf' }
      ]
    }
  ]
};

const contactInfo = {
  ar: {
    needHelp: 'تحتاج مساعدة؟ تواصل معنا',
  },
  en: {
    needHelp: 'Need help? Contact us',
  },
  hi: {
    needHelp: 'मदद चाहिए? हमसे संपर्क करें',
  },
  zh: {
    needHelp: '需要帮助？联系我们',
  }
};

export function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const currentLang = i18n.language as 'ar' | 'en' | 'hi' | 'zh';

  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Social Icons */}
        <div className="max-w-3xl mx-auto mb-16">
          <SocialIcons />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {footerLinks[currentLang].map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul role="list" className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-900/10 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} PDF Processor. {t('common.allRightsReserved')}
            </p>
            
            {/* Contact Info */}
            <div className="flex items-center gap-8">
              <a 
                href="mailto:support@pdfprocessor.com"
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                support@pdfprocessor.com
              </a>
              <Link
                href="/contact"
                className="text-sm text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
              >
                {contactInfo[currentLang].needHelp}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
