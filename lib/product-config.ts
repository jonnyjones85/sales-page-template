/**
 * Enhanced product configuration interface.
 * Drives all content for the sales page template.
 *
 * New product = new config file in product-configs/.
 */

/* ===================================================================
   Content types
   =================================================================== */

export interface VideoConfig {
  vimeoId: string;
  thumbnailSrc?: string;
  title?: string;
}

export interface CaseStudy {
  name: string;
  tagline?: string;
  paragraphs?: string[];
  video?: VideoConfig;
  imageSrc?: string;
}

export interface Feature {
  title: string;
  description: string;
  imageSrc?: string;
  imagePosition?: "left" | "right";
}

export interface Bonus {
  number: number;
  title: string;
  description?: string;
  imageSrc?: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

/* ===================================================================
   Sales letter structured blocks
   =================================================================== */

export type SalesLetterBlock =
  | { type: "heading"; text: string; level?: 1 | 2 | 3; color?: string }
  | { type: "paragraph"; text: string; className?: string }
  | { type: "highlight"; text: string; variant?: "yellow" | "warm" }
  | { type: "image"; src: string; alt?: string; className?: string }
  | { type: "video"; video: VideoConfig }
  | { type: "cta" }
  | { type: "case-study"; caseStudy: CaseStudy }
  | { type: "quote"; text: string; author?: string; className?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "divider" }
  | { type: "html"; content: string };

/* ===================================================================
   Theme configuration
   =================================================================== */

export interface ThemeConfig {
  navyPage?: string;
  navyDark?: string;
  white?: string;
  text?: string;
  gold?: string;
  red?: string;
  green?: string;
  orangeBtn?: string;
  btnText?: string;
}

/* ===================================================================
   Section toggles
   =================================================================== */

export interface SectionToggle {
  topBar?: boolean;
  hero?: boolean;
  valueProp?: boolean;
  salesLetter?: boolean;
  whatYouGet?: boolean;
  hormoziQuote?: boolean;
  stickySidebar?: boolean;
  sneakPeek?: boolean;
  alsoGetting?: boolean;
  bonuses?: boolean;
  faq?: boolean;
  guarantee?: boolean;
  divider?: boolean;
  footer?: boolean;
}

/* ===================================================================
   Main product config
   =================================================================== */

export interface ProductConfig {
  // Core product info
  name: string;
  slug: string;
  price: string;
  originalPrice: string;
  savings: string;
  checkoutUrl: string;
  guaranteeDays: number;

  // Theme customization
  theme?: ThemeConfig;

  // Section toggles (all default to true)
  sections?: SectionToggle;

  // Section order (default: natural order)
  sectionOrder?: string[];

  // Top bar
  topBar: {
    helpEmail: string;
    helpText?: string;
    logoSrc: string;
    logoAlt?: string;
    buttonText?: string;
    buttonHref?: string;
  };

  // Hero section
  hero: {
    bannerSrc?: string;
    bannerAlt?: string;
    headline: string;
    headlineHighlight?: string;
    subheadline?: string;
    description?: string[];
    video?: VideoConfig;
    ctaBadgeImg?: string;
    guaranteeBadgeImg?: string;
  };

  // Value proposition (2/3 + 1/3 layout)
  valueProp?: {
    introParagraphs?: string[];
    featureDiagram?: string;
    whatThisMeansHeading?: string;
    whatThisMeansParagraphs?: string[];
    caseStudyVideos?: CaseStudy[];
    sidebarProductCard?: string;
    sidebarBonusImages?: string[];
  };

  // Sales letter
  salesLetter: {
    blocks: SalesLetterBlock[];
  };

  // What you get
  whatYouGet: {
    heading: string;
    subheading?: string;
    features: Feature[];
  };

  // Hormozi quote
  hormoziQuote?: {
    text: string;
    author: string;
    imageSrc?: string;
  };

  // Sneak peek (video demo)
  sneakPeek?: {
    heading: string;
    subheading?: string;
    video: VideoConfig;
  };

  // Also getting
  alsoGetting?: {
    heading: string;
    items: { text: string; imageSrc?: string }[];
  };

  // Bonuses
  bonuses: {
    heading: string;
    value?: string;
    subheading?: string;
    items: Bonus[];
  };

  // FAQ
  faqs: FAQ[];

  // Guarantee
  guarantee: {
    heading: string;
    paragraphs: string[];
    badgeSrc?: string;
  };

  // Footer
  footer: {
    copyrightText: string;
    links: FooterLink[];
    disclaimer: string;
    badgeSrc?: string;
  };

  // Checkout badge image (safe checkout)
  checkoutBadgeSrc?: string;

  // Metadata
  metaTitle: string;
  metaDescription: string;
}
