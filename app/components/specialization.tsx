import CTA from "./cta";

function Specialization () {

    return (
        <section className="specialization mt-8 mb-20">
            <ul className="">
                <li>Currently specializing in Frontend (React / Next.js)</li>
                <li>Frontend Engineer working on Upwork</li>
                {/* Frontend: ReactJS (Expert), NextJS (Advanced), Redux, TypeScript
                Backend: NodeJS (Expert), Express, GraphQL, MongoDB
                Cloud & DevOps: AWS, Docker, CI/CD Pipelines, Jest Testing
                CMS & Integrations: Contentful, API & GraphQL Integrations */}
            </ul>
            <CTA />
        </section>
    )
}

export default Specialization;