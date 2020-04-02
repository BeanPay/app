import SVG from 'react-inlinesvg'
import exampleSVG from './example.svg'
import BasePageLayout from '../../layouts/base-page-layout'
import DashboardPanel from '../../design-system/dashboard-panel'

export default function Home() {
  return (
    <BasePageLayout pageSlug="home">
      <DashboardPanel title="October" minRowWeight={33}>
        <SVG src={exampleSVG} style={{width: "100%", minWidth: "200px"}}/>
      </DashboardPanel>

      <DashboardPanel title="November" minRowWeight={33}>
        <SVG src={exampleSVG} style={{width: "100%", minWidth: "200px"}}/>
      </DashboardPanel>

      <DashboardPanel title="December" minRowWeight={33}>
        <SVG src={exampleSVG} style={{width: "100%", minWidth: "200px"}}/>
      </DashboardPanel>

      <DashboardPanel title="Welcome Home" minRowWeight={100}>
        <h1>We missed you son.</h1>
      </DashboardPanel>

      <DashboardPanel title="Welcome Home" minRowWeight={50}>
        <h1>I missed you too dad.</h1>
      </DashboardPanel>

      <DashboardPanel title="Welcome Home" minRowWeight={50}>
        <h1>I missed you too dad.</h1>
      </DashboardPanel>

      <DashboardPanel title="Welcome Home" minRowWeight={25}>
        <h1>There's lasagna in the freezer.</h1>
      </DashboardPanel>

      <DashboardPanel title="Welcome Home" minRowWeight={25}>
        <h1>There's lasagna in the freezer.</h1>
      </DashboardPanel>

      <DashboardPanel title="Welcome Home" minRowWeight={25}>
        <h1>There's lasagna in the freezer.</h1>
      </DashboardPanel>

      <DashboardPanel title="Welcome Home" minRowWeight={25}>
        <h1>There's lasagna in the freezer.</h1>
      </DashboardPanel>
    </BasePageLayout>
  );
}
