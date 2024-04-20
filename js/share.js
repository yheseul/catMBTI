function kakaoShare() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: 'MBTI 유형별 고양이',
      description: '',
      imageUrl:
        '',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://developers.kakao.com',
      },
    },
    itemContent: {
      profileText: 'Kakao',
      profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      titleImageText: 'Cheese cake',
      titleImageCategory: 'Cake',
    },
  
    buttons: [
      {
        title: '친구 MBTI 고양이 짤 확인하러 가기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    ],
  });
}