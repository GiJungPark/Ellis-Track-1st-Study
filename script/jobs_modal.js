const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal_btn');
const modalOpen2 = document.querySelector('.modal_btn2');
const modalClose = document.querySelector('.close_btn');
const body = document.querySelector('body');
let scrollPosition = 0;

//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen.addEventListener('click',function(){
    //display 속성을 block로 변경
    modal.style.display = 'block';
    scrollPosition = window.pageYOffset;
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition}px`;
      body.style.width = '100%';
});

//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen2.addEventListener('click', function () {
    modal.style.display = 'block';
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';
});


//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose.addEventListener('click',function(){
   //display 속성을 none으로 변경
    modal.style.display = 'none';
     body.style.removeProperty('overflow');
      body.style.removeProperty('position');
      body.style.removeProperty('top');
      body.style.removeProperty('width');
      window.scrollTo(0, scrollPosition);
});
