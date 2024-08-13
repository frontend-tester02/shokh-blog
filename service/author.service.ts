import { IAuthor } from "@/types"
import request, { gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getAuthors = async() => {
    const query = gql `
        query MyQuery {
            authors {
                name
                bio
                image {
                url
                }
                blogs {
                id
                }
            }
        }
    `

    const {authors} = await request<{authors: IAuthor[]}>(graphqlAPI, query)

    return authors
}