import { IBlog } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogsByTags = async (slug:string) => {
    const query = gql`
        query MyQuery {
            blogs {
                title
                createdAt
                author {
                name
                image {
                    url
                }
                }
                category {
                name
                slug
                }
                description
                tag {
                name
                slug
                }
                image {
                url
                }
                content {
                html
                }
                slug
            }
        }
    `

    const {blogs} = await request<{blogs: IBlog[]}>(graphqlAPI, query)

    return blogs
}
