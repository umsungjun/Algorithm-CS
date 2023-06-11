# Algorithm & CS 지식을 쌓자

## 진행 기간: 2023년 6월 1일 → Ing

## 무슨 일이 있어도 하루 한문제는 풀고 CS지식을 정리하자!

## 비트

- 정보를 저장하고 연산을 수행하기 위해 컴퓨터는 비트(bit)라는 측정 단위를 씀
- 비트는 이진 숫자라는 뜻을 가진 'binary digit'의 줄임말임
- 0과 1, 두 가지 값만 가질 수 있는 측정 단위

## 비트열

- 여러 숫자 조합을 컴퓨터에 나타내기 위해 비트열을 사용함
- 바이트(byte)는 여덟 개의 비트가 모여 만들어진 것

<img src="https://cphinf.pstatic.net/mooc/20170712_75/1499826291828lfvjK_PNG/1.1_-03.png?type=w760">

## 브라운저 렌더링 원리

웹 브라우저에서 웹 페이지를 로드할 때, 브라우저는 서버로부터 HTML 파일과 CSS 파일을 다운로드합니다. HTML 파일은 브라우저에서 파싱되어 Document Object Model (DOM)으로 변환됩니다. DOM은 웹 페이지의 구조를 표현하는 트리 구조입니다.

CSS 파일은 브라우저에서 파싱되어 CSS Object Model (CSSOM)으로 변환됩니다. CSSOM은 CSS 규칙과 스타일 정보를 나타내는 객체 모델입니다. 이 모델은 웹 페이지의 요소에 적용되는 스타일을 계산하고 적용하는 데 사용됩니다.

HTML과 CSS 파일이 파싱되고 DOM과 CSSOM으로 변환되면, 브라우저는 DOM과 CSSOM을 결합하여 렌더 트리(Render Tree)를 생성합니다. 렌더 트리는 화면에 실제로 표시되는 요소들을 포함한 최종 레이아웃을 나타냅니다.

렌더 트리가 생성되면 브라우저는 렌더 트리를 사용하여 요소들의 위치와 스타일을 계산하고 화면에 그려줍니다. 이 과정을 통해 HTML과 CSS를 기반으로 웹 페이지가 시각적으로 표현되는 것입니다.

## 'getStaticProps'와 'getServerSideProps'의 차이
- getStaticProps: 이 메서드는 정적 생성(Static Generation)을 사용하는 페이지에 사용됩니다. 정적 생성은 빌드 시점에 페이지를 렌더링하고 미리 생성된 HTML 파일을 제공하는 방식입니다. 이렇게 생성된 페이지는 정적인 상태로 유지되며, 서버에 요청이 발생하지 않습니다. getStaticProps를 사용하여 데이터를 가져오면, 빌드 시점에 한 번 호출되며 데이터가 페이지에 미리 로드됩니다. 그러나 이미지와 같은 동적인 요소의 경우, 빌드 시점에서 로드할 데이터가 없어 문제가 발생할 수 있습니다.

- getServerSideProps: 이 메서드는 서버 측 렌더링(Server-Side Rendering, SSR)을 사용하는 페이지에 사용됩니다. SSR은 클라이언트 요청이 있을 때마다 서버에서 페이지를 렌더링하고 HTML을 동적으로 생성하여 제공하는 방식입니다. getServerSideProps를 사용하여 데이터를 가져오면, 각 요청마다 호출되며 최신 데이터를 사용하여 페이지를 렌더링합니다. 따라서 이미지와 같은 동적인 요소도 정상적으로 로드됩니다.

## 정적 요소(Static Elements) & 동적 요소(Dynamic Elements)

정적 요소(Static Elements):

- 텍스트: 사이트의 로고, 제목, 설명 등과 같은 고정된 텍스트 요소는 정적 요소입니다. 이러한 요소는 변경되지 않고 페이지를 로드할 때 항상 동일하게 표시됩니다.
- 이미지: 사이트 로고, 배경 이미지, 아이콘 등과 같은 이미지 요소도 정적 요소입니다. 한 번 업로드되면 변경되지 않고 고정된 이미지로 사용됩니다.
- CSS 스타일: 사이트의 스타일 시트, 디자인, 레이아웃 등과 같은 CSS는 정적 요소입니다. 이러한 요소는 페이지 로드 시 고정되어 동일한 스타일이 적용됩니다.

동적 요소(Dynamic Elements):

- 사용자 정보: 로그인 상태, 사용자 이름, 프로필 사진 등과 같은 사용자 정보는 동적 요소입니다. 사용자가 로그인한 후에만 표시되며, 로그인 상태에 따라 변경됩니다.
- 실시간 데이터: 주식 시세, 날씨 정보, 뉴스 피드 등과 같은 실시간으로 업데이트되는 데이터는 동적 요소입니다. 이러한 데이터는 서버에서 가져와서 페이지를 동적으로 업데이트합니다.
- 사용자 입력: 검색어 입력, 폼 작성 등과 같은 사용자 입력은 동적 요소입니다. 사용자가 입력한 내용에 따라 페이지가 동적으로 반응하고 업데이트됩니다.