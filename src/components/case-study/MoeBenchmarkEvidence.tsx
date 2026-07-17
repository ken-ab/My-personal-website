import benchmarkFigureOne from "../../assets/case-studies/moe-benchmark-figure-1.png";
import benchmarkFigureTwo from "../../assets/case-studies/moe-benchmark-figure-2.png";
import type { LocalizedText } from "../../i18n/LanguageContext";
import { useLanguage } from "../../i18n/LanguageContext";
import { ZoomableImage } from "../media/ZoomableImage";

const benchmarkFigures: Array<{
  alt: LocalizedText;
  caption: LocalizedText;
  src: string;
}> = [
  {
    src: benchmarkFigureOne,
    alt: {
      en: "Grouped bar chart comparing LLaMA2, Mistral 7B, Mixtral 8×7B, DeepSeek-V2, DeepSeek-V3, and DBRX on MMLU, HellaSwag, WinoGrande, and PIQA.",
      zh: "分组柱状图，对比 LLaMA2、Mistral 7B、Mixtral 8×7B、DeepSeek-V2、DeepSeek-V3 和 DBRX 在 MMLU、HellaSwag、WinoGrande 与 PIQA 上的准确率。",
    },
    caption: {
      en: "Figure 01 · MMLU / HellaSwag / WinoGrande / PIQA",
      zh: "图 01 · MMLU / HellaSwag / WinoGrande / PIQA",
    },
  },
  {
    src: benchmarkFigureTwo,
    alt: {
      en: "Grouped bar chart comparing LLaMA2, Mistral 7B, Mixtral 8×7B, DeepSeek-V2, DeepSeek-V3, and DBRX on HumanEval, MBPP, MATH, and GSM8K.",
      zh: "分组柱状图，对比 LLaMA2、Mistral 7B、Mixtral 8×7B、DeepSeek-V2、DeepSeek-V3 和 DBRX 在 HumanEval、MBPP、MATH 与 GSM8K 上的准确率。",
    },
    caption: {
      en: "Figure 02 · HumanEval / MBPP / MATH / GSM8K",
      zh: "图 02 · HumanEval / MBPP / MATH / GSM8K",
    },
  },
];

const benchmarkScope: LocalizedText = {
  en: "Benchmark scope — The two figures cover eight benchmarks: MMLU for aggregate knowledge and reasoning; HellaSwag, WinoGrande, and PIQA for commonsense reasoning; HumanEval and MBPP for code generation; and MATH and GSM8K for mathematical reasoning. They compare LLaMA2 and Mistral 7B with Mixtral 8×7B, DeepSeek-V2, DeepSeek-V3, and DBRX.",
  zh: "基准范围——两张图共覆盖八项基准：MMLU 用于综合知识与推理，HellaSwag、WinoGrande 和 PIQA 用于常识推理，HumanEval 与 MBPP 用于代码生成，MATH 与 GSM8K 用于数学推理；比较对象包括 LLaMA2、Mistral 7B、Mixtral 8×7B、DeepSeek-V2、DeepSeek-V3 和 DBRX。",
};

const benchmarkResult: LocalizedText = {
  en: "Result summary — DeepSeek-V2, DeepSeek-V3, and DBRX occupy the leading range across the four general and commonsense benchmarks. The advantage becomes clearer on code and mathematics: DeepSeek-V3 and DBRX post the strongest or near-strongest results on HumanEval, MBPP, MATH, and GSM8K, supporting the review's conclusion that fine-grained experts, shared-expert isolation, and sparse activation can combine strong capability with lower active computation.",
  zh: "结果概括——DeepSeek-V2、DeepSeek-V3 和 DBRX 在四项综合与常识基准中整体位于较高区间；在代码和数学任务上优势更明显，DeepSeek-V3 与 DBRX 在 HumanEval、MBPP、MATH 和 GSM8K 上取得最高或接近最高的结果。这支持了本文的综述结论：细粒度专家、共享专家隔离与稀疏激活能够在降低激活计算的同时保持较强能力。",
};

export const moeReviewContributions: LocalizedText[] = [
  {
    en: "Places seven representative MoE systems in one architectural comparison spanning routing, expert granularity, active parameters, parallel training, and system optimization.",
    zh: "将七类代表性 MoE 系统纳入统一架构比较，覆盖路由方式、专家粒度、激活参数规模、并行训练与系统级优化。",
  },
  {
    en: "Synthesizes five benchmark dimensions against LLaMA, Mistral, Qwen, GPT, and Claude baselines; the collected results show competitive general reasoning and knowledge performance, with stronger MoE patterns in code and mathematics.",
    zh: "综合整理五类基准并与 LLaMA、Mistral、Qwen、GPT 和 Claude 等模型比较；汇总结果显示 MoE 在通用推理与知识任务上保持竞争力，并在代码和数学任务中呈现更突出表现。",
  },
  {
    en: "Connects sparse activation, pyramid-residual organization, fine-grained experts, and shared-expert isolation to the performance–efficiency trade-off; selected reviewed comparisons report roughly 50% lower inference computation at comparable performance.",
    zh: "将稀疏激活、金字塔残差、细粒度专家与共享专家隔离归纳为主要效率机制；部分被综述的比较实验报告，在性能相近时推理计算量可降低至少约 50%。",
  },
];

export function MoeBenchmarkEvidence() {
  const { language } = useLanguage();

  return (
    <>
      <div className="moe-benchmark-figures">
        {benchmarkFigures.map((figure) => (
          <figure key={figure.src}>
            <ZoomableImage
              alt={figure.alt[language]}
              caption={figure.caption[language]}
              decoding="async"
              loading="lazy"
              src={figure.src}
            />
            <figcaption>{figure.caption[language]}</figcaption>
          </figure>
        ))}
      </div>
      <div className="moe-benchmark-summary">
        <p>{benchmarkScope[language]}</p>
        <p>{benchmarkResult[language]}</p>
      </div>
    </>
  );
}
