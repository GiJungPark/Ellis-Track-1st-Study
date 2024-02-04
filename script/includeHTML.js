function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                elmnt.innerHTML = this.responseText;
                elmnt.removeAttribute("include-html");
                includeHTML();
            }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
        }
    }
}

// 페이지 전환 함수
function handleImageClick(destination) {
    location.href = destination;
}

function getCurrentPagePath() {
    return window.location.pathname;
}

// 현재 페이지에 따른 헤더의 Selected 함수
function applyDynamicCSS() {
    var currentPagePath = getCurrentPagePath();

    // 중고거래 페이지인 경우
    if (currentPagePath.includes('/contents/fleamarket/index.html')) {
        var button = document.getElementById('fleamarketButton');
        if (button) {
            button.classList.remove('header_menu');
            button.classList.add('header_menu_selected');
        }
    }

    // 동네 업체 페이지인 경우
    if (currentPagePath.includes('/contents/nearby-stores/index.html')) {
        var button = document.getElementById('nearbyStoresButton');
        if (button) {
            button.classList.remove('header_menu');
            button.classList.add('header_menu_selected');
        }
    }

    // 알바 페이지인 경우
    if (currentPagePath.includes('/contents/jobs/index.html')) {
        var button = document.getElementById('jobsButton');
        if (button) {
            button.classList.remove('header_menu');
            button.classList.add('header_menu_selected');
        }
    }

    // 부동산 직거래 페이지인 경우
    if (currentPagePath.includes('/contents/realty/index.html')) {
        var button = document.getElementById('realtyButton');
        if (button) {
            button.classList.remove('header_menu');
            button.classList.add('header_menu_selected');
        }
    }

    // 중고차 직거래 페이지인 경우
    if (currentPagePath.includes('/contents/car/index.html')) {
        var button = document.getElementById('carButton');
        if (button) {
            button.classList.remove('header_menu');
            button.classList.add('header_menu_selected');
        }
    }
}

window.onload = applyDynamicCSS;