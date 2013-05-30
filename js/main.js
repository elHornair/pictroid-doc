/*global window, document */

var docModule = (function (docModule, document) {

    "use strict";

    var createTocElement = function (title, href) {
            var wrapper,
                anchor;

            wrapper = document.createElement('li');
            anchor = document.createElement('a');

            anchor.appendChild(document.createTextNode(title));
            anchor.setAttribute('href', href);
            wrapper.appendChild(anchor);

            return wrapper;
        },

        generateTOC = function () {
            var tocContainer = document.getElementById('toc'),
                mainChapters = document.getElementById('content').getElementsByTagName('h1'),
                subChapters,
                tocChapter,
                tocSubChapterList,
                tocSubChapter,
                id,
                i,
                j;

            // loop through main chapters
            for (i = 0; i < mainChapters.length; i++) {
                id = 'chapter-' + i;
                subChapters = mainChapters[i].parentNode.getElementsByTagName('h2');

                tocChapter = createTocElement(mainChapters[i].innerHTML, '#' + id);
                mainChapters[i].setAttribute('id', id);// set id of target element, so we can link to it
                tocSubChapterList = document.createElement('ol');

                // loop through subchapters
                for (j = 0; j < subChapters.length; j++) {
                    id = 'chapter-' + i + '-' + j;
                    tocSubChapter = createTocElement(subChapters[j].innerHTML, '#' + id);
                    subChapters[j].setAttribute('id', id);// set id of target element, so we can link to it
                    tocSubChapterList.appendChild(tocSubChapter);
                }

                tocChapter.appendChild(tocSubChapterList);
                tocContainer.appendChild(tocChapter);
            }
        },

        createSourceElement = function (content) {
            var wrapper = document.createElement('li');
            wrapper.appendChild(document.createTextNode(content));

            return wrapper;
        },

        generateSourceCatalog = function () {
            var i,
                catalogContainer = document.getElementById('sourceCatalog'),
                sources = document.getElementById('content').getElementsByClassName('source'),
                content,
                nodeToHide;

            for (i = 0; i < sources.length; i++) {
                content = sources[i].innerHTML;

                // strip tags with "less" class
                nodeToHide = sources[i].getElementsByClassName('less')[0];
                if (nodeToHide) {
                    content = content.replace(new RegExp(nodeToHide.innerHTML, 'ig'), '');
                }

                content = content.replace(/(<([^>]+)>)/ig, '');// strip tags
                catalogContainer.appendChild(createSourceElement(content));
            }
        };

    docModule.init = function () {
        generateTOC();
        generateSourceCatalog();
    };

    return docModule;
}({}, document));

window.onload = docModule.init;