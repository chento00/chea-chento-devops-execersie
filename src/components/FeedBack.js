import React from "react";

export default function FeedBack() {
	return (
		<>
			<div class="grid mb-8 border ml-32 mr-32 border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-2 md:grid-cols-2 " >
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
			<form className=" ml-32 mr-32 mb-10">
			<div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
				<div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
					<label for="comment" class="sr-only">Your comment</label>
					<textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
				</div>
				<div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
					<button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
						Post comment
					</button>
					<div class="flex pl-0 space-x-1 sm:pl-2">
						<button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
							<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path></svg>
							<span class="sr-only">Attach file</span>
						</button>
						<button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
							<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
							<span class="sr-only">Set location</span>
						</button>
						<button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
							<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
							<span class="sr-only">Upload image</span>
						</button>
					</div>
				</div>
			</div>
			</form>
		</>
	);
}
