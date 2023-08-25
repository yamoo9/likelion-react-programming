import pb from '@/api/pocketbase';
import { cloneElement, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';

function ProductNew() {
  const titleRef = useRef(null);
  const colorRef = useRef(null);
  const priceRef = useRef(null);
  const photoRef = useRef(null);
  const uploadPhotoRef = useRef(null);

  const handleRegisterProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('color', colorRef.current.value);
    formData.append('price', Number(priceRef.current.value));
    formData.append('photo', photoRef.current.files[0]);

    try {
      await pb.collection('products').create(formData);
      toast.success('상품 등록에 성공했습니다!', {
        position: 'top-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisplayUploadPhoto = (e) => {
    const photoFile = e.target.files[0];
    const photoUrl = URL.createObjectURL(photoFile);
    uploadPhotoRef.current.setAttribute('src', photoUrl);
  };

  return (
    <>
      <Helmet>
        <title>Register Product - ReactBird</title>
      </Helmet>
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-3xl">상품 등록</h2>
        <form encType="multipart/form-data" onSubmit={handleRegisterProduct}>
          <div>
            <label htmlFor="title">이름</label>
            <input
              ref={titleRef}
              type="text"
              name="title"
              id="title"
              placeholder="상품 이름"
            />
          </div>
          <div>
            <label htmlFor="color">색상</label>
            <input
              ref={colorRef}
              type="text"
              name="color"
              id="color"
              placeholder="색상 이름(예: Black)"
            />
          </div>
          <div>
            <label htmlFor="price">가격</label>
            <input
              ref={priceRef}
              type="text"
              name="price"
              id="price"
              placeholder="가격 (예: 98000)"
            />
          </div>
          <div className="relative flex flex-col gap-2 my-4">
            <label htmlFor="photo">사진</label>
            <input
              ref={photoRef}
              onChange={handleDisplayUploadPhoto}
              className="cursor-pointer absolute w-full h-full opacity-0"
              type="file"
              name="photo"
              id="photo"
              accept="*.jpg,*.png,*.webp,*.avif"
              multiple
            />
            <div className="h-[140px] bg-slate-200/80 p-2">
              <img
                ref={uploadPhotoRef}
                className="h-[124px] border border-slate-400/50"
                src="https://placehold.co/84x124?text=PHOTO"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button type="submit">등록</button>
            <button type="reset">취소</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductNew;
