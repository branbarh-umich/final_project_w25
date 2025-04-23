import { Footer, LargeText, Typeable } from "@/(components)/components";

export default function Home() {
  return (
    <>
      <main
        className="content"
        id="main"
      >
        <LargeText
          spacer={true}
          letterSpacing={true}
          textFull="BRANDON"
          textSlim="BRAN\n  DON"
        />
        <Typeable
          align="right"
          text="SOFTWARE ENGINEER"
        />
      </main>
      <Footer toRenderSocials={true} />
    </>
  );
}
