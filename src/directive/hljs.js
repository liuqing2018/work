/**
 * Created by Administrator on 2018/6/13.
 */
import Vue from 'vue';
import highlight from 'highlight.js';
// import 'highlight.js/styles/arduino-light.css'; // 白底 + 橙色
// import 'highlight.js/styles/atelier-cave-light.css'; // 灰底 + 橙色
// import 'highlight.js/styles/atelier-lakeside-light.css'; // 湖蓝 + 橙色
// import 'highlight.js/styles/atelier-dune-light.css'; // 浅橙底 + 橙色
// import 'highlight.js/styles/monokai-sublime.css'; // sublime
import 'highlight.js/styles/atelier-forest-light.css';

const hljs = Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    Array.from(blocks).forEach((block) => {
        highlight.highlightBlock(block);
    });
});

export default hljs;
