import type { ProductConfig } from "@/lib/product-config";

const config: ProductConfig = {
  // Core product info
  name: "Neutral Basal System",
  slug: "nbs",
  price: "$29",
  originalPrice: "$97",
  savings: "$68",
  checkoutUrl: "#checkout",
  guaranteeDays: 30,

  // CTA button styling — no background image, uses default gradient
  ctaMainText: "Download Now For Only $29",
  ctaSubText: "Instant access — start reading in 2 minutes",
  ctaLinkText: "Click Here To Get Your Book",

  // Section toggles
  sections: {
    topBar: true,
    hero: true,
    valueProp: false,
    salesLetter: true,
    whatYouGet: true,
    hormoziQuote: false,
    sneakPeek: false,
    alsoGetting: true,
    bonuses: true,
    faq: true,
    guarantee: true,
    stickySidebar: true,
    divider: true,
    footer: true,
  },

  // Top bar
  topBar: {
    helpEmail: "kele@neutralbasalsystem.com",
    helpText: "Need Help? Click HERE to Contact Us",
    logoSrc: "/images/nbs/logo.svg",
    logoAlt: "Neutral Basal System",
  },

  // Hero section
  hero: {
    headline:
      'DISCOVERY: How I Lost <span class="text-[var(--color-gold)]">12 Kilos in 4 Months</span> Without Exercise, Without Dieting, Without Counting Calories',
    subheadline:
      '"New Book Reveals a Counter-Intuitive Approach That Helps You Lose 2-3kg/Month"',
    description: [
      "While Saving Money, Saving Time, and Keeping Your Social Life",
    ],
    guaranteeBadgeImg: "/images/nbs/guarantee-badge.svg",
  },

  // Sales letter — full long-form copy
  salesLetter: {
    blocks: [
      {
        type: "paragraph",
        text: "Dear Future Owner of the Neutral Basal System,",
        className: "italic",
      },
      {
        type: "paragraph",
        text: "Hello, my name is Kele Diabat\u00e9.",
      },
      {
        type: "paragraph",
        text: "Would it surprise you to learn that I lost 12 kilos in 4 months using the information revealed in this 40-page book?",
      },
      {
        type: "paragraph",
        text: "Skeptical?",
      },
      {
        type: "paragraph",
        text: "You should be.",
      },
      {
        type: "paragraph",
        text: "After all, you can\u2019t believe everything you read on the Internet.",
      },
      {
        type: "paragraph",
        text: "So let me prove it to you.",
      },
      {
        type: "paragraph",
        text: "But first, read this disclaimer:",
      },
      {
        type: "paragraph",
        text: '<em>I have the advantage of having been a high-level athlete for 20 years. I missed Olympic qualification twice in the finals. I have a deep understanding of the human body and its mechanisms.</em>',
        className: "text-[var(--color-text-light)]",
      },
      {
        type: "paragraph",
        text: '<em>The average person who buys \u201Chow-to\u201D information gets little to no results. I use these references as examples only.</em>',
        className: "text-[var(--color-text-light)]",
      },
      {
        type: "paragraph",
        text: '<em>Your results will vary and depend on many factors... including, but not limited to, your background, your experience, and your work ethic.</em>',
        className: "text-[var(--color-text-light)]",
      },
      {
        type: "paragraph",
        text: '<em>Any purchase involves risks as well as massive and constant effort and action. If you\u2019re not ready to accept this, please DO NOT GET THIS BOOK.</em>',
        className: "text-[var(--color-text-light)]",
      },
      {
        type: "paragraph",
        text: "And yes, it took me time and energy to get my results.",
      },
      {
        type: "paragraph",
        text: "That said... let me show you directly...",
      },
      {
        type: "heading",
        text: "How I Went From 89 Kilos to 76.3 Kilos by Ignoring Conventional Wisdom, Breaking All the Rules, and Completely Flipping the Weight Loss Model",
        level: 2,
      },
      {
        type: "image",
        src: "/images/nbs/before-after.svg",
        alt: "Before and after transformation — 89kg to 76.3kg",
      },
      {
        type: "paragraph",
        text: '<strong>This Is Something Completely New, Completely Different From Anything You\u2019ve Ever Heard</strong> \u2014 Read the Story Below to Discover the Neutral Basal System',
      },
      {
        type: "paragraph",
        text: '<em>From: Kele Diabat\u00e9\u2019s laptop<br/>Re: Losing 2-3kg per month sustainably (and why this is your only way out)</em>',
      },
      {
        type: "paragraph",
        text: "And I Did It Using a Completely Counter-Intuitive Model That I\u2019m About to Share With You On This Very Page...",
      },
      {
        type: "paragraph",
        text: "The same Neutral Basal System model that men around the world are now using to lose weight...",
      },
      {
        type: "paragraph",
        text: "...And in turn lose faster than ever before...",
      },
      {
        type: "paragraph",
        text: '...While saving money so they can focus on <strong>WHAT THEY WANT</strong>...',
      },
      {
        type: "paragraph",
        text: "...And best of all, keeping their social life intact.",
      },
      {
        type: "paragraph",
        text: "This Neutral Basal System is different from any method you\u2019ve heard of before...",
      },
      {
        type: "paragraph",
        text: "...It\u2019s something completely different, because...",
      },
      {
        type: "list",
        items: [
          "We don\u2019t focus on intensive exercise",
          "We don\u2019t focus on calorie counting",
          "We don\u2019t focus on restrictive diets",
          "We don\u2019t focus on dietary supplements",
          "We don\u2019t focus on social sacrifices",
        ],
      },
      {
        type: "paragraph",
        text: "In fact: we rarely (if ever) do what the fitness industry tells you to do.",
      },
      {
        type: "paragraph",
        text: "Instead, we use the Neutral Basal System...",
      },
      {
        type: "paragraph",
        text: "It\u2019s something completely different and it has the power to change everything for you...",
      },
      {
        type: "paragraph",
        text: "...Because it changed everything for me.",
      },
      {
        type: "paragraph",
        text: "The Neutral Basal System model allowed me to get rid of 99% of all the bullshit I hated when it came to losing weight...",
      },
      {
        type: "list",
        items: [
          "Spending hours at the gym",
          "Counting every calorie consumed",
          "Following complicated diets with 47 rules",
          "Buying overpriced foods",
          "Sacrificing my social life",
        ],
      },
      {
        type: "heading",
        text: "The Neutral Basal System Freed Me From All That and Allowed Me to Lose 12 Kilos in 4 Months",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Here\u2019s what my life looked like before (and if you\u2019ve ever tried to lose weight, then I\u2019m sure you can relate)...",
      },
      {
        type: "paragraph",
        text: 'I call it the <span class="text-[var(--color-red)] font-bold">\u201CFailure Cycle\u201D</span>:',
      },
      {
        type: "list",
        items: [
          "<strong>Step 1</strong> \u2014 Decide to lose weight with motivation",
          "<strong>Step 2</strong> \u2014 Search for THE miracle method on the Internet",
          "<strong>Step 3</strong> \u2014 Start a strict diet and exercise program",
          "<strong>Step 4</strong> \u2014 Hold on for 2-3 weeks with a lot of effort",
          "<strong>Step 5</strong> \u2014 Break during a social event or from fatigue",
          "<strong>Step 6</strong> \u2014 Feel guilty and tell yourself you lack willpower",
          "<strong>Step 7</strong> \u2014 Regain the lost weight (and sometimes more)",
          "<strong>Step 8</strong> \u2014 Start over",
        ],
        ordered: true,
      },
      {
        type: "paragraph",
        text: "The Failure Cycle not only sucked, but kept me stuck for years \u2014 forcing me to stay frustrated with my weight while working hard.",
      },
      {
        type: "paragraph",
        text: "To be honest...",
      },
      {
        type: "paragraph",
        text: "...I almost gave up on this whole idea of losing weight easily.",
      },
      {
        type: "paragraph",
        text: "...But before giving up...",
      },
      {
        type: "paragraph",
        text: "I wanted to try something.",
      },
      {
        type: "paragraph",
        text: "Something that \u2014 if it worked.",
      },
      {
        type: "paragraph",
        text: '<strong>Would change everything.</strong>',
      },
      { type: "cta" },
      {
        type: "heading",
        text: "And I Put This Entire System Into a 40-Page Book Called \u201CNeutral Basal System\u201D and You Can Start Reading It In Just a Few Moments...",
        level: 2,
      },
      {
        type: "image",
        src: "/images/nbs/book-cover.svg",
        alt: "Neutral Basal System — 40-page ebook",
        className: "max-w-[300px] mx-auto",
      },
      {
        type: "paragraph",
        text: "But before you do.",
      },
      {
        type: "paragraph",
        text: "I\u2019d like to introduce myself and tell you about how this all happened.",
      },
      {
        type: "paragraph",
        text: "My name is Kele Diabat\u00e9...",
      },
      {
        type: "paragraph",
        text: "You\u2019ve probably never heard this name before. That\u2019s intentional.",
      },
      {
        type: "paragraph",
        text: "My life is pretty good... I was an international fencer for 20 years, representing Mali. I was twice a finalist in Olympic qualifications. I developed a unique expertise of the human body and its adaptation capabilities.",
      },
      {
        type: "paragraph",
        text: "As I write this, I currently live in Paris.",
      },
      {
        type: "heading",
        text: "As We Get to Know Each Other... You\u2019ll Quickly Realize That I\u2019m the Luckiest Person on Earth \u2014 So Let\u2019s Talk About Where I Was in March 2024",
        level: 2,
      },
      {
        type: "paragraph",
        text: "I was 28 years old and weighed 89 kilos.",
      },
      {
        type: "paragraph",
        text: "I had no specific weight goal.",
      },
      {
        type: "paragraph",
        text: "I had no clear and simple method.",
      },
      {
        type: "paragraph",
        text: "I had no system that respected my current life.",
      },
      {
        type: "paragraph",
        text: "...and I had just missed my second Olympic qualification in the finals.",
      },
      {
        type: "paragraph",
        text: "There\u2019s a stupid myth out there... that the more you suffer, the better results you get.",
      },
      {
        type: "paragraph",
        text: "...Well sometimes that\u2019s not the case...",
      },
      {
        type: "paragraph",
        text: "And if you want to lose weight sustainably, it\u2019s almost never the answer...",
      },
      {
        type: "paragraph",
        text: "I know this, because I tried.",
      },
      {
        type: "paragraph",
        text: "I gave it everything.",
      },
      {
        type: "paragraph",
        text: "I gave my BEST shot.",
      },
      {
        type: "paragraph",
        text: "And it didn\u2019t work.",
      },
      {
        type: "heading",
        text: "I Ended Up With the Same Disappointing Results as Everyone Else and I Hated It...",
        level: 2,
      },
      {
        type: "paragraph",
        text: "I hated it because it didn\u2019t respect my life, my constraints, my desires.",
      },
      {
        type: "paragraph",
        text: "I had goals, dreams and aspirations... I wanted more from life...",
      },
      {
        type: "paragraph",
        text: "...and traditional weight loss methods weren\u2019t going to work.",
      },
      {
        type: "paragraph",
        text: "So I did what everyone does in this situation.",
      },
      {
        type: "paragraph",
        text: "I started looking for a way out.",
      },
      {
        type: "paragraph",
        text: "I searched everywhere and a few months later I found it.",
      },
      {
        type: "paragraph",
        text: 'I came across an approach where a group of people talked about how they <strong>\u201Coptimized their basal metabolism\u201D</strong> to create natural weight loss conditions.',
      },
      {
        type: "paragraph",
        text: "It was a cool concept to me, and as I did more research, I found that most of them were like me.",
      },
      {
        type: "paragraph",
        text: "They also wanted to lose weight without sacrificing their life.",
      },
      {
        type: "paragraph",
        text: "The only difference was that they were using the Neutral Basal System.",
      },
      {
        type: "heading",
        text: "The Neutral Basal System is One of the Most Legitimate and Easy-to-Use Approaches If You Want to Lose Weight Sustainably",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Just think about it:",
      },
      {
        type: "paragraph",
        text: 'Why keep forcing your body with methods it rejects? <span class="text-[var(--color-green)] font-bold">The Neutral Basal System works WITH your physiology.</span>',
      },
      {
        type: "paragraph",
        text: 'Why complicate with 47 dietary rules? <span class="text-[var(--color-green)] font-bold">The Neutral Basal System has a simple and clear protocol.</span>',
      },
      {
        type: "paragraph",
        text: 'Why spend a fortune on supplements and special foods? <span class="text-[var(--color-green)] font-bold">The Neutral Basal System saves you money.</span>',
      },
      {
        type: "paragraph",
        text: 'Why sacrifice your social life? <span class="text-[var(--color-green)] font-bold">The Neutral Basal System adapts to your lifestyle.</span>',
      },
      {
        type: "paragraph",
        text: 'Why exhaust yourself with intensive exercise? <span class="text-[var(--color-green)] font-bold">The Neutral Basal System optimizes your metabolism naturally.</span>',
      },
      { type: "cta" },
      {
        type: "heading",
        text: "You Don\u2019t Even Need to Disrupt Your Life",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Which means you can keep your social habits, your work rhythm, your food pleasures...",
      },
      {
        type: "paragraph",
        text: "All you have to do is activate the Neutral Basal System according to the precise protocol.",
      },
      {
        type: "heading",
        text: "That Was 8 Months Ago, and Fast Forward to Today and It Almost Seems Like a Bad Dream",
        level: 2,
      },
      {
        type: "paragraph",
        text: "I proved that the idea of \u201Cfollowing the traditional weight loss path\u201D was completely wrong...",
      },
      {
        type: "paragraph",
        text: "Instead of spending hours at the gym and counting calories,",
      },
      {
        type: "paragraph",
        text: "I apply the Neutral Basal System according to a simple protocol and live my life normally.",
      },
      {
        type: "paragraph",
        text: '<strong>I went from 89 kilos to 76.3 kilos.</strong>',
      },
      {
        type: "paragraph",
        text: "I have my social life intact.",
      },
      {
        type: "heading",
        text: "Do You Want to Know What the Main Difference Is With the Neutral Basal System Model and This \u201COld Way\u201D of Doing Things?",
        level: 2,
      },
      {
        type: "paragraph",
        text: '<span class="text-[var(--color-gold)] font-bold">I work WITH my basal metabolism instead of fighting it.</span>',
      },
      {
        type: "paragraph",
        text: "Rather than doing all those things I mentioned above to lose weight, here\u2019s what it looks like now...",
      },
      {
        type: "paragraph",
        text: "I activate the Neutral Basal System according to the protocol. The rest of the time, I live normally.",
      },
      {
        type: "heading",
        text: "And the Result of Using This New Way?",
        level: 3,
      },
      {
        type: "paragraph",
        text: '<strong>Stable, predictable weight loss without constant mental effort.</strong>',
      },
      {
        type: "paragraph",
        text: "I get a confidence in myself that I never had regarding controlling my weight.",
      },
      {
        type: "paragraph",
        text: "And the best part is I know I can maintain these results for life.",
      },
      { type: "divider" },
      {
        type: "heading",
        text: "Mistake #1 That Everyone Makes is Believing You Have to Suffer to Lose Weight",
        level: 2,
        color: "var(--color-red)",
      },
      {
        type: "paragraph",
        text: "There are two types of people who want to lose weight.",
      },
      {
        type: "paragraph",
        text: 'There are <span class="text-[var(--color-red)] font-bold">\u201CWillpower Warriors\u201D</span> and there are <span class="text-[var(--color-green)] font-bold">\u201CSmart Optimizers\u201D</span>.',
      },
      {
        type: "paragraph",
        text: "Willpower Warriors are always there trying to force their body with more effort, more discipline, more sacrifice.",
      },
      {
        type: "paragraph",
        text: "Their strategy is to try to dominate their physiology through mental force.",
      },
      {
        type: "paragraph",
        text: "And by focusing on this strategy \u2014 they spend crazy time on...",
      },
      {
        type: "list",
        items: [
          "Counting every calorie consumed",
          "Training even when they\u2019re exhausted",
          "Depriving themselves of all their food pleasures",
          "Feeling guilty at every \u201Cslip-up\u201D",
        ],
      },
      {
        type: "paragraph",
        text: "The problem isn\u2019t the model itself, it\u2019s that it creates a constant war between you and your body.",
      },
      {
        type: "paragraph",
        text: 'The solution? <strong>Become a Smart Optimizer.</strong>',
      },
      {
        type: "paragraph",
        text: "...I explain everything in the Neutral Basal System, it\u2019s a 40-page book that shows you everything you need to know.",
      },
      { type: "cta" },
      { type: "divider" },
      {
        type: "heading",
        text: "Here\u2019s the 12-Kilo Idea Behind the Neutral Basal System Model",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Right now, as you read this very page...",
      },
      {
        type: "paragraph",
        text: "The Internet has completely changed how people access health and fitness information over the past few years.",
      },
      {
        type: "paragraph",
        text: "This has created an information overload of contradictory information for people who want to lose weight.",
      },
      {
        type: "paragraph",
        text: "The Neutral Basal System actually respects your current life instead of disrupting it.",
      },
      {
        type: "heading",
        text: "They Prefer to Optimize Their Basal Metabolism Rather Than Fight Against It",
        level: 3,
      },
      {
        type: "paragraph",
        text: "The Neutral Basal System gives you a precise framework to create optimal weight loss conditions.",
      },
      {
        type: "paragraph",
        text: "When you approach your weight loss using this model, the results are amplified and sustainable.",
      },
      {
        type: "paragraph",
        text: "With old methods, you end up exhausted, frustrated, and you regain the lost weight.",
      },
      {
        type: "paragraph",
        text: "What I\u2019m saying is that if your goal is to lose weight sustainably, traditional methods might actually be what\u2019s preventing you from getting it!",
      },
      {
        type: "heading",
        text: "And You Know What? I\u2019m Going to Bet My Entire Reputation on This Promise",
        level: 2,
      },
      {
        type: "highlight",
        text: "You can lose 2 to 3 kilos per month sustainably.",
        variant: "yellow",
      },
      {
        type: "paragraph",
        text: "Here\u2019s what I want you to do now: set your calendar now \u2014 set it to 1 month from today.",
      },
      {
        type: "paragraph",
        text: "Because if you implement everything I\u2019m going to share with you in the Neutral Basal System book.",
      },
      {
        type: "paragraph",
        text: '<strong>That\u2019s when you\u2019ll start seeing your first 2-3 kilos lost.</strong>',
      },
      { type: "divider" },
      {
        type: "heading",
        text: "If I Can Do This, You Can Do It Too!",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Because other people are doing it too right now using the Neutral Basal System...",
      },
      {
        type: "paragraph",
        text: "It took me months to \u201Cfigure it all out\u201D...",
      },
      {
        type: "paragraph",
        text: "...and a few more months to perfect it.",
      },
      {
        type: "paragraph",
        text: "Which means there\u2019s nothing left for you to figure out.",
      },
      {
        type: "paragraph",
        text: '<strong>I\u2019ve already done all the hard work for you.</strong>',
      },
      {
        type: "paragraph",
        text: "You just need to download this book and most importantly \u2014 implement it!",
      },
      { type: "cta" },
      { type: "divider" },
      {
        type: "heading",
        text: "And Before You Download the Neutral Basal System Book... I Want You to Know There\u2019s No Scam!",
        level: 2,
      },
      {
        type: "paragraph",
        text: "I realize this is very cheap and I\u2019m practically giving it away...",
      },
      {
        type: "paragraph",
        text: 'And you\u2019re probably wondering: <em>\u201CIf you\u2019re doing so well with this, why would you give it away for almost nothing?\u201D</em>...',
      },
      {
        type: "paragraph",
        text: "There is NO hidden \u201Ccontinuity program\u201D you have to try or anything close to it.",
      },
      {
        type: "paragraph",
        text: 'I\u2019m literally giving you this entire book, for $29, as a way to <strong>\u201Cput my best foot forward\u201D</strong> and demonstrate real value.',
      },
      {
        type: "paragraph",
        text: "My hope is that you\u2019ll love it and it will be the beginning of a good business relationship for years to come.",
      },
      {
        type: "heading",
        text: "This Won\u2019t Last Long",
        level: 2,
        color: "var(--color-red)",
      },
      {
        type: "paragraph",
        text: "I was planning to sell this book for $97, but that meant I had to print copies, store them and ship them.",
      },
      {
        type: "paragraph",
        text: "Then I sold the Neutral Basal System book for $67 and over 500 people downloaded it at that price...",
      },
      {
        type: "heading",
        text: "By Lowering the Price to $29 It Allows Me to Impact More People and Help Them Lose Weight Sustainably",
        level: 3,
      },
      {
        type: "paragraph",
        text: "I consider this a real win-win...",
      },
      {
        type: "paragraph",
        text: "Also in most cases, I take a loss when I sell the book at this price. It costs me just over $35 in advertising fees to sell one book.",
      },
      {
        type: "paragraph",
        text: "I\u2019m making this offer with the idea that you\u2019ll be very impressed with what I give you today, and that you\u2019ll want to do more business with me in the future.",
      },
      {
        type: "highlight",
        text: "WARNING: This Offer Expires Soon \u2014 In 72 hours, the price will go from $29 to $97.",
        variant: "warm",
      },
      { type: "cta" },
    ],
  },

  // What you get — 3-step system
  whatYouGet: {
    heading: "HERE\u2019S THE EXACT SYSTEM REVEALED IN THE NEUTRAL BASAL SYSTEM BOOK",
    subheading: "3 simple steps to lose 2-3 kilos per month sustainably",
    features: [
      {
        title: "Step 1 \u2014 Understand Your Basal Metabolism",
        description:
          "Learn how your basal metabolism works and how to optimize it for natural weight loss. No calorie counting, no complicated formulas.",
        imagePosition: "left",
      },
      {
        title: "Step 2 \u2014 Set Up the Neutral Basal System Protocol",
        description:
          "Follow the precise protocol to activate your body\u2019s natural weight loss conditions. Simple, clear, and it adapts to your lifestyle.",
        imagePosition: "right",
      },
      {
        title: "Step 3 \u2014 Track Your Progress",
        description:
          "Use the right indicators to track your transformation. Know exactly where you are and where you\u2019re going \u2014 without obsessing over the scale.",
        imagePosition: "left",
      },
    ],
  },

  // Also getting — 10 discovery items
  alsoGetting: {
    heading: "Here\u2019s What You\u2019ll Also Discover In the Neutral Basal System",
    items: [
      { text: "<strong>How to optimize your basal metabolism</strong> \u2014 So you can lose weight naturally" },
      { text: "<strong>The secret behind sustainable weight loss</strong> \u2014 So you can maintain your results for life" },
      { text: "<strong>How to avoid the fatal mistake 90% of people make</strong> \u2014 And what to do instead" },
      { text: "<strong>The step-by-step process to activate the Neutral Basal System</strong> \u2014 So you can accelerate your results" },
      { text: "<strong>The little-known trick to manage plateaus</strong> \u2014 And how to use it to your advantage" },
      { text: "<strong>The 15 mistakes that sabotage your results</strong> \u2014 And how to avoid them completely" },
      { text: "<strong>How to calculate your personalized goals</strong> \u2014 Based on your unique profile" },
      { text: "<strong>The anti-quit mindset</strong> \u2014 To stick with it long-term" },
      { text: "<strong>How to maintain your results for life</strong> \u2014 The 80/20 principle" },
      { text: "<strong>Special situations</strong> \u2014 Travel, events, constraints" },
    ],
  },

  // Bonuses — 10 bonus items ($214 value)
  bonuses: {
    heading: "PLUS, You Get the Complete Bonus Pack FREE",
    value: "Total Bonus Value: $214",
    subheading: "These bonuses are included free with your purchase today",
    items: [
      {
        number: 1,
        title: "Weight Projection Chart",
        description: "Visualize your future progress with a clear projection of your weight loss journey.",
      },
      {
        number: 2,
        title: "Neutral Basal Log Book",
        description: "Structured tracking journal to monitor your progress daily.",
      },
      {
        number: 3,
        title: "Quick Implementation Checklist",
        description: "3-minute verification checklist to ensure you\u2019re on track.",
      },
      {
        number: 4,
        title: "Anti-Quit Mental Reset",
        description: "Express anti-demotivation plan for when things get tough.",
      },
      {
        number: 5,
        title: "Fatal Errors Index",
        description: "The 15 traps to avoid \u2014 save months of trial and error.",
      },
      {
        number: 6,
        title: "Recalibration Protocols",
        description: "Adjustments if progress slows \u2014 get back on track fast.",
      },
      {
        number: 7,
        title: "Victory Journal",
        description: "Record every success and build unstoppable momentum.",
      },
      {
        number: 8,
        title: "Basal Stability Test",
        description: "Self-assessment of your progress \u2014 know exactly where you stand.",
      },
      {
        number: 9,
        title: "Basal Progress Grid",
        description: "Measurable tracking sheet for data-driven results.",
      },
      {
        number: 10,
        title: "Personalized Initial Audit",
        description: "Startup questionnaire to customize the system for your profile.",
      },
    ],
  },

  // FAQ
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      q: "What exactly is the Neutral Basal System?",
      a: "It\u2019s a 40-page ebook that reveals a counter-intuitive approach to weight loss based on optimizing your basal metabolism. Instead of fighting your body with extreme diets and exercise, you work WITH your physiology to create natural weight loss conditions.",
    },
    {
      q: "Do I need to exercise?",
      a: "No. The Neutral Basal System does not require intensive exercise. It works by optimizing your basal metabolism \u2014 the energy your body burns at rest. Of course, some movement is always good, but you don\u2019t need to spend hours at the gym.",
    },
    {
      q: "How fast will I see results?",
      a: "Most people start seeing their first 2-3 kilos lost within the first month of implementing the protocol. Results vary depending on your starting point, consistency, and individual physiology.",
    },
    {
      q: "Is there a guarantee?",
      a: "Yes \u2014 you get a 30-day money-back guarantee. Download the book, read it, apply what you learn. If you\u2019re not satisfied for any reason, just send an email and we\u2019ll refund your $29. You can even keep the book.",
    },
    {
      q: "Will this work for women too?",
      a: "The physiological principles behind the Neutral Basal System apply to all humans. However, the book was written from the perspective of a male athlete. Women may need to account for hormonal cycles and other factors. The core protocol still applies.",
    },
    {
      q: "Why is it so cheap?",
      a: "I\u2019m offering the book at $29 (down from $97) to reach as many people as possible. It costs me over $35 in advertising to sell one book, so I\u2019m actually losing money on the initial sale. My hope is that you\u2019ll love the book and want to do more business together in the future.",
    },
    {
      q: "Is this a subscription or one-time payment?",
      a: "One-time payment of $29. There is no hidden continuity program, no recurring charges, no surprises. You pay once and get instant access to the complete ebook plus all 10 bonuses.",
    },
    {
      q: "How is this delivered?",
      a: "Instantly. After purchase, you\u2019ll get immediate access to download the 40-page ebook and all bonus materials. You can start reading within 2 minutes of purchasing.",
    },
  ],

  // Guarantee
  guarantee: {
    heading: "YOU ALSO GET THE WORLD\u2019S BEST MONEY-BACK GUARANTEE",
    badgeSrc: "/images/nbs/guarantee-badge.svg",
    paragraphs: [
      "I know that before jumping into anything\u2026 I\u2019d like to know what I\u2019m buying and that it\u2019s backed by a solid money-back guarantee.",
      "<strong><em>And I want you to be comfortable with this purchase.</em></strong>",
      "And even though it\u2019s only $29 \u2014 you worked for that money and it counts.",
      'As my grandfather used to say \u201CTest drive the car before you drive it off the lot\u201D...',
      "So here\u2019s what I\u2019ve arranged:",
      "Download the book, read it, but more importantly apply what you learn in it.",
      "And if you\u2019re not blown away by what you learn.",
      "Then just send me an email and ask for a refund within 30 days.",
      '<strong>We\u2019ll refund your $29 and let you keep the Neutral Basal System book for free.</strong>',
      "How\u2019s that for the world\u2019s best money-back guarantee? I\u2019d say pretty good!",
    ],
  },

  // Footer
  footer: {
    copyrightText: "\u00A9 2025 Kele Diabat\u00e9. All rights reserved.",
    links: [
      { label: "Home", href: "/" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
    disclaimer:
      "This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. The information provided on this page and in the Neutral Basal System ebook is for educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or weight management. Never disregard professional medical advice or delay in seeking it because of something you have read in this book. Individual results may vary. The testimonials and examples used are not intended to represent or guarantee that anyone will achieve the same or similar results. Your results will depend on many factors including but not limited to your background, experience, and work ethic. All purchases involve risk as well as effort and action. If you\u2019re not willing to accept that, please do not purchase this product.",
  },

  // Metadata
  metaTitle: "Neutral Basal System | Lose 2-3kg/Month Sustainably | $29",
  metaDescription:
    "Discover the counter-intuitive approach to weight loss. The Neutral Basal System helps you lose 2-3kg per month without exercise, dieting, or counting calories. 40-page ebook by Kele Diabat\u00e9. 30-day money-back guarantee.",
};

export default config;
