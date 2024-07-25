---
title: 20시간 안에 Nextjs 공식문서 전부 번역하기
description: 왜 해커톤을 하고 있는거야
date: 2024-07-26
tags:
  - nextjs
  - opensource
---
## 왜 해커톤을 하고 있는거야 ...

![](https://velog.velcdn.com/images/luciancah/post/84cb0d63-0f22-45db-87d3-cdfd552320bb/image.png)

주말간 나 혼자만의 해커톤을 하나 진행했다. 사실 나랑 지피티 둘이 했다고 하는게 맞을 것 같기도 함 ...

이것저것 하면서 문서를 찾아보고 있는데, 넥스트는 한국어 번역 문서가 없다는 사실을 발견했다. (비공식도!)

사실 리액트나 뷰나 쿼리나 아스트로나 타입스크립트나 mdn이나 웹을 처음 접할때... 한국어로 번역된 공식문서가 정말 많이 도움이 됐었고, 다른 사람들도 그랬으리라는 생각에 내가 만들어보자 했음

## 진짜 없나?

한국어로 번역하려는 시도가 있긴 했었다. 

[Nextjs.kr](https://github.com/Nextjs-kr/Nextjs.kr) 이라는 레포에서, 23년 6월부터 무려 146명의 컨트리뷰션을 받은 프로젝트가 진행되었던 것으로 보이는데, 23년 7월부터 [임시 중단](https://github.com/Nextjs-kr/Nextjs.kr/issues/1#issuecomment-1623078326) 선언이 있었고, 작년 10월을 마지막으로 프로젝트가 멈춘 것을 확인했다.

정말 많은 부분 (거의 70% 정도로 보임) 번역이 완료되었고, 해당 프로젝트를 놔두고 나 혼자 처음부터 다시 시작하기에는
- 문서의 양이 진짜 정말 턱없이 많았고
- 이미 프로젝트에 기여하신 컨트리뷰터들에게 예의가 아니라고 생각해

포크를 통해서 진행해볼 방법을 고민해봤지만,
- 이미 프로젝트가 기반으로 삼고 있는 시점부터 버셀 릴리즈가 **700개**(진짜임) 가 나왔고
- 커밋 히스토리를 비교해서 diff를 만들고 문서를 수정하는게 시간이 더 걸릴것 같아


결국 처음부터 시작하기로 했다.

## 근데 번역을 사람이 할 필요는 없잖아

애초에 내가 할 생각은 없었다. 지피티 선생님을 믿고 있기도 했고, Deepl이 그렇게 좋다길래 deepl + 용어집을 써볼 생각으로 결제도 했다.

### 근데 믿었던 deepl이 배신했음

![](https://velog.velcdn.com/images/luciancah/post/72a22d1f-898a-4d72-99cd-e06e66ea3855/image.png)

왼쪽 결과가 GPT 프롬프팅, 오른쪽 결과가 deepl에 React, Next.js등 이것저것 개발 용어 용어집을 추가한 결과인데,

다른건 참아도 `대화형, 동적, 빠른 React 애플리케이션` 은 참을 수 없었다.

### 어차피 믿을 건 GPT

결국 지피티 선생님과 협업을 결정했다.

[지피티가 점점 게을러지고 있다](https://www.businessinsider.com/chatgpt-accused-of-getting-lazier-2023-12)는 이슈가 많기도 했고, 기존에 지피티를 사용해서 영문 아티클을 번역할때, 문서 후반부에 가면 마음대로 축약해서 이상한 길로 가버리는 것을 인지하고 있었기 때문에 프롬프팅에 시행착오를 겪었다.

그래서 결국 나온 답은 ..

```
nextjs 공식문서 번역을 요청할거야. 주의사항이 있는데,

1. 마크다운 파일 그대로 사용할거니까 영어에서 한국어로 번역하되, 마크다운 문법은 번역하지 않도록 조심해줘.
2. App Router 같은 개발 단어들은 번역하지 않고 원문 그대로 유지해줘.
3. 공식문서 이니까 문장을 추가하거나 제거하지 말고 "있는 그대로" 번역해줘.
4. 마크다운 제목 (#, ##, ###) 은 번역하지 말고 영어 그대로 써줘, 다른 모든 body 글들은 번역해주면 돼
5. 원문 영어와 번역을 같이 제공할 필요없어. 원문은 제공하지 마

이해했는지 대답해주고 다음에 내가 보낸 문서부터 새로 번역할 준비 해줘
```

하나하나 프롬프트를 넣게 된 계기에 대해 설명해보면

1. 지피티도 결국 아웃풋을 마크다운 문법으로 내기 때문에 이상한 노력을 해서 마음대로 문서의 형식을 바꾸는 경우가 있었다.
2. 이건 사실 ko.react.dev의 [용어집](https://github.com/reactjs/ko.react.dev/wiki/Translate-Glossary)을 전부 넣어서 GPTs로 만들어버리고 싶었지만, 문서 자체가 길다보니까 토큰을 아끼느라 그렇게 하지 못했고
3. 번역 프로젝트의 성격상 문서의 정확성을 유지하는 것이 중요했다.
4. 사실 개선할 부분이긴 한데, 문서 내부에 링크가 걸려있는 부분이 url hash까지 포함한 부분이 많아서 일단 영어 원문 그대로 heading을 유지하기로 결정했다.
5. llm이 문서를 읽는 특성 때문에 그런건지 모르겠지만 일단 영어를 다 뱉고 한국어로 번역을 덧대는 경우가 있어서.. 쉽고 빠른 진행을 위해 제발 쓰지 말아달라고 부탁한 느낌

### 노가다 시작

그럼 이렇게 잘 해준다.

![](https://velog.velcdn.com/images/luciancah/post/22644cf6-7ce8-4348-883b-0b83972384e2/image.png)

근데 이렇게 할 때도 있음.

![](https://velog.velcdn.com/images/luciancah/post/b26df20b-1e2a-4091-be5a-6fd91b68e234/image.png)

그래서 이런 협박을 거쳐 원만한 합의를 통해 10시간쯤 노가다를 진행했다.
중간에 현타도 왔는데 .. 이 참에 겸사겸사 문서도 읽고 좋지 뭐 .. 라고 열심히 생각했음

![](https://velog.velcdn.com/images/luciancah/post/7c898a34-38b4-4fc9-a5ef-ebdfaaf2f37d/image.jpg)

## 배포할시간

버셀 템플릿 통하면 웹사이트 하나 클론해서 배포하는건 ['딸깍'](https://blog.luciancah.com/blog/00-developer-blog-101) 으로 이루어 지는 걸 한번 해봐서.. 지쳐 죽겠는데 웹사이트를 처음부터 만들고 싶진 않았다. mvp 느낌이기도 하고

### Nextra docs

[nextra](https://github.com/shuding/nextra) 라는 docs향 ssg 프레임워크를 찾았고, next 13 위에 템플릿이 올려져 있길래 지금 배포하는 수준에서는 전혀 문제될게 없겠다 - 싶어 빠르게 진행했다.

### 또 노가다

해결할 사항이 두개가 있었는데, 하나는 네비게이션 순서를 관리하는 `_meta.json` 이었고, 하나는 pages router 기반이다 보니 기존 docs에서 폴더 순서를 지키기 위해 `01-` 등의 prefix를 넣어둔 것들을 제거해 줘야했다.

### 내가 코딩하냐? AI쓰지


메타는 코파일럿으로 했고

![](https://velog.velcdn.com/images/luciancah/post/33141d79-8035-4011-b255-3f3c3bd9c845/image.png)

파일 제거는 우리 지선생님께서 해주셨다.

![](https://velog.velcdn.com/images/luciancah/post/4b580c20-5521-4bb3-84fa-40c6604094dc/image.png)

### SEO 세팅도 했다.

메타 같은 자질구레한 것들은 nextra에서 쉽게 관리해줘서, robot.txt만 간단하게 만들고, 구글 웹마스터랑 네이버에 등록만 하면 됐다.

## 근데 앞으로는 ...

초안을 다 번역한다고 해도, nextjs 까나리 브랜치는 거의 매일 머지가 발생하고, 배포도 1주단위로 일어나기 때문에 계속 업데이트할 방안을 강구해야 했다.

### 이것도 직접 할순 없으니까

간단하게

`vercel/nextjs` 의 `canary` 브랜치의 `docs` 폴더를 받아와서, `luciancah/nextjs-ko`의 `docs-update` 브랜치의 `origin/canary/docs` 폴더와 diff를 확인하고, 변경 사항이 있으면 푸시하고 이슈 만드는 액션을 하나 짰다.

```yaml
name: Sync Next.js docs to Korean repo

on:
  schedule:
    - cron: '0 0 * * *' # Runs at 00:00 UTC every day
  workflow_dispatch: # Allows manual triggering

jobs:
  sync-docs:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Next.js
        uses: actions/checkout@v2
        with:
          repository: vercel/next.js
          ref: canary
          path: next-js
          sparse-checkout: |
            docs
      - name: Checkout Korean repo
        uses: actions/checkout@v2
        with:
          repository: luciancah/nextjs-ko
          token: ${{ secrets.ACTION_PAT }}
          path: nextjs-ko
          ref: main

      - name: Configure Git
        run: |
          git config --global user.name github-actions
          git config --global user.email github-actions@github.com
      - name: Sync and check differences
        id: sync
        run: |
          # Ensure target directory exists
          mkdir -p nextjs-ko/origin/canary/docs
          # Use rsync to sync files and track changes
          changes=$(rsync -avrc --delete --out-format="%n" next-js/docs/ nextjs-ko/origin/canary/docs/ | grep -v "/$" || true)
          # If there are changes, commit and push to docs-update branch
          if [ ! -z "$changes" ]; then
            cd nextjs-ko
            git checkout -B docs-update
            git add origin/canary/docs
            git commit -m "Sync docs from Next.js
          Changes:
          $changes"
            git push -f origin docs-update
            echo "has_changes=true" >> $GITHUB_OUTPUT
            echo 'changes<<EOF' >> $GITHUB_OUTPUT
            echo "$changes" >> $GITHUB_OUTPUT
            echo 'EOF' >> $GITHUB_OUTPUT
          else
            echo "No changes detected"
            echo "has_changes=false" >> $GITHUB_OUTPUT
          fi
      - name: Create issue for new changes
        if: steps.sync.outputs.has_changes == 'true'
        uses: actions/github-script@v6
        with:
          github-token: ${{secrets.ACTION_PAT}}
          script: |
            const changes = `${{ steps.sync.outputs.changes }}`.split('\n').filter(Boolean);
            await github.rest.issues.create({
              owner: 'luciancah',
              repo: 'nextjs-ko',
              title: 'vercel/next.js canary 문서에 업데이트 사항이 있습니다.',
              body: `The following files have been updated in the Next.js docs:
            ${changes.map(file => `- ${file}`).join('\n')}
            Please review these changes and update the Korean translation accordingly.
            The changes have been pushed to the \`docs-update\` branch.`
            });
```

대충 이럼...

원래는 매일 돌릴려고 했는데, 매일 돌리니까 매일 업데이트가 나오는 것 같아서 2주나 1달 단위로 업데이트 및 작업 하려구 한다.

### 근데 아무리 생각해봐도 혼자서는 못할 것 같아

**그래서 컨트리뷰터 선생님들 찾습니다 !! ㅜㅠ 제발 도와주세요**

오픈소스 컨트리뷰팅은 물론이고 메인테인에 대한 경험도 사실 전무했기 때문에, 다른 사람들을 받으려면 어떻게 해야할지 혼란 그 자체였다.

다른 오픈소스들을 열심히!! 참고해서

1. 기여 가이드
2. PR 템플릿이나 이슈 템플릿
3. 허스키 / 커밋린트, prettier 액션
4. 용어집, 어투 가이드
5. 컨트리뷰터 리드미에 추가하기 !!

등 생각할 수 있는 협업 기초 세팅 정도를 .. 했다.


최근 오픈소스 관련 활동을 활발히 하신 분과 대화를 나눌 기회가 있었기도 했고, 오픈소스 프로젝트를 메인테이닝 할때 메인테이너가 강하게 리드 해야할지 / 아니면 커뮤니티가 자생하기를 기다릴지 두 가지에 대한 고민 하는 시간을 꽤나 많이 가졌다.

프로젝트가 이제 시작 단계이기도 하고 .. 조금 뚜렷한 로드맵이 있어야 컨트리뷰션이 모일 것이라고 생각하여

`1단계`: 문서 100% 번역
`2단계`: 용어집에 맞는 어휘 수정 및 heading 한국어로 되어 있는 부분 변경

후 프로젝트가 조금 안정되고 나면

`3단계`: 액션 통해 주기적으로 문서 업데이트 및 Vercel에서 정식 릴리즈 나올 때 스냅샷 만들어 문서 버저닝
`4단계`: [nextjs.org/docs](https://nextjs.org/docs) 과 100% 일치하는 웹사이트 만들기

를 거쳐 리액트나 뷰의 사례처럼 공식 한글번역으로 들어가는 것을 목표로 잡았다.

## 정말 도와주세요 ㅠㅠ!!

남은 컨트리뷰션 항목이 많습니다ㅎㅎ!! 사실 문서 번역 외에도, 어투 수정 등 많은 부분에서 도움이 필요하지만, 재미있는 부분을 제가 다 하는 것 같아 Pages Router 부분에 35개 가량 번역할 문서를 ~~남겨놨습니다~~.

문서 하나하나의 길이가 짧고, 지피티를 이용해서 초안 생성 후 조금의 수정을 거치면 10분 안에도 기여가 가능합니다. (오늘이 저점매수의 기회입니다.)

[기여 가이드](https://nextjs-ko.org/contribution)

[최우선 과제(재밌고 빨리 끝남)](https://github.com/luciancah/nextjs-ko/issues/6)

[배포된 웹사이트](https://nextjs-ko.org/docs)


오늘 탑승하시면 빠르고 재밌게 저점매수 기여하실 수 있습니다.

같이 재밌는 프로젝트 만들어 봤으면 좋겠어요 !!