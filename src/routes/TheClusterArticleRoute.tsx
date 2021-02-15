import React from "react";
import TheClusterArticle from "../the-cluster-article/TheClusterArticle";
import "../article.css";

const TheClusterArticleRoute = (): JSX.Element => {
    return (
        <div className="article-wrapper">
            <div className="article-body">
                <TheClusterArticle />
            </div>
        </div>
    );
};

export default TheClusterArticleRoute;
