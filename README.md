# What's 'eco-translations' ?

These are community driven translations proposals for https://eco.com
This website as been translated by its community in Russian, Korean and partly in French :

[Korean](https://eco-community.github.io/website-translations/ko/)  
[Russian](https://eco-community.github.io/website-translations/ru/)  
[French](https://eco-community.github.io/website-translations/fr/)  

# How can I get involve?

You find a broken link, or you think there's a better way to translate what you found exploring theses traductions, please let community members know to improve it.

Here's a list of who's managing the current translation

| Languages     | Maintainers (discord name's) | Status  
| ------------- |:-------------:| -----: |
Korean | @billionaireW & passenger | completed
Russian | @Sergio \[Nodes.Guru]  & Sergey (ICO Drops) | completed
French | @jeremie & Redallica | [work in progress](https://github.com/eco-translations/eco-translations.github.io/blob/master/doc/fr/status.md)

You are familiar with github? you can directly submit a pull request.

# How to create a new translation 

if, for example you want to translate [this page](https://support.eco.com/en/articles/4620326-is-my-eco-account-covered-by-the-fdic) in spanish you can : 
- Create a `es` Folder at the root of this project
- Create a `articles` Folder inside the `es` folder
- Create a  `4620326-is-my-eco-account-covered-by-the-fdic` folder  inside `es/articles`
- From your terminal go to `es/articles/4620326-is-my-eco-account-covered-by-the-fdic` Folder and make a copy of the official page with the following command 
  ```bash 
  wget https://support.eco.com/en/articles/4620326-is-my-eco-account-covered-by-the-fdic
  ```
- Rename the downloaded document into `index.html`
- Translate the text inside index.html
- Submit a pull request so other can check and verify your translation
- Once your pull request approved, your this page would be visible at : https://eco-translations.github.io/es/articles/4620326-is-my-eco-account-covered-by-the-fdic


# How to add the non official warning disclaimer 

You can copy this line at the end of the created new index.html
```html
<script src="/website-translations/inject-warning-header.js"></script>
```
