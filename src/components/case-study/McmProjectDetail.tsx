import { ArrowRight, CheckCircle2, GitBranch, Medal, RefreshCw, Scale, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import type { CompetitionProjectCaseStudy } from "../../data/caseStudies";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";
import { ActionButton } from "../portfolio/ActionButton";
import { McmResearchMap } from "./McmResearchMap";

export function McmProjectDetail({ study }: { study: CompetitionProjectCaseStudy }) {
  const { language } = useLanguage();

  return (
    <>
      <section className="mcm-detail-hero">
        <div>
          <p className="paper-keywords">{study.keywords.join(" · ")}</p>
          <div className="mcm-award-badge"><Medal size={16} /> {bilingual(language, study.award, "Meritorious Winner · M 奖")}</div>
          <h1>{study.title}</h1>
          {language === "zh" ? <p className="translated-title">竞争还是共生：面向 AI 时代教育政策的宏微观演化框架</p> : null}
          <p className="mcm-detail-lead">
            {bilingual(
              language,
              study.subtitle,
              "一个由四个模块组成的宏微观建模框架，将职业 AI 暴露、就业演化、课程重构和院校政策选择连接起来。",
            )}
          </p>
          <div className="mcm-hero-actions">
            <ActionButton external href={study.reportUrl} variant="primary">
              {bilingual(language, "Full Report", "完整报告")}
            </ActionButton>
            <span>{study.period} · {study.problemLabel}</span>
          </div>
        </div>
        <aside className="mcm-hero-note">
          <span>{bilingual(language, "Research question", "研究问题")}</span>
          <p>
            {bilingual(
              language,
              study.oneLineSummary,
              "如何判断 AI 是替代还是增强某项职业，并据此重构课程、搜索政策，再为研究型、职业型和艺术类院校选择稳健策略？",
            )}
          </p>
        </aside>
      </section>

      <section className="mcm-fact-strip" aria-label={bilingual(language, "Project scale", "项目规模")}>
        {study.facts.map((fact, index) => (
          <article key={fact.label}>
            <span>0{index + 1}</span>
            <strong>{fact.value}</strong>
            <h2>{bilingual(language, fact.label, ["职业轨迹", "蒙特卡洛情景", "评价指标", "院校原型"][index])}</h2>
            <p>{bilingual(language, fact.note, ["STEM、技能型和艺术路径", "AI 与政策不确定性", "从就业能力到伦理", "先锋、务实、转型"][index])}</p>
          </article>
        ))}
      </section>

      <section className="mcm-problem-grid">
        <EvidencePanel
          items={language === "zh" ? [
            "任务层 AI 暴露、就业动态、课程设计和多目标政策评价通常彼此割裂。",
            "不同类型高校需要面向不确定性的差异化策略，而不是一套通用的 AI 应对方案。",
          ] : study.problemAddressed}
          title={bilingual(language, "Problem Addressed", "解决的问题")}
        />
        <EvidencePanel
          items={language === "zh" ? [
            "以替代、增强和免疫三种驱动力构建职业 AI 暴露的 Tug-of-War 机制。",
            "在 E-MMCAS 中耦合 Lotka-Volterra 就业动态与课程-技能二部网络。",
            "通过剪枝、嫁接和双层 DMPSO 搜索课程与招生政策轨迹。",
            "将 245 个 Monte Carlo 情景、熵权法和 VIKOR 结合，并按院校结构相似性推广策略。",
          ] : study.innovations}
          title={bilingual(language, "Innovation", "创新点")}
        />
      </section>

      <McmSection
        eyebrow={bilingual(language, "Research atlas", "研究地图")}
        title={bilingual(language, "Four modules, one feedback system", "四个模块，一个闭环系统")}
        body={bilingual(language, "The method moves from occupational evidence to policy ranking, then feeds institutional outcomes back into curriculum adaptation.", "研究从职业证据出发，经课程与就业耦合进入政策排名，再将院校结果反馈到课程调整。")}
      >
        <McmResearchMap />
      </McmSection>

      <McmSection
        eyebrow={bilingual(language, "Result evidence", "结果证据")}
        title={bilingual(language, "Three careers, three futures", "三类职业，三种未来")}
        body={bilingual(language, "Original report figures are preserved: the curves are cropped and compressed, never redrawn or numerically altered.", "这里保留论文原始曲线，只进行裁边和压缩，不重画、不修改数据。")}
      >
        <figure className="mcm-result-figure">
          <img alt={bilingual(language, study.trajectoryVisual.alt, "数据科学家、电工和平面设计师三类职业的就业、供给与人才缺口演化曲线。") } decoding="async" loading="eager" src={study.trajectoryVisual.src} />
          <figcaption>{bilingual(language, study.trajectoryVisual.caption, "报告原始 Figure 3/4：增强、实体免疫与替代效应让三类职业走向不同轨迹。")}</figcaption>
        </figure>
        <div className="mcm-career-grid">
          {study.careerResults.map((result, index) => (
            <article className={`is-${result.tone}`} key={result.title}>
              <span>0{index + 1}</span>
              <h3>{bilingual(language, result.title, ["数据科学家", "电工", "平面设计师"][index])}</h3>
              <strong>{bilingual(language, result.signal, ["增强驱动增长", "稳健均衡", "结构性位移"][index])}</strong>
              <p>{language === "zh" ? [
                "约 0.9 的高增强能力压过语义暴露，需求快速上升并形成更大人才缺口。",
                "约 0.95 的实体免疫形成结构性屏障，使该职业在 AI 波动下保持稳定。",
                "约 0.9 的替代性与约 0.2 的低免疫性共同造成需求下降和分岔风险。",
              ][index] : result.body}</p>
            </article>
          ))}
        </div>
      </McmSection>

      <McmSection
        eyebrow={bilingual(language, "Macro-micro validation", "宏微观验证")}
        title={bilingual(language, "The coupling is the innovation - the ablation proves why", "创新在于耦合，消融说明它为何必要")}
        body={bilingual(language, "Curriculum structure changes the AI-labor coefficient; that coefficient changes employment; the resulting gap drives the next policy update.", "课程结构改变 AI-劳动系数，系数改变就业轨迹，就业缺口再触发下一轮政策更新。")}
      >
        <div className="mcm-coupling-loop" aria-label={bilingual(language, "Macro-micro feedback loop", "宏微观反馈环")}>
          {["Course-skill network", "AI-labor coefficient", "Employment dynamics", "Policy control", "Curriculum rewiring"].map((item, index) => (
            <div key={item}>
              <span>{index + 1}</span>
              <strong>{bilingual(language, item, ["课程-技能网络", "AI-劳动系数", "就业动态", "政策控制", "课程重连"][index])}</strong>
              {index < 4 ? <ArrowRight aria-hidden="true" size={18} /> : <RefreshCw aria-hidden="true" size={18} />}
            </div>
          ))}
        </div>
        <div className="mcm-ablation-grid">
          {study.ablations.map((item, index) => (
            <article className={index === 2 ? "is-complete" : ""} key={item.model}>
              <span>{item.model}</span>
              <h3>{bilingual(language, item.title, ["朴素宏观模型", "被动模型", "完整 E-MMCAS"][index])}</h3>
              <p>{language === "zh" ? [
                "移除课程拓扑后，模型会错误预测实体劳动密集型职业崩溃。",
                "关闭课程适应后，模型持续预测结构性失业，也找不到转型所需的桥接技能。",
                "动态拓扑与 DMPSO 保留免疫职业的稳定性，并帮助高风险路径完成适应性转型。",
              ][index] : item.body}</p>
            </article>
          ))}
        </div>
      </McmSection>

      <McmSection
        eyebrow={bilingual(language, "Decision under uncertainty", "不确定性决策")}
        title={bilingual(language, "245 scenarios become one compromise ranking", "245 个情景汇入一组折衷排名")}
        body={bilingual(language, "Entropy weighting gives the data a voice; VIKOR selects the policy with the best balance rather than the highest score on one criterion.", "熵权法让数据决定指标信息量，VIKOR 选择综合权衡最佳的方案，而不是单项最高分。")}
      >
        <div className="mcm-decision-flow">
          {["245 scenarios", "Six criteria", "Entropy weights", "VIKOR ranking"].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{bilingual(language, item, ["245 个情景", "六项指标", "熵权法", "VIKOR 排名"][index])}</strong>{index < 3 ? <ArrowRight size={17} /> : <Scale size={20} />}</div>
          ))}
        </div>
        <div className="mcm-ranking-layout">
          <div className="mcm-weight-notes">
            <article><ShieldCheck size={20} /><strong>0.25</strong><span>{bilingual(language, "Employability", "就业竞争力")}</span></article>
            <article><CheckCircle2 size={20} /><strong>0.22</strong><span>{bilingual(language, "Ethical compliance", "伦理合规")}</span></article>
          </div>
          <ol className="mcm-ranking-list">
            {study.ranking.map((item) => <li key={item.institution}><span>#{item.rank}</span><strong>{item.institution}</strong><b>{item.score}</b></li>)}
          </ol>
        </div>
      </McmSection>

      <McmSection
        eyebrow={bilingual(language, "Policy transfer", "策略迁移")}
        title={bilingual(language, "Different institutions need different defenses", "不同院校需要不同的韧性策略")}
        body={bilingual(language, "The framework generalizes by structural similarity, then calibrates to technological readiness, labor coupling, and regulation.", "框架先按结构相似性迁移，再根据技术准备度、劳动力耦合和监管条件进行校准。")}
      >
        <div className="mcm-strategy-grid">
          {study.strategies.map((strategy, index) => (
            <article key={strategy.institution}>
              <span>{bilingual(language, strategy.archetype, ["先锋型", "务实型", "转型型"][index])}</span>
              <h3>{strategy.institution}</h3>
              <p>{language === "zh" ? [
                "从低层编码转向系统架构、因果推理、节能开发与 AI 编排。",
                "强化实体技能免疫，并加入 AI 辅助诊断和关键基础设施维护。",
                "从作品生产转向审美判断、策展、伦理与人类作者权。",
              ][index] : strategy.body}</p>
            </article>
          ))}
        </div>
        <aside className="mcm-limitations"><GitBranch size={18} /><div><strong>{bilingual(language, "Model limits", "模型局限")}</strong><p>{language === "zh" ? "模型以美国数据为主，假设任务特征相对稳定，并用硬件驱动的单变量趋势简化 AI 能力演化。" : study.limitations.join(" ")}</p></div></aside>
      </McmSection>
    </>
  );
}

function McmSection({ body, children, eyebrow, title }: { body: string; children: ReactNode; eyebrow: string; title: string }) {
  return <section className="mcm-detail-section"><header><div><p>{eyebrow}</p><h2>{title}</h2></div><span>{body}</span></header>{children}</section>;
}

function EvidencePanel({ items, title }: { items: string[]; title: string }) {
  return <article><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
}
