/**
 * @author      Daan van den Bergh
 * @package     Add Code and Next Page Buttons
 * @description Add 'code' and 'next page' buttons to Visual Editor in Wordpress
 * @copyright   (c) 2018 Daan van den Bergh
 * @url         https://dev.daanvandenbergh.com
 */
(
    function () {
        tinymce.create('tinymce.plugins.acnp_buttons', {
            init: function (ed, url) {
                ed.addButton('acnp_code', {
                    title: 'Code',
                    cmd: 'acnp_code_cmd',
                    position: 0,
                    image: url.replace('js', '') + '/images/code.png'
                });
                ed.addCommand('acnp_code_cmd', function () {
                    var selectedText = ed.selection.getContent();
                    var returnText = '<code>' + selectedText + '</code>';
                    ed.execCommand('mceInsertContent', 0, returnText);
                });
                ed.addButton('acnp_nextpage', {
                    title: 'Next Page',
                    cmd: 'acnp_nextpage_cmd',
                    image: url.replace('js', '') + '/images/next-page.png'
                });
                ed.addCommand('acnp_nextpage_cmd', function () {
                    var returnText = '<br /><br /><!--nextpage--><br /><br />';
                    ed.execCommand('mceInsertContent', 0, returnText);
                });
            },
            createControl: function (n, cm) {
                return null;
            },
            getInfo: function () {
                return {
                    longname:   'Code and Next Page Buttons for WordPress Visual Editor',
                    author:     'Daan van den Bergh',
                    version:    '1.0.0'
                };
            }
        });
        tinymce.PluginManager.add('acnp_buttons', tinymce.plugins.acnp_buttons);
    })();