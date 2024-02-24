import React, { useState } from "react";
import AddRecipeForm from "./form/AddRecipeForm";
import PrimaryBtn from "../../components/UI Components/PrimaryBtn";

const AddRecipe = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
      <h3 className="text-md font-semibold text-gray-800 uppercase">
        Add Your Own Recipe
      </h3>
      <ol class="flex items-center mt-4 w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li
          onClick={() => setActiveStep(0)}
          class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
        >
          <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg
              class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li
          onClick={() => setActiveStep(1)}
          class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
        >
          <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span class="me-2">2</span>
            Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li onClick={() => setActiveStep(3)} class="flex items-center">
          <span class="me-2">3</span>
          Confirmation
        </li>
      </ol>
      <AddRecipeForm />
      <div className="mt-32 flex justify-between">
        <PrimaryBtn
          style={
            "flex items-center text-sm px-4 sm:text-base space-x-1 rounded-md text-white tracking-wider"
          }
          onClick={()=> console.log("hello")}
          disabled={true}
        >
          Prev
        </PrimaryBtn>
        <PrimaryBtn
          style={
            "flex items-center px-4 text-sm sm:text-base space-x-1 rounded-md text-white tracking-wider"
          }
          onClick={handleNext}
          disabled={isLastStep}
        >
          Next
        </PrimaryBtn>
      </div>
    </>
  );
};

export default AddRecipe;
