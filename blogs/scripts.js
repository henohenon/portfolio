// URLのパラメータを取得
var urlParams = new URLSearchParams(window.location.search);
var blogId = urlParams.get("blog"); // 'date'はパラメータの名前

// パラメータに基づいてMarkdownファイルのURLを作成
var mdFileUrl = "md/" + blogId + ".md";

// Markdownファイルを取得
fetch(mdFileUrl)
  .then((response) => response.text())
  .then((mdText) => {
    var marked = window.marked;
    var mdText = marked.marked(mdText);

    // 画像のパスを置き換える ./images→./md/images
    htmlText = mdText.replace(/\.\/images/g, "./md/images");

    // HTMLを描画
    document.getElementById("blog-content").innerHTML = htmlText;
  });

// mdSettings.jsonを取得
fetch("mdSettings.json")
  .then((response) => response.json())
  .then((mdSettings) => {
    // mdSettings.jsonからタイトルを取得
    var blogTitle = mdSettings[blogId].title;

    // blogTitleをblogs/index.htmlに設定
    document.getElementById("blog-title").textContent = blogTitle;
  });
