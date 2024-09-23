// 이전/다음 버튼 클릭하면 이전달/다음달로 변경하자

// 현재 날짜 구하자
currentDate = new Date();

// 년 구하자
const year = currentDate.getFullYear();
// 월 구하자
const month = currentDate.getMonth();   //1월: 0, 9월: 8

// 제목 표시하자
// HTML -> js 변수 가져오자 #calendar-header h1
const calendarHeader = document.getElementById("calendar-header");
const calendarHeaderH1 = calendarHeader.getElementsByTagName("h1")[0];
// const calendarHeaderH1 = document.querySelector("#calendar-header h1");

// js 변수에 innerHTML = `${year}년 ${month + 1}월`
calendarHeaderH1.innerHTML = `<i>${year}년 ${month + 1}월</i>`;

console.log(`${year}년 ${month + 1}월`);


    