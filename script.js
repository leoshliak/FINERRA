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
    cta: "קבל גישה מוקדמת",
    badge: "גישה מוקדמת זמינה 🚀",
    cta_main: "קבל גישה מוקדמת",
    no_highlight: "נהל את הכסף שלך כמו מקצוען.",
    highlight: "בעזרת בינה מלאכותית.",
    placeholder_email: "הזן את כתובת האימייל שלך",

    features_title: "שנה את עתידך הכלכלי",
    features_subtitle: "התנסה בכוח של ניהול פיננסי מונע בינה מלאכותית עם פונקציות המיועדות למשקיע המודרני.",

    fa_title: "עוזר פיננסי מבוסס בינה מלאכותית",
    fa_description: "קבל תובנות והמלצות אישיות המונעות על ידי בינה מלאכותית מתקדמת כדי למקסם את ההוצאות והחסכונות שלך.",

    sid_title: "חלוקה חכמה של ההכנסות",
    sid_description: "הקצא אוטומטית את ההכנסות שלך לחסכונות, השקעות והוצאות בהתבסס על המטרות הפיננסיות שלך.",

    gc_title: "אתגרי גיימיפיקציה",
    gc_description: "הישאר ממוטב עם אתגרים פיננסיים מרתקים ותגמולים שהופכים את בניית העושר לכיפית וממכרת.",

    steps_title: "צעדים פשוטים לחופש כלכלי",
    steps_des: "התחל תוך דקות, לא שעות",

    step1_title: "חבר את החשבונות שלך",
    step1_des: "קישור מאובטח של חשבונות הבנק וכרטיסי האשראי בכמה לחיצות בלבד.",

    step2_title: "קבע את המטרות שלך",
    step2_des: "ספר לבינה המלאכותית שלנו על היעדים הפיננסיים שלך ותן לה ליצור תוכנית מותאמת אישית.",

    step3_title: "צפה בעושר שלך גדל",
    step3_des: "תשב בנוח ותן ל-FINERRA לאופטימיזציה אוטומטית של הכספים שלך.",

    waitlist_title: "מוכנים לשנות את המצב הכלכלי שלכם?",
    waitlist_des: "הצטרפו לאלפי משקיעים חכמים שכבר ברשימת ההמתנה.",
    join: "הצטרף לרשימת ההמתנה",
    form_text: "הצטרפו לתנועת הכסף החכם. קבלו גישה מוקדמת בלעדית לעוזר הפיננסי מבוסס הבינה המלאכותית שישנה את הדרך שבה אתם מנהלים את העושר שלכם.",

    footer_con: "נוצר עם ♥ מאת FINERRA",

    succes: "הצלחה!",
    succes_des: "תודה שהצטרפת לרשימת הגישה המוקדמת שלנו. נחזור אליך בקרוב!"
  },

  en: {
    home_nav: "Home",
    feature_nav: "Features",
    how_it_works_nav: "How it Works",
    cta: "Get Early Access",
    badge: "🚀 Early Access Available",
    cta_main: "Get Early Access",
    no_highlight: "Manage your money like a pro.",
    highlight: "With AI.",
    placeholder_email: "Enter your email address",

    features_title: "Transform your financial future",
    features_subtitle: "Experience the power of AI-driven financial management with features designed for the modern investor.",

    fa_title: "AI Financial Assistant",
    fa_description: "Get personalized insights and recommendations powered by advanced AI to optimize your spending and savings.",

    sid_title: "Smart Income Distribution",
    sid_description: "Automatically allocate your income across savings, investments, and expenses based on your financial goals.",

    gc_title: "Gamified Challenges",
    gc_description: "Stay motivated with engaging financial challenges and rewards that make building wealth fun and addictive.",

    steps_title: "Simple steps to financial freedom",
    steps_des: "Get started in minutes, not hours",

    step1_title: "Connect Your Accounts",
    step1_des: "Securely link your bank accounts and credit cards in just a few clicks.",

    step2_title: "Set Your Goals",
    step2_des: "Tell our AI about your financial objectives and let it create a personalized plan.",

    step3_title: "Watch Your Wealth Grow",
    step3_des: "Sit back and let FINERRA optimize your finances automatically.",

    waitlist_title: "Ready to transform your finances?",
    waitlist_des: "Join thousands of smart investors who are already on the waitlist.",
    join: "Join Waitlist",
    form_text: "Join the smart money movement. Get exclusive early access to the AI powered financial assistant that will change how you manage your wealth.",

    footer_con: "Made with ♥ by FINERRA",

    succes: "Success!",
    succes_des: "Thank you for joining our early access list. We'll be in touch soon!"
  }
};


function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.getElementById('home_nav').innerText = t.home_nav;
  document.getElementById('feature_nav').innerText = t.feature_nav;
  document.getElementById('how_it_works_nav').innerText = t.how_it_works_nav;
  document.getElementById('cta').innerText = t.cta;
  document.getElementById('badge').innerText = t.badge;
  document.getElementById('cta_main').innerText = t.cta_main;
  document.getElementById('no_highlight').innerText = t.no_highlight;
  document.querySelector('.highlight').innerText = t.highlight;
  document.getElementById('email').placeholder = t.placeholder_email;

  document.getElementById('features_title').innerText = t.features_title;
  document.getElementById('features_subtitle').innerText = t.features_subtitle;

  document.getElementById('fa_title').innerText = t.fa_title;
  document.getElementById('fa_description').innerText = t.fa_description;
  document.getElementById('sid_title').innerText = t.sid_title;
  document.getElementById('sid_description').innerText = t.sid_description;
  document.getElementById('gc_title').innerText = t.gc_title;
  document.getElementById('gc_description').innerText = t.gc_description;

  document.getElementById('steps_title').innerText = t.steps_title;
  document.getElementById('steps_des').innerText = t.steps_des;
  document.getElementById('1_title').innerText = t.step1_title;
  document.getElementById('1_des').innerText = t.step1_des;
  document.getElementById('2_title').innerText = t.step2_title;
  document.getElementById('2_des').innerText = t.step2_des;
  document.getElementById('3_title').innerText = t.step3_title;
  document.getElementById('3_des').innerText = t.step3_des;

  document.getElementById('waitlist_title').innerText = t.waitlist_title;
  document.getElementById('waitlist_des').innerText = t.waitlist_des;
  document.getElementById('join').innerText = t.join;
  document.getElementById('form_text').innerText = t.form_text;

  document.getElementById('footer_con').innerText = t.footer_con;

  document.getElementById('succes').innerText = t.succes;
  document.getElementById('succes_des').innerText = t.succes_des;
  
  document.querySelectorAll('.l-button').forEach(button => button.classList.remove("active"))
  if(lang === 'he') {
    document.querySelector('#he').classList.add('active');
  } else if(lang === 'en'){
    document.querySelector('#en').classList.add('active');
  }
}


