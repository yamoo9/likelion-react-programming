import useDocumentTitle from '@/hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('홈');

  return (
    <div className="grid place-content-center bg-hero bg-center bg-cover min-h-[calc(100vh_-_200px)]">
      <h2 className="text-white tracking-widest font-extralight text-4xl uppercase">
        Shop<span className="text-[60px] text-yellow-400">.</span>
      </h2>
    </div>
  );
}

export default Home;
