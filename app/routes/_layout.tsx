import { Outlet } from 'react-router';
import { SiteGlobalFooter } from '../components/GlobalFooter';
import { SiteGlobalHeader } from '../components/GlobalHeader';

export default function HomeLayout() {
  return (
    <div className="global-layout">
      <SiteGlobalHeader />
      <main className="global-content">
        <Outlet />
      </main>
      <SiteGlobalFooter />
    </div>
  );
}
