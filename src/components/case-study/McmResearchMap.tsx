import { BookOpen, BriefcaseBusiness, Building2, Database, Network, Scale, Sparkles, Workflow } from "lucide-react";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

export function McmResearchMap() {
  const { language } = useLanguage();

  return (
    <div className="mcm-research-map" aria-label={bilingual(language, "Four-module MCM research workflow", "美赛四模块研究路线图")}>
      <svg aria-hidden="true" className="mcm-map-wires" preserveAspectRatio="none" viewBox="0 0 1200 650">
        <defs>
          <marker id="mcm-map-arrow" markerHeight="7" markerWidth="8" orient="auto" refX="7" refY="3.5">
            <path d="M0,0 L8,3.5 L0,7 Z" />
          </marker>
        </defs>
        <g markerEnd="url(#mcm-map-arrow)">
          <path className="mcm-map-wire is-flowing" d="M165 320 C190 320 180 160 220 160" />
          <path className="mcm-map-wire is-flowing delay-1" d="M165 320 C190 320 180 490 220 490" />
          <path className="mcm-map-wire is-flowing delay-2" d="M535 195 C575 230 570 420 610 455" />
          <path className="mcm-map-wire is-flowing delay-3" d="M535 490 C570 490 570 180 610 180" />
          <path className="mcm-map-wire is-flowing" d="M925 180 C970 210 970 430 925 470" />
          <path className="mcm-map-wire is-feedback" d="M715 585 C590 640 420 625 365 565" />
        </g>
      </svg>

      <article className="mcm-map-input">
        <span>{bilingual(language, "INPUT", "输入")}</span>
        <Database aria-hidden="true" size={23} />
        <strong>{bilingual(language, "Evidence base", "证据输入")}</strong>
        <p>O*NET · MIT · Lincoln Tech · RISD</p>
      </article>

      <section className="mcm-map-module mcm-map-module-one">
        <header>
          <span>{bilingual(language, "MODULE I", "模块 I")}</span>
          <strong>{bilingual(language, "Career exposure", "职业 AI 暴露")}</strong>
          <BriefcaseBusiness aria-hidden="true" size={20} />
        </header>
        <div className="mcm-map-chip-row">
          <b>Sentence-BERT</b><i />
          <b>Dsub · Daug · Dimm</b><i />
          <b>{bilingual(language, "Tug-of-War", "拉锯机制")}</b>
        </div>
        <p>{bilingual(language, "Three careers, three distinct trajectories", "三类职业形成三条不同演化轨迹")}</p>
      </section>

      <section className="mcm-map-module mcm-map-module-two">
        <header>
          <span>{bilingual(language, "MODULE II", "模块 II")}</span>
          <strong>E-MMCAS</strong>
          <Network aria-hidden="true" size={20} />
        </header>
        <div className="mcm-map-chip-row">
          <b>{bilingual(language, "Course-skill network", "课程-技能网络")}</b><i />
          <b>Lotka-Volterra</b><i />
          <b>DMPSO</b>
        </div>
        <p>{bilingual(language, "Prune, graft, simulate, and optimize policy", "剪枝、嫁接、仿真并搜索政策轨迹")}</p>
      </section>

      <section className="mcm-map-module mcm-map-module-three">
        <header>
          <span>{bilingual(language, "MODULE III", "模块 III")}</span>
          <strong>{bilingual(language, "Policy decision", "政策决策")}</strong>
          <Scale aria-hidden="true" size={20} />
        </header>
        <div className="mcm-map-chip-row">
          <b>{bilingual(language, "245 scenarios", "245 个情景")}</b><i />
          <b>{bilingual(language, "Entropy weights", "熵权法")}</b><i />
          <b>VIKOR</b>
        </div>
        <p>{bilingual(language, "Balance six competing institutional objectives", "平衡六项相互冲突的院校目标")}</p>
      </section>

      <section className="mcm-map-module mcm-map-module-four">
        <header>
          <span>{bilingual(language, "MODULE IV", "模块 IV")}</span>
          <strong>{bilingual(language, "Policy transfer", "策略泛化")}</strong>
          <Building2 aria-hidden="true" size={20} />
        </header>
        <div className="mcm-archetypes">
          <b><Sparkles size={14} /> {bilingual(language, "Pioneer", "先锋型")}</b>
          <b><Workflow size={14} /> {bilingual(language, "Pragmatic", "务实型")}</b>
          <b><BookOpen size={14} /> {bilingual(language, "Transformative", "转型型")}</b>
        </div>
        <p>{bilingual(language, "Structurally generalizable, contextually adaptable", "结构可迁移，情境需校准")}</p>
      </section>

      <span className="mcm-map-feedback-label">{bilingual(language, "outcome feedback", "结果反馈")}</span>
    </div>
  );
}
