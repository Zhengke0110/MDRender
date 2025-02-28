<template>
  <div class="mermaid-container">
    <div class="mermaid-toolbar">
      <button @click="copySourceCode" class="tool-button" title="复制源码">
        <span>复制</span>
      </button>
      <button @click="exportAsPNG" class="tool-button" title="导出为PNG">
        <span>导出PNG</span>
      </button>
      <button @click="exportAsJPG" class="tool-button" title="导出为JPG">
        <span>导出JPG</span>
      </button>
    </div>
    <div :id="diagramId" class="mermaid">{{ code }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import mermaid from 'mermaid';
import { v4 as uuidv4 } from 'uuid';
import { toPng, toJpeg } from 'html-to-image'; 

const props = defineProps<{
  code: string;
}>();

const diagramId = ref(`mermaid-${uuidv4()}`);

const renderDiagram = async () => {
  try {
    // Clear existing content
    const element = document.getElementById(diagramId.value);
    if (element) {
      element.innerHTML = props.code;
      
      // Initialize and render mermaid diagram
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose'
      });
      
      await mermaid.run({
        nodes: [document.getElementById(diagramId.value)!]
      });
    }
  } catch (error) {
    console.error('Failed to render mermaid diagram:', error);
    const element = document.getElementById(diagramId.value);
    if (element) {
      element.innerHTML = `<pre class="error">渲染错误: ${error}</pre>`;
    }
  }
};

const copySourceCode = () => {
  navigator.clipboard.writeText(props.code)
    .then(() => {
      alert('已复制到剪贴板');
    })
    .catch((err) => {
      console.error('复制失败:', err);
      alert('复制失败');
    });
};

const exportAsPNG = async () => {
  const element = document.getElementById(diagramId.value);
  if (!element) return;
  
  try {
    const dataUrl = await toPng(element, { 
      pixelRatio: window.devicePixelRatio || 2,
      backgroundColor: '#ffffff',
      quality: 1.0
    });
    
    const a = document.createElement('a');
    a.download = `diagram-${Date.now()}.png`;
    a.href = dataUrl;
    a.click();
  } catch (error) {
    console.error('导出PNG失败:', error);
    alert('导出PNG失败');
  }
};

const exportAsJPG = async () => {
  const element = document.getElementById(diagramId.value);
  if (!element) return;
  
  try {
    const dataUrl = await toJpeg(element, { 
      pixelRatio: window.devicePixelRatio || 2,
      backgroundColor: '#ffffff',
      quality: 1.0
    });
    
    const a = document.createElement('a');
    a.download = `diagram-${Date.now()}.jpg`;
    a.href = dataUrl;
    a.click();
  } catch (error) {
    console.error('导出JPG失败:', error);
    alert('导出JPG失败');
  }
};


onMounted(() => {
  renderDiagram();
});

// Re-render when code changes
watch(() => props.code, () => {
  renderDiagram();
});
</script>

<style scoped>
.mermaid-container {
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 16px;
  margin: 16px 0;
  background-color: #f9f9f9;
}

.mermaid-toolbar {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.mermaid-container:hover .mermaid-toolbar {
  opacity: 1;
}

.tool-button {
  background-color: #f0f0f0;
  border: 1px solid #d0d0d0;
  border-radius: 3px;
  padding: 3px 6px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.tool-button:hover {
  background-color: #e0e0e0;
}

.mermaid {
  min-height: 50px;
}

.error {
  color: red;
  font-family: monospace;
}
</style>