import DefaultTheme from 'vitepress/theme'
import PageStatusBadge from './components/PageStatusBadge.vue'
import PortfolioProgressChart from './components/PortfolioProgressChart.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PageStatusBadge', PageStatusBadge)
    app.component('PortfolioProgressChart', PortfolioProgressChart)
  }
}
