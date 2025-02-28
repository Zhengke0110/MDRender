  <template>
    <div class="markdown-content">
      <div v-html="renderedContent"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watchEffect } from 'vue';
  import { marked } from 'marked';
  import Mermaid from '../Mermaid/Mermaid.vue';
  import { createApp, h } from 'vue';
  
  const props = defineProps<{
    content: string;
  }>();
  
  const renderedContent = ref();
  
  // Custom renderer for mermaid code blocks
  const customRenderer = {
    code(this: any, { text, lang }: { text: string; lang?: string }) {
      if (lang === 'mermaid') {
        // Generate a placeholder div that will be replaced with the mermaid component
        const id = `mermaid-placeholder-${Math.random().toString(36).substring(2, 10)}`;
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            // Mount Mermaid component in place of the placeholder
            const app = createApp({
              render: () => h(Mermaid, { code: text })
            });
            app.mount(el);
          }
        }, 0);
        return `<div id="${id}"></div>`;
      }
      // Default code rendering for non-mermaid blocks
      return false; // Let marked handle it
    }
  };
  
  watchEffect(() => {
    // Configure marked to use our custom renderer
    marked.use({ renderer: customRenderer });
    
    // Render the markdown content
    renderedContent.value = marked(props.content);
  });
  </script>
  
  <style scoped>
  .markdown-content {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  .markdown-content :deep(h1),
  .markdown-content :deep(h2),
  .markdown-content :deep(h3),
  .markdown-content :deep(h4),
  .markdown-content :deep(h5),
  .markdown-content :deep(h6) {
    font-weight: 600;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  
  .markdown-content :deep(p) {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  
  .markdown-content :deep(pre) {
    background-color: #f6f8fa;
    border-radius: 3px;
    padding: 16px;
    overflow: auto;
  }
  
  .markdown-content :deep(code) {
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    background-color: rgba(27, 31, 35, 0.05);
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }
  </style>