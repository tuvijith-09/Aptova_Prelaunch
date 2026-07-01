/**
 * financial-charts.js — Aptova
 * Renders 3 charts inside the Financial Reality section of an opportunity detail page.
 * Depends on Chart.js loaded via CDN before this script.
 *
 * Usage:
 *   renderFinancialCharts(opportunityData.sections.financial_condition[0].data)
 *
 * Expects the enriched JSON (upload_ready_final_enriched.json) with _range fields.
 */

(function () {

  // ── Colour tokens matching index.css ──────────────────────────────────────
  const PRIMARY   = "#059669";
  const PRIMARY2  = "#34A853";
  const LIGHT     = "#D1FAE5";
  const BORDER    = "#E2E8F0";
  const INK       = "#0F172A";
  const MUTED     = "#64748B";
  const SOFT      = "#334155";

  // ── Helpers ───────────────────────────────────────────────────────────────
  function avg(range) {
    if (!range || range.length < 2) return 0;
    return Math.round((range[0] + range[1]) / 2);
  }

  function formatRupee(n) {
    if (n >= 100000) return "₹" + (n / 100000).toFixed(1) + "L";
    if (n >= 1000)   return "₹" + (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k";
    return "₹" + n;
  }

  // ── Shared Chart.js defaults ──────────────────────────────────────────────
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.color       = MUTED;

  // ── Chart 1: Realistic Income Timeline (Area-style using line chart) ──────
  function renderIncomeTimeline(data, canvasId) {
    const timeline = (data.income_timeline || []).filter(t => t.profit_range);
    if (timeline.length === 0) return;

    const labels  = timeline.map(t => t.period);
    const minVals = timeline.map(t => t.profit_range[0]);
    const maxVals = timeline.map(t => t.profit_range[1]);

    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Upper range",
            data: maxVals,
            borderColor: PRIMARY,
            backgroundColor: "rgba(5,150,105,0.15)",
            fill: "+1",
            tension: 0.4,
            pointBackgroundColor: PRIMARY,
            pointRadius: 5,
          },
          {
            label: "Lower range",
            data: minVals,
            borderColor: PRIMARY2,
            backgroundColor: "rgba(52,168,83,0.08)",
            fill: false,
            tension: 0.4,
            pointBackgroundColor: PRIMARY2,
            pointRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: { color: SOFT, font: { size: 12, weight: "500" } },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${formatRupee(ctx.parsed.y)}/month`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: BORDER },
            ticks: { color: MUTED, font: { size: 12 } },
          },
          y: {
            grid: { color: BORDER },
            ticks: {
              color: MUTED,
              font: { size: 12 },
              callback: (v) => formatRupee(v),
            },
            beginAtZero: true,
          },
        },
      },
    });
  }

  // ── Chart 2: Investment Breakdown (horizontal bar) ────────────────────────
  function renderInvestmentBreakdown(data, canvasId) {
    const items = (data.investment?.items_numeric || []);
    if (items.length === 0) return;

    const labels = items.map(i => i.label);
    const values = items.map(i => avg(i.range));

    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "Avg. Investment (₹)",
          data: values,
          backgroundColor: items.map((_, i) =>
            i === 0 ? PRIMARY : `rgba(5,150,105,${0.8 - i * 0.12})`
          ),
          borderRadius: 6,
          borderSkipped: false,
        }],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `Avg: ${formatRupee(ctx.parsed.x)}`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: BORDER },
            ticks: {
              color: MUTED,
              font: { size: 12 },
              callback: (v) => formatRupee(v),
            },
            beginAtZero: true,
          },
          y: {
            grid: { display: false },
            ticks: { color: SOFT, font: { size: 12 } },
          },
        },
      },
    });
  }

  // ── Chart 3: Monthly Operating Costs (horizontal bar) ────────────────────
  function renderMonthlyCosts(data, canvasId) {
    const items = (data.monthly_costs?.items_numeric || []);
    if (items.length === 0) return;

    const labels = items.map(i => i.label);
    const values = items.map(i => avg(i.range));

    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "Avg. Monthly Cost (₹)",
          data: values,
          backgroundColor: items.map((_, i) =>
            `rgba(52,168,83,${0.9 - i * 0.15})`
          ),
          borderRadius: 6,
          borderSkipped: false,
        }],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `Avg: ${formatRupee(ctx.parsed.x)}/month`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: BORDER },
            ticks: {
              color: MUTED,
              font: { size: 12 },
              callback: (v) => formatRupee(v),
            },
            beginAtZero: true,
          },
          y: {
            grid: { display: false },
            ticks: { color: SOFT, font: { size: 12 } },
          },
        },
      },
    });
  }

  // ── Main function you call from the page ──────────────────────────────────
  /**
   * @param {Object} data  — financial_condition[0].data from the enriched JSON
   */
  window.renderFinancialCharts = function (data) {
    if (!data) return;
    renderIncomeTimeline(data,       "chart-income-timeline");
    renderInvestmentBreakdown(data,  "chart-investment");
    renderMonthlyCosts(data,         "chart-monthly-costs");
  };

})();