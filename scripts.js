// パラメータに基づいてリンクのリストを自動生成
var blogList = document.getElementById('blog-list');
var mdSettings = {}; // mdSettings.jsonから取得したデータ
fetch('blogs/mdSettings.json')
    .then(response => response.json())
    .then(data => {
        mdSettings = data;
        for (var key in mdSettings) {
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.href = 'blogs/?blog=' + key;
            link.textContent = mdSettings[key].title;
            listItem.appendChild(link);
            blogList.appendChild(listItem);
        }
    });