import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/login', {replace: true}), [navigate]);
    return (

<section class="text-gray-600 body-font bg-gray-300">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    
    <img className=" object-cover object-center rounded" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/First_Bank_of_the_United_States%2C_Philadelphia%2C_Pennsylvania_LCCN2011633532_%28edited%29.jpg/800px-First_Bank_of_the_United_States%2C_Philadelphia%2C_Pennsylvania_LCCN2011633532_%28edited%29.jpg'} />;


    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to
        <br class="hidden lg:inline-block"/>Global Bank Admin Management Application
      </h1>
      <p class="mb-8 leading-relaxed">Global Bank Ltd is one of India's premier banks. Headquartered in Mumbai Global Bank is 
      a new generation private sector bank providing a wide range of banking services covering commercial and investment
       banking on the wholesale side and transactional/branch banking on the retail side.Global Bank also has one overseas
        wholesale banking branch in Bahrain a branch in Hong Kong and two representative offices in UAE and Kenya.
         The Bank has two subsidiary companies namely Global Bank Securities Ltd and Global Bank Financial Services Ltd.The Bank has 
         three primary business segments namely banking wholesale banking and treasury. The retail banking segment 
         serves retail customers through a branch network and other delivery channels. This segment raises deposits 
         from customers and makes loans and provides other services with the help of specialist product groups to such customers.
       .</p>

      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" 
         onClick={handleOnClick} >Login as Admin</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>

    );
} 
export default LandingPage;