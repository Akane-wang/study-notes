# z-index显示不全问题
<header>
    <div></div>
</header>
<footer>
    <div>
        <img style="z-index：20；position：XXX">
    </div>
</footer>
- 如果z-index设置到9999+都没用的话，要考虑的问题是可能外层给挡了。因为浏览器去判断z-index的显示是从外而内，如果footer的z-index=0；img设置再大都没用。
- 因此，要设置外层的z-idnex=XXX，并且不要忘了position，因为z-index起作用是依靠position的。

# position:absolute定位：
- position：absolute绝对定位是相对其父元素的position：relative去定位的。

# box-sizing

作用：用于实现阴影

- 概述属性语法：
    box-shadow：none | &#60;shadow&#62;[,&#60;shadow&#62;]*
  - 默认值为：none
        &#60;shadow&#62;：inset?&&&#60;length&#62;{2,4}&&&#60;color&#62;?
        shadow pattern: 默认outset，即采用outer box-shadow。通过设置为inset时，则采用inner box-shadow.
        horizontal offset: 阴影距离原位置的水平位移，正数表示向右移动，负数表示向左移动。
        vertical offset：阴影距离原位置的垂直位移，正数表示向下移动，负数表示向上移动。
        blur radius:默认值为0，阴影模糊度半径。
        spread distance：默认值为0，扩展或缩小阴影的作用面积。
        color：阴影颜色，默认与color属性一致。
  - outer-box-shadow && inner-box-shadow
      创建一个与元素border-box尺寸一致的阴影盒子
      将阴影盒子定位到元素border-box重合，并位于元素之下
      根据horizontal和vertical来相对原位置做移动
      根据spread distance缩放阴影盒子的尺寸（会影响盒子的位移）
      根据blur radius对阴影盒子做加工
      最后将阴影盒子与元素border box重合的部分剪切掉
    - margin->background-color->background-image->padding->border->content
      - 对于outer-box-shadow：z-index高于margin图层，低于background-color图层。
      - 对于inner-box-shadow：则z-index高于padding图层，低于content图层。
- 阴影的position
  - 阴影盒子不影响其他盒子的布局。因此修改阴影位置或尺寸时，只会触发repaint（重绘），而不会触发reflow（回流）。

# transform: translate();