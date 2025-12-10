import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plane, User, ChevronLeft, ChevronRight, Check, Wallet, Shield, Printer, QrCode, Search, FileText, CreditCard, ClipboardList, ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import './ServiceDemo.css'

// Absher Logo SVG for Loading Animation
const AbsherLogoLoader = ({ className = '' }) => (
  <svg className={`absher-loader-logo ${className}`} xmlns="http://www.w3.org/2000/svg" width="60" height="90" viewBox="0 0 37 55" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M32.7429 4.21435H36.9704V0.0148506C34.8147 -0.209123 32.4629 2.1426 32.7429 4.21435ZM36.9998 6.03393V6.56586V46.3491C36.9998 47.385 36.6358 47.9449 35.6279 48.0569C34.964 48.135 34.2865 48.1178 33.5954 48.1002C33.2956 48.0926 32.9932 48.0849 32.6883 48.0849V47.581V7.82571C32.6883 6.73384 33.0802 6.17391 34.1161 6.06192C34.7614 5.98371 35.434 6.00109 36.1148 6.01869C36.4088 6.02629 36.7043 6.03393 36.9998 6.03393ZM4.38271 16.8685V17.4844V53.0962C4.38271 54.356 3.85077 54.916 2.59092 54.972C2.24105 54.9859 1.89117 54.986 1.5413 54.986H1.54101C1.19107 54.986 0.841121 54.986 0.491175 55C0.211208 55 0.0712224 54.888 0.099219 54.608V54.188V19.0522C0.099219 17.5404 0.51917 16.9525 2.28296 16.8965C2.76279 16.8548 3.27371 16.8597 3.81571 16.8649H3.81577C4.00111 16.8667 4.19009 16.8685 4.38271 16.8685ZM30.4328 10.3383V10.3382V10.3382V10.3382V10.3382V10.3382V10.3381V10.3381V10.3381C30.4255 10.2335 30.4181 10.1253 30.4181 10.0096C30.1316 10.0096 29.8549 10.0064 29.5846 10.0032H29.5846H29.5845H29.5845H29.5845H29.5844H29.5844H29.5844H29.5843C29.0623 9.99706 28.5643 9.99119 28.0664 10.0096C26.6105 10.0936 26.1626 10.6256 26.1626 12.0534V47.0212C26.1626 47.1062 26.1658 47.1912 26.1689 47.2752L26.1689 47.2753C26.1751 47.4401 26.1811 47.6008 26.1626 47.7491C26.1346 48.0571 26.2466 48.1691 26.5545 48.1691C26.8905 48.1551 27.2335 48.1551 27.5764 48.1551C27.9194 48.1551 28.2623 48.1551 28.5983 48.1411C29.9141 48.0851 30.4461 47.5252 30.4461 46.2373V10.6256C30.4461 10.5309 30.4395 10.4363 30.4328 10.3385V10.3385V10.3385V10.3384V10.3384V10.3384V10.3383V10.3383V10.3383ZM17.457 16.8968V17.5127V46.1813C17.457 47.4972 16.925 48.0571 15.6092 48.1131C15.1066 48.1317 14.6164 48.1255 14.1221 48.1193H14.122H14.1219H14.1218H14.1217H14.1216H14.1215H14.1212C13.8723 48.1162 13.6225 48.1131 13.3694 48.1131C13.3348 48.1131 13.3002 48.1024 13.2524 48.0876L13.2523 48.0876C13.2228 48.0784 13.1882 48.0678 13.1455 48.0571V47.4412V18.9126C13.1455 17.5127 13.5374 17.0368 14.9093 16.8688C15.3899 16.8345 15.8915 16.8528 16.4207 16.8721L16.4208 16.8721C16.7547 16.8842 17.0995 16.8968 17.457 16.8968ZM23.9535 17.457V16.8691C23.1976 16.8691 22.5257 16.8691 21.8818 16.9251C19.95 16.9811 19.642 17.653 19.642 19.1368V47.3574V47.7774C19.614 48.0574 19.754 48.1693 20.034 48.1693C20.398 48.1553 20.7549 48.1553 21.1119 48.1553C21.4688 48.1553 21.8258 48.1553 22.1897 48.1413C23.4216 48.0854 23.9535 47.5254 23.9535 46.3216V17.457ZM6.62457 48.1411V47.4132V18.8846C6.62457 17.5128 6.96053 17.0648 8.33236 16.8968C8.93066 16.837 9.52895 16.8482 10.1374 16.8596H10.1374H10.1374H10.1374H10.1374H10.1375L10.1377 16.8596C10.3833 16.8642 10.6305 16.8688 10.8801 16.8688C10.8801 16.9706 10.8876 17.0724 10.8949 17.1702C10.9016 17.2608 10.9081 17.348 10.9081 17.4288V46.2373C10.9081 47.4972 10.3761 48.0571 9.14427 48.0851C8.33236 48.1411 7.52046 48.1411 6.62457 48.1411ZM6.53903 12.2773C6.53903 13.4811 7.51891 14.461 8.75076 14.461C10.0106 14.461 10.9625 13.5091 10.9905 12.3053C10.9905 11.0454 10.0106 10.0375 8.77876 10.0375C7.54691 10.0095 6.53903 11.0454 6.53903 12.2773ZM21.7975 14.461C20.5377 14.461 19.5858 13.5091 19.5858 12.2212C19.5858 10.9894 20.5937 10.0095 21.7975 10.0095C23.0294 10.0095 24.0373 11.0454 24.0093 12.2772C24.0093 13.4811 23.0294 14.461 21.7975 14.461ZM13.0341 12.2773C13.0621 13.5091 14.042 14.461 15.2738 14.461C16.5057 14.461 17.4855 13.5091 17.4855 12.3053C17.5135 11.0734 16.5057 10.0375 15.2738 10.0375C14.042 10.0095 13.0341 11.0454 13.0341 12.2773ZM30.4209 52.1724C30.4209 53.3762 29.413 54.3841 28.2092 54.3841C26.9773 54.3841 25.9695 53.3762 25.9695 52.1444C25.9695 50.9125 26.9493 49.9606 28.1812 49.9606C29.469 49.9606 30.4209 50.9125 30.4209 52.1724Z" fill="currentColor"></path>
  </svg>
)

const TOTAL_DEBT = 250000
const DAILY_RATE = 0.01
const RESERVE_MULTIPLIER = 1.5

function ServiceDemo() {
  const { t, language, direction } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [destination, setDestination] = useState(language === 'ar' ? 'دبي، الإمارات' : 'Dubai, UAE')
  const [days, setDays] = useState(5)
  const [showPermitPreview, setShowPermitPreview] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showForm, setShowForm] = useState(false) // For Step 1 sub-view

  const ChevronIcon = direction === 'rtl' ? ChevronLeft : ChevronRight
  const GUARANTOR_NAME = language === 'ar' ? 'خالد عبدالله العتيبي' : 'Khalid Abdullah Al-Otaibi'
  const DEBTOR_NAME = language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohammed'

  // Calculate costs
  const dailyAmount = TOTAL_DEBT * DAILY_RATE
  const totalCost = dailyAmount * days
  const requiredAmount = totalCost * RESERVE_MULTIPLIER

  const formatNumber = (num) => {
    return num.toLocaleString(language === 'ar' ? 'ar-SA' : 'en-US')
  }

  const handleNextStep = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep(prev => prev + 1)
    }, 2500)
  }

  const steps = [
    { number: 1, label: language === 'ar' ? 'بيانات الرحلة' : 'Trip Data' },
    { number: 2, label: language === 'ar' ? 'موافقة الضامن' : 'Guarantor Approval' },
    { number: 3, label: language === 'ar' ? 'موافقة الدائن' : 'Creditor Approval' },
    { number: 4, label: language === 'ar' ? 'شحن المحفظة' : 'Load Wallet' },
    { number: 5, label: language === 'ar' ? 'إصدار التصريح' : 'Issue Permit' },
  ]

  const sidebarItems = [
    { icon: <FileText size={20} />, label: language === 'ar' ? 'الخدمات الإلكترونية' : 'E-Services', active: true },
    { icon: <ClipboardList size={20} />, label: language === 'ar' ? 'التفاويض' : 'Authorizations', active: false },
    { icon: <FileText size={20} />, label: language === 'ar' ? 'استبيانات أبشر' : 'Absher Surveys', active: false },
    { icon: <CreditCard size={20} />, label: language === 'ar' ? 'المدفوعات الحكومية' : 'Government Payments', active: false },
  ]

  // Render Loading State
  const renderLoading = () => (
    <div className="absher-loading">
      <AbsherLogoLoader />
      <p>{language === 'ar' ? 'جاري معالجة الطلب والتحقق من الأنظمة...' : 'Processing request and verifying systems...'}</p>
    </div>
  )

  // Step 1: Trip Data - Two sub-views (List View and Form View)
  const renderStep1 = () => {
    // Sub-view 1: List/Table View
    if (!showForm) {
      return (
        <div className="absher-step-content">
          {/* Info Banner */}
          <div className="absher-info-banner">
            <span>{language === 'ar' ? 'إجمالي المديونية المسجلة في ناجز:' : 'Total debt registered in Najiz:'} {formatNumber(TOTAL_DEBT)} {language === 'ar' ? 'ر.س' : 'SAR'}</span>
          </div>

          {/* Action Button */}
          <div className="absher-action-row">
            <button className="absher-primary-btn" onClick={() => setShowForm(true)}>
              <Plane size={18} />
              {language === 'ar' ? 'إضافة طلب سفر جديد' : 'Add New Travel Request'}
            </button>
          </div>

          {/* Search and Pagination Header */}
          <div className="absher-table-header">
            <div className="absher-search">
              <span>{language === 'ar' ? 'بحث سريع :' : 'Quick Search:'}</span>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="absher-pagination-select">
              <span>{language === 'ar' ? 'إظهار' : 'Show'}</span>
              <select defaultValue="10">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <span>{language === 'ar' ? 'لكل صفحة' : 'per page'}</span>
            </div>
          </div>

          {/* Data Table */}
          <div className="absher-table-container">
            <table className="absher-table">
              <thead>
                <tr>
                  <th>{language === 'ar' ? 'الوجهة' : 'Destination'}</th>
                  <th>{language === 'ar' ? 'مدة السفر' : 'Duration'}</th>
                  <th>{language === 'ar' ? 'المبلغ المطلوب' : 'Required Amount'}</th>
                  <th>{language === 'ar' ? 'الحالة' : 'Status'}</th>
                  <th>{language === 'ar' ? 'المهام' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="empty-row">
                  <td colSpan="5">{language === 'ar' ? 'لا توجد طلبات سفر سابقة' : 'No previous travel requests'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="absher-table-footer">
            <span>{language === 'ar' ? 'السجلات الظاهرة: 0 إلى 0 من أصل 0' : 'Showing: 0 to 0 of 0 records'}</span>
            <div className="absher-pagination">
              <button disabled>{language === 'ar' ? 'السابق' : 'Previous'}</button>
              <button disabled>{language === 'ar' ? 'التالي' : 'Next'}</button>
            </div>
          </div>
        </div>
      )
    }

    // Sub-view 2: Form View (after clicking "Add New Travel Request")
    return (
      <div className="absher-step-content">
        {/* Form Card */}
        <div className="absher-form-card">
          <h3>{language === 'ar' ? 'بيانات طلب السفر الجديد' : 'New Travel Request Details'}</h3>
          
          <div className="absher-form-grid">
            <div className="absher-form-group">
              <label>{language === 'ar' ? 'الوجهة' : 'Destination'}</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="absher-form-group">
              <label>{language === 'ar' ? 'مدة السفر (أيام)' : 'Duration (days)'}</label>
              <input
                type="number"
                value={days}
                min={1}
                onChange={(e) => setDays(parseInt(e.target.value) || 1)}
              />
            </div>
          </div>

          {/* Cost Summary */}
          <div className="absher-cost-summary">
            <div className="cost-row">
              <span>{language === 'ar' ? 'القسط اليومي (1%)' : 'Daily Rate (1%)'}</span>
              <span>{formatNumber(dailyAmount)} {language === 'ar' ? 'ر.س' : 'SAR'}</span>
            </div>
            <div className="cost-row">
              <span>{language === 'ar' ? 'إجمالي أيام الرحلة' : 'Total Trip Days'}</span>
              <span>{days} {language === 'ar' ? 'يوم' : 'days'}</span>
            </div>
            <div className="cost-row total">
              <span>{language === 'ar' ? 'المبلغ المطلوب شحنه' : 'Amount to Load'}</span>
              <span>{formatNumber(requiredAmount)} {language === 'ar' ? 'ر.س' : 'SAR'}</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absher-nav-buttons">
          <button className="absher-secondary-btn" onClick={() => setShowForm(false)}>
            {language === 'ar' ? 'السابق' : 'Previous'}
          </button>
          <button className="absher-primary-btn" onClick={handleNextStep}>
            {language === 'ar' ? 'إرسال للضامن' : 'Send to Guarantor'}
            <ChevronIcon size={18} />
          </button>
        </div>
      </div>
    )
  }

  // Step 2: Guarantor Approval
  const renderStep2 = () => (
    <div className="absher-step-content">
      <div className="absher-info-banner success">
        <Check size={18} />
        <span>{language === 'ar' ? 'تم إرسال الطلب للضامن بنجاح' : 'Request sent to guarantor successfully'}</span>
      </div>

      <div className="absher-status-card">
        <div className="status-header">
          <h3>{language === 'ar' ? 'حالة الطلب' : 'Request Status'}</h3>
          <span className="status-badge pending">{language === 'ar' ? 'بانتظار الموافقة' : 'Pending Approval'}</span>
        </div>
        <div className="status-details">
          <div className="detail-item">
            <span className="label">{language === 'ar' ? 'اسم الضامن:' : 'Guarantor Name:'}</span>
            <span className="value">{GUARANTOR_NAME}</span>
          </div>
          <div className="detail-item">
            <span className="label">{language === 'ar' ? 'المبلغ المطلوب ضمانه:' : 'Amount to Guarantee:'}</span>
            <span className="value">{formatNumber(requiredAmount)} {language === 'ar' ? 'ر.س' : 'SAR'}</span>
          </div>
          <div className="detail-item">
            <span className="label">{language === 'ar' ? 'مدة السفر:' : 'Duration:'}</span>
            <span className="value">{days} {language === 'ar' ? 'يوم' : 'days'}</span>
          </div>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="absher-phone-mockup">
        <div className="phone-frame">
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <div className="phone-status-bar">
              <span>9:41</span>
              <div className="status-icons">
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>
            <div className="phone-app-header">
              <span>{language === 'ar' ? 'أبشر' : 'Absher'}</span>
              <User size={18} />
            </div>
            <div className="phone-content">
              <div className="notification-card">
                <Plane size={24} />
                <h4>{language === 'ar' ? 'طلب كفالة سفر' : 'Travel Guarantee Request'}</h4>
                <p>{language === 'ar' ? `وردك طلب كفالة سفر من ${DEBTOR_NAME}` : `You received a travel guarantee request from ${DEBTOR_NAME}`}</p>
                <div className="notification-details">
                  <div><span>{language === 'ar' ? 'الوجهة:' : 'Destination:'}</span> {destination}</div>
                  <div><span>{language === 'ar' ? 'المبلغ:' : 'Amount:'}</span> {formatNumber(requiredAmount)} {language === 'ar' ? 'ر.س' : 'SAR'}</div>
                </div>
                <div className="notification-buttons">
                  <button className="accept-btn" onClick={handleNextStep}>{language === 'ar' ? 'قبول' : 'Accept'}</button>
                  <button className="reject-btn">{language === 'ar' ? 'رفض' : 'Reject'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absher-nav-buttons">
        <button className="absher-secondary-btn" onClick={() => setCurrentStep(1)}>
          {language === 'ar' ? 'السابق' : 'Previous'}
        </button>
      </div>
    </div>
  )

  // Step 3: Creditor Approval (Internal Absher Step)
  const renderStep3 = () => (
    <div className="absher-step-content">
      {/* Success Banner */}
      <div className="absher-info-banner success">
        <Check size={18} />
        <span>{language === 'ar' ? 'تم قبول الضامن - الكفالة المالية جاهزة' : 'Guarantor accepted - Financial guarantee ready'}</span>
      </div>

      {/* Creditor Request Card */}
      <div className="absher-request-card">
        <div className="request-card-header">
          <div className="request-icon-wrapper">
            <Plane size={24} />
          </div>
          <div className="request-info">
            <h3>{language === 'ar' ? 'طلب تصريح سفر #88992' : 'Travel Permit Request #88992'}</h3>
            <span className="request-time">{language === 'ar' ? 'منذ 2 دقيقة' : '2 minutes ago'}</span>
          </div>
          <span className="status-badge pending">{language === 'ar' ? 'بانتظار موافقة الدائن' : 'Pending Creditor Approval'}</span>
        </div>

        <div className="request-card-body">
          <div className="request-detail-grid">
            <div className="request-detail-item">
              <span className="detail-label">{language === 'ar' ? 'اسم المدين' : 'Debtor Name'}</span>
              <span className="detail-value">{DEBTOR_NAME}</span>
            </div>
            <div className="request-detail-item">
              <span className="detail-label">{language === 'ar' ? 'اسم الضامن' : 'Guarantor Name'}</span>
              <span className="detail-value">{GUARANTOR_NAME}</span>
            </div>
            <div className="request-detail-item">
              <span className="detail-label">{language === 'ar' ? 'الوجهة' : 'Destination'}</span>
              <span className="detail-value">{destination}</span>
            </div>
            <div className="request-detail-item">
              <span className="detail-label">{language === 'ar' ? 'مدة السفر' : 'Duration'}</span>
              <span className="detail-value">{days} {language === 'ar' ? 'يوم' : 'days'}</span>
            </div>
          </div>

          <div className="request-schedule-info">
            <h4>{language === 'ar' ? 'تفاصيل جدول السداد' : 'Payment Schedule Details'}</h4>
            <div className="schedule-row">
              <span>{language === 'ar' ? 'نوع الجدولة:' : 'Schedule Type:'}</span>
              <span>{language === 'ar' ? 'خصم يومي تلقائي (1%)' : 'Auto daily deduction (1%)'}</span>
            </div>
            <div className="schedule-row">
              <span>{language === 'ar' ? 'المبلغ اليومي:' : 'Daily Amount:'}</span>
              <span>{formatNumber(dailyAmount)} {language === 'ar' ? 'ر.س' : 'SAR'}</span>
            </div>
            <div className="schedule-row total">
              <span>{language === 'ar' ? 'المبلغ المتوقع تحصيله:' : 'Expected Collection:'}</span>
              <span>{formatNumber(totalCost)} {language === 'ar' ? 'ر.س' : 'SAR'}</span>
            </div>
          </div>

          <div className="guarantee-status-box">
            <Check size={20} />
            <div>
              <span className="guarantee-title">{language === 'ar' ? 'الضمان المالي متوفر' : 'Financial Guarantee Available'}</span>
              <span className="guarantee-desc">{language === 'ar' ? 'تم التحقق من توفر المبلغ في محفظة الضامن' : 'Amount verified in guarantor wallet'}</span>
            </div>
          </div>
        </div>

        <div className="request-card-actions">
          <button className="absher-primary-btn" onClick={handleNextStep}>
            <Check size={18} />
            {language === 'ar' ? 'الموافقة على جدول السداد' : 'Approve Payment Schedule'}
          </button>
          <button className="absher-danger-btn">
            {language === 'ar' ? 'رفض الطلب' : 'Reject Request'}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="absher-nav-buttons">
        <button className="absher-secondary-btn" onClick={() => setCurrentStep(2)}>
          {language === 'ar' ? 'السابق' : 'Previous'}
        </button>
      </div>
    </div>
  )

  // Step 4: Wallet Loading
  const renderStep4 = () => (
    <div className="absher-step-content">
      <div className="absher-info-banner success">
        <Check size={18} />
        <span>{language === 'ar' ? 'تمت موافقة الدائن على جدول السداد' : 'Creditor approved the payment schedule'}</span>
      </div>

      <div className="absher-payment-card">
        <div className="payment-header">
          <Wallet size={32} />
          <div>
            <h3>{language === 'ar' ? 'شحن المحفظة' : 'Load Wallet'}</h3>
            <p>{language === 'ar' ? 'يرجى شحن المحفظة بالمبلغ المطلوب لإصدار التصريح' : 'Please load the wallet with the required amount to issue the permit'}</p>
          </div>
        </div>

        <div className="payment-amount">
          <span className="label">{language === 'ar' ? 'المبلغ المطلوب شحنه' : 'Amount to Load'}</span>
          <span className="amount">{formatNumber(requiredAmount)} {language === 'ar' ? 'ر.س' : 'SAR'}</span>
          <span className="note">{language === 'ar' ? 'يشمل احتياطي 50% إضافي' : 'Includes 50% additional reserve'}</span>
        </div>

        <div className="payment-methods">
          <h4>{language === 'ar' ? 'اختر طريقة الدفع' : 'Select Payment Method'}</h4>
          <div className="methods-grid">
            <button className="method-btn active">
              <span>{language === 'ar' ? 'مدى' : 'Mada'}</span>
              <span className="card-number">**** 8829</span>
            </button>
            <button className="method-btn">
              <span>VISA</span>
              <span className="card-number">**** 4521</span>
            </button>
            <button className="method-btn">
              <span>Apple Pay</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absher-nav-buttons">
        <button className="absher-secondary-btn" onClick={() => setCurrentStep(3)}>
          {language === 'ar' ? 'السابق' : 'Previous'}
        </button>
        <button className="absher-primary-btn" onClick={handleNextStep}>
          {language === 'ar' ? 'تأكيد الدفع' : 'Confirm Payment'}
          <ChevronIcon size={18} />
        </button>
      </div>
    </div>
  )

  // Step 5: Issue Permit
  const renderStep5 = () => (
    <div className="absher-step-content">
      <div className="absher-success-card">
        <div className="success-icon">
          <Check size={48} />
        </div>
        <h2>{language === 'ar' ? 'تم إصدار تصريح السفر بنجاح!' : 'Travel Permit Issued Successfully!'}</h2>
        <p>{language === 'ar' ? 'يمكنك الآن السفر. التصريح صالح للفترة المحددة.' : 'You can now travel. The permit is valid for the specified period.'}</p>

        <div className="permit-summary">
          <div className="summary-row">
            <span>{language === 'ar' ? 'رقم التصريح:' : 'Permit Number:'}</span>
            <span>SFR-2024-88992</span>
          </div>
          <div className="summary-row">
            <span>{language === 'ar' ? 'الوجهة:' : 'Destination:'}</span>
            <span>{destination}</span>
          </div>
          <div className="summary-row">
            <span>{language === 'ar' ? 'مدة الصلاحية:' : 'Validity:'}</span>
            <span>{days} {language === 'ar' ? 'يوم' : 'days'}</span>
          </div>
        </div>

        <div className="permit-actions">
          <button className="absher-primary-btn" onClick={() => setShowPermitPreview(true)}>
            <Printer size={18} />
            {language === 'ar' ? 'طباعة التصريح' : 'Print Permit'}
          </button>
          <button className="absher-secondary-btn">
            <QrCode size={18} />
            {language === 'ar' ? 'عرض رمز QR' : 'Show QR Code'}
          </button>
        </div>
      </div>

      <div className="absher-nav-buttons">
        <Link to="/home" className="absher-secondary-btn">
          {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
        </Link>
      </div>
    </div>
  )

  // Calculate return date based on days
  const getReturnDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + days)
    return date.toLocaleDateString('en-CA').replace(/-/g, '/')
  }

  // Permit Preview Modal - Redesigned
  const renderPermitPreview = () => (
    <div className="permit-modal-overlay" onClick={() => setShowPermitPreview(false)}>
      <div className="permit-modal-new" onClick={(e) => e.stopPropagation()}>
        {/* Success Header */}
        <div className="permit-success-header">
          <div className="success-icon">
            <Check size={40} strokeWidth={3} />
          </div>
          <h2 className="success-title">
            {language === 'ar' ? 'تم إصدار تصريح السفر بنجاح' : 'Travel Permit Issued Successfully'}
          </h2>
          <p className="success-subtitle">
            {language === 'ar' 
              ? `يمكنك الآن السفر. تم رفع حظر السفر مؤقتاً لمدة ${days} يوم.`
              : `You can now travel. The travel ban has been temporarily lifted for ${days} days.`}
          </p>
        </div>

        {/* Permit Card */}
        <div className="permit-card">
          {/* QR Code Section */}
          <div className="permit-qr-section">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://absher.sa/verify/TR-2025-88992"
              alt="QR Code"
              className="permit-qr-code"
            />
          </div>

          {/* Permit Details Section */}
          <div className="permit-details-section">
            <div className="permit-badge">
              {language === 'ar' ? 'تصريح رسمي' : 'Official Permit'}
            </div>
            
            <div className="permit-info-grid">
              <div className="permit-info-item">
                <span className="permit-label">{language === 'ar' ? 'رقم التصريح' : 'Permit Number'}</span>
                <span className="permit-value permit-number">TR-2025-88992</span>
              </div>
              
              <div className="permit-info-item">
                <span className="permit-label">{language === 'ar' ? 'اسم المسافر' : 'Traveler Name'}</span>
                <span className="permit-value">{DEBTOR_NAME}</span>
              </div>
              
              <div className="permit-info-item">
                <span className="permit-label">{language === 'ar' ? 'الوجهة' : 'Destination'}</span>
                <span className="permit-value">{destination}</span>
              </div>
              
              <div className="permit-info-item">
                <span className="permit-label">{language === 'ar' ? 'تاريخ العودة الالزامي' : 'Mandatory Return Date'}</span>
                <span className="permit-value permit-date">{getReturnDate()}</span>
              </div>
              
              <div className="permit-info-item">
                <span className="permit-label">{language === 'ar' ? 'الضامن' : 'Guarantor'}</span>
                <span className="permit-value">{GUARANTOR_NAME}</span>
              </div>
              
              <div className="permit-info-item">
                <span className="permit-label">{language === 'ar' ? 'حالة السداد' : 'Payment Status'}</span>
                <span className="permit-value permit-status">{language === 'ar' ? 'مجدول تلقائياً' : 'Automatically Scheduled'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="permit-modal-buttons">
          <Link to="/home" className="absher-secondary-btn" onClick={() => setShowPermitPreview(false)}>
            {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
          <button className="absher-primary-btn">
            <FileText size={18} />
            {language === 'ar' ? 'عرض وطباعة التصريح' : 'View & Print Permit'}
          </button>
        </div>
      </div>
    </div>
  )

  const renderCurrentStep = () => {
    if (isLoading) return renderLoading()
    
    switch (currentStep) {
      case 1: return renderStep1()
      case 2: return renderStep2()
      case 3: return renderStep3()
      case 4: return renderStep4()
      case 5: return renderStep5()
      default: return renderStep1()
    }
  }

  return (
    <div className="absher-service-page">
      {/* Main Layout */}
      <div className="absher-main-layout">
        {/* Sidebar */}
        <aside className="absher-sidebar">
          <div className="sidebar-header">
            <FileText size={20} />
            <span>{language === 'ar' ? 'الخدمات الإلكترونية' : 'E-Services'}</span>
            <ChevronIcon size={16} />
          </div>
          <nav className="sidebar-nav">
            {sidebarItems.map((item, index) => (
              <a key={index} className={`sidebar-item ${item.active ? 'active' : ''}`}>
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="absher-content">
          {/* Breadcrumb */}
          <div className="absher-breadcrumb">
            <Link to="/home">{language === 'ar' ? 'الخدمات الإلكترونية' : 'E-Services'}</Link>
            <ChevronIcon size={14} />
            <span>{language === 'ar' ? 'أبشر سفر' : 'Absher Safar'}</span>
            <ChevronIcon size={14} />
            <span>{language === 'ar' ? 'طلب تصريح سفر' : 'Travel Permit Request'}</span>
          </div>

          {/* Page Title */}
          <div className="absher-page-title">
            <Plane size={24} />
            <h1>{language === 'ar' ? 'أبشر سفر - طلب تصريح سفر' : 'Absher Safar - Travel Permit Request'}</h1>
          </div>

          {/* Content Title Header */}
          <div className="content-title-header">
            <Plane size={20} />
            <h2>{language === 'ar' ? 'أبشر سفر - طلب تصريح سفر جديد' : 'Absher Safar - New Travel Permit Request'}</h2>
          </div>

          {/* Stepper */}
          <div className="absher-stepper">
            {steps.map((step, index) => {
              // Line connects to the next step (all steps except the last one have a line)
              const shouldShowLine = index < steps.length - 1;
              
              return (
                <div key={step.number} className={`stepper-step ${currentStep >= step.number ? 'completed' : ''} ${currentStep === step.number ? 'active' : ''}`}>
                  <div className="step-circle">
                    {currentStep > step.number ? <Check size={16} /> : step.number}
                  </div>
                  <span className="step-label">{step.label}</span>
                  {shouldShowLine && <div className="step-line"></div>}
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          {renderCurrentStep()}
        </main>
      </div>

      {/* Permit Preview Modal */}
      {showPermitPreview && renderPermitPreview()}
    </div>
  )
}

export default ServiceDemo
