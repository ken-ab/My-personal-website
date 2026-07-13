import { ArrowRight, ChartNoAxesCombined, House, Medal, UserRoundCog } from "lucide-react";
import olympicModelComparisonRadar from "../../assets/case-studies/olympic-model-comparison-radar.png";

export function OlympicMethodRoute() {
  return (
    <div className="olympic-method-experience">
      <figure className="olympic-technical-map">
        <div className="olympic-map-header">
          <div>
            <span>Paper-faithful technical map</span>
            <strong>Olympic history first, K-means second, then two model-specific routes.</strong>
          </div>
          <span className="olympic-live-indicator"><i aria-hidden="true" /> data flow</span>
        </div>

        <div className="olympic-svg-scroll" role="img" aria-labelledby="olympic-map-title olympic-map-description">
          <svg className="olympic-route-svg" viewBox="0 0 1400 720" xmlns="http://www.w3.org/2000/svg">
            <title id="olympic-map-title">Corrected technical route for the Olympic medal prediction paper</title>
            <desc id="olympic-map-description">
              Olympic history enters K-means clustering, which creates four country groups. The first three medal-winning groups, alpha one through alpha three, enter MPXG, while alpha four, the non-medal-winning group, enters FMPM.
            </desc>
            <defs>
              <pattern id="olympic-paper-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeOpacity="0.07" strokeWidth="1" />
              </pattern>
              <marker id="olympic-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
                <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
              </marker>
              <filter id="olympic-pencil" x="-8%" y="-8%" width="116%" height="116%">
                <feTurbulence baseFrequency="0.012" numOctaves="1" result="noise" seed="7" type="fractalNoise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.65" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>

            <rect className="olympic-svg-grid" height="720" rx="24" width="1400" />

            <g className="olympic-svg-section-tag">
              <rect height="42" rx="21" width="388" x="466" y="42" />
              <text x="490" y="69">ROUTE A - MPXG / MEDAL-WINNING COUNTRIES</text>
            </g>
            <g className="olympic-svg-section-tag is-fmpm">
              <rect height="42" rx="21" width="424" x="466" y="642" />
              <text x="490" y="669">ROUTE B - FMPM / NON-MEDAL-WINNING COUNTRIES</text>
            </g>

            <path className="olympic-svg-connector is-ghost" d="M190 358 H230" />
            <path className="olympic-svg-connector" d="M190 355 H230" markerEnd="url(#olympic-arrow)" />
            <path className="olympic-svg-connector is-ghost" d="M410 342 C443 342 439 177 470 177" />
            <path className="olympic-svg-connector" d="M410 339 C443 339 439 174 470 174" markerEnd="url(#olympic-arrow)" />
            <path className="olympic-svg-connector is-ghost" d="M410 401 C443 401 439 553 470 553" />
            <path className="olympic-svg-connector" d="M410 398 C443 398 439 550 470 550" markerEnd="url(#olympic-arrow)" />

            <Connector x1={610} x2={640} y={174} />
            <Connector x1={780} x2={810} y={174} />
            <Connector x1={1070} x2={1092} y={174} />
            <Connector x1={1216} x2={1240} y={174} />

            <Connector x1={615} x2={645} y={550} />
            <Connector x1={790} x2={820} y={550} />
            <Connector x1={995} x2={1025} y={550} />
            <Connector x1={1190} x2={1220} y={550} />

            <circle className="olympic-flow-dot is-input" r="6">
              <animateMotion dur="2.2s" path="M190 355 H230" repeatCount="indefinite" />
            </circle>
            <circle className="olympic-flow-dot is-top" r="6">
              <animateMotion dur="7.4s" path="M410 339 C443 339 439 174 470 174 H1240" repeatCount="indefinite" />
            </circle>
            <circle className="olympic-flow-dot is-bottom" r="6">
              <animateMotion begin="-3.7s" dur="7.4s" path="M410 398 C443 398 439 550 470 550 H1220" repeatCount="indefinite" />
            </circle>

            <g className="olympic-svg-input" filter="url(#olympic-pencil)">
              <rect height="140" rx="24" width="160" x="30" y="285" />
              <text className="olympic-svg-role" x="52" y="314">INPUT</text>
              <ellipse cx="82" cy="347" rx="31" ry="9" />
              <path d="M51 347v31c0 7 14 10 31 10s31-3 31-10v-31" />
              <path d="M51 363c0 7 14 10 31 10s31-3 31-10" />
              <text className="olympic-svg-title" x="52" y="405">Olympic History</text>
              <text className="olympic-svg-note" x="52" y="421">1896-2024</text>
              <path className="olympic-svg-spark" d="M145 320l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
            </g>

            <g className="olympic-cluster-node" filter="url(#olympic-pencil)">
              <rect height="190" rx="25" width="180" x="230" y="260" />
              <text className="olympic-svg-role" x="252" y="289">K-MEANS</text>
              <text className="olympic-svg-title" x="252" y="312">4 country groups</text>
              <g className="olympic-cluster-row is-medal">
                <circle cx="266" cy="342" r="17" /><circle cx="311" cy="342" r="17" /><circle cx="356" cy="342" r="17" />
                <text x="258" y="347">α1</text><text x="303" y="347">α2</text><text x="348" y="347">α3</text>
              </g>
              <text className="olympic-cluster-caption is-medal" x="252" y="374">prior medal winners</text>
              <g className="olympic-cluster-row is-none">
                <circle cx="266" cy="404" r="17" />
                <text x="258" y="409">α4</text>
              </g>
              <text className="olympic-cluster-caption is-none" x="291" y="409">no prior medal</text>
            </g>

            <g className="olympic-branch-note is-medal">
              <rect height="30" rx="15" width="174" x="426" y="224" />
              <text x="442" y="244">α1-α3: medal-winning</text>
            </g>
            <g className="olympic-branch-note is-none">
              <rect height="30" rx="15" width="161" x="426" y="451" />
              <text x="442" y="471">α4: no prior medal</text>
            </g>

            <SvgNode detail="10 factors -> 3" label={["Factor", "Analysis"]} x={470} y={124} />
            <SvgNode detail="forecast 2028 factors" label={["ARIMA", "time series"]} x={640} y={124} />

            <g className="olympic-model-compare" filter="url(#olympic-pencil)">
              <rect height="140" rx="22" width="260" x="810" y="104" />
              <text className="olympic-svg-role" x="830" y="130">COMPARE 4 MODELS</text>
              <ModelPill label="Random Forest" x={828} y={145} />
              <ModelPill label="BPNN" x={946} y={145} />
              <ModelPill best label="XGBoost" x={828} y={190} />
              <ModelPill label="SVM" x={946} y={190} />
            </g>

            <g className="olympic-model-evidence-callout">
              <path d="M934 244 L952 250 L970 244" />
              <image
                height="247.5"
                href={olympicModelComparisonRadar}
                preserveAspectRatio="xMidYMid meet"
                width="700"
                x="610"
                y="250"
              />
              <rect height="247.5" rx="18" width="700" x="610" y="250" />
            </g>

            <g className="olympic-best-badge" filter="url(#olympic-pencil)">
              <rect height="64" rx="18" width="124" x="1092" y="142" />
              <text className="olympic-svg-role" x="1113" y="163">BEST</text>
              <text className="olympic-svg-title" x="1113" y="188">XGBoost</text>
              <path d="M1195 153l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
            </g>

            <g className="olympic-svg-output is-medal" filter="url(#olympic-pencil)">
              <rect height="130" rx="24" width="130" x="1240" y="109" />
              <text className="olympic-svg-role" x="1262" y="137">OUTPUT</text>
              <text className="olympic-svg-title is-output" x="1262" y="174">2028</text>
              <text className="olympic-svg-note is-strong" x="1262" y="198">medal forecast</text>
              <text className="olympic-svg-note" x="1262" y="217">90% interval</text>
            </g>

            <SvgNode detail="α4: 1896-2024" label={["Participation", "records"]} x={470} y={500} width={145} />
            <SvgNode detail="2028 participants" label={["ARIMA", "forecast"]} x={645} y={500} width={145} />
            <SvgNode detail="Dense 64 -> 32 -> 1" label={["Three-layer", "FCNN"]} x={820} y={500} width={175} />
            <SvgNode detail="model output" label={["First-medal", "probability"]} x={1025} y={500} width={165} />

            <g className="olympic-svg-output is-first-medal" filter="url(#olympic-pencil)">
              <rect height="130" rx="24" width="150" x="1220" y="485" />
              <text className="olympic-svg-role" x="1242" y="513">OUTPUT</text>
              <text className="olympic-svg-title is-output" x="1242" y="550">2028</text>
              <text className="olympic-svg-note is-strong" x="1242" y="574">first-medal</text>
              <text className="olympic-svg-note" x="1242" y="593">probability</text>
            </g>
          </svg>
        </div>
        <figcaption>
          The sequence is fixed: Olympic history enters K-means first; groups α1-α3 follow MPXG, while α4 follows FMPM.
        </figcaption>
      </figure>

      <section className="olympic-findings" aria-labelledby="olympic-findings-title">
        <header className="olympic-findings-header">
          <div>
            <span>SECOND TECHNICAL ROUTE</span>
            <h3 id="olympic-findings-title">Two interesting findings</h3>
          </div>
          <p>Separate effect analyses explain what can shift the predicted medal outcomes.</p>
        </header>

        <div className="olympic-finding-lanes">
          <FindingLane
            description="Gold, silver, and bronze are scored 13, 12, and 10; the host formula is evaluated across the last eight editions."
            icon={House}
            label="FINDING 01"
            result="+74% host-medal gain"
            steps={["Medal scoring", "Host-effect formula", "Last 8 editions"]}
            title="Host Effect"
            tone="host"
          />
          <FindingLane
            description="Coach status, project scope, athlete value, and country-group weight are combined before the 2028 estimate."
            icon={UserRoundCog}
            label="FINDING 02"
            result="+0.2–0.5 medals / athlete"
            steps={["C.E. score", "AWP", "Country weight", "Bayesian regression"]}
            title="Great Coach Effect"
            tone="coach"
          />
        </div>
      </section>
    </div>
  );
}

type SvgNodeProps = {
  detail: string;
  label: string[];
  width?: number;
  x: number;
  y: number;
};

function SvgNode({ detail, label, width = 140, x, y }: SvgNodeProps) {
  return (
    <g className="olympic-svg-node" transform={`translate(${x} ${y})`}>
      <rect height="100" rx="18" width={width} />
      <circle cx="23" cy="24" r="7" />
      <path d={`M38 24h${width - 58}`} />
      <text className="olympic-svg-node-title" x="18" y="50">
        {label.map((line, index) => <tspan key={line} x="18" y={50 + index * 18}>{line}</tspan>)}
      </text>
      <text className="olympic-svg-node-detail" x="18" y="91">{detail}</text>
    </g>
  );
}

type ConnectorProps = {
  x1: number;
  x2: number;
  y: number;
};

function Connector({ x1, x2, y }: ConnectorProps) {
  return (
    <>
      <path className="olympic-svg-connector is-ghost" d={`M${x1} ${y + 3} H${x2}`} />
      <path className="olympic-svg-connector" d={`M${x1} ${y} H${x2}`} markerEnd="url(#olympic-arrow)" />
    </>
  );
}

type ModelPillProps = {
  best?: boolean;
  label: string;
  x: number;
  y: number;
};

function ModelPill({ best = false, label, x, y }: ModelPillProps) {
  return (
    <g className={best ? "olympic-model-pill is-best" : "olympic-model-pill"}>
      <rect height="34" rx="12" width="104" x={x} y={y} />
      <text x={x + 12} y={y + 22}>{label}</text>
    </g>
  );
}

type FindingLaneProps = {
  description: string;
  icon: typeof House;
  label: string;
  result: string;
  steps: string[];
  title: string;
  tone: "coach" | "host";
};

function FindingLane({ description, icon: Icon, label, result, steps, title, tone }: FindingLaneProps) {
  return (
    <article className="olympic-finding-lane" data-finding={tone}>
      <div className="olympic-finding-identity">
        <span className="olympic-finding-icon" aria-hidden="true"><Icon size={27} strokeWidth={1.7} /></span>
        <div>
          <span>{label}</span>
          <h4>{title}</h4>
        </div>
      </div>
      <div className="olympic-finding-flow" aria-label={`${title} analysis flow`}>
        {steps.map((step, index) => (
          <span className="olympic-finding-step-group" key={step}>
            <span className="olympic-finding-step">{step}</span>
            {index < steps.length - 1 ? <ArrowRight aria-hidden="true" size={17} /> : null}
          </span>
        ))}
        <ArrowRight aria-hidden="true" size={17} />
        <strong>{result}</strong>
      </div>
      <div className="olympic-finding-footnote">
        {tone === "host" ? <Medal aria-hidden="true" size={16} /> : <ChartNoAxesCombined aria-hidden="true" size={16} />}
        <p>{description}</p>
      </div>
    </article>
  );
}
