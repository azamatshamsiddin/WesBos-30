function setTime() {
	const now = new Date();
	const second = now.getSeconds();
	const secondDegrees = ((second / 60) * 360) +90;
	const secondHand = document.querySelector(".clock__sec-hand");
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360 )+ 90;
	const minsHand = document.querySelector(".clock__min-hand");
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  console.log(mins/60*360)


	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;
	const hoursHand = document.querySelector(".clock__hour-hand");
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setTime, 1000);
