import useDocumentTitle from "@/hooks/useDocumentTitle";


function Home() {
  useDocumentTitle('홈');

  return (
    <div>
      <h2 className="text-emerald-500">Home</h2>
    </div>
  );
}

export default Home;