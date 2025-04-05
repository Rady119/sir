export type BlogContent = Array<{
  type: 'paragraph' | 'heading' | 'list-item' | 'image';
  content: string;
  caption?: string;
}>;

export interface BlogPost {
  id: string;
  translations: {
    ar: {
      title: string;
      excerpt: string;
      content: BlogContent;
    };
    en: {
      title: string;
      excerpt: string;
      content: BlogContent;
    };
  };
  slug: string;
  category: 'tutorial' | 'feature' | 'guide' | 'update';
  coverImage: string;
  author: {
    name: {
      ar: string;
      en: string;
    };
    image:string;
  };
  publishedAt: string;
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '3',
    translations: {
      ar: {
        title: 'تحويل الصور إلى PDF: دليلك الشامل',
        excerpt: 'تعرف على كيفية تحويل صورك إلى ملف PDF احترافي بجودة عالية وبخطوات بسيطة',
        content: [
          {
            type: 'paragraph',
            content: 'تعلم كيفية تحويل الصور إلى PDF باحترافية:'
          },
          {
            type: 'heading',
            content: '1. اختيار الصور'
          },
          {
            type: 'list-item',
            content: 'قم بتحميل الصور التي تريد تحويلها (JPG, PNG, GIF)'
          },
          {
            type: 'list-item',
            content: 'يمكنك اختيار صور متعددة في نفس الوقت'
          },
          {
            type: 'heading',
            content: '2. تخصيص الإعدادات'
          },
          {
            type: 'list-item',
            content: 'اختر جودة الإخراج وحجم الصفحة'
          },
          {
            type: 'list-item',
            content: 'حدد ترتيب الصور في الملف النهائي'
          },
          {
            type: 'heading',
            content: '3. التحويل والتنزيل'
          },
          {
            type: 'list-item',
            content: 'انقر على زر "تحويل" واحصل على ملف PDF احترافي'
          }
        ]
      },
      en: {
        title: 'Converting Images to PDF: Your Complete Guide',
        excerpt: 'Learn how to convert your images into professional PDF files with high quality and simple steps',
        content: [
          {
            type: 'paragraph',
            content: 'Learn how to professionally convert images to PDF:'
          },
          {
            type: 'heading',
            content: '1. Select Images'
          },
          {
            type: 'list-item',
            content: 'Upload the images you want to convert (JPG, PNG, GIF)'
          },
          {
            type: 'list-item',
            content: 'You can select multiple images at once'
          },
          {
            type: 'heading',
            content: '2. Customize Settings'
          },
          {
            type: 'list-item',
            content: 'Choose output quality and page size'
          },
          {
            type: 'list-item',
            content: 'Set the order of images in the final file'
          },
          {
            type: 'heading',
            content: '3. Convert and Download'
          },
          {
            type: 'list-item',
            content: 'Click "Convert" and get your professional PDF file'
          }
        ]
      }
    },
    slug: 'converting-images-to-pdf',
    category: 'tutorial',
    coverImage: '/blog/image-to-pdf.jpg',
    author: {
      name: {
        ar: 'فريق PDF Processor',
        en: 'PDFSIR Team'
      },
      image: '/blog/default.png'
    },
    publishedAt: '2025-03-21',
    readingTime: 4
  },
  {
    id: '2',
    translations: {
      ar: {
        title: 'دمج ملفات PDF: كل ما تحتاج معرفته',
        excerpt: 'دليل مفصل لدمج عدة ملفات PDF في ملف واحد مع الحفاظ على جودة المحتوى',
        content: [
          {
            type: 'paragraph',
            content: 'تعرف على كيفية دمج ملفات PDF بكفاءة:'
          },
          {
            type: 'heading',
            content: '1. تحميل الملفات'
          },
          {
            type: 'list-item',
            content: 'اختر ملفات PDF التي تريد دمجها'
          },
          {
            type: 'list-item',
            content: 'يمكنك تحميل حتى 10 ملفات في المرة الواحدة'
          },
          {
            type: 'heading',
            content: '2. تنظيم الملفات'
          },
          {
            type: 'list-item',
            content: 'رتب الملفات بالترتيب المطلوب'
          },
          {
            type: 'list-item',
            content: 'اضبط إعدادات الدمج حسب احتياجاتك'
          },
          {
            type: 'heading',
            content: '3. الدمج والتحميل'
          },
          {
            type: 'list-item',
            content: 'انقر على زر "دمج" للحصول على الملف النهائي'
          }
        ]
      },
      en: {
        title: 'Merging PDF Files: Everything You Need to Know',
        excerpt: 'A detailed guide to combining multiple PDF files into one while maintaining content quality',
        content: [
          {
            type: 'paragraph',
            content: 'Learn how to efficiently merge PDF files:'
          },
          {
            type: 'heading',
            content: '1. Upload Files'
          },
          {
            type: 'list-item',
            content: 'Select the PDF files you want to merge'
          },
          {
            type: 'list-item',
            content: 'You can upload up to 10 files at once'
          },
          {
            type: 'heading',
            content: '2. Organize Files'
          },
          {
            type: 'list-item',
            content: 'Arrange files in desired order'
          },
          {
            type: 'list-item',
            content: 'Adjust merge settings according to your needs'
          },
          {
            type: 'heading',
            content: '3. Merge and Download'
          },
          {
            type: 'list-item',
            content: 'Click "Merge" to get your final file'
          }
        ]
      }
    },
    slug: 'merging-pdf-files',
    category: 'tutorial',
    coverImage: '/blog/pdf-merge.jpg',
    author: {
      name: {
        ar: 'فريق PDF Processor',
        en: 'PDFSIR Team'
      },
      image: '/blog/default.png'
    },
    publishedAt: '2025-03-20',
    readingTime: 4
  },
  {
    id: '1',
    translations: {
      ar: {
        title: 'كيفية تحويل ملفات PDF إلى Word بخطوات بسيطة',
        excerpt: 'دليل شامل لتحويل ملفات PDF إلى مستندات Word قابلة للتحرير مع الحفاظ على التنسيق الأصلي',
        content: [
          {
            type: 'paragraph',
            content: 'تعرف على كيفية تحويل ملفات PDF إلى تنسيق Word بسهولة وكفاءة:'
          },
          {
            type: 'heading',
            content: '1. تحميل الملف'
          },
          {
            type: 'list-item',
            content: 'اختر ملف PDF الذي تريد تحويله'
          },
          {
            type: 'list-item',
            content: 'تأكد من أن حجم الملف لا يتجاوز 10 ميجابايت'
          },
          {
            type: 'image',
            content: '/blog/upload-interface.jpg',
            caption: 'واجهة تحميل الملفات السهلة الاستخدام'
          },
          {
            type: 'heading',
            content: '2. اختيار التنسيق'
          },
          {
            type: 'list-item',
            content: 'حدد تنسيق الإخراج (DOCX)'
          },
          {
            type: 'image',
            content: '/public/blog/format-selection.jpg',
            caption: 'اختيار تنسيق الملف المطلوب'
          },
          {
            type: 'heading',
            content: '3. بدء التحويل'
          },
          {
            type: 'list-item',
            content: 'انقر على زر "تحويل"'
          },
          {
            type: 'image',
            content: '/blog/conversion-process.jpg',
            caption: 'عملية التحويل في تقدم'
          }
        ]
      },
      en: {
        title: 'How to Convert PDF Files to Word in Simple Steps',
        excerpt: 'A comprehensive guide to converting PDF files to editable Word documents while maintaining original formatting',
        content: [
          {
            type: 'paragraph',
            content: 'Learn how to convert PDF files to Word format easily and efficiently:'
          },
          {
            type: 'heading',
            content: '1. Upload File'
          },
          {
            type: 'list-item',
            content: 'Choose the PDF file you want to convert'
          },
          {
            type: 'list-item',
            content: 'Ensure the file size is under 10MB'
          },
          {
            type: 'image',
            content: '/blog/upload-interface1.png',
            caption: 'Easy-to-use file upload interface'
          },
          {
            type: 'heading',
            content: '2. Select Format'
          },
          {
            type: 'list-item',
            content: 'Choose output format (DOCX)'
          },
          {
            type: 'image',
            content: '/blog/format-selection1.png',
            caption: 'Selecting the desired file format'
          },
          {
            type: 'heading',
            content: '3. Start Conversion'
          },
          {
            type: 'list-item',
            content: 'Click the "Convert" button'
          },
          {
            type: 'image',
            content: '/blog/conversion-process1.png',
            caption: 'Conversion process in progress'
          }
        ]
      }
    },
    slug: 'how-to-convert-pdf-to-word',
    category: 'tutorial',
    coverImage: '/blog/pdf-to-word2.png',
    author: {
      name: {
        ar: 'فريق PDF Processor',
        en: 'PDFSIR Team'
      },
      image: '/blog/default.png'
    },
    publishedAt: '2025-03-16',
    readingTime: 5
    
  }
];
