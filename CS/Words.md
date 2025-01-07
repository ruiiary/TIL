## CSR, SSR, SSG, ISR
웹 애플리케이션의 렌더링 방식을 나타내는 용어이다.

### CSR: Client-Side Rending
클라이언트인 브라우저가 렌더링을 처리
- 초기 요청 시에 서버로부터 빈 HTML 파일을 받아오고, 그 이후 클아이언트 측에서 JavaScript를 사용하여 동적으로 컨텐츠를 렌더링하는 방식
- 클라이언트 측에서 JavaScript가 실행되어야 페이지가 완전히 렌더링된다.
- SPA를 구현하는 주요 방법 중 하나이다.
  - *SPA(Single-Page Application): 클라이언트 측에서 동적으로 페이지를 업데이트하는 방식*
  