import { useState } from "react";
import reactLogo from "./assets/react.svg";
import myImage from "./assets/kodejeet.jpg";
import "./App.css";
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username:"whatup",
    country:"india" 
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-700 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card username="kodejeet"/>
      <Card username="radblud"/>
      <Card username="yungblud"/>
      {/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={myImage} alt=""  />
        <div className="pt-6 md:p-8 text-center md:text-left -space-y-4"></div>
        <blockquote>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos laudantium, inventore deserunt harum architecto totam sint mollitia maxime repellendus ea consequuntur aliquam corporis accusantium ratione, aperiam doloremque saepe, animi blanditiis distinctio in doloribus voluptate natus! Quos, unde. Iste, atque.
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Kodejeet
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Student, Undergraduate
        </div>
      </figcaption>
      </figure> */}
      
        {/* rather than putting all the components in one file
        we create a new folder called componenets  */}

{/* <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={myImage} alt="" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a> */}

    </>
  );
}

export default App;
