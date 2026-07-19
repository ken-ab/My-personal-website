import { ArrowRight, Database, LockKeyhole, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import energyQuantNewspaperComic from "../assets/project-details/energyquant-newspaper-comic.png";
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
              "Built on MCP, the system coordinates specialist agents and produces structured reports for investment analysis.",
              "该系统基于 MCP 框架构建多 Agent 协作架构，能够为用户提供结构化的投资决策参考。",
            )}
          </p>
          <div className="engineering-featured-actions">
            <ActionButton href="/brief/finance-agent" variant="primary">{bilingual(language, "Technical project overview", "技术项目概览")}</ActionButton>
            <ActionButton external href="https://github.com/ken-ab/Finance-Agent">GitHub</ActionButton>
            <ActionButton href="/brief/finance-agent/result">{bilingual(language, "Result Demo", "结果演示")}</ActionButton>
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
          <div className="energyquant-preview-copy">
            <p>
              {bilingual(
                language,
                "The public repository contains the AI-assisted material-classification module from a larger enterprise system. Users can upload individual files, folders, or archives for batch classification.",
                "公开仓库将完整企业系统中的 AI 辅助材料分类链路单独提取出来：创建任务后，可上传单文件、文件夹或压缩包，并统一进入批量分类流程。",
              )}
            </p>
            <p>
              {bilingual(
                language,
                "AI classification does not determine the final result. Unrecognized or uncertain files are sent for human review, after which users can preview, download, delete, or archive them.",
                "自动分类并非最终判断：未识别或不确定的结果会进入人工确认，确认后可继续完成文件预览、下载、删除与归档。",
              )}
            </p>
          </div>
          <figure className="energyquant-preview-visual">
            <ZoomableImage
              alt={bilingual(
                language,
                "EnergyQuant AI file-classification workflow from upload through human confirmation and archive.",
                "EnergyQuant AI 文件分类流程：从材料上传、AI 分类到人工确认与文件归档。",
              )}
              decoding="async"
              loading="lazy"
              src={energyQuantNewspaperComic}
            />
          </figure>
          <div className="engineering-capability-row">
            <span><Database aria-hidden="true" size={16} /> {bilingual(language, "Files · folders · archives", "文件 · 文件夹 · 压缩包")}</span>
            <span><Workflow aria-hidden="true" size={16} /> {bilingual(language, "Batch AI classification", "批量 AI 分类")}</span>
            <span><LockKeyhole aria-hidden="true" size={16} /> {bilingual(language, "Human confirmation · archive", "人工确认 · 归档")}</span>
          </div>
          <div className="energyquant-preview-action">
            <ActionButton external href="https://github.com/ken-ab/Energyquant" variant="primary">GitHub</ActionButton>
          </div>
        </article>

        <article className="engineering-medium-card is-laowang">
          <p className="engineering-medium-kicker">03 · {bilingual(language, "Mini Program Development", "小程序开发")}</p>
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
                "A deployed university–industry collaboration platform with a mini program, administration dashboard, project and policy access, and governed batch imports.",
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
