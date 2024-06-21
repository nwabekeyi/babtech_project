import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper";
import Marketing from './Marketing.jpg';

const Component = () => {
   return(
      <div className="about mx-auto p-6 font-lato ">
      <h1 className="text-4xl font-bold text-gray-800 mb-0 px-96 py-14">Who We Are</h1>
      <p className="text-3xl italic text-custom-dark px-28">“TUNE is building the world’s best platform for marketing partnerships.”<br className=""/>Peter Hamilton, Advisor </p>
      
      <div className="cont mb-12">
         <div className="wrap ">
            <p className="text-sm text-dark-gray  mt-10 pl-1 pr-96 ">
            As one of the first cloud-based SaaS platforms to support affiliate marketing, 
            our mission has evolved since our founding in 2009. Today, we support the 
            growth of every performance partnership that marketers and their teams want 
            to manage. In the past few years, affiliate marketing has expanded and evolved 
            into a larger category called partner marketing. This category includes 
            traditional affiliate marketing, but also includes business development 
            relationships, influencers, content publishers, networks, and many other kinds 
            of partnerships.
            </p>
            <div className="imgone">
               <img src={Marketing} alt="Marketing" className="w-96"/>
            </div>
         </div>
      </div>
       </div>
   
   )
}

const About = pageWithNav(Component);

export default About;
