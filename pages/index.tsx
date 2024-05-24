import { GetServerSideProps } from "next";

export default function HomePage(props: any) {
  return (
    <main>
      <h1 className="bg-red" nonce={props.nonce}>
        Content goes her
      </h1>
    </main>
  );
}

export const getServerSideProps = (async ({ req }) => {
  const nonce = new Headers(req.headers as any).get("x-nonce");
  return { props: { nonce: nonce?.toString() } };
}) satisfies GetServerSideProps<{ nonce?: string }>;
