import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/site/legal-page';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How BeyoneStyle collects, uses, and protects personal information.',
};

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    heading: 'Who we are',
    paragraphs: [
      'BeyoneStyle is a clothing atelier with a studio at Rua da Boavista 84, 1200-068 Lisbon, Portugal. For the purposes of data protection law, BeyoneStyle is the controller of the personal information described on this page.',
    ],
  },
  {
    id: 'what-we-collect',
    heading: 'What we collect',
    paragraphs: [
      'When you write to us, join the letter, book a fitting, or reserve a piece, we collect the details you give us: your name, email address, delivery address, telephone number, and the content of your message.',
      'When you visit the site, our hosting provider records standard technical information such as the pages requested, the browser type, and the approximate region of the request. We do not use this information to identify individual visitors.',
    ],
  },
  {
    id: 'how-we-use-it',
    heading: 'How we use it',
    paragraphs: [
      'We use your information to answer your note, send the letter you asked for, fulfil and deliver your order, arrange alterations or repairs, and keep the records we are required to keep by law.',
      'We do not sell personal information, and we do not use it for advertising profiles. You can unsubscribe from the letter at any time using the link in every email.',
    ],
  },
  {
    id: 'cookies',
    heading: 'Cookies',
    paragraphs: [
      'This site does not set advertising or analytics cookies. Any essential storage is used only to keep the site working and to remember preferences you have chosen. You can clear it at any time in your browser settings.',
    ],
  },
  {
    id: 'sharing',
    heading: 'Sharing',
    paragraphs: [
      'We share the minimum necessary information with the courier that delivers your order and with the payment provider that processes your payment. Both act on our instructions and are bound by their own data protection obligations.',
      'We may also disclose information where we are required to do so by law or to protect the rights of BeyoneStyle, our customers, or others.',
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your rights',
    paragraphs: [
      'You may ask for a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it. You may also object to certain processing or ask us to restrict it.',
      'Write to studio@beyonestyle.com and we will respond within 30 days. If you are not satisfied, you may complain to the Portuguese data protection authority, the CNPD.',
    ],
  },
  {
    id: 'retention',
    heading: 'Retention',
    paragraphs: [
      'We keep order and repair records for as long as required by Portuguese tax and consumer law. Newsletter details are kept until you unsubscribe. General correspondence is deleted after two years unless it relates to an order or a repair.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy."
      updated="1 March 2026"
      intro="We collect very little, keep it for as long as we need it, and never sell it. This page explains the details in plain language."
      sections={sections}
    />
  );
}
