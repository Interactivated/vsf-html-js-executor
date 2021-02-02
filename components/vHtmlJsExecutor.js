export default {
  name: 'vHtmlJsExecutor',
  methods: {
    vHtmlJsExecutor (refs) {
      const scripts = refs.getElementsByTagName('script')
      if (scripts.length > 0) {
        const jsCode = scripts[0].innerHTML.trim();
        /* eslint no-eval: 0 */
        eval(jsCode);
      }
    }
  }
}
