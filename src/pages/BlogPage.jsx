import React from 'react';
import LogoBlog from "../components/blogpage/LogoBlog/LogoBlog";
import ToKnowBlock from "../components/blogpage/ToKnowBlock/ToKnowBlock";
import ToKnowBlockOther from "../components/blogpage/ToKnowBlockOther/ToKnowBlockOther";

const BlogPage = () => {
    return (
        <div>
            <LogoBlog></LogoBlog>
            <ToKnowBlock></ToKnowBlock>
            <ToKnowBlockOther></ToKnowBlockOther>

        </div>
    );
};

export default BlogPage;