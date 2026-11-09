// Single source of truth for links & unverified items. Replace nulls when official values are available.
export const B = 'https://www.scodel.link'
export const LINKS = {
  start: `${B}/fuzzie-gauge`, signUp: `${B}/sign-up`, signIn: `${B}/sign-in`,
  compilation: `${B}/fuzzie-gauge/compilation`, reference: `${B}/fuzzie-gauge`,
  help: null, faqs: null, privacy: null, terms: null, disclaimer: null
}
// Official contact + social links were not retrievable from the reference site. Fill in; never invent.
export const CONTACT = { email: null, phone: null, address: null, social: [] /* [{label, href}] */ }

export const NAV = [
  ['Home', '/'], ['About', '/about'], ['Cognitive Dimensions', '/dimensions'],
  ['Assessment', '/assessment'], ['Explore Assessments', '/explore'], ['Resources', '/resources'], ['Contact', '/contact']
]
// Dimensions 5 & 6: names/descriptions not published in retrievable reference content -> pending, not invented.
export const DIMENSIONS = [
  { id: 'analytical', title: 'Analytical Thinking', text: 'Deconstruct complex problems logically.', icon: 'analytical' },
  { id: 'technical', title: 'Technical Reasoning', text: 'Apply technical knowledge practically.', icon: 'technical' },
  { id: 'creative', title: 'Creative Expression', text: 'Generate novel ideas and solutions.', icon: 'creative' },
  { id: 'human', title: 'Human Understanding', text: 'Empathize and collaborate effectively.', icon: 'human' },
  { id: 'system', title: 'Systems Thinking', text: 'See the big picture and interconnectivity.', icon: 'system' },
  { id: 'practical', title: 'Practical Application', text: 'Translate theory into real-world outcomes.', icon: 'practical' }
]
export const STEPS = [
  ['01', 'Answer', 'Complete scenario-based questions designed to test multifaceted thinking.'],
  ['02', 'Analyze', 'Our engine evaluates your responses across the six cognitive dimensions.'],
  ['03', 'Understand', 'Receive a detailed profile mapping your specific capability pattern.'],
  ['04', 'Discover', 'Unlock personalized pathways for development and career alignment.']
]
export const TIERS = [
  { id: 'live', name: 'Live Curriculum', rec: 'Recommended for SCODEL-oriented courses',
    text: 'Specially calibrated psychometric diagnostics aligned with SCODEL practical engineering and cognitive curricula.', count: 3 },
  { id: 'ngep', name: 'Standardized NGEP', rec: 'Recommended for other NGEP programs',
    text: 'National Graduate & Educational Program standardized subject-specific assessment pathways.', count: 33 }
]
export const TRACKS = [
  { id: '1.1', name: 'Early Vitals', tag: 'Active Series (9th & 10th Std)',
    text: 'Foundational baseline cognitive diagnostics evaluating innate logic, spatial aptitude, and core problem solving for 9th and 10th standard learners.' },
  { id: '1.2', name: 'Interdisciplinary Sectors', tag: 'Active Series (MSMEs & Conglomerates)',
    text: 'Cross-functional industry and enterprise diagnostics spanning MSMEs and major Groups & Conglomerates.' },
  { id: '1.3', name: 'Multidisciplinary Segments', tag: 'Active Series (22 Sets)',
    text: 'Standardized 50-question comprehensive cognitive profiling battery across 6 intelligence dimensions.' }
]
export const EDITIONS = [
  { name: 'Premium Workbook', sub: 'Hard Copy Edition', pts: ['Physical professionally bound workbook', 'Doorstep delivery with tracking', 'Ample space for manual calculations'] },
  { name: 'Digital PDF', sub: 'Soft Copy Edition', pts: ['High-quality digital PDF', 'Instant digital access after purchase', 'Searchable, multi-device'] }
]
