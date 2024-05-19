# < 고양이 MBTI🐱 >
## 소개
고양이 MBTI는 간단한 MBTI 검사를 통해 유형별 고양이 짤을 확인할 수 있는 재미있는 앱입니다. 

- **배포 URL**: [https://mbtitestcatmeme.netlify.app](https://mbtitestcatmeme.netlify.app)

## 주요 기능
- 간단한 MBTI 검사: 몇 가지 질문을 통해 사용자의 MBTI 유형을 분석합니다.
- 유형별 고양이 짤: 각 MBTI 유형에 따라 재미있는 고양이 짤을 제공합니다.
- 카카오톡 공유하기: 검사 결과를 카카오톡으로 공유할 수 있는 기능 (현재는 보안 문제로 비활성화).

## 기술 스택
- **Vanilla JavaScript**: 앱의 전반적인 기능 구현.
- **HTML/CSS**: 사용자 인터페이스 및 스타일링.
- **Kakao API**: 카카오톡 공유하기 기능 (현재 비활성화).

## 설치 및 실행
1. 리포지토리를 클론합니다.
    ```bash
    git clone https://github.com/yheseul/catMBTI.git
    cd cat-mbti
    ```
2. 로컬 서버를 실행합니다.
    ```bash
    open index.html
    ```
    또는 Live Server를 사용해 브라우저에서 열어볼 수 있습니다.

## 배포
이 프로젝트는 [Netlify](https://www.netlify.com/)를 통해 배포되었습니다.

## 주의 사항
- **API Key 보안**: 현재 Vanilla JavaScript로 구현된 탓에 API Key를 숨기는 좋은 방법을 찾지 못해 카카오톡 공유하기 기능은 유저가 사용할 수 없습니다. 실제 배포 시에는 API Key를 숨기기 위한 방법을 반드시 사용해야 합니다.
- **임의의 API Key 사용**: 깃허브에 커밋된 API Key는 임의의 값으로 설정되었습니다. 실제 API Key는 보안상의 이유로 제공되지 않습니다.
- **API 연결 성공**: 카카오톡 공유하기 기능은 개발 단계에서 API가 성공적으로 연결되어 기능이 정상적으로 작동하는 것을 확인했습니다. 다만, 보안 문제로 인해 현재는 비활성화 상태입니다.

## 후기
이 프로젝트는 제가 처음으로 배포해 본 앱으로, 여러 가지 기술을 적용해보는 좋은 경험이었습니다. 

## 스크린샷
<!-- 앱의 스크린샷을 추가하면 좋습니다 -->
<img width="300" alt="스크린샷 2024-05-19 오후 7 37 39" src="https://github.com/yheseul/catMBTI/assets/111976264/b2c7731e-f7d6-4808-8068-b0f48666caf5">
<img width="300" alt="스크린샷 2024-05-19 오후 7 38 00" src="https://github.com/yheseul/catMBTI/assets/111976264/e766fbbc-71bc-478f-948c-aec9755acce3">
<img width="300" alt="스크린샷 2024-05-19 오후 7 40 40" src="https://github.com/yheseul/catMBTI/assets/111976264/e3d73020-5a47-4c3d-bfee-1804f200a700">

## 기여
버그 제보 및 기능 개선 요청은 [Issues](https://github.com/yheseul/catMBTI/issues)에서 해주세요. PR도 환영합니다!

## 연락처
궁금한 점이 있거나 문의사항이 있으면, [이메일](kangyheseul@gmail.com)로 연락주세요.

---

이 프로젝트를 통해 많이 배우고 성장했습니다. 감사합니다!
