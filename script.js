// ملف JavaScript الرئيسي - إصدار جديد كلياً مع الترجمة
class PortfolioApp {
    constructor() {
        this.currentLang = 'en';
        this.translations = {
            en: {
                // التنقل
                nav_home: "Home",
                nav_about: "About",
                nav_skills: "Skills",
                nav_projects: "Projects",
                nav_contact: "Contact",
                
                // الرأس
                name: "",
                title: "Professional Engineer & Full-Stack Developer",
                tag_verified: "Verified",
                tag_experience: "8+ Years",
                badge_whatsapp: "WhatsApp",
                badge_email: "Email",
                badge_facebook: "Facebook",
                
                // اللغات
                lang_english: "English",
                lang_arabic: "Arabic",
                lang_german: "German",
                lang_french: "French",
                
                // الرئيسية
                welcome_title: "Welcome to My Digital Space",
                welcome_subtitle: "Crafting Digital Excellence with Precision & Innovation",
                stat_projects: "Projects Delivered",
                stat_clients: "Happy Clients",
                stat_years: "Years Experience",
                stat_tech: "Technologies",
                intro_text: "I specialize in building high-performance web applications and digital solutions that drive business growth. With a strong foundation in both engineering principles and creative development, I transform ideas into impactful digital experiences.",
                
                // من أنا
                about_title: "About Me",
                about_text: " <strong>Kareem Eltabkh</strong>, a passionate engineer and full-stack developer with over 8 years of experience in the tech industry. My journey combines technical expertise with creative problem-solving.",
                education_title: "Education & Certifications",
                edu1: "Bachelor's in Computer Engineering",
                edu2: "AWS Certified Solutions Architect",
                edu3: "Microsoft Certified: Azure Developer",
                edu4: "Google Cloud Professional",
                values_title: "Core Values",
                value_innovation: "Innovation",
                value_integrity: "Integrity",
                value_excellence: "Excellence",
                value1_desc: "Always exploring new technologies",
                value2_desc: "Honest and transparent communication",
                value3_desc: "Striving for perfection in every project",
                
                // المهارات
                skills_title: "Technical Expertise",
                cat_programming: "Programming Languages",
                cat_frontend: "Frontend Development",
                cat_backend: "Backend Development",
                cat_database: "Database & Cloud",
                skill_js: "JavaScript/TypeScript",
                skill_python: "Python",
                skill_java: "Java",
                skill_cpp: "C++",
                skill_php: "PHP",
                skill_react: "React.js",
                skill_vue: "Vue.js",
                skill_html: "HTML5/CSS3",
                skill_sass: "Sass/SCSS",
                skill_node: "Node.js",
                skill_django: "Python/Django",
                skill_laravel: "PHP/Laravel",
                skill_spring: "Java/Spring",
                skill_mongo: "MongoDB",
                skill_postgres: "PostgreSQL",
                skill_aws: "AWS",
                skill_docker: "Docker",
                
                // المشاريع
                projects_title: "Featured Projects",
                project1_title: "E-Commerce Platform",
                project1_desc: "Full-featured online shopping platform with payment integration and admin dashboard.",
                project2_title: "Health & Fitness App",
                project2_desc: "Mobile application for health tracking with AI-powered recommendations.",
                project3_title: "Business Analytics Dashboard",
                project3_desc: "Interactive dashboard for business intelligence with real-time data visualization.",
                link_demo: "Live Demo",
                link_code: "Code",
                link_appstore: "App Store",
                link_playstore: "Play Store",
                
                // الاتصال
                contact_title: "Get In Touch",
                contact_whatsapp: "WhatsApp",
                contact_email: "Email",
                contact_facebook: "Facebook",
                whatsapp_desc: "Fast response, available 24/7",
                email_desc: "Response within 24 hours",
                facebook_desc: "Connect and follow updates",
                form_name: "Your Name",
                form_email: "Your Email",
                form_subject: "Subject",
                form_message: "Your Message",
                form_submit: "Send Message",
                
                // الفوتر
                footer_tagline: "{ ٱقۡرَأۡ كِتَـٰبَكَ كَفَىٰ بِنَفۡسِكَ ٱلۡیَوۡمَ عَلَیۡكَ حَسِیبࣰا (١٤)} 💛",
                footer_home: "Home",
                footer_about: "About",
                footer_skills: "Skills",
                footer_projects: "Projects",
                footer_contact: "Contact",
                footer_rights: "All rights reserved©Eltabkh ",
                footer_visitors: "2024",
                
                // لوحة التحكم
                panel_title: "Control Panel",
                panel_language: "Language",
                panel_theme: "Theme",
                panel_stats: "Statistics",
                panel_dark: "Dark",
                panel_light: "Light",
                panel_visits: "Visits",
                panel_time: "Time"
            },
            
            ar: {
                // التنقل
                nav_home: "الرئيسية",
                nav_about: "من أنا",
                nav_skills: "المهارات",
                nav_projects: "المشاريع",
                nav_contact: "اتصل بي",
                
                // الرأس
                name: "المهندس كريم الطباخ",
                title: "مهندس محترف ومطور ويب ",
                tag_verified: "معتمد",
                tag_experience: "8+ سنوات",
                badge_whatsapp: "واتساب",
                badge_email: "البريد",
                badge_facebook: "فيسبوك",
                
                // اللغات
                lang_english: "الإنجليزية",
                lang_arabic: "العربية",
                lang_german: "الألمانية",
                lang_french: "الفرنسية",
                
                // الرئيسية
                welcome_title: "مرحباً بكم في مساحتي الرقمية",
                welcome_subtitle: "صياغة التميز الرقمي بالدقة والابتكار",
                stat_projects: "مشروع منفذ",
                stat_clients: "عميل سعيد",
                stat_years: "سنوات خبرة",
                stat_tech: "تقنية",
                intro_text: "أتخصص في بناء تطبيقات الويب عالية الأداء والحلول الرقمية التي تدفع نمو الأعمال. مع أساس قوي في مبادئ الهندسة والتطوير الإبداعي، أحول الأفكار إلى تجارب رقمية مؤثرة.",
                
                // من أنا
                about_title: "معلومات عني",
                about_text: "مرحباً! أنا <strong>كريم الطباخ</strong>، مهندس ومطور ويب شامل شغوف بأكثر من 8 سنوات من الخبرة في صناعة التكنولوجيا. تجمع رحلتي بين الخبرة التقنية وحل المشكلات الإبداعي.",
                education_title: "التعليم والشهادات",
                edu1: "بكالوريوس في هندسة الحاسوب",
                edu2: "مهندس حلول معتمد من AWS",
                edu3: "مطور معتمد من مايكروسوفت: Azure",
                edu4: "محترف جوجل سحابي",
                values_title: "القيم الأساسية",
                value_innovation: "الابتكار",
                value_integrity: "النزاهة",
                value_excellence: "التميز",
                value1_desc: "استكشاف التقنيات الجديدة باستمرار",
                value2_desc: "تواصل صادق وشفاف",
                value3_desc: "السعي للكمال في كل مشروع",
                
                // المهارات
                skills_title: "الخبرات التقنية",
                cat_programming: "لغات البرمجة",
                cat_frontend: "تطوير الواجهة الأمامية",
                cat_backend: "تطوير الواجهة الخلفية",
                cat_database: "قواعد البيانات والسحابة",
                skill_js: "جافاسكريبت/تايبسكريبت",
                skill_python: "بايثون",
                skill_java: "جافا",
                skill_cpp: "سي++",
                skill_php: "بي إتش بي",
                skill_react: "رياكت.js",
                skill_vue: "فيو.js",
                skill_html: "HTML5/CSS3",
                skill_sass: "ساس/إس سي إس إس",
                skill_node: "نود.js",
                skill_django: "بايثون/ديجانجو",
                skill_laravel: "بي إتش بي/لارافيل",
                skill_spring: "جافا/سبرينغ",
                skill_mongo: "مونجو دي بي",
                skill_postgres: "بوستجري إس كيو إل",
                skill_aws: "إيه دبليو إس",
                skill_docker: "دوكر",
                
                // المشاريع
                projects_title: "أبرز المشاريع",
                project1_title: "منصة التجارة الإلكترونية",
                project1_desc: "منصة تسوق عبر الإنترنت كاملة الميزات مع تكامل الدفع ولوحة تحكم المشرف.",
                project2_title: "تطبيق الصحة واللياقة",
                project2_desc: "تطبيق جوال لتتبع الصحة مع توصيات مدعومة بالذكاء الاصطناعي.",
                project3_title: "لوحة تحليلات الأعمال",
                project3_desc: "لوحة تحكم تفاعلية لذكاء الأعمال مع تصور البيانات في الوقت الفعلي.",
                link_demo: "عرض مباشر",
                link_code: "الكود",
                link_appstore: "متجر التطبيقات",
                link_playstore: "متجر جوجل",
                
                // الاتصال
                contact_title: "تواصل معي",
                contact_whatsapp: "واتساب",
                contact_email: "البريد الإلكتروني",
                contact_facebook: "فيسبوك",
                whatsapp_desc: "رد سريع، متاح 24/7",
                email_desc: "الرد خلال 24 ساعة",
                facebook_desc: "تواصل واتبع التحديثات",
                form_name: "اسمك",
                form_email: "بريدك الإلكتروني",
                form_subject: "الموضوع",
                form_message: "رسالتك",
                form_submit: "إرسال الرسالة",
                
                // الفوتر
                footer_tagline: "اللهُمَّ أعطني إيماناً صادقاً ويقيناً ليس بعده كفر، ورحمةً أنال بها شرف كرامتك في الدنيا والآخرة",
                footer_home: "الرئيسية",
                footer_about: "من أنا",
                footer_skills: "المهارات",
                footer_projects: "المشاريع",
                footer_contact: "اتصل بي",
                footer_rights: "جميع الحقوق محفوظة ©Eltabkh ",
                footer_visitors: "2024",
                
                // لوحة التحكم
                panel_title: "لوحة التحكم",
                panel_language: "اللغة",
                panel_theme: "السمة",
                panel_stats: "الإحصائيات",
                panel_dark: "داكن",
                panel_light: "فاتح",
                panel_visits: "الزيارات",
                panel_time: "الوقت"
            }
        };
        
        this.init();
    }
    
    init() {
        // استعادة اللغة المحفوظة
        this.currentLang = localStorage.getItem('portfolio-lang') || 'en';
        
        // تهيئة جميع المكونات
        this.initNavigation();
        this.initControlPanel();
        this.initTheme();
        this.initScrollEffects();
        this.initAnimations();
        this.initCounters();
        this.initVisitCounter();
        this.initCurrentTime();
        this.initScrollToTop();
        this.initForm();
        this.initLanguageBar();
        this.initParticles();
        
        // تطبيق اللغة الحالية
        this.applyLanguage();
        
        // إظهار القسم النشط
        this.showActiveSection();
        
        console.log('Portfolio App Initialized Successfully!');
    }
    
    // ======================
    // نظام الترجمة
    // ======================
    applyLanguage() {
        // تحديث لغة HTML
        document.documentElement.lang = this.currentLang;
        
        // تطبيق اتجاه النص
        if (this.currentLang === 'ar') {
            document.body.style.direction = 'rtl';
            document.body.style.textAlign = 'right';
        } else {
            document.body.style.direction = 'ltr';
            document.body.style.textAlign = 'left';
        }
        
        // تحديث جميع النصوص
        this.updateAllTexts();
        
        // تحديث أزرار اللغة النشطة
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            }
        });
    }
    
    updateAllTexts() {
        const langData = this.translations[this.currentLang];
        
        // تحديث النصوص حسب العناصر
        this.updateElementText('.name', langData.name);
        this.updateElementText('.title', langData.title);
        
        // تحديث التنقل
        this.updateElementText('[data-target="home"] span', langData.nav_home);
        this.updateElementText('[data-target="about"] span', langData.nav_about);
        this.updateElementText('[data-target="skills"] span', langData.nav_skills);
        this.updateElementText('[data-target="projects"] span', langData.nav_projects);
        this.updateElementText('[data-target="contact"] span', langData.nav_contact);
        
        // تحديث الوسوم
        this.updateElementText('.tag.verified', langData.tag_verified);
        this.updateElementText('.tag.experience', langData.tag_experience);
        
        // تحديث شارات التواصل
        this.updateElementText('.contact-badge.whatsapp span', langData.badge_whatsapp);
        this.updateElementText('.contact-badge.email span', langData.badge_email);
        this.updateElementText('.contact-badge.facebook span', langData.badge_facebook);
        
        // تحديث أسماء اللغات في الشريط
        this.updateElementText('.language-item:nth-child(1) .lang-name', langData.lang_english);
        this.updateElementText('.language-item:nth-child(2) .lang-name', langData.lang_arabic);
        this.updateElementText('.language-item:nth-child(3) .lang-name', langData.lang_german);
        this.updateElementText('.language-item:nth-child(4) .lang-name', langData.lang_french);
        
        // تحديث القسم الرئيسي
        this.updateElementText('.welcome-card .section-title', langData.welcome_title);
        this.updateElementText('.welcome-card .section-subtitle', langData.welcome_subtitle);
        this.updateElementText('.stat-card:nth-child(1) .stat-label', langData.stat_projects);
        this.updateElementText('.stat-card:nth-child(2) .stat-label', langData.stat_clients);
        this.updateElementText('.stat-card:nth-child(3) .stat-label', langData.stat_years);
        this.updateElementText('.stat-card:nth-child(4) .stat-label', langData.stat_tech);
        this.updateElementText('.intro-text p', langData.intro_text);
        
        // تحديث قسم من أنا
        this.updateElementText('#about .section-title', langData.about_title);
        this.updateElementText('.about-text p', langData.about_text, true);
        this.updateElementText('.education-section h3', langData.education_title);
        this.updateElementText('.education-section li:nth-child(1)', langData.edu1);
        this.updateElementText('.education-section li:nth-child(2)', langData.edu2);
        this.updateElementText('.education-section li:nth-child(3)', langData.edu3);
        this.updateElementText('.education-section li:nth-child(4)', langData.edu4);
        this.updateElementText('.core-values h3', langData.values_title);
        this.updateElementText('.value-item:nth-child(1) h4', langData.value_innovation);
        this.updateElementText('.value-item:nth-child(2) h4', langData.value_integrity);
        this.updateElementText('.value-item:nth-child(3) h4', langData.value_excellence);
        this.updateElementText('.value-item:nth-child(1) p', langData.value1_desc);
        this.updateElementText('.value-item:nth-child(2) p', langData.value2_desc);
        this.updateElementText('.value-item:nth-child(3) p', langData.value3_desc);
        
        // تحديث قسم المهارات
        this.updateElementText('#skills .section-title', langData.skills_title);
        this.updateElementText('.category-card:nth-child(1) h3', langData.cat_programming);
        this.updateElementText('.category-card:nth-child(2) h3', langData.cat_frontend);
        this.updateElementText('.category-card:nth-child(3) h3', langData.cat_backend);
        this.updateElementText('.category-card:nth-child(4) h3', langData.cat_database);
        
        // تحديث أسماء المهارات
        this.updateSkillNames();
        
        // تحديث قسم المشاريع
        this.updateElementText('#projects .section-title', langData.projects_title);
        this.updateElementText('.project-item:nth-child(1) h3', langData.project1_title);
        this.updateElementText('.project-item:nth-child(2) h3', langData.project2_title);
        this.updateElementText('.project-item:nth-child(3) h3', langData.project3_title);
        this.updateElementText('.project-item:nth-child(1) p', langData.project1_desc);
        this.updateElementText('.project-item:nth-child(2) p', langData.project2_desc);
        this.updateElementText('.project-item:nth-child(3) p', langData.project3_desc);
        
        // تحديث روابط المشاريع
        this.updateElementText('.project-item:nth-child(1) .project-link:nth-child(1)', langData.link_demo);
        this.updateElementText('.project-item:nth-child(2) .project-link:nth-child(1)', langData.link_appstore);
        this.updateElementText('.project-item:nth-child(3) .project-link:nth-child(1)', langData.link_demo);
        this.updateElementText('.project-item:nth-child(1) .project-link:nth-child(2)', langData.link_code);
        this.updateElementText('.project-item:nth-child(2) .project-link:nth-child(2)', langData.link_playstore);
        this.updateElementText('.project-item:nth-child(3) .project-link:nth-child(2)', langData.link_code);
        
        // تحديث قسم الاتصال
        this.updateElementText('#contact .section-title', langData.contact_title);
        this.updateElementText('.contact-method:nth-child(1) h4', langData.contact_whatsapp);
        this.updateElementText('.contact-method:nth-child(2) h4', langData.contact_email);
        this.updateElementText('.contact-method:nth-child(3) h4', langData.contact_facebook);
        this.updateElementText('.contact-method:nth-child(1) p', langData.whatsapp_desc);
        this.updateElementText('.contact-method:nth-child(2) p', langData.email_desc);
        this.updateElementText('.contact-method:nth-child(3) p', langData.facebook_desc);
        
        // تحديث حقول النموذج
        this.updatePlaceholder('input[placeholder*="Name"]', langData.form_name);
        this.updatePlaceholder('input[placeholder*="Email"]', langData.form_email);
        this.updatePlaceholder('input[placeholder*="Subject"]', langData.form_subject);
        this.updatePlaceholder('textarea[placeholder*="Message"]', langData.form_message);
        this.updateElementText('.submit-btn', langData.form_submit);
        
        // تحديث الفوتر
        this.updateElementText('.footer-brand p', langData.footer_tagline);
        this.updateElementText('.footer-links a:nth-child(1)', langData.footer_home);
        this.updateElementText('.footer-links a:nth-child(2)', langData.footer_about);
        this.updateElementText('.footer-links a:nth-child(3)', langData.footer_skills);
        this.updateElementText('.footer-links a:nth-child(4)', langData.footer_projects);
        this.updateElementText('.footer-links a:nth-child(5)', langData.footer_contact);
        this.updateElementText('.footer-bottom p:nth-child(1)', langData.footer_rights, true);
        this.updateElementText('.footer-bottom .visit-count', langData.footer_visitors);
        
        // تحديث لوحة التحكم
        this.updateElementText('.panel-header h3', langData.panel_title);
        this.updateElementText('.panel-section:nth-child(1) h4', langData.panel_language);
        this.updateElementText('.panel-section:nth-child(2) h4', langData.panel_theme);
        this.updateElementText('.panel-section:nth-child(3) h4', langData.panel_stats);
        this.updateElementText('.theme-option[data-theme="dark"]', langData.panel_dark);
        this.updateElementText('.theme-option[data-theme="light"]', langData.panel_light);
        this.updateElementText('.stat-display:nth-child(1) .stat-label', langData.panel_visits);
        this.updateElementText('.stat-display:nth-child(2) .stat-label', langData.panel_time);
    }
    
    updateElementText(selector, text, isHTML = false) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (isHTML) {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        });
    }
    
    updatePlaceholder(selector, text) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.placeholder = text;
        });
    }
    
    updateSkillNames() {
        const langData = this.translations[this.currentLang];
        
        // تحديث أسماء مهارات البرمجة
        const programmingSkills = document.querySelectorAll('.category-card:nth-child(1) .skill-name');
        if (programmingSkills.length >= 5) {
            programmingSkills[0].textContent = langData.skill_js;
            programmingSkills[1].textContent = langData.skill_python;
            programmingSkills[2].textContent = langData.skill_java;
            programmingSkills[3].textContent = langData.skill_cpp;
            programmingSkills[4].textContent = langData.skill_php;
        }
        
        // تحديث أسماء مهارات الواجهة الأمامية
        const frontendSkills = document.querySelectorAll('.category-card:nth-child(2) .skill-name');
        if (frontendSkills.length >= 4) {
            frontendSkills[0].textContent = langData.skill_react;
            frontendSkills[1].textContent = langData.skill_vue;
            frontendSkills[2].textContent = langData.skill_html;
            frontendSkills[3].textContent = langData.skill_sass;
        }
        
        // تحديث أسماء مهارات الواجهة الخلفية
        const backendSkills = document.querySelectorAll('.category-card:nth-child(3) .skill-name');
        if (backendSkills.length >= 4) {
            backendSkills[0].textContent = langData.skill_node;
            backendSkills[1].textContent = langData.skill_django;
            backendSkills[2].textContent = langData.skill_laravel;
            backendSkills[3].textContent = langData.skill_spring;
        }
        
        // تحديث أسماء مهارات قواعد البيانات
        const databaseSkills = document.querySelectorAll('.category-card:nth-child(4) .skill-name');
        if (databaseSkills.length >= 4) {
            databaseSkills[0].textContent = langData.skill_mongo;
            databaseSkills[1].textContent = langData.skill_postgres;
            databaseSkills[2].textContent = langData.skill_aws;
            databaseSkills[3].textContent = langData.skill_docker;
        }
    }
    
    changeLanguage(lang) {
        if (lang !== this.currentLang && this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('portfolio-lang', lang);
            this.applyLanguage();
            this.addClickGlow(event.target);
        }
    }
    
    // ======================
    // التنقل بين الأقسام
    // ======================
    initNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('.content-section');
        
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                
                // إزالة النشط من الجميع
                navItems.forEach(nav => nav.classList.remove('active'));
                sections.forEach(section => {
                    section.classList.remove('active');
                    section.style.display = 'none';
                });
                
                // إضافة النشط للعنصر الحالي
                item.classList.add('active');
                
                // إظهار القسم المطلوب
                const targetId = item.getAttribute('data-target');
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.style.display = 'block';
                    setTimeout(() => {
                        targetSection.classList.add('active');
                    }, 10);
                    
                    // تأثير التوهج عند النقر فقط
                    this.addClickGlow(item);
                    
                    // التمرير السلس للقسم
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            });
        });
    }
    
    // ======================
    // تأثير التوهج عند النقر فقط
    // ======================
    addClickGlow(element) {
        element.classList.add('glow');
        setTimeout(() => {
            element.classList.remove('glow');
        }, 500);
    }
    
    // ======================
    // لوحة التحكم
    // ======================
    initControlPanel() {
        const controlBtn = document.getElementById('controlBtn');
        const closeBtn = document.getElementById('closePanel');
        const controlPanel = document.getElementById('controlPanel');
        
        // فتح اللوحة
        controlBtn.addEventListener('click', (e) => {
            e.preventDefault();
            controlPanel.classList.add('active');
            this.addClickGlow(controlBtn);
        });
        
        // إغلاق اللوحة
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            controlPanel.classList.remove('active');
            this.addClickGlow(closeBtn);
        });
        
        // أزرار تغيير اللغة
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang');
                this.changeLanguage(lang);
            });
        });
        
        // أزرار تغيير النمط
        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const theme = btn.getAttribute('data-theme');
                this.changeTheme(theme);
                this.addClickGlow(btn);
            });
        });
    }
    
    // ======================
    // إدارة النمط
    // ======================
    initTheme() {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.changeTheme(savedTheme);
        
        // تحديث الأزرار النشطة
        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-theme') === savedTheme) {
                btn.classList.add('active');
            }
        });
    }
    
    changeTheme(theme) {
        document.body.classList.remove('dark-mode', 'light-mode');
        document.body.classList.add(`${theme}-mode`);
        localStorage.setItem('portfolio-theme', theme);
        
        // تحديث الأزرار النشطة
        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-theme') === theme) {
                btn.classList.add('active');
            }
        });
    }
    
    // ======================
    // تأثيرات التمرير
    // ======================
    initScrollEffects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // شريط التقدم للمهارات
                    if (entry.target.classList.contains('skill-fill')) {
                        const level = entry.target.getAttribute('data-level');
                        setTimeout(() => {
                            entry.target.style.width = `${level}%`;
                        }, 300);
                    }
                    
                    // شريط اللغات
                    if (entry.target.classList.contains('lang-fill')) {
                        const level = entry.target.getAttribute('data-level');
                        setTimeout(() => {
                            entry.target.style.width = `${level}%`;
                        }, 300);
                    }
                    
                    // عدادات الأرقام
                    if (entry.target.classList.contains('stat-number')) {
                        const target = parseInt(entry.target.getAttribute('data-count'));
                        this.animateCounter(entry.target, target);
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // مراقبة العناصر
        document.querySelectorAll('.skill-fill, .lang-fill, .stat-number').forEach(el => {
            observer.observe(el);
        });
    }
    
    // ======================
    // شريط اللغات المتحرك
    // ======================
    initLanguageBar() {
        const languageTrack = document.querySelector('.language-track');
        if (!languageTrack) return;
        
        // التأكد من أن الأنيميشن يعمل
        setTimeout(() => {
            languageTrack.style.animation = 'scrollLanguages 30s linear infinite';
        }, 1000);
        
        // إيقاف الأنيميشن عند التمرير
        languageTrack.addEventListener('mouseenter', () => {
            languageTrack.style.animationPlayState = 'paused';
        });
        
        languageTrack.addEventListener('mouseleave', () => {
            languageTrack.style.animationPlayState = 'running';
        });
    }
    
    // ======================
    // التأثيرات المتحركة
    // ======================
    initAnimations() {
        // تأثير الكتابة للاسم
        this.typeWriterEffect();
        
        // تأثير تموج الصورة
        this.imageRippleEffect();
        
        // تأثيرات الكروت
        this.cardHoverEffects();
    }
    
    typeWriterEffect() {
        const nameElement = document.querySelector('.name');
        if (!nameElement) return;
        
        const text = nameElement.textContent;
        nameElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                nameElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    imageRippleEffect() {
        const profileImage = document.querySelector('.profile-image img');
        if (!profileImage) return;
        
        setInterval(() => {
            if (Math.random() > 0.8) {
                profileImage.style.transform = 'scale(1.03)';
                setTimeout(() => {
                    profileImage.style.transform = 'scale(1)';
                }, 300);
            }
        }, 3000);
    }
    
    cardHoverEffects() {
        document.querySelectorAll('.stat-card, .category-card, .project-item, .contact-method').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }
    
    // ======================
    // عدادات الأرقام
    // ======================
    initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            this.animateCounter(counter, target);
        });
    }
    
    animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    }
    
    // ======================
    // عداد الزيارات
    // ======================
    initVisitCounter() {
        let visits = localStorage.getItem('portfolio-visits');
        if (!visits) {
            visits = 1;
        } else {
            visits = parseInt(visits) + 1;
        }
        
        localStorage.setItem('portfolio-visits', visits.toString());
        
        // تحديث جميع عدادات الزيارات
        document.querySelectorAll('#visitorCount, #panelVisits').forEach(el => {
            this.animateCounter(el, visits);
        });
    }
    
    // ======================
    // الوقت الحالي
    // ======================
    initCurrentTime() {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const timeElement = document.getElementById('currentTime');
            if (timeElement) {
                timeElement.textContent = timeString;
            }
        };
        
        updateTime();
        setInterval(updateTime, 60000);
    }
    
    // ======================
    // زر العودة للأعلى
    // ======================
    initScrollToTop() {
        const scrollBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        
        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            this.addClickGlow(scrollBtn);
        });
    }
    
    // ======================
    // النموذج
    // ======================
    initForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // الحصول على بيانات النموذج
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // هنا يمكن إرسال البيانات إلى الخادم
            console.log('Form submitted:', data);
            
            // رسالة نجاح بلغة المستخدم
            const successMessage = this.currentLang === 'ar' 
                ? 'تم إرسال رسالتك بنجاح! سأرد عليك قريباً.' 
                : 'Message sent successfully! I will reply to you soon.';
            
            alert(successMessage);
            
            // إعادة تعيين النموذج
            form.reset();
            
            // تأثير التوهج
            const submitBtn = form.querySelector('.submit-btn');
            this.addClickGlow(submitBtn);
        });
    }
    
    // ======================
    // الجسيمات المتحركة
    // ======================
    initParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: #1877f2;
                border-radius: 50%;
                opacity: ${Math.random() * 0.5 + 0.2};
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
            `;
            
            container.appendChild(particle);
            
            // حركة الجسيمة
            let x = Math.random() * 100;
            let y = Math.random() * 100;
            let speedX = (Math.random() - 0.5) * 0.3;
            let speedY = (Math.random() - 0.5) * 0.3;
            
            const moveParticle = () => {
                x += speedX;
                y += speedY;
                
                if (x > 100 || x < 0) speedX *= -1;
                if (y > 100 || y < 0) speedY *= -1;
                
                particle.style.left = `${x}vw`;
                particle.style.top = `${y}vh`;
                
                requestAnimationFrame(moveParticle);
            };
            
            moveParticle();
        }
    }
    
    // ======================
    // إظهار القسم النشط
    // ======================
    showActiveSection() {
        const activeSection = document.querySelector('.content-section.active');
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }
}

// بدء التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    
    // إضافة تأثير التوهج لجميع الأزرار القابلة للنقر
    document.querySelectorAll('button, a').forEach(element => {
        element.addEventListener('click', function(e) {
            if (this.tagName === 'A' && this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            // التأكد من أن التوهج يظهر فقط عند النقر
            if (!this.classList.contains('glow')) {
                this.classList.add('glow');
                setTimeout(() => {
                    this.classList.remove('glow');
                }, 500);
            }
        });
    });
    
    // التأكد من أن شريط اللغات يبدأ بالتحريك
    setTimeout(() => {
        const track = document.querySelector('.language-track');
        if (track) {
            track.style.animation = 'scrollLanguages 30s linear infinite';
        }
    }, 2000);
});

// التأكد من أن الأقسام تظهر بشكل صحيح
window.addEventListener('load', () => {
    console.log('Page fully loaded');
    
    // إظهار شريط التقدم بعد التحميل
    document.querySelectorAll('.skill-fill, .lang-fill').forEach(fill => {
        const level = fill.getAttribute('data-level');
        setTimeout(() => {
            fill.style.width = `${level}%`;
        }, 500);
    });
});