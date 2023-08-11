function ConditionalDisplay({ hidden, isShowReactImage }) {
  return (
    <>
      <dt hidden={hidden}>조건부 표시(conditional display)</dt>
      <dd hidden={hidden}>
        <p>
          표시(display) 여부에 따라 이미지가 화면에서 감춰지거나 표시됩니다.
        </p>
        <picture hidden={!isShowReactImage}>
          <source type="image/avif" srcSet="/react.avif" />
          <source type="image/webp" srcSet="/react.webp" />
          <img src="/react.png" alt="React" height={42} />
        </picture>
      </dd>
    </>
  );
}

export default ConditionalDisplay;
