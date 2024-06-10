import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper";
import "./About.css";
import Marketing from './Marketing.jpg';
import Image2 from './Image2.jpg';
import Image1 from './Image1.jpg';
import Image3 from './Image3.png';

const Component = () => {
    return(
    
        <div className="about">
            <h1 className="h1">Who We Are</h1>
            <p>“TUNE is building the world’s best platform for marketing partnerships.” <br/>Peter Hamilton, Advisor</p>

            <div className="cont"> 
            <div className="wrap">
            <p className="contex">   
            As one of the first cloud-based SaaS platforms to support affiliate marketing,our mission has evolved since our founding in 2009. Today, we support the growth of every performance partnership that marketers and their teams want to manage. In the past few years, affiliate marketing has expanded and evolved into a larger category called partner marketing. This category includes traditional affiliate marketing, but also includes business development relationships, influencers, content publishers, networks, and many other kinds of partnerships. 
            </p>
            <div className="oneimg">
             <img src={Marketing} alt="Marketing" width={350} />
              </div>
              </div>
            
                </div>
                <p>“Our approach to partner marketing is different.” <br/>Cameron Stewart, General Manager</p>

                <div className="containtwo">
                  <div className="wrapper2">
                  <div className="twoimg">
        <img src={Image2} alt="Image 2" width="250%" />
        </div>
        <div className="twotext"> 
      We believe that every business can benefit from better technology to manage marketing partnerships. And we believe this need extends beyond advertisers and affiliate programs. Ad networks, agencies, and publisher businesses are also managing partnerships at scale. TUNE’s partner marketing platform is designed to support the unique needs of these business models and make it easier for each to work with the others. This is why TUNE has never and will never compete with these models. Instead, we strive to open new opportunities for all of our customers to connect, integrate, and customize their partner marketing relationships.
        </div>
                  </div>
      </div>

                <p>“TUNE is a technology-first company.” <br/>Dan Koch, Advisor</p>
           
           <div className="cont">
            <div className="wrap">
              <p className="contex">
              Above everything else in our values and DNA, we are builders. Product and
              engineering efforts have lead our innovation since the founding of TUNE. We 
              are obsessed with solving today’s problems for our customers, and eager to 
              determine the problems of tomorrow. We do this by listening closely, thinking 
              deeply, and constantly pushing new releases — and ourselves. Our goal is to be 
              the fastest evolving, most flexible, and by far most scalable platform available,
              and through doing so, empower every one of our customers to find partner 
              marketing success.
              </p>
              <div className="oneimg">
                <img src={Image1} alt="Image 1" width={400} />
              </div>
            </div>
           </div>
            <div className="divtwo">
      <h1 className="headtwo">A Brief TUNE History</h1>
      <div className="ptags">
      <p>The first TUNE product was launched in 2009. We called it HasOffers, because it was a white label solution that allowed anyone to manage their own offers for affiliates and partners to promote. In the following years, hundreds of new and existing companies built their business on our platform, making HasOffers the most adopted SaaS solution for affiliate and publisher networks.</p>
      <p>In 2011, TUNE invented and launched Attribution Analytics, the first SaaS solution for measuring the performance of mobile app campaigns. Among other firsts, our team introduced the industry to the concept of app install campaigns, and created the first mobile postbacks for tracking and attribution purposes. By 2013, Attribution Analytics had skyrocketed to become the industry standard, counting hundreds of the world’s largest brands and mobile app advertisers among its users.</p>
      <p>Fast forward to 2018, when TUNE’s Attribution Analytics product was acquired by Branch, a Silicon Valley company solving the cross-platform mobile experience. The acquisition reformed TUNE around the core HasOffers product and refocused our team and our efforts on developing the existing platform into a complete partner marketing platform. In 2019, we retired the HasOffers name to bring us closer to this new mission.</p>
      <p>And the market noticed. In 2020, TUNE was acquired by Constellation Software. Constellation’s business strategy is to acquire and hold investments to create sustainable growth and profitability. This change in ownership only furthers TUNE’s promise to enable both advertisers and networks to flexibly manage their marketing partnerships.</p>
      <p>Today, TUNE delivers a truly technology-first solution for every business in the partner marketing industry. And we’re not stopping there. We are dedicated to building the world’s best platform for advertisers and networks. Our company keeps this as our singular focus for innovation, now and as we look toward the future of performance marketing partnerships.</p>
      </div>
      </div>
      <div className="divthree">
        <h1 className="headthree">Our Values</h1>
        <p className="thrtags">
        We strive to embody these ideals in our interactions with each other and in everything we do, from product development and customer-first <br /> thinking to personal growth and our impact on the community.
        </p>
        <div className="ttags">
            <div className="tag1">
                <img src={Image3} alt="Image 3" />
                <h2>Be Excellent to Each Other</h2>
                <p className="tagss">As humans who share common needs, we treat each other with care and respect. We value diversity of people and ideas. We have 
                   faith in each other’s ability to succeed and cultivate that potential by inspiring and nurturing growth. We recognize and express 
                   sincere gratitude for each other’s contributions.</p>
            </div>
        </div>
        <div className="ttags">
            <div className="tag1">
              
                <h2>Be Confident and Coachable</h2>
                <p className="tagss">
                We leverage our strengths, and pursue growth in areas where improvement is needed. When we make mistakes or don’t know something, we are not afraid to be vulnerable and admit it. We continuously pursue knowledge and are happy to share it with others.
                </p>
            </div>
        </div>
        <div className="ttags">
            <div className="tag1">
             
                <h2>Start With Why
                </h2>
                <p className="tagss">
                Our actions are inspired by our deep understanding of those we serve and support. We explore what is most meaningful to them and why. We earn connection and loyalty by anticipating and delivering what will delight them the most.
                </p>
            </div>
        </div>
        <div className="ttags">
            <div className="tag1">
              
                <h2>Embrace 10x Thinking</h2>
                <p className="tagss">
                
                </p>
            </div>
        </div>
        <div className="ttags">
            <div className="tag1">
  
                <h2>Be Relentlessly Resourcefu</h2>
                <p className="tagss">
                We overcome obstacles and find solutions to problems with relentless resourcefulness. We take full advantage of the wealth of information, tools, and expertise available to us.
                </p>
            </div>
        </div>
        <div className="ttags">
            <div className="tag1">
                
                <h2>Fail and Advance</h2>
                <p className="tagss">
                When we strive, we may fail. Failure gives us unparalleled knowledge about ourselves and our subject matter. We face our failures with resilience, using what we learn from failures to advance
                </p>
            </div>
        </div>
        <div className="ttags">
            <div className="tag1">
  
                <h2>Own the Outcome </h2>
                <p className="tagss">
                We are committed to delivering high-quality work in a timely fashion. When we believe that something should be done, we assertively take action to make it happen. When setbacks or roadblocks threaten our ability to succeed, we dig deep inside ourselves and rise to the occasion.
                </p>
            </div>
        </div>
      </div>
        </div>
        
    );
}

const About = pageWithNav(Component);

export default About;
