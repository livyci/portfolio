import type { Profile } from './types'

export const profile: Profile = {
  name: 'Marlene Kuhn',
  hi: "Hi, I'm",
  headline: 'CS student at ETH Zürich and serial hackathon winner.',
  subheadline:
    'I turn messy problems into products people can actually use — end to end, usually with a great team.',
  location: 'Zürich, Switzerland · Munich, Germany',
  photo: '/photos/marlene.jpg',
  socials: [
    { label: 'GitHub', url: 'https://github.com/livyci', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marlene-kuhn', icon: 'linkedin' },
  ],
}

/** short bio paragraphs for the About section */
export const bio: string[] = [
  "I'm an 18-year-old Computer Science student at ETH Zürich, based between Zürich and Munich.",
  'Before ETH I graduated from Sankt Afra, a boarding school for gifted students, with an Abitur of 1.2. These days I build the internal operations tool at Shift by microAGI, working with teams across a dozen countries to smooth out how they work.',
  "I also help run HerCode, one of Europe's fastest-growing communities for women in tech and entrepreneurship. Most of what you'll see below started as a hackathon build — and a lot of it kept going afterwards.",
]

/** the little fun-fact cards next to the bio */
export interface Fact {
  icon: 'cap' | 'briefcase' | 'heart' | 'trophy'
  title: string
  body: string
}

export const facts: Fact[] = [
  {
    icon: 'cap',
    title: 'B.Sc. Computer Science',
    body: 'ETH Zürich, since 2025. Aiming toward data science / MTEC.',
  },
  {
    icon: 'briefcase',
    title: 'Operations @ Shift by microAGI',
    body: 'Building the company operations tool across a dozen countries.',
  },
  {
    icon: 'trophy',
    title: '5× hackathon podium',
    body: 'Incl. 1st overall at SwissHacks 2026 out of 2000+ applicants.',
  },
  {
    icon: 'heart',
    title: 'HerCode',
    body: "Helping grow one of Europe's biggest women-in-tech communities.",
  },
]
