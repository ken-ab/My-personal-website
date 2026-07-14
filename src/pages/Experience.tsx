import { ArrowRight, Award, GraduationCap, ServerCog } from "lucide-react";
import { Link } from "react-router-dom";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function Experience() {
  const { language } = useLanguage();

  return (
    <main className="page-shell experience-page-v2 page-enter">
      <section className="phase1-page-hero tone-career" aria-labelledby="experience-title">
        <p className="section-eyebrow">{bilingual(language, "Experience", "经历")}</p>
        <div>
          <h1 id="experience-title">{bilingual(language, "Education, technical practice, and recognition.", "教育、技术实践与竞赛荣誉。")}</h1>
          <p>
            {bilingual(
              language,
              "A concise record of the training and project contexts that support my current research direction.",
              "以简洁履历呈现支撑当前研究方向的学习背景与项目经历。",
            )}
          </p>
        </div>
      </section>

      <section className="experience-section" aria-labelledby="education-title">
        <header><span>01</span><div><p className="section-eyebrow">{bilingual(language, "Education", "教育经历")}</p><h2 id="education-title">{bilingual(language, "Academic foundation", "学术基础")}</h2></div></header>
        <div className="education-list">
          <article>
            <GraduationCap aria-hidden="true" size={25} />
            <div>
              <span>2026</span>
              <h3>{bilingual(language, "The Hong Kong Polytechnic University", "香港理工大学")}</h3>
              <p>{bilingual(language, "Incoming MSc Student in Data Science & Analytics", "数据科学与分析硕士即将入学")}</p>
            </div>
          </article>
          <article>
            <GraduationCap aria-hidden="true" size={25} />
            <div>
              <span>2022–2026</span>
              <h3>{bilingual(language, "Nanjing Tech University", "南京工业大学")}</h3>
              <p>{bilingual(language, "B.Sc. in Data Science and Big Data Technology", "数据科学与大数据技术 · 理学学士")}</p>
              <strong>{bilingual(language, "Average Score: 88/100", "平均分：88/100")}</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="experience-section" aria-labelledby="professional-experience-title">
        <header><span>02</span><div><p className="section-eyebrow">{bilingual(language, "Experience", "实践经历")}</p><h2 id="professional-experience-title">{bilingual(language, "Technical work at scale", "规模化技术实践")}</h2></div></header>
        <article className="supercomputing-experience">
          <div className="supercomputing-title">
            <ServerCog aria-hidden="true" size={28} />
            <div>
              <span>2025.07–2025.09</span>
              <h3>{bilingual(language, "National Supercomputing Center in Wuxi", "国家超级计算无锡中心")}</h3>
              <p>{bilingual(language, "Algorithm Engineer Intern", "算法工程师实习生")}</p>
            </div>
          </div>
          <strong>{bilingual(language, "230K-scale PDB / FASTA records", "23 万规模 PDB / FASTA 记录")}</strong>
          <ul>
            <li>{bilingual(language, "Parallel processing, chain reorganization, structural consistency checks, and abnormal-data cleaning.", "并行处理、链重组、结构一致性检查与异常数据清洗。")}</li>
            <li>{bilingual(language, "HADDOCK3-score execution and Spearman correlation analysis.", "HADDOCK3-score 执行与 Spearman 相关分析。")}</li>
            <li>{bilingual(language, "Factor analysis and composite statistical scoring.", "因子分析与综合统计评分。")}</li>
          </ul>
        </article>
      </section>

      <section className="experience-section" aria-labelledby="recognition-title">
        <header><span>03</span><div><p className="section-eyebrow">{bilingual(language, "Recognition", "荣誉")}</p><h2 id="recognition-title">{bilingual(language, "Competition research", "竞赛研究")}</h2></div></header>
        <article className="recognition-card">
          <Award aria-hidden="true" size={30} />
          <div>
            <span>{bilingual(language, "MCM/ICM 2026 · Meritorious Winner", "MCM/ICM 2026 · Meritorious Winner · M 奖")}</span>
            <h3>Compete or Coevolve: An Evolutionary Macro–Micro Framework for AI-Era Educational Policy</h3>
            {language === "zh" ? <p className="translated-title">竞争还是共生：面向 AI 时代教育政策的宏微观演化框架</p> : null}
            <p>
              {bilingual(
                language,
                "Co-developed a four-module modeling framework for AI-era education and labor-market policy. This is presented as competition research, not a formal publication.",
                "共同构建面向 AI 时代教育与劳动力市场政策的四模块建模框架。本项目作为竞赛研究展示，不视为正式发表成果。",
              )}
            </p>
          </div>
          <Link to="/brief/mcm-2026">{bilingual(language, "View project", "查看项目")} <ArrowRight aria-hidden="true" size={16} /></Link>
        </article>
      </section>
    </main>
  );
}
