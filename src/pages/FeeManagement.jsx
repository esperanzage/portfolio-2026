import CaseStudyPage from '../components/CaseStudyPage.jsx'
import { getCaseStudy } from '../data/caseStudies.js'

export default function FeeManagement() {
  const cs = getCaseStudy('fee-management')
  return <CaseStudyPage cs={cs} />
}
