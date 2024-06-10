import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper";
import Button from "../tempalates/button";
import { useEffect, useState } from "react";

const Page = () => {
//   const[values, setValues] = useState([]);

//   const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

//     useEffect(() => {
//       const fetchData = async () => {
//        try {
//         const response = await fetch(apiEndpoint);
//         const data = await response.json();
//         console.log(data);

//         if(data){
//         setValues(data)
//         }else{
//           console.log("data not found")
//         }
        
//        } catch (error) {
//          console.log(error);
//        }


//       }
//       fetchData();
//     }, [])
//   return (
//     <>

// {values.map((value) => (
//       <div key={value.id} style={{display: 'flex', justifyContent: 'space-between'}}>
//          <p >{value.userId}</p>
//         <p>{value.title}</p>
//       </div>
       
//       ))}
   
  //   </>
  //  );

}

const HomePage  = pageWithNav(Page);


 
export default HomePage;
