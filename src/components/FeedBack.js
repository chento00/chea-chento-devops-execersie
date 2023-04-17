import React from "react";

export default function FeedBack() {
	return (
		<div class="grid mb-8 border ml-32 mr-32 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 " >
			<figure class="flex flex-col  items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"  style={{ height: "200px" }}>
				<blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
				Excellent work! You exceeded my expectations and delivered 
				</h3>
				<p class="my-4">
				I am extremely satisfied with the work you have done.
				</p>
				</blockquote>
				<figcaption class="flex items-center justify-center space-x-3">
				<img
					class="rounded-full w-9 h-9"
					src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
					alt="profile picture"
				/>
				<div class="space-y-0.5 font-medium dark:text-white text-left">
					<div>Elone Musk</div>
					<div class="text-sm text-gray-500 dark:text-gray-400">
					Co-Founder of Tesla
					</div>
				</div>
				</figcaption>
			</figure>
			<figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700" style={{ height: "200px" }}>
				<blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
				Impressive Customer Service
				</h3>
				<p class="my-4">
				Your prompt and courteous response exceeded my expectations. Thank you for your excellent customer service!
				</p>
				</blockquote>
				<figcaption class="flex items-center justify-center space-x-3">
				<img
					class="rounded-full w-9 h-9"
					src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ3-iXEtO-l5nWl70miflz11gvr4az-tKKnJpVhTmMUSzND4lnhBGDyBtpkvWijrURea51CExU9zVBZZ-4"
					alt="profile picture"
				/>
				<div class="space-y-0.5 font-medium dark:text-white text-left">
					<div>Mark Zuckerberg</div>
					<div class="text-sm text-gray-500 dark:text-gray-400">
						CEO of Facebook
					</div>
				</div>
				</figcaption>
			</figure>
			<figure style={{ height: "200px" }} class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
				<blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
				Stellar Presentation Skills
				</h3>
				<p class="my-4">
				Your presentation was engaging, well-organized, and delivered with confidence. You have exceptional presentation skills.
				</p>
				</blockquote>
				<figcaption class="flex items-center justify-center space-x-3">
				<img
					class="rounded-full w-9 h-9"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsc8tY2vbSYOAeCoGUaa7lZPlgwfatnLcloFZE-LD&s"
					alt="profile picture"
				/>
				<div class="space-y-0.5 font-medium dark:text-white text-left">
					<div>Leonel Messi</div>
					<div class="text-sm text-gray-500 dark:text-gray-400">
					Football player at Argentina
					</div>
				</div>
				</figcaption>
			</figure>
			<figure  style={{ height: "200px" }}class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
				<blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
				Exceptional Time Management
				</h3>
				<p class="my-4">
				Your ability to prioritize tasks and meet deadlines is remarkable. You have exceptional time management skills that I greatly appreciate.
				</p>
				</blockquote>
				<figcaption class="flex items-center justify-center space-x-3">
				<img
					class="rounded-full w-9 h-9"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdCcPmGCLj9i-e_VoP2RNztoWLgf4I6lKInOMx7TWTA&s"
					alt="profile picture"
				/>
				<div class="space-y-0.5 font-medium dark:text-white text-left">
					<div>Cristiano Ronaldo
				</div>
					<div class="text-sm text-gray-500 dark:text-gray-400">
					Footballer
					</div>
				</div>
				</figcaption>
			</figure>
		</div>
	);
}
