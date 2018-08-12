class MVVM {
  constructor(options) {
    // 把可用的东西挂载在实例上
    this.$el = options.el;
    this.$data = options.data;
    // 如果有要编译的模板我就开始编译
    if(this.$el) {
      // 用数据和元素进行编译
      new Compile(this.$el, this);
    }
  }
}