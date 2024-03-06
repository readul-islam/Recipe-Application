import { useState, ChangeEvent } from 'react';

export const TagField = ({ tags, addTag, removeTag, maxTags }) => {
	// track the use input

	const [userInput, setUserInput] = useState(' ');

	// Handle input onChange

	const handleInputChange = (e) => {
		setUserInput(e.target.value);
	};

	// handle Enter key press

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault(); // Prevent form submission or new line creation

			if (
				userInput.trim() !== '' &&
				userInput.length <= 12 &&
				tags.length < maxTags
			) {
				addTag(userInput);
				setUserInput(''); // Clear the input after adding a tag
			}
		}
	};

	return (
		<div className="flex flex-col w-full">
			<label htmlFor="">
				<span className="pl-1 uppercase font-semibold text-[12px] text-gray-500">
					Tags
				</span>
				<input
					name="keyword_tags"
					type="text"
					placeholder="Add tags"
					className="w-full px-3 mt-1 py-2.5 rounded-lg font-medium  border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
					onKeyDown={handleKeyPress}
					onChange={handleInputChange}
					value={userInput}
					// disabled={tags.length === maxTags}
				/>
			</label>

			{/* ===== Render the tags here ===== */}

			<div className="flex flex-row flex-wrap gap-3 mt-4">
				{tags.map((tag, index) => (
					<span
						key={`${index}-${tag}`}
						className="inline-flex items-start justify-start px-3 py-1.5 rounded-2xl text-sm shadow-sm font-medium bg-orange-600 text-white mr-2"
					>
						{tag}
						<button
							className="ml-2 hover:text-blue-500"
							onClick={() => removeTag(tag)}
							title={`Remove ${tag}`}
						>
							&times;
						</button>
					</span>
				))}
			</div>
		</div>
	);
};
