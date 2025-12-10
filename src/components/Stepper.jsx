import { Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

function Stepper({ currentStep }) {
  const { t } = useLanguage()

  const steps = [
    { number: 1, label: t('serviceDemo.steps.step1') },
    { number: 2, label: t('serviceDemo.steps.step2') },
    { number: 3, label: t('serviceDemo.steps.step3') },
    { number: 4, label: t('serviceDemo.steps.step4') },
    { number: 5, label: t('serviceDemo.steps.step5') },
  ]

  return (
    <div className="stepper">
      {steps.map((step) => {
        const isCompleted = currentStep > step.number
        const isActive = currentStep === step.number
        
        return (
          <div 
            key={step.number} 
            className={`step ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
          >
            <div className="step-number">
              {isCompleted ? <Check size={20} /> : step.number}
            </div>
            <span className="step-label">{step.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Stepper
