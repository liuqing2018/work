/**
 * Created by Administrator on 2018/6/12.
 */
import Vue from 'vue';
const drag = Vue.directive('drag', {
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind (el, binding, vnode, oldVnode) {
        let oDrag = el;
        oDrag.onmousedown = function (e) {
            // 鼠标按下，计算当前元素距离可视区的距离
            let disX = e.clientX - oDrag.offsetLeft;
            let disY = e.clientY - oDrag.offsetTop;

            document.onmousemove = function (e) {
                let l = e.clientX - disX;
                let t = e.clientY - disY;

                console.log('e.clientX : ' + oDrag.offsetLeft);
                console.log('left : ' + l);
                console.log('top : ' + t);
                oDrag.style.left = l + 'px';
                oDrag.style.top = t + 'px';
                binding.value({x: e.pageX, y: e.pageY});
            };

            document.onmouseup = function (e) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    },

    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
    inserted (el) {
        console.log(el);
    },

    update () {
        console.log('update......');
    },

    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated () {

    },

    // 只调用一次，指令与元素解绑时调用
    unbind () {

    }
});

export default drag;
