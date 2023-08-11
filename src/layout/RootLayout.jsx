import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";

function RootLayout(props) {
  return (
    <>
      {/* <div className="overlay"></div> */}
      <HeaderBar />
      <main>{props.children}</main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
