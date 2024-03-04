import { PlusCircleIcon } from '@heroicons/react/24/outline';
import React, { Children } from 'react';
import { initialData } from '../form/TakeIngredientsAndTags';

const IntergridentsWrapper = ({
	handler,
	intergridents,
	setIntergridents,
	children,
}) => {
	const arrayChildren = Children.toArray(children);
	console.log('custom children =>',arrayChildren)
	console.log('react children =>',Children)

	return (
		<div id="Intergridents" className="max-h-72 overflow-y-scroll">
			{arrayChildren.map((child, index) => {
				const isLast = index === arrayChildren.length - 1;
				console.log(isLast)
				return (
					<div>
						{isLast && (
							<div
								onClick={handler}
								className="flex justify-end pb-1 px-1 cursor-pointer"
							>
								<div className="flex space-x-1 items-center">
									<PlusCircleIcon className="h-5 w-5 text-primary-light" />
									<p className="text-sm">Add</p>
								</div>
							</div>
						)}
						{child}
					</div>
				);
			})}
		</div>
	);
};

export default IntergridentsWrapper;
