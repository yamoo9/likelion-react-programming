import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";

function RootLayout(props) {
  return (
    <>
      <HeaderBar />
      <main>{props.children}</main>
      <FooterBar />
    </>
  );
}

export default RootLayout;
