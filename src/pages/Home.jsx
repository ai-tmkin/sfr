import { Link } from 'react-router-dom'
import { Plane, Users, Clock, CreditCard, Check, Info, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './Home.css'

function Home() {
  const { t, direction } = useLanguage()
  const ChevronIcon = direction === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <div className="home-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>{t('home.breadcrumb.home')}</span>
        <ChevronIcon size={16} className="flip-icon" />
        <span>{t('home.breadcrumb.eservices')}</span>
        <ChevronIcon size={16} className="flip-icon" />
        <span className="active">{t('home.breadcrumb.absherSafar')}</span>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <Plane size={32} className="hero-icon" />
              {t('home.hero.title')}
            </h1>
            <p>{t('home.hero.description')}</p>
          </div>
          <Link to="/servicedemo" className="btn btn-primary hero-btn">
            {t('home.hero.cta')}
            <ChevronIcon size={20} className="flip-icon" />
          </Link>
        </div>
      </section>

      {/* Info Cards */}
      <section className="info-cards-section">
        <div className="info-cards">
          <div className="info-card-item">
            <div className="info-card-header">
              <Users size={24} />
              <h3>{t('home.infoCards.targetGroup.title')}</h3>
            </div>
            <ul>
              {t('home.infoCards.targetGroup.items').map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="info-card-item">
            <div className="info-card-header">
              <Clock size={24} />
              <h3>{t('home.infoCards.duration.title')}</h3>
            </div>
            <p>{t('home.infoCards.duration.value')}</p>
          </div>
          <div className="info-card-item">
            <div className="info-card-header">
              <CreditCard size={24} />
              <h3>{t('home.infoCards.fees.title')}</h3>
            </div>
            <p>{t('home.infoCards.fees.value')}</p>
          </div>
        </div>
      </section>

      {/* Steps and Features */}
      <section className="steps-features-section">
        <div className="steps-features-grid">
          {/* Steps */}
          <div className="steps-card">
            <h2>{t('home.steps.title')}</h2>
            <div className="steps-list">
              <div className="step-item">
                <div className="step-num">1</div>
                <div className="step-content">
                  <h3>{t('home.steps.step1.title')}</h3>
                  <p>{t('home.steps.step1.description')}</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">2</div>
                <div className="step-content">
                  <h3>{t('home.steps.step2.title')}</h3>
                  <p>{t('home.steps.step2.description')}</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">3</div>
                <div className="step-content">
                  <h3>{t('home.steps.step3.title')}</h3>
                  <p>{t('home.steps.step3.description')}</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">4</div>
                <div className="step-content">
                  <h3>{t('home.steps.step4.title')}</h3>
                  <p>{t('home.steps.step4.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="features-card">
            <h2>{t('home.features.title')}</h2>
            <div className="features-list">
              {t('home.features.items').map((item, index) => (
                <div className="feature-item" key={index}>
                  <Check size={20} className="feature-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions and Vision */}
      <section className="conditions-section">
        <div className="conditions-grid">
          <div className="conditions-card">
            <div className="conditions-header">
              <Info size={24} />
              <h3>{t('home.conditions.title')}</h3>
            </div>
            <ul>
              {t('home.conditions.items').map((item, index) => (
                <li key={index}>
                  <span className="bullet">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="vision-card">
            <img 
              src="https://www.absher.sa/portal/landing/img/vission-logo.png" 
              alt="Vision 2030" 
              className="vision-logo"
            />
            <p>{t('home.vision.text')}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
