# 🌱 프리온보딩 프론트엔드 과제 Week 3 TEAM 16

wanted 프리온보딩 3주차 과제입니다 🔥

## 배포 페이지

🎉 Team16 배포 링크 👇

https://wanted-pre-onboarding-11th-16-3.vercel.app/

## 🛠️ 사용 라이브러리

- formatter : Eslint, Prettier
- API : Axios
- Style : Emotion

## 디렉토리 구조

```
📦 src
    +---apis
    |       index.ts
    |       issues.ts
    +---components
    |   +---common
    |   |   +---Header
    |   |   +---Layout
    |   |   \---Loader
    |   \---main
    |       +---Ad
    |       +---IssueItem
    |       \---IssueList
    +---constants
    |       img.ts
    |       issue.ts
    |       path.ts
    |       repo.ts
    +---context
    |       detailContext.tsx
    |       IssuesContext.tsx
    +---hooks
    |       useInfiniteScroll.tsx
    +---pages
    |   +---detail
    |   \---main
    +---types
    |       issue.ts
    |---utils
    |       parseDate.ts
    |
    |   App.tsx
    |   index.tsx
    \   Router.tsx
```

- **component**와 **api**의 기능을 분리하여 각각의 `역할`과 `책임`을 명확하게 할당하고 재사용성을 향상시키려 했습니다.
- **constants** : 협업시 필요한 `일관된 규칙과 구조`를 유지하기 용이하게 하였습니다.
- **context**: 전역 상태 관리와 여러 컴포넌트에서 데이터를 쉽게 `전달`하도록 만들었습니다.
- **hooks** & **util** : 로직을 추상화하여 `재사용 가능한 한형태`로 분리하여 개발 `생산성 향상`시켰습니다.

## 🗣️ Best Practice 선정 과정(종합 의견)

### Redux vs ContextAPI

- 리덕스를 사용하면 상태 관리가 한 곳에서 일어나므로 좀 더 명확하게 구조와 유지보수를 할 수 있는 장점이 있지만, 규모가 작은 프로젝트에서는 개발과 세팅이 복잡하고 액션, 리듀서, 상태 업데이트 등 관련 코드를 작성해야되기 때문에 오히려 코드가 길어지는 단점이 있다.

- Context는 간단한 상태 관리에 적합하고, 데이터를 쉽게 하위 컴포넌트에 전달하기 때문에 유용하다. 그리고 리덕스 같은 라이브러리를 사용하지 않아도 되므로, 프로젝트가 덜 복잡해지고 사용하기 편리하다. 그러나 프로젝트가 커질수록 상태 관리가 흩어지기 때문에 유지 보수 및 확장성에 약해질 수 있다는 단점이 있다.

- 종합적으로 프로젝트의 크기가 작으므로 context API만을 사용하기로 했습니다.

### Scroll Event vs Intersection Observer

- Intersection Observer 선택 이유는 다음과 같습니다.

- 콜백 함수 사용으로 target이 변경될 때, 비동기적으로 알 수 있기 때문에 효율성 향상

- Scroll Event는 스크롤 위치와 뷰포트를 수동으로 계산한다는 문제가 있기 때문에 Intersection Observer를 사용하여 계산 처리 시간을 감소시킬 수 있어서 성능 최적화를 위해 선택

### axios

- axios는 커스텀 가능한 인스턴스와 인터셉터를 통해 개발자가 요청을 세밀하게 제어하고, JSON 변환이 필요 없어 코드를 간결하게 작성할 수 있으며, 에러 처리가 용이해지는 등의 이점을 제공함.

### emotion

- 스타일링과 관련된 로직을 컴포넌트와 함께 관리할 수 있어 코드의 모듈성과 재사용성을 높여줌.

### react-markdown

- React 애플리케이션에서 마크다운 형식의 텍스트를 쉽게 렌더링하고 표시하기 위해 사용함. 이를 통해 별도의 마크다운 파서를 구현하지 않고도 마크다운 컨텐츠를 간편하게 표시할 수 있음.

### eslint plugin

- `eslint-config-prettier`: eslint의 formatting 기능을 없애준다.
- `eslint-plugin-prettier`: eslint가 prettier 포맷팅 기능을 사용하도록 하는 패키지
- `eslint-plugin-react`: eslint가 react 문법을 알 수 있게 해주는 패키지
- `eslint-plugin-react-hooks`: React의 hook 함수와 관련한 규칙을 강제하는 패키지
- `eslint-import-resolver-typescript`: typescript 환경에서 절대 경로를 사용할 때 eslint가 인식할 수 있도록 하는 패키지
- `eslint-plugin-jsx-a11y`: 웹사이트의 접근성을 높이는 방법을 제공하는 패키지
- `eslint-plugin-import`, `eslint-plugin-simple-import-sort`: import, export 순서를 정렬해주는 패키지
- `@typescript-eslint/eslint-plugin`: typescript가 eslint에서 호환되도록 하는 패키지
- `@typescript-eslint/parser`: typescript를 파싱하도록 도와주는 패키지

---

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/scs0209"><img src="https://github.com/jsdmas/jsdmas.github.io/assets/105098581/e237b4f3-26f3-4a37-8818-86787f5d858b" width="100px" alt=""/><br /><sub><b>🙎🏻‍♂️ FE 팀원 : 창수 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jsdmas"><img src="https://avatars.githubusercontent.com/u/105098581?s=400&v=4" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♂️ FE 팀원 : 진호</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seongminn"><img src="https://github.com/jsdmas/jsdmas.github.io/assets/105098581/3fdd5b88-e4ba-412b-a89e-b71694c153f7" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♂️ FE 팀원 : 성민</b></sub></a><br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/sjerry-kim"><img src="https://github.com/sjerry-kim/Portfolio_Academy_ARCO/assets/112137364/23130bde-b5ff-48c3-bfd9-45a1e8bebe07" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♀️ FE 팀장 : 진혜</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seunghowhite"><img src="https://avatars.githubusercontent.com/u/105100315?v=4" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♂️ FE 팀원 : 승호</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jioneee"><img src="https://github.com/jsdmas/jsdmas.github.io/assets/105098581/11d05a3a-57b2-4ae0-96b3-747b557ff6be" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♀️ FE 팀원 : 지원</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
