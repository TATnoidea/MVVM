class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    if(this.el) {
      // 如果这个元素能获取到我们才开始编译
      // 1.先把这些真实的DOM一如内存中
      let fragment = this.node2fragment(this.$el);
      // 2.编译 => 提取想要的元素节点v-model和文本节点{{}}
      this.compile(fragment);
      // 3.把编译好的fragment在塞回页面里面去
      this.el.appendChild(fragment);
    }
  }

  isElementNode(node) {
    return node.nodeType === 1;
  }

  compileElement(node) {}
  compileText(node) {}
  compile(fragment) {}
  node2fragment(el) {}
}