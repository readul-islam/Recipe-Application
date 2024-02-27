import {
  BuildingLibraryIcon,
  CogIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Button, Step, Stepper, Typography } from '@material-tailwind/react';
import { Form, Formik } from 'formik';
import React, { useId } from 'react';
import UploadImageView from '../../components/UI Components/UploadImageView';
import TakeBasicInfo from './form/TakeBasicInfo';
import TakeIngredientsAndTags from './form/TakeIngredientsAndTags';

export default function AddRecipe() {
  const formId = useId();
	const [activeStep, setActiveStep] = React.useState(0);
	const [isLastStep, setIsLastStep] = React.useState(false);
	const [isFirstStep, setIsFirstStep] = React.useState(false);

	const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
	const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
	const submitHandler = async (values) => {
    console.log(values)
  };

	return (
		<>
			<div className="w-full relative border rounded-md px-8  py-4">
				<div className="sticky w-full px-16">
					<Stepper
						activeStep={activeStep}
						isLastStep={(value) => setIsLastStep(value)}
						isFirstStep={(value) => setIsFirstStep(value)}
					>
						<Step onClick={() => setActiveStep(0)}>
							<UserIcon color="" className="h-5 w-5" />
							<div className="absolute -bottom-[4.5rem] w-max text-center">
								<Typography
									variant="h6"
									color={activeStep === 0 ? 'blue-gray' : 'gray'}
								>
									Step 1
								</Typography>
								<Typography
									color={activeStep === 0 ? 'blue-gray' : 'gray'}
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
									color={activeStep === 1 ? 'blue-gray' : 'gray'}
								>
									Step 2
								</Typography>
								<Typography
									color={activeStep === 1 ? 'blue-gray' : 'gray'}
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
									color={activeStep === 2 ? 'blue-gray' : 'gray'}
								>
									Step 3
								</Typography>
								<Typography
									color={activeStep === 2 ? 'blue-gray' : 'gray'}
									className="font-normal"
								>
									Add Instructions
								</Typography>
							</div>
						</Step>
					</Stepper>
				</div>
				<div className="mt-24">
					<Formik initialValues={{Title:"",Calory:"",Servings:"",TotalTime:"",CookTime:"",PrepTime:"" }} onSubmit={submitHandler}>
						{({ handleSubmit, isSubmitting, setFieldValue }) => (
							<Form id={formId} onSubmit={handleSubmit}>
								{activeStep === 0 && <TakeBasicInfo />}
								
                {activeStep === 1 && <TakeIngredientsAndTags />}
							</Form>
						)}
					</Formik>
				</div>

				<div className="mt-4 flex justify-between">
					<Button
						className="bg-primary-default"
						onClick={handlePrev}
						disabled={isFirstStep}
					>
						Prev
					</Button>
					<Button
          form={formId}
          type={isLastStep&& "submit"}
						className="bg-primary-default"
						onClick={handleNext}
						
					>
						{isLastStep ? "Save" : "Next"}
					</Button>
				</div>
			</div>
			{/* <UploadImageView /> */}
		</>
	);
}
