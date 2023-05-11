import Image from "next/image";
import Link from "next/link";

import { Footer, Header, Layout } from "@/components/layout";
import { Button, Typography } from "@/components/ui";
import { ROUTES } from "@/components/utils/constants";

import styles from "./not-found.module.scss";

const NotFound = () => (
  <Layout notFound>
    <main className={styles.not_found}>
      <Typography className={styles.title}>
        <div>4</div>
        <Image width={190} height={190} src="/svg/logo.svg" alt="404" />

        <div>4</div>
      </Typography>

      <Typography tag="div" size="mini" className={styles.page_not}>
        Page Not Found
      </Typography>

      <Link href={ROUTES.ROOT}>
        <Button color="dark">Back To Home</Button>
      </Link>
    </main>
  </Layout>
);

export default NotFound;
