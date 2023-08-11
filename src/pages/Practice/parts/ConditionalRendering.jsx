import reactImagePath from '@/assets/react.svg';
import viteImagePath from '@/assets/vite.svg';

const status = 'isSuccess';

function ConditionalRendering({ hidden, imageType }) {
  switch (status) {
    case 'isPending':
      return <p>대기 중입니다.</p>;
    case 'isLoading':
      return <p>로딩 중입니다.</p>;
    case 'isError':
      return <p>오류 발생했어요.</p>;
    default:
  }

  const imageComponent =
    imageType === 'vite' ? (
      <img src={viteImagePath} alt="비트" />
    ) : (
      <img src={reactImagePath} alt="리액트" />
    );

  console.log(imageComponent);

  const isReactImage = imageType === 'react';
  const imageLabel = isReactImage ? 'React' : 'Vite';

  const isShowImage = true;
  const isHideImageLabel = false;

  return (
    <div hidden={hidden}>
      <dt>조건부 렌더링(conditional rendering)</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          {isShowImage && (
            <img
              src={isReactImage ? '/react.avif' : '/vite.svg'}
              alt={isReactImage ? '리액트' : '비트'}
            />
          )}
          {isHideImageLabel || imageLabel}
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className="conditionalRendering">
          {renderRandomImageOrSpinner()}
        </div>
      </dd>
    </div>
  );
}

function renderRandomImageOrSpinner() {
  return Math.random() >= 0.5 ? (
    <img className="spinner" src="/spinner.svg" alt="로딩 중..." />
  ) : (
    <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
  );
}

export default ConditionalRendering;