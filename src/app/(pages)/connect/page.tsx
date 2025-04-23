// [TODO] use the @/... syntax everywhere AND make sure to use camel case in ALL css class names

import { getConnectSocials } from "@/(meta)/meta";
import { Footer, LargeText, Typeable } from "@/(components)/components";

import styles from "@/styles/connect.module.css";

import Image from "next/image";

// Config import:
import config from "../../../../next.config.mjs";

export default function Connect() {
  return (
    <>
      <main
        className={`${styles.contentConnect} content`}
        id="main"
      >
        <LargeText
          spacer={false}
          letterSpacing={false}
          textFull="LET'S TALK!"
          textSlim="LET'S\n  TALK!"
        />
        <Typeable
          align="left"
          text="REACH OUT THROUGH"
        />
        <div className={styles.connectSocials}>
          {getConnectSocials().map((social, i) => {
            return (
              <a
                key={i}
                className={styles.connectSocial}
                href={social.href}
                target="_blank"
              >
                <Image
                  className={styles.connectSocialIcon}
                  src={social.iconSrc}
                  alt={`Connect via ${social.name}`}
                  width={48}
                  height={48}
                />
                <div className={styles.connectSocialName}>
                  {social.name}
                  <Image
                    className={styles.connectSocialExternal}
                    src={`${config.basePath}/assets/icons/external.svg`}
                    alt="External Link"
                    width={24}
                    height={24}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </main>
      <Footer toRenderSocials={false} />
    </>
  );
}
