# What's 'eco-translations' ?

Eco-translation is a community driven translation proposals for eco.com

# How can I get involve ?

If you are familiar with github, you can directly submit a pull request, if not you can ask on to Jeremie#7539 on the Eco discord server the translation or correction you worked on, and want to push on https://eco-translations.github.io/

# How can I check the status of the translations ?

You can check the status [here](https://github.com/eco-translations/eco-translations.github.io/blob/master/doc/status.md)

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

You can copy this line at the end of the created index.html
```html
<script src="/inject-warning-header.js"></script>
```
