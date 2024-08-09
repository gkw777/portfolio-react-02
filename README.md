# Parallax Scrolling 만들기

```.dotenv
ver 1.0.1
```

### 폴더 구조

![구조](https://github.com/user-attachments/assets/0b94e3f6-9f15-46c1-95d6-22ecdb561d85)

### 설명

요즘 웹 사이트를 보면 스크롤될때마다 배경이 움직이는 느낌이 들면서 신기하기도 하고 그래서 한번 만들어보면서 좋겠다 생각하여 시작했다.
기술은 '패럴랙스 스크롤링' 이며 스크롤될때 오브젝트와 배경 이미지가 시간차를 두고 변하는 기법을 의미한다.

### 적용 내용

```
- background-attachment: fixed
```

1. [24.08.08] background-attachment 속성은 배경 이미지의 고정 여부를 설정한다. 위 처럼 fixed 로 설정하면 배경이 고정된다. 그래서 배경 위에 텍스트가 있을 때 텍스트가 움직이는 것처럼 느껴지게하는 방법이다. 이 것을 응용하면 다른 오브젝트와 함께 사용하게 되면 좀 더 생동감있게 느껴질 것 같다.
2. [24.08.09] 스크롤 옵져버를 이용한 애니메이션 적용('up', 'down', 'left', 'right' 적용 가능)
   - 화면이 나타날때 텍스트에 애니메이션 효과 적용

### 데모
![패럴랙스 스크롤링](https://github.com/user-attachments/assets/c60effa7-aa0a-41aa-bcdf-2aac28ee44d0)
