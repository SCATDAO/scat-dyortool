<template>
  <div class="css-work-quest-tew">
    <div class="css-work-quest-tex" id="editorx"></div>
  </div>
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Table from "@editorjs/table";
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Underline from "@editorjs/underline";
import TextVariantTune from "@editorjs/text-variant-tune";
import Quote from "@editorjs/quote";

import { ref } from "vue";

export default {
  props: {
    data: String,
  },
  data() {
    return {
      editor: ref([]),
      parseData: null,
    };
  },
  mounted() {
    this.parsedata();
    this.createNewEditor();
  },
  methods: {
    parsedata() {
      this.parseData = this.data;
      console.log(this.parseData)
    },

    async sendMeData() {
      return this.editor[0]
        .save()
        .then((outputData) => {
          return outputData;
        })
        .catch((error) => {
          console.log(error);
          return "Empty";
        });
    },
    createNewEditor() {
      const editor = new EditorJS({
        holder: "editorx",
        minHeight: 50,
        tunes: ["textVariant"],
        autofocus: true,
        placeholder: "Let`s write an awesome report!",
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: "Enter a header",
              levels: [2, 3, 4],
              defaultLevel: 3,
            },
            inlineToolbar: ["marker", "link"],

            shortcut: "CMD+SHIFT+H",
          },

          Marker: {
            class: Marker,
            shortcut: "CMD+SHIFT+M",
          },

          inlineCode: {
            class: InlineCode,
            shortcut: "CMD+SHIFT+M",
          },

          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },

          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "http://localhost:8008/fetchUrl", // Your backend file uploader endpoint
                byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
              },
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
          },

          underline: Underline,

          textVariant: TextVariantTune,

          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+O",
            config: {
              quotePlaceholder: "Enter a quote",
              captionPlaceholder: "Quote's source",
            },
          },
        },

        data:this.data,
      });

      this.editor.push(editor);
    },
  },
};
</script>

<style>
.css-work-quest-tew {
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
}

.css-work-quest-tex {
  background: var(--base-color-white-primary);
  word-break: break-all;
  text-align: left;
  caret-color: var(--text-color-primary);
  cursor: text;
}

.ce-block__content,
.ce-toolbar__content {
  max-width: calc(100% - 80px) !important;
}
.cdx-block {
  max-width: 100% !important;
}
</style>