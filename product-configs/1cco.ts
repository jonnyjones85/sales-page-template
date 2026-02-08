import type { ProductConfig } from "@/lib/product-config";

const config: ProductConfig = {
  // Core product info
  name: "1 Click Client Onboarding Install Pack",
  slug: "1cco",
  price: "$47.00",
  originalPrice: "$297.00",
  savings: "$250.00",
  checkoutUrl: "#checkout",
  guaranteeDays: 30,

  // Top bar
  topBar: {
    helpEmail: "info@8figuresystems.io",
    helpText: "Need Help? Click HERE to Contact Us",
    logoSrc: "/images/1cco/6552ff2ff4fe3f5193867271.png",
    logoAlt: "7-Figure Systems",
  },

  // Hero section
  hero: {
    bannerSrc: "/images/1cco/65644daabd24ba5e7d633716.webp",
    headline:
      'How To <span class="text-[var(--color-gold)]">Streamline Client Onboarding</span> For your Coaching or Agency Business',
    subheadline:
      "For Any Agency or Coaching Business Looking To Fully Streamline Their Client Onboarding Process...",
    description: [
      '1 CLICK CLIENT ONBOARDING <span class="text-[var(--color-gold)] font-bold">IS THE ULTIMATE SHORTCUT</span>',
      'And I Did It By Using A <strong>Completely Counterintuitive</strong> Model That I\'m About To Share With You On This Very Page\u2026',
    ],
    video: {
      vimeoId: "896009929",
      title: "1 Click Client Onboarding Overview",
    },
    ctaBadgeImg: "/images/1cco/c6c86cdd-f716-4fba-8829-264762bd7588.jpg",
    guaranteeBadgeImg: "/images/1cco/6508e799a8ce7068941edcae.png",
  },

  // Value prop (2/3 + 1/3 layout)
  valueProp: {
    introParagraphs: [
      "We put everything you need to know about streamlining your client onboarding into an easy-to-follow install pack that you can set up in just 30 minutes.",
      "Whether you're a coach, consultant, agency owner, or service provider \u2014 this system works for <strong>any business that onboards clients</strong>.",
    ],
    featureDiagram: "/images/1cco/656b079ee33f7cbc7b2c7467.png",
    whatThisMeansHeading: "What This Means For You",
    whatThisMeansParagraphs: [
      "Every business scales the same way: better systems = more time = more clients = more revenue.",
      "The 1 Click Client Onboarding Install Pack gives you the exact system we use to onboard clients seamlessly, track satisfaction, and turn one-time buyers into lifetime clients.",
    ],
    caseStudyVideos: [
      {
        name: "Bastiaan Slot",
        tagline: "Agency Owner",
        video: { vimeoId: "896009670", title: "Bastiaan Slot Testimonial" },
      },
      {
        name: "Franck Koomen",
        tagline: "Consultant",
        video: { vimeoId: "896010149", title: "Franck Koomen Testimonial" },
      },
      {
        name: "Yoon Kim",
        tagline: "Coach",
        video: { vimeoId: "896009973", title: "Yoon Kim Testimonial" },
      },
      {
        name: "Serge Gatari",
        tagline: "Agency Owner",
        video: { vimeoId: "896009721", title: "Serge Gatari Testimonial" },
      },
    ],
    sidebarProductCard: "/images/1cco/656b079ee33f7cbc7b2c7467.png",
  },

  // Sales letter
  salesLetter: {
    blocks: [
      {
        type: "heading",
        text: "Here\u2019s The Truth About Client Onboarding...",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Most businesses lose clients not because their product or service isn\u2019t good enough\u2026 but because their <strong>onboarding experience is broken</strong>.",
      },
      {
        type: "paragraph",
        text: "Think about it: your client just made the decision to trust you with their money. They\u2019re excited. They\u2019re ready to get started. And then\u2026",
      },
      {
        type: "list",
        items: [
          "They get a generic welcome email (if they get one at all)",
          "They have no idea what happens next",
          "They wait days to hear back from someone",
          "They start to feel buyer\u2019s remorse creeping in",
          "They wonder if they made the right decision",
        ],
      },
      {
        type: "paragraph",
        text: '<span class="text-[var(--color-red)] font-bold">This is where most businesses FAIL.</span> Not in the sale\u2026 but in what happens <em>after</em> the sale.',
      },
      { type: "divider" },
      {
        type: "heading",
        text: "What If You Could Fix All Of This In 30 Minutes?",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Imagine a world where every new client gets an <strong>incredible first impression</strong>. Where they feel taken care of from the moment they hit \u201Cbuy.\u201D Where your onboarding runs on autopilot while you focus on delivering results.",
      },
      {
        type: "paragraph",
        text: "That\u2019s exactly what the 1 Click Client Onboarding Install Pack does for you.",
      },
      { type: "cta" },
      {
        type: "heading",
        text: "Here\u2019s What\u2019s Inside The Install Pack:",
        level: 2,
      },
      {
        type: "list",
        items: [
          "<strong>Onboarding Form</strong> \u2014 Fully streamline client delivery with a professional intake form",
          "<strong>7-Figure Business Analysis</strong> \u2014 Identify bottlenecks and scale your business",
          "<strong>Feedback Framework</strong> \u2014 Ensure clients are happy and on track to succeed",
          "<strong>Onboarding Call Mastery</strong> \u2014 Run calls that set clients up for success",
          "<strong>Client Delivery Materials</strong> \u2014 Professional templates for every touchpoint",
          "<strong>Client CRM</strong> \u2014 Track every client in one place",
          "<strong>Client Analytics Dashboard</strong> \u2014 Data-driven insights on client satisfaction",
        ],
        ordered: true,
      },
      { type: "cta" },
      { type: "divider" },
      {
        type: "heading",
        text: "Don\u2019t Just Take Our Word For It\u2026",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Here\u2019s what real business owners are saying about the 1 Click Client Onboarding system:",
      },
      {
        type: "case-study",
        caseStudy: {
          name: "Bastiaan Slot",
          tagline: "Agency Owner \u2014 Scaled client capacity 3x",
          video: {
            vimeoId: "896009670",
            title: "Bastiaan Slot Testimonial",
          },
        },
      },
      {
        type: "case-study",
        caseStudy: {
          name: "Franck Koomen",
          tagline: "Consultant \u2014 Reduced onboarding time by 80%",
          video: {
            vimeoId: "896010149",
            title: "Franck Koomen Testimonial",
          },
        },
      },
      { type: "cta" },
      { type: "divider" },
      {
        type: "heading",
        text: "The Bottom Line",
        level: 2,
      },
      {
        type: "paragraph",
        text: "You can keep doing things the old way \u2014 manually onboarding each client, hoping you don\u2019t drop the ball, crossing your fingers that they stick around\u2026",
      },
      {
        type: "paragraph",
        text: 'Or you can install a <strong>proven system</strong> that handles it all for you. For <span class="text-[var(--color-green)] font-bold">just $47</span>.',
      },
      {
        type: "paragraph",
        text: "The choice seems pretty obvious, doesn\u2019t it?",
      },
      { type: "cta" },
    ],
  },

  // What you get
  whatYouGet: {
    heading:
      "HERE\u2019S EVERYTHING YOU\u2019RE GETTING INSTANT ACCESS TO TODAY FOR ONLY $47.00",
    features: [
      {
        title: "Onboarding Form",
        description:
          "Fully streamline client delivery with a professional intake form that collects everything you need upfront.",
        imageSrc: "/images/1cco/65799d0c12a1a54b3a325743.png",
        imagePosition: "left",
      },
      {
        title: "7-Figure Business Analysis",
        description:
          "Identify bottlenecks and scale your business with our proven analysis framework.",
        imageSrc: "/images/1cco/656b4f7245e5a053f667e975.png",
        imagePosition: "right",
      },
      {
        title: "Feedback Framework",
        description:
          "Ensure clients are happy and on track to succeed with automated feedback collection.",
        imageSrc: "/images/1cco/656b4f72e33f7c7cd82cb015.png",
        imagePosition: "left",
      },
      {
        title: "Client CRM & Analytics Dashboard",
        description:
          "Track every client in one place with data-driven insights on satisfaction and progress.",
        imageSrc: "/images/1cco/656b4f7245e5a0875f67e97b.png",
        imagePosition: "right",
      },
    ],
  },

  // Hormozi quote
  hormoziQuote: {
    text: "The goal is not to get a client. The goal is to keep a client.",
    author: "Alex Hormozi",
  },

  // Sneak peek
  sneakPeek: {
    heading: "Check Out The Step-By-Step Video Demo",
    video: {
      vimeoId: "896009929",
      title: "1 Click Client Onboarding Demo",
    },
  },

  // Also getting
  alsoGetting: {
    heading: "You\u2019re Also Getting...",
    items: [
      { text: "<strong>Onboarding Call Mastery</strong> \u2014 Run calls that set clients up for success from day one." },
      { text: "<strong>Client Delivery Materials</strong> \u2014 Professional templates for every touchpoint in the client journey." },
      { text: "<strong>Lifetime Updates</strong> \u2014 As we improve the system, you get every update free." },
    ],
  },

  // Bonuses
  bonuses: {
    heading: "PLUS, You Get These 7 Bonuses FREE",
    value: "Total Bonus Value: $3,929",
    items: [
      {
        number: 1,
        title: "Bonus #1",
        imageSrc: "/images/1cco/65799d0c12a1a54b3a325743.png",
      },
      {
        number: 2,
        title: "Bonus #2",
        imageSrc: "/images/1cco/656b4f7245e5a053f667e975.png",
      },
      {
        number: 3,
        title: "Bonus #3",
        imageSrc: "/images/1cco/656b4f72e33f7c7cd82cb015.png",
      },
      {
        number: 4,
        title: "Bonus #4",
        imageSrc: "/images/1cco/656b4f7245e5a00ef767e976.png",
      },
      {
        number: 5,
        title: "Bonus #5",
        imageSrc: "/images/1cco/656b4f720af0f7af199510ef.png",
      },
      {
        number: 6,
        title: "Bonus #6",
        imageSrc: "/images/1cco/656b4f7245e5a0692a67e97c.png",
      },
      {
        number: 7,
        title: "Bonus #7",
        imageSrc: "/images/1cco/656b4f720af0f7ff159510f0.png",
      },
    ],
  },

  // FAQ
  faqs: [
    {
      q: "Who is this for?",
      a: "This is for anyone who wants to onboard clients, automatically. Coaches, consultants, agency owners, artists, professional service providers, influencers, information marketers, freelancers, content creators, and so on.",
    },
    {
      q: "Do you offer more in-depth help?",
      a: 'Yes. Nothing was held back while creating this install pack but for the people who want further assistance, we do offer opportunities to "upgrade" your order after purchasing. We also have our group of private clients (by application only) if you want us to help you implement everything.',
    },
    {
      q: "I want this, what exactly am I getting?",
      a: "You are getting the install pack, available instantly. You are getting the Onboarding Form to fully streamline client delivery. You are getting the 7-Figure Business Analysis training to identify bottlenecks and scale your business. You are getting our advanced Feedback Framework to ensure clients are happy and on track to succeed. You are getting the Onboarding Call Mastery, our best Client Delivery Materials, a powerful Client CRM, and a highly praised dashboard with Client Analytics.",
    },
    {
      q: "What is the tech stack required?",
      a: "In order to have the best experience you will need the following tech stack: Google Sheets, Google Form, Zapier Account Professional Plan and (optional) PandaDoc Business Plan. If you are looking to build the same infrastructure using other tools, you are welcome to do so.",
    },
    {
      q: "What is the 1 Click Client Onboarding Install Pack?",
      a: "The 1 Click Client Onboarding Install Pack is a solution to the common problem of not being able to onboard clients seamlessly with just one click and streamlining client success. We are able to streamline the entire client onboarding process and save you multiple hours of work per week by giving you the exact install pack you need to install in your business in just 30 minutes, even if you don\u2019t have prior experience. We instantly maximize client experience and differentiate ourselves, because we deliver on what we promised, compared to the competition that overpromises and underdelivers. The next step is simply to continue bringing value (the install pack shows you how to track client satisfaction) and convert these clients to lifetime buyers.",
    },
    {
      q: "Do you have any success stories?",
      a: "Yes. This didn\u2019t just work for us. We encourage you to watch the videos above from Bastiaan Slot, Franck Koomen, Yoon Kim, Meghan Wieske and Daphne Kroeze, Serge Gatari, Agus Nievas, and others to get their side of the story.",
    },
    {
      q: "Is there a guarantee?",
      a: "Yes, you get a 30-day money-back guarantee in case it\u2019s not for you.",
    },
  ],

  // Guarantee
  guarantee: {
    heading: "YOUR PURCHASE IS BACKED BY OUR UNCONDITIONAL MONEY BACK GUARANTEE",
    badgeSrc: "/images/1cco/6508e799a8ce7068941edcae.png",
    paragraphs: [
      "I know that before I get into anything\u2026 I\u2019d like to know what I\u2019m buying and that it\u2019s backed by a solid money-back guarantee.",
      "<strong><em>And I want you to be comfortable with this purchase.</em></strong>",
      "And even though it\u2019s only $47.00 \u2013 you worked for that money and it counts.",
      'Like my grandpa used to say "Test drive the car before you drive it off the lot"\u2026',
      "So here\u2019s what I\u2019ve arranged: Download the Install Pack, but more importantly install it.",
      "And if you\u2019re not blown away by what you learn?",
      'Then just shoot us an email at <a href="mailto:info@8figuresystems.io" class="text-[var(--color-blue-link)] underline">info@8figuresystems.io</a>, request a refund within 30 days and we\u2019ll send your money back.',
      "How\u2019s that for a money back guarantee? I\u2019d say pretty good!",
    ],
  },

  // Footer
  footer: {
    copyrightText: "This product is brought to you and copyrighted by 7-Figure Systems",
    links: [
      { label: "Home", href: "/" },
      { label: "1CCO", href: "#checkout" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
    disclaimer:
      "This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. We can not and do not make any guarantees about your ability to get results or earn any money with our ideas, information, tools, or strategies. What we can guarantee is your satisfaction with our training. We give you a 30-day 100% satisfaction guarantee, so if you are not happy for any reason with the quality of our training, just ask for your money back. Please note that the 30-day satisfaction guarantee applies only to the 1 Click Onboarding product ($47) and does not extend to any other products. All upsells and downsells are non-refundable. All sales for these products are final. You should know that all products and services by our company are for educational and informational purposes only. Nothing on this page, any of our websites, or any of our content or curriculum is a promise or guarantee of results or future earnings, and we do not offer any legal, medical, tax or other professional advice. Any financial numbers referenced here, or on any of our sites, are illustrative of concepts only and should not be considered average earnings, exact earnings, or promises for actual or future performance. Use caution and always consult your accountant, lawyer or professional advisor before acting on this or any information related to a lifestyle change or your business or finances. You alone are responsible and accountable for your decisions, actions and results in life, and by your registration here you agree not to attempt to hold us liable for your decisions, actions or results, at any time, under any circumstance. All Rights Reserved 2025",
    badgeSrc: "/images/1cco/6552ff2ff4fe3f5193867271.png",
  },

  // Checkout badge (safe checkout image)
  checkoutBadgeSrc: "/images/1cco/651cbc64b35aba61bfe0b529.png",

  // Metadata
  metaTitle: "1 Click Client Onboarding Install Pack | $47",
  metaDescription:
    "Streamline your client onboarding with the 1 Click Client Onboarding Install Pack. Install in 30 minutes, save hours every week. 30-day money-back guarantee.",
};

export default config;
