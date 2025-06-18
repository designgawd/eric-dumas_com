import CTASection from "./buttons";

function Specialization () {

    return (
        <section className="mt-8 mb-20">
            <ul className="text-l md:text-2xl text-gray-600">
                <li className="py-2 md:py-0">Currently specializing in Frontend (React / Next.js / Typescript / TailwindCSS)</li>
                <li className="py-2 md:py-0">Frontend Engineer working on Upwork</li>
                {/* Frontend: ReactJS (Expert), NextJS (Advanced), Redux, TypeScript
                Backend: NodeJS (Expert), Express, GraphQL, MongoDB
                Cloud & DevOps: AWS, Docker, CI/CD Pipelines, Jest Testing
                CMS & Integrations: Contentful, API & GraphQL Integrations */}
            </ul>
            <CTASection />
        </section>
    )
}

export default Specialization;