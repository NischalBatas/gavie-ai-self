import { Inter } from "next/font/google";
import "./globals.css";
import NavbarMain from "@/components/Navbar/Navbar";
import localFont from 'next/font/local'
import SegementKey from "@/components/segment/SegementKey";
import SegementRoute from "@/components/segment/SegementRoute";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: {
    template: "%s | Gavie.AI",
    default: "Gavie.AI",
  },
  description:
    "We Help enterprises leverage AI for customer support. Build engaging conversational agents, automate interactions, integrate CRM tools and create custom journeys powered by state-of-the-art LLM Models",
  generator: "Gavie.AI",
  applicationName: "Gavie.AI",
  referrer: "origin-when-cross-origin",
  keywords: [
    "artificial intelligence",
    "machine learning",
    "cloud computing",
    "cloud services",
    "AI solutions",
    "cloud platform",
    "data analytics",
    "cloud infrastructure",
    "AI technology",
    "cloud hosting",
    "SaaS solutions",
    "AI development",
    "cloud storage",
    "PaaS platform",
    "cloud security",
    "AI applications",
    "cloud migration",
    "deep learning",
    "cloud integration",
    "AI research",
    "hybrid cloud",
    "cloud provider",
    "AI innovation",
    "multi-cloud",
    "cloud optimization",
    "natural language processing",
    "cloud management",
    "AI automation",
    "cloud deployment",
    "edge computing",
    "AI tools",
    "serverless computing",
    "AI consulting",
    "cloud-native",
    "AI systems",
    "cloud backup",
    "computer vision",
    "cloud development",
    "AI-powered",
    "public cloud",
    "AI-driven",
    "private cloud",
    "AI algorithms",
    "cloud ecosystem",
    "AI platforms",
    "cloud networking",
    "AI data processing",
    "cloud architecture",
    "intelligent systems",
    "cloud solutions",
    "AI integration",
    "cloud strategy",
    "AI advancements",
    "cloud transformation",
    "AI frameworks",
    "cloud orchestration",
    "AI software",
    "cloud performance",
    "AI-driven insights",
    "cloud computing trends",
    "AI deployment",
    "cloud cost management",
    "AI models",
    "cloud scalability",
    "AI analytics",
    "cloud automation",
    "AI innovation hub",
    "cloud service management",
    "AI business solutions",
    "cloud consultancy",
    "AI ethics",
    "cloud modernization",
    "AI ethics and governance",
    "cloud data protection",
    "AI project management",
    "cloud solutions architect",
    "AI research and development",
    "cloud computing services",
    "AI business intelligence",
    "cloud-based AI",
    "AI data security",
    "cloud innovation",
    "AI product development",
    "cloud service provider",
    "AI infrastructure",
    "cloud collaboration",
    "AI-driven applications",
    "cloud-based solutions",
    "AI-driven decision making",
    "cloud technology trends",
    "AI-powered analytics",
    "cloud computing benefits",
    "AI and big data",
    "cloud hosting services",
    "AI-enabled services",
    "cloud software development",
    "AI-driven marketing",
    "cloud business solutions",
    "AI-powered cloud",
    "cloud engineering",
    "AI-powered tools",
  ],
  authors: [{ name: "Gavie.AI", url: "https://gavie-ai2.vercel.app/" }],
  creator: "Gavie.AI",
  publisher: "Gavie.AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gavie-ai2.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "Gavie.AI",
    description:
      "Gavie.AI offers innovative AI, data, and software cloud services. We specialize in cloud engineering, generative AI apps, data engineering, BI & data analytics, mobile and web app development for businesses of all sizes. Our global partnerships include top-tier companies like AWS, Google, and Apple. Contact us to assess your business readiness for technological advancements.",
    url: "https://gavie-ai2.vercel.app/",
    siteName: "Gavie.AI",
    images: {
      url: "https://gavie-ai2.vercel.app/images/gavieai.jpg",
      width: 200,
      height: 200,
      alt: "cloudpro website",
    },
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "Gavie.AI",
    title: "Gavie.AI",
    description:
      "Gavie.AI offers innovative AI, data, and software cloud services. We specialize in cloud engineering, generative AI apps, data engineering, BI & data analytics, mobile and web app development for businesses of all sizes. Our global partnerships include top-tier companies like AWS, Google, and Apple. Contact us to assess your business readiness for technological advancements.",
    creator: "Gavie.AI",
    images: {
      url: "https://gavie-ai2.vercel.app/images/gavieai.jpg",
      alt: "cloudpro website",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      new URL("/favicon.png", "https://gavie-ai2.vercel.app"),
      { url: "/favicon.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/favicon.png"],
    apple: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  archives: ["https://gavie-ai2.vercel.app"],
  bookmarks: ["https://gavie-ai2.vercel.app"],
  category: "technology",
  itunes: {
    appId: "myAppStoreID",
    appArgument: "myAppArgument",
  },
  appleWebApp: {
    title: "Apple Web App",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/images/gavieai.jpg",
      {
        url: "/images/gavieai.jpg",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  appLinks: {
    ios: {
      url: "https://gavie-ai2.vercel.app/ios",
      app_store_id: "app_store_id",
    },
    android: {
      package: "com.example.android/package",
      app_name: "app_name_android",
    },
    web: {
      url: "https://gavie-ai2.vercel.app/web",
      should_fallback: true,
    },
  },
};

export const myFont = localFont({
  src: './geist_medium.otf',
  variable: '--font-myFont', // Define a CSS variable for the font
  weight: '400', // Specify font-weight if needed
  style: 'normal', // Specify font-style if needed
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <head>
  
        {<SegementKey/>}
      </head>
      <body className={inter.className}>
        <div className={myFont.variable}>
        <SegementRoute>
          {children}
          </SegementRoute>
        </div></body>
    </html>
  );
}
