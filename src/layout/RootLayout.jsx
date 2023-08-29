import AnimatedOutlet from '@/components/AnimateOutlet';
import AnimateTransition from '@/components/AnimateTransition';
import SideMenu from '@/components/SideMenu';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';
import { useSideMenuStore } from '@/store/sideMenu';

function RootLayout() {
  const displaySideMenu = useSideMenuStore((state) => state.displaySideMenu);

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBar />
      <main className="flex gap-4 p-5 flex-1 dark:bg-black">
        {displaySideMenu && <SideMenu />}
        <div className="flex-1">
          <AnimateTransition>
            <AnimatedOutlet />
          </AnimateTransition>
        </div>
      </main>
      <FooterBar />
    </div>
  );
}

export default RootLayout;
