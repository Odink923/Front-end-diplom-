import React from 'react';
import LogoBlog from "./components/LogoBlog/LogoBlog";
import ToKnowBlock from "./components/ToKnowBlock/ToKnowBlock";
import ToKnowBlockOther from "./components/ToKnowBlockOther/ToKnowBlockOther";

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