import Logo from '@/components/Logo';

function Home() {
  return (
    <>
      <h2>홈 페이지</h2>

      <div hidden className="demoLogos">
        <Logo />
        <Logo color="blue" size={12} />
        <Logo color="sky" />
        <Logo color="rose" size={108} />
      </div>
    </>
  );
}

export default Home;
