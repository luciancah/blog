---
title: Vercel로 나만의 블로그 뚝딱 만들기
description: "'딸깍' 블로그 5분 완성"
date: 2024-07-13
---

---

![](https://i.imgur.com/8nYIswm.jpeg)

*5분 완성 시켜드립니다.*

---
## 나만의 블로그를 만들고 싶다! 근데 흔한건 싫어..

쉬운거 좋아하고 귀찮은거 싫어하는데 있어보이는건 좋아하는 개발자 여러분, 버셀 좋아하시죠?  저도 그렇습니다.  
지금 보고 계시는 블로그도 벨로그 가입하는 속도보다 빠르게 만들 수 있습니다.  
(사실상) 노코드로 블로그 제작 - 배포 - DNS 연결 - 애널리틱스 - SEO 설정까지 한큐에  
레츠고.

---
## 쇼핑 합시다

![](https://i.imgur.com/CSYbslJ.jpeg)

[여기](https://vercel.com/templates/blog) 버셀 웹사이트에 블로그 가판대가 있습니다. 오늘은 노코드 데이니까 쇼핑하듯 하나 골라 보겠습니다.

---
## 딸깍

![](https://i.imgur.com/VEVCbri.jpeg)

골랐나요? 전 골랐습니다. Deploy 누르면 배포가 됩니다.

![](https://i.imgur.com/mXk8FYG.png)

진짜 됩니다. 깃허브 계정 연결 후 레포도 만들어줍니다.

![](https://i.imgur.com/FLayyeQ.png)

진짜 다 됐음... '나도 개발자요' 희열 느낄 시간입니다.

---
## 내 도메인이 있으면 .. 좋겠네

블로그는 내껀데 주소는 vercel.app 쓰고 있으면 조금.. 뭔가.. 뭔가임  
인터넷 주소 파는곳 아무데나 가서 도메인 하나 사오면 됩니다.

![](https://i.imgur.com/iLZju7m.png)

대충 아무데서나 사면 됩니다. 고대디 '다이나믹 프라이싱' 하는거 짜증나서 가비아에서 샀습니다.  
여러분은 아무데서나 사세요 내돈내산임

![](https://i.imgur.com/ar0pltb.png)

버셀의 프로젝트 페이지 - Settings - Domains 들어가서 방금 산 내 도메인을 추가해 줍니다.  
저는 도메인 루트는 다른 용도로 쓸거라 서브도메인에 블로그를 먹였습니다.  
에러가 뜰텐데 .. 정상입니다. 걱정ㄴㄴ

![](https://i.imgur.com/pMSnxcf.jpeg)

위에서 시키는 대로 레코드 타입에 `cname`, 호스트에 `서브도메인 이름 (그냥 도메인 쓸거면 @)`, 값에 `cname.vercel-dns.com.` 넣어주세요. 뒤에 점 잊지 말기  
그러고 등록하면 .. 됩니다. 이제 내 도메인으로 블로그 들어가서 '나도 개발자요 2' 시간 즐기십쇼

---
## 그래서 내가 뭘 쓰면 누가 봐?

제 블로그는 아직 아무도 안보는데요,  
버셀에서는 애널리틱스도 공짜로 줍니다 ....... 돈 내고 쓰기 전까지는 참 착한 버셀  

![](https://i.imgur.com/ieQkWWR.png)

킵니다. 한 달에 2500 이벤트까지 무료인데 제 블로그가 2500 이벤트 이상 일어날리 만무하니 충분합니다.  
만에 하나 넘어도 추가 과금은 없습니다.

지금 쓰고있는 `Astro` 프레임워크는 기본적으로 SSG 모드로 동작합니다. SSR 모드로 사용해도 .. 뭐 .. 아마 .. 될거임

```bash
npm install @vercel/analytics
```

깔아줍니다.

`Layout.astro` 파일을 찾아서 버셀 애널리틱스 스크립트를 심어줍니다. 스크립트 .. 를 심는게 무겁지 않냐? 1.1kB 정도라고 합니다. 대한민국 표준 통신요금제로 따지면 0.31원 정도 됩니다.

```html
<!doctype html>
<html lang="en">
<script>
	import { inject } from "@vercel/analytics";
	inject();
</script>
<Head title={`${title} | ${SITE.TITLE}`} description={description} />
<body>
	<Header />
	... 코드들 ...
```

대충 위에 심으면 됩니다.

![](https://i.imgur.com/KNGoT8x.png)

하고 배포하면 짜잔 ~  끝났습니다.

---
## 내꺼 만들기

버셀에서 배포를 버튼 하나만 눌러서 했기 때문에, 지금 사이트의 메타데이터가 클론해온 템플릿 바탕으로 되어 있습니다. 이제 내 블로그로 만드는 과정입니다.

### 댓글 달아주십쇼

지금 사용하고 있는 Astro Micro 템플릿은 giscus 댓글 시스템을 기본으로 탑재하고 있습니다.  
이제 생판 모르는 외국인한테 댓글 달리지 않도록 giscus에서 스크립트를 받아오면 됩니다.

[giscus](https://giscus.app/ko) <- 여기 접속합니다.

![](https://i.imgur.com/W3gahHu.png)

1. 레포지토리를 public으로 전환하고 (버셀에서 클론하면 기본이 private)
2. [여기](https://github.com/apps/giscus) 접속해서 내 깃 레포에 giscus를 설치하고
3. 레포 - settings - 기능 - 토론을 활성화합니다. [모르겠다면](https://docs.github.com/ko/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)

페이지 연결은 사진에 나와있는 첫번째 옵션을 권장합니다. 어차피 평소에 discussions 안 만드는 레포면 저렇게 두십쇼 ... 게시글 제목에 맞게 자동생성 됩니다.

`Giscus.astro` 파일을 찾아서 내 스크립트로 바꿔치기 해줍니다.

```html
<div class="giscus"></div>
<script
	src="https://giscus.app/client.js"
	data-repo="대충"
	data-repo-id="내 레포"
	data-category="Announcements"
	data-category-id="입니다"
	data-mapping="pathname"
	data-strict="0"
	data-reactions-enabled="1"
	data-emit-metadata="0"
	data-input-position="bottom"
	data-theme="preferred_color_scheme"
	data-lang="ko"
	crossorigin="anonymous"
	async></script>
```

### 메타데이터 바꾸기

`src/consts.ts` 파일을 찾아서 내 블로그 이름에 맞게 수정해줍니다.  
이 템플릿에서는 다른 파일에서도 여기 상수를 참고하고 있기 때문에 여기 하나만 바꾸면 됩니더.

```typescript
export const SITE: Site = {
  NAME: "블로그 이름",
  DESCRIPTION: "블로그 설명",
  EMAIL: "이메일",
  NUM_POSTS_ON_HOMEPAGE: 메인페이지에 블로그 글 몇개 보여줄건지,
  NUM_PROJECTS_ON_HOMEPAGE: 메인페이지에 프로젝트 글 몇개 보여줄건지,
};
```

---
## 구글아 이 글을 ... 찾아줘
seo 좋아하시죠? 저도 그렇습니다.

### robots.txt 추가하기
`astro` 에서 정적 파일 배포하기 쉽습니다. `robots.txt`는 루트 바로 밑에 두기로 약속했기 때문에  
`src/pages/robots.txt.js` 파일 만들어 줍니다.

```javascript
export async function GET({ params, request }) {
  return new Response(
    `User-agent: *
Disallow:
Sitemap: https://blog.luciancah.com/sitemap-index.xml`,
    {
      headers: {
        "content-type": "text/plain",
      },
    },
  );
}
```

### 사이트맵 자동생성 최고
`astro` 자체가 정적 페이지 최고를 표방하고 있기 때문에 (실제로 한 말), sitemap 도 자체 생성해줍니다.  
`/astro.config.mjs` 찾아서 내 페이지 주소만 바꿔줍니다.
```javascript
export default defineConfig({
  site: "https://blog.luciancah.com",
  integrations: [tailwind(), sitemap(), mdx(), pagefind()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
```

### 구글아 진짜 찾아줘...
이제 구글한테 떠먹여줄 차례입니다. [구글 웹마스터 도구]([https://search.google.com/search-console/about?hl=ko](https://search.google.com/search-console/about?hl=ko)) <- 레츠고  

![](https://i.imgur.com/ph60ksB.png)

도메인을 샀으니까 왼쪽 도메인에 블로그 링크 입력해 주겠습니다.  

![](https://i.imgur.com/pMSnxcf.jpeg)

내가 이 도메인의 실 소유주인지 확인이 필요합니다. TXT 레코드에 구글에서 주는 값을 추가하면 등록 완료입니다. 보통 구글이 색인 생성하는데 이틀 정도 걸립니다.

---

## 진짜 끝

이 과정을 통해서 코드 한줄 안짜고 CI/CD, DNS, 애널리틱스, SEO, 정적 페이지 배포 뭐 좋아 보이는건 다 했습니다.  
여러분도 여러분의 블로그 만들어 보세요.

그리고 댓글 한번 써봐주세요 ㅈㅂ 저도 아직 되는지 모름...