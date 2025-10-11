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
        <p className="text-xl font-light">I like software and I write software. I create {"(insert corporate buzzwords here)"} full stack applications. I've been into tech for as long as I can remember and started coding back in 2022. Typically I spend my time studying, coding, or reading. I'm always down to talk about tech, music, economics, business etc.  </p>
      </section>

          <section className="space-y-4">
          <h2 className="text-3xl font-bold">Links</h2>
            <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/lancehemphill/" target="_blank" aria-label="My Linkedin" className="py-2 px-4 font-semibold bg-black text-white text-sm cursor-pointer hover:px-6 duration-200">LinkedIn</a>
            <a href="https://github.com/LanceOS" target="_blank" aria-label="My Github" className="py-2 px-4 font-semibold bg-black text-white text-sm cursor-pointer hover:px-6 duration-200">Github</a>
            </div>
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


      <section className="space-y-12">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Svelte-MOBAS</h3>
          <p className="font-light">{"(SvelteKit, MinIO, Drizzle, Docker, Docker-Compose, Better-Auth Authentication, Postgres, Git)"}</p>
          <p className="font-light">A full stack application boilerplate with in depth code comments and instructions. This application is meant to be used as a boilerplate
          or for junior devs who want to learn more about setting up a full stack application. Using services like Docker to host databases and libraries like Better-Auth to handle authentication
          this repo is a good starting point for a full stack application.</p>
          <a href="https://github.com/LanceOS/Svelte-MOBAS" target="_blank" aria-label="View project on github" className="py-2 px-4 bg-black text-white font-semibold text-sm cursor-pointer hover:px-6 duration-200">Github Repo</a>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Simple Task App</h3>
          <p className="font-light">{"(SvelteKit, Drizzle, Better-Auth, Postgres, Docker, Docker-Compose, RabbitMQ, Git)"}</p>
          <p className="font-light">Like a true developer this project is incomplete, however it is maybe 75% complete. It is a full stack application that allows users to create groups/orgs and within those create task groups. These task groups house created tasks that can be assigned to memebers of the main group. This uses SvelteKit for the frontend and backend with SSR. Docker hosts the services like RabbitMQ and Postgres while drizzle manages the read and writing of data to the database as well as it's structure. Better-Auth is used for authentication.</p>
          <a href="https://github.com/LanceOS/simple-task-app" target="_blank" aria-label="View project on github" className="py-2 px-4 bg-black text-white font-semibold text-sm cursor-pointer hover:px-6 duration-200">Github Repo</a>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Link Sharing App</h3>
          <p className="font-light">{"(NextJS, MongoDB, NextAuth, Git)"}</p>
          <p className="font-light">This project is from the service Frontend Mentor. It is a full stack application that allows users to create a preview of links and then share them to anyone. The links are displayed on a smartphone along with the user's info and profile image. Using NextJS for SSR and NextAuth for authentication. User's can sign up and save their links which is saved in MongoDB. This is a much older project of mine and has not had any bug fixes since launch. However the app is still up and usable!</p>
          <div className="flex gap-4">
            <a className="py-2 px-4 bg-black text-white font-semibold text-sm cursor-pointer hover:px-6 duration-200" href="https://link-sharing-app-yzuc.vercel.app/auth/signin" target="_blank" aria-label="View project demo">Demo</a>
            <a className="py-2 px-4 bg-black text-white font-semibold text-sm cursor-pointer hover:px-6 duration-200" href="https://github.com/LanceOS/link-sharing-app" target="_blank" aria-label="View project on github">Github Repo</a>
          </div>
        </div>
      </section> 

    </main>
    </div>
  )
}


export default Home;
