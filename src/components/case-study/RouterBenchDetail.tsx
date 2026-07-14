import { AlertTriangle, ArrowLeft, CheckCircle2, Gauge, Layers3, Route, TimerReset } from "lucide-react";
import { Link } from "react-router-dom";
import { routerBenchMini } from "../../data/siteStructure";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";

export function RouterBenchDetail() {
  const { language } = useLanguage();
  const localize = (text: { en: string; zh: string }) => bilingual(language, text.en, text.zh);
  const versions = [
    {
      version: "V1",
      title: { en: "Establish routing baselines", zh: "建立路由基线" },
      body: { en: "Compare always-strong, always-cheap, and early task-aware policies across the three task modalities.", zh: "在三类任务上比较 Always Strong、Always Cheap 与早期 Task-Aware 策略。" },
    },
    {
      version: "V2",
      title: { en: "Probe useful task signals", zh: "探索有效任务信号" },
      body: { en: "Test lightweight features and identify signals that are stable enough to carry into held-out evaluation.", zh: "测试轻量特征，并筛选足够稳定、可进入 held-out 评测的任务信号。" },
    },
    {
      version: "V3 · A",
      title: { en: "Held-out evaluation and feature choice", zh: "Held-out 评测与特征选择" },
      body: { en: "Evaluate on the first 150-task batch; this evidence subsequently informs the V4 feature design.", zh: "在首批 150 题上评测；该结果随后参与 V4 的特征方案选择。" },
    },
    {
      version: "V4 · B",
      title: { en: "Final untouched confirmation", zh: "最终未触碰确认" },
      body: { en: "Lock the policy before opening the second 150-task batch, then report the confirmatory outcome and failure cases.", zh: "在查看第二批 150 题前锁定策略，再报告确认结果与失败案例。" },
    },
  ];

  return (
    <main className="page-shell routerbench-detail-page page-enter">
      <section className="routerbench-detail-hero" aria-labelledby="routerbench-detail-title">
        <div>
          <div className="status-pills">
            {routerBenchMini.status.map((status) => <span key={status.en}>{localize(status)}</span>)}
          </div>
          <h1 id="routerbench-detail-title">RouterBench-Mini</h1>
          <p>{localize(routerBenchMini.summary)}</p>
          <div className="routerbench-hero-actions">
            <Link to="/research"><ArrowLeft aria-hidden="true" size={16} /> {bilingual(language, "Back to Research", "返回研究页")}</Link>
          </div>
        </div>
        <aside>
          <span>{bilingual(language, "Technical research report", "技术研究报告")}</span>
          <p>
            {bilingual(
              language,
              "An independent experimental study—not a formal publication and not a claim of a new routing theory.",
              "一项独立实验研究，不是正式发表论文，也不宣称提出新的路由理论。",
            )}
          </p>
        </aside>
      </section>

      <section className="routerbench-question" aria-labelledby="routerbench-question-title">
        <p className="section-eyebrow">{bilingual(language, "Research Question", "研究问题")}</p>
        <h2 id="routerbench-question-title">{localize(routerBenchMini.question)}</h2>
      </section>

      <section className="routerbench-scale-grid" aria-label="Study scale">
        <article><Layers3 aria-hidden="true" size={22} /><strong>600</strong><span>{bilingual(language, "sampled tasks in total", "总体采样任务")}</span></article>
        <article><Route aria-hidden="true" size={22} /><strong>3</strong><span>{bilingual(language, "text · vision · tool use", "文本 · 视觉 · 工具调用")}</span></article>
        <article><Gauge aria-hidden="true" size={22} /><strong>2 × 150</strong><span>{bilingual(language, "non-overlapping held-out batches", "互不重叠的 held-out 批次")}</span></article>
        <article><CheckCircle2 aria-hidden="true" size={22} /><strong>B</strong><span>{bilingual(language, "final untouched confirmation", "最终未触碰确认集")}</span></article>
      </section>

      <section className="routerbench-iteration-section" aria-labelledby="routerbench-iteration-title">
        <header className="phase1-section-heading">
          <div><p className="section-eyebrow">{bilingual(language, "Experimental Sequence", "实验序列")}</p><h2 id="routerbench-iteration-title">{bilingual(language, "What changed—and what stayed frozen", "哪些发生改变，哪些保持冻结")}</h2></div>
        </header>
        <div className="routerbench-version-track">
          {versions.map((version, index) => (
            <article key={version.version}>
              <span>{version.version}</span>
              <h3>{localize(version.title)}</h3>
              <p>{localize(version.body)}</p>
              {index < versions.length - 1 ? <i aria-hidden="true" /> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="routerbench-confirmation" aria-labelledby="routerbench-confirmation-title">
        <div>
          <p className="section-eyebrow">{bilingual(language, "Frozen Baseline Result", "冻结基线结果")}</p>
          <h2 id="routerbench-confirmation-title">{bilingual(language, "Most of the accuracy, with lower resource use.", "以更低资源消耗保留大部分准确率。")}</h2>
          <p>{localize(routerBenchMini.results[0])} {localize(routerBenchMini.results[1])}</p>
        </div>
        <dl>
          <div><dt>−0.67pp</dt><dd>{bilingual(language, "accuracy gap", "准确率差距")}</dd></div>
          <div><dt>−22.5%</dt><dd>{bilingual(language, "calling cost", "调用成本")}</dd></div>
          <div><dt>−26.6%</dt><dd>{bilingual(language, "observed latency", "观测延迟")}</dd></div>
        </dl>
      </section>

      <section className="routerbench-discipline-grid">
        <article>
          <TimerReset aria-hidden="true" size={24} />
          <p className="section-eyebrow">{bilingual(language, "Evaluation Discipline", "评测纪律")}</p>
          <h2>{bilingual(language, "A and B are not two independent replications.", "A 与 B 不是两次独立复现。")}</h2>
          <p>{bilingual(language, "A supported V3 evaluation and later feature selection. B remained untouched until the final V4 confirmation. The pooled 300-task result is used only for frozen baselines unchanged between those versions.", "A 组用于 V3 评测并影响了后续特征选择；B 组在最终 V4 确认前保持未触碰。合并 300 题的结果只用于比较两个版本间未变化的冻结基线。")}</p>
        </article>
        <article>
          <AlertTriangle aria-hidden="true" size={24} />
          <p className="section-eyebrow">{bilingual(language, "Negative Results", "负结果")}</p>
          <h2>{bilingual(language, "More features did not automatically produce better routing.", "更多特征并不会自动带来更好的路由。")}</h2>
          <p>{bilingual(language, "Some added signals failed to generalize, and improvements seen while iterating did not all survive the final confirmation. These failures are retained as part of the report rather than hidden behind the pooled headline.", "部分新增信号未能泛化，迭代阶段观察到的改进也并非都能通过最终确认。这些失败被保留在报告中，而不是被汇总结果掩盖。")}</p>
        </article>
      </section>

      <section className="routerbench-limitations" aria-labelledby="routerbench-limitations-title">
        <header><p className="section-eyebrow">{bilingual(language, "Limitations", "研究限制")}</p><h2 id="routerbench-limitations-title">{bilingual(language, "What this compact benchmark does not establish", "这项小型基准尚不能证明什么")}</h2></header>
        <ol>
          {routerBenchMini.limitations.map((limitation, index) => <li key={limitation.en}><span>{String(index + 1).padStart(2, "0")}</span><p>{localize(limitation)}</p></li>)}
        </ol>
      </section>
    </main>
  );
}
