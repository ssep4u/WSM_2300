// 현재 날짜 구하자
currentDate = new Date();

// HTML -> js 변수 가져오자 #calendar-header h1
const calendarHeader = document.getElementById("calendar-header");
const calendarHeaderH1 = calendarHeader.getElementsByTagName("h1")[0];
// const calendarHeaderH1 = document.querySelector("#calendar-header h1");

const calendarContainerDiv = document.querySelector("#calendar-container");



// 이전/다음 버튼 클릭했을 때, 이전달/다음달로 변경하자
// HTML -> js변수
// click event 발생했을 때, 해야할 일 정하자
const prevMonthButton = document.getElementById("prev-month");
// prevMonthButton.addEventListener("click", console.log("이전")); //리턴값이 undefined => 클릭했을 때, 가만히 있으라
prevMonthButton.addEventListener("click", () => changeMonth(-1));
// function 출력해() {
//     return console.log("이전");
// }
const nextMonthButton = document.querySelector("#next-month");
nextMonthButton.onclick = () => changeMonth(1);

//diff: -1: 이전 달, 0: 현재 달, 1: 다음 달
const changeMonth = (diff) => {
    currentDate.setMonth(currentDate.getMonth() + diff);
    // 년 구하자
    const year = currentDate.getFullYear();
    // 월 구하자
    const month = currentDate.getMonth();   //1월: 0, 9월: 8
    // 제목 바꾸자
    //console.log(`${year}년  ${month + 1}월`);

    // js 변수에 innerHTML = `${year}년 ${month + 1}월`
    calendarHeaderH1.innerHTML = `<i>${year}년 ${month + 1}월</i>`;
    // 달력 새로 그리자
    setCalendar(currentDate);
}

const setCalendar = (date) => {
    //현재년
    const year = date.getFullYear();
    //현재월
    const month = date.getMonth();

    //이번 달 마지막 날짜
    const lastDate = new Date(year, month + 1, 0);  //다음 달 1일의 전날 => 현재년, 현재월 + 1, 1 - 1
    const lastDateDate = lastDate.getDate();
    //이번 달 마지막 날짜의 요일
    const lastDay = lastDate.getDay();      //요일
    //이번 달 마지막 날짜
    const prevMonthLastDate = new Date(year, month, 0); //이번 달 1일의 전 날
    const prevMonthLastDateDate = prevMonthLastDate.getDate();
    //이번 달 첫날의 요일
    const firstDay = new Date(year, month, 1).getDay();


    // let weekNameString = `<div class="item week-name">일</div>
    //         <div class="item week-name">월</div>
    //         <div class="item week-name">화</div>
    //         <div class="item week-name">수</div>
    //         <div class="item week-name">목</div>
    //         <div class="item week-name">금</div>
    //         <div class="item week-name">토</div>`;
    // calendarContainerDiv.innerHTML = weekNameString;

    let weekNameString = "";
    const weekNames = "일월화수목금토"; //-> ["일", "월", "화", "수", "목", "금", "토"]
    const weekNamesArray = weekNames.split(""); //["일", "월", "화", "수", "목", "금", "토"]
    weekNamesArray.forEach((weekName) => {
        weekNameString += `<div class="item week-name">${weekName}</div>`;
    });

    calendarContainerDiv.innerHTML = weekNameString;

    //이전 달의 뒷날짜 표시하자(?~이전 달 마지막 날짜 ?: 이전 달 마지막 날짜-이번 달 첫날의 요일+1)
    for (let date = prevMonthLastDateDate - firstDay + 1; date <= prevMonthLastDateDate; date++) {
        let currentMonthDateDiv = document.createElement("div");    //<div></div>
        currentMonthDateDiv.className = "item other-month";         //<div class="item other-month"></div>
        currentMonthDateDiv.textContent = date;                     //<div class="item other-month">날짜</div>
        calendarContainerDiv.appendChild(currentMonthDateDiv);      //<div id="calendar-container"><div class="item other-month">날짜</div></div>
    }

    //이번 달의 모든 날짜 표시하자(1~이번 달 마지막 날짜)
    for (let date = 1; date <= lastDateDate; date++) {
        let currentMonthDateDiv = document.createElement("div");    //<div></div>
        currentMonthDateDiv.className = "item";                     //<div class="item"></div>
        currentMonthDateDiv.textContent = date;                     //<div class="item">날짜</div>
        calendarContainerDiv.appendChild(currentMonthDateDiv);      //<div id="calendar-container"><div class="item">날짜</div></div>
    }

    //다음 달의 앞날짜 표시하자(1~? ?: 6-이번 달 마지막 날짜의 요일)
    for (let date = 1; date <= 6 - lastDay; date++) {
        let currentMonthDateDiv = document.createElement("div");    //<div></div>
        currentMonthDateDiv.className = "item other-month";         //<div class="item other-month"></div>
        currentMonthDateDiv.textContent = date;                     //<div class="item other-month">날짜</div>
        calendarContainerDiv.appendChild(currentMonthDateDiv);      //<div id="calendar-container"><div class="item other-month">날짜</div></div>
    }
}


changeMonth(0);     //현재 달 출력하자
setCalendar(currentDate);   //현재 달의 달력 보여주자