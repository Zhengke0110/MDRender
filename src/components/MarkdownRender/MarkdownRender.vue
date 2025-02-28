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
  const mermaidBlocks = ref<{id: string, code: string}[]>([]);
  
  // Custom renderer for mermaid code blocks
  const customRenderer = {
    code(this: any, { text, lang }: { text: string; lang?: string }) {
      if (lang === 'mermaid') {
        // Generate a placeholder div that will be replaced with the mermaid component
        const id = `mermaid-placeholder-${Math.random().toString(36).substring(2, 15)}`;
        // Store the mermaid code block for later mounting
        mermaidBlocks.value.push({ id, code: text });
        return `<div id="${id}"></div>`;
      }
      // Default code rendering for non-mermaid blocks
      return false; // Let marked handle it
    }
  };
  
  // Mount mermaid components sequentially to avoid race conditions
  const mountMermaidComponents = () => {
    // Clear previous mounts first
    mermaidBlocks.value.forEach(block => {
      const existingApp = document.getElementById(block.id)?.querySelector('[data-v-app]');
      if (existingApp) {
        existingApp.remove();
      }
    });
  
    // Mount components with a small delay between each
    mermaidBlocks.value.forEach((block, index) => {
      setTimeout(() => {
        const el = document.getElementById(block.id);
        if (el) {
          const app = createApp({
            render: () => h(Mermaid, { code: block.code })
          });
          app.mount(el);
        }
      }, index * 50); // Add small delay between mounts
    });
  };
  
  watchEffect(() => {
    // Reset mermaid blocks when content changes
    mermaidBlocks.value = [];
    
    // Configure marked to use our custom renderer
    marked.use({ renderer: customRenderer });
    
    // Render the markdown content
    renderedContent.value = marked(props.content);
    
    // Mount mermaid components after content is rendered
    setTimeout(mountMermaidComponents, 50);
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