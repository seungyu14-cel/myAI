# 에러 ModuleNotFoundError: No module named 'qrcode'
# C:\dongaAI\day0123> pip install qrcode

# 에러 ModuleNotFoundError: No module named 'cv2'
# 에러 C:\dongaAI\day0123> pip install cv2
# 정답 C:\dongaAI\day0123> pip install opencv-python

# 에러 ModuleNotFoundError: No module named 'faker'
# C:\dongaAI\day0123> pip install faker 

# testfaker.py

import qrcode
import cv2
from faker import Faker

my = Faker()
for k in range(10):
    print(my.name())

print()
for k in range(10):
    print(my.ipv4_private())


print()
for k in range(10):
    print(my.ipv4_private())

data = Faker('ko_KR')
for k in range(20):
    print(data.name())

print()
for k in range(20):
    print(data.address())

# 에러 ModuleNotFoundError: No module named 'faker'
# C:\dongaAI\day0123> pip install faker     

# 에러 ModuleNotFoundError: No module named 'qrcode'
# C:\dongaAI\day0123> pip install qrcode

# 에러 ModuleNotFoundError: No module named 'cv2'
# 에러 C:\dongaAI\day0123> pip install cv2
# 정답 C:\dongaAI\day0123> pip install opencv-python

