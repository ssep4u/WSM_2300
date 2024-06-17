let allData;

//data.json -> js -> HTML
const showData = (data) => {
    let productContainerString = "";
    //data들 하나씩 꺼내서
    data.forEach(element => {
        //article 만들어서
        let articleString = `<article class="product-item">
            <img src="images/${element.image}" alt="">
                <div class="name">${element.name}</div>
        </article>\n`;
        productContainerString += articleString;
    });
    //.product-container 추가
    const productContainerDiv = document.getElementsByClassName("product-container")[0];
    // const productContainerDiv = document.querySelectorAll(".product-container")[0];
    productContainerDiv.innerHTML = productContainerString;
}
const setData = (data) => {
    allData = data;     //처음 한번 전체 data 보관하자
    showData(data);
}
const getData = () => {
    const filename = 'js/data.json';
    fetch(filename)     //백엔드 있을 때는 여기에 백엔드 API URL 이 들어간다.
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
}
getData();

const searchData = (query) => {
    if (query === "") showData(allData);        //아무 것도 입력하지 않으면, 전체 data 보여주자
    //전체 data에서 하나 꺼내어 name에 query가 있는지 확인하자
    let data = allData.filter((oneData) => oneData["name"].includes(query) || oneData["category"].includes(query));
    showData(data);
}