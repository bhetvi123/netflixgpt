import  './App.css';
import Body from './Components/Body';
import appStore from './redux-slice/appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={appStore}>
         <Body/>
    </Provider>

  );
}

export default App;

// import React, { useState } from 'react';
// import Header from './Header';

// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: ''
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     console.log('Form submitted:', formData);
//   };

//   const toggleSignInForm = () => {
//     setIsSignInForm(!isSignInForm);
//     setFormData({ email: '', password: '', name: '' });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
//       <Header />
      
//       {/* Background Image */}
//       <div className="absolute inset-0 opacity-50">
//         <img 
//           src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
//           alt="Netflix Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//       </div>

//       {/* Login Form */}
//       <div className="relative z-10 flex justify-center items-center min-h-screen pt-20">
//         <div className="bg-black bg-opacity-75 p-12 rounded-lg w-full max-w-md mx-4">
//           <h1 className="text-white text-3xl font-bold mb-8">
//             {isSignInForm ? 'Sign In' : 'Sign Up'}
//           </h1>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {!isSignInForm && (
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-white focus:outline-none"
//                   required
//                 />
//               </div>
//             )}
            
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email or phone number"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full p-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-white focus:outline-none"
//                 required
//               />
//             </div>
            
//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full p-4 bg-gray-700 text-white rounded border border-gray-600 focus:border-white focus:outline-none"
//                 required
//               />
//             </div>
            
//             <button
//               type="submit"
//               className="w-full bg-red-600 text-white py-4 rounded font-semibold hover:bg-red-700 transition duration-200"
//             >
//               {isSignInForm ? 'Sign In' : 'Sign Up'}
//             </button>
//           </form>
          
//           <div className="mt-6 text-gray-400">
//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 Remember me
//               </label>
//               <a href="#" className="hover:underline">Need help?</a>
//             </div>
//           </div>
          
//           <div className="mt-8 text-gray-400">
//             <p className="text-sm">
//               {isSignInForm ? "New to Netflix? " : "Already have an account? "}
//               <button
//                 onClick={toggleSignInForm}
//                 className="text-white hover:underline font-semibold"
//               >
//                 {isSignInForm ? "Sign up now" : "Sign in"}
//               </button>
//             </p>
//           </div>
          
//           <div className="mt-4 text-xs text-gray-500">
//             <p>
//               This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
//               <a href="#" className="text-blue-500 hover:underline">Learn more</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login
