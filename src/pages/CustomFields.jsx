import CaseStudyPage from '../components/CaseStudyPage.jsx'
import { getCaseStudy } from '../data/caseStudies.js'

export default function CustomFields() {
  const cs = getCaseStudy('custom-fields')
  return <CaseStudyPage cs={cs} />
}
