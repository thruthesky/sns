파일 및 사진 업로드 개발 가이드:
- 본 문서는 SNS 웹 애플리케이션에서 파일 및 사진 업로드 기능을 구현하는 방법에 대한 가이드입니다.
- 파일 업로드를 구현할 때에는 반드시 아래의 규칙과 예제를 따라야 합니다.




# 개요
- SNS 웹 애플리케이션에서는 사용자가 사진 및 파일을 업로드할 수 있는 기능이 필요합니다.
- 파일 업로드는 Firebase Storage를 사용하여 구현하며, 업로드된 파일의 URL 주소는 Firebase Realtime Database에 저장됩니다.
- 파일 업로드 시에는 반드시 Firebase 보안 규칙을 준수해야 하며, 사용자가 자신의 파일만 업로드 및 접근할 수 있도록 해야 합니다.


# 파일 업로드 구현

- 아래와 같이 Firebase Storage 보안 규칙이 설정되어져 있습니다.
- `/users/{userId}/` 경로에 업로드된 파일은 해당 사용자만 쓰기 권한이 있으며, 모든 사용자가 읽기 권한을 가집니다.
  - 이는 사용자가 자신의 파일을 업로드하고, 다른 사용자는 해당 파일을 읽을 수 있도록 하기 위함입니다.
  - 예를 들어, 프로필 사진은 모든 사용자가 볼 수 있어야 하지만, 사용자는 자신의 프로필 사진만 변경할 수 있어야 합니다.
  - 따라서, 파일 업로드 시에는 반드시 사용자의 UID를 포함한 경로에 업로드해야 합니다.
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
    match /users/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth.uid == userId;
    }
  }
}
```

