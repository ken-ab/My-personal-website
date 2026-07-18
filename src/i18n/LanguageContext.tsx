import { createContext, useContext, useEffect, type ReactNode } from "react";

export type Language = "zh" | "en";

export type LocalizedText = {
  en: string;
  zh: string;
};

type LanguageContextValue = {
  language: Language;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const chineseLanguageContext: LanguageContextValue = { language: "zh" };

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "zh-CN";
    window.localStorage.removeItem("ken-portfolio-language");
  }, []);

  return <LanguageContext.Provider value={chineseLanguageContext}>{children}</LanguageContext.Provider>;
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
