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

const endBrowsingBtn = document.getElementById('endBrowsingBtn');
const endPopup = document.getElementById('endPopup');
const closePopupBtn = document.getElementById('closePopupBtn');

// 点击结束浏览按钮时的事件处理
endBrowsingBtn.addEventListener('click', function() {
    // 弹出确认对话框
    const userChoice = confirm('您已发现平台用户的分享偏好了吗？确定要结束浏览吗？');
    
    // 如果用户选择确定，显示结束弹窗
    if (userChoice) {
        endPopup.style.display = 'flex';
    } else {
        // 如果用户选择取消，继续浏览，无需处理
    }
});

// 关闭弹窗按钮的事件处理
closePopupBtn.addEventListener('click', function() {
    // 隐藏弹窗
    endPopup.style.display = 'none';
    // 刷新当前页面
    location.reload();
});

