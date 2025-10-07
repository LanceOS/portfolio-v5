import react from "react";

const Home = () => {
  
  return (
    <div className="bg-base">
    <main className="max-w-7xl mx-auto px-4 py-24 min-h-screen flex flex-col gap-12">
      <section className="space-y-4">
          <h1 className="text-7xl font-bold w-fit">Lance Hemphill</h1>
          <p className="text-2xl font-light w-fit">Software Engineer</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-xl font-light">Blah Blah Blah... Life story... I like software....</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Founding Engineer @ Tomorrow's AI</h3>
          <p className="text-lg font-light">Participated and directed the development cycle of Tomorrow's AI's Europe News Global platform, from conception to deployment.</p>
          <ul className="p-2 pl-6 list-disc font-light space-y-6">
            <li>
              <p>Wrote and implemented Flask backend with REST APIs and integrated them with the React frontend application.</p>
            </li>

            <li>
              <p>Used Figma editor to create UI/UX designs for the frontend application.</p>
            </li>

            <li>
              <p>Wrote React components and optimized frontend caching with React Query to improve performance and state management.</p>
            </li>

            <li>
              <p>Designed and implemented a NoSQL database solution using Amazon DynamoDB to manage user data and application content like comments.</p>
            </li>

            <li>
              <p>Managed the product development roadmap, tracking key milestones and providing regular status updates to upper management to
                ensure projects were completed on schedule.</p>
            </li>
          </ul>
        </div>
      </section>


      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div>
          <h3 className="text-xl font-semibold">Svelte-MOBAS</h3>
        </div>
      </section>
    </main>
    </div>
  )
}


export default Home;
