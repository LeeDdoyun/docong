// var list_arr = [
//     ["보호자", "공지사항 제목", "2020.02.02"],
//     ["보호자", "공지사항 제목", "2020.02.02"],
//     ["보호자", "공지사항 제목", "2020.02.02"],
//     ["보호자", "공지사항 제목", "2020.02.02"],
//     ["보호자", "공지사항 제목", "2020.02.02"],
//     ["보호자", "공지사항 제목", "2020.02.02"],
//     ["보호자", "공지사항 제목", "2020.02.02"],
//     ["보호자", "공지사항 제목", "2020.02.02"],
//     ["보호자", "공지사항 제목", "2020.02.02"],
//     ["보호자", "공지사항 제목", "2020.02.02"],

// ];
// console.log(`1차 배열 데이터의 개수 : ${list_arr.length}개`);

// var section_case = ``;
// section_case += `<div class="listcontainer">`;
// for(i = 0; i < list_arr.length; i++){  //1차 배열의 인덱스번호로 지정할 수 있는 값
//     section_case += `
//     <div class="list">
//         <span class="user">${list_arr[i][0]}</span>
//         <h3>${list_arr[i][1]}</h3>
//         <p class="cont">${list_arr[i][2]}</p>
//     </div>
//     `;
// }
// section_case += `</div>`;
// document.write(section_case);

//#1. 객체의 패턴 샘플을 정의  ==>  배열 변수명[1차 배열의 인덱스번호].속성명
// {user:"", title"", date""}
var list_obj = [
    {user:"보호자", title:"공지사항 제목", date:"2024.02.02"},
    {user:"보호자", title:"공지사항 제목", date:"2024.02.02"},
    {user:"보호자", title:"공지사항 제목", date:"2024.02.02"},
    {user:"보호자", title:"공지사항 제목", date:"2024.02.02"},
    {user:"보호자", title:"공지사항 제목", date:"2024.02.02"},
    {user:"보호자", title:"공지사항 제목", date:"2024.02.02"},
    {user:"보호자", title:"공지사항 제목", date:"2024.02.02"},
    {user:"보호자", title:"공지사항 제목", date:"2024.02.02"},
    {user:"보호자", title:"공지사항 제목", date:"2024.02.02"},
    {user:"보호자", title:"공지사항 제목 마지막 노출 테스트", date:"2024.02.02"},
];
console.log(document.querySelector('.listcontainer'));
//#2. 구조를 구성하고 내부에 데이터를 담는다.
var bongdari = ``;
for(i = 0; i < list_obj.length; i++){
    bongdari += `
        <li class="list">
            <span class="user">${list_obj[i].user}</span>
            <h3>${list_obj[i].title}</h3>
            <p class="date">${list_obj[i].date}</p>
        </li>
    `;
}
console.log(bongdari);
document.querySelector('.listcontainer').innerHTML = bongdari;

// 메뉴
document.querySelector('.menu-button').addEventListener('click', function() {
    console.log('active');
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        
        document.querySelector('.mo_menu').classList.remove('open');
        document.querySelector('.mo_background').classList.remove('open');
    } else {
        this.classList.add('active');
        
        document.querySelector('.mo_menu').classList.add('open');
        document.querySelector('.mo_background').classList.add('open');
    }
});


