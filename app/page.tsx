export default async function Home() {
  return (
    <main className="py-20 px-[5%]">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Hello {process.env.WEBSITE_NAME}</h1>
        <p className="text-lg">This is a test</p>
      </div>
    </main>
  );
}
