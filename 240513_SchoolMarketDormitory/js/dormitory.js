//selection 3개 가져오자
const selectionItemDivs = document.getElementsByClassName("selection-item");

// 각 페이지 요소 가져오자
const calendarDiv = document.getElementById("calendar");
const selectionWashingmachineTimeDiv = document.getElementById("selection-washingmachine-time");
const selectionRoomNameDiv = document.querySelector("#selection-room-name");
const boardDiv = document.querySelector("#board");
const pageDivs = [calendarDiv, selectionWashingmachineTimeDiv, selectionRoomNameDiv, boardDiv];

// calendarDiv.style.display = "block";
// selectionWashingmachineTimeDiv.style.display = "block";
// selectionRoomNameDiv.style.display = "block";
// boardDiv.style.display = "block";

const setPage = (page) => {
    //clear selection
    for (const selectionItemDiv of selectionItemDivs) {
        selectionItemDiv.classList.remove("select");
    }
    
    //select selection
    if(selectionItemDivs.length >= page) {      //4페이지 selection은 없음
        selectionItemDivs[page-1].classList.add("select");
    } 

    //clear pages
    pageDivs.forEach(pageDiv => {
        pageDiv.style.display = "none"; //모든 페이지 안 보이게 하자
    })

    //show page
    pageDivs[page-1].style.display = "block";       //1페이지: calendar, 2페이지: swt, 3페이지: srn, 4페이지: board
}
setPage(1);