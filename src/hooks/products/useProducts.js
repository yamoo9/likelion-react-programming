const apiEndpoint = import.meta.env.VITE_PB_API;

export function useRead() {}

export function useCreate() {}

export function useUpdate() {
  return async function updateProduct(productId, productData) {
    return await fetch(
      `${apiEndpoint}/collections/products/records/${productId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      }
    );
  };
}

export function useDelete() {
  return async function deleteProduct(deleteId) {
    return await fetch(
      `${apiEndpoint}/collections/products/records/${deleteId}`,
      {
        method: 'DELETE',
      }
    );
  };
}
