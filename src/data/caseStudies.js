export const caseStudies = [
  {
    id: 'rebranding',
    slug: 'rebranding',
    title: 'Leading platform transformation through strategic rebranding',
    shortTitle: 'Platform Rebranding',
    subtitle: 'Modernized an entire B2B platform in 2 months through a strategic rebrand — while keeping the product live and managing complex technical constraints.',
    role: 'Lead Designer & PM',
    timeline: '~2 months',
    team: '1 designer/PM, 1 engineer',
    tags: ['Lead Designer', 'Product Manager', 'Design System'],
    heroImage: '/loginRebrand.png',
    images: ['/Component%20rebrand.png', '/mobileAppRebrand.png', '/designSystemRebrand.png'],
    tintFrom: '#F5EDE0',
    tintTo: '#EAE0D0',
    gradient: 'radial-gradient(ellipse 100% 80% at 10% 100%, #E6DDCE 0%, #EEE8DC 45%, #F8F4EE 100%)',
    accentColor: '#B08D57',
    metrics: [
      { text: '~2 months', label: 'From planning to full implementation' },
      { text: 'Cross-platform', label: 'Web, mobile apps, emails, knowledge base and more' },
    ],
    problem: {
      intro: 'Re-Leased was growing internationally, expanding the team, and positioning for its next phase of growth. The existing platform branding no longer reflected the company\'s direction or the professional image needed to compete in global markets.',
      painPoints: [
        'Visual identity felt outdated compared to modern SaaS standards',
        'Inconsistent brand application across the platform (legacy MVC vs Vue pages)',
        'Disconnect between the new company branding and the user-facing product experience',
        'Tight deadline — needed to ship alongside the brand announcement',
      ],
    },
    solution: {
      intro: 'Led a complete platform rebrand that touched every aspect of the user experience — from the login screen to navigation, design system components, and communication touchpoints. The project required strategic planning to handle both technical constraints and tight timelines while ensuring a cohesive, elevated brand experience.',
    },
    process: [
      {
        step: '01',
        title: 'Discovery & Problem Definition',
        description: 'Audited the full platform to identify every touchpoint that needed updating and mapped impact across environments. Used my understanding of the codebase structure (legacy MVC and Vue) to plan implementation strategies that ensured consistent brand application.',
      },
      {
        step: '02',
        title: 'Ideation & Technical Collaboration',
        description: 'Worked closely with developers to design an approach that respected the constraints of each codebase. Collaborated with the design team on the new visual direction, keeping them involved throughout to align on how the rebrand would roll out across the platform.',
      },
      {
        step: '03',
        title: 'Phase Breakdown & Planning',
        description: 'Broke the rebrand into strategic phases to maximize impact within the tight deadline: Phase 1 → core platform updates; Phase 2 → design system expansion; Phase 3 → cross-platform coordination across mobile, legacy pages, and outstanding components.',
      },
    ],
    outcome: {
      statement: 'The rebrand launched on schedule alongside the company\'s brand announcement — modernizing the entire platform experience with zero customer-facing downtime.',
      highlights: [
        {
          title: 'Modern, sophisticated and consistent',
          content: 'Created a contemporary interface that elevated the platform\'s appearance across all touchpoints.',
        },
        {
          title: 'Enhanced UX with improved visual hierarchy',
          content: 'Used the rebrand as an opportunity to refine key flows — SSO, 2FA, and forgot password — making them clearer and aligned with industry standards.',
        },
        {
          title: 'Cross-platform rollout',
          content: 'Updated web, mobile apps, emails, and knowledge base within the 2-month window.',
        },
      ],
    },
  },
  {
    id: 'fee-management',
    slug: 'fee-management',
    title: 'Building flexible fee management for online rent payments',
    shortTitle: 'Fee Management',
    subtitle: 'A flexible fee management system that empowers property managers to configure payment fees and methods based on their specific business needs and compliance requirements.',
    role: 'Lead Designer & PM',
    timeline: '~3 months',
    team: '1 designer/PM, 3 engineers',
    tags: ['Lead Designer', 'Product Manager'],
    heroImage: `feesAndPaymentMethods.png`,
    images: [`feesAndPaymentMethods-list.png`],
    tintFrom: '#F2E5CE',
    tintTo: '#E8D4B4',
    gradient: 'radial-gradient(ellipse 100% 80% at 90% 0%, #E3D8C6 0%, #EDE5D6 40%, #F5F0E6 100%)',
    accentColor: '#9A7A4A',
    metrics: [
      { text: 'Market expansion', label: 'Ability to offer solution to more regions' },
      { text: '200+', label: 'Applied configurations (first 3 months)' },
    ],
    problem: {
      intro: 'Online rent payments face different regulatory requirements across regions, but our one-size-fits-all approach prevented customers in some markets to be compliant and use our platform.',
      painPoints: [
        'No way to accommodate regions that legally cannot charge tenant fees for mixed portfolios',
        'Complex percentage allocation system that few customers actually used',
        'Limited payment method control preventing region-specific offerings',
        'Inability to expand to new regions due to inflexible fee structures',
        'Manual handling of payment method disable requests from customers',
      ],
    },
    solution: {
      intro: 'The ability for each customer to configure payment methods and their fees based on their specific business needs and regulatory requirements. This system provides the flexibility to assign costs appropriately while maintaining compliance across different property types and markets.',
    },
    process: [
      {
        step: '01',
        title: 'Discovery & Problem Definition',
        description: 'Reviewed customer requests for fee flexibility and payment method controls to understand their specific business needs. Also researched into regulatory requirements across different markets which revealed significant compliance gaps, while usage data showed surprisingly low adoption of our percentage-based fee allocation system.',
      },
      {
        step: '02',
        title: 'Ideation & Technical Collaboration',
        description: 'Explored multiple solutions from an experience perspective and the data architecture needed for multi-level fee configuration. Iterated while validating the approach with customers and stakeholders. An important aspect was to ensure backwards compatibility with existing fee allocations and ensure current payments would not be affected.',
      },
      {
        step: '03',
        title: 'Phase Breakdown & Planning',
        description: 'Broke the work into two phases to roll out incrementally and gather early feedback: Phase 1 → payment method and fee configuration at the Company level; Phase 2 → extend to support individual property types.',
      },
    ],
    outcome: {
      statement: 'Simple yet flexible payment methods and fee management.',
      body: 'Designed comprehensive controls for managing both what payment methods tenants can use and who pays associated fees, replacing the rarely-used percentage system with an intuitive choice that better matched customer needs.',
      highlights: [
        {
          title: 'Easily choose the desired level of management',
          content: 'Customers can still choose to manage payment methods and fees across their entire portfolio, or they can choose the property type level for maximum flexibility. This caters for different types of customers while still maintaining an easy to use interface to manage them.',
        },
        {
          title: 'Easy to understand fees for each payment method',
          content: 'Providing all the needed information regarding fees per payment method, allowing users to make informed decisions when choosing to absorb fees.',
        },
      ],
    },
  },
  {
    id: 'custom-fields',
    slug: 'custom-fields',
    title: 'Increasing flexibility in our platform with Custom Fields',
    shortTitle: 'Custom Fields',
    subtitle: 'Built a custom fields system adopted by 100+ customers, with 1,500+ field definitions created in the first 6 months — replacing external spreadsheets with native platform data management.',
    role: 'Lead Designer (sole designer)',
    timeline: '~4 months',
    team: '1 designer, 2 engineers, 1 PM',
    tags: ['Lead Designer', 'Product Manager'],
    heroImage: `customFields.png`,
    images: [`customFieldsList.png`, `customFields-importValues.png`],
    tintFrom: '#EDE0CC',
    tintTo: '#E2D0B5',
    gradient: 'radial-gradient(ellipse 110% 90% at 50% 110%, #DDD4C0 0%, #E8DFCE 45%, #F2ECE2 100%)',
    accentColor: '#A07840',
    metrics: [
      { value: 100, suffix: '+', label: 'Customers using custom fields' },
      { value: 1500, suffix: '+', label: 'Field definitions created in first 6 months' },
      { value: 3, suffix: '', label: 'Phases, zero disruption' },
    ],
    problem: {
      intro: 'Property management companies manage diverse portfolios with unique data needs — property types, business records, regulatory details. The existing platform couldn\'t accommodate this variety, forcing customers into external spreadsheets.',
      painPoints: [
        'Critical business data lived in spreadsheets, making it difficult to centralize',
        'No standardized way to use custom data within platform workflows',
        'Manual data re-entry across systems wasted hours weekly',
        'No way to report on or analyze custom data alongside platform data',
      ],
    },
    solution: {
      intro: 'Custom Fields allowed customers to create their own data fields, tailored to their property types and business needs — integrating seamlessly with search, filtering, and reporting.',
    },
    process: [
      {
        step: '01',
        title: 'Discovery & Problem Definition',
        description: 'Dug into customer support tickets and feature requests to understand who needed custom fields most and why. Researched how competitors handled similar functionality to learn what field types customers were already tracking externally.',
      },
      {
        step: '02',
        title: 'Ideation & Technical Collaboration',
        description: 'Worked closely with engineering to map technical constraints: where custom fields could live in the data architecture, how to accommodate every field type discovered, and what the migration path looked like for existing customers.',
      },
      {
        step: '03',
        title: 'Phase Breakdown & Planning',
        description: 'Phase 1: test custom fields on properties first. Phase 2: extend to tenancies and contacts based on feedback. Phase 3: let customers migrate their existing spreadsheet data into the system.',
      },
    ],
    outcome: {
      statement: 'Customers can now create and manage custom data points for their portfolios, properties, and individual needs — all within the platform.',
      highlights: [
        {
          title: 'Create and manage custom fields across all entity types',
          content: 'Property managers can add custom fields to properties, tenancies, contacts, and portfolios — covering every part of their workflow without leaving the platform.',
        },
        {
          title: 'Multiple field types supported',
          content: 'Text, number, date, select, multi-select, and more. Each field type has appropriate validation and display logic built in.',
        },
        {
          title: 'Field scoping and references for cross-entity relationships',
          content: 'Fields can reference other entities, enabling complex data relationships that mirror how property managers actually think about their data.',
        },
        {
          title: 'Data migration tool with pre-populated templates and error recovery',
          content: 'Customers could import their existing spreadsheet data directly, with smart templates and clear error messages making the transition painless.',
        },
      ],
    },
  },
  {
    id: 'ai-prototyping',
    slug: 'ai-prototyping',
    title: 'Designing an AI-powered prototyping tool for our design system',
    shortTitle: 'AI Prototyping Tool',
    subtitle: 'An internal tool that uses Claude Code to let designers and product managers generate coded prototypes directly from our design system — so the whole team can ideate in platform context, not generic external tools.',
    role: 'Designer + Product Owner',
    timeline: 'In Progress',
    team: '1 designer, 1 engineer',
    // TODO: Update team details as the project evolves
    tags: ['Lead Designer', 'AI Tooling', 'Coming Soon'],
    inProgress: true,
    tintFrom: '#F0E8E0',
    tintTo: '#E5D5C5',
    gradient: 'radial-gradient(ellipse 90% 120% at 50% -10%, #F5F0E8 0%, #EAE0D4 50%, #D8CCBC 100%)',
    accentColor: '#C4A472',
    metrics: [
      // TODO: Fill in your metrics
      { value: 70, suffix: '%', label: 'Faster prototype creation (target)' },
      { value: 0, suffix: '', label: 'External AI tool dependencies' },
      { value: 3, suffix: 'wks', label: 'Prototype to production target' },
    ],
    problem: {
      intro: 'Our design system, Vision, provides components in Figma — but when designers or product managers wanted to explore ideas as coded prototypes, they hit a wall. External AI tools produced generic output that didn\'t match our platform at all.',
      painPoints: [
        'Slow ideation: designers and PMs couldn\'t quickly test ideas in the context of our actual platform',
        'External tool friction: generic AI tools required hours of manual adjustment to align with our design system',
        'Lost context: when the team ideated outside the platform context, solutions often didn\'t account for real technical constraints',
        'Engineering bottleneck: any functional prototype required dedicated engineering time',
      ],
    },
    solution: {
      intro: 'I treated this as a product design problem, not just a tooling experiment. The goal: give the whole team — designers and PMs — the ability to ideate with coded prototypes that already speak our design language.',
    },
    process: [
      {
        step: '01',
        title: 'Discovery',
        description: 'Mapped how the team currently explored ideas. Designers used static Figma prototypes; PMs sketched in docs; engineers only got involved at implementation. External AI tools were tried but abandoned because adjusting output took longer than building from scratch.',
      },
      {
        step: '02',
        title: 'System Design',
        description: 'Restructured parts of Vision\'s documentation and token architecture so that Claude Code could consume our design system conventions. Defined the interaction model: how the tool takes input and what kind of output it produces.',
      },
      {
        step: '03',
        title: 'Prototype the Tool',
        description: 'Built the tool iteratively: describe a feature idea → tool generates a coded prototype using Vision\'s tokens, components, and patterns → output is immediately testable and already looks and feels like our product.',
      },
    ],
    outcome: {
      statement: 'The tool is in active development. Early results show dramatically faster ideation cycles and higher design system fidelity in generated prototypes.',
      highlights: [
        {
          title: 'Anyone on the team can now prototype',
          content: 'Designers and PMs can describe a feature in plain language and get back a working prototype that looks like it was built by an engineer familiar with our system.',
        },
        {
          title: 'Design system knowledge encoded, not just referenced',
          content: 'Rather than pointing the AI at documentation, I restructured Vision\'s architecture so the AI reasons about components and tokens natively.',
        },
        {
          title: 'Learnings & What\'s Next',
          // TODO: Add 2-3 key reflections on what you learned
          content: 'TODO: Add 2-3 key reflections on what you learned building this.',
        },
      ],
    },
  },
]

export function getCaseStudy(id) {
  return caseStudies.find(cs => cs.id === id)
}

export function getAdjacentCaseStudies(id) {
  const index = caseStudies.findIndex(cs => cs.id === id)
  return {
    prev: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  }
}
