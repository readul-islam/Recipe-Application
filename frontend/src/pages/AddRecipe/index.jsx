import {
	BuildingLibraryIcon,
	CogIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import { Button, Step, Stepper, Typography } from '@material-tailwind/react';
import { Form, Formik } from 'formik';
import React, { useId, useState } from 'react';
import TakeBasicInfo from './components/TakeBasicInfo';
import TakeIngredientsAndTags, {
	initialData,
} from './components/TakeIngredientsAndTags';
import TakeInstructions, { initialInt } from './components/TakeInstractions';
import useTag from '../../hooks/useTag';

export default function AddRecipe() {
	const MAX_TAGS = 5;
	const formId = useId();
	const [activeStep, setActiveStep] = React.useState(0);
	const [isLastStep, setIsLastStep] = React.useState(false);
	const [isFirstStep, setIsFirstStep] = React.useState(false);
	const [instructions, setInstructions] = React.useState([{ ...initialInt }]);
	const [thumbnail, setThumbnail] = useState('');
	const { tags, handleAddTag, handleRemoveTag } = useTag(MAX_TAGS);
	const [intergridents, setIntergridents] = useState([
		{ ...initialData },
		{ ...initialData },
	]);

	const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
	const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
	const submitHandler = async (values) => {
		const recipeInfo = {
			instructions: instructions,

			tags: tags,
			ingredients: intergridents,
			thumbnail,
			...values,
		};
		console.log(recipeInfo);
	};

	return (
		<>
			<div className="w-full relative  px-2 md:px-8  py-4 bg-white">
				<div className="sticky w-full md:px-16">
					<Stepper
						activeStep={activeStep}
						isLastStep={(value) => setIsLastStep(value)}
						isFirstStep={(value) => setIsFirstStep(value)}
					>
						<Step onClick={() => setActiveStep(0)}>
							<UserIcon color="" className="h-5 w-5" />
							<div className="absolute -bottom-[2rem] w-max text-center">
								<Typography
									variant="h6"
									color={activeStep === 0 ? 'blue-gray' : 'gray'}
								>
									Basic
								</Typography>
							</div>
						</Step>
						<Step onClick={() => setActiveStep(1)}>
							<CogIcon className="h-5 w-5" />
							<div className="absolute -bottom-[2rem] w-max text-center">
								<Typography
									variant="h6"
									color={activeStep === 1 ? 'blue-gray' : 'gray'}
								>
									Intergridents & Tags
								</Typography>
							</div>
						</Step>
						<Step onClick={() => setActiveStep(2)}>
							<BuildingLibraryIcon className="h-5 w-5" />
							<div className="absolute -bottom-[2rem] w-max text-center">
								<Typography
									variant="h6"
									color={activeStep === 2 ? 'blue-gray' : 'gray'}
								>
									Instruction & Thumbnail
								</Typography>
							</div>
						</Step>
					</Stepper>
				</div>
				<div className="mt-16">
					<Formik
						initialValues={{
							title: '',
							calory: '',
							servings: '',
							totalTime: '',
							cookTime: '',
							prepTime: '',
							cuisine: '',
							category: '',
						}}
						onSubmit={submitHandler}
					>
						{({ handleSubmit, isSubmitting, setFieldValue }) => (
							<Form id={formId} onSubmit={handleSubmit}>
								{activeStep === 0 && <TakeBasicInfo />}
							</Form>
						)}
					</Formik>
					{activeStep === 1 && (
						<TakeIngredientsAndTags
							tags={tags}
							handleAddTag={handleAddTag}
							handleRemoveTag={handleRemoveTag}
							intergridents={intergridents}
							setIntergridents={setIntergridents}
						/>
					)}
					{activeStep === 2 && (
						<TakeInstructions
							thumbnail={thumbnail}
							setThumbnail={setThumbnail}
							instructions={instructions}
							setInstructions={setInstructions}
						/>
					)}
				</div>
				{/* noting */}
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
						type={isLastStep && 'submit'}
						className="bg-primary-default"
						onClick={handleNext}
					>
						{isLastStep ? 'Save' : 'Next'}
					</Button>
				</div>
			</div>
			{/* <UploadImageView /> */}
		</>
	);
}
