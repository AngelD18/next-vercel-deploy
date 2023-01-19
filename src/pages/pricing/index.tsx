import Image from "next/image";
import Link from "next/link";
import { DarkLayout } from "../../../components/layouts/DarkLayout";
import { MainLayout } from "../../../components/layouts/MainLayout";

export default function Pricing() {
  return (
    <>
      <div className={"center"}>
        <Image
          className={"logo"}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={"thirteen"}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <h1>Pricing page</h1>
      <h1>
        Ir a <Link href="/about">Home</Link>
      </h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/index.js</code>
        </p>
      </div>
    </>
  );
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};