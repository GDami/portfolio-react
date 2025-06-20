import { AboutDetail } from './AboutDetail'
import './About.css'
import meSvg from "/emoji-tongue-round.svg"
import skillsSvg from "/cog.svg"
import hobbiesSvg from "/github.svg"

export function About() {
    //@ts-expect-error
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    let generalDescription = "I am a passionate ,,,software engineer,,, with a degree in computer science and I am currently looking for a position as a web developer.\nI strive for quality and am ,,,looking to join a team,,, to share my skills with."
    let workDescription = "I am adamant about creating ,,,high-quality, user-focused solutions,,,. Every project is an opportunity to ,,,learn,,,, to ,,,grow,,,, and to pour my ,,,dedication,,, and ,,,skills,,, into delivering a ,,,unique experience,,,."
    //@ts-expect-error
    let skillsDescription = "I am most proficient using ,,,React,,, and ,,,Java,,,, but I'm also familiar with other tools like ,,,Django, Angular, Nodejs,,, and ,,,SQL,,,.\nMore importantly, I know of ,,,multiple ways,,, to center a div."
    let hobbiesDescription = "My interests include games, piano and ,,,cat petting,,,. I also love exploring new places and learning stuff.\nBut behind the scenes is where I like to look. ,,,Figuring out,,, how things come to be is what piques my curiosity."
    return (
        <div className='section about' id="about">
            <h1>About me</h1>
            <AboutDetail
                description={generalDescription}
                reversed={false}
                svg={meSvg}
            />
            <AboutDetail
                description={workDescription}
                reversed={true}
                svg={skillsSvg}
            />
            <AboutDetail
                description={hobbiesDescription}
                reversed={false}
                svg={hobbiesSvg}
            />
        </div>
    )
}