var notif = document.getElementsByClassName("notification-panel");
var header = document.getElementsByClassName("head-section");
var newsletter = document.getElementsByClassName("news-section");
var triggered = document.getElementsByClassName("triggered");

const nowTime = new Date().getTime();
const local = localStorage.getItem("time");

function createObserver() {
	let options = {
		root: null,
		rootMargin: "0px",
		threshold: 1.0,
	};

	let o = new IntersectionObserver(([e]) => {
		if (e.isIntersecting) {
			mountNewsLetter();
		}
	}, options);

	o.observe(triggered[0]);
}

function unMountNotifiPanel() {
	const height = notif[0].offsetHeight;

	notif[0].style.top = `-${height}px`;
	header[0].style["margin-top"] = "0px";

	setTimeout(() => {
		notif[0].remove();
	}, 1000);
}

function mountNewsLetter() {
	if (nowTime > local) {
		newsletter[0].style.bottom = "0px";
	}
}

function unMountNewsLetter() {
	const bottom = newsletter[0].offsetHeight;
	const closeTime = new Date().getTime();
	const addedTime = new Date().getTime() + 1000 * 60 * 10;
	localStorage.setItem("time", addedTime);
	newsletter[0].style.bottom = `-${bottom}px`;
	setTimeout(() => {
		newsletter[0].remove();
	}, 1000);
}
// })
createObserver();
