# Vue Storefront v-html js executor

v-html js executor this is component for Vue Storefront

When using data from extenal resources, e.g. Magento CMS Pages and CMS Blocks, if the content has a script sections, for execute this need use the vHtmlJsExecutor in you compoent, related to the CMS blocks/pages logic.

## Example usage

This module provides a mixin that will add router functionality to a links within v-html element.

You need to add the function in your component, passing it a reference element to which the router will work on.

For example you can create a custom component like the following:

```vue
<template>
  <div class="row center-xs">
    <div class="col-sm-3 pb15" ref="referenceElement" v-html="html"/>
  </div>
</template>

<script>
import vHtmlJsExecutor from '@interactivated/vsf-html-js-executor/components/vHtmlJsExecutor'

export default {
  name: 'CmsBlock',
  mixins: [vHtmlJsExecutor],
  data () {
    return {
      html: "<script>alert('Show me!')</script>"
    }
  },
  mounted () {
    setTimeout(() => {
      this.vHtmlJsExecutor(this.$refs.referenceElement)
    }, 2000);
  }
}
</script>
```
