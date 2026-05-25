"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Star, Users } from "lucide-react";

const BOOKING_LINK = "https://calendar.app.google/mNkVJ9NE1nRCdrFs5";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "services" },
        { name: "Pricing", id: "pricing" },
        { name: "Book Now", id: "contact" },
      ]}
      brandName="Karachi Glow"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "plain" }}
      title="Unveil Your Glow at Karachi’s Finest Salon"
      description="Experience professional beauty treatments, haircuts, and pampering designed specifically for you. Book your transformation today."
      buttons={[{ text: "Book Now", href: BOOKING_LINK }]}
      imageSrc="http://img.b2bpic.net/free-photo/empty-wintertime-luxury-ski-resort_482257-102290.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Excellence in Beauty"
      description="Located in the heart of Karachi, we pride ourselves on delivering bespoke beauty solutions. From precision cuts to revitalizing treatments, our team ensures you leave feeling radiant."
      buttons={[{ text: "Book Now", href: BOOKING_LINK }]}
      bulletPoints={[
        { title: "Certified Experts", description: "Highly skilled stylists and beauticians." },
        { title: "Premium Products", description: "Global brands for your hair and skin care." },
        { title: "Relaxing Environment", description: "A tranquil space for your self-care journey." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/family-car-salon-woman-buying-thecar-seat-little-african-girl-with-mther_1157-45043.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Our Signature Services"
      description="Discover a range of treatments tailored to your unique beauty needs."
      buttons={[{ text: "Book Now", href: BOOKING_LINK }]}
      accordionItems={[
        { id: "hair", title: "Hair Care & Styling", content: "Professional haircuts, highlights, and deep conditioning treatments." },
        { id: "skin", title: "Skin & Aesthetics", content: "Revitalizing facials and skin wellness therapies." },
        { id: "nails", title: "Nail Services", content: "Manicures and pedicures with high-quality polish." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-getting-her-hair-dyed-home-by-hairdresser_23-2148817211.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="split-actions"
      useInvertedBackground={true}
      buttons={[{ text: "Book Now", href: BOOKING_LINK }]}
      plans={[
        { id: "p1", badge: "Essential", price: "PKR 3,500", subtitle: "Basic Grooming", features: ["Hair Trim", "Basic Blow Dry", "Eyebrow Threading"] },
        { id: "p2", badge: "Premium", price: "PKR 7,500", subtitle: "Hair & Skin Care", features: ["Hair Cut & Style", "Express Facial", "Manicure"] },
        { id: "p3", badge: "Luxury", price: "PKR 12,000", subtitle: "Full Glow", features: ["Color & Highlights", "Luxury Facial", "Full Pedicure"] },
      ]}
      title="Beauty Packages"
      description="Affordable luxury for every woman in Karachi."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split-actions"
      useInvertedBackground={false}
      buttons={[{ text: "Book Now", href: BOOKING_LINK }]}
      testimonials={[
        { id: "1", title: "Amazing Cut", quote: "The best hair transformation I have ever had!", name: "Sarah Ahmed", role: "Corporate Lead", imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149229812.jpg" },
        { id: "2", title: "Relaxing Facials", quote: "I love the environment. Truly relaxing.", name: "Maria Khan", role: "Architect", imageSrc: "http://img.b2bpic.net/free-photo/happy-friends_1098-16906.jpg" },
        { id: "3", title: "Great Staff", quote: "Professional, courteous, and very skilled.", name: "Ayesha Ali", role: "Designer", imageSrc: "http://img.b2bpic.net/free-photo/carefree-fashionable-woman-playing-with-shiny-curly-hair-dark-wall-relaxed-young-lady-with-romantic-hairstyle-laughing-holiday-photoshoot_197531-8145.jpg" },
        { id: "4", title: "So Radiant", quote: "My skin has never felt better.", name: "Fatima Z.", role: "Doctor", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-beautiful-slim-healthy-body-posing_1153-7404.jpg" },
        { id: "5", title: "Top Service", quote: "Highly recommended for weddings and events.", name: "Zara Noor", role: "Entrepreneur", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-sweater-sitting-posing-near-light-lamps_114579-81990.jpg" },
      ]}
      title="Loved by Our Clients"
      description="Hear what the beautiful women of Karachi have to say about their experience."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split-actions"
      buttons={[{ text: "Book Now", href: BOOKING_LINK }]}
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "5000+", title: "Satisfied Clients", description: "Happy faces served across Karachi", icon: Star },
        { id: "m2", value: "15+", title: "Expert Stylists", description: "Professional team members", icon: Users },
        { id: "m3", value: "100%", title: "Quality Products", description: "Premium brand standards", icon: Award },
      ]}
      title="Our Success in Numbers"
      description="We are proud of our community growth and service quality."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      buttons={[{ text: "Book Now", href: BOOKING_LINK }]}
      faqs={[
        { id: "q1", title: "Do I need an appointment?", content: "Yes, we highly recommend booking in advance." },
        { id: "q2", title: "Do you offer wedding services?", content: "Yes, we specialize in bridal hair and makeup." },
        { id: "q3", title: "What payment methods do you accept?", content: "We accept cash and local bank transfers." },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      tag="Booking"
      title="Ready for your new look?"
      description="Fill out your details, and we will get back to you shortly to confirm your slot."
      imageSrc="http://img.b2bpic.net/free-photo/lounge-area-hotel-front-desk_482257-76248.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/smiling-african-american-woman-talking-smartphone-armchair-office_23-2148042626.jpg"
      logoText="Karachi Glow"
      columns={[
        {
          title: "Links",          items: [
            { label: "About Us", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Pricing", href: "#pricing" },
            { label: "Book Now", href: BOOKING_LINK },
          ],
        },
        {
          title: "Contact",          items: [
            { label: "Instagram", href: "#" },
            { label: "WhatsApp", href: "#" },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}