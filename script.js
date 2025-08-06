const waitlistForm = document.getElementById('waitlistForm');
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('#nav');
const toast = document.getElementById('toast');
const closeBtn = document.querySelector('.toast-close');
let hideTimeout;

waitlistForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if(!email) return;

  const formData = new FormData(waitlistForm);

  try {
    const response = await fetch(waitlistForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      clearTimeout(hideTimeout);
      toast.classList.remove('hidden');
      requestAnimationFrame(() => toast.classList.add('show'));
      hideTimeout = setTimeout(hideToast, 3000);
      fbq('track', 'Lead');
      waitlistForm.reset();
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  } catch (err) {
    alert('Network error. Please try again later.');
    console.error(err);
  }
});



closeBtn.addEventListener('click', hideToast);

function hideToast() {
  toast.classList.remove('show');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 400); 
}

const langBtn = document.getElementById('lang-btn');
const langMenu = document.querySelector('.lang-menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navBar.classList.toggle('active');
  langMenu.classList.add("hidden");
})


langBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent click bubbling to document
  langMenu.classList.toggle('hidden');
});

// Hide langMenu if click outside
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('l-button')) return;
  if (!langMenu.classList.contains('hidden')) {
    langMenu.classList.add('hidden');
  }
});


const translations = {
  he: {
    home_nav: "בית",
    feature_nav: "תכונות", 
    how_it_works_nav: "איך זה עובד",
    why_us: "למה אנחנו",
    testimonials_nav: "ביקורות",
    cta: "קבל גישה מוקדמת",
    badge: "גישה מוקדמת זמינה 🚀",
    hero_free: "חודש אחד של גישה מלאה וחינמית",
    cta_main: "קבל גישה מוקדמת",
    no_highlight: "נהל את הכסף שלך כמו מקצוען",
    highlight: "בעזרת בינה מלאכותית",
    chaos_to_control: "נהל את הכסף שלך כמו מקצוען",
    placeholder_email: "הזן את כתובת האימייל שלך",

    partners_title: "מהימן על ידי חברות מובילות",

    features_title: "שנה את עתידך הכלכלי",
    features_subtitle: "התנסה בכוח של ניהול פיננסי מונע בינה מלאכותית עם פונקציות המיועדות למשקיע המודרני",

    fa_title: "עוזר פיננסי מבוסס בינה מלאכותית",
    fa_description: "קבל תובנות והמלצות אישיות המונעות על ידי בינה מלאכותית מתקדמת כדי למקסם את ההוצאות והחסכונות שלך",

    sid_title: "חלוקה חכמה של ההכנסות",
    sid_description: "הקצא אוטומטית את ההכנסות שלך לחסכונות, השקעות והוצאות בהתבסס על המטרות הפיננסיות שלך",

    gc_title: "אתגרי גיימיפיקציה",
    gc_description: "הישאר ממוטב עם אתגרים פיננסיים מרתקים ותגמולים שהופכים את בניית העושר לכיפית וממכרת",

    testimonials_title: "מה אומרים משתמשי הגישה המוקדמת",
    testimonials_subtitle: "חוות דעת אמיתיות ממשתמשים שכבר חווים את כוח הבינה המלאכותית של FINERRA",

    testimonial_1: "FINERRA שינתה לחלוטין את הדרך שבה אני מנהל את הכספים שלי. הבינה המלאכותית מזהה דפוסי הוצאה שלא שמתי לב אליהם.",
    author_1_name: "דני כהן",
    author_1_title: "יזם טכנולוגיה",

    testimonial_2: "סוף סוף יש לי שליטה מלאה על התקציב שלי. המערכת מציעה המלצות מדויקות שחוסכות לי אלפי שקלים בחודש.",
    author_2_name: "מיכל לוי",
    author_2_title: "מנהלת שיווק",

    testimonial_3: "האפליקציה הפכה את ניהול הכספים לפשוט ומהנה. הגיימיפיקציה מעודדת אותי להמשיך לחסוך.",
    author_3_name: "אבי רוזן",
    author_3_title: "מהנדס תוכנה",

    testimonial_4: "התובנות שהבינה המלאכותית מספקת פשוט מדהימות. זה כמו יועץ פיננסי אישי זמין 24/7.",
    author_4_name: "שרה גולד",
    author_4_title: "רופאה",

    testimonial_5: "הצלחתי לחסוך 30% יותר מהרגיל הודות להמלצות החכמות של המערכת. פשוט מדהים!",
    author_5_name: "יוסי אברהם",
    author_5_title: "עורך דין",

    testimonial_6: "המערכת עזרה לי להבין לאן הולך הכסף שלי ואיך לנהל אותו בצורה חכמה יותר.",
    author_6_name: "רונית שמיר",
    author_6_title: "מעצבת גרפית",

    testimonial_7: "הממשק פשוט ונוח, והתכונות החכמות עוזרות לי לקבל החלטות פיננסיות מושכלות.",
    author_7_name: "עמית בן דוד",
    author_7_title: "אדריכל",

    testimonial_8: "לראשונה בחיים אני מרגישה בטוחה לגבי העתיד הפיננסי שלי. תודה FINERRA!",
    author_8_name: "נועה כץ",
    author_8_title: "מורה",

    testimonial_9: "המערכת לא רק עוזרת לי לחסוך, אלא גם מלמדת אותי איך להשקיע בחכמה.",
    author_9_name: "גיל מורן",
    author_9_title: "יועץ עסקי",

    steps_title: "צעדים פשוטים לחופש כלכלי",
    steps_des: "התחל תוך דקות, לא שעות",

    step1_title: "חבר את החשבונות שלך",
    step1_des: "קישור מאובטח של חשבונות הבנק וכרטיסי האשראי בכמה לחיצות בלבד",

    step2_title: "קבע את המטרות שלך",
    step2_des: "ספר לבינה המלאכותית שלנו על היעדים הפיננסיים שלך ותן לה ליצור תוכנית מותאמת אישית",

    step3_title: "צפה בעושר שלך גדל",
    step3_des: "תשב בנוח ותן ל-FINERRA לאופטימיזציה אוטומטית של הכספים שלך",

    info_title: "למה לבחור בנו",
    info_subtitle: "גלה מה הופך את FINERRA לבחירה הטובה ביותר לניהול הכספים שלך",

    security_title: "אבטחת מידע מתקדמת",
    security_description: "הנתונים הפיננסיים שלך מוגנים בהצפנה ברמה בנקאית ובטכנולוגיות אבטחה מתקדמות. אנחנו מבטיחים שהמידע שלך יישאר פרטי ומאובטח תמיד.",

    ai_assistant_title: "עוזר פיננסי מבוסס בינה מלאכותית",
    ai_assistant_description: "הבינה המלאכותית שלנו לומדת את ההרגלים הפיננסיים שלך ומספקת המלצות מותאמות אישית. קבל תובנות חכמות שיעזרו לך לחסוך יותר ולהשקיע בחכמה.",

    free_access_title: "חודש מלא של גישה חינמית",
    free_access_description: "נסה את כל התכונות של FINERRA במשך חודש שלם ללא עלות. הצטרף לרשימת ההמתנה עכשיו כדי להיות הראשון לקבל גישה לחודש החינמי שלך!",

    waitlist_title: "מוכנים לשנות את המצב הכלכלי שלכם?",
    waitlist_des: "הצטרפו לאלפי משקיעים חכמים שכבר ברשימת ההמתנה",
    join: "הצטרף לרשימת ההמתנה",
    form_text: "הצטרפו לתנועת הכסף החכם. קבלו גישה מוקדמת בלעדית לעוזר הפיננסי מבוסס הבינה המלאכותית שישנה את הדרך שבה אתם מנהלים את העושר שלכם.",

    footer_con: "נוצר עם ♥ מאת FINERRA",

    succes: "הצלחה!",
    succes_des: "תודה שהצטרפת לרשימת הגישה המוקדמת שלנו. נחזור אליך בקרוב!",

    // Trust section translations
    privacy_security_title: "פרטיות ואבטחה",
    data_protection_text: "הנתונים שלך מוגנים ברמה הגבוהה ביותר",
    trusted_by_title: "מהימן על ידי",
    beta_testimonial_1: "שינה לי את הדרך שבה אני מנהל כסף",
    beta_testimonial_2: "סוף סוף יש לי שליטה על התקציב שלי",
    beta_user: "משתמש בטא"
  },

  en: {
    home_nav: "Home",
    feature_nav: "Features",
    how_it_works_nav: "How it Works",
    why_us: "Why Us",
    testimonials_nav: "Testimonials",
    cta: "Get Early Access",
    badge: "🚀 Early Access Available",
    hero_free: "1 Month of Full Free Access",
    cta_main: "Get Early Access",
    no_highlight: "Manage your money like a pro",
    highlight: "With AI",
    chaos_to_control: "Manage your money like a pro",
    placeholder_email: "Enter your email address",

    partners_title: "Trusted by leading companies",

    features_title: "Transform your financial future",
    features_subtitle: "Experience the power of AI-driven financial management with features designed for the modern investor",

    fa_title: "AI Financial Assistant",
    fa_description: "Get personalized insights and recommendations powered by advanced AI to optimize your spending and savings",

    sid_title: "Smart Income Distribution",
    sid_description: "Automatically allocate your income across savings, investments, and expenses based on your financial goals",

    gc_title: "Gamified Challenges",
    gc_description: "Stay motivated with engaging financial challenges and rewards that make building wealth fun and addictive",

    testimonials_title: "What Early Access Users Say",
    testimonials_subtitle: "Real testimonials from users already experiencing the power of FINERRA's AI",

    testimonial_1: "FINERRA completely changed how I manage my finances. The AI identifies spending patterns I never noticed before.",
    author_1_name: "Danny Cohen",
    author_1_title: "Tech Entrepreneur",

    testimonial_2: "Finally have complete control over my budget. The system offers precise recommendations that save me thousands monthly.",
    author_2_name: "Michelle Levy",
    author_2_title: "Marketing Manager",

    testimonial_3: "The app made financial management simple and enjoyable. The gamification keeps me motivated to save more.",
    author_3_name: "Avi Rosen",
    author_3_title: "Software Engineer",

    testimonial_4: "The insights the AI provides are simply amazing. It's like having a personal financial advisor available 24/7.",
    author_4_name: "Sarah Gold",
    author_4_title: "Doctor",

    testimonial_5: "I managed to save 30% more than usual thanks to the system's smart recommendations. Simply amazing!",
    author_5_name: "Joe Abraham",
    author_5_title: "Lawyer",

    testimonial_6: "The system helped me understand where my money goes and how to manage it more wisely.",
    author_6_name: "Ronit Shamir",
    author_6_title: "Graphic Designer",

    testimonial_7: "The interface is simple and convenient, and the smart features help me make informed financial decisions.",
    author_7_name: "Amit Ben David",
    author_7_title: "Architect",

    testimonial_8: "For the first time in my life, I feel confident about my financial future. Thank you FINERRA!",
    author_8_name: "Noa Katz",
    author_8_title: "Teacher",

    testimonial_9: "The system doesn't just help me save, it also teaches me how to invest wisely.",
    author_9_name: "Gil Moran",
    author_9_title: "Business Consultant",

    steps_title: "Simple steps to financial freedom",
    steps_des: "Get started in minutes, not hours",

    step1_title: "Connect Your Accounts",
    step1_des: "Securely link your bank accounts and credit cards in just a few clicks",

    step2_title: "Set Your Goals",
    step2_des: "Tell our AI about your financial objectives and let it create a personalized plan",

    step3_title: "Watch Your Wealth Grow",
    step3_des: "Sit back and let FINERRA optimize your finances automatically",

    info_title: "Why Choose Us",
    info_subtitle: "Discover what makes FINERRA the best choice for managing your finances",

    security_title: "Advanced Data Security",
    security_description: "Your financial data is protected with bank-level encryption and advanced security technologies. We guarantee your information stays private and secure at all times.",

    ai_assistant_title: "AI-Powered Finance Assistant",
    ai_assistant_description: "Our AI learns your financial habits and provides personalized recommendations. Get smart insights that help you save more and invest wisely.",

    free_access_title: "1 Month of Full Free Access",
    free_access_description: "Try all FINERRA features for a full month at no cost. Join the waitlist now to be first in line for your free month!",

    waitlist_title: "Ready to transform your finances?",
    waitlist_des: "Join thousands of smart investors who are already on the waitlist",
    join: "Join Waitlist",
    form_text: "Join the smart money movement. Get exclusive early access to the AI powered financial assistant that will change how you manage your wealth.",

    footer_con: "Made with ♥ by FINERRA",

    succes: "Success!",
    succes_des: "Thank you for joining our early access list. We'll be in touch soon!",

    // Trust section translations
    privacy_security_title: "Privacy & Security",
    data_protection_text: "Your data is protected at the highest level",
    trusted_by_title: "Trusted by",
    beta_testimonial_1: "Changed how I manage my money",
    beta_testimonial_2: "Finally have control over my budget",
    beta_user: "Beta User"
  }
};


function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  localStorage.setItem('selectedLanguage', lang);

  document.getElementById('home_nav').innerText = t.home_nav;
  document.getElementById('feature_nav').innerText = t.feature_nav;
  document.getElementById('how_it_works_nav').innerText = t.how_it_works_nav;
  document.getElementById('why_us').innerText = t.why_us;
  document.getElementById('testimonials_nav').innerText = t.testimonials_nav;
  document.getElementById('cta').innerText = t.cta;
  document.getElementById('badge').innerText = t.badge;
  document.getElementById("hero_free").innerText = t.hero_free;
  document.getElementById('cta_main').innerText = t.cta_main;
  document.getElementById('motivating_headline').innerText = t.chaos_to_control;
  document.getElementById('no_highlight').innerText = t.no_highlight;
  document.querySelector('.highlight').innerText = t.highlight;
  document.getElementById('email').placeholder = t.placeholder_email;

  document.getElementById('partners_title').innerText = t.partners_title;

  document.getElementById('features_title').innerText = t.features_title;
  document.getElementById('features_subtitle').innerText = t.features_subtitle;

  document.getElementById('fa_title').innerText = t.fa_title;
  document.getElementById('fa_description').innerText = t.fa_description;
  document.getElementById('sid_title').innerText = t.sid_title;
  document.getElementById('sid_description').innerText = t.sid_description;
  document.getElementById('gc_title').innerText = t.gc_title;
  document.getElementById('gc_description').innerText = t.gc_description;

  // Testimonials section translations
  document.getElementById('testimonials_title').innerText = t.testimonials_title;
  document.getElementById('testimonials_subtitle').innerText = t.testimonials_subtitle;

  // Individual testimonials
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`testimonial_${i}`).innerText = t[`testimonial_${i}`];
    document.getElementById(`author_${i}_name`).innerText = t[`author_${i}_name`];
  }

  document.getElementById('steps_title').innerText = t.steps_title;
  document.getElementById('steps_des').innerText = t.steps_des;
  document.getElementById('1_title').innerText = t.step1_title;
  document.getElementById('1_des').innerText = t.step1_des;
  document.getElementById('2_title').innerText = t.step2_title;
  document.getElementById('2_des').innerText = t.step2_des;
  document.getElementById('3_title').innerText = t.step3_title;
  document.getElementById('3_des').innerText = t.step3_des;

  // Info section translations
  document.getElementById('info_title').innerText = t.info_title;
  document.getElementById('info_subtitle').innerText = t.info_subtitle;
  document.getElementById('security_title').innerText = t.security_title;
  document.getElementById('security_description').innerText = t.security_description;
  document.getElementById('ai_assistant_title').innerText = t.ai_assistant_title;
  document.getElementById('ai_assistant_description').innerText = t.ai_assistant_description;
  document.getElementById('free_access_title').innerText = t.free_access_title;
  document.getElementById('free_access_description').innerText = t.free_access_description;

  document.getElementById('waitlist_title').innerText = t.waitlist_title;
  document.getElementById('waitlist_des').innerText = t.waitlist_des;
  document.getElementById('join').innerText = t.join;
  document.getElementById('form_text').innerText = t.form_text;
  if(lang === 'he') {
  document.getElementById('footer_con').innerHTML = `נוצר עם <span class='heart'>♥</span> מאת FINERRA`
  } else if(lang === 'en'){
    document.getElementById('footer_con').innerHTML = `Made with <span class='heart'>♥</span> by FINERRA`
  }
  document.getElementById('succes').innerText = t.succes;
  document.getElementById('succes_des').innerText = t.succes_des;

  // Trust section translations (only if elements exist)
  const privacyTitle = document.getElementById('privacy_security_title');
  if (privacyTitle) privacyTitle.innerText = t.privacy_security_title;
  
  const dataProtection = document.getElementById('data_protection_text');
  if (dataProtection) dataProtection.innerText = t.data_protection_text;
  
  const trustedBy = document.getElementById('trusted_by_title');
  if (trustedBy) trustedBy.innerText = t.trusted_by_title;
  
  const testimonial1 = document.getElementById('beta_testimonial_1');
  if (testimonial1) testimonial1.innerText = t.beta_testimonial_1;
  
  const testimonial2 = document.getElementById('beta_testimonial_2');
  if (testimonial2) testimonial2.innerText = t.beta_testimonial_2;
  
  const betaUser1 = document.getElementById('beta_user_1');
  if (betaUser1) betaUser1.innerText = t.beta_user;
  
  const betaUser2 = document.getElementById('beta_user_2');
  if (betaUser2) betaUser2.innerText = t.beta_user;
  
  document.querySelectorAll('.l-button').forEach(button => button.classList.remove("active"))
  if(lang === 'he') {
    document.querySelector('#he').classList.add('active');
  } else if(lang === 'en') {
    document.querySelector('#en').classList.add('active');
  }
  
}

const savedLang = localStorage.getItem('selectedLanguage') || 'he';
setLanguage(savedLang);

// Testimonials slider functionality
let currentTestimonialPage = 0;
const testimonialsTrack = document.getElementById('testimonials-track');
const testimonialPrev = document.getElementById('testimonial-prev');
const testimonialNext = document.getElementById('testimonial-next');
const totalTestimonials = 9;

function getTestimonialsPerView() {
  if (window.innerWidth <= 850) return 1; // Mobile: 1 testimonial
  if (window.innerWidth <= 1250) return 2; // Tablet: 2 testimonials
  return 3; // Desktop: 3 testimonials
}

function getTotalPages() {
  const testimonialsPerView = getTestimonialsPerView();
  return Math.ceil(totalTestimonials / testimonialsPerView);
}

function updateTestimonialsSlider() {
  const totalPages = getTotalPages();
  
  // Ensure current page doesn't exceed max
  if (currentTestimonialPage >= totalPages) {
    currentTestimonialPage = totalPages - 1;
  }
  
  // Move by full container width for each page
  const movePercentage = currentTestimonialPage * 100;
  testimonialsTrack.style.transform = `translateX(-${movePercentage}%)`;
  
  // Update button states
  testimonialPrev.disabled = currentTestimonialPage === 0;
  testimonialNext.disabled = currentTestimonialPage >= totalPages - 1;
}

testimonialPrev.addEventListener('click', () => {
  if (currentTestimonialPage > 0) {
    currentTestimonialPage--;
    updateTestimonialsSlider();
  }
});

testimonialNext.addEventListener('click', () => {
  const totalPages = getTotalPages();
  
  if (currentTestimonialPage < totalPages - 1) {
    currentTestimonialPage++;
    updateTestimonialsSlider();
  }
});

// Handle window resize
window.addEventListener('resize', () => {
  // Reset to first page on resize to avoid positioning issues
  currentTestimonialPage = 0;
  updateTestimonialsSlider();
});

// Initialize testimonials slider
updateTestimonialsSlider();
