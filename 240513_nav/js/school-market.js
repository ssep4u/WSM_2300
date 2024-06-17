//data.json -> js -> HTML

const setData = (data) => {
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
const getData = () => {
    const filename = 'js/data.json';
    fetch(filename)     //백엔드 있을 때는 여기에 백엔드 API URL 이 들어간다.
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
}
getData();