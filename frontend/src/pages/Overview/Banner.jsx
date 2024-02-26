import React from 'react';
import Women from '../../assets/images/main.png';
const Banner = () => {
	return (
		<div className="mb-28">
			<div className="relative w-full bg-primary-light h-48 rounded-[35px] ">
				<div className=" items-center px-10 ">
					<div className=" text-white flex flex-col py-6">
						<h3 className="text-5xl font-bold tracking-widest	 ">
							Add your own recipe
						</h3>
						<p className="text-xl tracking-widest	 max-xl-lg pt-3">
							Upload Your Own Home-made Recipe And Share it With Other
							<br /> Members And Reciply Community & Get New Ideas, <br /> Re-invent
							and Inhancements...
						</p>
					</div>
					<div className="absolute right-20 bottom-0 ">
						<img src={Women} alt="" />
					</div>
				</div>
				{/* background */}
				<div
					className="relative bg-secondary-default ml-5 -z-30 mt-[-110px] 
         h-40 w-[97%]  rounded-[35px] flex left-1"
				/>
				{/* <div className="absolute bg-secondary-default bottom-[-25px] 
         h-40 w-[97%]  rounded-[35px] flex left-5"></div> */}
			</div>
		</div>
	);
};

export default Banner;
