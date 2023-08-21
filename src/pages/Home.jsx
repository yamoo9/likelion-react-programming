import useDocumentTitle from "@/hooks/useDocumentTitle";

function Home() {
  useDocumentTitle('홈');

  return (
    <div>
      <h2 className="text-indigo-950">Home</h2>
    </div>
  );
}

export default Home;