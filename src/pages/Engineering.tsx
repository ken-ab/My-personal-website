import { ArrowRight, CheckCircle2, Code2, Database, LockKeyhole, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { ActionButton } from "../components/portfolio/ActionButton";
import { bilingual, useLanguage } from "../i18n/LanguageContext";

export function Engineering() {
  const { language } = useLanguage();

  return (
    <main className="page-shell engineering-page-v2 page-enter">
      <section className="phase1-page-hero tone-systems" aria-labelledby="engineering-title">
        <p className="section-eyebrow">{bilingual(language, "Engineering", "工程项目")}</p>
        <div>
          <h1 id="engineering-title">{bilingual(language, "Working systems, presented as engineering evidence.", "以真实系统证明工程交付能力。")}</h1>
          <p>
            {bilingual(
              language,
              "These projects demonstrate system design, implementation, deployment, and operational delivery. They complement my research experience without being presented as direct research transfer.",
              "这些项目展示系统设计、实现、部署与运营交付能力，是科研经历的补充，但不被包装为论文成果的直接转化。",
            )}
          </p>
        </div>
      </section>

      <section className="engineering-featured" aria-labelledby="finance-agent-title">
        <div className="engineering-featured-copy">
          <p className="section-eyebrow">01 · {bilingual(language, "Agent System", "智能体系统")}</p>
          <h2 id="finance-agent-title">Finance-Agent: A Multi-Agent System for A-share Investment Research</h2>
          {language === "zh" ? <p className="translated-title">Finance-Agent：多智能体 A 股研究与分析系统</p> : null}
          <p>
            {bilingual(
              language,
              "A LangGraph workflow that keeps fundamental, technical, valuation, and news analysis as parallel, traceable branches, then checks the merged Markdown report through evaluation and one bounded reflection round.",
              "以 LangGraph 将基本面、技术面、估值和新闻分析保留为并行且可追踪的分支，再通过评估与一次有界反思检查汇总后的 Markdown 报告。",
            )}
          </p>
          <div className="engineering-featured-actions">
            <ActionButton href="/brief/finance-agent" variant="primary">{bilingual(language, "Technical project brief", "技术项目简报")}</ActionButton>
            <ActionButton external href="https://github.com/ken-ab/Finance-Agent">GitHub</ActionButton>
          </div>
        </div>

        <div className="engineering-agent-evidence" aria-label="Finance-Agent verified architecture facts">
          <div className="agent-flow-mini">
            <span>{bilingual(language, "Query", "查询")}</span>
            <ArrowRight aria-hidden="true" size={16} />
            <span>MCP</span>
            <ArrowRight aria-hidden="true" size={16} />
            <span>{bilingual(language, "4 Agents", "4 个 Agent")}</span>
            <ArrowRight aria-hidden="true" size={16} />
            <span>{bilingual(language, "Report", "报告")}</span>
          </div>
          <dl>
            <div><dt>4</dt><dd>{bilingual(language, "specialist agents", "专业分析 Agent")}</dd></div>
            <div><dt>8</dt><dd>{bilingual(language, "MCP tool families", "MCP 工具族")}</dd></div>
            <div><dt>1</dt><dd>{bilingual(language, "bounded reflection", "有界反思轮次")}</dd></div>
          </dl>
          <p><CheckCircle2 aria-hidden="true" size={17} /> {bilingual(language, "Source-visible architecture; no investment-return claims.", "架构可由代码核验，不宣称投资收益。")}</p>
        </div>
      </section>

      <section className="engineering-medium-grid">
        <article className="engineering-medium-card" id="energyquant">
          <header>
            <span>02 · {bilingual(language, "Enterprise Workflow", "企业工作流")}</span>
            <LockKeyhole aria-hidden="true" size={23} />
          </header>
          <h2>EnergyQuant</h2>
          <p>
            {bilingual(
              language,
              "An enterprise pre-investment workflow covering AI-assisted material classification, RBAC, three parallel review tracks, file handling, human confirmation, Docker delivery, and private offline deployment.",
              "企业投前工作流，覆盖 AI 辅助材料分类、RBAC、三条并行审查链路、文件处理、人工确认、Docker 交付与私有化离线部署。",
            )}
          </p>
          <div className="engineering-capability-row">
            <span><Database aria-hidden="true" size={16} /> {bilingual(language, "AI classification", "AI 材料分类")}</span>
            <span><Workflow aria-hidden="true" size={16} /> {bilingual(language, "RBAC + workflows", "RBAC + 工作流")}</span>
            <span><LockKeyhole aria-hidden="true" size={16} /> {bilingual(language, "Private deployment", "私有化部署")}</span>
          </div>
          <aside>
            {bilingual(
              language,
              "Public description is deliberately limited and anonymized: no client identity, accounts, server addresses, business files, deployment packages, or unauthorized screenshots are exposed.",
              "公开说明经过有意限制与脱敏：不展示客户身份、账号、服务器地址、业务文件、部署包或未经授权的截图。",
            )}
          </aside>
        </article>

        <article className="engineering-medium-card is-laowang">
          <header>
            <span>03 · {bilingual(language, "Deployed Product", "已上线产品")}</span>
            <Code2 aria-hidden="true" size={23} />
          </header>
          <h2>{bilingual(language, "Lao Wang Exercise Check-in Mini Program", "老王运动打卡小程序")}</h2>
          <p>
            {bilingual(
              language,
              "A deployed WeChat mini program and backend for exercise, multi-mode health check-ins, community sharing, and an AI assistant.",
              "覆盖运动、多项健康打卡、社区分享与 AI 助手的微信小程序及后端系统，已上线运行。",
            )}
          </p>
          <dl className="laowang-objective-metrics">
            <div><dt>872</dt><dd>{bilingual(language, "cumulative users", "累计用户")}</dd></div>
            <div><dt>127</dt><dd>{bilingual(language, "avg. daily visitors", "日均访问人数")}</dd></div>
            <div><dt>252</dt><dd>{bilingual(language, "avg. daily opens", "日均打开次数")}</dd></div>
          </dl>
          <Link className="engineering-text-link" to="/brief/laowang-checkin">{bilingual(language, "View deployed product", "查看已上线产品")} <ArrowRight aria-hidden="true" size={16} /></Link>
        </article>
      </section>

      <section className="more-engineering" aria-labelledby="more-engineering-title">
        <header className="phase1-section-heading">
          <div>
            <p className="section-eyebrow">{bilingual(language, "More Engineering Projects", "更多工程项目")}</p>
            <h2 id="more-engineering-title">{bilingual(language, "Additional delivery evidence.", "补充交付证据。")}</h2>
          </div>
        </header>
        <article>
          <div>
            <span>{bilingual(language, "Mini Program · Admin System · Data Governance", "小程序 · 管理后台 · 数据治理")}</span>
            <h3>{bilingual(language, "Jingjiang University–Industry Cooperation Platform", "靖江市千帆靖发产学研用平台")}</h3>
            <p>
              {bilingual(
                language,
                "A delivered cooperation catalogue with a mini program, administration dashboard, project and policy access, and governed batch import.",
                "已交付的产学研合作目录，包含小程序、管理后台、项目与政策访问，以及可治理的批量导入。",
              )}
            </p>
          </div>
          <dl><div><dt>18</dt><dd>{bilingual(language, "provinces", "省份")}</dd></div><div><dt>79</dt><dd>{bilingual(language, "institutions", "高校院所")}</dd></div><div><dt>201</dt><dd>{bilingual(language, "projects", "公开项目")}</dd></div></dl>
          <Link to="/brief/jingjiang-platform" aria-label={bilingual(language, "View Jingjiang detail", "查看靖江项目详情")}><ArrowRight aria-hidden="true" size={18} /></Link>
        </article>
      </section>
    </main>
  );
}
