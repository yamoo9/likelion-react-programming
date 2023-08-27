import pb from '@/api/pocketbase';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import S from './ProductNew.module.css';

function ProductNew() {
  const navigate = useNavigate();

  const formRef = useRef(null);
  const titleRef = useRef(null);
  const colorRef = useRef(null);
  const priceRef = useRef(null);
  const photoRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const titleValue = titleRef.current.value;
    const colorValue = colorRef.current.value;
    const priceValue = Number(priceRef.current.value);
    const photoValue = photoRef.current.files;

    if (!titleValue && !colorValue && !priceValue) {
      toast('이름, 색상, 가격 정보 입력이 필요합니다.', {
        icon: '🚨',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });

      return;
    }

    const formData = new FormData();

    formData.append('title', titleValue);
    formData.append('color', colorValue);
    formData.append('price', priceValue);
    if (photoValue) {
      formData.append('photo', photoValue[0]);
    }

    try {
      await pb.collection('products').create(formData);
      navigate('/products');
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => {
    titleRef.current.value = '';
    colorRef.current.value = '';
    priceRef.current.value = '';
    photoRef.current.value = '';
    setFileImages([]);
  };

  const [fileImages, setFileImages] = useState([]);

  const handleUpload = (e) => {
    const { files } = e.target;
    const fileImages = Array.from(files).map((file) => ({
      image: URL.createObjectURL(file),
      label: file.name,
    }));
    setFileImages(fileImages);
  };

  return (
    <>
      <Helmet>
        <title>Register Product - ReactBird</title>
      </Helmet>
      <div className="container max-w-lg mx-auto">
        <h2 className={S.headline}>상품 등록</h2>
        <form
          encType="multipart/form-data"
          ref={formRef}
          onSubmit={handleRegister}
          onReset={handleReset}
          className="flex flex-col gap-2 items-center"
        >
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="title">이름</label>
            <input
              ref={titleRef}
              type="text"
              name="title"
              id="title"
              placeholder="Slim Fit Ribbed Sleeveless"
              className="
              border border-zinc-300 py-1.5 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2
              dark:bg-black dark:border-zinc-300/40 dark:placeholder:text-zinc-600 dark:text-sky-400 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="color">색상</label>
            <input
              type="text"
              ref={colorRef}
              name="color"
              id="color"
              placeholder="Black"
              className="
              border border-zinc-300 py-1.5 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2
              dark:bg-black dark:border-zinc-300/40 dark:placeholder:text-zinc-600 dark:text-sky-400 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="price">가격</label>
            <input
              type="number"
              ref={priceRef}
              name="price"
              id="price"
              placeholder="49000"
              step="100"
              className="
              border border-zinc-300 py-1.5 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2
              dark:bg-black dark:border-zinc-300/40 dark:placeholder:text-zinc-600 dark:text-sky-400 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="photo">사진</label>
            <div className="relative">
              <input
                type="file"
                accept="*.jpg,*.png,*.jpeg,*.webp,*.avif"
                ref={photoRef}
                name="photo"
                id="photo"
                // multiple
                onChange={handleUpload}
                className="absolute z-10 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex gap-2 overflow-x-auto p-2 w-full h-36 bg-zinc-100 dark:bg-black dark:outline-[1px] dark:outline-double dark:outline-zinc-100/40 dark:rounded">
                {fileImages.map((file) => {
                  return (
                    <img key={file.label} src={file.image} alt={file.label} />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 w-full mt-4 mb-6">
            <button
              type="submit"
              className="
              py-1 px-3.5 border-2 border-zinc-300 hover:border-zinc-400 rounded-full
             dark:text-sky-400 dark:border-sky-400 dark:border-[1px] dark:hover:bg-sky-400 dark:hover:text-sky-50 dark:hover:border-sky-500
            "
            >
              등록
            </button>
            <button
              type="reset"
              className="
              py-1 px-3.5 border-2 border-zinc-200 bg-zinc-200 hover:bg-zinc-300 hover:border-zinc-300 rounded-full
              dark:bg-zinc-400 dark:border-zinc-400
            "
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductNew;
