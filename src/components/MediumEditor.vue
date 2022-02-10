<template>
  <div class="editable">x</div>
</template>

<script>
import MediumEditor from "medium-editor";

export default {
  mounted() {
 new MediumEditor('.editable', {
    toolbar: {
        buttons: [
            'bold',
            'italic',
            {
                name: 'h1',
                action: 'append-h2',
                aria: 'header type 1',
                tagNames: ['h2'],
                contentDefault: '<b>H1</b>',
                classList: ['custom-class-h1'],
                attrs: {
                    'data-custom-attr': 'attr-value-h1'
                }
            },
            {
                name: 'h2',
                action: 'append-h3',
                aria: 'header type 2',
                tagNames: ['h3'],
                contentDefault: '<b>H2</b>',
                classList: ['custom-class-h2'],
                attrs: {
                    'data-custom-attr': 'attr-value-h2'
                }
            },
            'justifyCenter',
            'quote',
            'anchor'
        ]
    }
});
  },
};
</script>

<style>
.editable{
    margin-top: 3rem;
    width: 600px;
    margin-left: 3rem;
}
</style>