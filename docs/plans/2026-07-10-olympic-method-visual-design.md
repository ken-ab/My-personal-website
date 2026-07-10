# Olympic Method / System Visual Design

## Goal

Prototype a richer Method / System section only for the Olympic medal prediction case study. Keep the other five case-study pages unchanged until the visual direction is approved.

## Corrected paper flow

1. Olympic history from 1896-2024 enters K-means before any model-specific processing.
2. K-means displays four country groups. C1-C3 contain prior medal winners and enter MPXG; C4 contains countries with no prior medals and enters FMPM.
3. MPXG follows factor analysis, ARIMA time-series forecasting, and a four-model comparison: Random Forest, BPNN, XGBoost, and SVM. XGBoost is explicitly marked as the best model before the 2028 medal forecast.
4. FMPM follows C4 participation records, an ARIMA participant forecast, and a three-layer FCNN before the 2028 first-medal probability output.
5. The previous four-stage animated card route is removed. A separate section below the SVG presents two parallel finding lanes: Host Effect and Great Coach Effect.

The SVG uses slightly irregular curved paths, rounded marker-like strokes, and a paper-grid background to feel drawn for this paper rather than generated from a generic card template. The animation is restrained and disabled when the user prefers reduced motion.

## Verification

- Confirm only `/brief/olympic-prediction` receives the new component.
- Check desktop and narrow-screen layouts.
- Confirm SVG labels remain legible and the route preserves Olympic History -> K-means -> split -> 2028 order.
- Confirm Host Effect and Great Coach Effect appear as two separate finding lanes and the old four-stage route is absent.
- Run the production build with the GitHub Pages base path.
