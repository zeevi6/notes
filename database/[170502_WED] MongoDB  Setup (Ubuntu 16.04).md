# MongoDB Setup (Ubuntu 16.04)

#### Step 1 - Adding the MongoDB Repository


Official MongoDB repo 키 등록

```
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

--- result ---
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
```

Update 리스트 생성

```
$ echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
```

Update

```
$ sudo apt-get update
```

---


#### Step 2 - Installing and Verifying MongoDB


Latest stable version 패키지 설치

```
$ sudo apt-get install -y mongodb-org
```

_etc_systemd/system 에 service configuration 생성

```
$ sudo nano /etc/systemd/system/mongodb.service
```

_etc_systemd_system_mongodb.service

```
[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target
```

Service 시작, 확인

```
$ sudo systemctl start mongodb
$ sudo systemctl status mongodb
● mongodb.service - High-performance, schema-free document-oriented database
   Loaded: loaded (/etc/systemd/system/mongodb.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2016-04-25 14:57:20 EDT; 1min 30s ago
 Main PID: 4093 (mongod)
    Tasks: 16 (limit: 512)
   Memory: 47.1M
      CPU: 1.224s
   CGroup: /system.slice/mongodb.service
           └─4093 /usr/bin/mongod --quiet --config /etc/mongod.conf
```

시스템 시작 시 MongoDB 시작하기

```
$ sudo systemctl enable mongodb
```

접속

```
$ mongo
MongoDB shell version: 3.2.13
connecting to: test
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	http://docs.mongodb.org/
Questions? Try the support group
	http://groups.google.com/group/mongodb-user
```
