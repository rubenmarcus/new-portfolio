

<template>
  <Layout>
    <p>Articles:</p>
    <ul>
      <li v-for="{ node } in $page.posts.edges" :key="node.id">
  <p v-html="richtextToHTML(node.contentText)"></p>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allContentfulPage {
    edges {
      node {
        id,
        contentText,
      }
    }
  }
}
</page-query>

<script>

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  methods: {
    richtextToHTML (content) {
      return documentToHtmlString(content)
    }
  }
}
</script>