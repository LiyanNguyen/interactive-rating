let ratingSelections = document.querySelectorAll('.selection');
let submitRatingButton = document.querySelector('#submitRating');
let ratingCard = document.querySelector('.rating');
let feedbackCard = document.querySelector('.thankyou');
let submittedScore = document.querySelector('.submitted-score');
let submittedRating;

ratingSelections.forEach((ratingOption) => {
	ratingOption.onclick = () => {
		ratingSelections.forEach((allRatingOptions) => {
			allRatingOptions.classList.remove('active');
		});
		ratingOption.classList.toggle('active');
	}
});

submitRatingButton.onclick = () => {
	let chosenRating = document.querySelector('.selection.active');
	if (chosenRating === null) {
		alert('Please choose a rating');
	}

	else {
		submittedRating = chosenRating.innerText;
		submittedScore.innerHTML = `You selected ${submittedRating} out of 5`;
		ratingCard.style.display = 'none';
		feedbackCard.style.display = 'flex';
	}
}