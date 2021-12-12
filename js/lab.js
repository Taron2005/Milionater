const questions = [
	{
		question:
			"<<Հանգեր իմանամ, ականջ դնելուն դեմ եմ>>։ Ո՞ր բառը <<պահ չի մտել>> այս արտահայտության մեջ։",
		answers: [
			{ text: "Հանում", correct: true },
			{ text: "Ունդ", correct: false },
			{ text: "Գերի", correct: false },
			{ text: "Նամակ", correct: false },
		],
	},
	{
		question: "Ո՞ր տարբերակում է նշված միայն մի մարդու ազգանուն",
		answers: [
			{ text: "Գեյ-Լյուսակ", correct: true },
			{ text: "Ջոուլ—Լենց", correct: false },
			{ text: "Բոյլ-Մարիոտ", correct: false },
			{ text: "Բոլցանո-Կոշի", correct: false },
		],
	},
	{
		question: "Ո՞ր պարատեսակի հիմքում ընկած չէ տեղանուն։",
		answers: [
			{ text: "Պոլկա", correct: true },
			{ text: "Մազուրկա", correct: false },
			{ text: "Տարանտելլա", correct: false },
			{ text: "Բոստոն", correct: false },
		],
	},
	{
		question: "Հենրիկ Մալյանի լավագույն ֆիլմերից է ․․․",
		answers: [
			{ text: "<<Եռանկյունի>>-ն", correct: true },
			{ text: "<<Ուղղանկյուն>>-ը", correct: false },
			{ text: "<<Շրջանագիծ>>-ը", correct: false },
			{ text: "<<ԴոդեկաԷդր>>-ը", correct: false },
		],
	},
	{
		question: "Սեխի ծաղիկներն այդպիսին են։",
		answers: [
			{ text: "Բաժանասեռ", correct: true },
			{ text: "Դաժանասեր", correct: false },
			{ text: "Բաժակասեր", correct: false },
			{ text: "Եսասեր", correct: false },
		],
	},
	{
		question:
			"Վինի Թուխն իրեն ինչի՞ տեղ էր դրել, երբ մեղր էր փնտրում ծառի փչակում։",
		answers: [
			{ text: "Ամպի", correct: true },
			{ text: "Մեղույի", correct: false },
			{ text: "Արջի", correct: false },
			{ text: "Սկյուռի", correct: false },
		],
	},
	{
		question: "Համակարգիչն ունի այդպիսի սարքեր։",
		answers: [
			{ text: "Համալրող", correct: true },
			{ text: "Համամասնական", correct: false },
			{ text: "Համալքող", correct: false },
			{ text: "Համալռվող", correct: false },
		],
	},
	{
		question:
			"Ի՞նչն է ըստ ամերիկացի գիտնականների՝ գրասենյակային աշխատողների քնկոտության պատճառը։",
		answers: [
			{ text: "Ածխաթթու գազը", correct: true },
			{ text: "Ջրածինը", correct: false },
			{ text: "Ազոտը", correct: false },
			{ text: "Ֆոսֆորը", correct: false },
		],
	},
	{
		question: "Նշվածներից ո՞րը հականիշ զույգ չէ։",
		answers: [
			{ text: "Էժան-անվճար", correct: true },
			{ text: "Զույգ-կենտ", correct: false },
			{ text: "Գրոհել-նահանջել", correct: false },
			{ text: "Սառեցում-ջերմացում", correct: false },
		],
	},
	{
		question:
			"Տարբերակներից երեքում մեկ տառ փոխելուց կստացվի ճիշտ բառակապակցություն։ Ո՞րն Է ճիշտ գրված։",
		answers: [
			{ text: "Խաղաղ ուրան", correct: true },
			{ text: "Տեխնիկական խոպան", correct: false },
			{ text: "Թեժ որակ", correct: false },
			{ text: "Յասամանի հորան", correct: false },
		],
	},
	{
		question: "Ամենաարագաշարժ օձերից մեկը կոչվում Է ․․․",
		answers: [
			{ text: "Նետաօձ", correct: true },
			{ text: "Սպրինտեր օձ", correct: false },
			{ text: "Կայծակնաօձ", correct: false },
			{ text: "Ճեպընթաց օձ", correct: false },
		],
	},
	{
		question: "Ո՞ր բառում է առկա լատիներեն ժխտական մասնիկ",
		answers: [
			{ text: "Նոնսենս", correct: true },
			{ text: "Նոնա", correct: false },
			{ text: "Նոնան", correct: false },
			{ text: "Նոնետ", correct: false },
		],
	},
	{
		question:
			"In maxima fortuna minima licenta, այսինքն մեծ ճակատագրի մեջ ի՞նչն Է նվազագույնը",
		answers: [
			{ text: "Ազատությունը", correct: true },
			{ text: "Տառապանքը", correct: false },
			{ text: "Արտոնությունը", correct: false },
			{ text: "Խիզախությունը", correct: false },
		],
	},
	{
		question: "Ո՞րը թեթև ատլետիկայի մարզաձև չԷ",
		answers: [
			{ text: "Հնգացատկ", correct: true },
			{ text: "Տասնամարտ", correct: false },
			{ text: "Եռացատկ", correct: false },
			{ text: "Հնգամարտ", correct: false },
		],
	},
	{
		question:
			"Հայկական ասույթ․ <<Ծառը ․․․ (ի՞նչ) շատ ունենա, գլուխը կախ կգցի>>։",
		answers: [
			{ text: "Քանի բար", correct: true },
			{ text: "Քանի փայտահատ", correct: false },
			{ text: "Բերք հավաքող", correct: false },
			{ text: "Քանի վնասատու", correct: false },
		],
	},
	{
		question: "Ո՞րն Է լարային երաժշտական գործիք",
		answers: [
			{ text: "Վին", correct: true },
			{ text: "Վիգ", correct: false },
			{ text: "Վիզ", correct: false },
			{ text: "Վիկ", correct: false },
		],
	},
	{
		question: "Ի՞նչ բացականչեց Հուլիոս Կեսարը Ռուբիկոնն անցնելիս",
		answers: [
			{ text: "Վիճակը նետված է", correct: true },
			{ text: "Եկա, տեսա, հաղթեցի", correct: false },
			{ text: "Վառոդը չոր պահեք", correct: false },
			{ text: "Այսուհետ աշխարհը իմն է", correct: false },
		],
	},
];
let questionLine = document.querySelector(".ques");
let versions = document.querySelectorAll(".version");
let money = document.querySelectorAll(".money p");
let take = document.querySelector(".money h3");
let hint1 = document.querySelector(".hint1");
let hint2 = document.querySelector(".phone");
let hint3 = document.querySelector(".hallhelp");
let i = 0;
let j = 0;
let a = 0;
let stugel = 0;
let stugel1 = 0;
let animate = 0;
let arr = [];
let stugel2 = 0;
versions[0].style.display = "none";
versions[1].style.display = "none";
versions[2].style.display = "none";
versions[3].style.display = "none";

function startAgain() {
	setTimeout(() => {
		console.log(i);
		if (j < 14) {
			this.style.backgroundColor = "rgb(22, 31, 36)";
		}
		versions[0].style.backgroundColor = "rgb(22, 31, 36)";
		questionLine.innerHTML = "Start Game";
		versions[3].innerHTML = "";
		versions[2].innerHTML = "";
		versions[1].innerHTML = "";
		versions[0].innerHTML = "";
		if (j == 15) {
			alert("You Won the game");
		} else if (money.length - 1 - j < 5) {
			alert("you won 250 000");
		} else if (money.length - 1 - j >= 3 && money.length - 1 - j < 0) {
			alert("you won 32000");
		} else if (money.length - 1 - j >= 5 && money.length - 1 - j < 10) {
			alert("you won 8000");
		} else alert("You loose");
		for (let moneys of money) {
			moneys.style.backgroundColor = "";
			moneys.stylefontSize = "16px";
		}
		arr = [];
		j = 0;
		stugel = 0;
		stugel1 = 0;
		stugel2 = 0;
		hint1.style.display = "none";
		hint2.style.display = "none";
		hint3.style.display = "none";
	}, 2000);

	setTimeout(() => {
		versions[0].style.backgroundColor = "green";
	}, 1000);
	if (j < 14) {
		this.style.backgroundColor = "red";
	}
	questionLine.addEventListener("click", startGame);
	this.removeEventListener("click", startAgain);
	versions[0].style.display = "none";
	versions[1].style.display = "none";
	versions[2].style.display = "none";
	versions[3].style.display = "none";
}
function startGame() {
	if (j == 0) setNextQuestion();
	this.removeEventListener("click", startGame);
}

function setNextQuestion() {
	let min1 = 0;
	let max1 = questions.length;
	i = Math.floor(Math.random() * (max1 - min1)) + min1;
	console.log(j);
	setTimeout(function () {
		versions[0].style.backgroundColor = "rgb(22, 31, 36)";

		if (!arr.includes(i)) {
			arr.push(i);
			questionLine.innerHTML = questions[i]["question"];
			versions[0].innerHTML = questions[i]["answers"][0]["text"];
			versions[1].innerHTML = questions[i]["answers"][1]["text"];
			versions[2].innerHTML = questions[i]["answers"][2]["text"];
			versions[3].innerHTML = questions[i]["answers"][3]["text"];
			money[money.length - 1 - j].style.backgroundColor = "orange";
			money[money.length - 1 - j].style.padding = "2px";
			selectAnswer();
			if (j == 0) {
				hint1.style.display = "flex";
				hint2.style.display = "flex";
				hint3.style.display = "flex";
			}
			j++;
		} else {
			setNextQuestion();
		}
		if (j == 15) {
			startAgain();
		}
		versions[0].style.display = "flex";
		versions[1].style.display = "flex";
		versions[2].style.display = "flex";
		versions[3].style.display = "flex";
	}, 2000);
	if (j > 0) {
		versions[0].style.backgroundColor = "green";
	}
	this.removeEventListener("click", setNextQuestion);
}
function selectAnswer() {
	let max = 4;
	let min = 1;
	for (let version of versions) {
		let j = Math.floor(Math.random() * (max - min + 1)) + min;
		version.style.order = j + "";
	}
	versions[0].addEventListener("click", setNextQuestion);
	versions[1].addEventListener("click", startAgain);
	versions[2].addEventListener("click", startAgain);
	versions[3].addEventListener("click", startAgain);
}

function hint1foo() {
	let min2 = 1;
	let max2 = 3;
	let h = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
	if (h < 2 && stugel != 1 && questionLine.innerHTML != "Start Gmae") {
		stugel++;
		versions[h].innerHTML = "";
		versions[h + 2].innerHTML = "";
	} else if (h >= 2 && stugel != 1) {
		stugel++;
		versions[h].innerHTML = "";
		versions[h - 1].innerHTML = "";
	}
	this.style.display = "none";
}

function hint2foo() {
	let min2 = 1;
	let max2 = 10;
	let min3 = 0;
	let max3 = 3;
	let z = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
	let s = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
	if (versions[s].textContent == "") {
		hint2foo();
	}
	if (j < 8 && stugel1 < 1 && z <= 8) {
		alert("The right answer is " + versions[0].textContent);
	} else if (j < 8 && stugel1 < 1 && z >= 8) {
		alert("The right answer is " + versions[s].textContent);
	} else if (j >= 8 && stugel1 < 1 && z <= 6) {
		alert("The right answer is " + versions[0].textContent);
	} else if (j >= 8 && stugel1 < 1 && z > 6) {
		alert("The right answer is " + versions[s].textContent);
	}
	stugel1++;
	this.style.display = "none";
}

function hint3foo() {
	let min4;
	let max4;
	min4 = 14;
	max4 = 8;
	let z = Math.floor(Math.random() * (max4 - min4 + 1)) + min4;
	let tokos = document.createElement("span");
	let tokos1 = document.createElement("span");
	let tokos2 = document.createElement("span");
	let tokos3 = document.createElement("span");
	versions[0].appendChild(tokos);
	if (stugel2 < 1) {
		tokos.textContent = " - " + (100 / 4 + z + 3) + "%";

		versions[1].appendChild(tokos1);
		tokos1.textContent = " - " + (100 / 4 - z) + "%";

		versions[2].appendChild(tokos2);
		tokos2.textContent = " - " + (100 / 4 - z - 3) + "%";

		versions[3].appendChild(tokos3);
		tokos3.textContent = " - " + (100 / 4 + z) + "%";
	}

	tokos.style.color = "yellow";
	tokos1.style.color = "yellow";
	tokos2.style.color = "yellow";
	tokos3.style.color = "yellow";
	stugel2++;
	this.style.display = "none";
}
if (questionLine.innerHTML == "Start Game") {
	questionLine.addEventListener("click", startGame);
}

take.addEventListener("click", () => {
	if (j != 0) {
		alert("You won " + money[money.length - j + 1].innerHTML + "AMD");
	}
	j = 0;
	questionLine.innerHTML = "Start Game";
	versions[3].innerHTML = "";
	versions[2].innerHTML = "";
	versions[1].innerHTML = "";
	versions[0].innerHTML = "";
	for (let moneys of money) {
		moneys.style.backgroundColor = "";
		moneys.stylefontSize = "16px";
	}
	arr = [];
	stugel = 0;
	stugel1 = 0;
	stugel2 = 0;
});
hint1.addEventListener("click", hint1foo);
hint2.addEventListener("click", hint2foo);
hint3.addEventListener("click", hint3foo);
