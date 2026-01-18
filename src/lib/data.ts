import type { Article, Author, Category } from './types';

const authors: Author[] = [
  { id: '1', name: 'Dr. Evelyn Reed', avatarUrl: 'https://picsum.photos/seed/101/40/40', avatarHint: 'woman face' },
  { id: '2', name: 'Marcus Brooks', avatarUrl: 'https://picsum.photos/seed/102/40/40', avatarHint: 'man face' },
];

const categories: Category[] = [
  { id: '1', name: 'Urban Planning', slug: 'urban-planning' },
  { id: '2', name: 'Strategic Thinking', slug: 'strategic-thinking' },
  { id: '3', name: 'Futures & Foresight', slug: 'futures-foresight' },
];

const articles: Article[] = [
  {
    id: '1',
    slug: 'the-future-of-urban-mobility',
    title: 'The Future of Urban Mobility',
    content: `The concept of urban mobility is undergoing a radical transformation. For decades, the private automobile has dominated city landscapes, shaping infrastructure and daily commutes. However, a confluence of factors including climate change, technological innovation, and a renewed focus on human-centric urban design is paving the way for a new era.\n\nSmart cities are leveraging IoT devices and data analytics to create integrated public transport systems that are more efficient, reliable, and user-friendly. Real-time tracking, seamless payment options, and on-demand services are becoming the norm. Simultaneously, micromobility solutions like e-scooters and bike-sharing programs are filling the gaps for last-mile connectivity, reducing reliance on cars for short trips.\n\nThe rise of autonomous vehicles (AVs) promises to be the most significant disruption. Shared autonomous fleets could potentially reduce traffic congestion, accidents, and the need for vast parking spaces, freeing up valuable urban real estate for parks, housing, and public amenities. However, the transition to AVs presents complex challenges in regulation, ethics, and public acceptance that must be carefully navigated. Planning for this future requires a multi-stakeholder approach, involving governments, private companies, and citizens to create a mobility ecosystem that is equitable, sustainable, and enhances the quality of urban life.`,
    imageUrl: 'https://picsum.photos/seed/201/600/400',
    imageHint: 'city street',
    category: categories[0],
    author: authors[0],
    publishedAt: '2024-05-15T10:00:00Z',
    summary:
      'This article explores the transformative shifts in urban transportation, from the rise of smart public transit and micromobility to the impending disruption of autonomous vehicles. It highlights how cities are planning for a more integrated, sustainable, and human-centric mobility future.',
  },
  {
    id: '2',
    slug: 'decision-making-under-uncertainty',
    title: 'Strategic Decision-Making Under Uncertainty',
    content: `In an increasingly volatile, uncertain, complex, and ambiguous (VUCA) world, traditional strategic planning models are often insufficient. The ability to make sound decisions when the future is unknowable is a critical leadership skill.\n\nOne powerful framework is scenario planning. Instead of relying on a single forecast, leaders develop multiple plausible futures (scenarios) based on key uncertainties and driving forces. By stress-testing strategies against these different scenarios, organizations can develop more robust and adaptable plans.\n\nAnother key technique is building organizational agility. This involves fostering a culture of continuous learning, empowering decentralized decision-making, and investing in flexible technologies. Agile organizations can pivot quickly in response to market shifts or unexpected events, turning potential threats into opportunities. Ultimately, strategic decision-making under uncertainty is less about predicting the future and more about preparing for it. It requires a mindset shift from seeking certainty to embracing ambiguity and building resilience.`,
    imageUrl: 'https://picsum.photos/seed/202/600/400',
    imageHint: 'chess board',
    category: categories[1],
    author: authors[1],
    publishedAt: '2024-05-20T14:30:00Z',
    summary:
      'This post delves into frameworks for making effective strategic decisions in a VUCA world. It covers the importance of scenario planning and organizational agility, advocating for a shift from prediction to preparation and resilience.',
  },
  {
    id: '3',
    slug: 'the-psychology-of-long-term-thinking',
    title: 'The Psychology of Long-Term Thinking',
    content: `Humans are notoriously bad at long-term thinking, a phenomenon often attributed to "present bias"—the tendency to overvalue immediate rewards at the expense of future ones. Yet, our greatest achievements, from building cathedrals to space exploration, are products of sustained, long-term vision.\n\nCultivating a long-term perspective requires conscious effort. Practices like mindfulness can help detach from immediate impulses, while goal-setting techniques that break down large, distant goals into smaller, manageable steps can make the future feel more tangible. Visualization—imagining a desired future in rich detail—can also be a powerful motivator.\n\nFrom a societal perspective, fostering long-term thinking is crucial for tackling "wicked problems" like climate change and social inequality. This involves creating institutions and incentive structures that reward long-term planning, such as carbon pricing or long-term investment funds. By understanding and counteracting our cognitive biases, we can become better ancestors to future generations.`,
    imageUrl: 'https://picsum.photos/seed/203/600/400',
    imageHint: 'hourglass sand',
    category: categories[2],
    author: authors[0],
    publishedAt: '2024-06-01T09:00:00Z',
    summary:
      'An examination of the cognitive biases that hinder long-term thinking, such as present bias. The article offers practical techniques for individuals and societies to cultivate a more forward-looking perspective, essential for tackling complex, long-range challenges.',
  },
  {
    id: '4',
    slug: 'participatory-planning-in-community-development',
    title: 'Participatory Planning in Community Development',
    content: `Top-down planning models are increasingly giving way to more inclusive, participatory approaches that empower communities to shape their own environments. Participatory planning is a process where local stakeholders—residents, business owners, community groups—are actively involved in decision-making.\n\nThis approach leads to better outcomes. When communities have ownership over the planning process, the resulting projects are more likely to meet their actual needs, be culturally appropriate, and be sustained over the long term. It also builds social capital, fostering trust and collaboration among neighbors.\n\nEffective participatory planning requires genuine engagement, not just token consultation. This means using accessible language, providing multiple avenues for input (workshops, surveys, online forums), and ensuring that feedback is demonstrably integrated into the final plans. While it can be more time-consuming than traditional methods, the investment in building consensus pays dividends in creating more equitable and resilient communities.`,
    imageUrl: 'https://picsum.photos/seed/204/600/400',
    imageHint: 'community meeting',
    category: categories[0],
    author: authors[1],
    publishedAt: '2024-06-10T11:00:00Z',
    summary:
      'This piece champions participatory planning, a bottom-up approach that involves communities in their own development. It argues that genuine engagement leads to more sustainable, equitable, and effective outcomes by building social capital and ensuring projects meet local needs.',
  },
    {
    id: '5',
    slug: 'the-art-of-the-premortem',
    title: 'The Art of the Premortem: A Strategy for Project Success',
    content: `Before embarking on a major project, teams are often filled with optimism. A "premortem" is a powerful strategic exercise that harnesses this energy in a counterintuitive way. The process is simple: imagine that the project has failed spectacularly, and then work backward to determine what could have gone wrong.\n\nThis "prospective hindsight" helps overcome the groupthink and overconfidence that can derail projects. Team members are encouraged to raise potential risks and concerns without sounding negative or unsupportive. It surfaces potential weaknesses in the plan—unrealistic timelines, resource shortages, market misjudgments—before they become irreversible problems.\n\nA premortem is not about pessimism; it's about proactive risk mitigation. By identifying potential failure points upfront, the team can strengthen the plan, develop contingency strategies, and increase the project's chances of success. It's a simple, low-cost insurance policy against failure.`,
    imageUrl: 'https://picsum.photos/seed/205/600/400',
    imageHint: 'whiteboard flowchart',
    category: categories[1],
    author: authors[0],
    publishedAt: '2024-06-18T16:00:00Z',
    summary:
      'This article introduces the "premortem," a strategic exercise where teams imagine a project has failed to proactively identify and mitigate risks. It explains how this technique of "prospective hindsight" can overcome groupthink and strengthen plans for greater success.',
  },
    {
    id: '6',
    slug: 'speculative-design-for-future-thinking',
    title: 'Using Speculative Design to Prototype Possible Futures',
    content: `How can we plan for futures we can't yet see? Speculative design is a practice that uses design as a medium to explore "what if" scenarios. Instead of creating products for the market today, it creates artifacts, services, and narratives from possible futures to provoke discussion and debate.\n\nThese "diegetic prototypes" might be a fictional product, a mock news report, or an immersive experience. They make abstract future possibilities tangible and relatable, allowing us to consider their social, ethical, and political implications. For example, what would a "social credit score" look like as a consumer product? How would a world with widespread gene editing advertise its services?\n\nBy externalizing these possibilities, speculative design helps organizations and the public engage with complex issues before they become reality. It is a powerful tool for foresight, enabling us to not just react to the future, but to actively shape it by making more informed and intentional choices in the present.`,
    imageUrl: 'https://picsum.photos/seed/206/600/400',
    imageHint: 'futuristic object',
    category: categories[2],
    author: authors[1],
    publishedAt: '2024-06-25T12:00:00Z',
    summary:
      'An introduction to speculative design, a practice that creates artifacts and narratives from possible futures to stimulate debate. The article shows how this approach makes abstract scenarios tangible, serving as a critical tool for foresight and shaping a more intentional future.',
  },
];

export function getArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getArticles().filter((article) => article.category.slug === categorySlug);
}

export function searchArticles(query: string): Article[] {
  if (!query) return [];
  const lowerCaseQuery = query.toLowerCase();
  return getArticles().filter(
    (article) =>
      article.title.toLowerCase().includes(lowerCaseQuery) ||
      article.content.toLowerCase().includes(lowerCaseQuery) ||
      article.summary.toLowerCase().includes(lowerCaseQuery)
  );
}

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
