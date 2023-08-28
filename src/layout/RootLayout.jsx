import AnimatedOutlet from '@/components/AnimateOutlet';
import AnimateTransition from '@/components/AnimateTransition';
import SideMenu from '@/components/SideMenu';
import { bool } from 'prop-types';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

function RootLayout({ displaySideMenu = false }) {
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

RootLayout.propTypes = {
  displaySideMenu: bool,
};

export default RootLayout;
