import { ArrowRight, Database, LockKeyhole, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import financeAgentArchitecture from "../assets/project-details/finance-agent-system-architecture.png";
import { ZoomableImage } from "../components/media/ZoomableImage";
import { ActionButton } from "../components/portfolio/ActionButton";
import { MiniProgramProjectShowcase } from "../components/portfolio/MiniProgramProjectShowcase";
import { developmentProjects } from "../data/portfolio";
import { bilingual, useLanguage } from "../i18n/LanguageContext";
import "./Engineering.css";

export function Engineering() {
  const { language } = useLanguage();
  const laoWangProject = developmentProjects.find((project) => project.id === "laowang-checkin");
  const laoWangShowcase = laoWangProject?.showcase?.kind === "mini-program"
    ? laoWangProject.showcase
    : undefined;

  return (
    <main className="page-shell engineering-page-v2 page-enter">
      <section className="secondary-page-title" aria-labelledby="engineering-title">
        <h1 id="engineering-title">{bilingual(language, "Engineering Projects", "工程项目")}</h1>
      </section>

      <section className="engineering-featured" aria-labelledby="finance-agent-title">
        <div className="engineering-featured-copy">
          <p className="section-eyebrow">01 · {bilingual(language, "Agent System", "智能体系统")}</p>
          <h2 id="finance-agent-title">{bilingual(language, "MCP-Based A-share Intelligent Analysis System", "基于 MCP 协议的 A 股智能分析系统")}</h2>
          <p>
            {bilingual(
              language,
              "Built on the MCP framework, the system coordinates multiple agents to provide structured references for investment decisions.",
              "该系统基于 MCP 框架构建多 Agent 协作架构，能够为用户提供结构化的投资决策参考。",
            )}
          </p>
          <div className="engineering-featured-actions">
            <ActionButton href="/brief/finance-agent" variant="primary">{bilingual(language, "Technical project overview", "技术项目概览")}</ActionButton>
            <ActionButton external href="https://github.com/ken-ab/Finance-Agent">GitHub</ActionButton>
          </div>
        </div>

        <div className="engineering-agent-evidence is-architecture-preview">
          <ZoomableImage
            alt={bilingual(
              language,
              "Financial Research Multi-Agent System Architecture with MCP tools, four specialist agents, evaluation, and bounded reflection.",
              "金融研究多智能体系统架构图，包含 MCP 工具、四个专业 Agent、评估器与有界反思回路。",
            )}
            className="finance-agent-architecture-preview"
            decoding="async"
            height={1024}
            loading="eager"
            src={financeAgentArchitecture}
            width={1535}
          />
        </div>
      </section>

      <section className="engineering-medium-grid">
        <article className="engineering-medium-card is-energyquant" id="energyquant">
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
          {laoWangShowcase ? (
            <MiniProgramProjectShowcase
              compact
              detailHref="/brief/laowang-checkin"
              projectId="laowang-checkin"
              showcase={laoWangShowcase}
              title={bilingual(language, "Lao Wang Exercise Check-in Mini Program", "老王运动打卡小程序")}
            />
          ) : null}
        </article>
      </section>

      <section className="more-engineering" aria-labelledby="more-engineering-title">
        <header className="phase1-section-heading">
          <div>
            <p className="section-eyebrow" id="more-engineering-title">{bilingual(language, "More Engineering Projects", "更多工程项目")}</p>
          </div>
        </header>
        <article>
          <div>
            <h3>{bilingual(language, "Jingjiang University–Industry Cooperation Platform / Mini Program", "靖江市千帆靖发产学研用平台/小程序")}</h3>
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
