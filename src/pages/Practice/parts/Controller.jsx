import GoToButton from "./GoToButton";

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      <GoToButton direction="down" label="스크롤 다운" />
      <GoToButton direction="up" label="스크롤 업" />
    </div>
  );
}

export default Controller;
