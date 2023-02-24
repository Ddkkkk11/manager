import React from 'react';
// @ts-ignore
import GridManager, { $gridManager } from 'gridmanager/react';
import 'gridmanager/index.css';
import './style.less';

$gridManager.defaultOption = {
    width: '100%',
    height: '100%',
    i18n: 'en-us',
    supportRemind: false,
    supportAjaxPage: true,
    disableCache: false,
    useCellFocus: true,
    sortDownText: '-1',
    sortUpText: '1',
    sortKey: 'sort',
    mergeSort: true,
    // isCombSorting: true,
    // supportAdjust: true,
    // supportDrag: false,
    // supportAutoOrder: false,
    supportCheckbox: false,
    disableLine: true,
    totalsKey: 'total',
    currentPageKey: 'page_index',
    pageSizeKey: 'page_size',
    skinClassName: 'ant-skin',
    supportMenu: true,
    textConfig: {
        'order-text': {
            'zh-cn': '序号',
            'zh-tw': '序號',
            'en-us': 'Order'
        }
    },
    emptyTemplate: () => {
        return '<div class="gm-emptyTemplate" style="text-align: center">No Data</div>';
    },
    // configInfo: '自定义字段可在列表拖拽调整排序',
    ajaxPageTemplate: `<div class="footer-toolbar" grid-manager-toolbar="{{vm.gridManagerName}}">
    <div class="ajax-page">
        <ul class="pagination" pagination-before>
            <li class="previous-page">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
            </li>
        </ul>

        <ul pagination-number></ul>
        <ul class="pagination" pagination-after>
            <li class="next-page">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
            </li>
        </ul>
        <div class="change-size">
            {{ vm.pageSizeOptionTpl }}
        </div>
    </div>
</div>`
};
export default GridManager;

