/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
// @ts-ignore
import BlogMDX from "../sections/blog"

const Blog = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
<div>
<Divider speed={0.1} offset={offset} factor={factor}>
    <Inner>
    <Content speed={0.4} offset={offset} factor={factor}>
        {BlogMDX} 
        </Content>
    </Inner>
</Divider>

</div>)

export default Blog