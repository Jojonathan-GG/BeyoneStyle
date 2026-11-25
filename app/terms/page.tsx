import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/site/legal-page';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'The terms that apply when you reserve or buy a BeyoneStyle piece.',
};

const sections: LegalSection[] = [
  {
    id: 'orders',
    heading: 'Orders',
    paragraphs: [
      'When you reserve a piece, you make an offer to buy it. We confirm the order by email once we have checked the cloth and the size. A contract is formed when that confirmation is sent.',
      'If a piece is no longer available, or if a measurement needs to be discussed before cutting, we will contact you before taking payment.',
    ],
  },
  {
    id: 'pricing',
    heading: 'Pricing',
    paragraphs: [
      'Prices are shown in US dollars and include Portuguese VAT where applicable. Shipping is complimentary over $150; below that, a flat $12 applies.',
      'Duties and taxes outside the EU are calculated at checkout or collected by the courier. We do not control these charges and cannot refund them.',
    ],
  },
  {
    id: 'made-to-order',
    heading: 'Made to order',
    paragraphs: [
      'Pieces are cut after you reserve them and are usually dispatched within two to three weeks. Small variations in weave, colour, and finish are part of working with natural fibres and are not considered defects.',
      'If you need a piece by a specific date, write to us before ordering. We will tell you honestly whether it is possible.',
    ],
  },
  {
    id: 'returns',
    heading: 'Returns and exchanges',
    paragraphs: [
      'Unworn pieces may be returned within 30 days of delivery. Made-to-order pieces can be exchanged or returned for store credit. Pieces altered to your measurements are final sale.',
      'The full policy, including how to start a return, is set out on our client care page.',
    ],
  },
  {
    id: 'repairs',
    heading: 'Repairs',
    paragraphs: [
      'We repair BeyoneStyle pieces free of charge for the life of the piece, excluding damage caused by misuse or by a third-party alteration. Repairs usually take two to three weeks.',
    ],
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual property',
    paragraphs: [
      'All text, photography, patterns, and designs on this site belong to BeyoneStyle or are used with permission. You may share links and short quotations for personal, non-commercial use. Reproduction of images or patterns requires our written consent.',
    ],
  },
  {
    id: 'liability',
    heading: 'Liability',
    paragraphs: [
      'Nothing in these terms excludes liability that cannot be excluded by law, including liability for death, personal injury, or fraud. Otherwise, our liability is limited to the value of the piece purchased.',
    ],
  },
  {
    id: 'law',
    heading: 'Governing law',
    paragraphs: [
      'These terms are governed by Portuguese law. Disputes may be brought before the courts of Lisbon, without prejudice to consumer rights to bring proceedings in their country of residence.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms."
      updated="1 March 2026"
      intro="The practical terms that apply when you reserve a piece, receive it, or send it back for repair."
      sections={sections}
    />
  );
}
