import React from "react";
import "./articles.css";
import TheClusterArticle from "../../components/the-cluster-article/TheClusterArticle";

const ArticlesRoute = (): JSX.Element => {
    return (
        <div className="articles-wrapper">
            <TheClusterArticle />
        </div>
    );
};

export default ArticlesRoute;
