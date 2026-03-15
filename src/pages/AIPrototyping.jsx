import CaseStudyPage from '../components/CaseStudyPage.jsx'
import { getCaseStudy } from '../data/caseStudies.js'

export default function AIPrototyping() {
  const cs = getCaseStudy('ai-prototyping')
  return <CaseStudyPage cs={cs} />
}
