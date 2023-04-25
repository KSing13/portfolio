const dpTitle = "Kay Sing";
const dpImage = "../src/images/ks.jpeg";

const About = () => {
    return (
        <div className="dv-flex">
            <div key="img" className="dv-flex-content">
                <img src={ dpImage } alt={ dpTitle } width="300" height="300" />
            </div>
            <div key="content" className="dv-flex-content">
                <div className="dv-right">
                    <h3>
                        Hello, I'm Kay Sing.
                    </h3>
                    <p>
                        A girl from Kuching (Sarawak, Malaysia).
                    </p>
                    <p>
                        As a programmer and adventurer, I believe I possess a unique combination of technical and creative skills that allow me to approach challenges in a unique way. I am driven by my passion for both technology and exploration, and I constantly seek out new experiences that allow me to expand my horizons.
                    </p>
                    <p>
                        As a programmer, I have a deep understanding of programming languages and software development processes, and I am skilled in solving complex technical problems. I am constantly learning and experimenting with new technologies and tools, and I am always looking for ways to improve my skills and stay up-to-date with the latest trends in the field.
                    </p>
                    <p>
                        As an adventurer, I am always seeking out new challenges and experiences. I love to travel and explore new places, and I am always up for trying new activities and pushing myself to my limits. I thrive on the excitement and adrenaline of new experiences, and I am always looking for the next adventure.
                    </p>
                    <p>
                        My unique combination of programming and adventure skills makes me a valuable asset to any team or project. I am able to bring a fresh perspective to technical problems, and I am able to approach challenges with a creative and open-minded attitude. My passion for both technology and adventure is contagious, and I inspire those around me to push themselves and embrace new experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;