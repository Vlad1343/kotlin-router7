import type { MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import '@rescui/typography/lib/font-jb-sans-auto.css';

import { HeaderSection } from '../components/HeaderSection';
import { LatestFromKotlinSection } from '../components/LatestFromKotlinSection';
import { WhyKotlinSection } from '../components/WhyKotlinSection';
import { UsageSection } from '../components/UsageSection';
import { StartSection } from '../components/StartSection';
import type { Route } from './+types/_index';

const TAB_KEYS = new Set(['concise', 'safe', 'expressive', 'interoperable', 'multiplatform']);

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const tabParam = url.searchParams.get('tab')?.toLowerCase() ?? 'concise';
  const sortParam = url.searchParams.get('sort') === 'name' ? 'name' : 'default';
  return {
    tab: TAB_KEYS.has(tabParam) ? tabParam : 'concise',
    sort: sortParam as 'default' | 'name',
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Kotlin Programming Language" },
    { property: "og:title", content: "Kotlin Programming Language" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://kotlinlang.org/" },
    { property: "og:image", content: "/assets/images/open-graph/general.png" },
    { property: "og:site_name", content: "Kotlin" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@kotlin" },
    { name: "twitter:title", content: "Kotlin Programming Language" },
    { name: "twitter:image:src", content: "/assets/images/twitter/general.png" },
  ];
};

function OverviewPageContent({ tab, sort }: { tab: string; sort: 'default' | 'name' }) {
  return (
    <div className="overview-page">
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection tab={tab} sort={sort} />
      <UsageSection tab={tab} sort={sort} />
      <StartSection />
    </div>
  );
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return <OverviewPageContent tab={data.tab} sort={data.sort} />;
}
