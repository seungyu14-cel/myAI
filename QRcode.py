# 에러 ModuleNotFoundError: No module named 'qrcode'
# C:\dongaAI\day0123> pip install qrcode

# 에러 ModuleNotFoundError: No module named 'cv2'
# 에러 C:\dongaAI\day0123> pip install cv2
# 정답 C:\dongaAI\day0123> pip install opencv-python

# QRcode.py

import qrcode
import cv2

url = 'https://www.google.com'
qr_img = qrcode.make(url)
qr_img.save(stream='./images/gg_QR.png')
print('QRtesting~~~ 저장성공')

img = cv2.imread('./images/gg_QR.png')
cv2.imshow('title', img)
print('QRtesting~~~ 열기성공')
cv2.waitKey(0) #키입력까지 대기 
cv2.destroyAllWindows() #메모리상에 남아있는 cv2관련 창 close()

# 에러 ModuleNotFoundError: No module named 'qrcode'
# C:\dongaAI\day0123> pip install qrcode

# 에러 ModuleNotFoundError: No module named 'cv2'
# 에러 C:\dongaAI\day0123> pip install cv2
# 정답 C:\dongaAI\day0123> pip install opencv-python