import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "zh" | "en";

export type LocalizedText = {
  en: string;
  zh: string;
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const STORAGE_KEY = "ken-portfolio-language";
const LanguageContext = createContext<LanguageContextValue | null>(null);

function getBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const preferredLanguage = window.navigator.languages?.[0] ?? window.navigator.language;
  return preferredLanguage?.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return storedLanguage === "zh" || storedLanguage === "en" ? storedLanguage : getBrowserLanguage();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    updateLanguage(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    updateLanguage((currentLanguage) => {
      const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
      return nextLanguage;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  useEffect(() => {
    const followBrowserLanguage = () => {
      if (window.localStorage.getItem(STORAGE_KEY) === null) {
        updateLanguage(getBrowserLanguage());
      }
    };

    window.addEventListener("languagechange", followBrowserLanguage);
    return () => window.removeEventListener("languagechange", followBrowserLanguage);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, setLanguage, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function bilingual(language: Language, english: string, chinese: string) {
  return language === "zh" ? chinese : english;
}

export function localize(language: Language, text: LocalizedText) {
  return language === "zh" ? text.zh : text.en;
}
