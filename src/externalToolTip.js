export function externalTooltip(context) {
  let tooltipEl = document.getElementById('chartjs-tooltip');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'chartjs-tooltip';
    tooltipEl.style.backgroundColor = '#4B40EE';
    tooltipEl.style.color = '#fff';
    tooltipEl.style.borderRadius = '4px';
    tooltipEl.style.padding = '8px';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.transition = 'opacity 0.1s ease';
    document.body.appendChild(tooltipEl);
  }

  const tooltipModel = context.tooltip;
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  if (tooltipModel.body) {
    console.log('tooltipModel.body: ', tooltipModel.body);
    const bodyLines = tooltipModel.body.map(bodyItem => bodyItem.lines);
    console.log('bodyLines: ', bodyLines);
    const amount = bodyLines[0].map(item => item.replace(/[^\d.,]/g, '').trim());
    console.log('amount: ', amount);
    tooltipEl.innerHTML = amount;
  }

  const position = context.chart.canvas.getBoundingClientRect();

  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 10 + 'px';
  tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
  tooltipEl.style.transform = 'translate(0, -50%)';
}