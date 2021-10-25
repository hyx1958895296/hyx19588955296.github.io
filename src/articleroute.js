import article1 from './article/1.html';
import article2 from './article/2.html';
import article3 from './article/3.html';
import article4 from './article/4.html';
import article5 from './article/5.html';

function parseHTML(text) {
    let el = document.createElement('div');
    el.innerHTML = text;
    return el.querySelector('template').content;
}

export default [{
        id: 1,
        article: parseHTML(article1),
        text: parseHTML(article1),
    },
    {
        id: 2,
        article: parseHTML(article2),
        text: parseStr(parseHTML(article2)),
    },
    {
        id: 3,
        article: parseHTML(article3),
        text: parseStr(parseHTML(article3)),
    },
    {
        id: 4,
        article: parseHTML(article4),
        text: parseStr(parseHTML(article4)),
    },
    {
        id: 5,
        article: parseHTML(article5),
        text: parseStr(parseHTML(article5)),
    },
]