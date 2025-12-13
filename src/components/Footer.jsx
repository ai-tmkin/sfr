import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

// Absher Logo SVG
const AbsherLogoSVG = () => (
  <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="37" height="55" viewBox="0 0 37 55" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M32.7429 4.21435H36.9704V0.0148506C34.8147 -0.209123 32.4629 2.1426 32.7429 4.21435ZM36.9998 6.03393V6.56586V46.3491C36.9998 47.385 36.6358 47.9449 35.6279 48.0569C34.964 48.135 34.2865 48.1178 33.5954 48.1002C33.2956 48.0926 32.9932 48.0849 32.6883 48.0849V47.581V7.82571C32.6883 6.73384 33.0802 6.17391 34.1161 6.06192C34.7614 5.98371 35.434 6.00109 36.1148 6.01869C36.4088 6.02629 36.7043 6.03393 36.9998 6.03393ZM4.38271 16.8685V17.4844V53.0962C4.38271 54.356 3.85077 54.916 2.59092 54.972C2.24105 54.9859 1.89117 54.986 1.5413 54.986H1.54101C1.19107 54.986 0.841121 54.986 0.491175 55C0.211208 55 0.0712224 54.888 0.099219 54.608V54.188V19.0522C0.099219 17.5404 0.51917 16.9525 2.28296 16.8965C2.76279 16.8548 3.27371 16.8597 3.81571 16.8649H3.81577C4.00111 16.8667 4.19009 16.8685 4.38271 16.8685ZM30.4328 10.3383V10.3382V10.3382V10.3382V10.3382V10.3382V10.3381V10.3381V10.3381C30.4255 10.2335 30.4181 10.1253 30.4181 10.0096C30.1316 10.0096 29.8549 10.0064 29.5846 10.0032H29.5846H29.5845H29.5845H29.5845H29.5844H29.5844H29.5844H29.5843C29.0623 9.99706 28.5643 9.99119 28.0664 10.0096C26.6105 10.0936 26.1626 10.6256 26.1626 12.0534V47.0212C26.1626 47.1062 26.1658 47.1912 26.1689 47.2752L26.1689 47.2753C26.1751 47.4401 26.1811 47.6008 26.1626 47.7491C26.1346 48.0571 26.2466 48.1691 26.5545 48.1691C26.8905 48.1551 27.2335 48.1551 27.5764 48.1551C27.9194 48.1551 28.2623 48.1551 28.5983 48.1411C29.9141 48.0851 30.4461 47.5252 30.4461 46.2373V10.6256C30.4461 10.5309 30.4395 10.4363 30.4328 10.3385V10.3385V10.3385V10.3384V10.3384V10.3384V10.3383V10.3383V10.3383ZM17.457 16.8968V17.5127V46.1813C17.457 47.4972 16.925 48.0571 15.6092 48.1131C15.1066 48.1317 14.6164 48.1255 14.1221 48.1193H14.122H14.1219H14.1218H14.1217H14.1216H14.1215H14.1212C13.8723 48.1162 13.6225 48.1131 13.3694 48.1131C13.3348 48.1131 13.3002 48.1024 13.2524 48.0876L13.2523 48.0876C13.2228 48.0784 13.1882 48.0678 13.1455 48.0571V47.4412V18.9126C13.1455 17.5127 13.5374 17.0368 14.9093 16.8688C15.3899 16.8345 15.8915 16.8528 16.4207 16.8721L16.4208 16.8721C16.7547 16.8842 17.0995 16.8968 17.457 16.8968ZM23.9535 17.457V16.8691C23.1976 16.8691 22.5257 16.8691 21.8818 16.9251C19.95 16.9811 19.642 17.653 19.642 19.1368V47.3574V47.7774C19.614 48.0574 19.754 48.1693 20.034 48.1693C20.398 48.1553 20.7549 48.1553 21.1119 48.1553C21.4688 48.1553 21.8258 48.1553 22.1897 48.1413C23.4216 48.0854 23.9535 47.5254 23.9535 46.3216V17.457ZM6.62457 48.1411V47.4132V18.8846C6.62457 17.5128 6.96053 17.0648 8.33236 16.8968C8.93066 16.837 9.52895 16.8482 10.1374 16.8596H10.1374H10.1374H10.1374H10.1374H10.1375L10.1377 16.8596C10.3833 16.8642 10.6305 16.8688 10.8801 16.8688C10.8801 16.9706 10.8876 17.0724 10.8949 17.1702C10.9016 17.2608 10.9081 17.348 10.9081 17.4288V46.2373C10.9081 47.4972 10.3761 48.0571 9.14427 48.0851C8.33236 48.1411 7.52046 48.1411 6.62457 48.1411ZM6.53903 12.2773C6.53903 13.4811 7.51891 14.461 8.75076 14.461C10.0106 14.461 10.9625 13.5091 10.9905 12.3053C10.9905 11.0454 10.0106 10.0375 8.77876 10.0375C7.54691 10.0095 6.53903 11.0454 6.53903 12.2773ZM21.7975 14.461C20.5377 14.461 19.5858 13.5091 19.5858 12.2212C19.5858 10.9894 20.5937 10.0095 21.7975 10.0095C23.0294 10.0095 24.0373 11.0454 24.0093 12.2772C24.0093 13.4811 23.0294 14.461 21.7975 14.461ZM13.0341 12.2773C13.0621 13.5091 14.042 14.461 15.2738 14.461C16.5057 14.461 17.4855 13.5091 17.4855 12.3053C17.5135 11.0734 16.5057 10.0375 15.2738 10.0375C14.042 10.0095 13.0341 11.0454 13.0341 12.2773ZM30.4209 52.1724C30.4209 53.3762 29.413 54.3841 28.2092 54.3841C26.9773 54.3841 25.9695 53.3762 25.9695 52.1444C25.9695 50.9125 26.9493 49.9606 28.1812 49.9606C29.469 49.9606 30.4209 50.9125 30.4209 52.1724Z" fill="currentColor"></path>
  </svg>
)

// Social Media Icons
const SnapchatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c-2.4 0-4.2.9-5.3 2.6-.8 1.2-.9 2.5-.9 3.9 0 1.1.1 2.1.2 2.6-.4.1-.9.3-1.3.5-.8.4-1.2 1-1.2 1.7 0 .9.8 1.5 1.8 1.8.4.1.8.2 1.1.3-.1.2-.2.5-.3.8-.3.6-.7 1.3-1.2 1.9-.4.5-.8 1-1.3 1.4-.4.3-.5.8-.3 1.2.2.4.6.6 1 .7 1.1.2 2.1.4 2.9.8.4.2.7.5 1.1.8.7.6 1.5 1.1 2.7 1.1s2-.5 2.7-1.1c.4-.3.7-.6 1.1-.8.8-.4 1.8-.6 2.9-.8.4-.1.8-.3 1-.7.2-.4.1-.9-.3-1.2-.5-.4-.9-.9-1.3-1.4-.5-.6-.9-1.3-1.2-1.9-.1-.3-.2-.6-.3-.8.3-.1.7-.2 1.1-.3 1-.3 1.8-.9 1.8-1.8 0-.7-.4-1.3-1.2-1.7-.4-.2-.9-.4-1.3-.5.1-.5.2-1.5.2-2.6 0-1.4-.1-2.7-.9-3.9C16.2 2.9 14.4 2 12 2z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
)

// Accessibility Icons
const ContrastIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a10 10 0 0 1 0 20z"/>
  </svg>
)

const ZoomInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="11" y1="8" x2="11" y2="14"/>
    <line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
)

const ZoomOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
)

function Footer() {
  const { language } = useLanguage()

  // Navigation links matching actual pages in the app
  const navLinks = [
    { to: '/', labelAr: 'الرئيسية', labelEn: 'Home' },
    { to: '/servicedemo', labelAr: 'تنفيذ الخدمة', labelEn: 'Execute Service' },
    { to: '/faq', labelAr: 'الأسئلة الشائعة', labelEn: 'FAQ' },
    { to: '/settings', labelAr: 'الإعدادات', labelEn: 'Settings' },
  ]

  return (
    <footer className="absher-footer-v2">
      {/* Main Footer */}
      <div className="footer-main-v2">
        <div className="footer-container">
          {/* Quick Navigation - First on right in RTL */}
          <div className="footer-link-column">
            <h4>{language === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to}>{language === 'ar' ? link.labelAr : link.labelEn}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Help Tools Column */}
          <div className="footer-link-column footer-social-column">
            <h4>{language === 'ar' ? 'تواصل معنا' : 'Connect With Us'}</h4>
            <div className="social-icons-row">
              <a href="https://www.snapchat.com/add/absher.sa" target="_blank" rel="noopener noreferrer" title="Snapchat"><SnapchatIcon /></a>
              <a href="https://www.facebook.com/AbsherKSA" target="_blank" rel="noopener noreferrer" title="Facebook"><FacebookIcon /></a>
              <a href="https://twitter.com/absher" target="_blank" rel="noopener noreferrer" title="X"><TwitterIcon /></a>
              <a href="http://www.youtube.com/user/moigovsa" target="_blank" rel="noopener noreferrer" title="YouTube"><YoutubeIcon /></a>
            </div>
            
            <h4 className="mt-3">{language === 'ar' ? 'أدوات المساعدة' : 'Accessibility'}</h4>
            <div className="accessibility-icons">
              <button title={language === 'ar' ? 'التباين' : 'Contrast'}><ContrastIcon /></button>
              <button title={language === 'ar' ? 'تكبير' : 'Zoom In'}><ZoomInIcon /></button>
              <button title={language === 'ar' ? 'تصغير' : 'Zoom Out'}><ZoomOutIcon /></button>
            </div>
          </div>

          {/* Brand Column - Center/Last */}
          <div className="footer-brand-column">
            <div className="brand-logo-phone">
              <div className="brand-logo">
                <AbsherLogoSVG />
              </div>
              <a href="tel:920020405" className="brand-phone">
                920020405
              </a>
            </div>
            <div className="registered-badge">
              <span>{language === 'ar' ? 'مسجل في' : 'Registered on'}</span>
              <img src="https://raqmi.dga.gov.sa/PlatformsApi/api/Attachments/27640802-9445-4107-b190-b29c00e936c2" alt="Raqmi" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright-v2">
        <div className="footer-container">
          <div className="copyright-links">
            <a href="#">{language === 'ar' ? 'خريطة الموقع' : 'Sitemap'}</a>
            <span>|</span>
            <a href="#">{language === 'ar' ? 'التقويم' : 'Calendar'}</a>
          </div>
          <span className="copyright-text">
            {language === 'ar' 
              ? 'جميع الحقوق محفوظة لأبشر، المملكة العربية السعودية © 1447هـ - 2025م.'
              : 'All rights reserved to Absher, KSA © 1447H - 2025.'}
          </span>
          <div className="nic-logo">
            <span>{language === 'ar' ? 'تطوير و تشغيل مركز المعلومات الوطني' : 'Developed by NIC'}</span>
            <img src="https://www.absher.sa/portal/individuals/assets/images/sdaia.png" alt="NIC" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
