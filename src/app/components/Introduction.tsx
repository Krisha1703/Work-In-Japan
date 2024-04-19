import Container from "./container"
export default function Introduction(){
    return(
        <section className="bg-blue-100 py-2 pt-10">
            <h2 className="text-blue-800 text-3xl font-bold text-center mb-2">Why work in Japan?</h2>
            <p className="text-lg text-blue-800 font-semibold mx-20 mb-2">Are you considering a career opportunity abroad? Look no further than Japan—a country that offers a unique blend of innovation, tradition, and unmatched professional growth. Here is why working in Japan can be a transformative experience:</p>
            <div className="md:flex block md:ml-0 ml-30">

                <Container
                    heading="Cutting-Edge Innovation"
                    imageSrc="/media/innovation.jpeg"
                    paragraphText="Japan is renowned for its cutting-edge technology and innovative industries. By working in Japan, you will be at the forefront of technological advancements, contributing to groundbreaking projects and collaborating with world-class experts."
                />

                    <Container
                    heading="Cultural Experience"
                    imageSrc="/media/culture.jpg"
                    paragraphText="Immerse yourself in rich cultural heritage and traditions. Explore historic landmarks, participate in traditional ceremonies, and enjoy the vibrant arts scene that Japan has to offer."
                />

                <Container
                    heading="Business Opportunities"
                    imageSrc="/media/business.jpeg"
                    paragraphText="Elevate your business presence in Japan by tapping into one of the largest and most sophisticated markets. Build strategic partnerships, access cutting-edge technologies, and expand your global footprint."
                />

                <Container
                    heading="Travel & Exploration"
                    imageSrc="/media/explore.webp"
                    paragraphText="Discover the beauty of landscapes and attractions. From bustling cities to serene countryside, Japan offers endless possibilities for exploration and adventure."
                />

            </div>

        </section>
    )
}