path = window.location.href
isInSupport = (path.search('support') + path.search('collection') + path.search('articles') ) > 0
isInFr = path.search('/fr/') != -1
isInRu = path.search('/ru/') != -1
isInKo = path.search('/ko/') != -1
isInDe = path.search('/de/') != -1
isInJa = path.search('/ja/') != -1

let content; 

if ( isInSupport)
    content = document.querySelector('body');
else 
    content = document.querySelector('.page-wrapper');


let jaText = `
<p>これは非公式なものであり、コミュニティ主導の翻訳であるため、誤解を招いたり、不正確であったりする可能性があります。英語の公式コンテンツについては、 <a href="https://eco.com">Eco.com</a> をご覧ください。<br>
</p>
<p>誤解を招くような内容、間違った内容、不足している内容を見つけ、貢献したいと思われる方は、
    <a href="https://github.com/eco-community/website-translations">The Eco community github</a>をご覧ください。
</p>
`;

let enText = `
<p>This is an <b>unofficial</b> and <b>community-driven</b> translation can be misleading or incorrect. For the <b>official</b> content in English, please visit <a href="https://eco.com">Eco.com</a><br>
</p>
<p>If you find misleading, incorrect, or missing content and you want to contribute, please visit <a href="https://github.com/eco-community/website-translations">The Eco community github</a>
</p>
`;

let deText = `
<p>Dies ist eine <b>inoffizielle</b> und von der <b>Community gesteuerte</b> Übersetzung, die irreführend oder falsch sein kann. Für den <b>offiziellen</b> Inhalt in englischer Sprache besuche bitte <a href="https://eco.com">Eco.com</a><br>
</p>
<p>Wenn du irreführende, falsche oder fehlende Inhalte findest und diese korrigieren möchtest, besuche bitte <a href="https://github.com/eco-community/website-translations">The Eco community github</a>
</p>
`;

let koText = `
<p>This is an <b>unofficial</b> and <b>community-driven</b> translation can be misleading or incorrect. For the <b>official</b> content in English, please visit <a href="https://eco.com">Eco.com</a><br>
</p>
<p>If you find misleading, incorrect, or missing content and you want to contribute, please visit <a href="https://github.com/eco-community/website-translations">The Eco community github</a>
</p>
`;
let ruText = `
<p>This is an <b>unofficial</b> and <b>community-driven</b> translation can be misleading or incorrect. For the <b>official</b> content in English, please visit <a href="https://eco.com">Eco.com</a><br>
</p>
<p>If you find misleading, incorrect, or missing content and you want to contribute, please visit <a href="https://github.com/eco-community/website-translations">The Eco community github</a>
</p>
`;

let frText = `
<p> Cette traduction <b> non-officielle</b> réalisée par la communauté peut être incorrecte. Pour avoir accés au site <b>officiel</b> en Anglais, visitez <a href="https://eco.com">Eco.com</a><br>
</p>
<p>Si vous trouvez de mauvaises traductions,ou contenue manquant et que vous voulez contribuer, vous pouvez visiter  <a href="https://github.com/eco-community/website-translations">The Eco community github</a>
</p>
`;

let headerText;

if ( isInFr) headerText = frText;
else if ( isInRu) headerText = ruText;
else if ( isInKo) headerText = koText;
else if ( isInDe) headerText = deText;
else if ( isInJa) headerText = jaText;

else headerText = enText;


let warningContainer = document.createElement('div');
warningContainer.innerHTML = `  
<div id="disclaimer-header" style="
            background-color: red;
            color: white;
            text-align: center;
            font-size: 16px;
            padding: 25px;
            width: 100%;
            z-index: 99999;
            width: 100%;
">
${headerText}
    
</div>
`;
content.insertBefore(warningContainer, content.firstChild);

if ( ! isInSupport)
content.style.paddingTop = '116px'; 

