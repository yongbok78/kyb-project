# Client

## Apollo Angular 설정 정보
angular.json 파일에 아래내용 추가
~~~json
    "build": {
        "builder": "@angular-devkit/build-angular:browser",
        "options": {
        "allowedCommonJsDependencies": [ <--- 추가
            "graphql-tag", "zen-observable"
        ],
        ...
~~~