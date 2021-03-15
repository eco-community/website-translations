# What's 'eco-translations'?

These are community-driven proposals for the Eco.com website, the translations are made by the Eco community. These are the already submitted languages:

[Korean](https://eco-community.github.io/website-translations/ko/)  
[Russian](https://eco-community.github.io/website-translations/ru/)  
[French](https://eco-community.github.io/website-translations/fr/)  
[Portuguese (Portugal)](https://eco-community.github.io/website-translations/pt-PT/)  


# How can you be involved?

Some ways for you to be involved are to find a broken link and fix it, suggest better translations, make translations to a language that is not available yet, or give your feedback and let the community know how to improve the workflow.

Here's a list of who's contributed to each translation:

| Languages | Maintainers (discord's username) | Status  
| ------------- |:-------------:| -----: |
Korean | @billionaireW | completed
Russian | @Sergio \[Nodes.Guru]  & @passenger | completed
French | @jeremie & @Redallica | [work in progress](https://github.com/eco-translations/eco-translations.github.io/blob/master/doc/fr/status.md)
Portuguese (Portugal) | @Saulo | [work in progress]


# How to suggest a new translation

Are you familiar with GitHub? You can directly submit a pull request this way:

For example, if you want to suggest a translation to [this page](https://support.eco.com/en/articles/4620326-is-my-eco-account-covered-by-the-fdic) in Spanish you can:

- Create an `es` folder at the root of this project
- Create an `articles` folder inside the `es` folder
- Create a `4620326-is-my-eco-account-covered-by-the-fdic` folder  inside `es/articles`
- From your terminal go to the `es/articles/4620326-is-my-eco-account-covered-by-the-fdic` folder and make a copy of the official page with the following command 
  ```bash 
  wget https://support.eco.com/en/articles/4620326-is-my-eco-account-covered-by-the-fdic
  ```
- Rename the downloaded file to `index.html`
- Translate the text inside the `index.html` file
- Submit a pull request so other community members can check and verify your translation
- Once your pull request is approved, the page will be visible at `https://eco-translations.github.io/es/articles/4620326-is-my-eco-account-covered-by-the-fdic`


# How to add the non-official warning disclaimer 

You can copy this line of code and insert it at the end of the `index.html` file you created:
```html
<script src="/website-translations/inject-warning-header.js"></script>
```
