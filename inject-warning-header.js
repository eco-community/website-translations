let body = document.querySelector('body');


let warningContainer = document.createElement('div');
warningContainer.innerHTML = `  
<div style="
            background-color: red;
            color: white;
            text-align: center;
            font-size: 16px;
            padding: 25px;
            width: 100%;
            z-index: 50000;
">
    <p>This is an <b>unofficial</b>, community-driven proposal translation for the website https://eco.com. Translation here can be misleading or incorrect.<br>
        If you find a missing or incorrect translation and want to contribute go check : https://github.com/eco-translations/eco-translations.github.io
    </p>
    <p>For <b>official</b> information, please <b>go to <a href="https://eco.com">https://eco.com</a> </b> </p>
</div>
`;
body.insertBefore(warningContainer, body.firstChild);