function createTocElement(title, href) {
    var wrapper,
        anchor;

    wrapper = document.createElement('li');
    anchor = document.createElement('a');

    anchor.appendChild(document.createTextNode(title));
    anchor.setAttribute('href', href);
    wrapper.appendChild(anchor);

    return wrapper;
}

function generateTOC() {
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
}

function init() {
    generateTOC();
}

window.onload = init;