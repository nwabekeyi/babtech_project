import pageWithNav from "./navbarWrapper";

const Component = () => {
    return(
        <div>
            <p>This is our contact us page</p>
        </div>
    );

}

const ContactPage = pageWithNav(Component);

export default ContactPage;