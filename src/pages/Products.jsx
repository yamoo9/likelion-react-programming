import useDocumentTitle from "@/hooks/useDocumentTitle";


function Products() {
  
  useDocumentTitle('제품 목록');

  return (
    <div>
      <h1 className="text-indigo-950">Products</h1>
    </div>
  );
}

export default Products;
