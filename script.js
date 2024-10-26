function enterPlatform() {
    const nickname = document.getElementById("nickname").value;
    const gender = document.getElementById("genderSelect").value;

    if (nickname && gender) {
        // 隐藏注册页面
        document.getElementById('registration').style.display = 'none';
        // 显示平台内容
        document.getElementById('platform').style.display = 'block';
        // 显示弹窗
        document.getElementById('myModal').style.display = 'block';

        // 存储昵称到 sessionStorage
        sessionStorage.setItem('userNickname', nickname); // 存储昵称
        document.getElementById('userNickname').innerText = nickname; // 显示昵称
    } else {
        alert('请输入昵称和性别！');
    }
}

// 弹窗页面，显示昵称
window.onload = function() {
    const nickname = sessionStorage.getItem('userNickname'); // 从 sessionStorage 中获取昵称
    if (nickname) {
        document.getElementById('userNickname').innerText = nickname; // 将昵称插入到 HTML 中的特定位置
    }
};

// 页面跳转功能
function nextPage(currentPage) {
    document.getElementById('page' + currentPage).style.display = 'none';
    document.getElementById('page' + (currentPage + 1)).style.display = 'block';
}

function prevPage(currentPage) {
    document.getElementById('page' + currentPage).style.display = 'none';
    document.getElementById('page' + (currentPage - 1)).style.display = 'block';
}

// 关闭弹窗功能
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// 功能暂不可用提示
function featureUnavailable() {
    alert("该功能暂不可用。");
}


// 获取页面元素
const endBrowsingBtn = document.getElementById('endBrowsingBtn');
const endPopup = document.getElementById('endPopup');
const popupPage1 = document.getElementById('popupPage1');
const popupPage2 = document.getElementById('popupPage2');
const popupPage3 = document.getElementById('popupPage3');

// 点击结束浏览按钮时的事件处理
endBrowsingBtn.addEventListener('click', function() {
    // 显示结束弹窗
    endPopup.style.display = 'flex';
});

// 切换到第二页
function nextPopupPage() {
    popupPage1.style.display = 'none'; // 隐藏第一页
    popupPage2.style.display = 'block'; // 显示第二页
}

// 回到推荐页面继续浏览
function returnToBrowse() {
    // 隐藏弹窗并显示推荐页面内容
    endPopup.style.display = 'none'; 
    document.getElementById('platform').style.display = 'block'; 
}

// 进入第三页
function nextToThirdPage() {
    popupPage2.style.display = 'none'; // 隐藏第二页
    popupPage3.style.display = 'block'; // 显示第三页
}

// 关闭弹窗
function closePopup() {
    // 隐藏弹窗
    endPopup.style.display = 'none';
    // 刷新当前页面
    location.reload();
}