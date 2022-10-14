function getArticleGenerator(articles) {
    return ()=>{
        let article = document.createElement("article");
        if (articles.length === 0)
            return
        article.textContent = articles.shift();
        document.getElementById("content").appendChild(article)
    }
}
