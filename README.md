# NgDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Angular Mini-book

https://www.infoq.com/minibooks/angular-mini-book-v2/

```shell
git remote add origin git@github.com:martineez/ng-demo.git
git branch -M main
git push -u origin main
```

add to package.json:
```
    "build:prod": "ng build --configuration production --base-href https://martineez.github.io/ng-demo/",
    "test:headless": "ng test --watch=false --browsers=ChromeHeadless"
```

```shell
mkdir -p .github/workflows
touch .github/workflows/gh-pages.yml
```
