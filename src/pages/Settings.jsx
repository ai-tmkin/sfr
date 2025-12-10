import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { Palette, RotateCcw, Check, Sparkles } from 'lucide-react'
import './Settings.css'

// Preset themes
const presets = {
  purple: {
    name: { ar: 'أرجواني (افتراضي)', en: 'Purple (Default)' },
    colors: {
      primary: '#544099',
      primaryDark: '#3d2f73',
      primaryLight: '#6b52b8',
      cardBg: '#E8E8F5',
      textPrimary: '#544099',
    }
  },
  green: {
    name: { ar: 'أخضر (أبشر الأصلي)', en: 'Green (Original Absher)' },
    colors: {
      primary: '#00412B',
      primaryDark: '#002E1F',
      primaryLight: '#005C3D',
      cardBg: '#E8F0E8',
      textPrimary: '#00412B',
    }
  },
  blue: {
    name: { ar: 'أزرق ملكي', en: 'Royal Blue' },
    colors: {
      primary: '#1E40AF',
      primaryDark: '#1E3A8A',
      primaryLight: '#3B82F6',
      cardBg: '#EFF6FF',
      textPrimary: '#1E40AF',
    }
  },
  teal: {
    name: { ar: 'أزرق مخضر', en: 'Teal' },
    colors: {
      primary: '#0D9488',
      primaryDark: '#0F766E',
      primaryLight: '#14B8A6',
      cardBg: '#F0FDFA',
      textPrimary: '#0D9488',
    }
  },
  maroon: {
    name: { ar: 'كستنائي', en: 'Maroon' },
    colors: {
      primary: '#881337',
      primaryDark: '#6B1029',
      primaryLight: '#BE185D',
      cardBg: '#FFF1F2',
      textPrimary: '#881337',
    }
  },
  orange: {
    name: { ar: 'برتقالي', en: 'Orange' },
    colors: {
      primary: '#C2410C',
      primaryDark: '#9A3412',
      primaryLight: '#EA580C',
      cardBg: '#FFF7ED',
      textPrimary: '#C2410C',
    }
  },
};

const colorLabels = {
  primary: { ar: 'اللون الأساسي', en: 'Primary Color' },
  primaryDark: { ar: 'اللون الأساسي الداكن', en: 'Primary Dark' },
  primaryLight: { ar: 'اللون الأساسي الفاتح', en: 'Primary Light' },
  gold: { ar: 'اللون الذهبي', en: 'Gold Color' },
  goldLight: { ar: 'الذهبي الفاتح', en: 'Light Gold' },
  background: { ar: 'لون الخلفية', en: 'Background' },
  backgroundAlt: { ar: 'خلفية بديلة', en: 'Alt Background' },
  cardBg: { ar: 'خلفية البطاقات', en: 'Card Background' },
  textPrimary: { ar: 'نص أساسي', en: 'Primary Text' },
  textSecondary: { ar: 'نص ثانوي', en: 'Secondary Text' },
  textMuted: { ar: 'نص باهت', en: 'Muted Text' },
  border: { ar: 'لون الحدود', en: 'Border Color' },
  success: { ar: 'لون النجاح', en: 'Success Color' },
  error: { ar: 'لون الخطأ', en: 'Error Color' },
};

function Settings() {
  const { colors, updateColor, resetColors, setPreset } = useTheme();
  const { language } = useLanguage();
  const [activePreset, setActivePreset] = useState(null);
  const [showSaved, setShowSaved] = useState(false);

  const handlePresetClick = (presetKey) => {
    setPreset(presets[presetKey].colors);
    setActivePreset(presetKey);
    showSavedMessage();
  };

  const handleColorChange = (key, value) => {
    updateColor(key, value);
    setActivePreset(null);
    showSavedMessage();
  };

  const handleReset = () => {
    resetColors();
    setActivePreset('purple');
    showSavedMessage();
  };

  const showSavedMessage = () => {
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
  };

  const texts = {
    title: language === 'ar' ? 'إعدادات الألوان' : 'Color Settings',
    subtitle: language === 'ar' ? 'تخصيص ألوان الموقع حسب تفضيلاتك' : 'Customize website colors to your preferences',
    presets: language === 'ar' ? 'قوالب الألوان الجاهزة' : 'Color Presets',
    customColors: language === 'ar' ? 'تخصيص الألوان يدوياً' : 'Custom Colors',
    reset: language === 'ar' ? 'استعادة الافتراضي' : 'Reset to Default',
    saved: language === 'ar' ? 'تم الحفظ تلقائياً' : 'Auto-saved',
    preview: language === 'ar' ? 'معاينة' : 'Preview',
  };

  return (
    <div className="settings-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>
          <Palette size={32} />
          {texts.title}
        </h1>
        <p>{texts.subtitle}</p>
      </div>

      <div className="settings-content">
        {/* Saved Indicator */}
        {showSaved && (
          <div className="saved-indicator">
            <Check size={16} />
            {texts.saved}
          </div>
        )}

        {/* Color Presets */}
        <section className="settings-section">
          <h2>
            <Sparkles size={20} />
            {texts.presets}
          </h2>
          <div className="presets-grid">
            {Object.entries(presets).map(([key, preset]) => (
              <button
                key={key}
                className={`preset-card ${activePreset === key ? 'active' : ''}`}
                onClick={() => handlePresetClick(key)}
                style={{ '--preset-color': preset.colors.primary }}
              >
                <div className="preset-preview">
                  <div className="preset-color-bar" style={{ background: preset.colors.primary }} />
                  <div className="preset-color-bar" style={{ background: preset.colors.primaryLight }} />
                  <div className="preset-color-bar" style={{ background: preset.colors.cardBg }} />
                </div>
                <span className="preset-name">{preset.name[language]}</span>
                {activePreset === key && <Check className="preset-check" size={16} />}
              </button>
            ))}
          </div>
        </section>

        {/* Custom Colors */}
        <section className="settings-section">
          <div className="section-header">
            <h2>{texts.customColors}</h2>
            <button className="reset-btn" onClick={handleReset}>
              <RotateCcw size={16} />
              {texts.reset}
            </button>
          </div>
          
          <div className="colors-grid">
            {Object.entries(colorLabels).map(([key, label]) => (
              <div key={key} className="color-item">
                <label htmlFor={key}>{label[language]}</label>
                <div className="color-input-wrapper">
                  <input
                    type="color"
                    id={key}
                    value={colors[key]}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                  />
                  <input
                    type="text"
                    value={colors[key]}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    className="color-text-input"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Preview Section */}
        <section className="settings-section preview-section">
          <h2>{texts.preview}</h2>
          <div className="preview-container">
            <div className="preview-header" style={{ background: colors.primary }}>
              <span style={{ color: 'white' }}>Header Preview</span>
            </div>
            <div className="preview-content" style={{ background: colors.background }}>
              <div className="preview-card" style={{ background: colors.cardBg, borderColor: colors.border }}>
                <h4 style={{ color: colors.textPrimary }}>
                  {language === 'ar' ? 'عنوان البطاقة' : 'Card Title'}
                </h4>
                <p style={{ color: colors.textSecondary }}>
                  {language === 'ar' ? 'نص توضيحي للمحتوى' : 'Sample content text'}
                </p>
                <button style={{ background: colors.primary, color: 'white' }}>
                  {language === 'ar' ? 'زر' : 'Button'}
                </button>
              </div>
              <div className="preview-badges">
                <span className="preview-badge" style={{ background: colors.success + '20', color: colors.success }}>
                  {language === 'ar' ? 'نجاح' : 'Success'}
                </span>
                <span className="preview-badge" style={{ background: colors.error + '20', color: colors.error }}>
                  {language === 'ar' ? 'خطأ' : 'Error'}
                </span>
                <span className="preview-badge" style={{ background: colors.gold + '20', color: colors.gold }}>
                  {language === 'ar' ? 'ذهبي' : 'Gold'}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Settings;



