import React, { useState } from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'

const AboutCard = () => {
  const [activeTab, setActiveTab] = useState("novel")

  return (
    <CTabs activeItemKey={activeTab} onChange={setActiveTab}>
      
      <CTabList variant="tabs">
        <CTab itemKey="novel">Novel 📔</CTab>
        <CTab itemKey="poem">Poem ✒️</CTab>
        <CTab itemKey="quote">Quote 💬</CTab>
      </CTabList>

      <CTabContent>
        <CTabPanel className="p-3" itemKey="novel">
          A reader lives a thousand lives but a writer captures millions of possibilities of a life ✎
        </CTabPanel>

        <CTabPanel className="p-3" itemKey="poem">
          It is not the stars that is beautiful, it is the way a poet writes them ★
        </CTabPanel>

        <CTabPanel className="p-3" itemKey="quote">
          A one line quote based on hundreds of bitter experiences is better than a book written from one experience ♚
        </CTabPanel>
      </CTabContent>

    </CTabs>
  )
}

export default AboutCard