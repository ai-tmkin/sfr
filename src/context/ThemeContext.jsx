import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

// Default colors
const defaultColors = {
  primary: '#544099',
  primaryDark: '#3d2f73',
  primaryLight: '#6b52b8',
  gold: '#C2A261',
  goldLight: '#D4AF37',
  background: '#FFFFFF',
  backgroundAlt: '#F8F9FA',
  cardBg: '#E8E8F5',
  textPrimary: '#544099',
  textSecondary: '#6B7280',
  textMuted: '#9CA3AF',
  border: '#E5E7EB',
  success: '#10B981',
  error: '#EF4444',
};

export const ThemeProvider = ({ children }) => {
  const [colors, setColors] = useState(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('absher-theme-colors');
    if (saved) {
      try {
        return { ...defaultColors, ...JSON.parse(saved) };
      } catch {
        return defaultColors;
      }
    }
    return defaultColors;
  });

  // Apply colors to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-dark', colors.primaryDark);
    root.style.setProperty('--color-primary-light', colors.primaryLight);
    root.style.setProperty('--color-gold', colors.gold);
    root.style.setProperty('--color-gold-light', colors.goldLight);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-background-alt', colors.backgroundAlt);
    root.style.setProperty('--color-card-bg', colors.cardBg);
    root.style.setProperty('--color-text-primary', colors.textPrimary);
    root.style.setProperty('--color-text-secondary', colors.textSecondary);
    root.style.setProperty('--color-text-muted', colors.textMuted);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-success', colors.success);
    root.style.setProperty('--color-error', colors.error);
    
    // Save to localStorage
    localStorage.setItem('absher-theme-colors', JSON.stringify(colors));
  }, [colors]);

  const updateColor = (key, value) => {
    setColors(prev => ({ ...prev, [key]: value }));
  };

  const resetColors = () => {
    setColors(defaultColors);
    localStorage.removeItem('absher-theme-colors');
  };

  const setPreset = (preset) => {
    setColors({ ...defaultColors, ...preset });
  };

  return (
    <ThemeContext.Provider value={{ colors, updateColor, resetColors, setPreset, defaultColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);



