#SERVER
import os
import socket

s = socket.socket()
host = socket.gethostname()
port = 8000
s.bind((host, port))
print("Server started at: ", host)
s.listen(1)
conn,addr = s.accept()
print(addr, "connected")


# #CLIENT
# import os
# import socket

# s = socket.socket()
# port = 8000
# host = "YOUR DESKTOP ID" '(Your server should say it. I.E. "Server started at: (Desktop-123456)")'