export default async function Home() {
  return (
    <main className="py-20 px-[5%]">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">
          Server code: {process.env.WEBSITE_NAME}
        </h1>
        <h3 className="text-2xl font-bold">
          Client code: {process.env.NEXT_PUBLIC_WEBSITE_NAME}
        </h3>
        <p className="text-lg">This is a test</p>
      </div>
    </main>
  );
}
