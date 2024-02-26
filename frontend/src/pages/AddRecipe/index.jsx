// import React, { useState } from "react";
// import AddRecipeForm from "./form/AddRecipeForm";
// import PrimaryBtn from "../../components/UI Components/PrimaryBtn";

// const AddRecipe = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isLastStep, setIsLastStep] = useState(false);
//   const [isFirstStep, setIsFirstStep] = useState(false);

//   const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
//   const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

//   return (
//     <>
//       <h3 className="text-md font-semibold text-gray-800 uppercase">
//         Add Your Own Recipe
//       </h3>
//       <ol className="flex items-center mt-4 w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
//         <li
//           onClick={() => setActiveStep(0)}
//           className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
//         >
//           <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
//             <svg
//               className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//             </svg>
//             Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
//           </span>
//         </li>
//         <li
//           onClick={() => setActiveStep(1)}
//           className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
//         >
//           <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
//             <span className="me-2">2</span>
//             Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
//           </span>
//         </li>
//         <li onClick={() => setActiveStep(3)} className="flex items-center">
//           <span className="me-2">3</span>
//           Confirmation
//         </li>
//       </ol>
//       <AddRecipeForm />
//       <div className="mt-32 flex justify-between">
//         <button
//         type="button"
//           className={
//             "flex items-center py-2 cursor-pointer bg-primary-default text-sm px-4 sm:text-base space-x-1 rounded-md text-white tracking-wider"
//           }
//           onClick={()=> console.log("hello")}
//           disabled
//         >
//           Prev
//         </button>
//         <button
//           className={
//             "flex bg-primary-default cursor-pointer py-2 items-center px-4 text-sm sm:text-base space-x-1 rounded-md text-white tracking-wider"
//           }
//           onClick={handleNext}
//           disabled={isLastStep}
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default AddRecipe;
import {
    BuildingLibraryIcon,
    CogIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { Button, Step, Stepper, Typography } from "@material-tailwind/react";
import React from "react";
import AddRecipeForm from "./form/AddRecipeForm";
import UploadImageView from "../../components/UI Components/UploadImageView";

export default function AddRecipe() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
    {/* <div className="w-full relative border rounded-md px-8  py-4">
      <div className="sticky w-full px-16">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                Step 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Add Recipe Basic Details
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <CogIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Step 2
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Add ingredients and Tags
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
              >
                Step 3
              </Typography>
              <Typography
                color={activeStep === 2 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Add Instructions
              </Typography>
            </div>
          </Step>
        </Stepper>
      </div>

      <div className="mt-24">
        {activeStep === 0 && <AddRecipeForm />}
        {activeStep === 1 && <UploadImageView />}
        </div>

      <div className="mt-4 flex justify-between">
        <Button className="bg-primary-default" onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button className="bg-primary-default" onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div> */}
    <UploadImageView/>
    </>
  );
}
