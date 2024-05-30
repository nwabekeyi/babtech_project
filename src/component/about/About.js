import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper";

const Component = () => {
    return(
        <div>
            <p>This is our ABOUT us page</p>
        </div>
    );
}

const About = pageWithNav(Component);

export default About;