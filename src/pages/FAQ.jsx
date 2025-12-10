import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './FAQ.css'

function FAQ() {
  const { t } = useLanguage()
  const [openId, setOpenId] = useState(null)

  const faqData = t('faq.questions')

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="faq-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>
          <HelpCircle size={32} />
          {t('faq.title')}
        </h1>
        <p>{t('faq.subtitle')}</p>
      </div>

      <div className="faq-content">
        {/* FAQ List */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className={`accordion-item ${openId === index ? 'open' : ''}`}>
              <button 
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-title">
                  <span className="accordion-number">{index + 1}</span>
                  <span>{item.question}</span>
                </div>
                {openId === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openId === index && (
                <div className="accordion-content">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Card */}
        <div className="support-card">
          <AlertCircle size={32} className="support-icon" />
          <div className="support-content">
            <h3>{t('faq.support.title')}</h3>
            <p>{t('faq.support.description')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
