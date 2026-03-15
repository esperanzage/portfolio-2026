import CaseStudyPage from '../components/CaseStudyPage.jsx'
import { getCaseStudy } from '../data/caseStudies.js'

export default function Rebranding() {
  const cs = getCaseStudy('rebranding')
  return <CaseStudyPage cs={cs} />
}
